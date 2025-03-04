/**
 * Age Rating according to various rating organisations
 *
 * https://api.igdb.com/v4/age_ratings
 * @see https://api-docs.igdb.com/#age-rating
 */
export interface AgeRating {
  id: number;

  /** @deprecated Use organization instead */
  category?: AgeRatingCategoryEnum;

  /** Hash of the object */
  checksum?: string;

  content_descriptions?: number[] | AgeRatingContentDescription[];

  /** The organization that has issued a specific rating */
  organization?: number | AgeRatingOrganization;

  /** @deprecated Use rating_category instead */
  rating?: AgeRatingRatingEnum;

  /** The category of a rating */
  rating_category?: number | AgeRatingCategory;

  /** The rating content descriptions */
  rating_content_descriptions?: number[] | AgeRatingContentDescriptionV2[];

  /** The url for  the image of a age rating */
  rating_cover_url?: string;

  /** A free text motivating a rating */
  synopsis?: string;
}

/**
 * @deprecated
 * @see https://api-docs.igdb.com/#age-rating-enums
 */
export enum AgeRatingCategoryEnum {
  ESRB = 1,
  PEGI = 2,
  CERO = 3,
  USK = 4,
  GRAC = 5,
  CLASS_IND = 6,
  ACB = 7,
}

/**
 * @deprecated
 * @see https://api-docs.igdb.com/#age-rating-enums
 */
export enum AgeRatingRatingEnum {
  Three = 1,
  Seven = 2,
  Twelve = 3,
  Sixteen = 4,
  Eighteen = 5,
  RP = 6,
  EC = 7,
  E = 8,
  E10 = 9,
  T = 10,
  M = 11,
  AO = 12,
  CERO_A = 13,
  CERO_B = 14,
  CERO_C = 15,
  CERO_D = 16,
  CERO_Z = 17,
  USK_0 = 18,
  USK_6 = 19,
  USK_12 = 20,
  USK_16 = 21,
  USK_18 = 22,
  GRAC_ALL = 23,
  GRAC_Twelve = 24,
  GRAC_Fifteen = 25,
  GRAC_Eighteen = 26,
  GRAC_TESTING = 27,
  CLASS_IND_L = 28,
  CLASS_IND_Ten = 29,
  CLASS_IND_Twelve = 30,
  CLASS_IND_Fourteen = 31,
  CLASS_IND_Sixteen = 32,
  CLASS_IND_Eighteen = 33,
  ACB_G = 34,
  ACB_PG = 35,
  ACB_M = 36,
  ACB_MA15 = 37,
  ACB_R18 = 38,
  ACB_RC = 39,
}

/**
 * The rating category from the organization
 *
 * https://api.igdb.com/v4/age_rating_categories
 * @see https://api-docs.igdb.com/#age-rating-category
 */
export interface AgeRatingCategory {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** The rating organization */
  organization?: number | AgeRatingOrganization;

  /** The rating name */
  rating?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * DEPRECATED! Use age_rating_content_descriptions_v2 instead
 *
 * https://api.igdb.com/v4/age_rating_content_descriptions
 * @see https://api-docs.igdb.com/#age-rating-content-description
 */
export interface AgeRatingContentDescription {
  id: number;

  /** @deprecated */
  category?: AgeRatingContentDescriptionCategoryEnum;

  /** Hash of the object */
  checksum?: string;

  description?: string;
}

/**
 * @deprecated
 * @see https://api-docs.igdb.com/#age-rating-content-description-enums
 */
export enum AgeRatingContentDescriptionCategoryEnum {
  ESRB_alcohol_reference = 1,
  ESRB_animated_blood = 2,
  ESRB_blood = 3,
  ESRB_blood_and_gore = 4,
  ESRB_cartoon_violence = 5,
  ESRB_comic_mischief = 6,
  ESRB_crude_humor = 7,
  ESRB_drug_reference = 8,
  ESRB_fantasy_violence = 9,
  ESRB_intense_violence = 10,
  ESRB_language = 11,
  ESRB_lyrics = 12,
  ESRB_mature_humor = 13,
  ESRB_nudity = 14,
  ESRB_partial_nudity = 15,
  ESRB_real_gambling = 16,
  ESRB_sexual_content = 17,
  ESRB_sexual_themes = 18,
  ESRB_sexual_violence = 19,
  ESRB_simulated_gambling = 20,
  ESRB_strong_language = 21,
  ESRB_strong_lyrics = 22,
  ESRB_strong_sexual_content = 23,
  ESRB_suggestive_themes = 24,
  ESRB_tobacco_reference = 25,
  ESRB_use_of_alcohol = 26,
  ESRB_use_of_drugs = 27,
  ESRB_use_of_tobacco = 28,
  ESRB_violence = 29,
  ESRB_violent_references = 30,
  ESRB_animated_violence = 31,
  ESRB_mild_language = 32,
  ESRB_mild_violence = 33,
  ESRB_use_of_drugs_and_alcohol = 34,
  ESRB_drug_and_alcohol_reference = 35,
  ESRB_mild_suggestive_themes = 36,
  ESRB_mild_cartoon_violence = 37,
  ESRB_mild_blood = 38,
  ESRB_realistic_blood_and_gore = 39,
  ESRB_realistic_violence = 40,
  ESRB_alcohol_and_tobacco_reference = 41,
  ESRB_mature_sexual_themes = 42,
  ESRB_mild_animated_violence = 43,
  ESRB_mild_sexual_themes = 44,
  ESRB_use_of_alcohol_and_tobacco = 45,
  ESRB_animated_blood_and_gore = 46,
  ESRB_mild_fantasy_violence = 47,
  ESRB_mild_lyrics = 48,
  ESRB_realistic_blood = 49,
  PEGI_violence = 50,
  PEGI_sex = 51,
  PEGI_drugs = 52,
  PEGI_fear = 53,
  PEGI_discrimination = 54,
  PEGI_bad_language = 55,
  PEGI_gambling = 56,
  PEGI_online_gameplay = 57,
  PEGI_in_game_purchases = 58,
  CERO_love = 59,
  CERO_sexual_content = 60,
  CERO_violence = 61,
  CERO_horror = 62,
  CERO_drinking_smoking = 63,
  CERO_gambling = 64,
  CERO_crime = 65,
  CERO_controlled_substances = 66,
  CERO_languages_and_others = 67,
  GRAC_sexuality = 68,
  GRAC_violence = 69,
  GRAC_fear_horror_threatening = 70,
  GRAC_language = 71,
  GRAC_alcohol_tobacco_drug = 72,
  GRAC_crime_anti_social = 73,
  GRAC_gambling = 74,
  CLASS_IND_violencia = 75,
  CLASS_IND_violencia_extrema = 76,
  CLASS_IND_conteudo_sexual = 77,
  CLASS_IND_nudez = 78,
  CLASS_IND_sexo = 79,
  CLASS_IND_sexo_explicito = 80,
  CLASS_IND_drogas = 81,
  CLASS_IND_drogas_licitas = 82,
  CLASS_IND_drogas_ilicitas = 83,
  CLASS_IND_linguagem_impropria = 84,
  CLASS_IND_atos_criminosos = 85,
}

/**
 * Age Rating Content Descriptors
 *
 * https://api.igdb.com/v4/age_rating_content_descriptions_v2
 * @see https://api-docs.igdb.com/#age-rating-content-description-v2
 */
export interface AgeRatingContentDescriptionV2 {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  description?: string;

