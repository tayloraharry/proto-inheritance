function Employee (employeeFName, employeeLName) {
  this.firstName = employeeFName;
  this.lastName = employeeLName;
}


function Clinicians () {
  this.department = "Clinicians";
}

function RN () {
  this.expertise = "RN";
}
RN.prototype = new Clinicians();

function FamilyDoctor () {
  this.expertise = "FamilyDoctor";
}
FamilyDoctor.prototype = new Clinicians();

function Anesthesiologist () {
  this.expertise = "Anesthesiologist";
}
Anesthesiologist.prototype = new Clinicians();

function Operations () {
  this.department = "Operations";
}

function IT () {
  this.responsibility = "IT";
}
IT.prototype = new Clinicians();

function Revenue () {
  this.responsibility = "Revenue";
}
Revenue.prototype = new Clinicians();

function HR () {
  this.responsibility = "HR";
}
HR.prototype = new Clinicians();



function FieldOffice () {
  this.location = "FieldOffice";
}

function HQ () {
  this.location = "HQ";
}

function Nashville () {
  this.city = "Nashville";
}
Nashville.prototype = new FieldOffice();

function LasVegas () {
  this.city = "LasVegas";
}
LasVegas.prototype = new FieldOffice();

function Tampa () {
  this.city = "Tampa";
}
Tampa.prototype = new HQ();

function Boise () {
  this.city = "Boise";
}
Boise.prototype = new HQ();

var emp1 = new Employee("Mr.","H");
emp1.responsibility = new IT();
emp1.city = new Nashville();
console.log("Employee 1:",emp1);

var emp2 = new Employee("Mr.","G");
emp2.responsibility = new Revenue();
emp2.city = new LasVegas();
console.log("Employee 2:",emp2);

var emp3 = new Employee("Ms.","W");
emp3.expertise = new Anesthesiologist();
emp3.city = new Tampa();
console.log("Employee 3:",emp3);

var emp4 = new Employee("Mrs.","H");
emp4.expertise = new RN();
emp4.city = new Boise();
console.log("Employee 4:",emp4);
