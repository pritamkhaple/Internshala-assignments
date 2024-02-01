
/*to get the submit button*/
var submit=document.querySelector(".btn");
submit.addEventListener("click",calculate);

/*to get the first input value and second input value created 2 variables*/
var input1=document.querySelector("#first-number");
var input2=document.querySelector("#second-number");

/* event call to show empty answer window*/
input1.addEventListener("click",emptyAnswer);
input2.addEventListener("click",emptyAnswer);

var ans=0;


/*function to empty answer window*/
function emptyAnswer(){
    document.querySelector("#answer").value="";
}



/*function for calculations*/
function calculate(){
  var a=document.querySelector("#first-number").value;
  var b=document.querySelector("#second-number").value;

  /*made two input value variables to integer to avoid string output while doing addition*/
  a=parseInt(a);
  b=parseInt(b);

  var c=document.querySelector("#operator").value;

  if(c === "add"){
    ans = a+b;
  }

  else if(c==="sub"){
    ans=a-b;
  }

  else if(c==="mult"){
    ans=a*b;
  }
  else{
    ans=a/b;
  }
  document.querySelector("#answer").value=ans;
}
