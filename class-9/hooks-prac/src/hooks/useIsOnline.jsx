import { useEffect, useState } from "react";

export function useIsOnline(){
const [isOnline, setisOnline] = useState(window.navigator.onLine);

useEffect(()=>{
    const x = window.addEventListener("online",()=>{
    setisOnline(true);
    })
    const y = window.addEventListener("offline",()=>{
    setisOnline(false);
    })

    return ()=>{
        clearInterval(x);
        clearInterval(y);
    }
},[])

return isOnline
}