let age = 90;

if (age > 50) {
  console.log('Senior Person');
} else if (age < 20) {
  console.log('Junior Person');
} else {
  console.log('Regular Person');
}

//switch
const medal = 1;
switch (medal) {
  case 1:
    console.log('you got a gold medal');
    break;
  case 2:
    console.log('you got a silver medal');
    break;
  case 3:
    console.log('you got a bronze medal');
    break;
  default:
    console.log('try again');
    break;
}
