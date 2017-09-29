import React from 'react';
import Notes from './Notes';

export default () => (
    <div>
        <button onClick={ () => alert('add note')}>+</button>
        <Notes />
    </div>
    );