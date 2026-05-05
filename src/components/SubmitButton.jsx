import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";


export function SubmitButton({ disabled: captchaNotDone = false}) {
    const { pending } = useFormStatus();
    const isDisabled = pending || captchaNotDone;

    return (
        <div className="w-full">
            <motion.button
                type="submit"
                disabled={pending}
                whileTap={{ scale: 0.97 }}
                whileHover={!pending ? { scale: 1.02 } : {}}
                className="w-full relative flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden"
            >
                {/* Spinner */}
                {pending && (
                    <motion.span
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                    />
                )}

                {/* Text */}
                <span className={"flex items-center justify-center"}>
                    {pending ? "Sending..." : "Send Message"}
                    <FiSend className="w-4 h-4 ml-4" />
                </span>

                {!isDisabled && (
                    <motion.span
                        className="absolute inset-0 bg-white opacity-10"
                        initial={{ x:"-100%" }}
                        whileHover={{ x: "100%"}}
                        transition={{ duration: 0.6 }}
                    />
                )}

                
            </motion.button>
        </div>
    );
}