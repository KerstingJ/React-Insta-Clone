//const isLoggedIn = true;
export const authKey = "notInstagramAuthKey"

const blankToken = {
    username: "",
    isLoggedIn: false,
}

export function removeAuth() {
    window.localStorage.removeItem(authKey);
}

function getAuthToken() {

    let authToken = window.localStorage.getItem(authKey);

    if (!authToken) {
        window.localStorage.setItem(authKey, JSON.stringify(blankToken))
        authToken = blankToken;
    } else {
        authToken = JSON.parse(window.localStorage.getItem(authKey));
    }

    return authToken;
}

export default getAuthToken;