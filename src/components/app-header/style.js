import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  
  /* display: flex; */
  /* align-items: center;
  justify-content: space-between; */
  /* height: 80px; */
  

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }

  .content{
    padding: 0 20px;
    position: relative;
    z-index: 19;
    transition: all 250ms ease;
    background-color: ${props => props.theme.isAlpha ? 'rgba(255,255,255,0)':'rgba(255,255,255,1)'};
    border-bottom: 1px solid #eee;
    border-bottom-color:${props => props.theme.isAlpha ? 'rgba(255,255,255,0)':'rgba(255,255,255,1)'};
    

    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
    }

    .search-area {
      height: 100px;
    }
  }

  .cover {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.1);
    z-index: 9;
  }
`

export const SearchAreaWrapper = styled.div`
  transition: height 250ms ease;
  height: ${props => props.isSearch ? '100px':'0'};
`