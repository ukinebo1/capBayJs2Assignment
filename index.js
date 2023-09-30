let Array1 = [15, 30, 45, 60];
let Array2 = [5, 6, 3, 10];

let newArray = [];

//creating function
function divideArray (){
    //giving the condition of equal length
    if(Array1.length != Array2.length){
        console.log("The array length must be of equal length");
    }else{
        //carrying out the division
        //let loop through the first array
        for(let i=0; i<Array1.length; i++){
            //create a container and do the division inside
            let result =Array1[i] / Array2[i];
            // console.log(result);
            //push my output inside the empty array
            newArray.push(result);
        }
        return newArray;
    }
}console.log(divideArray());
