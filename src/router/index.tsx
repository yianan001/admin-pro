import Layout from '@/layout'
import { AppDispatch } from '@/store'
import { setToken } from '@/store/app'
import { Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useRoutes } from 'react-router'
import About from '../view/about'

const Login = () => {
  const navigate = useNavigate()
  const disaptch = useDispatch<AppDispatch>()
  const handleLogin = () => {
    disaptch(setToken('132'))
    navigate(-1)
  }
  return <div onClick={handleLogin}>Login</div>
}
export const router = [
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: '/',
    title: '首页',
    element: <Layout />,
    children: [
      {
        path: 'home',
        title: '首页',
        element: <div>Home</div>
      },
      {
        path: 'ad',
        title: '广告',
        element: <div>ad</div>
      },
      {
        path: 'about',
        title: '关于',
        element: <About></About>
      },
      {
        path: '*',
        element: <Spin></Spin>
      }

    ]
  }
]
const Routers = () => {
  const routeAuth = useSelector((state: any) => state.app.menuAuth)
  const routers = router.map((item: any) => {
    if (item.path === '/') {
      return {
        ...item,
        children: item.children.filter((child: any) => routeAuth.includes(child.path))
      }
    }
    return item
  })
  const routes = useRoutes(routers)
  return routes
}
export default Routers