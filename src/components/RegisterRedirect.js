import { useEffect } from "react";

function RegisterRedirect() {
  useEffect(() => {
    window.location.href = "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-petroleum-and-energy-studies-dehradun-india-presents-spectrum-the-design-workshop/";
  }, []);

  return null; // Since we are redirecting, no need to render anything
}

export default RegisterRedirect;
