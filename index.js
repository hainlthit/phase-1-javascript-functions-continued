// code your solution here
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun('bathe my dog!')

function mondayWork(location='go to the office'){
    return `This Monday, I will ${location}.`
}
mondayWork('work from home.')


function wrapAdjective(wrapper="*") {
    const part1 = "You are"
    return function innerFunction(job="a hard worker") {
return `${part1} ${wrapper}${job}${wrapper}!`
    };
}
wrapAdjective('||')('a dedicated programmer')