 const isLocalhost = window.location.hostname === "localhost";

const server = isLocalhost
    ? "http://localhost:8000"
    : "https://sigmameet.onrender.com";

export default server; 