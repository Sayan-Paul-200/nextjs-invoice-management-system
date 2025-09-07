'use client'

import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import React from 'react'
import { useFormStatus } from 'react-dom'

const SubmitButtons = () => {

    const { pending } = useFormStatus()

  return (
    <>
        {
            pending
            ? 
            <Button disabled className='w-full'>
                <Loader2 className='size-4 mr-2 animate-spin' /> Please wait...
            </Button>
            :
            <Button type='submit' className='w-full'>
                Submit
            </Button>
        }
    </>
  )
}

export default SubmitButtons