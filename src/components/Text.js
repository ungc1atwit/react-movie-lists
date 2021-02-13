import React from 'react';
import styled from "styled-components";

const StyledText = styled.p`
    font-family: "Font SpaceMono";
    font-size: 10pt;
    text-align: center;
    margin-top: 0.3rem;
`;

const Text = ({data, width, color}) =>{
    let title = data.title ? data.title : data.name;
    let year = data.release_date ? data.release_date.split("-")[0] : data.first_air_date.split("-")[0];

    return(
        <StyledText width={width} color={color}>
            {title}
            <span style={{padding: "0.1em"}}></span>
            ({year})
        </StyledText>
    )
};

export default Text;