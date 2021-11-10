import { CLink } from '@coreui/react';
import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

function Footter(props) {

    const validationSchema = yup.object().shape({

        email: yup.string()
            .trim().required('Vui lòng nhập email!!!')
            .email("Email không đúng định dạng!!!"),


    });

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(validationSchema)

    });

    const onSubmit = data => {

        
    };


    return (
        <>
            <footer className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3'>
                            <p className='title'>Tên công ty</p>
                            <CLink className='logo' >
                                <img src="" alt="" />
                            </CLink>
                            <div className='footer-intro'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquam magni alias. Alias inventore a minima quos repellat corporis nam, mollitia rem unde consequuntur neque illum officiis perferendis vero sed!
                            </div>
                            <div className='contact'>
                                <p>Số điện thoại: <a href={"tel:0336130034"} title=''>0336130034</a></p>
                                <p>Email: <a href={"mailto:nguyenduchoang12c@gmail.com"} title=''>nguyenduchoang12c@gmail.com</a></p>
                                <p>Địa chỉ: Xuân Đỉnh, Bắc Từ Liêm, Hà Nội</p>
                            </div>
                        </div>
                        <div className='col-3'>
                            <ul>
                                <li><CLink to={''}>Sản phẩm</CLink></li>
                                <li><CLink to={''}>Sản phẩm</CLink></li>
                                <li><CLink to={''}>Sản phẩm</CLink></li>
                                <li><CLink to={''}>Sản phẩm</CLink></li>
                                <li><CLink to={''}>Sản phẩm</CLink></li>
                            </ul>
                        </div>
                        <div className='col-3'>
                            <ul>
                                <li><CLink to={''}>Giới thiệu</CLink></li>
                                <li><CLink to={''}>Liên hệ</CLink></li>
                            </ul>
                        </div>
                        <div className='col-3'>
                            <p className='title'>
                                Đăng ký nhận ưu đãi!
                            </p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group mb-0">
                                    <input type="text" name="email" className="form-control" ref={register} />
                                    {errors.email && <p className="error">
                                        <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                        {errors.email?.message}</p>}
                                </div>
                                <button className='btn btn-primary'><i className="fa fa-plane" aria-hidden="true"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
                
                    <p className='copyright'>Copyright </p>
                
            </footer>
        </>
    );
}

export default Footter;