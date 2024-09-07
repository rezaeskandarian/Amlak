import { NextResponse } from "next/server";
import User from "@/models/user";
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth";

export async function POST(req) {
  try {
    await connectDB();

    let email, password;

    try {
      const body = await req.json();
      email = body.email;
      password = body.password;
    } catch (jsonError) {
      console.error("Error parsing JSON from request body:", jsonError);
      return NextResponse.json(
        { error: "Invalid JSON payload" },
        { status: 400 }
      );
    }

    console.log({ email, password });
    if (!email || !password) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 422 }
      );
    }

    const existingUser = await User.findOne({ email: email });

    console.log(existingUser);

    if (existingUser) {
      return NextResponse.json(
        { error: "این حساب کاربری وجود دارد " },
        { status: 422 }
      );
    }

    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({
      email: email,
      password: hashedPassword,
    });

    console.log(newUser);

    return NextResponse.json(
      { message: "حساب کاربری با موفقیت ثبت شد" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است " },
      { status: 500 }
    );
  }
}
