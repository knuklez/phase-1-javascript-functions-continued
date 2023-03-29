// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
//let activity;
saturdayFun();
//saturdayFun("bathe my dog!")

function mondayWork(workLocation = "go to the office") {
    return `This Monday, I will ${workLocation}.`
}
mondayWork();

//function wrapAdjective(low = "||special||") {
/*function wrapAdjective(low = "||dedicated||") {
    return function (high = "*"){
        return `You are *${high}*!`
    }
}
wrapAdjective();
*/
function wrapAdjective (flair ="*"){
    return function inner(workerDescription = "special"){
        //return `You are *${inner}*!`
        return `You are ${flair}${workerDescription}${flair}!`
    }
}
wrapAdjective();
