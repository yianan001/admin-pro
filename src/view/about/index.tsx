import { Space } from 'antd'
// import { useDispatch, useSelector } from 'react-redux'
// import { AppDispatch, RootState } from '../../store'
// import { fetchUserById } from '@/store/app'
import './index.less'
// import { uid } from 'uid'
import { useLayoutEffect, useRef } from 'react'
import JSMpeg from '@cycjimmy/jsmpeg-player'

const About = () => {
  const refDIv = useRef<HTMLDivElement>(null)
  // const list = useSelector((state: RootState) => state.app.list)
  // const dispatch = useDispatch<AppDispatch>()


  // const handlerSetToken = () => { // 异步修改STORE
  //   dispatch(fetchUserById(uid()))
  // }

  // 获取学生列表
  useLayoutEffect(() => {
    if (refDIv.current) {
      new JSMpeg.VideoElement('#videoWrapper', `ws://192.168.22.205:9999/rtsp?url=${btoa('rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4')}`, {
        autoplay: true,
        loop: true
      })
    }
  }, [])
  return (
    <div className='about'>
      <Space direction='vertical'>
        <div ref={refDIv} style={{ width: '300px', height: '300px' }} id='videoWrapper'></div>
      </Space>
    </div>
  )
}

export default About