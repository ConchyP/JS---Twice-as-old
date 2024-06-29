
export function calculateAgeTwiceAsOld(ageDad, ageSon) {
  const diferenceAge = ageDad - ageSon;

  if (diferenceAge > ageSon) {
    return diferenceAge - ageSon;
  } else {
    return ageSon - diferenceAge;
  }
 
}


