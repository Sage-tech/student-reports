let messgae ='';
let Student;
let search;

function print(message) {
  let output = document.getElementById(`output`);
  output.inerHTML = message;
}
function getStudentReport(student){
let report = '<h2>student: ' + student.name + '</h2>';
  let report = '<p>Track: ' + student.track + '</p>';
   let report = '<p>'points: ' + student.points + '</p>';
    let report = '<p>'Achievements: ' + student.achievements + '</p>'
    return report;
}

while(true){
  search = prompt('Sreach student records: type a name[sierra](or type "quit" to end)');
  if (search === null || search.toLowerCase() === 'quit'){
   break;
  }
}

for(let i = 0; i < student.length; i +=1){
student = students[i];
  if (student.name ==== search){
  messgae = getStudentReport(student);
    print(message);
  }
  
  
}
print(message);