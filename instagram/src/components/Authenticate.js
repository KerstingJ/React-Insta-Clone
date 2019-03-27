import React from 'react'


const isLoggedIn = true;

function withAuth(authView, nonAuthView){

    return isLoggedIn ? authView : nonAuthView; // login page
    
}

export default withAuth;