import axios from "axios"
import { useEffect, useState } from "react"

const useAxiosOnMount = (url) => {
   // state for component
   const [data, setData] = useState(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   // mount
   useEffect(()=>{
       getData()
   },[])
   const getData = async()=>{
       try{
         let res = await axios.get(url)
         // if res comes back as anything other than res.data or res.data.data -- this will break
         setData(res.data.data ? res.data.data : res.data)
         setLoading(false)
       } catch(err){
           setError(err)
           setLoading(false)
       }
   }
  return {data: data, loading: loading, error: error}
}



export default useAxiosOnMount;