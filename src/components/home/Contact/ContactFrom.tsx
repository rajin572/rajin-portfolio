"use client";

import React, { RefObject, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ContactFrom = () => {
  const form: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Sending Message....");
    try {
      if (form.current) {
        emailjs
          .sendForm("service_lwrro8b", "template_muwfadg", form.current, {
            publicKey: "ZeWFlpihbuwya15gr",
          })
          .then(
            () => {
              toast.error("Successfully Send The Message", {
                id: toastId,
                duration: 1000,
              });
              reset();
            },
            (error: { text: any }) => {
              toast.error(error.text, {
                id: toastId,
                duration: 1500,
              });
            }
          );
      } else {
        toast.error("Form reference is null.", {
          id: toastId,
          duration: 1500,
        });
      }
    } catch (err) {
      toast.error(String(err), {
        id: toastId,
        duration: 1500,
      });
    }
  };
  return (
    <div>
      <form
        ref={form}
        className="md:w-[80%] mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-5">
          <label className="flex items-center text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-captions text-secondary"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span> Name :</span>
          </label>
          <input
            type="text"
            {...register("user_name")}
            name="user_name"
            placeholder="Enter Your Name"
            required
            className="border focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded bg-primary"
          />
        </div>
        <div className="mb-5">
          <label className="flex items-center text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-captions text-secondary"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span> Email :</span>
          </label>
          <input
            type="email"
            {...register("user_email")}
            name="user_email"
            placeholder="Enter Your Email"
            required
            className="border focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded bg-primary"
          />
        </div>
        <div className="mb-5">
          <label className="flex items-center text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-captions text-secondary"
            >
              <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
              <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
            </svg>
            <span> Subject :</span>
          </label>
          <input
            type="text"
            {...register("from_name")}
            name="from_name"
            placeholder="Enter Your Subject"
            required
            className="border focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded bg-primary"
          />
        </div>
        <div className="mb-5 col-span-2">
          <label className="flex items-center text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-receipt-text text-secondary"
            >
              <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
              <path d="M14 8H8" />
              <path d="M16 12H8" />
              <path d="M13 16H8" />
            </svg>
            <span> Message :</span>
          </label>
          <textarea
            {...register("message")}
            name="message"
            placeholder="Enter Your Message"
            required
            className="h-40 border focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded bg-primary"
          />
        </div>
        <div className=" mt-6 col-span-2">
          <button className="w-full border-2 border-secondary  bg-secondary text-primary font-bold py-2 rounded dark:bg-secondary dark:border-secondary duration-500 transition-all  flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user-round-plus"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
            <span>Send Message</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactFrom;
