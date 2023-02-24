import { Button, message, Space } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { fetchUserById } from '@/store/app'
import './index.less'
import { uid } from 'uid'
import { useEffect, useState } from 'react'
import { unstable_batchedUpdates } from 'react-dom'

const About = () => {
  const list = useSelector((state: RootState) => state.app.list)
  const dispatch = useDispatch<AppDispatch>()
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  const handlerSetToken = () => {
    dispatch(fetchUserById(uid()))
  }

  useEffect(() => {
    console.log('search', { search, page })
  }, [search, page])
  const handlerSearch = () => {
    unstable_batchedUpdates(() => {
      setPage(page + 1)
      setSearch(uid())
      message.success('搜索成功')
    })
  }
  return (
    <div className='about'>
      <Space direction='vertical'>

        <h1> about </h1>

        <ul>
          {
            list.map((item) => (
              <li key={item.id}>{item.name} : [{item.id}]</li>
            ))
          }

        </ul>

        <Button style={{ width: '120px' }} type='primary' onClick={handlerSetToken}>异步修改STORE</Button>

        <div>测试unstable_batchedUpdates</div>
        <Button style={{ width: '120px' }} type='primary' onClick={handlerSearch}>搜索</Button>
      </Space>
    </div>
  )
}

export default About