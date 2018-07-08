if [ -d $1 ]; then
  echo 'error: dir exists'
  exit
else
  mkdir $1
  cd $1
  mkdir css js
  touch index.html css/style.css js/main.js
  echo "<!DOCTYPE>
  <script type="text/javascript" src="js/main.js"></script>
  <link rel="stylesheet" href="css/style.css">
  <title>Hello</title>
  <h1>Hi</h1>">index.html
  echo "h1{color: red;}">css/style.css
  echo "var string = "Hello World" 
  alert(string)">js/main.js
  echo 'success'
  exit
fi 