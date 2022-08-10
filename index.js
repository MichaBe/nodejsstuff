// async - await
// setInterval
// setTimeout

const run = async () => {
    console.log("before the timeout")
    const interval = setInterval(()=>{
        console.log("interval")
    }, 250)
    const timeout = setTimeout(()=>{
        console.log("function, called by the timeout")
        clearInterval(interval)
    }, 1000)
    console.log("after the timeout")
}

//run()

const promise = new Promise((resolve, reject) => {
    const r = Math.random()
    if(r > 0.5)
        resolve('could keep the promise: '+ r)
    else
        reject(new Error('could not keep the promise: ' = r.toFixed(2)))
})

const runWithPromises = async () => {
    const fullfilled = (msg) => console.log(msg)
    const rejected = (err) => console.log(err)
    promise.then(fullfilled).catch(rejected)
}

runWithPromises()