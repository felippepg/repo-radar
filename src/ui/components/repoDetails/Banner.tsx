import styled from 'styled-components';

export const Banner = styled.div`
  border-radius: 0.5em;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 900px) and (max-width: 1199px) {
    background-color: white;
    width: 100%;
    height: 40vh;
    display: flex;
    padding: 1em;
  }

  @media screen and (min-width: 1200px) {
    background-color: white;
    width: 100%;
    height: 60vh;
    display: flex;
    /* justify-content: center; */
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

export const BannerHeader = styled.div`
  @media screen and (min-width: 900px) {
    background-color: #912121;
    padding: 0.5em 2em;
    color: white;
    font-size: 2em;
    border-radius: 0.2em;
  }
  @media screen and (max-width: 899px) {
    background-color: #912121;
    padding: 0.5em 2em;
    color: white;
    font-size: 0.9em;
    border-radius: 0.2em;
  }
`;

export const BannerContent = styled.div`
  background-color: white;
  padding: 2em;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin: 2em 0;
`;

export const BannerItem = styled.div`
  background-color: white;
  display: block;
  width: 20%;
  text-align: center;
  padding: 0.3em 1em;
  margin-bottom: 1em;
  border-radius: 0.2em;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const BannerInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5em;

  @media screen and (min-width: 900px) {
    flex-direction: row;
  }
`;
