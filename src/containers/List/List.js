import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import './List.css';

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            genres: [],
            data: [],
            loading: true,
        };
    }

    async componentDidMount() {
        const movies = await fetch('src/assets/movies.json');
        const moviesJSON = await movies.json();

        if(moviesJSON){
            this.setState({
                genres: moviesJSON['genres'],
                data: moviesJSON['movies'],
                loading: false,
            });
        }
    }

    render() {        
        const {data, loading } = this.state;

        if(loading){
            return <div>Loading...</div>;
        }

        return (
            <div className='row'>
              {data.map(movie => (
                <div key={movie.id} className='col-sm-4'>
                  <Card movie={movie} />
                </div>
              ))}
            </div>
          );
    }
}


export default List;
