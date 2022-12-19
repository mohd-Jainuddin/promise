let stocks = {
  Fruits: ["starwberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holders: ["cone", "cup", "stick"],
  topping: ["chocolate", "peanuts"],
};

let is_shop_open = false;

function time(ms){
    return new Promise((resolve,reject) => {
        if(is_shop_open){
            setTimeout(resolve,ms)
        }else{
            reject(console.log('shop is closed'))
        }
    })
}

async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`)

        await time(0000)
        console.log('Production is started')

        await time(2000)
        console.log('cut the fruit')

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

        await time(1000)
        console.log('start the machine')

        await time(2000)
        console.log(`icecream placed on ${stocks.holders[0]}`)

        await time(3000)
        console.log(`${stocks.topping[0]} was selected`)

        await time(2000)
        console.log('serve icecream')
    }
    catch(error){
        console.log('costomer left',error)
    }
    finally{
        console.log('day ended, shop is closed')
    }
}

kitchen()