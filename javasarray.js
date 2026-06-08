                        //shift just starts deleting from first at first
 let fruit1=["mango","watermelon","lichi","guava"]
 fruit1.shift();
 alert(fruit1)        
                       // unshift just adds to the list  at first
 let fruit2=["watermelon","litchi","guava"]
 fruit2.unshift("strawberry")
 alert(fruit2)
                      //  we pop      from last
  let fruit3=["watermelon","litchi","mango","guava"]
  alert(fruit3.pop())
  alert(fruit3)
                      //  we push     at last
     let fruit4=["watermelon","litchi","mango","guava"]
     fruit4.push("water chestnut")
     alert(fruit4)
                        // we now will see how to use it via loop [keep in mind to not use for in beacause it can cause bottlenecks]
    let fruit5=["watermelon","litchi","mango","guava"]
    for(let fruit of fruit5){
        alert(fruit)
    }
                        // array length can be reduced but cannot be undone, not working
    //   let fruit6=["watermelon","litchi","mango","guava"]
    //   let t=fruit6.length
    //   alert(t)
    //   t=2;
    //   for(fruit of fruit6)
    //   {
    //     alert(fruit)
    //   }
      // array length can be reduced but cannot be undone, working
       let fruit6=["watermelon","litchi","mango","guava"]
      let t=fruit6.length
      alert(t)
      fruit6.length=2;
    alert(fruit6)
    //direct string conversion
    let arr=[1,2,3,4]
    alert(arr)
    alert(String(arr)==='1,2,3,4')
    alert([]+1)
    alert([1]+1)
    //get element using at arr=[1,2,3,4]
    
    let arr1=[1,2,3,4]
    alert(arr1.at(1))