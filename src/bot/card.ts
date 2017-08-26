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