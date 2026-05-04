import React, { useState } from "react";

const RegisterCard = () => {
  const [role, setRole] = useState("customer");

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 absolute right-50 ">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-[var(--color-primary)]">
        Create Account
      </h1>

      <p className="text-center text-[var(--color-secondary)] mt-2 mb-6">
        Join us as a Customer, Restaurant, or Rider
      </p>

      {/* Role */}
      <div className="mb-5">
        <p className="mb-2 font-medium text-[var(--color-base-content)]">
          Register as:
        </p>

        <div className="flex gap-6 text-[var(--color-base-content)]">
          {["customer", "restaurant", "rider"].map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="role"
                value={item}
                checked={role === item}
                onChange={() => setRole(item)}
                className="accent-[var(--color-primary)]"
              />
              <span className="capitalize">{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Inputs */}
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full p-3 rounded-md border border-[var(--color-base-300)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 rounded-md border border-[var(--color-base-300)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />

        <input
          type="tel"
          placeholder="Enter your phone number"
          className="w-full p-3 rounded-md border border-[var(--color-base-300)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="w-full p-3 rounded-md border border-[var(--color-base-300)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />

        <input
          type="password"
          placeholder="Confirm your password"
          className="w-full p-3 rounded-md border border-[var(--color-base-300)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />
      </div>

      {/* Terms */}
      <div className="flex items-center gap-2 mt-5 text-sm">
        <label className="flex items-center gap-2 text-[var(--color-secondary)]">
          <input type="checkbox" />I agree to the
        </label>

        <span className="text-[var(--color-primary)] cursor-pointer hover:underline">
          terms and conditions.
        </span>
      </div>

      {/* Button */}
      <button className="w-full mt-6 py-3 rounded-md bg-[var(--color-primary)] text-white font-semibold hover:opacity-90 transition">
        Register
      </button>

      {/* Footer Text */}
      <p className="text-center text-sm mt-5 text-[var(--color-secondary)]">
        Already registered?{" "}
        <span className="text-[var(--color-primary)] cursor-pointer hover:underline">
          Login here
        </span>
      </p>
    </div>
  );
};

export default RegisterCard;
