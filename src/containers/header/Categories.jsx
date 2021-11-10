import { CLink } from '@coreui/react';
function Categories(props) {



    const _nav = [
        {

            name: 'Trang chủ',
            route: '/',
            icon: 'cil-user',
            _children: [
                {
                    name: 'Nhân viên',
                    to: '/dashboard-employees',
                },
                {
                    name: 'Danh sách nhân viên',
                    to: '/employees',
                },
                {
                    name: 'Thêm nhân viên',
                    to: '/add-employee',
                }
            ],
        },
        {

            name: 'Sản phẩm',
            route: '/san-pham',
            icon: 'cil-user',
            _children: [
                {
                    name: 'Dầu ăn',
                    to: '/dashboard-employees',
                },
                {
                    name: 'Danh sách nhân viên',
                    to: '/employees',
                },
                {
                    name: 'Thêm nhân viên',
                    to: '/add-employee',
                }
            ],
        }

    ]

    return (
        <>
            <div className='box-categories'>
                <p className='title' omM>Danh sách danh mục</p>
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

export default Categories;