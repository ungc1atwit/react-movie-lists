import React, { Component } from 'react';
import Card from '../../../components/Card';
import Text from '../../../components/Text';
import styled from 'styled-components';
import axios from 'axios';

const Item = styled.div`
    margin: auto; 
`;

class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tivis: [],
            loading: true,
            cardWidth: "0",
            textWidth: "0"
        }

        this.handleWindow = this.handleWindow.bind(this);
    }

    async componentDidMount() {        
        try{
            let tiviLists = await axios.get(process.env.MOVIEDB_API_URL + "tv/on_the_air?api_key=" + process.env.MOVIEDB_API_KEY + "&page=1");

            this.setState({
                tivis: tiviLists.data.results,
                loading: false
            });
        } catch(error){
            console.log("Error: " + error.message);
        } 
        
        let mediaQuery1 = window.matchMedia("(min-width: 320px) and (max-width: 375px)");
        let mediaQuery2 = window.matchMedia("(min-width: 1024px)");
        this.handleWindow(mediaQuery1, mediaQuery2);
    }

    handleWindow(media1, media2){
        if(media1.matches){
            this.setState({
                cardWidth: "130rem",
                textWidth: "130px"
            });
        } else if(media2.matches){
            this.setState({
                cardWidth: "200rem",
                textWidth: "200px"
            })
        } else {
            this.setState({
                cardWidth: "110rem",
                textWidth: "110px"
            })
        }
    }

    render(){
        const {tivis, loading, cardWidth, textWidth} = this.state;

        if(loading){
            return (
                <div className="laoding">
                    <p>Loading...</p>
                </div>
            )
        }
        return(
            <div className="row">
            {tivis.map((lists) => (
                <Item key={lists.id}>
                    <Card width={cardWidth} data = {lists}/>
                    <Text width={textWidth} data={lists}/>
                </Item>
            ))}
            </div>
        )
    }
}

export default Movies;