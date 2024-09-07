import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/models/user";
import Profile from "@/models/profile";
import DashboardSideBar from "@/components/layout/DashboardSideBar";
import AdminPage from "@/components/template/Admin";
import connectDB from "@/utils/connectDB";

export const metadata = {
  title: "پنل ادمین املاک ",
};

const Admin = async () => {
  await connectDB();

  const session = await getServerSession(authOptions);
  if (!session) redirect("/sign-in");

  const user = await User.findOne({ email: session.user.email });
  if (user.role !== "ADMIN") redirect("/dashboard");

  const profiles = await Profile.find({ published: false });
  return (
    <DashboardSideBar role={user.role} email={user.email}>
      <AdminPage profiles={profiles} />
    </DashboardSideBar>
  );
};

export default Admin;
