function theBeatlesPlay(musicianArr, instrumentArr){
  
  var emptyArrYay = [];
  
  for(let i =0; i <  musicianArr.length; i++){
    
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



function iLoveTheBeatles(x){
  
  var emptyArr = [];
  
  do {
   emptyArr.push('I love the Beatles!');
  x++;
  
  } while (x < 15);
  return emptyArr;
  
}