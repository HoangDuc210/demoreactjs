import { CLink } from '@coreui/react';
function Categories(props) {

    

    const categories = [
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
                    {categories.map((m, i) => {

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

export default Categories;