  /** The rating organization */
  organization?: number | AgeRatingOrganization;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * Age Rating according to various rating organisations
 *
 * https://api.igdb.com/v4/age_rating_organizations
 * @see https://api-docs.igdb.com/#age-rating-organization
 */
export interface AgeRatingOrganization {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** The title of an age rating organization */
  name?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * Alternative and international game titles
 *
 * https://api.igdb.com/v4/alternative_names
 * @see https://api-docs.igdb.com/#alternative-name
 */
export interface AlternativeName {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** A description of what kind of alternative name it is (Acronym, Working title, Japanese title etc) */
  comment?: string;

  /** The game this alternative name is associated with */
  game?: number | Game;

  /** An alternative name */
  name?: string;
}

/**
 * official artworks (resolution and aspect ratio may vary)
 *
 * https://api.igdb.com/v4/artworks
 * @see https://api-docs.igdb.com/#artwork
 */
export interface Artwork {
  id: number;

  alpha_channel?: boolean;

  animated?: boolean;

  /** Hash of the object */
  checksum?: string;

  /** The game this artwork is associated with */
  game?: number | Game;

  /** The height of the image in pixels */
  height?: number;

  /** The ID of the image used to construct an IGDB image link */
  image_id?: string;

  /** The website address (URL) of the item */
  url?: string;

  /** The width of the image in pixels */
  width?: number;
}

/**
 * Video game characters
 *
 * https://api.igdb.com/v4/characters
 * @see https://api-docs.igdb.com/#character
 */
export interface Character {
  id: number;

  /** Alternative names for a character */
  akas?: string[];

  character_gender?: number | CharacterGender;

  character_species?: number | CharacterSpecie;

  /** Hash of the object */
  checksum?: string;

  /** A characters country of origin */
  country_name?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** A text describing a character */
  description?: string;

  games?: number[] | Game[];

  /** @deprecated Use character_gender instead */
  gender?: CharacterGenderEnum;

  /** An image depicting a character */
  mug_shot?: number | CharacterMugShot;

  name?: string;

  /** A url-safe, unique, lower-case version of the name */
  slug?: string;

  /** @deprecated Use character_species instead */
  species?: CharacterSpeciesEnum;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  /** The website address (URL) of the item */
  url?: string;
}

/**
 * @deprecated
 * @see https://api-docs.igdb.com/#character-enums
 */
export enum CharacterGenderEnum {
  Male = 0,
  Female = 1,
  Other = 2,
}

/**
 * @deprecated
 * @see https://api-docs.igdb.com/#character-enums
 */
export enum CharacterSpeciesEnum {
  Human = 1,
  Alien = 2,
  Animal = 3,
  Android = 4,
  Unknown = 5,
}

/**
 * Character Genders
 *
 * https://api.igdb.com/v4/character_genders
 * @see https://api-docs.igdb.com/#character-gender
 */
export interface CharacterGender {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  name?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * Images depicting game characters
 *
 * https://api.igdb.com/v4/character_mug_shots
 * @see https://api-docs.igdb.com/#character-mug-shot
 */
export interface CharacterMugShot {
  id: number;

  alpha_channel?: boolean;

  animated?: boolean;

  /** Hash of the object */
  checksum?: string;

  /** The height of the image in pixels */
  height?: number;

  /** The ID of the image used to construct an IGDB image link */
  image_id?: string;

  /** The website address (URL) of the item */
  url?: string;

  /** The width of the image in pixels */
  width?: number;
}

/**
 * Character Species
 *
 * https://api.igdb.com/v4/character_species
 * @see https://api-docs.igdb.com/#character-specie
 */
export interface CharacterSpecie {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  name?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * Collection, AKA Series
 *
 * https://api.igdb.com/v4/collections
 * @see https://api-docs.igdb.com/#collection
 */
export interface Collection {
  id: number;

  as_child_relations?: number[] | CollectionRelation[];

  as_parent_relations?: number[] | CollectionRelation[];

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** The games that are associated with this collection */
  games?: number[] | Game[];

  /** Umbrella term for a collection of games */
  name?: string;

  /** A url-safe, unique, lower-case version of the name */
  slug?: string;

  /** The type of collection */
  type?: number | CollectionType;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  /** The website address (URL) of the item */
  url?: string;
}

/**
 * The Collection Memberships.
 *
 * https://api.igdb.com/v4/collection_memberships
 * @see https://api-docs.igdb.com/#collection-membership
 */
export interface CollectionMembership {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** The collection that is associated with this membership */
  collection?: number | Collection;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** The game that is associated with this membership */
  game?: number | Game;

  /** The Collection Membership Type */
  type?: number | CollectionMembershipType;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * Enums for collection membership types.
 *
 * https://api.igdb.com/v4/collection_membership_types
 * @see https://api-docs.igdb.com/#collection-membership-type
 */
export interface CollectionMembershipType {
  id: number;

  /** The allowed collection type */
  allowed_collection_type?: number | CollectionType;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** Description of the membership type. */
  description?: string;

  /** The membership type name */
  name?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * Describes Relationship between Collections.
 *
 * https://api.igdb.com/v4/collection_relations
 * @see https://api-docs.igdb.com/#collection-relation
 */
export interface CollectionRelation {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** The child collection of this collection. */
  child_collection?: number | Collection;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** The parent collection of this collection. */
  parent_collection?: number | Collection;

