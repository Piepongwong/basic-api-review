import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Randomstudent(props) {
  const [student, setStudent] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/random")
      .then((response) => {
        setStudent(response.data);
      })
      .catch((err) => {
        debugger;
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
}
