import styled from 'styled-components';

export const Item = styled.li`
  background-color: white;
  list-style: none;
  margin-bottom: 0.5em;
  display: flex;
  justify-content: space-between;
  border-radius: 0.2em;
  font-size: 0.8em;
  @media screen and (min-width: 900px) {
    font-size: 1.5em;
  }
`;
