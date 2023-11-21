import styled from "styled-components";

export const ViewWrapper = styled.div`
  position: relative;
  padding: 8px 0;

  .scroll {
    overflow: hidden;
    .slot {
      display: flex;
      transition: transform 250ms ease;
    }
  }

  .controls {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
    text-align: center;
    background-color: #fff;
    border-radius:50%;
    width: 28px;
    height: 28px;
    border-width: 2px;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,.14);
    cursor: pointer;
  }
  .left {
    left: 0;
    top: 50%;
    transform: translate(-50%,-50%);
  }   
  .right {
    right: 0;
    top: 50%;
    transform: translate(50%,-50%);
  }
  
`