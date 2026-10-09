"use client";

import { useState, type FormEvent } from "react";

function Logo() {
  return (
    <svg width="44" height="40" viewBox="0 0 44 40" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="40" x2="44" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B43CF0" />
          <stop offset="1" stopColor="#6B36F5" />
        </linearGradient>
      </defs>
      <path d="M2 36 L14 8" stroke="url(#logo-grad)" strokeWidth="4" strokeLinecap="round" />
      <path d="M10 36 L22 8" stroke="url(#logo-grad)" strokeWidth="4" strokeLinecap="round" />
      <path d="M18 36 L30 8" stroke="url(#logo-grad)" strokeWidth="4" strokeLinecap="round" />
      <path d="M24 34 C30 30 34 22 32 12 C38 14 42 22 38 32" stroke="url(#logo-grad)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const inputClass =
  "h-10 w-full rounded-full border border-neutral-200 bg-neutral-100 px-4 text-[13px] text-neutral-800 placeholder:text-neutral-400 outline-none transition focus:border-[#6B36F5] focus:bg-white focus:ring-2 focus:ring-[#6B36F5]/20";

const labelClass = "mb-1.5 block text-[12px] font-semibold text-neutral-900";

const socialClass =
  "flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition hover:shadow-[0_4px_12px_rgba(0,0,0,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B36F5]";

export default function SignUpForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "" });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Sign up:", form);
    // TODO: call your sign-up API here
  };

  return (
    <div className="w-full max-w-140 rounded-[28px] border border-white/80 bg-white/60 p-3 shadow-[0_10px_40px_rgba(80,60,160,0.12)] backdrop-blur-md">
      <div className="rounded-[22px] bg-neutral-50 px-7 py-7 sm:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-neutral-200 pb-4">
          <Logo />
          <div>
            <h1 className="text-[22px] font-medium leading-tight text-neutral-900">Sign Up</h1>
            <p className="text-[12px] text-neutral-500">
              Enter your email and phone number to sign up.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className={labelClass}>First Name</label>
              <input id="firstName" type="text" autoComplete="given-name" placeholder="First Name"
                value={form.firstName} onChange={update("firstName")} className={inputClass} required />
            </div>
            <div>
              <label htmlFor="lastName" className={labelClass}>Last Name</label>
              <input id="lastName" type="text" autoComplete="family-name" placeholder="Last Name"
                value={form.lastName} onChange={update("lastName")} className={inputClass} required />
            </div>
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>Email</label>
            <input id="email" type="email" autoComplete="email" placeholder="Write your email here"
              value={form.email} onChange={update("email")} className={inputClass} required />
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>Mobile Number</label>
            <input id="phone" type="tel" autoComplete="tel" placeholder="Write your mobile number here"
              value={form.phone} onChange={update("phone")} className={inputClass} required />
          </div>

          <button type="submit"
            className="mt-2 h-11 w-full rounded-full bg-[#6B36F5] text-[14px] font-semibold text-white transition hover:bg-[#5a2ad9] active:scale-[0.99] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#6B36F5]">
            Sign Up
          </button>
        </form>

        {/* Social */}
        <p className="mt-5 text-center text-[12px] font-medium text-neutral-800">Or Sign Up with</p>
        <div className="mt-3 flex items-center justify-center gap-4">
          <button type="button" aria-label="Sign up with Facebook" className={socialClass}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#3B5998"><path d="M13.5 22v-8.2h2.8l.4-3.3h-3.2V8.4c0-.9.3-1.6 1.6-1.6h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.5H7.5v3.3h2.8V22h3.2z"/></svg>
          </button>
          <button type="button" aria-label="Sign up with LinkedIn" className={socialClass}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3V9.75zm6.5 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-4.9c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V21h-4V9.75z"/></svg>
          </button>
          <button type="button" aria-label="Sign up with Google" className={socialClass}>
            <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#4285F4" d="M23 12.3c0-.8-.1-1.5-.2-2.2H12v4.2h6.2a5.3 5.3 0 0 1-2.3 3.5v2.9h3.7c2.2-2 3.4-5 3.4-8.4z"/><path fill="#34A853" d="M12 24c3.1 0 5.7-1 7.6-2.8l-3.7-2.9c-1 .7-2.3 1.1-3.9 1.1-3 0-5.5-2-6.4-4.7H1.8v3A12 12 0 0 0 12 24z"/><path fill="#FBBC05" d="M5.6 14.7a7.2 7.2 0 0 1 0-4.6v-3H1.8a12 12 0 0 0 0 10.6l3.8-3z"/><path fill="#EA4335" d="M12 4.8c1.7 0 3.2.6 4.4 1.7l3.3-3.3A12 12 0 0 0 1.8 7.1l3.8 3C6.5 6.8 9 4.8 12 4.8z"/></svg>
          </button>
        </div>

        <p className="mt-5 text-center text-[11px] text-neutral-500">
          Already have an account?{" "}
          <a href="/signin" className="font-semibold text-neutral-900 hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  );
}