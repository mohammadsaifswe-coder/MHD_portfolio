import ContactBanner from '@/components/contactPage/ContactBanner'
// import ContactForm from '@/components/contactPage/ContactForm'
import ContactSection from '@/components/contactPage/ContactSection'
import React, { lazy, Suspense } from 'react'
const ContactForm = lazy(() => import('@/components/contactPage/ContactForm'));
export default function ContactPage() {
  return (
    <>
      <ContactBanner />
      <ContactSection />
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <ContactForm />
      </Suspense>
    </>
  )
}
