
const dayStateCalc = (currentState, comparedState) => {
    const detractor = 3600;
    let upperTransitionalLimit = comparedState + detractor;
    let lowerTransitionalLimit = comparedState - detractor;
    return ((currentState < upperTransitionalLimit) && (currentState > lowerTransitionalLimit));
}

export default dayStateCalc;