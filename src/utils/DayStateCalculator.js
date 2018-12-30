const dayStateCalc = (currentState, comparedState) => {
    const detractor = 3600;
    let upperTransitionalLimit = comparedState + detractor;
    let lowerTransitionalLimit = comparedState - detractor;
    return ((currentState < upperTransitionalLimit) && (currentState > lowerTransitionalLimit));
}

const dayOfWeek = (timestamp) => {
    timestamp = parseInt(timestamp);
    const weekDayNum = new Date(timestamp * 1000).getDay();
    const weekArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log(timestamp);
    return weekArr[weekDayNum];
}

export {dayStateCalc, dayOfWeek};