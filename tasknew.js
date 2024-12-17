// 1.

let model=()=>{
    let fav=" apple to "
    let Lower_result=fav.toLowerCase();
    console.log(Lower_result);

    let upper_result=fav.toUpperCase();
    console.log(upper_result);
    
    let trim_result=fav.trim();
  console.log(trim_result);

let subresult=fav.includes("apple");
return(subresult);
 
}

console.log(model());


// 2.

    let flow="variables cant accept"

    let sub_string=flow.substring(1,4);
    console.log(sub_string);
    
    

    let slice=flow.substring(0,9);
console.log(slice);



// 3.

let flower=()=>{
let home ="1,2,3,4,5";
let str_result= home.split(' ')
console.log(str_result);

let home1="six seven eigth nine ten"
let flow_result=home1.split(' ')
console.log(flow_result);

let total=str_result.concat(flow_result);
return(total);

}
console.log(flower());


// 4.

(()=>{

let replace="they are not"
let replace1_result=replace.replace("not","going").concat ("  ") .repeat(2); 
console.log(replace1_result);


})();

// 5.

let template=()=>{
  let names="sathish";
  let age="25";
  let gender="male";
  return(`${names} ${age} ${gender}`);
  
}
console.log(template());
