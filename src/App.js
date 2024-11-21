import {Fragment, useState} from "react";
import './App.css';
import React, {Component} from "react";
// import MyComponent from "./MyComponent";
// 함수형 컴포넌트
import {Count} from "./Count";
import {Count1} from "./Count1";
import Say from "./Say";
import EventPractice from "./EventPractice";
import EventPracticeBase from "./EventPracticeBase";
import EventPracticeInput from "./EventPracticeInput";
import {EventPracticeFun} from "./EventPracticeFun";
import ValidationSample from "./ValidationSample";
import {RefSample} from "./RefSample";
import {ScrollBox} from "./ScrollBox";
import {IterationSample} from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";
//
// function App() {
//
//     return (
//         <>
//             {/*Count count1 = new Count(10,20);*/}
//             {/*Count count2 = new Count(10,20);*/}
//             {/*Count count3 = new Count(10,20);*/}
//             {/*<Count/>*/}
//             {/*<Count1/>*/}
//             {/*Say say = new Say("22222")*/}
//             {/*<Say/>*/}
//             {/*<Say/>*/}
//             {/*<EventPractice test={"11111"}/>*/}
//
//             {/*// EventPracticeBase a = new EventPracticeBase("-------")*/}
//             {/*<EventPracticeBase test={"부모컴포넌트에서 전달된 값"}/>*/}
//             {/*<EventPracticeInput/>*/}
//             {/*<EventPracticeFun/>*/}
//             {/*<ValidationSample/>*/}
//             {/*<RefSample/>*/}
//             <ScrollBox ref={ref => (this.scrollBox = ref)} />
//             <button onClick={() => this.scrollBox.scrollToBottom()}>
//                 맨 밑으로
//             </button>
//
//         </>
//     )
// }
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


class App extends Component {

    state = {
        color : '#000000'
    }

    handleClick = () => {
        this.setState({
            color: getRandomColor()
        })
    }

    render() {

        return (
            <div>
                {/*<ScrollBox ref={(ref)=> this.scrollBox = ref}/>*/}
                {/*/!*<button onClick={this.scrollBox.scrollToBottom}>aaaa</button>*!/*/}
                {/*<button onClick={*/}
                {/*    ()=> this.scrollBox.scrollToBottom()*/}
                {/*}>맨 밑으로</button>*/}
                {/*<IterationSample/>*/}
                <button onClick={this.handleClick}>랜덤 색상</button>
                <ErrorBoundary>
                    <LifeCycleSample color={this.state.color}/>
                </ErrorBoundary>
            </div>
        )
    }
}


export {App};
