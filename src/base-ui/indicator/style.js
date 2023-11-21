import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;
  .in-content {
    display: flex;
    position: relative;
    transition: transform 200ms ease;

    > * {
      flex-shrink: 0;
    }
  }
  

`