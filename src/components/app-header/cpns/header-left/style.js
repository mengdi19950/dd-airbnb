import styled from 'styled-components';

export const LeftWrapper = styled.div`
  /* flex: 1; */
  fill: ${props => props.theme.isAlpha ? '#fff':props.theme.color.primaryColor}; //填充颜色
  /* stroke: blue; */ //描边颜色
  .logo {
    cursor: pointer;
  }

`