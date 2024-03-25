"use client"

import React from 'react'
import dynamic from 'next/dynamic';

const GetInTouch = dynamic(()=> import('@/src/components/ContactUS'))

import{
  ContactUsHeading,
  ContactUsDescription
} from "@/src/utils/variables"
const ContactUs = () => {
  return (
    <>
      <GetInTouch
      heading={ContactUsHeading}
      description={ContactUsDescription}/>
    </>
  )
}

export default ContactUs;
