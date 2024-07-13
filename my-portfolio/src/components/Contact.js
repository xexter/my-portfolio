// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl mb-4">Contact</h2>
        <form>
          <input type="text" placeholder="Name" className="block w-full mb-2 p-2 border"/>
          <input type="email" placeholder="Email" className="block w-full mb-2 p-2 border"/>
          <textarea placeholder="Message" className="block w-full mb-2 p-2 border"></textarea>
          <button type="submit" className="bg-blue-500 text-white p-2">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
