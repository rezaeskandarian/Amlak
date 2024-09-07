import ProfileDetailPage from "@/components/template/ProfileDetail";
import Profile from "@/models/profile";
import connectDB from "@/utils/connectDB";

const ProfileDetial = async ({ params: { profileId } }) => {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });

  if (!profile) return <h3>مشکلی پیش آمده است</h3>;

  return (
    <div>
      <ProfileDetailPage data={profile} />
    </div>
  );
};

export default ProfileDetial;

export const generateMetadata = async ({ params: { profileId } }) => {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });

  return {
    title: profile?.title,
    description: profile?.description,
  };
};
