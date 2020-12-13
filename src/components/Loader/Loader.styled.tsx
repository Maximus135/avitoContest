import styled from 'styled-components';


export const StyledBack = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255);
`


export const StyledSpinner = styled.svg`
    animation: rotate 1s linear infinite;
    width: 100px;
    height: 100px;
    margin-left: auto;
    margin-right: auto;

& .path {
  stroke: rgba(119, 143, 155, 0.541);
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
`;




