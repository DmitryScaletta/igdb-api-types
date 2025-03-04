# IGDB API Types

TypeScript type definitions for IGDB API endpoint responses.

All types are generated automatically by parsing the [IGDB API docs](https://api-docs.igdb.com/#endpoints) page.

## Installation

```bash
npm i igdb-api-types

pnpm i igdb-api-types

yarn add igdb-api-types
```

## Usage

```ts
import { type Game, GameCategoryEnum } from "igdb-api-types";

const fetchGames = async () => {
  const response = await fetch("https://api.igdb.com/v4/games", {
    method: 'POST',
    headers: {
      "Client-ID": process.env.CLIENT_ID,
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      Accept: "application/json",
    },
    body: `fields *; where category=${GameCategoryEnum.main_game};`,
  });

  if (!response.ok) throw new Error();

  return response.json() as Promise<Game[]>;
}

const games = await fetchGames();

console.log(games);
```

## Scripts

`npm run build` - generate type definitions.

## Example

```ts
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
```
