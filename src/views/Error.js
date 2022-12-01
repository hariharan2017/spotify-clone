import { useNavigate } from "react-router-dom"

const Error = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ fontSize: "5rem", color: "#00a2a2", marginRight: "2rem" }}>:(</div>
      <div>
        <div style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "1rem" }}>404 - Page Not Found</div>
        <div style={{ fontWeight: "300" }}>The page you are looking for might have been removed</div>
        <div style={{ marginTop: "1rem", padding: "0.5rem", borderRadius: "10px", border: "1px solid grey", width: "fit-content", fontWeight: "700" }} onClick={() => navigate("/")}>Go to Home</div>
      </div>
    </div>
  );
};

export default Error;