import * as React from 'react';
import * as Picker from './picker';
import { Color, Card, Shade, Shape } from '../card/model';

interface State {
    color: Color;
    count: number;
    shade: Shade;
    shape: Shape;
}

interface NameValue {
    name: string;
    value: any;
}

function nv(name: string, value: any): NameValue {
    return {
        name: name,
        value: value
    }
}

export class Component extends React.Component<undefined, State> {
    options = {
        colors: [
            nv('Green', Color.green), 
            nv('Red', Color.red), 
            nv('Purple', Color.purple)
        ],
        counts: [
            nv('One', 1), 
            nv('Two', 2),
            nv('Three', 3)
        ],
        shades: [
            nv('Empty', Shade.empty), 
            nv('Shaded', Shade.shaded), 
            nv('Full', Shade.full)
        ],
        shapes: [
            nv('Diamond', Shape.diamond), 
            nv('Oval', Shape.oval), 
            nv('Squiggle', Shape.squiggle)
        ]
    }

    constructor() {
        super();
        this.state = {
            color: this.options.colors[0].value as Color,
            count: this.options.counts[0].value as number,
            shade: this.options.shades[0].value as Shade,
            shape: this.options.shapes[0].value as Shape
        }
    }

    onSelectColor = (index: number) => {
        this.setState({
            color: this.options.colors[index].value as Color
        });
    }

    onSelectShape = (index: number) => {
        this.setState({
            shape: this.options.shapes[index].value as Shape
        });
    }

    onSelectShade = (index: number) => {
        this.setState({
            shade: this.options.shades[index].value as Shade
        });
    }

    onSelectCount = (index: number) => {
        this.setState({
            count: this.options.counts[index].value as number
        });
    }

    render() {
        return (
            <div className='add-container'>
                <Picker.Component 
                    header='Color'
                    options={this.options.colors.map(c => c.name)}
                    onSelect={this.onSelectColor} />
                <Picker.Component 
                    header='Number'
                    options={this.options.counts.map(c => c.name)}
                    onSelect={this.onSelectCount} />
                <Picker.Component 
                    header='Shape'
                    options={this.options.shapes.map(s => s.name)}
                    onSelect={this.onSelectShape} />
                <Picker.Component 
                    header='Shade'
                    options={this.options.shades.map(s => s.name)}
                    onSelect={this.onSelectShade} />
            </div>
        );
    }
}