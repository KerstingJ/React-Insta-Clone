import React from 'react'
import Styled from 'styled-components'

import getAuthToken, {removeAuth} from './Authenticate.js'

function SearchBar(props) {
    function logOut(){
        removeAuth();
        props.setAppState({isLoggedIn: false})
    }

    return(
        <StyHeader login={props.login}>
            <BrandBox><i className="head fas fa-camera-retro"></i><BrandH1 className="fancy">Not-Instagram</BrandH1></BrandBox>
            {props.login? null : 
                [<input key="search" placeholder="Search Here" name="searchInput" onChange={props.inputHandler} value={props.searchInput}/>,
                <nav key="nav">
                    <h2>{getAuthToken.username}</h2>
                    <button onClick={logOut}>Log Out</button>
                </nav>
            ]}
        </StyHeader>
    )
}

const StyHeader = Styled.header`
    font-size: 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid lightgrey;
    position: ${props => props.login ? "scroll" : "fixed"};
    width: 100%;
    background: white;

    nav button {
        border-radius: 3px;
        border: 1px solid lightgrey;
        background: inherit;

        padding: 10px;

        ::hover {
            background: lightpink;
            color: white;
        }
    }
`

const BrandBox = Styled.div`
    font-size: inherit;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const BrandH1 = Styled.h1`
    font-family: 'Lobster Two', cursive;
    font-size: inherit;

    padding-left: 2rem;
    border-left: 1px solid black;
    margin: 2rem;
`

export default SearchBar;