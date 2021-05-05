import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.min.css';

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

::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
	border-radius: 10px;
}

::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
	background-color: #AAA;
	border-radius: 10px;
	background-image: -webkit-linear-gradient(90deg,
	                                          rgba(0, 0, 0, .2) 25%,
											  transparent 25%,
											  transparent 50%,
											  rgba(0, 0, 0, .2) 50%,
											  rgba(0, 0, 0, .2) 75%,
											  transparent 75%,
											  transparent)
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
