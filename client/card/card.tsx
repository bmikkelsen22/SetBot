import * as React from 'react';
import { Card, CardExtensions } from './model';

export class CardComponent extends React.Component<Card, undefined> {
    render() {
        const file = 'icons/' + CardExtensions.getSvgFile(this.props);
        return (
            <img src={file} />
        );
    }
}