import React, { Component } from 'react';
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../../../components/Card";
import Text from "../../../components/Text";
import styled from "styled-components";

const Item = styled.div`
    margin-top: 10px;
    margin-left: 0.2rem;
`;

class Trending extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: [],
            loading: true
        }
    }

    async componentDidMount() {
        try{
            const trending =  await axios.get(process.env.MOVIEDB_API_URL + "trending/all/week?api_key=" + process.env.MOVIEDB_API_KEY);
                        
            this.setState({
                data: trending.data.results,
                loading: false
                })
        } catch(error){
            console.log(error);
        }
        
    }

    
    render() {
        const responsive = {
            desktop: { 
                breakpoint: {max: 3000, min: 850},
                items: 4,
                slidesTosSlide: 4
            },
            tablet:{
                breakpoint: {max: 850, min: 464},
                items: 3,
                slidesTosSlide: 3
            },
             mobile: {
                breakpoint: {max: 464, min: 280},
                items: 2,
                slidesTosSlide: 2
            },
            mobileGalaxy: {
                breakpoint: {max: 280, min: 0},
                items: 1,
                slidesTosSlide: 1
            }
        };
        
        const {data, loading} = this.state;

        if(loading){
            return <div><p>Loading...</p></div>
        }

        return(
            /*Map through the data fetched from MovieDB API */
            <Carousel
            responsive={responsive}
            autoPlay
            infiniteScroll
            infinite
            draggable
            swipeable
            SlidesTosSlide={4}
            autoPlaySpeed={5000}>
            {data.map((trending) => (
                <Item key={trending.id}>
                    <Card width= "90%" data = {trending}/>
                    <Text data = {trending}/>
                </Item>
            ))}
            </Carousel>
        )
    }
}

export default Trending;