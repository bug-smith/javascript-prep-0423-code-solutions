const person = {
  firstName: 'Bug',
  lastName: 'Smith',
  hobby: 'golfing',
  job: 'unemployed',
  previousJob: 'Techstack Admin',
};

const fullName = person.firstName + ' ' + person.lastName;
const job = person.job;
const previousJob = person.previousJob;

console.log("The person's Full Name is:\n", fullName);

console.log("The person's current job \nis:", job);

console.log("The person's previous \njob is:", previousJob);

console.log(person);
