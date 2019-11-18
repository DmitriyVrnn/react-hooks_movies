import styled from 'styled-components';

export const MovieCard = styled.div`
  padding: 10px 25px 10px 25px;
  max-width: 25%;
  height: 400px;
  display: flex;
  margin: 20px;
  background: #323232;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
`;

export const MovieTitle = styled.h1`
  font-size: 1.2rem;
  color: white;
`;

export const MoviePoster = styled.img` 
  width: 200px;
`;

export const MovieDate = styled.p`
  color: gray;
  font-size: 1rem;
`;