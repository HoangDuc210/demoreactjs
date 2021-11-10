import { CLink } from '@coreui/react';
import React, {memo, useEffect, useState} from 'react';
import Menu from './MenuComponent';
import logo from '../../asset/images/logo.png';


function Header(props) {

    const [header, setHeader] = useState("");

    const scrollMenu = () => {
        
		window.addEventListener("scroll", function(event) { 
			var scroll_y = this.scrollY; 
			console.log(scroll_y); 

            if (scroll_y > 300) {
                setHeader("header_fix");
            }else{
                setHeader("");
            }
			
		}); 
    }

    useEffect(() =>{
        scrollMenu();
    })

    return (
        <>
            <header className={'header ' + header} >
                <div className='container pt-2 pb-2'>
                    <div className='row align-items-center'>
                        <div className='col-2'>
                            <CLink to={''} title='' className="logo">
                                <img src={logo} alt="" />
                            </CLink>
                        </div>
                        <div className='col-7'>
                            <Menu />  
                        </div>
                        <div className='col-3'>
                            <form action="" className='form-search'>
                                <input type="text" className='form-control' placeholder='Tìm kiếm ...' />
                                <button className='btn btn-search' type='submit'><i className="fa fa-search" aria-hidden="true"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
               
            </header>
        </>
    );
}

export default memo(Header);