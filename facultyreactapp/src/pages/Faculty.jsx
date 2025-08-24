import React, { useState } from "react";
import FacultyList from "../components/FacultyList";
import FacultyForm from "../components/FacultyForm";

function Faculty() {
  const [refresh, setRefresh] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSave = () => {
    setRefresh(!refresh);
    setSelected(null);
  };

  return (
    <div>
      <h1>Faculty Management</h1>
      <FacultyForm selected={selected} onSave={handleSave} />
      <FacultyList refresh={refresh} onEdit={setSelected} />
    </div>
  );
}

export default Faculty;