  /** The collection relationship type */
  type?: number | CollectionRelationType;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * Collection Relation Types
 *
 * https://api.igdb.com/v4/collection_relation_types
 * @see https://api-docs.igdb.com/#collection-relation-type
 */
export interface CollectionRelationType {
  id: number;

  /** The allowed child collection type */
  allowed_child_type?: number | CollectionType;

  /** The allowed child collection type */
  allowed_parent_type?: number | CollectionType;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** The relationship type description */
  description?: string;

  /** The relationship type name */
  name?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * Enums for collection types.
 *
 * https://api.igdb.com/v4/collection_types
 * @see https://api-docs.igdb.com/#collection-type
 */
export interface CollectionType {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** Description of the collection type. */
  description?: string;

  /** The name of the collection type */
  name?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * Video game companies. Both publishers & developers
 *
 * https://api.igdb.com/v4/companies
 * @see https://api-docs.igdb.com/#company
 */
export interface Company {
  id: number;

  /** The data when a company got a new ID */
  change_date?: number;

  /** @deprecated Use change_date_format instead */
  change_date_category?: CompanyChangeDateCategoryEnum;

  /** The format of the change date */
  change_date_format?: number | DateFormat;

  /** The new ID for a company that has gone through a merger or restructuring */
  changed_company_id?: number | Company;

  /** Hash of the object */
  checksum?: string;

  /** ISO 3166-1 country code */
  country?: number;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** A free text description of a company */
  description?: string;

  /** An array of games that a company has developed */
  developed?: number[] | Game[];

  /** The company’s logo */
  logo?: number | CompanyLogo;

  name?: string;

  /** A company with a controlling interest in a specific company */
  parent?: number | Company;

  /** An array of games that a company has published */
  published?: number[] | Game[];

  /** A url-safe, unique, lower-case version of the name */
  slug?: string;

  /** The date a company was founded */
  start_date?: number;

  /** @deprecated Use start_date_format instead */
  start_date_category?: CompanyStartDateCategoryEnum;

  /** The format of the start date */
  start_date_format?: number | DateFormat;

  /** The status of the company */
  status?: number | CompanyStatus;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  /** The website address (URL) of the item */
  url?: string;

  /** The companies official websites */
  websites?: number[] | CompanyWebsite[];
}

/**
 * @deprecated
 * @see https://api-docs.igdb.com/#company-enums
 */
export enum CompanyChangeDateCategoryEnum {
  YYYYMMMMDD = 0,
  YYYYMMMM = 1,
  YYYY = 2,
  YYYYQ1 = 3,
  YYYYQ2 = 4,
  YYYYQ3 = 5,
  YYYYQ4 = 6,
  TBD = 7,
}

/**
 * @deprecated
 * @see https://api-docs.igdb.com/#company-enums
 */
export enum CompanyStartDateCategoryEnum {
  YYYYMMMMDD = 0,
  YYYYMMMM = 1,
  YYYY = 2,
  YYYYQ1 = 3,
  YYYYQ2 = 4,
  YYYYQ3 = 5,
  YYYYQ4 = 6,
  TBD = 7,
}

/**
 * The logos of developers and publishers
 *
 * https://api.igdb.com/v4/company_logos
 * @see https://api-docs.igdb.com/#company-logo
 */
export interface CompanyLogo {
  id: number;

  alpha_channel?: boolean;

  animated?: boolean;

  /** Hash of the object */
  checksum?: string;

  /** The height of the image in pixels */
  height?: number;

  /** The ID of the image used to construct an IGDB image link */
  image_id?: string;

  /** The website address (URL) of the item */
  url?: string;

  /** The width of the image in pixels */
  width?: number;
}

/**
 * Company Status
 *
 * https://api.igdb.com/v4/company_statuses
 * @see https://api-docs.igdb.com/#company-status
 */
export interface CompanyStatus {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  name?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * Company Website
 *
 * https://api.igdb.com/v4/company_websites
 * @see https://api-docs.igdb.com/#company-website
 */
export interface CompanyWebsite {
  id: number;

  /** @deprecated Use type instead */
  category?: CompanyWebsiteCategoryEnum;

  /** Hash of the object */
  checksum?: string;

  trusted?: boolean;

  /** The website type associated with the website */
  type?: number | WebsiteType;

  /** The website address (URL) of the item */
  url?: string;
}

/**
 * @deprecated
 * @see https://api-docs.igdb.com/#company-website-enums
 */
export enum CompanyWebsiteCategoryEnum {
  official = 1,
  wikia = 2,
  wikipedia = 3,
  facebook = 4,
  twitter = 5,
  twitch = 6,
  instagram = 8,
  youtube = 9,
  iphone = 10,
  ipad = 11,
  android = 12,
  steam = 13,
  reddit = 14,
  itch = 15,
  epicgames = 16,
  gog = 17,
  discord = 18,
  bluesky = 19,
}

/**
 * The cover art of games
 *
 * https://api.igdb.com/v4/covers
 * @see https://api-docs.igdb.com/#cover
 */
export interface Cover {
  id: number;

  alpha_channel?: boolean;

  animated?: boolean;

  /** Hash of the object */
  checksum?: string;

  /** The game this cover is associated with. If it is empty then this cover belongs to a game_localization, which can be found under game_localization field */
  game?: number | Game;

  /** The game localization this cover might be associated with */
  game_localization?: number | GameLocalization;

  /** The height of the image in pixels */
  height?: number;

  /** The ID of the image used to construct an IGDB image link */
  image_id?: string;

  /** The website address (URL) of the item */
  url?: string;

  /** The width of the image in pixels */
  width?: number;
}

/**
 * The Date Format
 *
 * https://api.igdb.com/v4/date_formats
 * @see https://api-docs.igdb.com/#date-format
 */
export interface DateFormat {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  format?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * Gaming event like GamesCom, Tokyo Game Show, PAX or GSL
 *
 * https://api.igdb.com/v4/events
 * @see https://api-docs.igdb.com/#event
 */
export interface Event {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** The description of the event */
  description?: string;

  /** End time of the event in UTC */
  end_time?: number;

  /** Logo of the event. */
  event_logo?: number | EventLogo;

  /** Urls associated with the event */
  event_networks?: number[] | EventNetwork[];

