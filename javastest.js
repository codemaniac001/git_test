// let styles=["jazz","blues","pop","indie"]
// alert(styles)
// styles.push("Rock-n-Roll")
// alert(styles)
// let t=styles.length;
// styles[((t+1)/2)-1]="classics"
// alert(styles)
// styles.unshift("Reggae")
// styles.unshift("Rap")
// alert(styles)
// sum input with an array
// let Numbers = 1
// let sum = 0
// while (Numbers) {
//     Numbers = Number(prompt("enter a number , and to stop it , dont input anything , input non numeric or just cancel"))

//     sum = sum + Numbers
// }
// alert(sum)
                                //getMaxSubSum
function getMaxSubSum(arr){
    const len1=arr.length
    let  maxSum 
    let  sum=0
    for(let i=0;i<len1;i++)
    {
        for(let j=0;j<len1;j++)
        {
            sum=sum+arr[j];
            
        }
    }

}