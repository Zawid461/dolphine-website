import logo from "../assets/logo.jpeg";

function DolphinLogo({ size = 40, className = "" }) {
  return (
    <img
      src={logo}
      alt="DOLPHIN Logo"
      width={size}
      height={size}
      className={className}
      style={{
        width: size,
        height: size,
        objectFit: "cover",
        borderRadius: "50%",
        display: "block",
      }}
    />
  );
}

export default DolphinLogo;