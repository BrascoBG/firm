function firm([a,b,c]){
  let hoursNeeded = parseInt(a);
  let days = parseInt(b);
  let daysOff = days * 0.1;
  let avalableDays = days - daysOff;
  let employes = parseInt(c);
  let hoursWork = (avalableDays * (8 + 2)) * employes;

  if(hoursWork > hoursNeeded){
    console.log('Yes! ' + Math.floor(hoursWork - hoursNeeded) + ' hours left!');
  }
  else{
    console.log('Not enough time! ' + Math.floor(hoursNeeded - hoursWork) + ' hours needed!');
  }
}

firm([300, 9, 4]);
