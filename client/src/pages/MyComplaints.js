import { useEffect, useState } from "react";

function Admin() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("complaints")) || [];
    setComplaints(data);
  }, []);

  const updateStatus = (id, status) => {
    const updated = complaints.map(c =>
      c.id === id ? { ...c, status } : c
    );

    setComplaints(updated);
    localStorage.setItem("complaints", JSON.stringify(updated));
  };

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: "700px" }}>
        <h2>Admin Dashboard</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {complaints.map(c => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.category}</td>
                <td>{c.priority}</td>
                <td>{c.status}</td>
                <td>
                  <select onChange={e => updateStatus(c.id, e.target.value)}>
                    <option>Open</option>
                    <option>Resolved</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default Admin;
