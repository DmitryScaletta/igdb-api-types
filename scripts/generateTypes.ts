import type { Endpoint } from "./parseDocs";

const TYPES = {
  String: "string",
  Integer: "number",
  Double: "number",
  uuid: "string",
  datetime: "number",
  bigdecimal: "number",
  "Unix Time Stamp": "number",
  "Array of Strings": "string[]",
  "Array of Integers": "number[]",
  "Array of Tag Numbers": "number[]",
};

const getEnumName = (endpointName: string, enumName: string) => {
  const name = enumName
    .split("_")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");

  return `${endpointName.replaceAll(" ", "")}${name}Enum`;
};

const generateTypes = (api: Endpoint[]) => {
  let result = "";

  for (const endpoint of api) {
    const { id, title, description, requestPath, responseFields, enums } =
      endpoint;

    result += "/**\n";

    if (description) {
      result += ` * ${description}\n`;
      result += " *\n";
    }

    result += ` * ${requestPath}\n`;
    result += ` * @see https://api-docs.igdb.com/#${id}\n`;
    result += " */\n";

    result += `export interface ${title.replaceAll(" ", "")} {\n`;
    result += "  id: number;\n\n";

    const deprecatedEnums: string[] = [];

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

        finalType = `number[] | ${referenceType}[]`;
      }

      if (type.startsWith("Reference ID for ")) {
        const referenceType = type
          .replace("Reference ID for ", "")
          .replaceAll(" ", "");

        finalType = `number | ${referenceType}`;
      }

      // https://api-docs.igdb.com/#search
      if (type === "Reference ID for Test Dummy") {
        finalType = `unknown`;
      }

      if (description) {
        let finalDescription = description;
        if (description.startsWith("DEPRECATED!")) {
          if (finalType.endsWith("Enum")) deprecatedEnums.push(finalType);
          finalDescription = description.replace("DEPRECATED!", "@deprecated");
        }
        result += `  /** ${finalDescription} */\n`;
      }

      result += `  ${name}?: ${finalType};\n\n`;
    }

    result = result.slice(0, -1);

    result += "}\n\n";

    for (const { name, values } of enums) {
      const enumName = getEnumName(title, name);

      if (deprecatedEnums.includes(enumName)) {
        result += `/**\n`;
        result += ` * @deprecated\n`;
        result += ` * @see https://api-docs.igdb.com/#${id}-enums\n`;
        result += ` */\n`;
      } else {
        result += `/** @see https://api-docs.igdb.com/#${id}-enums */\n`;
      }

      result += `export enum ${enumName} {\n`;

      for (const [name, value] of values) {
        result += `  ${name.replaceAll(" ", "_")} = ${value},\n`;
      }

      result += "}\n\n";
    }
  }

  result = result.slice(0, -1);

  return result;
};

export default generateTypes;
