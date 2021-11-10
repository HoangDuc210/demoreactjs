import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slideshow from '../slideshow/Slideshow'
import { CLink } from '@coreui/react';
import StyleHair from '../stylehair/StyleHair';

function Home() {
    const [products, setProducts] = useState([]);



    const getProuducts = () => {
        axios.get("https://5f2e1546808569001692380c.mockapi.io/dataAPI/products").then(res => {
            setProducts(res.data);
        });
    }

    useEffect(() => {
        getProuducts();
    }, []);



    return (
        <>
            <Slideshow></Slideshow>
            <div className='introduction'>
                <div className='container mt-5 mb-5'>
                    <div className='row'>
                        <div className='col-6'>
                            <CLink href="" className='box-img' title=''>
                                <img src={"https://image.freepik.com/free-vector/barber-shop-vertical-banners-set_1284-11893.jpg"} alt="" />
                            </CLink>
                        </div>
                        <div className='col-6'>
                            <div className='box-intro'>
                                <h2 className='title'>Baber Anh Tran</h2>
                                <div className='s-content'>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio laboriosam accusamus quia, cupiditate voluptas iste impedit doloribus officia cum mollitia ab in placeat nemo quis earum. Nam, aperiam. Qui, ea?</p>
                                    <ul>
                                        <li>Lorem, ipsum dolor sit amet consectetur</li>
                                        <li>Lorem, ipsum dolor sit amet consectetur sit amet consectetur</li>
                                        <li>Lorem, ipsum dolor sit amet consectetur sit amet consectetur</li>
                                        <li>Lorem, ipsum dolor sit amet consectetur sit amet consectetur</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <StyleHair></StyleHair>

            <div className='pro bg-white pt-5 pb-5'>
                <div className='container'>
                    <p className='title_t text-center mb-3'>Sản phẩm dưỡng tóc dành cho nữ</p>
                    <div className='row'>
                        {products.map((pro, index) => {
                            return (
                                <div className='col-3 pl-2 pr-2 mb-3' key={index}>
                                    <div className='pro-card'>
                                        <CLink to={""} className={"box-img"} title={pro.name}>
                                            <img src={pro.img} alt="" />
                                        </CLink>
                                        <div className='card-main mt-3'>
                                            <h2 className='title'>
                                                <CLink to={""} title={pro.name}>
                                                    {pro.name}
                                                </CLink>
                                            </h2>
                                            <div className='box-price'>
                                                <p className='price'>{pro.price} đ</p>
                                                <p className='proce_old'>{pro.price_old} đ</p>
                                            </div>
                                            <div className='short_content'>{pro.short_content}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className='pro  pt-5 pb-5'>
                <div className='container'>
                    <p className='title_t text-center mb-3'>Sản phẩm cho nam</p>
                    <div className='row'>
                        {products.map((pro, index) => {
                            return (
                                <div className='col-3 pl-2 pr-2 mb-3' key={index}>
                                    <div className='pro-card'>
                                        <CLink to={""} className={"box-img"} title={pro.name}>
                                            <img src={pro.img} alt="" />
                                        </CLink>
                                        <div className='card-main mt-3'>
                                            <h2 className='title'>
                                                <CLink to={""} title={pro.name}>
                                                    {pro.name}
                                                </CLink>
                                            </h2>
                                            <div className='box-price'>
                                                <p className='price'>{pro.price} đ</p>
                                                <p className='proce_old'>{pro.price_old} đ</p>
                                            </div>
                                            <div className='short_content'>{pro.short_content}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home
