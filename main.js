
//не получается сделать формулу возведения в степень рабочей


var inputLabel = document.getElementById('inputLabel');

function pushBtn(x) {
         
        var pushed = x.innerHTML;
        
        if (pushed == '=') {
            
            inputLabel.innerHTML = eval(inputLabel.innerHTML);
             
        } 
        else if (pushed == '√') {
            
            inputLabel.innerHTML = Math.sqrt(inputLabel.innerHTML);     
        }
        else if (pushed == '^') {
           var number1 = document.getElementById('inputLabel') 
          let a = parseInt (number1);
          inputLabel.innerHTML = a + 'r ';
          //let b = parseInt (number1);
          //let result = Math.pow(a, b);
          //inputLabel.innerHTML = result; 
            
                       
        }
        else if (pushed == 'C') {

            inputLabel.innerHTML = '0';     
        } else {
            if (inputLabel.innerHTML == '0') {
                inputLabel.innerHTML = pushed;
                 
            } else {
                inputLabel.innerHTML = inputLabel.innerHTML + pushed;
                 
            }
        }
    }


    function LargeSize() {

        var a = document.getElementById('smallSize');
        var b;
        var c = document.getElementById('orange');
        var d;
        var e;
        var f;

        /*
        if (orange.style=='background-color:orange') {
            b = '<tr id="smallSize"><td><button onclick="pushBtn(this);">0</button></td><td><button onclick="pushBtn(this);">.</button><td><button onclick="pushBtn(this);">√</button></td><td><button onclick="pushBtn(this);">^</button></td></tr>';
            a.outerHTML = b;
            d = '<td id="orange" style="background-color:yellow"><button onclick="pushBtn(this);" style="color:black;background-color:orange">=</button></td>';
            c.outerHTML = d;}


        } 

            else {
            e = '<tr id="smallSize"><td colspan="2"><button style="width: 156px;" onclick="pushBtn(this);">0</button></td><td><button onclick="pushBtn(this);">.</button></td>        </tr>';
            a.outerHTML = e;
            f = '<td rowspan="2" id="orange" style="background-color:orange"><button onclick="pushBtn(this);" style="color:black;background-color:orange; height:156px; ">=</button></td>';
            c.outerHTML = f;}


            }*/


        
        b = '<tr id="smallSize"><td><button onclick="pushBtn(this);">0</button></td><td><button onclick="pushBtn(this);">.</button><td><button onclick="pushBtn(this);">√</button></td><td><button onclick="pushBtn(this);">^</button></td></tr>';
        a.outerHTML = b;
        
        d = '<td id="orange" style="background-color:orange"><button onclick="pushBtn(this);" style="color:black;background-color:orange">=</button></td>';
        c.outerHTML = d;}

//okruglenie drobnix 4isel 
//var result = 0.1 + 0.2;
//alert( +result.toFixed(10) ); // 0.3


          //var number1 = document.getElementById('inputLabel') 
          //let a = parseInt (number1);
          //inputLabel.innerHTML = ' ';
          //let b = parseInt (number1);
          //let result = Math.pow(a, b);
          //inputLabel.innerHTML = result;





