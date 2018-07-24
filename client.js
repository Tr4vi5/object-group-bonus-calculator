$(document).ready(readyNow);

function readyNow(){
  console.log('JQuery');
  $('#bonusButton').on('click', bonusCalc);
}

class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

const atticus = new Employee( 'Atticus', '2405', '47000', 3 );
const jem = new Employee( 'Jem', '62347', '63500', 4 );
const scout =  new Employee( 'Scout', '6243', '74750', 5 );
const robert =  new Employee( 'Robert', '26835', '66000', 1 );
const mayella =  new Employee( 'Mayella', '89068', '35000', 2 );

const employees = [ atticus, jem, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

function bonusCalc(){
  for (let employee of employees){
    if (employee.reviewRating === 5){
      employee.bonusPercentage = 10;
    } else if (employee.reviewRating === 4){
      employee.bonusPercentage = 6;
    } else if (employee.reviewRating === 3){
      employee.bonusPercentage = 4;
    } else if (employee.reviewRating <= 2){
      employee.bonusPercentage = 0;
    }
  }
  empDigits();
  annualInc();
  maxBonus();
  actualBonus();
  finalComp();
  return employees;
}


function empDigits(){
  for (let employee of employees){
    if (employee.employeeNumber.length === 4){
      employee.bonusPercentage += 5;
    }
  }
  return employees;
}

function annualInc(){
  for (let employee of employees){
    if (employee.annualSalary > 65000 && employee.bonusPercentage > 0){
      employee.bonusPercentage -= 1;
    }
  }
  return employees;
}

function maxBonus(){
  for (let employee of employees){
    if (employee.bonusPercentage > 13){
      employee.bonusPercentage = 13;
    }
  }
  return employees;
}

function actualBonus(){
  for (let employee of employees){
    employee.totalBonus = (Number(employee.annualSalary) * (employee.bonusPercentage * 0.01)).toFixed(2);
  }
  return employees;
}

function finalComp(){
  for (let employee of employees){
    employee.totalCompensation = (Number(employee.totalBonus) + Number(employee.annualSalary)).toFixed(2);
  }
  return employees;
}

console.log(bonusCalc());