  /** Games featured in the event */
  games?: number[] | Game[];

  /** URL to the livestream of the event. */
  live_stream_url?: string;

  /** The name of the event */
  name?: string;

  /** A url-safe, unique, lower-case version of the name */
  slug?: string;

  /** Start time of the event in UTC */
  start_time?: number;

  /** Timezone the event is in. */
  time_zone?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  /** Trailers featured in the event */
  videos?: number[] | GameVideo[];
}

/**
 * Logo for the event
 *
 * https://api.igdb.com/v4/event_logos
 * @see https://api-docs.igdb.com/#event-logo
 */
export interface EventLogo {
  id: number;

  alpha_channel?: boolean;

  animated?: boolean;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** The event associated with this logo. */
  event?: number | Event;

  /** The height of the image in pixels */
  height?: number;

  /** The ID of the image used to construct an IGDB image link */
  image_id?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  /** The website address (URL) of the item */
  url?: string;

  /** The width of the image in pixels */
  width?: number;
}

/**
 * Urls related to the event like twitter, facebook and youtube
 *
 * https://api.igdb.com/v4/event_networks
 * @see https://api-docs.igdb.com/#event-network
 */
export interface EventNetwork {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** The event associated with this URL. */
  event?: number | Event;

  /** Network type */
  network_type?: number | NetworkType;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  /** The website address (URL) of the item */
  url?: string;
}

/**
 * Game IDs on other services
 *
 * https://api.igdb.com/v4/external_games
 * @see https://api-docs.igdb.com/#external-game
 */
export interface ExternalGame {
  id: number;

  /** @deprecated Use external_game_source instead */
  category?: ExternalGameCategoryEnum;

  /** Hash of the object */
  checksum?: string;

  /** The ISO country code of the external game product. */
  countries?: number[];

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** The source of the external game. */
  external_game_source?: number | ExternalGameSource;

  /** The IGDB ID of the game */
  game?: number | Game;

  /** The release format of the external game. */
  game_release_format?: number | GameReleaseFormat;

  /** @deprecated Use game_release_format instead */
  media?: ExternalGameMediaEnum;

  /** The name of the game according to the other service */
  name?: string;

  /** The platform of the external game product. */
  platform?: number | Platform;

  /** The other services ID for this game */
  uid?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  /** The website address (URL) of the item */
  url?: string;

  /** The year in full (2018) */
  year?: number;
}

/**
 * @deprecated
 * @see https://api-docs.igdb.com/#external-game-enums
 */
export enum ExternalGameCategoryEnum {
  steam = 1,
  gog = 5,
  youtube = 10,
  microsoft = 11,
  apple = 13,
  twitch = 14,
  android = 15,
  amazon_asin = 20,
  amazon_luna = 22,
  amazon_adg = 23,
  epic_game_store = 26,
  oculus = 28,
  utomik = 29,
  itch_io = 30,
  xbox_marketplace = 31,
  kartridge = 32,
  playstation_store_us = 36,
  focus_entertainment = 37,
  xbox_game_pass_ultimate_cloud = 54,
  gamejolt = 55,
}

/**
 * @deprecated
 * @see https://api-docs.igdb.com/#external-game-enums
 */
export enum ExternalGameMediaEnum {
  digital = 1,
  physical = 2,
}

/**
 * Sources for the external games
 *
 * https://api.igdb.com/v4/external_game_sources
 * @see https://api-docs.igdb.com/#external-game-source
 */
export interface ExternalGameSource {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  name?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * A list of video game franchises such as Star Wars.
 *
 * https://api.igdb.com/v4/franchises
 * @see https://api-docs.igdb.com/#franchise
 */
export interface Franchise {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** The games that are associated with this franchise */
  games?: number[] | Game[];

  /** The name of the franchise */
  name?: string;

  /** A url-safe, unique, lower-case version of the name */
  slug?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  /** The website address (URL) of the item */
  url?: string;
}

/**
 * Video Games!
 *
 * https://api.igdb.com/v4/games
 * @see https://api-docs.igdb.com/#game
 */
export interface Game {
  id: number;

  /** The PEGI rating */
  age_ratings?: number[] | AgeRating[];

  /** Rating based on external critic scores */
  aggregated_rating?: number;

  /** Number of external critic scores */
  aggregated_rating_count?: number;

  /** Alternative names for this game */
  alternative_names?: number[] | AlternativeName[];

  /** Artworks of this game */
  artworks?: number[] | Artwork[];

  /** The bundles this game is a part of */
  bundles?: number[] | Game[];

  /** @deprecated Use game_type instead */
  category?: GameCategoryEnum;

  /** Hash of the object */
  checksum?: string;

  /** @deprecated Use collections instead */
  collection?: number | Collection;

  /** The collections that this game is in. */
  collections?: number[] | Collection[];

  /** The cover of this game */
  cover?: number | Cover;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** DLCs for this game */
  dlcs?: number[] | Game[];

  /** Expanded games of this game */
  expanded_games?: number[] | Game[];

  /** Expansions of this game */
  expansions?: number[] | Game[];

  /** External IDs this game has on other services */
  external_games?: number[] | ExternalGame[];

  /** The first release date for this game */
  first_release_date?: number;

  /** @deprecated - To be removed */
  follows?: number;

  /** Forks of this game */
  forks?: number[] | Game[];

  /** The main franchise */
  franchise?: number | Franchise;

  /** Other franchises the game belongs to */
  franchises?: number[] | Franchise[];

  /** The game engine used in this game */
  game_engines?: number[] | GameEngine[];

  /** Supported game localizations for this game. A region can have at most one game localization for a given game */
  game_localizations?: number[] | GameLocalization[];

  /** Modes of gameplay */
  game_modes?: number[] | GameMode[];

  /** The status of the games release */
  game_status?: number | GameStatus;

  /** The type of game */
  game_type?: number | GameType;

  /** Genres of the game */
  genres?: number[] | Genre[];

  /** Number of follows a game gets before release */
  hypes?: number;

  /** Companies who developed this game */
  involved_companies?: number[] | InvolvedCompany[];

  /** Associated keywords */
  keywords?: number[] | Keyword[];

  /** Supported Languages for this game */
  language_supports?: number[] | LanguageSupport[];

  /** Multiplayer modes for this game */
  multiplayer_modes?: number[] | MultiplayerMode[];

  name?: string;

