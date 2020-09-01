import React from 'react';
import './index.scss';

const TestScreen = () => (
    <main className='main-container'>
        <h1 className='main-container-heading'>{process.env.NODE_ENV}</h1>
    </main>
);

export default TestScreen;
