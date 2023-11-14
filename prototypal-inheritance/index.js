let person = {
  name: "Prateek",
  city: "Pune",
  getIntro: function () {
    console.log(this.name + " from " + this.city);
  },
};

let person2 = {
  name: "Manish",
  city: "Mumbai",
  getIntro: function () {
    console.log(this.name + " from " + this.city);
  },
};
