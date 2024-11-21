import React, {Component} from "react";

export class Count extends Component {

    constructor(props) {
        super(props);

        // 클래스의 멤버 필드
        this.state = {
            number: 0,
            fixedNumber: 0,
        };
    }

    //Event가 발생을 하면 render()가 자동으로 호츨
    render() {
        const {number, fixedNumber} = this.state;
        console.log(number);
        return (
            <div>
                <h1>변하는 값 :{number}</h1>
                <h1>변하지 않는 값{fixedNumber}</h1>
                <button
                    onClick={() => {
                        this.setState((prevState) => {

                            return {
                                number: prevState.number + 1
                            };
                        });
                        this.setState(prevState => (
                                {
                                    number: prevState.number + 1
                                }
                            ),
                            () => {
                                console.log("방금 setState호츨")
                                console.log(this.state)
                            }
                        )
                    }}
                >+{number}
                </button>
            </div>
        )

    }
}

// export default Count;