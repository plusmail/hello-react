import {useState} from "react";

const Say = ()=>{

    const [message, setMessage] = useState('11111')
    const [count, setCount] = useState('')

    const [color, setColor] = useState('red');


    const onClickEnter = () => setMessage('안녕.. 바보야')
    const onClickLeave = () => setMessage("그래 나 바보다/")

    const onClickCountPlus = () => setCount(2);
    const onClickCountZero = () => setCount(0);

    return (
        <div>
            <h1>{message}</h1>
            {/*<button onclick={함수()}></button> */}
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <br/>
            <h1 style={{color}}>{message}</h1>
            <button style={{color:'orange'}} onClick={()=> setColor('green')}>그린</button>
            <button style={{color:'green'}} onClick={()=> setColor('blue')}>그린</button>
        </div>
    )
}

export default Say;

