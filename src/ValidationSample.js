import React,{Component} from "react";
import './ValidationSample.css'
class ValidationSample extends Component {

    ref = React.createRef();

    state = {
        password: '',
        clicked:false,
        validated : false,
    }

    handleChange = (e)=>{
        this.setState({
            password: e.target.value
        })
    }

    handleButtonClick = () =>{
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })

        // ref로 DOM에 연결되어서 DOM의 input에 focus기능을 사용하게 한다.
        this.ref.current.focus();
    }

    render() {


        return (
            <div>
                <input ref={this.ref}
                    type={"password"}
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ?
                        (this.state.validated ? 'success' : 'failure') : ''}

                    />
            <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}
export default ValidationSample;