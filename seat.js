document.getElementById('getval').addEventListener('change', readURL, true);
function readURL(){
     var file = document.getElementById("getval").files[0];
     var reader = new FileReader();
     reader.onloadend = function(){
        document.getElementById('clock').style.backgroundImage = "url(" + reader.result + ")";
     }
     if(file){
        reader.readAsDataURL(file);
      }else{
        exit(1)
      }
    }

function create(){
  var d = '';
  var sty = '';
  var a = document.getElementById("created").value;
  var num = parseInt(a)
  alert(num);
  if (num > 36){
    alert("number to large");
  }
  for(var i = 1; i <= num; i++){
    d += "<div class=\"item"+i+"\"><span class=\"tool"+i+"\">open</span></div>"
    sty += '.item'+i+' {' +
      'position: relative;' +
      'display: inline-block;'+
      'border-bottom: 1px dotted black;'+
    '}' +

    '.item'+i+' .tool'+i+' {'+
      'visibility: hidden;'+
      'width: 120px;'+
      'background-color: black;'+
      'color: #fff;'+
      'text-align: center;'+
      'border-radius: 6px;'+
      'padding: 5px 0;'+

      'position: absolute;'+
      'z-index: 1;'+
    '}'+

    '.item'+i+':hover .tool'+i+' {'+
      'visibility: visible;'+
    '}';
    //alert(d);
    //alert("<div class=\"item"+i+"\"><span class=\"tool"+i+"\">open</span></div>");
  //  node.innerHTML += "<div class=\"item" +i+ "\"><span class=\"tool" +i+ "\">open</span></div>";
 }
 var node = document.getElementById('ed');
 node.innerHTML = d
//alert(sty);
/*
var ref = document.getElementById('stl');
ref.innerHTML += sty
*/
 var style = document.createElement('style');
 style.innerHTML = sty;
 alert(style);

 var ref = document.querySelector('script');
 ref.parentNode.insertBefore(style, ref);

}

function seat(){
    var a = document.getElementById("tex").value;
    var b = document.getElementById("num").value;
    x=document.getElementsByClassName("tool"+b);  // Find the elements
    alert("tool"+b);
      for(var i = 0; i < x.length; i++){
        x[i].innerText=a;
  }
}




/*
function seat1(){
    var a = document.getElementById("text1").value;
    x=document.getElementsByClassName("tool1");  // Find the elements
      for(var i = 0; i < x.length; i++){
        x[i].innerText=a;
  }
}

function seat2(){
    var a = document.getElementById("text2").value;
    x=document.getElementsByClassName("tool2");  // Find the elements
      for(var i = 0; i < x.length; i++){
        x[i].innerText=a;

  }
}
function seat3(){
    var a = document.getElementById("text3").value;
    x=document.getElementsByClassName("tool3");  // Find the elements
      for(var i = 0; i < x.length; i++){
        x[i].innerText=a;

  }
}
function seat4(){
    var a = document.getElementById("text4").value;
    x=document.getElementsByClassName("tool4");  // Find the elements
      for(var i = 0; i < x.length; i++){
        x[i].innerText=a;

  }
}
function seat5(){
    var a = document.getElementById("text5").value;
    x=document.getElementsByClassName("tool5");  // Find the elements
      for(var i = 0; i < x.length; i++){
        x[i].innerText=a;

  }
}
function seat6(){
    var a = document.getElementById("text6").value;
    x=document.getElementsByClassName("tool6");  // Find the elements
      for(var i = 0; i < x.length; i++){
        x[i].innerText=a;

  }
}
function seat7(){
    var a = document.getElementById("text7").value;
    x=document.getElementsByClassName("tool7");  // Find the elements
      for(var i = 0; i < x.length; i++){
        x[i].innerText=a;

  }
}
function seat8(){
    var a = document.getElementById("text8").value;
    x=document.getElementsByClassName("tool8");  // Find the elements
      for(var i = 0; i < x.length; i++){
        x[i].innerText=a;

  }
}
function seat9(){
    var a = document.getElementById("text9").value;
    x=document.getElementsByClassName("to0l9");  // Find the elements
      for(var i = 0; i < x.length; i++){
        x[i].innerText=a;

  }
}
*/
