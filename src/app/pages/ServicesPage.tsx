import { useEffect } from "react";
import { Services } from "../components/Services";

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Services | Hit!";
  }, []);

  return <Services />;
}
