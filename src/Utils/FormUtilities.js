



export const HandleCheckBoxArray = (value, flag, arr) => {
    // Value is the value of checkbox
    //  flag : is the status checked or unchecked 
    //  arr : is the array of selected Values
    let temp = [...arr]
    if (flag) {
        temp.push(value)
    }
    else {
        let index = temp.indexOf(value)
        temp.splice(index, 1)

    }
    return temp
}