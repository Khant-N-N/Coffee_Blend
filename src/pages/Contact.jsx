import React from "react";
import PagesHero from "../components/PagesHero";
import ContactForm from "../components/HomePage/ContactForm";

const Contact = () => {
  return (
    <div>
      <PagesHero title="Contact us" path="contact" />
      <ContactForm />
    </div>
  );
};

export default Contact;
