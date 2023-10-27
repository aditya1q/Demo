import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current)

    emailjs
      .sendForm('service_og9gdeb', 'template_7n3erch', form.current, 'n3pxmxgStRA6_BLRZ')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });

    form.current.reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white shadow-2xl border-gray-200 border rounded px-8 pt-6 pb-8 mb-4 w-1/3 flex flex-col gap-4 h-[70vh]"
      >
        <h1 className="text-2xl font-semibold mb-4">Contact</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value="Send"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
