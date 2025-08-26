import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


const LoginPage = () => {
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
            <form className='flex flex-col gap-y-4'>
                <div className="flex flex-col gap-y-2">
                    <Label>Email</Label>
                    <Input placeholder='example@domain.com' />
                </div>
                <Button>Submit</Button>
            </form>
          </CardContent>

        </Card>

      </div>
    </>
  )
}

export default LoginPage