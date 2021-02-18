import React from "react";

// function Detail({ location }) {
//     console.log(location)
//     return <h1>Detail</h1>
// }

class Detail extends React.Component{
    componentDidMount() {
        const { location, history } = this.props // class는 props를 가지고 있음
        if (location.state === undefined) {
            history.push("/"); 
        }
    }
    render() {
        const { location } = this.props;
        // redirect 할 때 props가 없는 경우 처리
        if (location.state) {
            return <span> {location.state.title} </span>
        } else{
            return null;
        }
    }
}

export default Detail 