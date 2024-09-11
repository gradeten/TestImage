import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components';
import infoImg from '../src/assets/info_container.svg'
import infoImg2 from '/Users/huijing/testimage/src/assets/info_container.svg'

function App() {

  return (
    <>
      <p>상대경로 이용:</p>
      <ImgContainer/>
      <p>절대경로 이용:</p>
      <ImgContainer2/>
      <p>SVG 파일 이용:</p>
      <ImgContainer3/>
    </>
  )
}

export default App;

const svgData = `
  <svg width="344" height="133" viewBox="0 0 344 133" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M333.701 0L10.2994 2.95639e-05C10.2994 6.38731 5.68819 11.5652 0 11.5652V21.974C5.6882 21.974 10.2994 27.1519 10.2994 33.5392C10.2994 39.9265 5.6882 45.1044 0 45.1044V55.5131C5.6882 55.5131 10.2994 60.691 10.2994 67.0783C10.2994 73.4656 5.6882 78.6435 0 78.6435V89.0522C5.6882 89.0522 10.2994 94.2301 10.2994 100.617C10.2994 107.005 5.6882 112.183 0 112.183V121.435C5.6882 121.435 10.2994 126.613 10.2994 133L333.701 133C333.701 126.613 338.312 121.435 344 121.435V112.183C338.312 112.183 333.701 107.005 333.701 100.617C333.701 94.23 338.312 89.0521 344 89.0521V78.6435C338.312 78.6435 333.701 73.4656 333.701 67.0783C333.701 60.691 338.312 55.5131 344 55.5131V46.2609C338.312 46.2609 333.701 41.0829 333.701 34.6956C333.701 28.3084 338.312 23.1304 344 23.1304V11.5652C338.312 11.5652 333.701 6.38729 333.701 0Z" fill="#BFD8E6"/>
  </svg>
`;

const encodedSvg = encodeURIComponent(svgData).replace(/'/g, "%27").replace(/"/g, "%22");

const ImgContainer = styled.div`
  background-image: url(${infoImg});
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  width: 340px; 
  height: 130px; 
  margin: 0 auto;
  margin-bottom: 10px;
  filter: drop-shadow(8px 8px 8px rgba(0, 0, 0, 0.1));
`;


const ImgContainer2 = styled.div`
  background-image: url(${infoImg2});
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  width: 340px; 
  height: 130px; 
  margin: 0 auto;
  margin-bottom: 10px;
  filter: drop-shadow(8px 8px 8px rgba(0, 0, 0, 0.1));
`;

const ImgContainer3 = styled.div`
  background-image: url('data:image/svg+xml,${encodedSvg}');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  width: 340px; 
  height: 130px; 
  margin: 0 auto;
  margin-bottom: 10px;
  filter: drop-shadow(8px 8px 8px rgba(0, 0, 0, 0.1));
`;
