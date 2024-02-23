"use client";

import { register } from "@/actions/auth";
import React, { useState } from "react";

const RegisterPage = () => {
  return (
    <div className="w-full h-[100dvh] flex items-center justify-center">
      <form
        action={register}
        className="flex flex-col gap-4 w-52 justify-center items-center"
      >
        <h1 className="font-bold">Register Form</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" className="border border-black" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="border border-black" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-black"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="border border-black"
          />
        </div>
        <button type="submit" className="bg-slate-900 text-white p-4">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
