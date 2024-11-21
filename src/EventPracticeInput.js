import {Component} from "react";


class EventPracticeInput extends Component {

    state = {
        username:'',
        password:'',
        message:'',
    }

    //화살표 함수를 사용하면 constructor와 내부에 bind 않해도 됨.
    handleChange = (e)=> {
        this.setState({
            //input 각각이 handleChange 함수 같이 사용하기 때문에
            // event가 발생은 input의 name에 정의된 값을 [e.target.name] : 이렇게 사용해야 함
           [e.target.name]:e.target.value
        })
    }

    handleClick= ()=> {
        console.log(this.state.username + ":" + this.state.message + ":" + this.state.password);

        this.setState({
            username:'',
            password:'',
            message:'',
        })
    }

    handleKeyPress = (e)=>{
        if(e.key === 'Enter'){
            this.handleClick();
        }
        console.log(e.key)
    }

    render() {

        return (
            <div>
                <h1>이벤트 여러 input 연습(회원가입, 게시글 등록 ..등등.)</h1>
                <input type={'text'}
                       name={'username'}
                       placeholder={"사용자명"}
                       value={this.state.username}
                       onChange={this.handleChange}/>
                <br/>

                <input type={'text'}
                       name={'password'}
                       placeholder={"비밀번호"}
                       value={this.state.password}
                       onChange={this.handleChange}/>
                <br/>

                <input type={'text'}
                       name={'message'}
                       placeholder={"메세지"}
                       value={this.state.message}
                       onChange={this.handleChange}
                       onKeyPress={this.handleKeyPress}
                />
                <br/>


                {/*기존 html의 button 속성중 reset와 같은 원리*/}
                <button onClick={this.handleClick}>확인</button>

            </div>
        )
    }
}

export default EventPracticeInput