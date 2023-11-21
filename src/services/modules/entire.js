import ddRequest from '..';

export function getEntireRoomListData(offset = 0,size = 20){
  return ddRequest.get({
    url:'/entire/list',
    params:{
      offset,
      size
    }
  })
}