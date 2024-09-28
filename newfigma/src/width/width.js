
export function width(thresholds, value){
  // 0    A    B    C    D
  //                   ↑

  // 0    A    B    C    D
  //                ↑

  // 0    A    B    C    D
  //                     ↑

  const oneBarProcent = 100 / thresholds.length
    const indexFill = thresholds.findLastIndex(el => el <= value)

    if (indexFill === -1) {
      const innerBarProcent = value / thresholds[0];
      return innerBarProcent*oneBarProcent
    }
    
    const innerBarProcent = (value - thresholds[indexFill]) / (thresholds[indexFill + 1] - thresholds[indexFill])
    if (indexFill === thresholds.length - 1) {
      return 100;
    }
    
    if(indexFill === 0) {
        return innerBarProcent * oneBarProcent
    }

    console.log({indexFill, innerBarProcent, oneBarProcent});
    
    
    return oneBarProcent * (indexFill + 1) + (innerBarProcent * oneBarProcent)
}