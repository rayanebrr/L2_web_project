function add(){
  var newDiv = document.createElement("div");
  newDiv.setAttribute('class', 'citation-card');

  var h2 = document.createElement("h2");
  h2.setAttribute('class', 'h2-citation');

  var container = document.getElementsByClassName("container")[0];
  var input = document.getElementById("input").value;
  var txt = document.createTextNode(input);
  if (input != ""){
    h2.appendChild(txt);
    newDiv.appendChild(h2);
    container.appendChild(newDiv);
  }
  

}
