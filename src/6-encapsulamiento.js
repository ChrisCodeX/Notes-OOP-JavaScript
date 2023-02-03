/* eslint-disable */
(() => {
  class Bank {
    constructor({ totalMoney }) {
      this.totalMoney = totalMoney;
    }
  }

  const Interbank = new Bank(1000)

  class Banquero extends Bank {
    constructor({
      name,
      bank
    }) {
      super({
        totalMoney: bank.totalMoney
      })
      
    }

    money() {
      console.log(super.totalMoney);
    }
  }

  const b1 = new Banquero('Christian', Interbank)

  b1.money()
})();
