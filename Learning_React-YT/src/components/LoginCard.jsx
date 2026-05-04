import React from "react";

const LoginCard = () => {
  return (
    <>
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 absolute left-50">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-[var(--color-primary)]">
          Welcome Back
        </h1>

        <p className="text-center text-[var(--color-secondary)] mt-2 mb-6">
          Login to your Cravings account
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 text-[var(--color-base-content)] font-medium">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-md border border-[var(--color-base-300)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="block mb-1 text-[var(--color-base-content)] font-medium">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 pr-10 rounded-md border border-[var(--color-base-300)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            <span className="absolute right-3 top-3 text-gray-400 cursor-pointer">
              👁️
            </span>
          </div>
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between mb-6 text-sm">
          <label className="flex items-center gap-2 text-[var(--color-secondary)]">
            <input type="checkbox" />
            Remember me
          </label>

          <a href="#" className="text-[var(--color-primary)] hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Button */}
        <button className="w-full py-3 rounded-md bg-[var(--color-primary)] text-[var(--color-primary-content)] font-semibold hover:opacity-90 transition">
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <div className="flex-1 h-px bg-[var(--color-base-300)]"></div>
          <span className="text-sm text-[var(--color-secondary)]">
            Don't have an account?
          </span>
          <div className="flex-1 h-px bg-[var(--color-base-300)]"></div>
        </div>

        {/* Signup */}
        <p className="text-center text-[var(--color-primary)] font-medium cursor-pointer hover:underline">
          Create an account
        </p>
      </div>
    </>
  );
};

export default LoginCard;
