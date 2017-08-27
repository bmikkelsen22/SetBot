export enum Shape {
    diamond,
    oval,
    squiggle
}

export enum Shade {
    empty,
    shaded,
    full
}

export enum Color {
    purple,
    red,
    green
}

export class CardExtensions {
    static fromColor(color: Color) {
        switch (color) {
            case Color.green: { return 'green'; }
            case Color.red: { return 'red'; }
            case Color.purple: { return 'purple'; }
        }
    }

    static getSvgFile(card: Card) {
        let fileName = card.count.toString();
        
        switch (card.shade) {
            case Shade.empty: { fileName += 'o'; break; }
            case Shade.shaded: { fileName += 'h'; break; }
            case Shade.full: { fileName += 's'; break; }   
        }

        switch (card.color) {
            case Color.green: { fileName += 'g'; break; }
            case Color.red: { fileName += 'r'; break; }
            case Color.purple: { fileName += 'p'; break; }
        }

        switch (card.shape) {
            case Shape.diamond: { fileName += 'd'; break; }
            case Shape.oval: { fileName += 'p'; break; }
            case Shape.squiggle: { fileName += 's'; break; }
        }

        fileName += '.svg';
        return fileName;
    }
}

export class Card {
    count: number;
    shape: Shape;
    shade: Shade;
    color: Color;

    constructor(count: number, shape: Shape, shade: Shade, color: Color) {
        this.count = count;
        this.shape = shape;
        this.shade = shade;
        this.color = color;
    }

    equals(other: Card) {
        return this.count === other.count
            && this.shade === other.shade
            && this.shape === other.shape;
    } 

    toString() {
        let str = this.count.toString() + ' ';

        switch (this.shade) {
            case Shade.empty: { str += 'empty '; break; }
            case Shade.shaded: { str += 'shaded '; break; }
            case Shade.full: { str += 'full '; break; }
        }

        switch (this.color) {
            case Color.green: { str += 'green '; break; }
            case Color.red: { str += 'red '; break; }
            case Color.purple: { str += 'purple '; break; }
        }

        switch (this.shape) {
            case Shape.diamond: { 
                str += this.count === 1 ? 'diamond' : 'diamonds'; 
                break; 
            }
            case Shape.oval: { 
                str += this.count === 1 ? 'oval' : 'ovals'; 
                break; 
            }
            case Shape.squiggle: {
                str += this.count === 1 ? 'squiggle' : 'squiggles'; 
                break; 
            }
        }

        return str;
    }
}