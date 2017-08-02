class Business {
    constructor(qp1, qp2, qp3, qp4) {
        this.qp1 = qp1;
        this.qp2 = qp2;
        this.qp3 = qp3;
        this.qp4 = qp4;
    }
    printAvgProfit() { console.log((this.qp1 + this.qp2 + this.qp3 + this.qp4) / 4); }
}
let userProfile = new Business(10, 20, 40, 10);
userProfile.name = 'Murugan';
userProfile.printAvgProfit();
//# sourceMappingURL=constructors.js.map