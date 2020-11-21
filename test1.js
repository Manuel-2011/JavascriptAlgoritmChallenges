cid = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
changeD = ["PENN", 0.5];
console.log(cid);
console.log(typeof changeD);
const coin = cid.find(x => x[0] == changeD[0] && x[1] === changeD[1]);
console.log(coin === undefined);