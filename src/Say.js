import React, {useState} from "react";

const Say = ()=>{
    const object = {a:1, b:2, c:3};
    const nextObject = {...object, d:10};
    console.log("Say->",nextObject);
    const fruitOne = ['사과','바나나'];
    const fruitTwo = [...fruitOne, '포도']
    console.log("Say2->",fruitTwo);

    const [color, setColor] = useState('cyan');//초기값 black
    const [message, setMessage] = useState('');
    const onClickEnter = ()=> setMessage("안녕하세요...");
    const onclickLeave = ()=> setMessage("안녕히 가세요.");

    return(
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onclickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color:'red'}} onClick={()=> setColor('red')}>RED</button>
            <button style={{color:'green'}} onClick={()=> setColor('green')}>GREEN</button>
            <button style={{color:'blue'}} onClick={()=> setColor('blue')}>BLUE</button>
        </div>
    )
}

export default Say;