  /** If a DLC, expansion or part of a bundle, this is the main game or bundle */
  parent_game?: number | Game;

  /** Platforms this game was released on */
  platforms?: number[] | Platform[];

  /** The main perspective of the player */
  player_perspectives?: number[] | PlayerPerspective[];

  /** Ports of this game */
  ports?: number[] | Game[];

  /** Average IGDB user rating */
  rating?: number;

  /** Total number of IGDB user ratings */
  rating_count?: number;

  /** Release dates of this game */
  release_dates?: number[] | ReleaseDate[];

  /** Remakes of this game */
  remakes?: number[] | Game[];

  /** Remasters of this game */
  remasters?: number[] | Game[];

  /** Screenshots of this game */
  screenshots?: number[] | Screenshot[];

  /** Similar games */
  similar_games?: number[] | Game[];

  /** A url-safe, unique, lower-case version of the name */
  slug?: string;

  /** Standalone expansions of this game */
  standalone_expansions?: number[] | Game[];

  /** @deprecated Use game_status instead */
  status?: GameStatusEnum;

  /** A short description of a games story */
  storyline?: string;

  /** A description of the game */
  summary?: string;

  /** Related entities in the IGDB API */
  tags?: number[];

  /** Themes of the game */
  themes?: number[] | Theme[];

  /** Average rating based on both IGDB user and external critic scores */
  total_rating?: number;

  /** Total number of user and external critic scores */
  total_rating_count?: number;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  /** The website address (URL) of the item */
  url?: string;

  /** If a version, this is the main game */
  version_parent?: number | Game;

  /** Title of this version (i.e Gold edition) */
  version_title?: string;

  /** Videos of this game */
  videos?: number[] | GameVideo[];

  /** Websites associated with this game */
  websites?: number[] | Website[];
}

/**
 * @deprecated
 * @see https://api-docs.igdb.com/#game-enums
 */
export enum GameCategoryEnum {
  main_game = 0,
  dlc_addon = 1,
  expansion = 2,
  bundle = 3,
  standalone_expansion = 4,
  mod = 5,
  episode = 6,
  season = 7,
  remake = 8,
  remaster = 9,
  expanded_game = 10,
  port = 11,
  fork = 12,
  pack = 13,
  update = 14,
}

/**
 * @deprecated
 * @see https://api-docs.igdb.com/#game-enums
 */
export enum GameStatusEnum {
  released = 0,
  alpha = 2,
  beta = 3,
  early_access = 4,
  offline = 5,
  cancelled = 6,
  rumored = 7,
  delisted = 8,
}

/**
 * Video game engines such as unreal engine.
 *
 * https://api.igdb.com/v4/game_engines
 * @see https://api-docs.igdb.com/#game-engine
 */
export interface GameEngine {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Companies who used this game engine */
  companies?: number[] | Company[];

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** Description of the game engine */
  description?: string;

  /** Logo of the game engine */
  logo?: number | GameEngineLogo;

  /** Name of the game engine */
  name?: string;

  /** Platforms this game engine was deployed on */
  platforms?: number[] | Platform[];

  /** A url-safe, unique, lower-case version of the name */
  slug?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  /** The website address (URL) of the item */
  url?: string;
}

/**
 * The logos of game engines
 *
 * https://api.igdb.com/v4/game_engine_logos
 * @see https://api-docs.igdb.com/#game-engine-logo
 */
export interface GameEngineLogo {
  id: number;

  alpha_channel?: boolean;

  animated?: boolean;

  /** Hash of the object */
  checksum?: string;

  /** The height of the image in pixels */
  height?: number;

  /** The ID of the image used to construct an IGDB image link */
  image_id?: string;

  /** The website address (URL) of the item */
  url?: string;

  /** The width of the image in pixels */
  width?: number;
}

/**
 * Game localization for a game
 *
 * https://api.igdb.com/v4/game_localizations
 * @see https://api-docs.igdb.com/#game-localization
 */
export interface GameLocalization {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** The cover of this game localization */
  cover?: number | Cover;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** The Game the localization belongs to */
  game?: number | Game;

  name?: string;

  /** The Region of the localization */
  region?: number | Region;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * Single player, Multiplayer etc
 *
 * https://api.igdb.com/v4/game_modes
 * @see https://api-docs.igdb.com/#game-mode
 */
export interface GameMode {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** The name of the game mode */
  name?: string;

  /** A url-safe, unique, lower-case version of the name */
  slug?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  /** The website address (URL) of the item */
  url?: string;
}

/**
 * The format of the game release
 *
 * https://api.igdb.com/v4/game_release_formats
 * @see https://api-docs.igdb.com/#game-release-format
 */
export interface GameReleaseFormat {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  format?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * The release status of the game
 *
 * https://api.igdb.com/v4/game_statuses
 * @see https://api-docs.igdb.com/#game-status
 */
export interface GameStatus {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  status?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * Average time to beat times for a game.
 *
 * https://api.igdb.com/v4/game_time_to_beats
 * @see https://api-docs.igdb.com/#game-time-to-beat
 */
export interface GameTimeToBeat {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Average time (in seconds) to finish the game to 100% completion. */
  completely?: number;

  /** Total number of time to beat submissions for this game */
  count?: number;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** The ID of the game associated with the time to beat data */
  game_id?: number;

  /** Average time (in seconds) to finish the game to its credits without spending notable time on extras such as side quests. */
  hastily?: number;

  /** Average time (in seconds) to finish the game while mixing in some extras such as side quests without being overly thorough. */
  normally?: number;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * The type that this game is
 *
 * https://api.igdb.com/v4/game_types
 * @see https://api-docs.igdb.com/#game-type
 */
export interface GameType {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  type?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * Details about game editions and versions.
 *
 * https://api.igdb.com/v4/game_versions
 * @see https://api-docs.igdb.com/#game-version
 */
export interface GameVersion {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** Features and descriptions of what makes each version/edition different from the main game */
  features?: number[] | GameVersionFeature[];

  /** The game these versions/editions are of */
  game?: number | Game;

  /** Game Versions and Editions */
  games?: number[] | Game[];

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  /** The website address (URL) of the item */
  url?: string;
}

/**
 * Features and descriptions of what makes each version/edition different from the main game
 *
 * https://api.igdb.com/v4/game_version_features
 * @see https://api-docs.igdb.com/#game-version-feature
 */
export interface GameVersionFeature {
  id: number;

