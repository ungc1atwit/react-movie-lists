import React, { Component } from 'react';
import Card from '../../../components/Card';
import styled from 'styled-components';
import Text from '../../../components/Text';
import axios from 'axios';
import { MdRateReview } from 'react-icons/md'; 
const StyledItem = styled.ul`
    margin: 0;
    padding: 0;
    position: relative;
    color: rgb(194, 170, 141);

`;
const Container = styled.a`
    overflow: hidden;
    display: flex;
    margin-top: 0.5rem;
    justify-content: center;
    color: rgb(194, 170, 141);

    &:hover{
        opacity: 1;
        background: #632c65;
        text-decoration: none;
        background: -moz-linear-gradient(-45deg, #632c65 15%, #56a5e2 100%);
        background: -webkit-linear-gradient(-45deg, #632c65 15%,#56a5e2 100%);
        background: linear-gradient(135deg, #632c65 15%,#56a5e2 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#632c65', endColorstr='#56a5e2',GradientType=1 );
    }
`;
const Item = styled.li`
    list-style: none;
    display: flex;
    border-bottom: 1px solid rgb(22, 46, 66);
    color: rgb(194, 170, 141);
`;
const Title = styled.div`
    margin: 0;
    padding: 0;
`;
const Genres = styled.p`
    font-size: 8pt;
    font-family: "Font SpaceMono";
    width: 200px;
    color: rgb(153, 153, 153);
`;
const Vote = styled(Genres)`
`;

class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            isToggle: true,
            type:"movie",
            genres: [],
            loading: true
        };

        this.getGenres = this.getGenres.bind(this);
        this.getData = this.getData.bind(this);
        this.setStateHelper = this.setStateHelper.bind(this);
    }

    async getGenres(data){
        let genres = {};
        for(const value of data){
            let genreLists = [];
            let dataLists = await axios.get(process.env.MOVIEDB_API_URL + this.state.type + "/" + value.id +  "?api_key=" + process.env.MOVIEDB_API_KEY);

            for(const genreObject of dataLists.data.genres){
                genreLists.push(genreObject.name);
            }

            genres[value.id] = genreLists;
        }

        return genres;
    }

    async getData(type){
        try{
            let movieLists = await axios.get(process.env.MOVIEDB_API_URL + type + "/top_rated?api_key=" + process.env.MOVIEDB_API_KEY + "&page=1");
            let results = movieLists.data.results;
            console.log(results);
            console.log(this.state.type);
            
            let data = await this.getGenres(results);

            this.setState({
                movies: results,
                genres: data,
                loading: false
            });
        } catch(error){
            console.log("Error: " + error.message);
        } 
    }

    componentDidMount() {             
        // Fetching the lists of top rated of {movies, tvs}    
        try{
            this.getData(this.state.type);
        } catch(error){
            console.log("Error: " + error.message);
        } 
    }

    setStateHelper(state){
        return {...state, type: this.props.type};
    }

    componentDidUpdate(prevState){
        // Update whenever the type is changed 
        if(prevState.type !== this.props.type){
            this.setState({type: this.props.type});
            this.getData(this.props.type);
        }
    }

    render(){
        const {movies, loading, genres} = this.state;

        if(loading){
            return (
                <div className="loading">
                    <p>Loading...</p>
                </div>
            )
        }

        return(
            <StyledItem>
            {movies.map((popularData) => (
                <Container href=""key={popularData.id}>
                    <Item>
                        <Card width="90rem" data = {popularData}/>
                        <Title>
                            <Text width="200px" data={popularData}/>
                            <Genres>Genres: {genres[popularData.id].join(", ")}</Genres>
                            <Vote><MdRateReview className="App-logo"/> Rate: {popularData.vote_average}</Vote>
                        </Title>
                    </Item>
                </Container>
            ))}
            </StyledItem>
        )
    }
}

export default Movies;