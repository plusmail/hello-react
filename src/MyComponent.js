import PropTypes from "prop-types";
import {Component} from "react";

class MyComponent extends Component {

    static defaultProps = {
        name : '기본 이름'
    };
    static propTypes = {
        name: PropTypes.string, // name은 string 타입이어야 함
        address: PropTypes.string.isRequired, // address는 필수
    }

    render() {
        const {name, address, phone, children} = this.props;

        return (
            <div>
                안녕하세요. 제 이름은 {name} 이고 <br/>
                주소는 {address} <br/>
                전화는 {phone} <br/>
                내부 자식 HTML은 {children}
            </div>
        )
    }
}

//
// const MyComponent = ({name, address, phone, children})=> {
//
//     //props = {name,address, phone, children}
//     // const {name, address, phone, children} = props;
//     return (
//         <div>
//             이름 : {name}<br/>
//             주소 : {address} 입니다.<br/>
//             전화번호 : {phone} 입니다.<br/>
//             {children}
//
//         </div>
//     )
// };
//
// // MyComponent.defaultProps = {
// //     name:'기본 이름',
// //     address: '제주도',
// //     phone : '000-0000-0000'
// // }
// ABC aaa = new ABC();
// aaa.가()
// ABC.가()

// MyComponent.propTypes = {
//     name: PropTypes.string, // name은 string 타입이어야 함
//     address: PropTypes.string.isRequired, // address는 필수
// };


export default MyComponent;