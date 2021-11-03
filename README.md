# IGDB API Types

TypeScript type definitions for IGDB API endpoint responses.

All types are generated automatically by parsing the [IGDB API docs](https://api-docs.igdb.com/) page.

## Scripts

`npm run build` - generate type definitions.

## Example

```ts
/**
 * Video Games!
 *
 * @endpoint https://api.igdb.com/v4/games
 * @see https://api-docs.igdb.com/#game
 */
export interface Game {
  /** The PEGI rating */
  age_ratings: number[] | Partial<AgeRating>[];

  /** Rating based on external critic scores */
  aggregated_rating: number;

  /** Number of external critic scores */
  aggregated_rating_count: number;

  /** Alternative names for this game */
  alternative_names: number[] | Partial<AlternativeName>[];

  /** Artworks of this game */
  artworks: number[] | Partial<Artwork>[];

  /** The bundles this game is a part of */
  bundles: number[] | Partial<Game>[];

  /** The category of this game */
  category: GameCategory;

  /** Hash of the object */
  checksum: string;

  /** The series the game belongs to */
  collection: number | Partial<Collection>;

  /** The cover of this game */
  cover: number | Partial<Cover>;

  /** Date this was initially added to the IGDB database */
  created_at: number;

  /** DLCs for this game */
  dlcs: number[] | Partial<Game>[];

  /** Expanded games of this game */
  expanded_games: number[] | Partial<Game>[];

  /** Expansions of this game */
  expansions: number[] | Partial<Game>[];

  /** External IDs this game has on other services */
  external_games: number[] | Partial<ExternalGame>[];

  /** The first release date for this game */
  first_release_date: number;

  /** Number of people following a game */
  follows: number;

  /** Forks of this game */
  forks: number[] | Partial<Game>[];

  /** The main franchise */
  franchise: number | Partial<Franchise>;

  /** Other franchises the game belongs to */
  franchises: number[] | Partial<Franchise>[];

  /** The game engine used in this game */
  game_engines: number[] | Partial<GameEngine>[];

  /** Modes of gameplay */
  game_modes: number[] | Partial<GameMode>[];

  /** Genres of the game */
  genres: number[] | Partial<Genre>[];

  /** Number of follows a game gets before release */
  hypes: number;

  /** Companies who developed this game */
  involved_companies: number[] | Partial<InvolvedCompany>[];

  /** Associated keywords */
  keywords: number[] | Partial<Keyword>[];

  /** Multiplayer modes for this game */
  multiplayer_modes: number[] | Partial<MultiplayerMode>[];

  name: string;

  /** If a DLC, expansion or part of a bundle, this is the main game or bundle */
  parent_game: number | Partial<Game>;

  /** Platforms this game was released on */
  platforms: number[] | Partial<Platform>[];

  /** The main perspective of the player */
  player_perspectives: number[] | Partial<PlayerPerspective>[];

  /** Ports of this game */
  ports: number[] | Partial<Game>[];

  /** Average IGDB user rating */
  rating: number;

  /** Total number of IGDB user ratings */
  rating_count: number;

  /** Release dates of this game */
  release_dates: number[] | Partial<ReleaseDate>[];

  /** Remakes of this game */
  remakes: number[] | Partial<Game>[];

  /** Remasters of this game */
  remasters: number[] | Partial<Game>[];

  /** Screenshots of this game */
  screenshots: number[] | Partial<Screenshot>[];

  /** Similar games */
  similar_games: number[] | Partial<Game>[];

  /** A url-safe, unique, lower-case version of the name */
  slug: string;

  /** Standalone expansions of this game */
  standalone_expansions: number[] | Partial<Game>[];

  /** The status of the games release */
  status: GameStatus;

  /** A short description of a games story */
  storyline: string;

  /** A description of the game */
  summary: string;

  /** Related entities in the IGDB API */
  tags: number[];

  /** Themes of the game */
  themes: number[] | Partial<Theme>[];

  /** Average rating based on both IGDB user and external critic scores */
  total_rating: number;

  /** Total number of user and external critic scores */
  total_rating_count: number;

  /** The last date this entry was updated in the IGDB database */
  updated_at: number;

  /** The website address (URL) of the item */
  url: string;

  /** If a version, this is the main game */
  version_parent: number | Partial<Game>;

  /** Title of this version (i.e Gold edition) */
  version_title: string;

  /** Videos of this game */
  videos: number[] | Partial<GameVideo>[];

  /** Websites associated with this game */
  websites: number[] | Partial<Website>[];
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
```
