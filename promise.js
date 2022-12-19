let stocks = {
  Fruits: ["starwberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holders: ["cone", "cup", "stick"],
  topping: ["chocolate", "peanuts"],
};

let is_shop_open = false;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("our shop is closed"));
    }
  });
};

function work(){
    console.log(`${stocks.Fruits[0]} was selected`)
}

function production() {
  console.log('Production has started');
}

function foodchopped(){
    console.log('The fruit was chopped')
}

order(2000,work)

.then(()=>{
    return order(0000, production)
})

.then(()=>{
    return order(2000, foodchopped)
})

.then(()=>{
    return order(1000, ()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
    })
})

.then(()=>{
    return order(1000, ()=>console.log('start the machine'))
})

.then(()=>{
    return order(2000, ()=>console.log(`icecream was placed in ${stocks.holders[0]}`))
})

.then(()=>{
    return order(3000, ()=>console.log(`${stocks.topping[0]} has been added`))
})

.then(()=>{
    return order(2000, ()=>console.log('ready to serve'))
})

.catch(()=>{
    console.log('costomer left')
})

.finally(()=>{
    console.log('day ended, shop is closed')
})