import "../App.css";

function MyComplaints() {
  const complaints = JSON.parse(localStorage.getItem("complaints")) || [];

  return (
    <div className="card">
      <h2>My Complaints</h2>

      {complaints.length === 0 ? (
        <p>No complaints submitted yet.</p>
      ) : (
        complaints.map((c) => (
          <div key={c.id} className="info-box">
            <p><b>ID:</b> {c.id}</p>
            <p><b>Category:</b> {c.category}</p>
            <p><b>Priority:</b> {c.priority}</p>
            <p><b>Status:</b> {c.status}</p>
            <p><b>Date:</b> {c.date}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyComplaints;
