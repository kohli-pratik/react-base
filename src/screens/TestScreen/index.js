import React from 'react';
import './index.scss';

const TestScreen = () => (
    <main className='main-container'>
        <h1 className='heading-xxxl'>{'Headline xxxl'}</h1>
        <h2 className='heading-xxl'>{'Headline xxl'}</h2>
        <h3 className='heading-xl'>{'Headline xl'}</h3>
        <h4 className='heading-l'>{'Headline l'}</h4>
        <h5 className='heading-m'>{'Headline m'}</h5>
        <h6 className='heading-s'>{'Headline s'}</h6>
        <p className='subtitle'>{`Subtitle - Node Env is ${process.env.NODE_ENV}`}</p>
        <p className='body'>Body - Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.</p>
        <button className='primary'>create order</button>
    </main>
);

export default TestScreen;
