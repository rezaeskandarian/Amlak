import DashboardSideBar from "@/components/layout/DashboardSideBar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import connectDB from "@/utils/connectDB";
import User from "@/models/user";

export const metadata = {
  title: "پنل کاربری املاک ",
 
};

const Dashboardlayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/sign-in");
  await connectDB();
  const user = await User.findOne({ email: session.user.email });
  if (!user) {
    return <h3>مشکلی پیش آمده است</h3>;
  }
  return (
    <DashboardSideBar role={user.role} email={user.email}>
      {children}
    </DashboardSideBar>
  );
};
export default Dashboardlayout;
