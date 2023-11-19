"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

async function sendEmail(Email: string, Name: string, Message: string) {
  emailjs.init("38pRZqGDERExWAAqD");

  try {
    const response = await emailjs.send(
      "service_q1uhaw2",
      "template_3h1j4qy",
      {
        name: Name,
        message: Message,
        sender: Email,
      },
      "38pRZqGDERExWAAqD"
    );
    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

const ContactUs = () => {
  const [message, setMessage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isSending, setIsSending] = useState(false); // State variable to track email sending

  const resetForm = () => {
    setMessage("");
    setName("");
    setEmail("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const Name = formData.get("name")!.toString();
    const Email = formData.get("email")!.toString().trim();
    const Message = formData.get("message")!.toString();

    setIsSending(true); // Set isSending to true when sending email

    try {
      await sendEmail(Email, Name, Message);

      // Reset the form fields after a successful submission
      resetForm();
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsSending(false); // Reset isSending after email submission (whether successful or not)
    }
  };

  return (
    <div className=" flexreverse min-h-[60vh] h-full justify-center gap-20 items-center py-40  ">
      <motion.h1 className="text-[70px] sm:text-[100px] text-center max-w-md text-white font-base leading-[120px] pb-20 px-5 sm:px-0">
        Let's Get in touch !
      </motion.h1>
      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center"
      >
        <motion.input
          type="text"
          name="name"
          required
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="inputText card"
        />
        <motion.input
          type="text"
          name="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="inputText card"
        />
        <motion.textarea
          name="message"
          rows={8}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="inputText card"
        />

        <motion.button
          className={
            isSending
              ? "w-full text-white p-3 bg-gray-300 font-bold rounded-lg sm:w-[500px]"
              : "button"
          }
          disabled={isSending} // Disable the button while sending
        >
          {isSending ? "Sending..." : "Send"}
        </motion.button>
      </motion.form>
    </div>
  );
};

export default ContactUs;
