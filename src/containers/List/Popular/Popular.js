import React, { Component } from 'react';
import Card from '../../../components/Card';
import styled from 'styled-components';
import Text from '../../../components/Text';
import axios from 'axios';

const StyledItem = styled.div`
`;
const StyledText = styled.div`
`; 
const Overview = styled.p`
    font-size: 8pt;
    font-family: "Font SpaceMono";
    width: 200px;
`;
const Item = styled.div`
    display: flex;
    margin-top: 0.5rem;
    justify-content: center;
`;

const genres = () =>{

}

class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            type: "movie",
            genrs: [],
            loading: true
        }
    }

    async componentDidMount() { 
        let genres = [];
        let data = (await fetch("src/assets/genre_" + this.state.type + ".json"))
            .json()
            .then(response => {
                for(const value of response.genres){
                    genres.push(value);
                }
            })
            .catch(e =>{
                console.log(`Error: ${e.message}`);
            });           
            
        try{
            let movieLists = await axios.get(process.env.MOVIEDB_API_URL + this.state.type + "/top_rated?api_key=" + process.env.MOVIEDB_API_KEY + "&page=1");

            this.setState({
                movies: movieLists.data.results,
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
                <div className="laoding">
                    <p>Loading...</p>
                </div>
            )
        }
        return(
            <StyledItem>
                <div className="col-sm-6">Movies</div>
                <div className="col-sm-6">Tv</div>
            {movies.map((popularData) => (
                <Item key={popularData.id}>
                    <Card width="60rem" data = {popularData}/>
                    <StyledText>
                        <Text width="200px" data={popularData}/>

                        <Overview>{popularData.vote_average}</Overview>
                    </StyledText>
                </Item>
            ))}
            </StyledItem>
        )
    }
}

export default Movies;