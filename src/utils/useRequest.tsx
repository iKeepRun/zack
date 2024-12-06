import axios, { AxiosRequestConfig } from "axios";
import { useRef, useState } from "react";

function useRequest<T>() {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
    
    //取消请求的方法（ref作用：包裹了一个 即使值改变了也不会重新渲染页面）
    const controllerRef=useRef(new AbortController())
    const cancel=()=>{
       controllerRef.current.abort();
    }

    const request =(payload:AxiosRequestConfig) => {
        setData(null)
        setError("")
        setLoaded(false)
        return axios.request<T>({
                url:payload.url,
                method:payload.method,
                signal:controllerRef.current.signal,
                data: payload.data,
                params:payload.params
            }).then((response)=>{
                setData(response.data);
                return response.data
            }).catch((e:any)=>{
                setError(e.message)
                throw new Error(e);
            }).finally(()=>{ setLoaded(true);})
    }
    return {data,error,loaded,request,cancel};
}

export default useRequest;