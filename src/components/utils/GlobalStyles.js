import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body, button {
  font-family: 'Montserrat';
}
ul {
    list-style-type: none;
    padding-left: 0;
}
p {
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
    color: #ebd8ff;
    margin: 0;
}
`;
