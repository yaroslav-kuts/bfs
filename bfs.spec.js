var bfs = require("./bfs");
var assert = require('assert');

var Person = function (name, age) {
	this.name = name;
	this.age = age;
	this.toString = function () { return `${this.name} - ${this.age} years old.`};
};

Person.prototype = new bfs.Node();

describe('BFS', function() {

  var ivan = new Person('Ivan', 45);
  var bob = new Person('Bob', 31);
  var jess = new Person('Jess', 19);
  var petro = new Person('Petro', 55);
  var lela = new Person('Lela', 36);
  var vasya = new Person('Vasya', 24);
  var egor = new Person('Egor', 25);
  var nadya = new Person('Nadya', 32);
  var oksana = new Person('Oksana', 21);
  var olga = new Person('Olga', 30);

  ivan.addLinks([bob, nadya]);
  bob.addLinks([egor]);
  jess.addLinks([lela, vasya, bob]);
  nadya.addLinks([jess, olga]);
  olga.addLinks([oksana, petro, nadya, bob]);
  petro.addLinks([ivan, lela]);
  vasya.addLinks([egor, jess]);

  describe('searching from \'ivan\' node', function() {
    it('should return olga', function() {
      var node = bfs.search(ivan, (n) => n.age === 30);
      assert.equal(node, olga);
    });

    it('should return bob', function() {
      var node = bfs.search(ivan, (n) => n.age === 31);
      assert.equal(node, bob);
    });

    it('should return petro', function() {
      var node = bfs.search(ivan, (n) => n.age === 55);
      assert.equal(node, petro);
    });

    it('should return nadya', function() {
      var node = bfs.search(ivan, (n) => n.age === 32);
      assert.equal(node, nadya);
    });

    it('should return egor', function() {
      var node = bfs.search(ivan, (n) => n.age === 25);
      assert.equal(node, egor);
    });
  });

  describe('searching from \'olga\' node', function() {
    it('should return ivan', function() {
      var node = bfs.search(olga, (n) => n.age === 45);
      assert.equal(node, ivan);
    });

    it('should return bob', function() {
      var node = bfs.search(olga, (n) => n.age === 31);
      assert.equal(node, bob);
    });

    it('should return petro', function() {
      var node = bfs.search(olga, (n) => n.age === 55);
      assert.equal(node, petro);
    });

    it('should return nadya', function() {
      var node = bfs.search(olga, (n) => n.age === 32);
      assert.equal(node, nadya);
    });

    it('should return egor', function() {
      var node = bfs.search(olga, (n) => n.age === 25);
      assert.equal(node, egor);
    });
  });

});
