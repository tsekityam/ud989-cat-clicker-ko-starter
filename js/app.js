var ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

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
}

ko.applyBindings(new ViewModel());
