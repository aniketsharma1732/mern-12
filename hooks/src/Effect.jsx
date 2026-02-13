import { useEffect } from "react"
import { useState } from "react"





const Effect=()=>{
    const [count, setCount] = useState(0)

    useEffect(()=>{
        if(count==1){
            console.log("connected")
        }
        return()=>{
            console.log("disconnected");

        }
    })

    const handleClick=()=>{
        setCount(count+1);
    }

    return(
        <div>
            <h1>count:{count}</h1>
            <button onClick={handleClick}>count</button>
        </div>

    )
}

export default Effect;