/* eslint-disable guard-for-in */
export default function createIteratorObject(report) {
  const employees = [];

  // Loop through each department in the report
  for (const department in report.allEmployees) {
    // Add each employee to the employees array
    employees.push(...report.allEmployees[department]);
  }

  // Return an iterator for the employees array
  return employees[Symbol.iterator]();
}
