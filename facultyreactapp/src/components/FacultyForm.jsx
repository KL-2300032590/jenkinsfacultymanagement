import React, { useState, useEffect } from "react";
import api from "../api/api";

function FacultyForm({ selected, onSave }) {
  const [form, setForm] = useState({ id: null, name: "", department: "" });

  useEffect(() => {
    if (selected) setForm(selected);
  }, [selected]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      let res;
      if (form.id) {
        res = await api.put(`/${form.id}`, form);
      } else {
        res = await api.post("/", form);
      }
      onSave(res.data);
      setForm({ id: null, name: "", department: "" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="department"
        placeholder="Department"
        value={form.department}
        onChange={handleChange}
      />
      <button type="submit">{form.id ? "Update" : "Add"} Faculty</button>
    </form>
  );
}

export default FacultyForm;
