import {useState} from "react";

export const IterationSample = () => {

    // const names = ['눈사람','얼음','눈', '바람'];
    const [names, setNames] = useState(
        [
            {id: 1, text: '눈사람'},
            {id: 2, text: '얼음'},
            {id: 3, text: '준'},
            {id: 4, text: '바람'}
        ]
    )

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onClick = ()=>{
        const nextNames = names.concat(
            {
                id:nextId,
                text:inputText
            }
        )

        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('')
    }


    const onChange = (e) => {
        setInputText(e.target.value);
        // console.log("입력된 값:" + inputText)
    }

    const onRemove = (id) =>{
        // id는 li 리스트에서 클릭된 개체의 번호
        const nextNames = names.filter(name => name.id !== id);

        setNames(nextNames)
    }


    const nameList =
        names.map((name, index) => (
            <li key={name.id} onDoubleClick={
                ()=> onRemove(name.id)}>{name.text}
            </li>
        ))


    return (
        <>
        <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>
                {nameList}
            </ul>
        </>
    )
}