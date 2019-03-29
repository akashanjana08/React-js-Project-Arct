/**
* Summary: Login Screen
* @author Akash Sharma
* @date  27.03.2019
*/
import React, { Component } from 'react';
import { LoginModel } from './LoginModel';
export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputUserId: '',
            inputPassword: '',
            token: ""
        }
        this.onSuccess = this.onSuccess.bind(this);
    }

    onClickSignIn = () => {
        const loginModel = new LoginModel(this.onSuccess, this.onFailed,this.onEmptyField);
        loginModel.validateUser(this.state.inputUserId, this.state.inputPassword);
    }

    onSuccess(message,data) {
        //this.props.history.push("/home");
        this.setState({ token: data })
    }

    onFailed(message) {
        console.log("Failed")
    }

    onEmptyField(message) {
        console.log(message)
    }


    updateUserIdValue = (evt) => {
        this.setState({
            inputUserId: evt.target.value
        });
    }

    updatePasswordValue = (evt) => {
        this.setState({
            inputPassword: evt.target.value
        });
    }

    render() {
        return (
            <div>
                <form method="get">
                    <div className="box">
                        <h1>Login Admin</h1>
                        <input type="email" name="email" placeholder="User Id" className="email" onChange={this.updateUserIdValue} />
                        <input type="password" name="password" placeholder="Password" className="email" onChange={this.updatePasswordValue} />
                        <button type="button" onClick={this.onClickSignIn} className="btn">Sign In</button>
                    </div>
                    <p>{this.state.token}</p>
                </form>
            </div>
        );
    }
}