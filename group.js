var Group = function(name) {
	this.groupName = name;
};

Group.prototype.people = [];
Group.prototype.addPerson = function(name, occupation, legs, arms) {
	this.people.push(new Engineer(name, occupation, legs, arms));
};
Group.prototype.getName = function() {
	return this.groupName;
}
Group.prototype.getMembers = function() {
	return this.people.join(', ');
}
Group.prototype.countTotalLimbs = function() {
	var result = 0;
	for (var i in this.people) {
		result += this.people[i].countLimbs();
	}

	return result;
}

// var chuck = new Person('man');

// console.log('Chuck has '+ chuck.countLimbs() + ' limbs');