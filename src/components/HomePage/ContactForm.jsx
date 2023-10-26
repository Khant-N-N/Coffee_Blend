import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-black px-8">
      <div className="md:w-1/2 flex justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.0075407969753!2d96.1302365!3d16.825982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c194ca13fff6e3%3A0x1334ced7a53c5bbc!2sHledan%20Centre!5e0!3m2!1sen!2smm!4v1698177547945!5m2!1sen!2smm"
          className="w-full h-[300px]"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <form className="flex flex-col md:flex-row flex-wrap md:w-1/2 px-5 py-9 md:h-[400px] gap-5 justify-center items-center">
        <h3 className="w-[90%] font-semibold">CONTACT US</h3>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="bg-transparent placeholder-white/70 border-b outline-none py-2 px-1 w-[90%] md:w-[45%] text-base"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="bg-transparent placeholder-white/70 border-b outline-none py-2 px-1 w-[90%] md:w-[45%] text-base"
        />

        <input
          type="text"
          name="phone"
          placeholder="Subject"
          className="bg-transparent placeholder-white/70 border-b outline-none py-2 px-1 w-[90%] text-base"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="bg-transparent placeholder-white/70 border-b outline-none py-2 px-1 w-[90%] md:w-[45%] text-base"
        />
        <button
          type="button"
          className="bg-[var(--secondary-color)] border border-[var(--secondary-color)] hover:bg-black hover:text-[var(--secondary-color)] transition-colors duration-200 text-black py-3 w-[90%] md:w-[45%] text-base rounded-sm"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