  /** The category of the feature description */
  category?: GameVersionFeatureCategoryEnum;

  /** Hash of the object */
  checksum?: string;

  /** The description of the feature */
  description?: string;

  /** Position of this feature in the list of features */
  position?: number;

  /** The title of the feature */
  title?: string;

  /** The bool/text value of the feature */
  values?: number[] | GameVersionFeatureValue[];
}

/** @see https://api-docs.igdb.com/#game-version-feature-enums */
export enum GameVersionFeatureCategoryEnum {
  boolean = 0,
  description = 1,
}

/**
 * The bool/text value of the feature
 *
 * https://api.igdb.com/v4/game_version_feature_values
 * @see https://api-docs.igdb.com/#game-version-feature-value
 */
export interface GameVersionFeatureValue {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** The version/edition this value refers to */
  game?: number | Game;

  /** The id of the game feature */
  game_feature?: number | GameVersionFeature;

  /** The boole value of this feature */
  included_feature?: GameVersionFeatureValueIncludedFeatureEnum;

  /** The text value of this feature */
  note?: string;
}

/** @see https://api-docs.igdb.com/#game-version-feature-value-enums */
export enum GameVersionFeatureValueIncludedFeatureEnum {
  NOT_INCLUDED = 0,
  INCLUDED = 1,
  PRE_ORDER_ONLY = 2,
}

/**
 * A video associated with a game
 *
 * https://api.igdb.com/v4/game_videos
 * @see https://api-docs.igdb.com/#game-video
 */
export interface GameVideo {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** The game this video is associated with */
  game?: number | Game;

  /** The name of the video */
  name?: string;

  /** The external ID of the video (YouTube Links) */
  video_id?: string;
}

/**
 * Genres of video game
 *
 * https://api.igdb.com/v4/genres
 * @see https://api-docs.igdb.com/#genre
 */
export interface Genre {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  name?: string;

  /** A url-safe, unique, lower-case version of the name */
  slug?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  /** The website address (URL) of the item */
  url?: string;
}

/**
 * https://api.igdb.com/v4/involved_companies
 * @see https://api-docs.igdb.com/#involved-company
 */
export interface InvolvedCompany {
  id: number;

  /** Hash of the object */
  checksum?: string;

  company?: number | Company;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  developer?: boolean;

  game?: number | Game;

  porting?: boolean;

  publisher?: boolean;

  supporting?: boolean;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * Keywords are words or phrases that get tagged to a game such as “world war 2” or “steampunk”.
 *
 * https://api.igdb.com/v4/keywords
 * @see https://api-docs.igdb.com/#keyword
 */
export interface Keyword {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  name?: string;

  /** A url-safe, unique, lower-case version of the name */
  slug?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  /** The website address (URL) of the item */
  url?: string;
}

/**
 * Languages that are used in the Language Support endpoint.
 *
 * https://api.igdb.com/v4/languages
 * @see https://api-docs.igdb.com/#language
 */
export interface Language {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** The combination of Language code and Country code */
  locale?: string;

  /** The English name of the Language */
  name?: string;

  /** The Native Name of the Language */
  native_name?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * Games can be played with different languages for voice acting, subtitles, or the interface language.
 *
 * https://api.igdb.com/v4/language_supports
 * @see https://api-docs.igdb.com/#language-support
 */
export interface LanguageSupport {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  game?: number | Game;

  language?: number | Language;

  language_support_type?: number | LanguageSupportType;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * Language Support Types contains the identifiers for the support types that Language Support uses.
 *
 * https://api.igdb.com/v4/language_support_types
 * @see https://api-docs.igdb.com/#language-support-type
 */
export interface LanguageSupportType {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  name?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * Data about the supported multiplayer types
 *
 * https://api.igdb.com/v4/multiplayer_modes
 * @see https://api-docs.igdb.com/#multiplayer-mode
 */
export interface MultiplayerMode {
  id: number;

  /** True if the game supports campaign coop */
  campaigncoop?: boolean;

  /** Hash of the object */
  checksum?: string;

  /** True if the game supports drop in/out multiplayer */
  dropin?: boolean;

  /** The game this multiplayer mode is associated with */
  game?: number | Game;

  /** True if the game supports LAN coop */
  lancoop?: boolean;

  /** True if the game supports offline coop */
  offlinecoop?: boolean;

  /** Maximum number of offline players in offline coop */
  offlinecoopmax?: number;

  /** Maximum number of players in offline multiplayer */
  offlinemax?: number;

  /** True if the game supports online coop */
  onlinecoop?: boolean;

  /** Maximum number of online players in online coop */
  onlinecoopmax?: number;

  /** Maximum number of players in online multiplayer */
  onlinemax?: number;

  /** The platform this multiplayer mode refers to */
  platform?: number | Platform;

  /** True if the game supports split screen, offline multiplayer */
  splitscreen?: boolean;

  /** True if the game supports split screen, online multiplayer */
  splitscreenonline?: boolean;
}

/**
 * Social networks related to the event like twitter, facebook and youtube
 *
 * https://api.igdb.com/v4/network_types
 * @see https://api-docs.igdb.com/#network-type
 */
export interface NetworkType {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** Urls associated with the event type */
  event_networks?: number[] | EventNetwork[];

  name?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * The hardware used to run the game or game delivery network
 *
 * https://api.igdb.com/v4/platforms
 * @see https://api-docs.igdb.com/#platform
 */
export interface Platform {
  id: number;

  /** An abbreviation of the platform name */
  abbreviation?: string;

  /** An alternative name for the platform */
  alternative_name?: string;

  /** @deprecated Use platform_type instead */
  category?: PlatformCategoryEnum;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** The generation of the platform */
  generation?: number;

  /** The name of the platform */
  name?: string;

  /** The family of platforms this one belongs to */
  platform_family?: number | PlatformFamily;

  /** The logo of the first Version of this platform */
  platform_logo?: number | PlatformLogo;

  /** The type of the platform */
  platform_type?: number | PlatformType;

  /** A url-safe, unique, lower-case version of the name */
  slug?: string;

  /** The summary of the first Version of this platform */
  summary?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  /** The website address (URL) of the item */
  url?: string;

  /** Associated versions of this platform */
  versions?: number[] | PlatformVersion[];

