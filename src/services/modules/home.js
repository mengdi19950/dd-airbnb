import ddRequest from '..';

export function getHomeGoodPriceData(){
  return ddRequest.get({
    url:'/home/goodprice'
  })
}

export function getHomeHighScoreData(){
  return ddRequest.get({
    url:'/home/highscore'
  })
}

export function getHomeDiscountData(){
  return ddRequest.get({
    url:'/home/discount'
  })
}

export function getHotRecommendData(){
  return ddRequest.get({
    url:'/home/hotrecommenddest'
  })
}

export function getLongforData(){
  return ddRequest.get({
    url:'/home/longfor'
  })
}

export function getHomePlusData(){
  return ddRequest.get({
    url:'/home/plus'
  })
}



