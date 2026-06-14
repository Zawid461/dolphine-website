import { useEffect, useState } from "react";
import axios from "axios";
import DolphinLogo from "./logo";

const API_URL = "https://dolphine-api-m31w.onrender.com";

function AdminDashboard() {
  const [enquiries, setEnquiries] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // FETCH ENQUIRIES
  const fetchEnquiries = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/enquiry`);

      console.log("API RESPONSE:", response.data);

      setEnquiries(response.data || []);
    } catch (error) {
      console.log("FETCH ERROR:", error);
      alert("Failed to load enquiries");
    } finally {
      setLoading(false);
    }
  };

  // DELETE ENQUIRY
  const deleteEnquiry = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_URL}/api/enquiry/${id}`);

      setEnquiries((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.log("DELETE ERROR:", error);
      alert("Delete failed");
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  // SEARCH FILTER
  const filtered = enquiries.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="min-h-screen"
      style={{
        background: "#03080f",
        color: "white",
      }}
    >
      {/* TOP NAVBAR */}
      <div
        style={{
          borderBottom: "1px solid rgba(0,212,255,0.15)",
          background: "#07111c",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <DolphinLogo size={42} />

        <div>
          <h2
            style={{
              margin: 0,
              fontSize: "24px",
              fontWeight: "700",
              background: "linear-gradient(135deg,#00d4ff,#0090ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            DOLPHIN
          </h2>

          <p
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.5)",
              fontSize: "12px",
            }}
          >
            Admin Dashboard
          </p>
        </div>

        <a
          href="/"
          style={{
            marginLeft: "auto",
            color: "#9ca3af",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          ← Back to Site
        </a>
      </div>

      {/* MAIN CONTENT */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "48px 24px",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "56px",
                fontWeight: "800",
                marginBottom: "10px",
                background: "linear-gradient(135deg,#00d4ff,#0090ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Enquiries
            </h1>

            <p style={{ color: "#94a3b8" }}>
              All customer project submissions
            </p>
          </div>

          {/* TOTAL CARD */}
          <div
            style={{
              background: "rgba(0,212,255,0.06)",
              border: "1px solid rgba(0,212,255,0.2)",
              borderRadius: "18px",
              padding: "24px 40px",
              minWidth: "180px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "52px",
                margin: 0,
                fontWeight: "800",
                background: "linear-gradient(135deg,#00d4ff,#0090ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {enquiries.length}
            </h2>

            <p style={{ color: "#94a3b8", marginTop: "6px" }}>
              Total Enquiries
            </p>
          </div>
        </div>

        {/* SEARCH */}
        <div style={{ marginBottom: "36px" }}>
          <input
            type="text"
            placeholder="🔍 Search by customer name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              maxWidth: "500px",
              background: "#07111c",
              border: "1px solid rgba(0,212,255,0.2)",
              padding: "16px 18px",
              borderRadius: "14px",
              color: "white",
              fontSize: "15px",
              outline: "none",
            }}
          />
        </div>

        {/* LOADING */}
        {loading ? (
          <div
            style={{
              textAlign: "center",
              padding: "100px 0",
              color: "#94a3b8",
            }}
          >
            Loading enquiries...
          </div>
        ) : filtered.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "100px 0",
              color: "#94a3b8",
            }}
          >
            No enquiries found.
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            {filtered.map((item) => (
              <div
                key={item._id}
                style={{
                  background: "#07111c",
                  border: "1px solid rgba(0,212,255,0.15)",
                  borderRadius: "20px",
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "20px",
                  }}
                >
                  {/* LEFT SIDE */}
                  <div style={{ flex: 1 }}>
                    <h2
                      style={{
                        color: "#00d4ff",
                        marginBottom: "14px",
                        fontSize: "24px",
                      }}
                    >
                      {item.name}
                    </h2>

                    <p
                      style={{
                        color: "#cbd5e1",
                        marginBottom: "10px",
                      }}
                    >
                      📞 {item.phone}
                    </p>

                    <p
                      style={{
                        color: "#94a3b8",
                        lineHeight: 1.7,
                      }}
                    >
                      📝 {item.project}
                    </p>

                    {item.createdAt && (
                      <p
                        style={{
                          marginTop: "16px",
                          color: "rgba(255,255,255,0.4)",
                          fontSize: "12px",
                        }}
                      >
                        Submitted:{" "}
                        {new Date(item.createdAt).toLocaleString()}
                      </p>
                    )}
                  </div>

                  {/* RIGHT SIDE */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      gap: "14px",
                    }}
                  >
                    <button
                      onClick={() => deleteEnquiry(item._id)}
                      style={{
                        background: "rgba(239,68,68,0.1)",
                        border: "1px solid rgba(239,68,68,0.3)",
                        color: "#f87171",
                        padding: "12px 18px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;