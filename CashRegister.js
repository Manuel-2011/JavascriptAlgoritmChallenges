/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
*/

function checkCashRegister(price, cash, cid) {
    let currency = {
        "ONE HUNDRED" : 100,
        "TWENTY" : 20,
        "TEN" : 10,
        "FIVE" : 5,
        "ONE" : 1,
        "QUARTER" : 0.25,
        "DIME" : 0.1,
        "NICKEL" : 0.05,
        "PENNY" : 0.01,
    };
    const keys = Object.keys(currency);

    var change = cash - price;
    change = Number.parseFloat(change.toPrecision(4));

    let changeD = [];
    let status;
    if (change < 0) {
        status = "THE PRICE IS HIGHER THAN PAYMENT";
    } else if (change === 0) {
        status = "OPEN";
    } else {
        status = "OPEN";
        // iterate through each bill or coin to define the change
        for ( let i=0; i<keys.length; i++ ) {
            const cidKey = keys.length - 1 - i;
            const cashNeeded = Math.floor(change/currency[keys[i]])*currency[keys[i]];
            // keys[i] denomination doesn´t fit in the change or there is no money left of keys[i] denominations
            if (cashNeeded === 0 || cid[cidKey][1] === 0) {
                continue;
            // there are more money of keys[i] denomination than needed for the change
            } else if (cid[cidKey][1] >= cashNeeded) {
                change -= cashNeeded;
                change = Number.parseFloat(change.toPrecision(4));
                changeD.push([keys[i], cashNeeded]);
            // there is not enough money of keys[i] denomination for the change
            } else {
                change -= cid[cidKey][1];
                change = Number.parseFloat(change.toPrecision(4));
                changeD.push([keys[i], cid[cidKey][1]]);
            }
        }
    }
    // check wheter you can return the exact change
    if (change > 0) {
        status = "INSUFFICIENT_FUNDS";
        changeD = [];
    // check wheter the cash register is empty after giving the change
    } else if (changeD.every((val) => {
        return cid.find(x => x[0] == val[0] && x[1] === val[1]) !== undefined;
    })) {
        status = "CLOSED";
        changeD = cid;
    }

    // return an object with the status and the change
    return {"status": status, "change": changeD};
  }
  

  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));