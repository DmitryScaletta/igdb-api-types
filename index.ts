/**
 * Age Rating according to various rating organisations
 *
 * https://api.igdb.com/v4/age_ratings
 * @see https://api-docs.igdb.com/#age-rating
 */
export interface AgeRating {
  id: number;

  /** The organization that has issued a specific rating */
  category?: AgeRatingCategory;

  /** Hash of the object */
  checksum?: string;

  content_descriptions?: number[] | AgeRatingContentDescription[];

  /** The title of an age rating */
  rating?: AgeRatingRating;

  /** The url for  the image of a age rating */
  rating_cover_url?: string;

  /** A free text motivating a rating */
  synopsis?: string;
}

/** @see https://api-docs.igdb.com/#age-rating-enums */
export enum AgeRatingCategory {
  ESRB = 1,
  PEGI = 2,
  CERO = 3,
  USK = 4,
  GRAC = 5,
  CLASS_IND = 6,
  ACB = 7,
}

/** @see https://api-docs.igdb.com/#age-rating-enums */
export enum AgeRatingRating {
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
  USK_18 = 21,
  GRAC_ALL = 22,
  GRAC_Twelve = 23,
  GRAC_Fifteen = 24,
  GRAC_Eighteen = 25,
  GRAC_TESTING = 26,
  CLASS_IND_L = 27,
  CLASS_IND_Ten = 28,
  CLASS_IND_Twelve = 29,
  CLASS_IND_Fourteen = 30,
  CLASS_IND_Sixteen = 31,
  CLASS_IND_Eighteen = 32,
  ACB_G = 33,
  ACB_PG = 34,
  ACB_M = 35,
  ACB_MA15 = 36,
  ACB_R18 = 37,
  ACB_RC = 38,
}

/**
 * The organisation behind a specific rating
 *
 * https://api.igdb.com/v4/age_rating_content_descriptions
 * @see https://api-docs.igdb.com/#age-rating-content-description
 */
export interface AgeRatingContentDescription {
  id: number;

  category?: AgeRatingContentDescriptionCategory;

  /** Hash of the object */
  checksum?: string;

  description?: string;
}

/** @see https://api-docs.igdb.com/#age-rating-content-description-enums */
export enum AgeRatingContentDescriptionCategory {
  PEGI = 1,
  ESRB = 2,
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

  /** Hash of the object */
  checksum?: string;

  /** A characters country of origin */
  country_name?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** A text describing a character */
  description?: string;

  games?: number[] | Game[];

  gender?: CharacterGender;

  /** An image depicting a character */
  mug_shot?: number | CharacterMugShot;

  name?: string;

  /** A url-safe, unique, lower-case version of the name */
  slug?: string;

  species?: CharacterSpecies;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  /** The website address (URL) of the item */
  url?: string;
}

/** @see https://api-docs.igdb.com/#character-enums */
export enum CharacterGender {
  Male = 0,
  Female = 1,
  Other = 2,
}

/** @see https://api-docs.igdb.com/#character-enums */
export enum CharacterSpecies {
  Human = 1,
  Alien = 2,
  Animal = 3,
  Android = 4,
  Unknown = 5,
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
 * Collection, AKA Series
 *
 * https://api.igdb.com/v4/collections
 * @see https://api-docs.igdb.com/#collection
 */
export interface Collection {
  id: number;

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

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  /** The website address (URL) of the item */
  url?: string;
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

  change_date_category?: CompanyChangeDateCategory;

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

  start_date_category?: CompanyStartDateCategory;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  /** The website address (URL) of the item */
  url?: string;

  /** The companies official websites */
  websites?: number[] | CompanyWebsite[];
}

/** @see https://api-docs.igdb.com/#company-enums */
export enum CompanyChangeDateCategory {
  YYYYMMMMDD = 0,
  YYYYMMMM = 1,
  YYYY = 2,
  YYYYQ1 = 3,
  YYYYQ2 = 4,
  YYYYQ3 = 5,
  YYYYQ4 = 6,
  TBD = 7,
}

/** @see https://api-docs.igdb.com/#company-enums */
export enum CompanyStartDateCategory {
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
 * Company Website
 *
 * https://api.igdb.com/v4/company_websites
 * @see https://api-docs.igdb.com/#company-website
 */
export interface CompanyWebsite {
  id: number;

  /** The service this website links to */
  category?: CompanyWebsiteCategory;

  /** Hash of the object */
  checksum?: string;

  trusted?: boolean;

  /** The website address (URL) of the item */
  url?: string;
}

/** @see https://api-docs.igdb.com/#company-website-enums */
export enum CompanyWebsiteCategory {
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

  /** The game this cover is associated with */
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
 * Game IDs on other services
 *
 * https://api.igdb.com/v4/external_games
 * @see https://api-docs.igdb.com/#external-game
 */
export interface ExternalGame {
  id: number;

  /** The id of the other service */
  category?: ExternalGameCategory;

  /** Hash of the object */
  checksum?: string;

  /** The ISO country code of the external game product. */
  countries?: number[];

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** The IGDB ID of the game */
  game?: number | Game;

  /** The media of the external game. */
  media?: ExternalGameMedia;

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

/** @see https://api-docs.igdb.com/#external-game-enums */
export enum ExternalGameCategory {
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
}

/** @see https://api-docs.igdb.com/#external-game-enums */
export enum ExternalGameMedia {
  digital = 1,
  physical = 2,
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

