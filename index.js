function saturdayFun(string = "roller-skate") {
    return `This Saturday, I want to ${string}!`
}

function mondayWork(string = "go to the office") {
    return `This Monday, I will ${string}.`
}

function wrapAdjective(n = '*') {
    const fn = function (string = "special") {
        return `You are ${n}${string}${n}!`
    }
    return fn
}