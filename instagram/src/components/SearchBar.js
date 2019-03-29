import React from 'react'
import Styled from 'styled-components'

import getAuthToken, {removeAuth} from './Authenticate.js'

function SearchBar(props) {
    function logOut(){
        if(props.setAppState) {
            removeAuth();
            props.setAppState({isLoggedIn: false})
        }
    }

    return(
        <StyHeader>
            <BrandBox>
                <i className="head fas fa-camera-retro"></i>
                <BrandH1 className="fancy">Not-Instagram</BrandH1>
            </BrandBox>

            <input key="search" placeholder="Search Here" name="searchInput" onChange={props.inputHandler} value={props.searchInput}/>
            
            <nav key="nav">
                <h2>{getAuthToken().username}</h2>
                <button onClick={logOut}>Log Out</button>
            </nav>
        </StyHeader>
    )
}

const StyHeader = Styled.header`
    font-size: 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid lightgrey;

    position: fixed;

    width: 100%;
    background: white;
    flex-wrap: wrap;

    @media (max-width: 750px) {
        justify-content: space-evenly;

        input {
            order: 5;
            margin-bottom: 5px;
        }
    }

    @media (max-width: 400px) {
        font-size: 1.5rem;
    }

    nav {
        display: flex;
        align-items: center;

        @media (max-width: 750px) {
            margin: 15px;

        }

        h2 {
            margin-right: 2rem;
            @media (max-width: 550px) {
                display: none;
    
            }
        }

        button {
            border-radius: 3px;
            border: 1px solid lightgrey;
            background: inherit;

            padding: 10px;

            :hover {
                border-color: lightpink;
                color: red;
            }
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