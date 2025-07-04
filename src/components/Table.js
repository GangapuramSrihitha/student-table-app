import React from "react";
const students=[
        { roll: 101, name: "Anjali", age: 18, grade: "A" },
  { roll: 102, name: "Rahul", age: 19, grade: "B" },
  { roll: 103, name: "Sneha", age: 18, grade: "A" },
  { roll: 104, name: "Rohan", age: 20, grade: "C" },
  { roll: 105, name: "Priya", age: 17, grade: "B" },
  { roll: 106, name: "Vikram", age: 18, grade: "A" },
  { roll: 107, name: "Asha", age: 19, grade: "B" },
  { roll: 108, name: "Kiran", age: 20, grade: "C" },
  { roll: 109, name: "Meena", age: 18, grade: "A" },
  { roll: 110, name: "Arjun", age: 19, grade: "B" },
    ];
    
function Table(){
    return(
        <div style={{ padding: '20px' }}>
            <h2>Student List</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stu) => (
            <tr key={stu.roll}>
              <td>{stu.roll}</td>
              <td>{stu.name}</td>
              <td>{stu.age}</td>
              <td>{stu.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    );
}
export default Table;