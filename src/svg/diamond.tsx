import * as React from 'react';
import { Color, CardExtensions } from '../card/model';

interface Props {
    width: number,
    height: number,
    color: Color
}

export class Diamond extends React.Component<Props, undefined> {
    render() {
        return (
            <svg height={this.props.height} width={this.props.width}>
                <rect transform='rotate(45); skewX(15) skewY(-15)' />
            </svg>
        );
    }
}

