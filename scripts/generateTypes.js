const TYPES = {
  String: "string",
  Integer: "number",
  Double: "number",
  uuid: "string",
  "Unix Time Stamp": "number",
  "Array of Strings": "string[]",
  "Array of Integers": "number[]",
  "Array of Tag Numbers": "number[]",
};

const getEnumName = (endpointName, enumName) => {
  const name = enumName
    .split("_")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");

  return `${endpointName.replaceAll(" ", "")}${name}`;
};

const generateTypes = async (api) => {
  let result = "";

  for (const endpoint of api) {
    const { id, title, description, requestPath, responseFields, enums } =
      endpoint;

    result += "/**\n";

    if (description) {
      result += ` * ${description}\n`;
      result += " *\n";
    }

    result += ` * @endpoint ${requestPath}\n`;
    result += ` * @see https://api-docs.igdb.com/#${id}\n`;
    result += ` */\n`;

    result += `export interface ${title.replaceAll(" ", "")} {\n`;

    for (const [name, type, description] of responseFields) {
      let finalType = TYPES[type] || type.replaceAll(" ", "");

      if (type.endsWith(" Enum")) {
        finalType = getEnumName(
          title,
          type.replace(" Enum", "").replaceAll(" ", "")
        );
      }

      if (type.startsWith("Array of ") && type.endsWith(" IDs")) {
        const referenceType = type
          .replace("Array of ", "")
          .replace(" IDs", "")
          .replaceAll(" ", "");

        finalType = `number[] | Partial<${referenceType}>[]`;
      }

      if (type.startsWith("Reference ID for ")) {
        const referenceType = type
          .replace("Reference ID for ", "")
          .replaceAll(" ", "");

        finalType = `number | Partial<${referenceType}>`;
      }

      // https://api-docs.igdb.com/#search
      if (type === "Reference ID for Test Dummy") {
        finalType = `unknown`;
      }

      if (description) {
        result += `  /** ${description} */\n`;
      }

      result += `  ${name}: ${finalType};\n\n`;
    }

    result = result.slice(0, -1);

    result += "}\n\n";

    for (const { name, values } of enums) {
      result += `/** @see https://api-docs.igdb.com/#${id}-enums */\n`;
      result += `export enum ${getEnumName(title, name)} {\n`;

      for (const [name, value] of values) {
        result += `  ${name} = ${value},\n`;
      }

      result += "}\n\n";
    }
  }

  result = result.slice(0, -1);

  return result;
};

export default generateTypes;
