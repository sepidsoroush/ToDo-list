import { useEffect } from "react";

const Alert = ({list,type, message , removeAlert})=>{
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            removeAlert();
        },3000);
        return ()=>clearTimeout(timeout);
        // eslint-disable-next-line
    },[list]);
    return (
        <div
        className="flex justify-center items-center text-sm"
        >
            <p
            className={type==="error" ? 'my-5 py-2 px-4 border rounded text-red-500 border-red-500 bg-red-50' : 'my-5 py-2 px-4 border rounded text-emerald-500 border-emerald-500 bg-emerald-50'} 
            >{message}</p>
        </div>
    )
}
export default Alert;