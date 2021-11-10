import { CLink } from '@coreui/react';
import React from 'react';
import _nav from './menuheader';

function Menu(props) {


    return (
        <>
            <div className='menu'>
                <ul>
                    {_nav.map((nav, index) => {
                        return (
                            <li key={index}>
                                <CLink to={nav.route} title={nav.name}>{nav.name}</CLink>
                                {nav._children !== undefined ?
                                    <ul>

                                        {nav._children.map((c, i) => {
                                            return (
                                                <li key={i}>
                                                    <CLink to={c.to} title={c.name}>{c.name}</CLink>
                                                </li>
                                            );
                                        })}
                                    </ul> : ''
                                }
                            </li>

                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default Menu;