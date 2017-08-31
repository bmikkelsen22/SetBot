import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Add from './add/add';

const element = document.getElementById('main-element');

export class Component extends React.Component<undefined, undefined> {
    render() {
        return (
            <div id='main-page' className='flex-wrap-container'>
                <Add.Component onAddCard={(card) => alert(card)}/>
                
            </div>
        );
    }
}

//TODO: move this
ReactDOM.render(<Component/>, element);
