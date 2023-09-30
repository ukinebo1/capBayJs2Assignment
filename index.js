let Array1 = [15, 30, 45, 60];
let Array2 = [5, 6, 3, 10];

let newArray = [];


function divideArray (){
    if(Array1.length != Array2.length){
        console.log("The array length must be of equal length");
    }else{
        for(let i=0; i<Array1.length; i++){
            let result =Array1[i] / Array2[i];
            // console.log(result);
            newArray.push(result);
        }
        return newArray;
    }
}console.log(divideArray());
