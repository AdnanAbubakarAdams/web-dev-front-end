import React, { useEffect, useState } from "react";
import StudentCard from "./StudentCard";

const StudentCardList = () => {
  const [students, setStudents] = useState([]);

  // fetch all student data
  useEffect(() => {
    fetch("http://localhost:9000/students")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setStudents(data.students);
      });
  }, []);

  return (
  <div className="m-28 min-h-screen overflow-y-scroll w-96 rounded-xl shadow-md">
    {students.map(student => {
        return <StudentCard student={student} />
    })}
  </div>
  );
};

export default StudentCardList;
