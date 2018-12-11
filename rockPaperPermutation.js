function rockPaperPermutation (roundCount) {
  res = [];
  src = ['r', 'p', 's'];
  
  
  
  function roundPick( round, roundNum) {
    for(let i=0; i<src.length; i++) {
      round.push(src[i]);
      if(roundNum == roundCount){
        
      } else {
        
      }
      round.pop();
    }
  }
  
  roundPick([], 1);
  return res;
  
}
