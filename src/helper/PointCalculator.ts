import { Tile, TileDeck} from "../types/Type";
import { 
    RANK1,
    RANK2,
    RANK3,
    RANK4,
    RANK5,
    RANK6,
    RANK7,
    RANK8,
    RANK9,
    DOT_SUIT,
    SPRING,
    SUMMER,
    AUTUMN,
    WINTER,
    SUIT_TYPE,
    FLOWER_TYPE,
    CHARACTER_SUIT,
    PLUM,
    ORCHID,
    BAMBOO,
    CHRYSANTHEMUM,
    PLAYER_YOURSELF, 
    PLAYER_NEXT_TO_YOU, 
    PLAYER_TWO_NEXT_TO_YOU, 
    PLAYER_THREE_NEXT_TO_YOU
} from "../types/Type"

class PointCalculator{
    constructor(){
        let self = this,
            pointList = [],
            currentWind = SPRING,
            currentDealer = PLAYER_YOURSELF,
            correctFlowerPos = currentDealer === PLAYER_YOURSELF ? 0 : 4 - currentDealer;

        console.log("DEBUG: correctFlowerPos: ", correctFlowerPos);

        let firstTile: Tile = {
            type: SUIT_TYPE,
            value: {
                type: DOT_SUIT,
                rank: RANK1
            }
        }
        let secondTile: Tile = {
            type: FLOWER_TYPE,
            value: SPRING
        }

        let thirdTile: Tile = {
            type: FLOWER_TYPE,
            value: PLUM
        }

        let myDeck: TileDeck = {
            tiles: [firstTile, secondTile, thirdTile]
        }
    }

    // calCorrectFlowerPos = (currentDealer) => {

    // }

    checkIsPlant = (tile: Tile) => {
        const PLANTS = [PLUM, ORCHID, BAMBOO, CHRYSANTHEMUM];
        return tile.type === FLOWER_TYPE && PLANTS.includes(tile.value);
    }

    checkIsSeason = (tile: Tile) => {
        const SEASONS = [SPRING, SUMMER, AUTUMN, WINTER];
        return tile.type === FLOWER_TYPE && SEASONS.includes(tile.value);
    }

    checkNoFlower = (deck: TileDeck) => {
        let noFlower = true;
        deck.tiles.forEach((tile: Tile) => {
            if(tile.type === FLOWER_TYPE){
                noFlower = false
            }
        });
        return noFlower ? 1 : 0
    }
}

export default PointCalculator;