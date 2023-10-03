import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListItem = styled(Link)`
  background-color: white;
  display: block;
  width: 100%;
  padding: 0.3em 1em;
  border-radius: 0.2em;
  text-decoration: none;
  color: black;
  margin-bottom: 0.5em;
  display: flex;
  font-size: 1em;

  @media screen and (min-width: 900px) {
    font-size: 1.5em;
  }
`;
