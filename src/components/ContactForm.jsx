'use client';

// import  {useActionformState} from 'react';
import {useFormStatus} from 'react-dom';
// import { submitContact } from '@/actions/actions'; // make sure this path is correct
import {motion} from 'framer-motion';
import * as actions from "@/actions";
import {useActionState, useRef, useState, useEffect} from "react";
import {SubmitButton} from "@/components/SubmitButton";
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { GiToken } from 'react-icons/gi';


// Initial state object



const errorAnimation = {
    hidden: {opacity: 0, y: -5},
    visible: {opacity: 1, y: 0},
};

const shake = {
    initial: {x: 0},
    animate: {
        x: [0, -5, 5, -5, 5, 0],
        transition: {duration: 0.3},
    },
};

function ContactForm() {

    // useActionState comes from react (not react-dom)
    // const [state, formAction, isPending] = React.useActionState(
    //     submitContact,
    //     initialState
    // );

    //TODO  Form State
    const [formState, action] = useActionState(actions.handleSubmit, {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        errors: {},
        values: {},
        success: false,
    });


    //captcha
    const [captchaToken, setcaptchaToken] = useState(null);
    const captchaRef = useRef(null);

    //reset captcha after successful submission
    useEffect(() => {
        if(formState.success){
            setcaptchaToken(null);
            captchaRef.current?.resetCaptcha();
        }
    }, [formState.success]);
    
    //reset after captcha error
    useEffect(() => {
        if (formState.errors?._captcha) {
            setcaptchaToken(null);
            captchaRef.current?.resetCaptcha();
        }
    }, [formState.errors?._captcha]);


    console.log("Form State ", formState)


    return (
        <motion.div
            initial={{opacity: 0, x: -40}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
            className="flex flex-col justify-center"
        >
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

            <p className="text-gray-600 mb-8">
                Send us a message and our team will respond shortly.
            </p>

            <form action={action} className="space-y-6">

                <input type='hidden' name='captchaToken' value={captchaToken || ""}/>

                <div className="grid md:grid-cols-2 gap-4">

                    {/*First Name */}
                    <motion.div
                        variants={formState.errors?.firstName ? shake : {}}
                        initial="initial"
                        animate={formState.errors?.firstName ? "animate" : ""}
                    >

                        <input
                            name="firstName"
                            defaultValue={formState?.values?.firstName}
                            placeholder="First Name"
                            className={`w-full border p-3 rounded-lg transition-all duration-300 
                            ${formState.errors?.firstName ? "border-red-500 ring-2 ring-red-300" : "focus:ring-2 focus:ring-sky-300"}`}
                        />

                        {formState.errors?.firstName && (
                            <motion.p
                                variants={errorAnimation}
                                initial="hidden"
                                animate="visible"
                                className="text-red-500 text-sm mt-1"
                            >
                                {formState.errors.firstName[0]}
                            </motion.p>
                        )}

                    </motion.div>

                    {/*Last Name*/}
                    <motion.div
                        variants={formState.errors?.lastName ? shake : {}}
                        initial="initial"
                        animate={formState.errors?.lastName ? "animate" : ""}
                    >

                        <input
                            name="lastName"
                            defaultValue={formState?.values?.lastName}
                            placeholder="Last Name"
                            className={`w-full border p-3 rounded-lg transition-all duration-300 
                            ${formState.errors?.lastName ? "border-red-500 ring-2 ring-red-300" : "focus:ring-2 focus:ring-sky-300"}`}
                        />

                        {formState.errors?.lastName && (
                            <motion.p
                                variants={errorAnimation}
                                initial="hidden"
                                animate="visible"
                                className="text-red-500 text-sm mt-1"
                            >
                                {formState.errors.lastName[0]}
                            </motion.p>
                        )}

                    </motion.div>

                </div>

                {/*  email Field  */}
                <motion.div
                    variants={formState.errors?.email ? shake : {}}
                    initial="initial"
                    animate={formState.errors?.email ? "animate" : ""}
                >

                    <input
                        name="email"
                        defaultValue={formState?.values?.email}
                        placeholder="Your Email"
                        className={`w-full border p-3 rounded-lg transition-all duration-300 
                            ${formState.errors?.email ? "border-red-500 ring-2 ring-red-300" : "focus:ring-2 focus:ring-sky-300"}`}
                    />

                    {formState.errors?.email && (
                        <motion.p
                            variants={errorAnimation}
                            initial="hidden"
                            animate="visible"
                            className="text-red-500 text-sm mt-1"
                        >
                            {formState.errors.email[0]}
                        </motion.p>
                    )}

                </motion.div>

                {/*TODO Message Field*/}
                <motion.div
                    variants={formState.errors?.message ? shake : {}}
                    initial="initial"
                    animate={formState.errors?.message ? "animate" : ""}
                >

                        <textarea
                            name="message"
                            rows={5}
                            defaultValue={formState?.values?.message}
                            placeholder="Your Message"
                            className={`w-full border p-3 rounded-lg transition-all duration-300 
                            ${formState.errors?.message ? "border-red-500 ring-2 ring-red-300" : "focus:ring-2 focus:ring-sky-300"}`}
                        />

                    {formState.errors?.message && (
                        <motion.p
                            variants={errorAnimation}
                            initial="hidden"
                            animate="visible"
                            className="text-red-500 text-sm mt-1"
                        >
                            {formState.errors.message[0]}
                        </motion.p>
                    )}

                </motion.div>

                <HCaptcha
                    sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY}
                    onVerify={(token) => setcaptchaToken(token)}
                    onExpire={() => setcaptchaToken(null)}
                    onError={() => setcaptchaToken(null)}
                    ref={captchaRef}
                />

                {formState.errors?._captcha && (
                   <motion.p variants={errorAnimation} initial="hidden" animate="visible" className='text-red-500 text-sm'>
                    {formState.errors._captcha[0]}
                   </motion.p>
                )}


                <SubmitButton disabled={!captchaToken} />

                {formState.errors?._form && (
                    <p className="text-red-500 text-sm">{formState.errors._form[0]}</p>
                )}

                {formState.success && (
                    <p className="text-green-600 mt-2">
                        {formState.message || 'Thanks! Your message has been sent.'}
                    </p>
                )}
            </form>
        </motion.div>
    );
}


export default ContactForm