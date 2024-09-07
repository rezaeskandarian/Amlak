import Profile from "@/models/profile";
import User from "@/models/user";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(req, context) {
  try {
    await connectDB();

    const id = context.params.profileId;
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری شوید" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "این حساب کاربری یافت نشد" },
        { status: 404 }
      );
    }

    if (user.role !== "ADMIN") {
      return NextResponse.json(
        {
          error:
            "دسترسی محدود است و این اکانت دسترسی به نقطه مورد نظر را ندارد",
        },
        { status: 403 }
      );
    }

    const profile = await Profile.findOne({ _id: id });
    profile.published = true;
    profile.save();
    return NextResponse.json(
      { message: "انتشار با موفقیت منتشر شد" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور پیش آمده است" },
      { status: 500 }
    );
  }
}
