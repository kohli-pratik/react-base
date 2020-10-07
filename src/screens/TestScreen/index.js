import React from 'react';
import './index.scss';

const TestScreen = () => (
    <main className='main-container'>
        <h1 className='main-container-heading'>{`h1 - ${process.env.NODE_ENV}`}</h1>
        <h2 className='main-container-heading'>{`h2 - ${process.env.NODE_ENV}`}</h2>
        <h3 className='main-container-heading'>{`h3 - ${process.env.NODE_ENV}`}</h3>
        <h4 className='main-container-heading'>{`h4 - ${process.env.NODE_ENV}`}</h4>
        <h5 className='main-container-heading'>{`h5 - ${process.env.NODE_ENV}`}</h5>
        <h6 className='main-container-heading'>{`h6 - ${process.env.NODE_ENV}`}</h6>
        <p className='subtitle'>This is a subtitle</p>
        <p className='body'>body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.</p>
        <button>create order</button>
    </main>
);

export default TestScreen;
