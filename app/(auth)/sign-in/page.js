import SignInPage from '@/components/template/SignIn'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation';

const SignIn = async () => {
  const session = await getServerSession(authOptions);
  if(session) redirect("/");
  return (
    <div>
      <SignInPage />
    </div>
  )
}

export default SignIn
