import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Students(props) {
  const [students, setStudents] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((err) => {
        debugger;
      });
  }, []);

  return (
    <div className="App">
      <ul>
        {students?.map((student) => (
          <Link to={`/student/${student._id}`}>{student.firstname}</Link>
        ))}
      </ul>
    </div>
  );
}
