var Model = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);

    this.level = ko.computed(function() {
      if (this.clickCount() < 1) {
        return "A";
      } else if (this.clickCount() < 2) {
        return "B";
      } else if (this.clickCount() < 4) {
        return "C";
      } else if (this.clickCount() < 8) {
        return "D";
      } else if (this.clickCount() < 16) {
        return "E";
      } else if (this.clickCount() < 32) {
        return "F";
      }
    }, this);

    this.nicknames = ko.observableArray(data.nicknames);
}
var ViewModel = function() {
  var self = this;
  this.currentCat = ko.observable(new Model({
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    nicknames: [
      {nickname: 'Apple'},
      {nickname: 'Banana'},
      {nickname: 'Orange'}
    ]
  }));
  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
}

ko.applyBindings(new ViewModel());
