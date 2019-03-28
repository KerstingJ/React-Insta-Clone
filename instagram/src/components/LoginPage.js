import React from 'react';
import styled from 'styled-components';

import Header from './SearchBar';
import { authKey } from './Authenticate.js'

class Login extends React.Component {
    constructor(props, forceUpdate){
        super(props);
        this.state = {
            username: "",
            password: ""
        }

        this.force = forceUpdate;
    }

    handleInput = event => {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value})
    } 

    doLogin = (event) => {

        event.preventDefault();

        const loginToken = {
            username: this.state.username,
            isLoggedIn: true,
        }

        window.localStorage.setItem(authKey, JSON.stringify(loginToken));

        this.props.update();
    }

    render (){
        return(
            <>
            <Header login/>
            <LoginContainer>
                <h1>Login</h1>
                <form onSubmit={this.doLogin}>
                    <input 
                        name="username"
                        onChange={this.handleInput}
                        value={this.state.username}
                        placeholder="Username"
                    ></input>
                    <input 
                        type="password"
                        name="password"
                        onChange={this.handleInput}
                        value={this.state.password}
                        placeholder="Password"
                    ></input>
                    <br />
                    <button type="submit">Login</button>
                </form>
            </LoginContainer>
            </>
        )
    }
}

const LoginContainer = styled.div`
    padding: 30px;
    margin: 50px auto;
    margin-left: 40%;

    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0,0,0, 0.4);

    h1 {
        text-align: center;
        font-size: 3rem;
        margin-bottom: 2rem;
        text-shadow: 0px 2px 5px rgba(0,0,0, 0.4);
    }

    form {
        text-align: center;
        input {
            padding: 10px;
            margin: 10px 0;
            box-shadow: 0px 2px 5px rgba(0,0,0, 0.4);
        }

        button {
            background: lightseagreen;
            color: white;
            width: 80%;
            padding: 10px;
            margin-top: 1rem;
            font-size: 2rem;

            border: 2px solid lightseagreen;
            border-radius: 3px;

            box-shadow: 0px 2px 5px rgba(0,0,0, 0.4);

            :hover {
                color: lightseagreen;
                background: none;
            }
        }
    }
`

export default Login;