// eslint-disable-next-line standard/object-curly-even-spacing
import { get, post} from '@/http/index.js'

export const getTestDataApi = (data) => {
  const params = {
    body: data,
    url: '/api/cats'
  }
  return get(params)
}

export const postTestDataApi = (data) => {
  const params = {
    body: data,
    url: '/api/cats'
  }
  return post(params)
}
