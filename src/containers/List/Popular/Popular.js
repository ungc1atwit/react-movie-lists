import React, { Component } from 'react';
import Card from '../../../components/Card';
import styled from 'styled-components';
import Text from '../../../components/Text';
import axios from 'axios';
import { array } from 'prop-types';

const StyledItem = styled.div`
`;
const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
`; 
const ButtonToggle = styled.button`
    border-radius: 15px 0 15px 0;
    border: 2px solid palevioletred;
`;

const Genres = styled.p`
    font-size: 8pt;
    font-family: "Font SpaceMono";
    width: 200px;
`;
const Vote = styled(Genres)`

`;
const Item = styled.div`
    display: flex;
    margin-top: 0.5rem;
    justify-content: center;
`;

const types = ["Movies", "Series"];
class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            isToggle: true,
            type: "movie",
            genres: [],
            loading: true
        }
    }

    async componentDidMount() {             
        // Fetching the lists of top rated of {movies, tvs}    
        try{
            let movieLists = await axios.get(process.env.MOVIEDB_API_URL + this.state.type + "/top_rated?api_key=" + process.env.MOVIEDB_API_KEY + "&page=1");
            let results = movieLists.data.results;

            for(const value of results){
                let genreLists = [];
                let dataLists = await axios.get(process.env.MOVIEDB_API_URL + this.state.type + "/" + value.id +  "?api_key=" + process.env.MOVIEDB_API_KEY);

                for(const genreObject of dataLists.data.genres){
                    genreLists.push(genreObject.name);
                }
                value["genres"] = genreLists;
            }

            this.setState({
                movies: results,
                loading: false
            });
        } catch(error){
            console.log("Error: " + error.message);
        } 
    }

    render(){
        const {movies, loading} = this.state;

        if(loading){
            return (
                <div className="loading">
                    <p>Loading...</p>
                </div>
            )
        }

        return(
            <StyledItem>
                <ButtonGroup className="btn-group btn-group-toggle" data-toggle="button">
                    <ButtonToggle className="col-sm-6">Movies</ButtonToggle>    
                    <ButtonToggle className="col-sm-6">Series</ButtonToggle>          
                </ButtonGroup>
            {movies.map((popularData) => (
                <Item key={popularData.id}>
                    <Card width="60rem" data = {popularData}/>
                    <div>
                        <Text width="200px" data={popularData}/>
                        <Genres>Genres: {popularData.genres.join(", ")}</Genres>
                        <Vote>Average: {popularData.vote_average}</Vote>
                    </div>
                </Item>
            ))}
            </StyledItem>
        )
    }
}

export default Movies;