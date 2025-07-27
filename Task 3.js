function displayName(callback) {
  let name = "Mithra";
  callback(name);
}
displayName(function(name) {
  console.log("Hello " + name);
});

function inScope() {
  let inside = "Inside function";
  console.log(inside);
  if (true) {
    var a = 1;     
    let b = 2;    
    const c = 3;   
    console.log("Inside block:", a, b, c);
  }
}

inScope();

function outScope(){
    let outside ="Outside Function";
    console.log(outside);
    if (true){
        var d = 4;
        let e = 5;
        const f = 6;
        console.log("Outside Block:",d, e, f);
    }
}
outScope();
