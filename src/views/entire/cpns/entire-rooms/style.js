import styled from "styled-components";

export const RoomWrapper = styled.div`
  padding: 70px 20px;
  position: relative;
  .list {
    display: flex;
    flex-wrap:wrap;
  }
  .title {
    font-size: 22px;
    font-weight: 700;
    color: #222;
    margin: 0 0 10px 10px;
  }
  .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255,255,255,.8);
  }
`