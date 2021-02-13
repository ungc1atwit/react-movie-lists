import React from 'react';
import noImage from '../media/noImage.png';
import PropTypes from 'prop-types';
import styled from "styled-components";

const posterUrl = process.env.IMAGE_TMDB_URL;

const Image = styled.img`
    border-radius: 15px;
    //box-shadow: 5px 1px 5px 1px;
    margin-right: 5px;
`;


const Card = ({data, width}) =>{
    return (
        <Image width={width} src={posterUrl + data.poster_path} onError={addDefaultImage}/>
    );
};

Card.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        id: PropTypes.number,
        poster_path: PropTypes.string,
    }).isRequired
};

function addDefaultImage(event){
    event.target.src = noImage;
}

export default Card;