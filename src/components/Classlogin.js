import React, { Component, Fragment } from 'react';
import './style/Login.css';
import { Form, Input, Button ,Alert } from 'antd';
import Password from 'antd/lib/input/Password';

class Classlogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            password: "",
            error: false,
            success: false,
        }
    
    }
    onChangeHandle = (e) => {
        this.setState({name: e.target.value})
        // console.log(e.target.value);
    }
    onChangeHandlePassword = (e) => {
       // console.log({password: e.target.value})
        this.setState({password: e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault();
        const Username = this.state.name;
        const Password = this.state.password;
        if(Username == "admin" && Password == "123456"){
            this.setState({
                error: false,
                success: true,
            })
        }
        else{
            this.setState({
                error: true,
                success: false,
            })
        }
        console.log(this.state)
    }
    render(){
        return(
            <Fragment>
                {this.state.success == true && (
                    <div className="success">
                        <Alert message="Success Text" type="error" />
                    </div>
                )}
                 {this.state.error == true && (
                    <div className="error">
                        <Alert message="Error Text" type="error" />
                    </div>
                )}
            <form className="frm" onSubmit={this.onSubmit}>
            <label>Username</label>
            <Input type="text" placeholder="Enter your username" className="inp" value={this.state.name} onChange={this.onChangeHandle} required/>
            <label>Password</label>
            <Input type="password" placeholder="Enter your password" className="inp"value={this.state.password} onChange={this.onChangeHandlePassword} required/>
            <button type="submit">Login</button>
            </form>
            </Fragment>
        )
    }
}
export default Classlogin;