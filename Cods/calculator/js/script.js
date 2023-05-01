const container = document.getElementById("container"); 
let input = document.querySelector("textarea"); 
container.addEventListener("click", function(event) { 
  let target = event.target.textContent; 
  let symbol = input.value.slice(input.value.length-1, input.value.length); 
  if(event.target.tagName === "BUTTON") { 
  if (target === "+" || target === "-" || target === "÷" || target === "✖" ) { 
    if(symbol === "/" || symbol === "*" || symbol === "-" || symbol === "+" ) { 
          input.value = input.value.slice(0, input.value.length-1) + event.target.value; 
    } else input.value += event.target.value; 
       
  } 
  if (parseInt(target) || target == 0) input.value += target; 
  if (target === "C") { 
    input.value = ""; 
    input.placeholder = 0; 
  }
  document.getElementById('copy').addEventListener('click', ()=>{
    document.getElementById('copyArea').select();
    document.execCommand('copy');
    let copyArea = document.getElementById('copyArea');
    navigator.clipboard.writeText(copyArea.value);
  });
  document.getElementById('paste').addEventListener('click', ()=>{
    let pasteArea = document.getElementById('copyArea');
    pasteArea.value = '';
    navigator.clipboard.readText()
    .then((text)=>{
        pasteArea.value = text;
    });
  });
  
  if (target === "√") { 
    if (isNaN(Math.sqrt(input.value))) err(); 
      else input.value = Math.sqrt(input.value); 
  } 
  if (target === ".") { 
    if(input.value.slice(input.value.length-1, input.value.length) !== ".") 
      input.value += target; 
  } 
  if (target === "(") { 
    if(input.value.slice(input.value.length-1, input.value.length) !== "(") 
      input.value += target; 
  } 
  if (target === ")") { 
    if(input.value.slice(input.value.length-1, input.value.length) !== ")") 
      input.value += target; 
  } 
  if (target === "%") { 
    if(input.value.slice(input.value.length-1, input.value.length) !== "%") 
      input.value += target; 
  } 
  if (target === "←") input.value = input.value.slice(0, input.value.length-1); 
    if (target === "=") { 
      let test = input.value.slice(input.value.length-1, input.value.length); 
      if (input.value.search(/[0-9]/)) { 
        err(); 
        return; 
      } 
      if (!isNaN(eval(input.value))) { 
        input.placeholder = 0; 
        input.value = eval(input.value); 
      }                  
    } 
    if (target === "M+") { 
      let test = input.value.slice(input.value.length-1, input.value.length); 
      if (input.value.search(/[0-9]/)) { 
        err(); 
        return; 
      } 
      if (!isNaN(eval(input.value))) { 
        input.placeholder = 0; 
        input.value = eval(input.value*2); 
      }                  
    } 
    if (target === "M-") { 
      let test = input.value.slice(input.value.length-1, input.value.length); 
      if (input.value.search(/[0-9]/)) { 
        err(); 
        return; 
      } 
      if (!isNaN(eval(input.value))) { 
        input.placeholder = 0; 
        input.value = eval(input.value/2); 
      }                  
    } 
  } 
}); 
     if (target === "M+") input.value = input.value.slice(0, input.value*2);  
function err() { 
  input.placeholder = "Error"; 
  input.value = ""; 
}

 
 
