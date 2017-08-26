import { Card, Shade, Shape, Color } from './card';

export class Game {
    cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    addCard(card: Card) {
        this.cards.push(card);
    }

    checkSet(set: Card[]) {
        if (set.length === 3) {
            let containsSet = true;
            set.forEach(c => {
                if (this.cards.indexOf(c) === -1) {
                    containsSet = false;
                }
            });
            return this.countsValid(set.map(c => c.count)) 
                && this.shadesValid(set.map(c => c.shade))
                && this.shapesValid(set.map(c => c.shape))
                && this.colorsValid(set.map(c => c.color))
                && containsSet;
        }
        return false;
    }

    // checkAndRemoveSet(set: Card[]) {
    //     const isSet = this.checkSet(set);
    //     if (isSet) {
    //         set.forEach((c) => { 
    //             let cardIndex = this.cards.indexOf(c);
    //             this.cards.splice(cardIndex, 1);
    //         });
    //     }
    //     return isSet;
    // }

    private countsValid(counts: number[]) {
        if (counts[0] === counts[1] && counts[1] === counts[2]) {
            return true;
        } else {
            if (counts.indexOf(1) === -1) { return false; }
            if (counts.indexOf(2) === -1) { return false; }
            if (counts.indexOf(3) === -1) { return false; }
        }
        return true;
    }

    private shadesValid(shades: Shade[]) {
        if (shades[0] === shades[1] && shades[1] === shades[2]) {
            return true;
        } else {
            if (shades.indexOf(Shade.empty) === -1) { return false; }
            if (shades.indexOf(Shade.full) === -1) { return false; }
            if (shades.indexOf(Shade.shaded) === -1) { return false; }
        }
        return true;
    }

    private shapesValid(shapes: Shape[]) {
        if (shapes[0] === shapes[1] && shapes[1] === shapes[2]) {
            return true;
        } else {
            if (shapes.indexOf(Shape.diamond) === -1) { return false; }
            if (shapes.indexOf(Shape.oval) === -1) { return false; }
            if (shapes.indexOf(Shape.squiggle) === -1) { return false; }
        }
        return true;
    }

    private colorsValid(colors: Color[]) {
        if (colors[0] === colors[1] && colors[1] === colors[2]) {
            return true;
        } else {
            if (colors.indexOf(Color.green) === -1) { return false; }
            if (colors.indexOf(Color.purple) === -1) { return false; }
            if (colors.indexOf(Color.red) === -1) { return false; }
        }
        return true;
    }
}