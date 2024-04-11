var op; 
function func() {
  var result;
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  switch (op) {
    case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;

      case 'expo':
        result = num1 ** num2
        break
      
      case 'root':
        result = num1 ** (1/num2)
        break
    
  }

  document.getElementById("result").innerHTML = result;
}