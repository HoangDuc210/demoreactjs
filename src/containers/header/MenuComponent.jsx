import { CLink } from '@coreui/react';
import React from 'react';
import menu from './menuheader';

function Menu(props) {

    
    return (
        <>
            <div className='menu'>
                <ul>
                    {menu.map((m, i) => {

                        return m.route && (
                            <>
                                <li key={i}><CLink to={m.route} title={m.name}>{m.name}</CLink>
                                    {m._children !== undefined ?

                                        <ul>
                                            {m._children.map((mu, u) => {
                                                return (
                                                    <>
                                                        <li key={u}><CLink to={mu.route} title={mu.name}>{mu.name}</CLink></li>
                                                    </>
                                                )
                                            })}
                                        </ul>

                                        : ''}
                                </li>
                            </>

                        )
                    })}

                </ul>
            </div>
        </>
    );
}

export default Menu;