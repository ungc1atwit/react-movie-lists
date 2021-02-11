import React from 'react';
import styled from "styled-components";
import axios from 'axios';

const StyledGenre = styled.h2`
    font-family: "Font SpaceMono";
    font-size: 8pt;
    text-align: center;
    margin-top: 0.3rem;
    border: 2px solid;
    width: ${props => props.width};
`;

const Genres = ({data, width}) => {
    return(
        <StyledGenre width={width}>
            {getCurrentGenres(data.id)}
        </StyledGenre>
    )
};

function getCurrentGenres(id){
    try{
        console.log(id);
        let genreLists = [];
        let dataLists = axios.get(process.env.MOVIEDB_API_URL + this.state.type + "/" + id +  "?api_key=" + process.env.MOVIEDB_API_KEY);
        console.log(dataLists);
        for(const value of dataLists.data.genres){
            genreLists.push(value.name);
        }

        console.log(genreLists);
        this.setState({genres: genreLists});
    } catch(e){
        console.log(`Error: ${e.message}`);
    }
    
}

export default Genres;