import axios from 'axios'

const withKey = axios.create()

withKey.interceptors.request.use(config => {
  config.params = {
    api_key: 'BPuLiii9R4MRzJMTVA9OdkR3Nlu9Vt0RfbEwgNtc',
    ...config.params
  }

  return config
})

export { withKey }