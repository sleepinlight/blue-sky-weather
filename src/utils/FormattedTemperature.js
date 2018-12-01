import React from 'react';

const FormattedTemperature = (tempStr) => {
    tempStr = String(tempStr);
    let roundedTemp = tempStr.substring(0, tempStr.indexOf(".")) + "°";
    return roundedTemp;
};

export default FormattedTemperature;

