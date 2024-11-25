import ContactForm from '@/components/Contact'
import Container from '@/components/Container'
import React from 'react'

const page = () => {
  return (
    <Container className='flex items-center h-[100vh]'>
        <ContactForm />
    </Container>
  )
}

export default page