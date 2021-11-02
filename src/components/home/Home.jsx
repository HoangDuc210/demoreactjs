import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
    CCol,
    CDataTable,
    CRow,
    CPagination,
    CContainer,
    CButton,
    CForm,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CFormGroup
} from '@coreui/react'
import axios from 'axios';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import { injectStyle } from "react-toastify/dist/inject-style";

if (typeof window !== "undefined") {
    injectStyle();
}
const validationSchema = yup.object().shape({
    title: yup.string().trim().required('Please enter a title!!!').max(225, "Title exceeds 225 characters!!!"),
    content: yup.string().trim().required('Please enter content!!!').max(10000, "Content exceeds 10000 characters!!!"),
    username: yup.string().trim().required('Please enter username!!!').max(100, "Content exceeds 100 characters!!!")
});

const Home = () => {

    const [posts, setPosts] = useState([]);
    const [modal, setModal] = useState(false)
    const [nameSearch, setNameSearch] = useState("");

    const history = useHistory()
    const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
    const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
    const [page, setPage] = useState(currentPage)

    const pageChange = newPage => {
        currentPage !== newPage && history.push(`/?page=${newPage}`)
    }

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(validationSchema)

    });


    const getPost = () => {
        axios.get("https://5f2e1546808569001692380c.mockapi.io/dataAPI/posts")
            .then(res => {
                setPosts(res.data);

            })
            .catch((error) => {

            })
    }

    useEffect(() => {
        getPost()
    }, []);

    useEffect(() => {
        currentPage !== page && setPage(currentPage)
    }, [currentPage, page])


    const onSubmit = (data) => {
        axios.post("https://5f2e1546808569001692380c.mockapi.io/dataAPI/posts", data)
            .then(res => {
                toast.success("Add post success!");
                setTimeout(() => {
                    setModal(false)
                    setValue("title", '');
                    setValue("content", '');
                    setValue("username", '');
                    getPost();
                }, 1000);

            })
            .catch((error) => {
                toast.error("Add post error!");
            });
    }

    const search = (e) => {
        e.preventDefault();
        history.push(`/?search=${nameSearch}`)
        axios.get("https://5f2e1546808569001692380c.mockapi.io/dataAPI/posts")
            .then(res => {
                const newSearch = res.data.filter((post) => {
                    return Object.values(post).join(" ").toLowerCase().includes(nameSearch.toLowerCase());
                })

                setPosts(newSearch);

            })
            .catch((error) => {

            })

    }

    const cancel = () => {
        setModal(false);
        setValue("title", '');
        setValue("content", '');
        setValue("username", '');
    }
    return (
        <>
            <CContainer className="mt-3">
                <div className='posts'>
                    <form onSubmit={search} className='row mb-5'>
                        <CCol xl={11}>
                            <input type='text' className="form-control" placeholder='Enter text to search' onChange={(e) => setNameSearch(e.target.value)} />
                        </CCol>
                        <CCol xl={1}>
                            <CButton className="btn btn-primary" type='submit'>Search</CButton>
                        </CCol>
                    </form>

                    <div className="d-flex justify-content-end mb-3">
                        <CButton className={"btn"} onClick={() => setModal(true)}>Add post</CButton>
                    </div>

                    <CRow>
                        <CCol xl={12}>

                            <CDataTable
                                items={posts}
                                fields={[
                                    { key: 'title', _classes: 'font-weight-bold' },
                                    { key: 'username', _classes: 'font-weight-bold' },
                                    { key: 'createdAt', _classes: 'font-weight-bold' }

                                ]}
                                hover
                                striped
                                itemsPerPage={5}
                                activePage={page}
                            />

                            {posts.length > 5 ?
                                <CPagination
                                    activePage={page}
                                    onActivePageChange={pageChange}
                                    pages={Math.ceil(posts.length / 5)}
                                    doubleArrows={false}
                                    align="center"
                                />

                                : ''}

                        </CCol>
                    </CRow>
                </div>
            </CContainer>

            <CModal show={modal} onClose={setModal}>
                <CForm onSubmit={handleSubmit(onSubmit)}>
                    <CModalHeader closeButton>
                        <CModalTitle className="text-center">Add a post</CModalTitle>
                    </CModalHeader>
                    <CModalBody className="text-center">
                        <CFormGroup>
                            <input type='text' name='title' className='form-control' placeholder='Post title' ref={register} />
                            {errors.title && <p className="error">
                                <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                {errors.title?.message}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <textarea className='form-control' name='content' placeholder='Post content' ref={register} />
                            {errors.content && <p className="error">
                                <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                {errors.content?.message}</p>}
                        </CFormGroup>
                        <CFormGroup>
                            <input type='text' name='username' className='form-control' placeholder='Post username' ref={register} />
                            {errors.username && <p className="error">
                                <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                {errors.username?.message}</p>}
                        </CFormGroup>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="primary" type='submit'>Submit</CButton>
                        <CButton color="secondary" onClick={() => cancel()}>Cancel</CButton>
                    </CModalFooter>
                </CForm>
            </CModal>
            <ToastContainer autoClose={1000} />
        </>

    )
}

export default Home
