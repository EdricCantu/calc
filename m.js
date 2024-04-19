var ans = undefined;
var mem = [];
function help(){
      alert("This works like commands.\n"+
            "Use add to add all other arguments.\n"+
            "Use sub to subtract all other arguments. This subtracts from 0, initially.\n"+
            "Use mul to multiply all other arguments.\n"+
            "Use div to divide all other arguments. This divides from 1, initially.")
}
while(true){
  const ARGS = prompt("Evaluate!> ");
  var args = ARGS.split(" ");
  operation = args.shift();
  args = args.map(arg=>((arg=="ans")?ans:parseFloat(arg)));
  switch(operation){
    case "help":
      help();
      break;
    case "add":
      ans = args.reduce((acc,add)=>(acc+add), 0);
      mem.push(ARGS+" = "+ans);
      alert(ans);
      break;
    case "sub":
      ans = args.reduce((acc,add)=>(acc-add), 0)
      mem.push(ARGS+" = "+ans);
      alert(ans);
      break;
    case "mul":
      ans = args.reduce((acc,add)=>(acc*add), 1);
      mem.push(ARGS+" = "+ans);
      alert(ans);
      break;
    case "div":
      ans = args.reduce((acc,add)=>(acc/add), 1);
      mem.push(ARGS+" = "+ans);
      alert(ans);
      break;
    case "mem":
      alert(mem.slice(-5).join("\n"))
      break;
  }
}
