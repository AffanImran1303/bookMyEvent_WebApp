import EventForm from '@/components/shared/EventForm';
import { auth } from '@clerk/nextjs/server';
import React from 'react'

const CreateEvent = async () => {
    const { sessionClaims } = await auth();
    console.log("Session Claims:",sessionClaims);
    const userId = sessionClaims?.sub as string;
    console.log("userId:",userId)

    return (
    <>
        <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper main-heading text-center sm:Text-left">Create Event</h3>
        </section>

        <div className="wrapper my-8">
            <EventForm userId={userId} type="Create"/>
        </div>
    </>
  )
}

export default CreateEvent