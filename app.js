function Open() 
{
  var ChangeWidth = document.getElementById("nav")

  if(ChangeWidth.className == "nav0")
  {
    ChangeWidth.className = "nav100"
  }else{
    ChangeWidth.className = "nav0"
  }
}

function Close()
{
  var CloseNav100 = document.getElementById("nav")

  if(CloseNav100.className == "nav100")
  {
    CloseNav100.className = "nav0"
  }
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


// Click eventini bu video yardımıyla ayarlayabildim
// How To Change Width Height etc in JavaScript by If Else If Statements and Onclick Event JavaScript
