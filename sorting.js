// function sorting(arr)
// {
//     for(let i=0;i<arr.length;i++)
//     {
//         for(let j=0;j<arr.length;j++)
//         {
//         if(arr[i]<=arr[i+1])
//         {
//             let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//         }
//     }
//     }
// }
// let arr=[5,7,2,1,8,4,0,5]
// console.log(sorting(arr))

function sorting(arr1)
{
    arr1.sort((a,b)=> a-b);
    return(arr1)
}
let arr=[5,7,2,1,8,4,0]
alert(sorting(arr))