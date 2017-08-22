import { Bot } from './bot';
import { Card, Shape, Shade } from './card';
import { Game } from './game';
import * as fs from 'fs';

function main(fileName: string, all: boolean) {
    console.log('Reading file ' + fileName);
    let fileContents = fs.readFileSync(fileName, 'utf8');
    let fileLines = fileContents.split(/\r|\n/).filter(s => s !== '' && s[0] !== '/');
    
    let cards: Card[] = [];
    fileLines.forEach(line => {
        let card = parseInput(line);
        if (card) {
            cards.push(card);
        }
    });
    
    let game = new Game(cards);
    let bot = new Bot(game);
    let sets = bot.findSets();
    if (all) {
        console.log('All possible sets:');
        sets.forEach(set => printSet(set));
    } else {
        console.log('Sets found with distinct cards:')
        let distinct = bot.distinctSets(sets);
        distinct.forEach(distinctSet => printSet(distinctSet));
    }
}

function parseInput(input: string): Card {
    let inputArray = input.split(' ');
    let newShape: Shape;
    let newShade: Shade;
    let newCount: number;

    if (inputArray.length !== 3) {
        return null;
    }

    switch (inputArray[0]) {
        case '1': { newCount = 1; break; }
        case '2': { newCount = 2; break; }
        case '3': { newCount = 3; break; }
        default: { return null; }
    }

    switch (inputArray[1]) {
        case 'd': { newShape = Shape.diamond; break; }
        case 'o': { newShape = Shape.oval; break; }
        case 's': { newShape = Shape.squiggle; break; }
        default: { return null; }
    }

    switch (inputArray[2]) {
        case 'e': { newShade = Shade.empty; break; }
        case 's': { newShade = Shade.shaded; break; }
        case 'f': { newShade = Shade.full; break; }
        default: { return null; }
    }

    return new Card(newCount, newShape, newShade);
}

function printSet(set: Card[]) {
    let setString = '- Set: \n'
    set.forEach((c, i) => {
        setString += '  ' + (i + 1).toString() + '. ' + c.toString() + '\n';
    });
    console.log(setString);
}

let file = process.argv[2] || 'cards.txt';
let all = process.argv[3] === '-a' || process.argv[3] === '-all';
main(file, all);
