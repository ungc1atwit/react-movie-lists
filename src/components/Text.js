import React from 'react';
import styled from "styled-components";

const StyledText = styled.h2`
    font-family: "Font SpaceMono";
    font-size: 8pt;
    text-align: center;
    margin-top: 0.3rem;
    border: 2px solid;
    width: ${props => props.width};
`;

const Text = ({data, width}) =>{
    let title = data.title ? data.title : data.name;
    let year = data.release_date ? data.release_date.split("-")[0] : data.first_air_date.split("-")[0];

    return(
        <StyledText width={width}>
            {title}
            <br/>
            ({year})
        </StyledText>
    )
};

export default Text;