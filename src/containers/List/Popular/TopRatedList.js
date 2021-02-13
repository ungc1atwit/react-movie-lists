import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components';
import Popular from './Popular';

const Button = styled.button`
    background-color: black;
    color: white;
    cursor: pointer;
    &:disabled {
        color: grey;
        opacity: 0.7;
        cursor: default;
    }
`;
const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
`;
const ButtonToggle = styled(Button)`
    border-radius: 15px 0 15px 0;
    width: 100%;
    opacity: 0.6;
    ${({ active }) =>
        active &&
        `
        opacity: 1;
        background-color: #3A63DB;
    `}
`;
const types = [
    {name: "Movies", value: "movie"},
    {name: "Series", value: "tv"}
];

function TopRatedList() {
    const [active, setActive] = useState(types[0]);

    return (
      <div>
          <ButtonGroup>
                {types.map(type => (
                <ButtonToggle
                    key={type.name}
                    active={active === type}
                    value={type.value}
                    onClick={() => setActive(type)}
                >
                    {type.name}
                </ButtonToggle>
                ))}
          </ButtonGroup>
         <Popular type={active.value}/>
      </div>
    );
  }  

export default TopRatedList;


