// Dynamically load stylesheets
function changeStyle()
{
  var styles = document.createElement('link');

  styles.type="text/css";
  styles.rel="stylesheet";

  var styleDecider = Math.floor(Math.random()*10) % 3;

  if(styleDecider == 0){
    styles.href="./css/style1.css";
  }
  else if (styleDecider == 1){
    styles.href="./css/style2.css";
  }
  else{
    styles.href="./css/style3.css";
  }
  document.head.appendChild(styles);
}

// Toggle CSS
function toggleCSS()
{
  var link = document.getElementById('styling');
  link.disabled = !link.disabled;
}
