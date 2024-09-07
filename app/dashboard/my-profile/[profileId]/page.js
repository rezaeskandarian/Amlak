import AddProfilePage from "@/components/template/AddProfile";
import Profile from "@/models/profile";
import connectDB from "@/utils/connectDB";

const EditProfile = async ({ params: { profileId } }) => {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });
  if(!profile) {
    return <h3>مشکلی پیش آمده است دوباره امتحان کنید </h3>
  }
  return <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />;
};

export default EditProfile;
