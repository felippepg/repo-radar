import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 0.5em;

  @media screen and (min-width: 900px) and (max-width: 1199px) {
    background-color: white;
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: space-between;
    padding: 1em;
  }

  @media screen and (min-width: 1200px) {
    background-color: white;
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: space-between;
    padding: 1em;
  }

  @media screen and (max-width: 899px) {
    background-color: transparent;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 900px) {
    width: 50%;
  }
`;

export const UserInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 900px) {
    flex-direction: row;
  }
`;
