var Person = function(name, legs, arms) {
	this.name = name;

	if (legs !== undefined)
		this.legs = legs;

	if (arms !== undefined)
		this.arms = arms;
};

Person.prototype.legs = 2;
Person.prototype.arms = 2;
Person.prototype.countLimbs = function() {
	return this.legs + this.arms;
}
Person.prototype.getName = function() {
	return this.name;
}
Person.prototype.toString = function() {
	return this.name;
}