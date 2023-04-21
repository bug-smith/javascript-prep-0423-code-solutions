const person = {
  fullName: {
    firstName: 'Bug',
    lastName: 'Smith',
  },
  hobby: 'golfing',
  jobs: {
    job: 'unemployed',
    previousJob: 'Techstack Admin',
  },
};

const fullName = person.fullName.firstName + ' ' + person.fullName.lastName;

console.log("The person's Full Name is:\n", fullName);

console.log("The person's current job \nis:", person.jobs.job);

console.log("The person's previous \njob is:", person.jobs.previousJob);

console.log(person);
