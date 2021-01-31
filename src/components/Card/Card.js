import React from 'react';
import noImage from '../../media/noImage.png';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({movie}) =>{
    return (
        <div className="card">
            <img src={movie.posterUrl} onError={addDefaultImage} alt={movie.title} className="image"/>
            <div className="desc">
                <h2 className="title">{`${movie.title} (${movie.year})`}</h2>
                <p className="text">{`${movie.plot}`}</p>
                <button type="button" className="btn btn-primary">Read More</button>
            </div>
        </div>   
    );
};

Card.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        id: PropTypes.number,
        year: PropTypes.string,
        posterUrl: PropTypes.string,
        actors: PropTypes.string,
        plot: PropTypes.string
    }).isRequired
};

function addDefaultImage(event){
    event.target.src = noImage;
}

export default Card;