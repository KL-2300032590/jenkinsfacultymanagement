import React, { useEffect, useState } from "react";
import api from "../api/api";

function FacultyList({ refresh, onEdit }) {
  const [faculty, setFaculty] = useState([]);

  // Fetch all faculty members
  useEffect(() => {
    api.get("/viewall")
      .then(res => setFaculty(res.data))
      .catch(err => console.error("Error fetching faculty:", err));
  }, [refresh]);

  // Delete faculty by fid
  const handleDelete = async (fid) => {
    try {
      await api.delete(`/del?fid=${fid}`);
      setFaculty(faculty.filter(f => f.fid !== fid));
    } catch (err) {
      console.error("Error deleting faculty:", err);
    }
  };

  return (
    <div>
      <h2>Faculty Members</h2>
      {faculty.length === 0 ? (
        <p>No faculty found.</p>
      ) : (
        <ul>
          {faculty.map(f => (
            <li key={f.fid}>
              {f.fname} - {f.department}
              {" "}
              <button onClick={() => onEdit(f)}>Edit</button>
              <button onClick={() => handleDelete(f.fid)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FacultyList;
