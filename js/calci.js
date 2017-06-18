var expression = "";

var result = 0;

function buttonClicked(objectPassed)
{
  var str = objectPassed.value;

  if (str!="=" && str!="AC" && str!="OFF")
  {
    expression+=str;
    document.getElementById("expression").value=expression;
  }
  else if (str=="AC")
  {
    expression="0";
    document.getElementById("expression").value=0;
  }
  else if (str=="OFF")
  {
    document.getElementById("calcu").style.visibility="hidden";
  }
  else
  {
    result = eval(expression);
    document.getElementById("expression").value=result;
    expression="result";
  }
}
