import * as React from 'react';
import { Card, CardExtensions } from './model';

interface Props {
    card: Card;
    height: number;
    width: number;
    onClick?: (card: Card) => void;
}

export class CardComponent extends React.Component<Props, undefined> {
    render() {
        const file = 'icons/' + CardExtensions.getSvgFile(this.props.card);
        let jsx: JSX.Element;
        if (this.props.onClick) {
            jsx = (
                <img src={file} 
                    height={this.props.height} 
                    width={this.props.width} 
                    onClick={() => this.props.onClick(this.props.card)}/>
            );
        } else {
            jsx = (
                <img src={file} 
                    height={this.props.height} 
                    width={this.props.width} />
            );
        }
        return jsx; 
    }
}