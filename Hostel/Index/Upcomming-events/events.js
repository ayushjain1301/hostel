const randomDay = () => {
    let random_day = Math.floor(Math.random() * 30);
    console.log('your random day is: ' + random_day);
  }
  
  const randomMonth = () => {
    let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    let random_month = months[Math.floor(Math.random() * 12)];
    console.log('your random month is: ' + random_month);
    return random_month;
  }
  
  