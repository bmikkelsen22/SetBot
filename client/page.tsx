import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AddCard } from './add/add';

const element = document.getElementById('main-element');

export class Page extends React.Component<undefined, undefined> {
    render() {
        return (
            <div id='main-page' className='flex-wrap-container'>
                <AddCard onAddCard={(card) => alert(card)}/>
                
            </div>
        );
    }
}

//TODO: move this
ReactDOM.render(<Page/>, element);
