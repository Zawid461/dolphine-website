import { useEffect, useState } from "react";
import axios from "axios";
import DolphinLogo from "./logo";

function AdminDashboard() {
  const [enquiries, setEnquiries] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchEnquiries = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/enquiry");
      setEnquiries(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteEnquiry = async (id) => {
    if (!window.confirm("Delete this enquiry?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/enquiry/${id}`);
      fetchEnquiries();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => { fetchEnquiries(); }, []);

  const filtered = enquiries.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen grid-bg" style={{ background: "#03080f", color: "white" }}>

      {/* TOP NAV */}
      <div
        style={{
          borderBottom: "1px solid rgba(0,212,255,0.12)",
          background: "#07111c",
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <DolphinLogo size={38} />
        <div>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              background: "linear-gradient(135deg,#00d4ff,#0090ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            DOLPHIN
          </span>
          <span style={{ color: "rgba(0,212,255,0.5)", fontSize: "12px", marginLeft: "10px" }}>
            Admin Dashboard
          </span>
        </div>
        <a href="/" style={{ marginLeft: "auto", color: "var(--text-muted)", fontSize: "14px" }}>
          ← Back to Site
        </a>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px" }}>

        {/* HEADER ROW */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "48px",
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2rem,5vw,3rem)",
                fontWeight: 800,
                background: "linear-gradient(135deg,#00d4ff,#0090ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Enquiries
            </h1>
            <p style={{ color: "var(--text-muted)", marginTop: "4px" }}>All client project submissions</p>
          </div>

          <div
            style={{
              background: "rgba(0,212,255,0.06)",
              border: "1px solid rgba(0,212,255,0.2)",
              borderRadius: "16px",
              padding: "20px 32px",
              textAlign: "center",
              minWidth: "160px",
            }}
          >
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "3rem",
                fontWeight: 800,
                background: "linear-gradient(135deg,#00d4ff,#0090ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1,
              }}
            >
              {enquiries.length}
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "13px", marginTop: "4px" }}>Total</p>
          </div>
        </div>

        {/* SEARCH */}
        <div style={{ marginBottom: "36px" }}>
          <input
            type="text"
            placeholder="🔍  Search by client name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ maxWidth: "480px" }}
          />
        </div>

        {/* LIST */}
        {loading ? (
          <p style={{ color: "var(--text-muted)", textAlign: "center", padding: "80px 0" }}>
            Loading enquiries...
          </p>
        ) : filtered.length === 0 ? (
          <p style={{ color: "var(--text-muted)", textAlign: "center", padding: "80px 0" }}>
            No enquiries found.
          </p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {filtered.map((item) => (
              <div
                key={item._id}
                style={{
                  background: "#07111c",
                  border: "1px solid rgba(0,212,255,0.15)",
                  borderRadius: "18px",
                  padding: "28px 32px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr auto",
                  gap: "24px",
                  alignItems: "center",
                }}
              >
                {/* LEFT */}
                <div>
                  <h2
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#00d4ff",
                      marginBottom: "10px",
                    }}
                  >
                    {item.name}
                  </h2>
                  <p style={{ color: "var(--text-muted)", fontSize: "14px", marginBottom: "6px" }}>
                    📞 {item.phone}
                  </p>
                  <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>📝 {item.project}</p>
                </div>

                {/* DEVICE */}
                <div>
                  <p
                    style={{
                      color: "rgba(0,212,255,0.4)",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "6px",
                    }}
                  >
                    Device
                  </p>
                  <p style={{ color: "var(--text-dim)", fontSize: "12px", wordBreak: "break-all" }}>
                    {item.device}
                  </p>
                </div>

                {/* DELETE */}
                <button
                  onClick={() => deleteEnquiry(item._id)}
                  style={{
                    background: "rgba(239,68,68,0.1)",
                    border: "1px solid rgba(239,68,68,0.3)",
                    color: "#f87171",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    fontWeight: 600,
                    fontSize: "13px",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.background = "rgba(239,68,68,0.2)")}
                  onMouseLeave={(e) => (e.target.style.background = "rgba(239,68,68,0.1)")}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;