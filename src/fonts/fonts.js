import {createGlobalStyle } from 'styled-components';

import SpaceMono from "./SpaceMono-Regular.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: "Font SpaceMono";
        src: local("Font SpaceMono"), local("FontSpaceMono"),url(${SpaceMono}) format("ttf");
        font-weight: normal;
        font-style: normal;
    }
`;