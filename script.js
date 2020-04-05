let record = [
  {
    principal: 2500,
    time: 1.8
  },
  {
    principal: 1000,
    time:5
  },
  {
    principal: 3000,
    time:1
  },
  {
    principal: 2000,
    time:2
  }
];

function interestCalculator(arr) {

  let rate;
  let interest;
  let interestData = [];    //variable to store new array of objects inclusive of rate and interest

  for (let i = 0; i < arr.length; i++) {
      let pcl = arr[i].principal;
      let tm = arr[i].time;

      if (pcl >= 2500 && tm > 1 && tm < 3) {
           rate = 3;
       } else if (pcl >= 2500 && tm >= 3) {
           rate = 4;
       } else if (pcl < 2500 || tm <= 1) {
           rate = 2;
       } else {
           rate = 1;
       }

     interest = (pcl * rate * tm)/100;    // calculate interest

    // create a new obj
     let newObj = {
       principal:pcl,
       time:tm,
       rate:rate,
       interest:interest
     }
    // add object to empty array
     interestData.push(newObj);
    }
    console.log(interestData)
   return interestData;
}

interestCalculator(record);
