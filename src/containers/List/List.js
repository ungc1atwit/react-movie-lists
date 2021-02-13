import React, { Component } from 'react';
//import { BrowserRouter as Route, Switch, NavLink, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Trending from './Trending/Trending';
import Movies from './Movies/Movies';
import Tivi from './Tv/Tivi';
import styled from 'styled-components';
import TopRatedList from './Popular/TopRatedList';

const StyledPopularText = styled.h4`
    text-align: center; 
    color: rgb(192, 171, 255);
    font-size: 20pt;
    font-family: UTMCafetaRegular;
`;
class List extends Component {
    render() {    
        /*const {genres, data, loading } = this.state;

        if(loading){
            return <div>Loading...</div>;
        }*/

        return (
            /*
            <div className='row'>
              {data.map(movie => (
                <div key={movie.id} className='col-sm-4'>
                  <Card movie={movie} />
                </div>
              ))}
            </div>
            */
           <div className="row">
                <div className="col-md-9">
                    <div className="trending">
                        <Trending/>
                    </div>
                    <div className="container">
                        <h4>Movies</h4>
                        <Movies/>
                    </div>
                    <div className="container">
                        <h4>Series</h4>
                        <Tivi/>
                    </div>
                </div>
                <div className="col-md-3">
                    <StyledPopularText >Popular</StyledPopularText>
                    <TopRatedList />
                </div>
           </div>
        );
    }
}


export default List;