  /** The category of this game */
  category?: GameCategory;

  /** Hash of the object */
  checksum?: string;

  /** The series the game belongs to */
  collection?: number | Collection;

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

  /** Number of people following a game */
  follows?: number;

  /** Forks of this game */
  forks?: number[] | Game[];

  /** The main franchise */
  franchise?: number | Franchise;

  /** Other franchises the game belongs to */
  franchises?: number[] | Franchise[];

  /** The game engine used in this game */
  game_engines?: number[] | GameEngine[];

  /** Modes of gameplay */
  game_modes?: number[] | GameMode[];

  /** Genres of the game */
  genres?: number[] | Genre[];

  /** Number of follows a game gets before release */
  hypes?: number;

  /** Companies who developed this game */
  involved_companies?: number[] | InvolvedCompany[];

  /** Associated keywords */
  keywords?: number[] | Keyword[];

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

  /** The status of the games release */
  status?: GameStatus;

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

/** @see https://api-docs.igdb.com/#game-enums */
export enum GameCategory {
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
}

/** @see https://api-docs.igdb.com/#game-enums */
export enum GameStatus {
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
  category?: GameVersionFeatureCategory;

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
export enum GameVersionFeatureCategory {
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
  included_feature?: GameVersionFeatureValueIncludedFeature;

  /** The text value of this feature */
  note?: string;
}

/** @see https://api-docs.igdb.com/#game-version-feature-value-enums */
export enum GameVersionFeatureValueIncludedFeature {
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

  /** The external ID of the video (usually youtube) */
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

  /** A physical or virtual category of the platform */
  category?: PlatformCategory;

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

/** @see https://api-docs.igdb.com/#platform-enums */
export enum PlatformCategory {
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
 * A handy endpoint that extends platform release dates. Used to dig deeper into release dates, platforms and versions.
 *
 * https://api.igdb.com/v4/platform_version_release_dates
 * @see https://api-docs.igdb.com/#platform-version-release-date
 */
export interface PlatformVersionReleaseDate {
  id: number;

  /** The format of the release date */
  category?: PlatformVersionReleaseDateCategory;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** The release date */
  date?: number;

  /** A human readable version of the release date */
  human?: string;

  /** The month as an integer starting at 1 (January) */
  m?: number;

  /** The platform this release date is for */
  platform_version?: number | PlatformVersion;

  /** The region of the release */
  region?: PlatformVersionReleaseDateRegion;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  /** The year in full (2018) */
  y?: number;
}

/** @see https://api-docs.igdb.com/#platform-version-release-date-enums */
export enum PlatformVersionReleaseDateCategory {
  YYYYMMMMDD = 0,
  YYYYMMMM = 1,
  YYYY = 2,
  YYYYQ1 = 3,
  YYYYQ2 = 4,
  YYYYQ3 = 5,
  YYYYQ4 = 6,
  TBD = 7,
}

/** @see https://api-docs.igdb.com/#platform-version-release-date-enums */
export enum PlatformVersionReleaseDateRegion {
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
 * The main website for the platform
 *
 * https://api.igdb.com/v4/platform_websites
 * @see https://api-docs.igdb.com/#platform-website
 */
export interface PlatformWebsite {
  id: number;

  /** The service this website links to */
  category?: PlatformWebsiteCategory;

  /** Hash of the object */
  checksum?: string;

  trusted?: boolean;

  /** The website address (URL) of the item */
  url?: string;
}

/** @see https://api-docs.igdb.com/#platform-website-enums */
export enum PlatformWebsiteCategory {
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
 * A handy endpoint that extends game release dates. Used to dig deeper into release dates, platforms and versions.
 *
 * https://api.igdb.com/v4/release_dates
 * @see https://api-docs.igdb.com/#release-date
 */
export interface ReleaseDate {
  id: number;

  /** The format category of the release date */
  category?: ReleaseDateCategory;

  /** Hash of the object */
  checksum?: string;

  /** Date this was initially added to the IGDB database */
  created_at?: number;

  /** The date of the release */
  date?: number;

  game?: number | Game;

  /** A human readable representation of the date */
  human?: string;

  /** The month as an integer starting at 1 (January) */
  m?: number;

  /** The platform of the release */
  platform?: number | Platform;

  /** The region of the release */
  region?: ReleaseDateRegion;

  /** The last date this entry was updated in the IGDB database */
  updated_at?: number;

  /** The year in full (2018) */
  y?: number;
}

/** @see https://api-docs.igdb.com/#release-date-enums */
export enum ReleaseDateCategory {
  YYYYMMMMDD = 0,
  YYYYMMMM = 1,
  YYYY = 2,
  YYYYQ1 = 3,
  YYYYQ2 = 4,
  YYYYQ3 = 5,
  YYYYQ4 = 6,
  TBD = 7,
}

/** @see https://api-docs.igdb.com/#release-date-enums */
export enum ReleaseDateRegion {
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

  /** The service this website links to */
  category?: WebsiteCategory;

  /** Hash of the object */
  checksum?: string;

  /** The game this website is associated with */
  game?: number | Game;

  trusted?: boolean;

  /** The website address (URL) of the item */
  url?: string;
}

/** @see https://api-docs.igdb.com/#website-enums */
export enum WebsiteCategory {
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
}
