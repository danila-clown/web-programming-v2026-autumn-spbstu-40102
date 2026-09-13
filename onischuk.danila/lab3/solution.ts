function difference<T>(arr1: T[], arr2: T[]): T[] {
  let results: T[] = [];

  for (let item1 of arr1) {
    let flag: boolean = true;
    for (let item2 of arr2) {
      if (item1 === item2) {
        flag = false;
        break;
      }
    }
    if (flag) {
      results.push(item1);
    }
  }

  return results;
}

export {difference};
