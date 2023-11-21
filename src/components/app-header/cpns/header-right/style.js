import styled from 'styled-components';

// const boxShadow = `
//   transition: box-shadow 200ms ease;
//   &:hover {
//     box-shadow: 0 2px 4px rgba(0,0,0,.18);
//   }
// `

export const RightWrapper = styled.div`
  /* flex: 1;
  justify-content: flex-end; */
  display: flex;
  .btns {
    display: flex;
    align-items: center;
    margin: 0 10px;
    color: ${props => props.theme.isAlpha ? '#fff':'#666'};
    cursor: pointer;
    span {
      padding: 12px 10px;
      border-radius: 22px;
      &:hover{
        background-color: #f5f5f5;
      }
    }
  }
  .profile {
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 30px;
    border: 1px solid #ddd;
    padding: 0 5px;
    color: #333;
    background-color: #fff;
    cursor: pointer;
    .menu {
      margin-left: 8px;
    }
    .avatar {
      margin-left: 8px;
    }
    //鼠标移动到上面会浮现阴影的动画
    ${props => props.theme.mixin.boxShadow}

    .panel {
      position: absolute;
      right: 0;
      top: 60px;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,.15);
      box-sizing: border-box;

      .top,.bottom {
        padding: 10px 0;

        .item {
          padding: 12px 15px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
      .top {
        border-bottom: 1px solid #eee;
      }
      
    }
  }
`