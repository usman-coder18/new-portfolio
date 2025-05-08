"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FiMail, FiMessageSquare, FiSend, FiUser } from "react-icons/fi";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";


type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);

      const response = await fetch("https://formspree.io/f/xdkekzgv", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          pauseOnHover: false,
        });
        reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error with the form submission.", {
        position: "top-right",
        pauseOnHover: false,
      });
    }
  };

  return (
    <>
      <ToastContainer
        closeOnClick
        draggable
        className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      />
 <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4 py-16 gap-10">
      {/* Left Content with Animation */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full md:w-1/2 text-center md:text-left space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white md:mt-7">Let’s Connect</h2>
        <p className="text-gray-300 text-lg">
          Have a project in mind, or just want to say hello? Fill out the form and I'll get back to you soon.
        </p>
        <div className="hidden md:block mt-10">
          <img
            src="/New message-rafiki.svg"
            alt="Contact illustration"
            className="w-3/4 mx-auto md:mx-0"
          />
        </div>
      </motion.div>

      {/* Contact Form with Animation */}
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="w-full md:w-1/2 max-w-md bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8 space-y-6 shadow-xl"
      >
        {/* Name */}
        <div>
          <label className="block text-sm text-white mb-2">Name</label>
          <div className="flex items-center bg-white/10 rounded-xl p-3 ">
            <FiUser className="mr-3 text-white" />
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Your Name"
              className="bg-transparent flex-1 outline-none text-white placeholder-gray-400 text-sm"
            />
          </div>
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-white mb-2">Email</label>
          <div className="flex items-center bg-white/10 rounded-xl p-3 ">
            <FiMail className="mr-3 text-white" />
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
              placeholder="email@example.com"
              className="bg-transparent flex-1 outline-none text-white placeholder-gray-400 text-sm"
            />
          </div>
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm text-white mb-2">Message</label>
          <div className="flex items-start bg-white/10 rounded-xl p-3 ">
            <FiMessageSquare className="mr-3 mt-1 text-white" />
            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Write your message..."
              rows={4}
              className="bg-transparent flex-1 outline-none text-white placeholder-gray-400 text-sm resize-none"
            />
          </div>
          {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
        </div>

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white py-3 rounded-xl font-semibold flex items-center justify-center"
        >
          <FiSend className="mr-2" /> Send Message
        </motion.button>
      </motion.form>
    </section>


    </>
  );
}
