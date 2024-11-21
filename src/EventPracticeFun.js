import {useState} from "react";

export const EventPracticeFun = () => {

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [message, setMessage] = useState('');

    const [form, setForm] = useState({
        username:'',
        password:'',
        message:''
    })

    //비구조화 문법
    const {username,password,message} = form;

    // const onChangeUsername = e => setUsername(e.target.value);
    // const onChangePassword = e => setPassword(e.target.value);
    // const onChangeMessage = e => setMessage(e.target.value);

    const onChange = e=>{
        const nextForm = {
            ...form,
            [e.target.name]:e.target.value
        }
        setForm(nextForm);
    }

    const onClick = () => {
        console.log(username + ":" + password + ":" + message);
        // setUsername('');
        // setPassword('');
        // setMessage('');
        setForm({
            username: '',
            password: '',
            message: ''
        })
    }

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    }

    return (
        <div>
            <h1>함수형 이벤트 연습</h1>
            <input type={'text'}
                   name={'username'}
                   placeholder={"사용자명"}
                   value={username}
                   onChange={onChange}
            />
            <br/>
            <input type={'text'}
                   name={'password'}
                   placeholder={"패스워드"}
                   value={password}
                   onChange={onChange}
            />
            <br/>
            <input type={'text'}
                   name={'message'}
                   placeholder={"메세지"}
                   value={message}
                   onChange={onChange}
                   onKeyPress={onKeyPress}
            />
            <br/>
            <button onClick={onClick}>확인</button>

        </div>
    )


}

// export default EventPracticeFun;