export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  // Use the iterator to get each employee name
  for (const employee of reportWithIterator) {
    employeeNames.push(employee);
  }

  // Join the employee names with ' | ' and return the result
  return employeeNames.join(" | ");
}
