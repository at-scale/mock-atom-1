import {MockReactFooterComponent, MockReactHeaderComponent} from '../index';
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
    <div className='demo'>
        <MockReactHeaderComponent title='Header'/>
        <MockReactFooterComponent text='Footer'/>
    </div>,
    document.getElementById('content')
);
