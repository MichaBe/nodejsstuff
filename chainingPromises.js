const concatination = async (x,y) => x+' '+y;

const run = async () => {
    const finalValue = await concatination("Hello","World")
    const addedOneMoreValue = await concatination(finalValue, "!")
    console.log(addedOneMoreValue)
}

run()