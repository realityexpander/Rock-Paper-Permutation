function rockPaperPermutation (roundCount) {
  res = [];
  src = ['r', 'p', 's'];
  
  if(roundCount === 0)
    return [];
  
  function roundPick( round, roundNum) {
    for(let i=0; i<src.length; i++) {
      round.push(src[i]);
      
      if(roundNum == roundCount){
        res.push(round.slice().join(""));
      } else {
        roundPick(round, roundNum+1);
      }
      
      round.pop();
    }
  }
  
  roundPick([], 1);
  return res;
}


// # Rock
//     _______
// ---'   ____)
//       (_____)
//       (_____)
//       (____)
// ---.__(___)


// # Paper
//     _______
// ---'    ____)___
//           ______)
//           _______)
//         _______)
// ---.__________)
// """)

// # Scissors

//     _______
// ---'   ____)____
//           ______)
//       __________)
//       (____)
// ---.__(___)
