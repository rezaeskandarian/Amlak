import SignUpPage from "@/components/template/SignUp"
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation';


const SignUp = async () => {
  const session = await getServerSession(authOptions);
  if(session) redirect("/");
  return (
    <div>
      <SignUpPage />
    </div>
  )
}

export default SignUp
