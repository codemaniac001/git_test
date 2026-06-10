 function camelize(str){
     return str.split('-')
               .map(
                 (word,index) => index== 0 ? word:word[0].toUpperCase() + word.slice(1)
               )
               .join('');
 }
 alert(camelize("my-new-code"))


                                       // function filterrange
  function filterRange(arr,a,b)
  {
      let arr1=[]
      let j=0
      for(let i=0;i<arr.length;i++)
      {
          if((arr[i]>=a)&&(arr[i]<=b))
          {
             arr1[j]=arr[i]
             j++
       
         }
         else{
                 continue
          }
      }
      return(arr1)
  }
  alert(filterRange([5,3,8,1],1,4))
                                          //  alternate
 function filterRange(arr,a,b)
 {
     return(arr.filter((item)=>(a<=item)&&(item<=b)));
 }
 let arr1=[5,3,8,1]
 alert(filterRange(arr1,1,4))