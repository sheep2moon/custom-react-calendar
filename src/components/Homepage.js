import React from 'react';
import styled from 'styled-components';
import DatePicker from './DatePicker';
import { AiFillGithub } from 'react-icons/ai';

const Homepage = () => {
  return (
    <HomeContainer>
      <h1>custom date picker component</h1>
      <p>created with react, styled components, react-icons, date-fns</p>
      <PickerWrap>
        <DatePicker />
      </PickerWrap>
      <Info>
        <p>features</p>
        <ul>
          <li>custom labels</li>
          <li>custom date format</li>
          <li>week start from monday or sunday</li>
          <li>responsive</li>
        </ul>
        <a href='https://github.com/sheep2moon/custom-react-calendar'>
          <AiFillGithub />
          SOURCE CODE
        </a>
      </Info>
    </HomeContainer>
  );
};

export default Homepage;

const HomeContainer = styled.div`
  margin: 2rem auto;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  padding: 0.25em;
  align-items: flex-start;
  color: #fff;
  > h1 {
    text-transform: uppercase;
    font-size: 4em;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 0.6rem;
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2rem 0;
  > p {
    font-size: 3em;
    padding: 0.2em;
    margin: 0.2em 0;
    color: #000;
    background-color: #2aefc4;
    line-height: 1;
  }
  > ul {
    list-style: none;
    > li {
      font-size: 3em;
      ::before {
        content: '>';
        color: #2aefc4;
      }
    }
  }
  > a {
    display: flex;
    margin: 2rem 0;
    align-items: center;
    padding: 0.5rem;
    font-size: 1.4em;
    color: #000;
    text-decoration: none;
    background-color: #fff;
    > svg {
      margin-right: 0.5em;
      font-size: 1.6em;
    }
  }
`;

const PickerWrap = styled.div`
  margin: 2rem 0;
`;
