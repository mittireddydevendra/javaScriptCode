function add(a,b,cd){
    let result = a + b;
    cd(result);
}

function showResult(result){
    console.log(result)
}
add(2,4, showResult);


// add(2,3, function (val){
//     console.log(val);
// });  

function mul(c,d,e){
    let result =c * d;
    e(result);
}
mul(2,4,(val)=>console.log(val));
mul(400,10,(res)=>console.log(res));
 