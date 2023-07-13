// code your solution here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun( activity= "skating", activity= "swimming")

function mondayWork(monActivity="go to the office"){
    return `This Monday, I will ${monActivity}.`
   

}
mondayWork (monActivity= "work from home")

function wrapAdjective(string="*") {
    return function(parameter="special") {
        return `You are ${string}${parameter}${string}!`
    }
}


