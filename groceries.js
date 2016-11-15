function addItem(){
  //Get the value of what the user typed in the text box and assign it to a variable called input
  var input = document.getElementById("newItem").value;
  console.log(input)
  //Get the element listDisplay and assign it to a variable called list
  var list = document.getElementById("listDisplay");
  //Create a new variable called item and assign it to: document.createElement("li"); This creates a new list item element for the document object model (DOM).
  var item = document.createElement("li");
  var btnClose = document.createElement("button");
     btnClose.classList.add("btn");
     btnClose.classList.add("btn-danger");
     btnClose.classList.add("btn-xs");
     btnClose.addEventListener("click",removeParentListItem);
  var iconClose = document.createElement("span");
     iconClose.classList.add("glyphicon");
     iconClose.classList.add("glyphicon-remove");
     btnClose.appendChild(iconClose);
     item.appendChild(btnClose);
     //Now, make btnClose a child of the li element you already made in addItem()
     //^give li a baby & li corresponds to the var item
     list.appendChild(item);
  //Create a new variable called itemName and assign it to: document.createTextNode(input); This creates plain text element from the value of the variable input to put in the DOM.
  var itemName = document.createTextNode(input);
    item.appendChild(itemName);
    input = document.getElementById("newItem").value="";
}
function removeParentListItem()
{
  var mom = this.parentNode;
  var grandma = mom.parentNode;
  grandma.removeChild(mom);
}


//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
