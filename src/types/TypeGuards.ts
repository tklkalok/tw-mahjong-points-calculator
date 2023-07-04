import { 
    Flower,
    Plant,
    Season,
} from './Type.ts';

import {
    SPRING,
    SUMMER, 
    AUTUMN,
    WINTER,
    PLUM,
    ORCHID,
    BAMBOO,
    CHRYSANTHEMUM,
} from './Type.ts'

function isSeason(flower: Flower): flower is Season {
    return flower === SPRING || flower === SUMMER || flower === AUTUMN || flower === WINTER;;
}

function isPlant(flower: Flower): flower is Plant {
    return flower === PLUM || flower === ORCHID || flower === BAMBOO || flower === CHRYSANTHEMUM;;
}