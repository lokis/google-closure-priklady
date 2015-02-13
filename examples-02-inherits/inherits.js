goog.provide("inher");

inher.Koren = function(){
    this.a = 4;
    this.b = { neco: 5 };
};

inher.Koren.prototype.getA = function()
{
    return this.a;
};


inher.Auto = function() {
    inher.Koren.call(this);
    this.c = 15;
};

goog.inherits(inher.Auto, inher.Koren);


inher.Auto.prototype.getA = function()
{
    return this.a;
};


var auto = new inher.Auto();

console.log('a');
console.log(auto.a);
console.log(auto.b);
console.log(auto.c);
console.log(auto.getA());
console.log(inher.Auto.superClass_.getA.call(auto));
