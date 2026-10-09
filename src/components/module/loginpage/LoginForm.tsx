"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import logo from "../../../app/assets/logo-icon.png";
import Link from "next/link";
import { FaFacebookF, FaGoogle } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const InputClass =
  "h-11 block rounded-full text-[12px] px-4 outline-0 border-2 w-full mt-2 mb-3";
const IconClass =
  "text-blue-900  w-10 h-10 border-2 border-white p-2 bg-gray-50 rounded-full";
const LoginForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [check, setCheck] = useState(false);

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
    console.log("Sign up:", form);
    console.log("Sign up:", check);
    // TODO: call your sign-up API here
  };
  return (
    <section className="bg-gray-100 w-full max-w-140 mx-auto rounded-[24px] p-10 border-2 border-white">
      <div className="flex gap-4">
        <Image src={logo} width={40} height={40} alt="logo" />
        <span>
          <h1 className="text-xl font-bold">Sign In</h1>
          <p className="text-[12px] mt-1 text-neutral-500">
            Enter your email and password to sign in.
          </p>
        </span>
      </div>
      <div className="border-b-2 w-full border-gray-200 mt-6"></div>

      <form onSubmit={handleSubmit} className="mt-6">
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

        <div className="text-xs flex items-center justify-between font-extralight mt-5">
          <p className="font-medium flex items-center gap-3">
            <input
              type="checkbox"
              name="remember"
              className="w-4 h-4"
              onClick={() => setCheck(!check)}
            />{" "}
            Remember me
          </p>
          <p className="text-gray-500">Forgot your password?</p>
        </div>

        <button
          className="w-full h-11 bg-[#7C3AED] rounded-full text-white font-bold mt-5"
          type="submit"
        >
          Sign In
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
        Are you New here?
        <Link href="/register" className="font-bold">
          Sign Up
        </Link>
      </small>
    </section>
  );
};

export default LoginForm;
