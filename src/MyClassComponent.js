import React,{Component} from 'react';
import PropTypes from "prop-types";

class MyClassComponent extends Component {

    static defaultProps ={
        name:"이순신",
        email:"bb@b.co.kr"
    }
    static propTypes ={
        name: PropTypes.string,
        email: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    }

    render() {
        const {name, email, children,favoriteNumber} = this.props;
        return (
            <>
                <div>{name}</div>
                <div>{email}</div>
                <div>{children}</div>
                <div>나가 좋아 하는 숫자{favoriteNumber}</div>
            </>
        );
    }
}


export  default MyClassComponent;