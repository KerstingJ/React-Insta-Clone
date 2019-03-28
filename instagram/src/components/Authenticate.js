//const isLoggedIn = true;
export const authKey = "notInstagramAuthKey"

const blankToken = {
    username: "",
    isLoggedIn: false,
}


let authToken = window.localStorage.getItem(authKey);

if (!authToken) {
    window.localStorage.setItem(authKey, JSON.stringify(blankToken))
    authToken = blankToken;
} else {
    authToken = JSON.parse(window.localStorage.getItem(authKey));
}

const isLoggedIn = authToken.isLoggedIn

function withAuth(authView, nonAuthView){

    return isLoggedIn ? authView : nonAuthView; // login page
    
}

export default withAuth;