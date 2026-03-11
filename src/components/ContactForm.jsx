
'use client';

import * as React from 'react';
import { useFormStatus } from 'react-dom';
import { submitContact } from '@/actions/actions'; // make sure this path is correct
import { motion } from 'framer-motion';

// Initial state object
const initialState = {
    success: false,
    message: undefined,
    errors: {},
    values: {},
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="bg-sky-500 text-white px-6 py-3 rounded-lg disabled:opacity-60"
        >
            {pending ? 'Sending...' : 'Send Message'}
        </button>
    );
}

function ContactForm() {
    // useActionState comes from react (not react-dom)
    const [state, formAction, isPending] = React.useActionState(
        submitContact,
        initialState
    );

    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
        >
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

            <p className="text-gray-600 mb-8">
                Send us a message and our team will respond shortly.
            </p>

            <form action={formAction} className="space-y-6" aria-busy={isPending}>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <input
                            name="firstName"
                            defaultValue={state.values?.firstName}
                            placeholder="First Name"
                            className="w-full border p-3 rounded-lg"
                        />
                        {state.errors?.firstName && (
                            <p className="text-red-500 text-sm mt-1">
                                {state.errors.firstName}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            name="lastName"
                            defaultValue={state.values?.lastName}
                            placeholder="Last Name"
                            className="w-full border p-3 rounded-lg"
                        />
                        {state.errors?.lastName && (
                            <p className="text-red-500 text-sm mt-1">
                                {state.errors.lastName}
                            </p>
                        )}
                    </div>
                </div>

                <div>
                    <input
                        name="email"
                        type="email"
                        defaultValue={state.values?.email}
                        placeholder="Email Address"
                        className="w-full border p-3 rounded-lg"
                    />
                    {state.errors?.email && (
                        <p className="text-red-500 text-sm mt-1">
                            {state.errors.email}
                        </p>
                    )}
                </div>

                <div>
          <textarea
              name="message"
              rows={5}
              defaultValue={state.values?.message}
              placeholder="Your Message"
              className="w-full border p-3 rounded-lg"
          />
                    {state.errors?.message && (
                        <p className="text-red-500 text-sm mt-1">
                            {state.errors.message}
                        </p>
                    )}
                </div>

                <SubmitButton />

                {state.success && (
                    <p className="text-green-600 mt-2">
                        {state.message || 'Thanks! Your message has been sent.'}
                    </p>
                )}
            </form>
        </motion.div>
    );
}


export default ContactForm