import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Complaint() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");

  const navigate = useNavigate();

  const submitComplaint = () => {
    const complaints = JSON.parse(localStorage.getItem("complaints")) || [];

    const newComplaint = {
      id: "CMP" + Math.floor(10000 + Math.random() * 90000),
      title,
      description,
      category,
      priority,
      status: "Open",
      date: new Date().toLocaleString()
    };

    complaints.push(newComplaint);
    localStorage.setItem("complaints", JSON.stringify(complaints));

    alert(`Complaint Submitted!\nID: ${newComplaint.id}`);
    navigate("/my-complaints");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Submit Complaint</h2>

        <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
        <textarea placeholder="Description" onChange={e => setDescription(e.target.value)} />

        <select onChange={e => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option>Hostel</option>
          <option>Water</option>
          <option>Electricity</option>
          <option>WiFi</option>
          <option>Classroom</option>
        </select>

        <select onChange={e => setPriority(e.target.value)}>
          <option value="">Select Priority</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button onClick={submitComplaint}>Submit</button>
      </div>
    </div>
  );
}

export default Complaint;
