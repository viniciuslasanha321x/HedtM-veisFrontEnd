import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
:root {
    --logo-color: #678AC0;
    --primary-color: #E7E7E7;
    --secundary-color:  #767272;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
}

body {
    font-family: Poppins;
    font-size: 15px;
    background-color: #F1F1F1;
}

h1, h2, h3, h4, h5, h6, string {
    font-weight: 500;
}
button {
    cursor: pointer;
}
`;

export default Global;
