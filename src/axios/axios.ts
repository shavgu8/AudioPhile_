import axios from "axios";
const BaseUrl = 'http://localhost:3000'

const api = axios.create({
   baseURL:BaseUrl,
   timeout:20 * 1000,
   timeoutErrorMessage:"timed out",
   
})
api.interceptors.request.use(async(req)=>{
   req.headers['Accept'] = 'aplication/json',
   req.headers['Content-Type'] = 'aplication/json'
   return req
})

export default api