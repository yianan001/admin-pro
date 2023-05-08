import { Button, Space } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { fetchUserById } from '@/store/app'
import './index.less'
import { uid } from 'uid'

const About = () => {
  const list = useSelector((state: RootState) => state.app.list)
  const dispatch = useDispatch<AppDispatch>()


  const handlerSetToken = () => { // 异步修改STORE
    dispatch(fetchUserById(uid()))
  }


  return (
    <div className='about'>
      <Space direction='vertical'>
        <h1>about </h1>
        <ul>
          {
            list.map((item) => <li key={item.id}>uid : [{item.id}]</li>)
          }
        </ul>
        <Button style={{ width: '120px' }} type='primary' onClick={handlerSetToken}>异步修改STORE</Button>
      </Space>
    </div>
  )
}

export default About