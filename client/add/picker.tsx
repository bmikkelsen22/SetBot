import * as React from 'react';
import { Color, CardExtensions } from '../card/model';

interface Props {
    header: string;
    options: string[];
    onSelect: (index: number) => void;
}

interface State {
    selected: number;
}

export class Component extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selected: 0
        };
    }

    onOptionClick(index) {
        const newState = {
            selected: index
        }
        this.setState(newState);
    }

    renderOption = (index: number) => {
        let cls = 'option';
        if (this.state.selected === index) {
            cls += ' selected-option';
        }
        return (
            <div className={cls} key={index} onClick={() => this.onOptionClick(index)}>
                {this.props.options[index]}
            </div>
        );
    }

    render() {
        let optionsJsx = this.props.options.map((o, i) => this.renderOption(i))
        return (
            <div className='picker'>
                <div className='picker-header'>
                    {this.props.header}
                </div>
            </div>
        );
    }
}

