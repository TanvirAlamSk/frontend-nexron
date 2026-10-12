"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import logo from "../../../app/assets/logo-icon.png";
import Link from "next/link";
import { FaFacebookF, FaGoogle } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { registration } from "./registration";

const InputClass =
  "h-11 block rounded-full text-[12px] px-4 outline-0 border-2 w-full mt-2 mb-3";
const IconClass =
  "text-blue-900  w-10 h-10 border-2 border-white p-2 bg-gray-50 rounded-full";

const RegisterForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const update = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = {
      ...form,
    };
    const { name, value } = e.target;
    formData[name as keyof typeof form] = value;
    setForm(formData);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const res=registration(form);
    console.log(res)

    // TODO: call your sign-up API here
  };

  return (
    <section className="bg-gray-100 w-full max-w-140 mx-auto rounded-[24px] p-10 border-2 border-white">
      <div className="flex gap-4">
        <Image src={logo} width={40} height={40} alt="logo" />
        <span>
          <h1 className="text-xl font-bold">Sign Up</h1>
          <p className="text-[12px] mt-1 text-neutral-500">
            Enter your name, email and password to sign up.
          </p>
        </span>
      </div>
      <div className="border-b-2 w-full border-gray-200 mt-6"></div>

      <form onSubmit={handleSubmit} className="mt-6">
        <div className="flex gap-2">
          <div className="w-1/2">
            <label htmlFor="name" className="text-xs font-bold">
              First Name
            </label>
            <input
              className="h-11 block rounded-full text-[12px] px-4 outline-0 border-2 w-full mt-2 mb-3 "
              placeholder="First Name"
              type="text"
              name="firstName"
              onChange={update}
              required
            ></input>
          </div>

          <div className="w-1/2">
            <label htmlFor="name" className="text-xs font-bold">
              Last Name
            </label>
            <input
              className={InputClass}
              placeholder="Last Name"
              type="text"
              name="lastName"
              onChange={update}
              required
            ></input>
          </div>
        </div>

        <div className="">
          <label htmlFor="name" className="text-xs font-bold">
            Email
          </label>
          <input
            className={InputClass}
            placeholder="Write Your Email Here"
            type="email"
            name="email"
            onChange={update}
            required
          ></input>
        </div>

        <div className="">
          <label htmlFor="name" className="text-xs font-bold">
            Password
          </label>
          <input
            className={InputClass}
            placeholder="Write Password Here"
            type="password"
            name="password"
            onChange={update}
            required
          ></input>
        </div>

        <button
          className="w-full h-11 bg-[#7C3AED] rounded-full text-white font-bold mt-3"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <p className="text-[12px] font-bold text-center mt-6">Or Sign Up with</p>
      <ul className="flex gap-4 items-center justify-center mt-6">
        <li>
          <FaFacebookF className={IconClass} />
        </li>

        <li>
          <FaLinkedinIn className={IconClass} />
        </li>

        <li>
          <FaGoogle className={IconClass} />
        </li>
      </ul>
      <small className="text-center block mt-6">
        Already have an account?
        <Link href="/login" className="font-bold">
          Sign In
        </Link>
      </small>
    </section>
  );
};

export default RegisterForm;
