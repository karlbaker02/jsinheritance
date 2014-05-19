var Engineer = function(name, occupation, legs, arms) {
	this.name = name;
	this.occupation = occupation;
	
	if (legs !== undefined)
		this.legs = legs;

	if (arms !== undefined)
		this.arms = arms;
}

Engineer.prototype = new Person(this.name);