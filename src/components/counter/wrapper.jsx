import { useState } from 'react';
import Count from './count';
import CountActions from './countactions';

function Wapper(){
    var [count,setCount]=useState(0);
    //setCount(1);
    const plus=()=>{
        setCount(count+=1);
    }
    const minus= () =>{
        if(count>0){
            setCount(count-=1);
        }
    }
    return(
        <>
        <Count counter={count} />
        <CountActions methodPlus={plus} methodMinus={minus}/>
        </>
    )
}

export default Wapper;