import React from 'react';

class Login extends React.Component {
    render (){
        return(
            <div>
                <h1>Login to not-Instagram</h1>
                <form>
                    <input placeholder="Username"></input>
                    <input placeholder="Password"></input>
                </form>
            </div>
        )
    }
}

export default Login;