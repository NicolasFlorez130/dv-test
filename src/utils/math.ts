export const convert = (val: number) => {
   let s = ['', 'k', 'm', 'b', 't'];

   let sNum = Math.floor(('' + val).length / 3);

   let sVal: string | number = parseFloat(
      (sNum != 0 ? val / Math.pow(1000, sNum) : val).toPrecision(2)
   );

   if (sVal % 1 != 0) {
      sVal = sVal.toFixed(1);
   }

   return sVal + s[sNum];
};
