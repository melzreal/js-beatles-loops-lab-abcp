function theBeatlesPlay(musicianArr, instrumentArr){
  
  var emptyArrYay = [];
  
  for(let i = musicianArr.length; i >= 0; i--){
    
      emptyArrYay.push(musicianArr[i]+ ' plays ' +instrumentArr[i])
    }
    
    return emptyArrYay;
}


function johnLennonFacts(jFacto){
  
  var i = 0;

  while(i<jFacto.length){
    
  jFacto[i] += '!!!';
  i++;
  
    
  }
  return jFacto;
}