import React from 'react';
import styled from 'styled-components';

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
            this.setState({error: "Username is not valid.\nMust be atleast 5 characters long"})
            return;
        }

        if (!this.isValidInput(this.state.password)){
            this.setState({error: "Password is not valid.\nMust be atleast 5 characters long"})
            return;
        }

        const loginToken = {
            username: this.state.username,
            isLoggedIn: true,
        }

        window.localStorage.setItem(authKey, JSON.stringify(loginToken));

        this.props.setAppState({isLoggedIn: true, username: this.state.username});
    }

    render (){
        return(
            <Wrapper>
                <div className="branding"><i className="head fas fa-camera-retro"></i><h1 className="fancy">Not-Instagram</h1></div>
                
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

                <Error>
                    <h3>Do Not Use Real Passwords</h3>
                    <p>This is a fake app, that uses your localstorage to emulate a database</p>
                </Error>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    .branding {
        display: flex;
        align-items: center;
        font-size: 3rem;

        text-align: center;

        i:before {
            font-size: 4rem;
        }

        h1 {
            font-family: 'Lobster Two', cursive;
            font-size: inherit;

            padding-left: 1.5rem;
            border-left: 1px solid black;
            margin: 2rem;
        }
    }
`

const Error = styled.div`
    border-radius: 4px;
    border: 2px solid lightPink;
    color: red;
    padding: 2rem;
    margin: 1rem;

    text-align: center;
`

const LoginContainer = styled.div`
    display: inline-block;
    padding: 30px;

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