  /** The main website */
  websites?: number[] | PlatformWebsite[];
}

/**
 * @deprecated
 * @see https://api-docs.igdb.com/#platform-enums
 */
export enum PlatformCategoryEnum {
  console = 1,
  arcade = 2,
  platform = 3,
  operating_system = 4,
  portable_console = 5,
  computer = 6,
}

/**
 * A collection of closely related platforms
 *
 * https://api.igdb.com/v4/platform_families
 * @see https://api-docs.igdb.com/#platform-family
 */
export interface PlatformFamily {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** The name of the platform family */
  name?: string;

  /** A url-safe, unique, lower-case version of the name */
  slug?: string;
}

/**
 * Logo for a platform
 *
 * https://api.igdb.com/v4/platform_logos
 * @see https://api-docs.igdb.com/#platform-logo
 */
export interface PlatformLogo {
  id: number;

  alpha_channel?: boolean;

  animated?: boolean;

  /** Hash of the object */
  checksum?: string;

  /** The height of the image in pixels */
  height?: number;

  /** The ID of the image used to construct an IGDB image link */
  image_id?: string;

  /** The website address (URL) of the item */
  url?: string;

  /** The width of the image in pixels */
  width?: number;
}

/**
 * Types of platforms
 *
 * https://api.igdb.com/v4/platform_types
 * @see https://api-docs.igdb.com/#platform-type
 */
export interface PlatformType {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  name?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * https://api.igdb.com/v4/platform_versions
 * @see https://api-docs.igdb.com/#platform-version
 */
export interface PlatformVersion {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Who developed this platform version */
  companies?: number[] | PlatformVersionCompany[];

  /** The network capabilities */
  connectivity?: string;

  /** The integrated control processing unit */
  cpu?: string;

  /** The graphics chipset */
  graphics?: string;

  /** Who manufactured this version of the platform */
  main_manufacturer?: number | PlatformVersionCompany;

  /** The type of media this version accepted */
  media?: string;

  /** How much memory there is */
  memory?: string;

  /** The name of the platform version */
  name?: string;

  /** The operating system installed on the platform version */
  os?: string;

  /** The output video rate */
  output?: string;

  /** The logo of this platform version */
  platform_logo?: number | PlatformLogo;

  /** When this platform was released */
  platform_version_release_dates?: number[] | PlatformVersionReleaseDate[];

  /** The maximum resolution */
  resolutions?: string;

  /** A url-safe, unique, lower-case version of the name */
  slug?: string;

  /** The sound chipset */
  sound?: string;

  /** How much storage there is */
  storage?: string;

  /** A short summary */
  summary?: string;

  /** The website address (URL) of the item */
  url?: string;
}

/**
 * A platform developer
 *
 * https://api.igdb.com/v4/platform_version_companies
 * @see https://api-docs.igdb.com/#platform-version-company
 */
export interface PlatformVersionCompany {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Any notable comments about the developer */
  comment?: string;

  /** The company responsible for developing this platform version */
  company?: number | Company;

  developer?: boolean;

  manufacturer?: boolean;
}

/**
 * The main website for the platform
 *
 * https://api.igdb.com/v4/platform_websites
 * @see https://api-docs.igdb.com/#platform-website
 */
export interface PlatformWebsite {
  id: number;

  /** The service this website links to */
  category?: PlatformWebsiteCategoryEnum;

  /** Hash of the object */
  checksum?: string;

  trusted?: boolean;

  /** The website address (URL) of the item */
  url?: string;
}

/** @see https://api-docs.igdb.com/#platform-website-enums */
export enum PlatformWebsiteCategoryEnum {
  official = 1,
  wikia = 2,
  wikipedia = 3,
  facebook = 4,
  twitter = 5,
  twitch = 6,
  instagram = 8,
  youtube = 9,
  iphone = 10,
  ipad = 11,
  android = 12,
  steam = 13,
  reddit = 14,
  discord = 15,
  google_plus = 16,
  tumblr = 17,
  linkedin = 18,
  pinterest = 19,
  soundcloud = 20,
}

/**
 * A handy endpoint that extends platform release dates. Used to dig deeper into release dates, platforms and versions.
 *
 * https://api.igdb.com/v4/platform_version_release_dates
 * @see https://api-docs.igdb.com/#platform-version-release-date
 */
export interface PlatformVersionReleaseDate {
  id: number;

  /** @deprecated Use date_format instead */
  category?: PlatformVersionReleaseDateCategoryEnum;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** The release date */
  date?: number;

  /** The format of the change date */
  date_format?: number | DateFormat;

  /** A human readable version of the release date */
  human?: string;

  /** The month as an integer starting at 1 (January) */
  m?: number;

  /** The platform this release date is for */
  platform_version?: number | PlatformVersion;

  /** @deprecated Use release_region instead */
  region?: PlatformVersionReleaseDateRegionEnum;

  /** The region of the release */
  release_region?: number | ReleaseDateRegion;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  /** The year in full (2018) */
  y?: number;
}

/**
 * @deprecated
 * @see https://api-docs.igdb.com/#platform-version-release-date-enums
 */
export enum PlatformVersionReleaseDateCategoryEnum {
  YYYYMMMMDD = 0,
  YYYYMMMM = 1,
  YYYY = 2,
  YYYYQ1 = 3,
  YYYYQ2 = 4,
  YYYYQ3 = 5,
  YYYYQ4 = 6,
  TBD = 7,
}

/**
 * @deprecated
 * @see https://api-docs.igdb.com/#platform-version-release-date-enums
 */
export enum PlatformVersionReleaseDateRegionEnum {
  europe = 1,
  north_america = 2,
  australia = 3,
  new_zealand = 4,
  japan = 5,
  china = 6,
  asia = 7,
  worldwide = 8,
  korea = 9,
  brazil = 10,
}

/**
 * Player perspectives describe the view/perspective of the player in a video game.
 *
 * https://api.igdb.com/v4/player_perspectives
 * @see https://api-docs.igdb.com/#player-perspective
 */
export interface PlayerPerspective {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  name?: string;

  /** A url-safe, unique, lower-case version of the name */
  slug?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  /** The website address (URL) of the item */
  url?: string;
}

/**
 * Popularity Primitives, this endpoint lists available primitives with their source and popularity type.
 *
 * https://api.igdb.com/v4/popularity_primitives
 * @see https://api-docs.igdb.com/#popularity-primitive
 */
export interface PopularityPrimitive {
  id: number;

  calculated_at?: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  external_popularity_source?: number | ExternalGameSource;

