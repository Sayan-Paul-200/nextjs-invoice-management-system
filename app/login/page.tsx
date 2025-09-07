import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { auth, signIn } from '../utils/auth';
import SubmitButtons from '../components/SubmitButtons';
import { redirect } from 'next/navigation';


const LoginPage = async () => {

  const session = await auth()
  if (session?.user) {
    redirect('/dashboard') // Redirect to dashboard if authenticated
  }

  return (
    <>
        <div className="flex h-screen w-full items-center justify-center px-4">

        {/* Card */}
        <Card className="max-w-sm">

          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>Enter your email below to login into your account</CardDescription>
          </CardHeader>

          <CardContent>
            <form
              action={async (formData) => {
                // form submission logic here
                "use server"
                await signIn("nodemailer", formData)
              }}
              className='flex flex-col gap-y-4'
             >
                <div className="flex flex-col gap-y-2">
                    <Label>Email</Label>
                    <Input 
                      type="email"
                      name="email" 
                      required
                      placeholder='example@domain.com' 
                    />
                </div>
                <SubmitButtons />
            </form>
          </CardContent>

        </Card>

      </div>
    </>
  )
}

export default LoginPage