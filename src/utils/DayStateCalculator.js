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
    return weekArr[weekDayNum];
}

const preciseReadableTime = (timestamp) => {
    const date = new Date(timestamp*1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
}

export {dayStateCalc, dayOfWeek, preciseReadableTime};