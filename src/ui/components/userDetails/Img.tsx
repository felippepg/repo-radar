import styled from 'styled-components';

export const Img = styled.img`
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1em;

  @media screen and (max-width: 900px) {
    width: 158px;
    height: 161px;
  }
  @media screen and (min-width: 901px) and (max-width: 1199px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (min-width: 1200px) {
    width: 400px;
    height: 400px;
  }
`;
