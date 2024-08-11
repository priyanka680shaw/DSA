



//  func(x);
//  fact(5);
//  fact(5)=fact(1)*fact(2)*fact(5);


//  // base condition :: 
//  fact(n);
 // base fact(1)=1;
 // if(n==1) return 1;
 //  fact(5)=n*fact(n-1)=5*fact(4)
 //  fact(4)=4*fact(3)
 //  fact(3)=3*fact(2)
 //  fact(2)=2*fact(1)
 //  fact(1)=1
 function factorial(data){
    if(data == 0){
        return 1
    }
    let b =  data * factorial(data-1)
    return b
 }
 const a =factorial(5)
 console.log(a)


 /// return int fuct 

 // 5*fact(4)
    //   4*factorial(4)