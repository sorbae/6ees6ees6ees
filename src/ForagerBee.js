class ForagerBee extends Bee {
  constructor(age, job, canFly, treasureChest) {
    super()
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
  forage() {
    this.treasureChest.push('treasure');
  }
};
