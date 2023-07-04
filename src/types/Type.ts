/* Constant */
export const RANK1 = "RANK1";
export const RANK2 = "RANK2";
export const RANK3 = "RANK3";
export const RANK4 = "RANK4";
export const RANK5 = "RANK5";
export const RANK6 = "RANK6";
export const RANK7 = "RANK7";
export const RANK8 = "RANK8";
export const RANK9 = "RANK9";

export const SPRING = "SPRING";
export const SUMMER = "SUMMER";
export const AUTUMN = "AUTUMN";
export const WINTER = "WINTER";

export const PLUM = "PLUM";
export const ORCHID = "ORCHID";
export const BAMBOO = "BAMBOO";
export const CHRYSANTHEMUM = "CHRYSANTHEMUM";

export const EAST = "EAST";
export const SOUTH = "SOUTH";
export const WEST = "WEST";
export const NORTH = "NORTH";

export const RED = "RED";
export const GREEN = "GREEN";
export const WHITE = "WHITE";

export const DOT_SUIT = "DOT";
export const BAMBOO_SUIT = "BAMBOO";
export const CHARACTER_SUIT = "CHARACTER";

export const HONOR_TYPE = "HONOR";
export const SUIT_TYPE = "SUIT";
export const FLOWER_TYPE = "FLOWER";

export const PLAYER_YOURSELF = 0;
export const PLAYER_NEXT_TO_YOU = 1;
export const PLAYER_TWO_NEXT_TO_YOU = 2;
export const PLAYER_THREE_NEXT_TO_YOU = 3;

/* Rank */
export type Rank1 = typeof RANK1;
export type Rank2 = typeof RANK2;
export type Rank3 = typeof RANK3;
export type Rank4 = typeof RANK4;
export type Rank5 = typeof RANK5;
export type Rank6 = typeof RANK6;
export type Rank7 = typeof RANK7;
export type Rank8 = typeof RANK8;
export type Rank9 = typeof RANK9;
export type Rank = Rank1 | Rank2 | Rank3 | Rank4 | Rank5 | Rank6 | Rank7 | Rank8 | Rank9 

/* Honor */
export type Honor = Wind | Dragon

/* Flower */
export type Flower = Season | Plant

/* Season */
export type Spring = typeof SPRING;
export type Summer = typeof SUMMER;
export type Autumn = typeof AUTUMN;
export type Winter = typeof WINTER;
export type Season = Spring | Summer | Autumn | Winter

/* Plant */
export type Plum = typeof PLUM;
export type Orchid = typeof ORCHID;
export type Bamboo = typeof BAMBOO;
export type Chrysanthemum = typeof CHRYSANTHEMUM;
export type Plant = Plum | Orchid | Bamboo | Chrysanthemum

/* Wind */
export type East = typeof EAST;
export type South = typeof SOUTH;
export type West = typeof WEST;
export type North = typeof NORTH;
export type Wind = East | South | West | North

/* Dragon */
export type Red = typeof RED;
export type Green = typeof GREEN;
export type White = typeof WHITE;
export type Dragon = Red | Green | White

/* Suits */
export type DotSuit = typeof DOT_SUIT;
export type BambooSuit = typeof BAMBOO_SUIT;
export type CharacterSuit = typeof CHARACTER_SUIT;
export interface Suit { 
    type: DotSuit | BambooSuit | CharacterSuit,
    rank: Rank
}

/* Tiles */
export type HonorTile = {
    type: typeof HONOR_TYPE;
    value: Honor;
}

export type SuitTile = {
    type: typeof SUIT_TYPE;
    value: Suit;
}

export type FlowerTile = {
    type: typeof FLOWER_TYPE;
    value: Flower
}

export type Tile = HonorTile | SuitTile | FlowerTile 

export type TileDeck = {
    tiles: Tile[];
}