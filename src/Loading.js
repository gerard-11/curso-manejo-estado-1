import React, {Component} from 'react'

class Loading extends Component {
    componentWillUnmount(){
        console.log('componentWillUnmount 3');
    }
    render(){
        return (
            <p>Validando...</p>
        )
    }
}
export {Loading}