  game_id?: number;

  /** @deprecated Use external_popularity_source instead */
  popularity_source?: PopularityPrimitivePopularitySourceEnum;

  popularity_type?: number | PopularityType;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  value?: number;
}

/**
 * @deprecated
 * @see https://api-docs.igdb.com/#popularity-primitive-enums
 */
export enum PopularityPrimitivePopularitySourceEnum {
  igdb = 121,
}

/**
 * This describes what type of popularity primitive or popularity indicator the popularity value is.
 *
 * https://api.igdb.com/v4/popularity_types
 * @see https://api-docs.igdb.com/#popularity-type
 */
export interface PopularityType {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  external_popularity_source?: number | ExternalGameSource;

  name?: string;

  /** @deprecated Use external_popularity_source instead */
  popularity_source?: PopularityTypePopularitySourceEnum;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * @deprecated
 * @see https://api-docs.igdb.com/#popularity-type-enums
 */
export enum PopularityTypePopularitySourceEnum {
  steam = 1,
  igdb = 121,
}

/**
 * Region for game localization
 *
 * https://api.igdb.com/v4/regions
 * @see https://api-docs.igdb.com/#region
 */
export interface Region {
  id: number;

  /** This can be either ’locale’ or ‘continent’ */
  category?: string;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** This is the identifier of each region */
  identifier?: string;

  name?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * A handy endpoint that extends game release dates. Used to dig deeper into release dates, platforms and versions.
 *
 * https://api.igdb.com/v4/release_dates
 * @see https://api-docs.igdb.com/#release-date
 */
export interface ReleaseDate {
  id: number;

  /** @deprecated Use date_format instead */
  category?: ReleaseDateCategoryEnum;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** The date of the release */
  date?: number;

  /** The format of the change date */
  date_format?: number | DateFormat;

  game?: number | Game;

  /** A human readable representation of the date */
  human?: string;

  /** The month as an integer starting at 1 (January) */
  m?: number;

  /** The platform of the release */
  platform?: number | Platform;

  /** @deprecated Use release_region instead */
  region?: ReleaseDateRegionEnum;

  /** The region of the release */
  release_region?: number | ReleaseDateRegion;

  /** The status of the release. */
  status?: number | ReleaseDateStatus;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  /** The year in full (2018) */
  y?: number;
}

/**
 * @deprecated
 * @see https://api-docs.igdb.com/#release-date-enums
 */
export enum ReleaseDateCategoryEnum {
  YYYYMMMMDD = 0,
  YYYYMMMM = 1,
  YYYY = 2,
  YYYYQ1 = 3,
  YYYYQ2 = 4,
  YYYYQ3 = 5,
  YYYYQ4 = 6,
  TBD = 7,
}

/**
 * @deprecated
 * @see https://api-docs.igdb.com/#release-date-enums
 */
export enum ReleaseDateRegionEnum {
  europe = 1,
  north_america = 2,
  australia = 3,
  new_zealand = 4,
  japan = 5,
  china = 6,
  asia = 7,
  worldwide = 8,
  korea = 9,
  brazil = 10,
}

/**
 * Regions for release dates
 *
 * https://api.igdb.com/v4/release_date_regions
 * @see https://api-docs.igdb.com/#release-date-region
 */
export interface ReleaseDateRegion {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  region?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * An endpoint to provide definition of all of the current release date statuses.
 *
 * https://api.igdb.com/v4/release_date_statuses
 * @see https://api-docs.igdb.com/#release-date-status
 */
export interface ReleaseDateStatus {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** The description of the release date status. */
  description?: string;

  /** The name of the release date status. */
  name?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}

/**
 * Screenshots of games
 *
 * https://api.igdb.com/v4/screenshots
 * @see https://api-docs.igdb.com/#screenshot
 */
export interface Screenshot {
  id: number;

  alpha_channel?: boolean;

  animated?: boolean;

  /** Hash of the object */
  checksum?: string;

  /** The game this video is associated with */
  game?: number | Game;

  /** The height of the image in pixels */
  height?: number;

  /** The ID of the image used to construct an IGDB image link */
  image_id?: string;

  /** The website address (URL) of the item */
  url?: string;

  /** The width of the image in pixels */
  width?: number;
}

/**
 * https://api.igdb.com/v4/search
 * @see https://api-docs.igdb.com/#search
 */
export interface Search {
  id: number;

  alternative_name?: string;

  character?: number | Character;

  /** Hash of the object */
  checksum?: string;

  collection?: number | Collection;

  company?: number | Company;

  description?: string;

  game?: number | Game;

  name?: string;

  platform?: number | Platform;

  /** The date this item was initially published by the third party */
  published_at?: number;

  test_dummy?: unknown;

  theme?: number | Theme;
}

/**
 * Video game themes
 *
 * https://api.igdb.com/v4/themes
 * @see https://api-docs.igdb.com/#theme
 */
export interface Theme {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  name?: string;

  /** A url-safe, unique, lower-case version of the name */
  slug?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  /** The website address (URL) of the item */
  url?: string;
}

/**
 * A website url, usually associated with a game
 *
 * https://api.igdb.com/v4/websites
 * @see https://api-docs.igdb.com/#website
 */
export interface Website {
  id: number;

  /** @deprecated Use type instead */
  category?: WebsiteCategoryEnum;

  /** Hash of the object */
  checksum?: string;

  /** The game this website is associated with */
  game?: number | Game;

  trusted?: boolean;

  /** The website type associated with the website */
  type?: number | WebsiteType;

  /** The website address (URL) of the item */
  url?: string;
}

/**
 * @deprecated
 * @see https://api-docs.igdb.com/#website-enums
 */
export enum WebsiteCategoryEnum {
  official = 1,
  wikia = 2,
  wikipedia = 3,
  facebook = 4,
  twitter = 5,
  twitch = 6,
  instagram = 8,
  youtube = 9,
  iphone = 10,
  ipad = 11,
  android = 12,
  steam = 13,
  reddit = 14,
  itch = 15,
  epicgames = 16,
  gog = 17,
  discord = 18,
  bluesky = 19,
}

/**
 * A website type, usually the name of the website
 *
 * https://api.igdb.com/v4/website_types
 * @see https://api-docs.igdb.com/#website-type
 */
export interface WebsiteType {
  id: number;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** The website type */
  type?: string;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;
}
