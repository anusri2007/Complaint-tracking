import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Admin() {
  const navigate = useNavigate();

  const [complaints, setComplaints] = useState(
    JSON.parse(localStorage.getItem("complaints")) || []
  );

  const [message, setMessage] = useState("");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleChange = (index, value) => {
    const updated = [...complaints];
    updated[index].tempStatus = value;
    setComplaints(updated);
  };

  const saveStatus = (index) => {
    const updated = [...complaints];
    updated[index].status = updated[index].tempStatus || updated[index].status;

    setComplaints(updated);
    localStorage.setItem("complaints", JSON.stringify(updated));

    setMessage("Status updated successfully ✔️");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h2>Admin Dashboard</h2>
        <button className="logout" onClick={logout}>
          Logout
        </button>
      </div>

      {message && <p className="success">{message}</p>}

      {complaints.length === 0 ? (
        <p>No complaints available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Complaint ID</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
              <th>Save</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {complaints.map((c, index) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.category}</td>
                <td className={c.priority === "High" ? "high" : ""}>
                  {c.priority}
                </td>
                <td>{c.status}</td>
                <td>
                  <select
                    defaultValue={c.status}
                    onChange={(e) =>
                      handleChange(index, e.target.value)
                    }
                  >
                    <option>Open</option>
                    <option>In Progress</option>
                    <option>Rectified</option>
                  </select>
                </td>
                <td>
                  <button
                    className="save-btn"
                    onClick={() => saveStatus(index)}
                  >
                    Save
                  </button>
                </td>
                <td>{c.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Admin;
