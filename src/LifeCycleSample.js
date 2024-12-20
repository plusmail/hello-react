import React,{Component} from "react";


class LifeCycleSample extends Component {

    state = {
        number : 0,
        color: null,
    }

    myRef = React.createRef();
    // myRef = null;

    constructor(props) {
        super(props);
        console.log('생상자 호출');
    }

    static getDerivedStateFromProps(nextProps,prevState){
        console.log("getDerivedStateFromProps");
        if(nextProps.color !== prevState){
            return {color:nextProps.color};
        }
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {

        console.log('shouldComponentUpdate', nextProps,nextState);
        return nextState.number % 10 !== 4;

    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    handleClick = ()=>{
        this.setState({
            number: this.state.number +1
        })
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps,prevState);
        if(snapshot){
            console.log("업데이트 되기 직전 색상:", snapshot);
        }
    }

    render() {
        console.log('render호출');
        const style = {
            color:this.props.color
        }

        return (
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={ref=> this.myRef = ref}>
                    {this.state.number}
                </h1>
                <p>색상 : {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        )
    }

}

export default LifeCycleSample;