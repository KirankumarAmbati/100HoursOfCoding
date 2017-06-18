var expression = "";
var result = 0;
var buttons = document.getElementsByTagName("button");

for (var i = 0; i < buttons.length; i++)
{
    var self = buttons[i];
    if(self.className=="")
    {
      self.className = "btn btn-primary col-md-3";
    }
    self.addEventListener('click', function (event)
    {
        buttonClicked(this);
    }, false);
}

function buttonClicked(objectPassed)
{
    var str = objectPassed.value;

    if (str!="=" && str!="AC" && str!="OFF" && str!="ON" && str!="DEL")
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
      for (var i = 0; i < buttons.length-1; i++)
      {
          var self = buttons[i];
          self.disabled = true;
      }
    }
    else if (str=="ON")
    {
      for (var i = 0; i < buttons.length-1; i++)
      {
          var self = buttons[i];
          self.disabled = false;
      }
    }
    else if (str=="DEL")
    {
      expression=expression.slice(0,-1);
      document.getElementById("expression").value=expression;
    }
    else
    {
      result = eval(expression);
      document.getElementById("expression").value=result;
      expression=result;
    }
}
