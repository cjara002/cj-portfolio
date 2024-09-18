import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact",
        ...formState,
      }).toString(),
    })
      .then(() => {
        console.log("Success!");
        navigate("/success");
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="bg-cover bg-center py-8 bg-cactus"
      id="contact-me"
    >
      <div className="flex justify-center">
        <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg w-full max-w-2xl">
          <h1 className="text-white text-2xl font-bold mb-4">Request a free quote</h1>
          <p className="text-white mb-4">
            If you need a website built, please feel free to contact me. I am always interested in
            helping out a fellow developer as well. <br /> Hablo Español.
          </p>
          <form method="POST" name="contact" onSubmit={handleSubmit} data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="mb-4">
              <label className="block text-white mb-2">Name</label>
              <input
                required
                type="text"
                name="firstName"
                value={formState.firstName}
                onChange={handleChange}
                className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Phone</label>
                <input
                  required
                  type="text"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-white mb-2">Message</label>
              <textarea
                required
                name="message"
                value={formState.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;