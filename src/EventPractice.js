import {Component} from "react";


class EventPractice extends Component {

    state = {
        message : ''
    }

    render() {

        return (
            <div>
                <h1>이벤트 연습</h1>
                <h1>{this.state.message}</h1>
                <input type={'text'}
                       name={'message'}
                       placeholder={"아무거 나 입력"}
                       value ={this.state.message}
                       onChange={
                           (e) => {
                               this.setState({
                                   message:e.target.value
                               })
                           }
                       }/>
                <br/>

                {/*기존 html의 button 속성중 reset와 같은 원리*/}
                <button onClick={
                    ()=> {
                        alert(this.state.message);
                        this.setState({
                            message:''
                        })
                    }
                }>확인</button>

            </div>
        )
    }
}

export default EventPractice