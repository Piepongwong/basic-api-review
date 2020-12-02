import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const StudentDetail = (props) => {
  const [student, setStudent] = useState(false);
//   const params = useParams();
  const studentId = props.match.params.somethingelse
  debugger;
  useEffect(() => {
    axios
      .get(`http://localhost:3000/student/${studentId}`)
      .then((response) => {
        setStudent(response.data);
      })
      .catch((err) => {
          debugger
          // to do: handle the error
      });
  }, []);

  return (
    <>
      {student && (
        <div>
          <h1>{`${student.firstname} ${student.lastname}`}</h1>
          <img src={student.img} alt="" />
        </div>
      )}
    </>
  );
};

export default StudentDetail;
