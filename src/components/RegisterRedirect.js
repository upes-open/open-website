import { useEffect } from "react";

function RegisterRedirect() {
  useEffect(() => {
    window.location.href = "https://upes-open.org/valorant_register";
  }, []);

  return null; // Since we are redirecting, no need to render anything
}

export default RegisterRedirect;
