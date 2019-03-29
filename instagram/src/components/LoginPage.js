import React from 'react';
import styled from 'styled-components';

import Header from './SearchBar';
import { authKey } from './Authenticate.js'

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            error: ""
        }
    }

    isValidInput(input){
        return input.trim().length > 5;
    }

    handleInput = event => {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value})
    } 

    doLogin = (event) => {

        event.preventDefault();

        if (!this.isValidInput(this.state.username)){
            this.setState({error: "Username is not valid."})
            return;
        }

        if (!this.isValidInput(this.state.password)){
            this.setState({error: "Password is not valid."})
            return;
        }

        const loginToken = {
            username: this.state.username,
            isLoggedIn: true,
        }

        window.localStorage.setItem(authKey, JSON.stringify(loginToken));

        console.log("im getting this far")
        this.props.setAppState({isLoggedIn: true});
    }

    render (){
        return(
            <Wrapper>
            <Header login/>
            <LoginContainer>
                {this.state.error ? <Error>{this.state.error}</Error> : null}
                <form onSubmit={this.doLogin}>
                    <input 
                        name="username"
                        onChange={this.handleInput}
                        value={this.state.username}
                        placeholder="Username"
                    ></input>
                    <br />
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
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Error = styled.div`
    border-radius: 4px;
    border: 2px solid lightPink;
    color: red;
    padding: 2rem;

    text-align: center;
`

const LoginContainer = styled.div`
    display: inline-block;
    padding: 30px;
    margin: 50px;

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