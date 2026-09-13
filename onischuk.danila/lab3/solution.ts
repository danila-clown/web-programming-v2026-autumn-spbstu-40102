function difference<T>(arr1: T[], arr2: T[]): T[] {
  let results: T[] = [];

  for (let i of arr1) {
    let flag: boolean = true;
    for (let j of arr2) {
      if (i === j) {
        flag = false;
        break;
      }
    }
    if (flag) {
      results.push(i);
    }
  }

  return results;
}

export {difference};
