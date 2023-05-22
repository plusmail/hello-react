import React, {Component} from "react";
import './ValidationSample.css';
import music from './SAMPLE_2.MP3';

class ValidationSample extends Component{
    state = {
        password:'',
        clicked: false,
        validated: false
    }

    audioRef = React.createRef();

    handlePlay =()=>{
        this.audioRef.current.play();
    }

    handlePause = ()=>{
        this.audioRef.current.pause();
    }

    handleChange = (e)=>{
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = ()=>{
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })
        // this.handleFocus();
        this.input.focus();
    }

    // handleFocus = ()=>{
    //     this.input.current.focus();
    // }

    render() {

        return(
            <div>
                <input type={"password"}
                       value={this.state.password}
                       onChange={this.handleChange}
                       className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                       ref={(ref)=>{this.input=ref}}
                       />

                <button onClick={this.handleButtonClick}>검증하기</button>
                <br/>
                <figure>
                    <figcaption>MP3 sample</figcaption>

                    <audio src={process.env.PUBLIC_URL +'SAMPLE_2.MP3'} ref={this.audioRef}>
                        브라우즈 지원 않하면
                        <code>audio</code> element
                    </audio>
                </figure>
                <button onClick={this.handlePlay}>재생</button>
                <button onClick={this.handlePause}>중지</button>
            </div>
        )
    }
}

export default ValidationSample;