import { useEffect } from "react";

function RegisterRedirect() {
  useEffect(() => {
    window.location.href = "https://forms.gle/FFPpAgqFPMkjyqvK9";
  }, []);

  return null; // Since we are redirecting, no need to render anything
}

export default RegisterRedirect;
