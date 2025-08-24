import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Faculty Management System</h1>
      <p style={styles.subtitle}>
        Manage your faculty members with ease — add, update, and organize them in one place.
      </p>
      <Link to="/faculty" style={styles.button}>
        Go to Faculty Management
      </Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "10vh",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    color: "#555",
  },
  button: {
    padding: "12px 24px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
  }
};

export default Home;
