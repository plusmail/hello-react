import {Component} from "react";


class EventPracticeBase extends Component {

    state = {
        message : 'mmmm',
        test:'ttttt',  //"부모컴포넌트에서 전달된 값"
    }
    //
    // constructor(props) {
    //     // props에는 test라는 전달 변수 값이 들어 있음.
    //     super(props);
    //     console.log("받은값 : " + props.test);
    //     this.state.test = props.test;
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    //
    // }

    //화살표 함수를 사용하면 constructor와 내부에 bind 않해도 됨.

    handleChange = (e)=> {
        this.setState({
            message:e.target.value
        })
    }

    handleClick= ()=> {
        alert(this.state.message)
        this.setState({
            message:''
        })
    }

    render() {

        return (
            <div>
                <h1>이벤트 연습</h1>
                <h1>{this.state.message}</h1>
                <h1>{this.state.test}</h1>
                <input type={'text'}
                       name={'message'}
                       placeholder={"아무거 나 입력"}
                       value ={this.state.message}
                       onChange={this.handleChange}/>
                <br/>

                {/*기존 html의 button 속성중 reset와 같은 원리*/}
                <button onClick={this.handleClick}>확인</button>

            </div>
        )
    }
}

export default EventPracticeBase