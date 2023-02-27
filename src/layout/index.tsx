import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components'
import { useEffect, useMemo, } from 'react'
import { Navigate, Outlet, useNavigate, useLocation } from 'react-router'
import { AppDispatch } from '@/store'
import { setMenuAuth } from '@/store/app'
import { useSelector, useDispatch } from 'react-redux'
import { router } from '@/router'

function Layout() {
  const { pathname } = useLocation()
  const token = useSelector((state: any) => state.app.token)
  const routeAuth = useSelector((state: any) => state.app.menuAuth)
  const navigate = useNavigate()
  const disaptch = useDispatch<AppDispatch>()

  useEffect(() => {
    setTimeout(() => {
      disaptch(setMenuAuth(['about', 'ad']))
    }, 1000)
  }, [disaptch])

  const currentRouters = useMemo(() => {
    console.log('#########')
    return router.filter(e => e.path === '/').map(e => {
      return {
        ...e,
        name: e.title,
        children: (e.children || []).filter((child:any) => routeAuth.includes(child.path)).map(e => {
          return {
            ...e,
            name: e.title
          }
        })
      }
    })
  }, [routeAuth])

  if (!token) {
    return <Navigate to='login' />
  }

  return (
    <div className='App'>
      <ProLayout
        logo='https://recoiljs.org/zh-hans/img/logo.svg'// logo
        title=''// 标题
        pure={false}// 是否开启纯净模式
        appList={[{ title: 'Recoil', url: 'https://recoiljs.org/zh-hans/' }]} // 应用列表
        menuFooterRender={
          () => {
            return (
              <div style={{ textAlign: 'center' }}>
                <a href='https://recoiljs.org/zh-hans/' target='_blank' rel='noreferrer'>
                  Recoil
                </a>
              </div>
            )
          }
        }
        onMenuHeaderClick={
          () => {
            console.log('onMenuHeaderClick')
          }
        } // 点击logo

        layout='mix'
        location={{ pathname }}
        route={
          {
            routes: currentRouters
          }
        }
        menuItemRender={(item, dom) => (
          <div onClick={() => { navigate(item.path || '/welcome') }}>
            {dom}
          </div>
        )}>
        <PageContainer
          header={{
            title: null
          }}>
          <ProCard
            style={{
              height: '100%'
              // minHeight: 800,
            }}>
            <div />
            <Outlet></Outlet>
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div >
  )
}

export default Layout
