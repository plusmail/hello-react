import React, {Component} from "react";
import MyComponent from "./MyComponent";

class EventPractice extends Component{
    state = {
        username:'',
        message: ''
    }
    constructor(pros) {
        super(pros);
        this.test = 111;
    }

    handleChange= (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick=()=>{
        alert(this.state.username + ":" + this.state.message);
        this.setState({
            username: '',
            message: ''
        })
    }

    render() {

        // console.log("E- state->", this.state);

        return(
            <div>
                <h1>이벤트 연습</h1>
                <input type={"text"}
                       name={"username"}
                       value={this.state.username}
                       placeholder={"아무거나 입력"}
                       onChange={this.handleChange}
                />
                <input type={"text"}
                       name={"message"}
                       value={this.state.message}
                       placeholder={"아무거나 입력"}
                       onChange={this.handleChange}
                />

                <p>{this.state.message}</p>
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}

export default EventPractice;