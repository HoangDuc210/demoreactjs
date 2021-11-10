import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
  A11y
} from "swiper/core";
import "swiper/swiper-bundle.css";
import { CLink, CModalHeader } from '@coreui/react';
import {CModal,CModalBody,CModalTitle} from '@coreui/react'

function StyleHair(props) {

    const [modal, setModal] = useState(false);

    SwiperCore.use([Navigation, Pagination, Autoplay, Virtual, A11y]);

    return (
        <>
            <div className='style-hair bg-white pt-5 pb-5'>
                <div className='container'>
                    <p className='title_t text-center mb-3'>Các mẫu tóc nữ hot cho năm nay</p>
                    <Swiper
                        spaceBetween={15}
                        modules={[Pagination, Autoplay]}
                        slidesPerView={4}

                        pagination={{ clickable: true }}

                    >

                        <SwiperSlide >
                            <div className='box-style-hair'>
                                <CLink to={''} title='' className={'box-img'}>
                                    <img src="https://isinhvien.com/wp-content/uploads/2021/04/kie%CC%82%CC%89u-to%CC%81c-%C4%91e%CC%A3p-phu%CC%80-ho%CC%9B%CC%A3p-vo%CC%9B%CC%81i-tu%CC%9B%CC%80ng-gu%CC%9Bo%CC%9Bng-ma%CC%A3%CC%86t-cho-nu%CC%9B%CC%8335.jpeg" alt="" />
                                </CLink>
                                <i className="fa fa-eye" aria-hidden="true" onClick={() => setModal(true)}></i>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide >
                            <div className='box-style-hair'>
                                <CLink to={''} title='' className='box-img'>
                                    <img src="https://isinhvien.com/wp-content/uploads/2021/04/kie%CC%82%CC%89u-to%CC%81c-%C4%91e%CC%A3p-phu%CC%80-ho%CC%9B%CC%A3p-vo%CC%9B%CC%81i-tu%CC%9B%CC%80ng-gu%CC%9Bo%CC%9Bng-ma%CC%A3%CC%86t-cho-nu%CC%9B%CC%8335.jpeg" alt="" />
                                </CLink>
                                <i className="fa fa-eye" aria-hidden="true"></i>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='box-style-hair'>
                                <CLink to={''} title='' className='box-img'>
                                    <img src="https://isinhvien.com/wp-content/uploads/2021/04/kie%CC%82%CC%89u-to%CC%81c-%C4%91e%CC%A3p-phu%CC%80-ho%CC%9B%CC%A3p-vo%CC%9B%CC%81i-tu%CC%9B%CC%80ng-gu%CC%9Bo%CC%9Bng-ma%CC%A3%CC%86t-cho-nu%CC%9B%CC%8335.jpeg" alt="" />
                                </CLink>
                                <i className="fa fa-eye" aria-hidden="true"></i>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='box-style-hair'>
                                <CLink to={''} title='' className='box-img'>
                                    <img src="https://isinhvien.com/wp-content/uploads/2021/04/kie%CC%82%CC%89u-to%CC%81c-%C4%91e%CC%A3p-phu%CC%80-ho%CC%9B%CC%A3p-vo%CC%9B%CC%81i-tu%CC%9B%CC%80ng-gu%CC%9Bo%CC%9Bng-ma%CC%A3%CC%86t-cho-nu%CC%9B%CC%8335.jpeg" alt="" />
                                </CLink>
                                <i className="fa fa-eye" aria-hidden="true"></i>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
            <div className='style-hair  pt-5 pb-5'>
                <div className='container'>
                    <p className='title_t text-center mb-3'>Các mẫu tóc nam hot cho năm nay</p>
                    <Swiper
                        spaceBetween={15}
                        modules={[Pagination, Autoplay]}
                        slidesPerView={4}

                        pagination={{ clickable: true }}

                    >

                        <SwiperSlide >
                            <div className='box-style-hair'>
                                <CLink to={''} title='' className={'box-img'}>
                                    <img src="https://hocnghetoc.edu.vn/wp-content/uploads/2020/12/kieu-toc-ngan-dep-cho-nam-1.jpg" alt="" />
                                </CLink>
                                <i className="fa fa-eye" aria-hidden="true" onClick={() => setModal(true)}></i>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='box-style-hair'>
                                <CLink to={''} title='' className={'box-img'}>
                                    <img src="https://hocnghetoc.edu.vn/wp-content/uploads/2020/12/kieu-toc-ngan-dep-cho-nam-1.jpg" alt="" />
                                </CLink>
                                <i className="fa fa-eye" aria-hidden="true" onClick={() => setModal(true)}></i>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='box-style-hair'>
                                <CLink to={''} title='' className={'box-img'}>
                                    <img src="https://hocnghetoc.edu.vn/wp-content/uploads/2020/12/kieu-toc-ngan-dep-cho-nam-1.jpg" alt="" />
                                </CLink>
                                <i className="fa fa-eye" aria-hidden="true" onClick={() => setModal(true)}></i>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='box-style-hair'>
                                <CLink to={''} title='' className={'box-img'}>
                                    <img src="https://hocnghetoc.edu.vn/wp-content/uploads/2020/12/kieu-toc-ngan-dep-cho-nam-1.jpg" alt="" />
                                </CLink>
                                <i className="fa fa-eye" aria-hidden="true" onClick={() => setModal(true)}></i>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>

            <CModal 
              show={modal} 
              onClose={setModal}
            >
              <CModalHeader closeButton>
                <CModalTitle>Modal title</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </CModalBody>
             
            </CModal>
        </>
    );
}

export default StyleHair;