import * as React from 'react';

interface Props {
    header: string;
}

export class Component extends React.Component<Props, undefined> {
    render() {
        return (
            <div className='container'>
                <div className='container-header'>
                    {this.props.header}
                </div>
                {this.props.children}
            </div>
        );
    }
}