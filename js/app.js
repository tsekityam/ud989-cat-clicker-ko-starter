var catData = [
  {
    clickCount: 0,
    name: 'Honoka',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    nicknames: [
      {nickname: 'Apple'},
      {nickname: 'Banana'},
      {nickname: 'Orange'}
    ]
  },
  {
    clickCount: 0,
    name: 'Eli',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    nicknames: [
      {nickname: 'facebook'},
      {nickname: 'twitter'},
      {nickname: 'linkedin'}
    ]
  },
  {
    clickCount: 0,
    name: 'Umi',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    nicknames: [
      {nickname: 'toyota'},
      {nickname: 'bmw'}
    ]
  },
  {
    clickCount: 0,
    name: 'Rin',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    nicknames: [
      {nickname: 'mysql'},
      {nickname: 'mariadb'}
    ]
  },
  {
    clickCount: 0,
    name: 'Maki',
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    nicknames: [
      {nickname: 'htc'},
      {nickname: 'sony'},
      {nickname: 'apple'}
    ]
  }
];

var Model = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.nicknames = ko.observableArray(data.nicknames);

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
var ViewModel = function() {
  var self = this;

  this.cats = ko.observableArray([]);
  catData.forEach(function(cat) {
    self.cats().push(new Model(cat));
  });

  this.currentCat = ko.observable(self.cats()[0]);
  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
}

ko.applyBindings(new ViewModel());
