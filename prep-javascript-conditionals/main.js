//* Your JS goes in this file*//

const age = 24;

function isAge(age) {
  if (age > 18) return true;
  else return false;
}

const ageResult = isAge(age);

console.log(ageResult);

const student1Score = 80;

function didStudentPass(score) {
  if (score >= 70) return true;
  else return false;
}

console.log(didStudentPass(student1Score));

const student2Score = 102;

function gradeCalculator(score) {
  if (score < 60) return 'F';
  else if (score < 70) return 'D';
  else if (score < 80) return 'C';
  else if (score < 90) return 'B';
  else if (score < 100) return 'A';
  else return 'A++';
}

console.log(gradeCalculator(student2Score));

const season = 'spring';

function seasonMessenger(season) {
  if (season === 'summer') return "it's hot today";
  else if (season === 'spring') return 'the flowers are blooming';
  else if (season === 'autumn') return 'the leaves are changing colors';
  else if (season === 'winter') return 'its cold today';
  else return 'please enter a valid season';
}

console.log(seasonMessenger(season));

const dayOfWeek = 'tuesday';

function dayDetector(dayOfWeek) {
  if (dayOfWeek === 'saturday' || dayOfWeek === 'sunday')
    return 'have a good weekend!';
  else return 'Its a weekday!';
}

console.log(dayDetector(dayOfWeek));
