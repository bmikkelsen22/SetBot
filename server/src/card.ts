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

export class Card {
    count: number;
    shape: Shape;
    shade: Shade;

    constructor(count: number, shape: Shape, shade: Shade) {
        this.count = count;
        this.shape = shape;
        this.shade = shade;
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