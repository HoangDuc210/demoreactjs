import React, { memo } from 'react';
import Header from './header/Header';
import Footter from './footer/Footter';
import Content from './Content';

function Layout(props) {
    return (
        <>
            <Header />
            <Content />
            <Footter/>
        </>
    );
}

export default memo(Layout);