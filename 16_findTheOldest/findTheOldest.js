const findTheOldest = function(people) {
  people.sort((a,b) => {
    let ageA = "yearOfDeath" in a ? a.yearOfDeath - a.yearOfBirth: new Date().getFullYear() - a.yearOfBirth;
    let ageB = "yearOfDeath" in b ? b.yearOfDeath - b.yearOfBirth: new Date().getFullYear() - b.yearOfBirth;
    return ageB - ageA;
  });
  return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
