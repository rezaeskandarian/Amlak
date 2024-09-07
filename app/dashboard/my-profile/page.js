import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import MyProfilePage from "@/components/template/MyProfile";
import User from "@/models/user";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

const MyProfile = async () => {
  await connectDB();
  const session = await getServerSession(authOptions);
  const [user] = await User.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);
  console.log(user);
  return <div><MyProfilePage profiles={user.profiles} /></div>;
};

export default MyProfile;
