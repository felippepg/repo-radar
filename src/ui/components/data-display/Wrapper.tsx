import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;

  @media screen and (min-width: 992px) and (max-width: 1199px) {
    max-width: 800px;
  }

  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    max-width: 1000px;
  }

  @media screen and (min-width: 1600px) {
    max-width: 1200px;
  }
`;
