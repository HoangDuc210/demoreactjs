const _nav =  [
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

export default _nav
