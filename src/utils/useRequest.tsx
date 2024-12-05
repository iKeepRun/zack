import axios, { AxiosRequestConfig, Method } from "axios";
import { useRef, useState } from "react";

function useRequest<T>(url: string, method: Method, payload: AxiosRequestConfig) {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
    
    //取消请求的方法（ref作用：包裹了一个 即使值改变了也不会重新渲染页面）
    const controllerRef=useRef(new AbortController())
    const cancel=()=>{
       controllerRef.current.abort();
    }

    const request = async () => {
        setData(null)
        setError("")
        setLoaded(false)
        try {
            const response = await axios.request<T>({
                url,
                method,
                signal:controllerRef.current.signal,
                data: payload,
            })

            setData(response.data);
        } catch (e: any) {
            setError(e.message)
        } finally {
            setLoaded(true);
        }

    }
    return {data,error,loaded,request,cancel};
}

export default useRequest;