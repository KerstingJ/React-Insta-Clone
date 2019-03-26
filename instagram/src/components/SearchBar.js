import React from 'react'
import Styled from 'styled-components'

function SearchBar(props) {
    return(
        <StyHeader>
            <BrandBox><i className="head fas fa-camera-retro"></i><BrandH1 className="fancy">Not-Instagram</BrandH1></BrandBox>
            <input placeholder="Search Here" name="searchInput" onChange={props.inputHandler} value={props.searchInput}/>
            <nav>
                <a href="/"><i className="far fa-compass"></i></a>
                <a href="/"><i className="far fa-heart"></i></a>
                <a href="/"><i className="far fa-user"></i></a>
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
`

// position: fixed;
// width: 100%;

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