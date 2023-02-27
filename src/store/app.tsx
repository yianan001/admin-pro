import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import cookie from 'js-cookie'
const getList = (id: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        json: () => {
          return {
            id,
            name: 'test'
          }
        }
      })
    }, 1000)
  })
}
export const fetchUserById = createAsyncThunk('users/fetchByIdStatus', async(id: string) => {
  const response: any = await getList(id)
  return response.json()
})
export const countSlice = createSlice({
  name: 'app',
  initialState: {
    token: cookie.get('token') || '',
    list: [] as any[],
    menuAuth: ['*'] as string[]
  },
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload
      // cookie中 设置 token，  有效时间10分钟
      cookie.set('token', action.payload, { expires: 1 / 24 / 6 })
    },
    setMenuAuth(state, action: PayloadAction<string[]>) {
      state.menuAuth = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.list.push(action.payload)
    })
  }
})

export const { setToken, setMenuAuth } = countSlice.actions

export default countSlice.reducer