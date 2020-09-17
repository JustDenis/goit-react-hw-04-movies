import React from 'react';
import TrendFilms from '../components/TrendFilms';
import styled from 'styled-components';

const HomeSection = styled.section`
  padding: 40px 0;
`;

const Home = ({location}) => (
  <HomeSection>
    <TrendFilms location={location}/>
  </HomeSection>
);

export default Home;
