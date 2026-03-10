import { useEffect } from "react";
import { ContactForm } from "../components/ContactForm";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Initiate Contract | Hit!";
  }, []);

  return <ContactForm />;
}
