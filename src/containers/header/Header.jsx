import { CLink } from '@coreui/react';
import React, { memo } from 'react';
import Categories from './Categories';
import Menu from './MenuComponent';

function Header(props) {

    return (
        <>
            <header className='header sticky'>
                <div className='container pt-2 pb-2'>
                    <div className='row align-items-center'>
                        <div className='col-2'>
                            <CLink to={''} title='' className="logo">
                                Logo
                            </CLink>
                        </div>
                        <div className='col-8'>
                            <form action="" className='form-search'>
                                <input type="text" className='form-control' placeholder='Tìm kiếm ...' />
                                <button className='btn btn-search' type='submit'><i className="fa fa-search" aria-hidden="true"></i></button>
                            </form>
                        </div>
                        <div className='col-2'>
                            <div className='contact'>
                                <CLink to={''} className='d-block' title=''>0336130034</CLink>
                                <CLink to={''} className='d-block' title=''>nguyenduchoang12c5@gmail.com</CLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='header-menu'>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='col-3'>
                                <Categories />
                            </div>
                            <div className='col-6'>
                                <Menu />
                            </div>
                            <div className='col-3'></div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default memo(Header);