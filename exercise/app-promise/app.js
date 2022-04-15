const promise = new Promise((resolve, rejects) => setTimeout(() => {
    fibonacci(5000);
    resolve("resolved");
    // rejects("rejected");
    }, 2000)
);
const myAsyncFunc = async function() {
    // console.log(promise);
    console.log(await promise);
    console.log("inside function after promise");
}
myAsyncFunc();
console.log("after function call");



function fibonacci(num)
{
    var num1=0;
    var num2=1;
    var sum;
    var i=0;
    for (i = 0; i < num; i++) 
    {
        sum=num1+num2;
        num1=num2;
        num2=sum;
    }
    return num2;
}