import { motion } from "framer-motion";
import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

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

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // triggers animation when 30% of component is visible
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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
  };
  
  const formVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
  };

  return (
    <div
      className="bg-cover bg-center py-8 bg-alien"
      id="contact-me"
      ref={ref}
    >
      <motion.div
        className="flex justify-center"
        variants={containerVariants} 
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg w-full max-w-2xl">
          <h1 className="text-white text-2xl font-bold mb-4">
            Request a free quote
          </h1>
          <p className="text-white mb-4">
            If you need a website built, please feel free to contact me. I am
            always interested in helping out a fellow developer as well. <br />{" "}
            Hablo Español.
          </p>
          <motion.form
            method="POST"
            name="contact"
            onSubmit={handleSubmit}
            data-netlify="true"
            variants={formVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
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
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
