import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListItem = styled(Link)`
  background-color: white;
  display: block;
  width: 100%;
  padding: 0.3em 1em;
  border-radius: 0.2em;
  text-decoration: none; /* Remover sublinhado padrão do link */
  color: black; /* Definir a cor do texto */
`;
