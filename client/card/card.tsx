import * as React from 'react';
import { Card, CardExtensions } from './model';

interface Props {
    card: Card;
    height: number;
    width: number;
}

export class CardComponent extends React.Component<Props, undefined> {
    render() {
        const file = 'icons/' + CardExtensions.getSvgFile(this.props.card);
        return (
            <img src={file} height={this.props.height} width={this.props.width} />
        );
    }
}