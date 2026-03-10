import { useEffect } from "react";
import { ContactForm } from "../components/ContactForm";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact | Initiate Contract";
  }, []);

  return <ContactForm />;
}
