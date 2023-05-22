import React, {Fragment, Component} from 'react';
import MyComponent from "./MyComponent";
import MyClassComponent from "./MyClassComponent";
import Count from "./Count";
import Say from "./Say";
import EventPractice from "./EventPractice";
import EventPracticeFun from "./EventPracticeFun";
import EventPracticeFunForm from "./EventPracticeFunForm";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";

class App extends Component{

    render() {
        return (
            <>
                {/*<div>{name}</div>*/}
                {/*<MyComponent favoriteNumber={10}*/}
                {/*             name={"을지문덕"}*/}
                {/*             email={"bbb@b.co.kr"}>나는 자식이다.*/}
                {/*</MyComponent>*/}
                {/*<MyClassComponent name={"강감찬"}*/}
                {/*                  email={"ccc@ccc.co.kr"}*/}
                {/*                  favoriteNumber={99}>*/}
                {/*    이것은 Class 컴포넌트로 만들것*/}
                {/*</MyClassComponent>*/}
                {/*<Count/>*/}
                {/*<Say></Say>*/}
                {/*<EventPractice/>*/}
                {/*<EventPracticeFun/>*/}
                {/*<EventPracticeFunForm/>*/}
                {/*<ValidationSample/>*/}
                <br/>
                {/*<ScrollBox ref={(ref) => this.scrollBox=ref}/>*/}
                {/*<button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>*/}
                <IterationSample/>
            </>
        )
    }
}


export default App;
