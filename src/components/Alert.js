import { useEffect } from "react";

const Alert = ({list,type, message , removeAlert})=>{
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            removeAlert();
        },3000);
        return ()=>clearTimeout(timeout);
    },[list]);
    return (
        <div>
            <p className={type}>{message}</p>
        </div>
    )
}
export default Alert;