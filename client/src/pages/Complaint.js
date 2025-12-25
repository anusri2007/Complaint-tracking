import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

function Complaint() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [message, setMessage] = useState("");
  const [details, setDetails] = useState(null);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const submitComplaint = () => {
    if (!title || !description || !category || !priority) {
      setMessage("Please fill all fields");
      return;
    }

    const complaintId = "CMP" + Math.floor(10000 + Math.random() * 90000);

    const complaint = {
      id: complaintId,
      title,
      description,
      category,
      priority,
      status: "Open",
      date: new Date().toLocaleString(),
    };

    const existing = JSON.parse(localStorage.getItem("complaints")) || [];
    localStorage.setItem(
      "complaints",
      JSON.stringify([...existing, complaint])
    );

    setDetails(complaint);
    setMessage(
      "Your complaint has been recorded and will be rectified as soon as possible."
    );

    setTitle("");
    setDescription("");
    setCategory("");
    setPriority("");
  };

  return (
    <div className="card">
      <div className="top-bar">
        <h2>Submit Complaint</h2>
        <button className="logout" onClick={logout}>
          Logout
        </button>
      </div>

      <input
        placeholder="Complaint Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Describe the issue"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option>Hostel</option>
        <option>Water</option>
        <option>Electricity</option>
        <option>WiFi</option>
        <option>Classroom</option>
      </select>

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="">Select Priority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button onClick={submitComplaint}>Submit Complaint</button>

      {message && <p className="success">{message}</p>}

      {details && (
        <div className="info-box">
          <p><b>Complaint ID:</b> {details.id}</p>
          <p><b>Status:</b> {details.status}</p>
          <p><b>Date:</b> {details.date}</p>
        </div>
      )}

      <p style={{ marginTop: "10px" }}>
        <Link to="/my-complaints">View My Complaints</Link>
      </p>
    </div>
  );
}

export default Complaint;
