"use server";

import { db } from "@/lib/db";
import { registerValidator } from "@/lib/validators/auth";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function register(formData: FormData) {
  const infos = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const { name, email, password, confirmPassword } =
    registerValidator.parse(infos);

  if (password !== confirmPassword) {
    return { error: "Passwords do not match" };
  }

  const user = await db.user.findFirst({
    where: { email },
  });

  if (user) {
    return { error: "User already exists" };
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  redirect("/login");
}
