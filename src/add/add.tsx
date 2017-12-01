import * as React from 'react';
import { Picker } from './picker';
import { Container } from '../container';
import { Color, Card, Shade, Shape } from '../card/model';
import { Help } from "./help";

interface Props {
    onAddCard: (card: Card) => void;
}

interface NameValue {
    name: string;
    value: any;
}

interface State {
    showHelp: boolean;
}

function nv(name: string, value: any): NameValue {
    return {
        name: name,
        value: value
    }
}

export class AddCard extends React.Component<Props, Card & State> {
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
            shape: this.options.shapes[0].value as Shape,
            showHelp: false
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

    toggleHelpShown = (show: boolean) => {
        this.setState({
            showHelp: show
        });
    }

    render() {
        return (
            <div id='add-container-wrapper'>
                <div className='add-container'>
                    <Container header='Color'>
                        <Picker
                            options={this.options.colors.map(c => c.name)}
                            onSelect={this.onSelectColor} />
                    </Container>
                    <Container header='Number'>
                        <Picker 
                            options={this.options.counts.map(c => c.name)}
                            onSelect={this.onSelectCount} />
                    </Container>
                    <Container header='Shape'>
                        <Picker 
                            options={this.options.shapes.map(s => s.name)}
                            onSelect={this.onSelectShape} />
                    </Container>
                    <Container header='Shape'>
                        <Picker 
                            options={this.options.shades.map(s => s.name)}
                            onSelect={this.onSelectShade} />
                    </Container>
                </div>
                <div className='add-button-container'>
                    <Help showHelp={this.state.showHelp} toggleShown={this.toggleHelpShown} />
                    <button className='clickable add-button' onClick={() => this.props.onAddCard(this.state)}>Add card</button>
                </div>
            </div>
        );
    }
}