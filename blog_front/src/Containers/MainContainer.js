import React, { Component } from 'react';
import Main from 'Components/Main';
import axios from 'axios';
import cookie from 'react-cookies'



class MainContainer extends Component {
    state = {
        isLogin: false
    }
    componentDidMount() {
        axios.get("http://192.168.137.167:3000/api/auth/check", {
            headers: {
                'x-access-token': cookie.load('token')
            }
        })
        .then(response => {
            this.setState({
                isLogin: response.data.success
            })
        }).catch(error => {
            console.log(error)
        })
        console.log(this.state.isLogin)
    }
    render() {
        return (
            <div>
                <Main isLogin={this.state.isLogin}/>
            </div>
        );
    }
}

export default MainContainer;