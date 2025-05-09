import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { motion } from 'motion/react';



const Contact = () => {

  
const [result, setResult] = useState("");
 
const onSubmit = async (event) => {
event.preventDefault();
setResult("Sending....");
const formData = new FormData(event.target);
formData.append("access_key", "3604a74b-9be6-4ae6-b8d7-87e9589b0953");
const response = await fetch("https://api.web3forms.com/submit", {
method: "POST",
body: formData
});
const data = await response.json();
if (data.success) {
setResult("Form Submitted Successfully");
event.target.reset();
} else {
console.log("Error", data);
setResult(data.message);
}
}


  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] 
    bg-no-repeat bg-center bg-[length:90%_auto]
    dark:bg-none'>

      <motion.h4
       initial={{y: -20, opacity: 0}}
       whileInView={{y: 0, opacity: 1}}
       transition={{delay: 0.3, duration: 1}}
      className='text-center mb-2 text-lg font-ovo'>
        Connect with me </motion.h4>

      <motion.h2 
      initial={{y: -20, opacity: 0}}
       whileInView={{y: 0, opacity: 0.5}}
       transition={{delay: 0.3, duration: 1}}
       className="text-center text-5xl font-ovo">
        Get in touch    </motion.h2>

        <motion.p 
         initial={{y: -20, opacity: 0}}
         whileInView={{y: 0, opacity: 1}}
         transition={{delay: 0.7, duration: 1}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'> 
          I'd love to hear from you! If you have any questions, comments, or feedback, 
          please use the form below.
        </motion.p>  
        <motion.form onSubmit={onSubmit}  className='max-w-2xl mx-auto'> 
          <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
             
             <motion.input 
             name='name'
              initial={{y: -20, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{delay: 0.3, duration: 1}}
             type='text' placeholder='Enter your name' required
             className='flex-1 p-3 outline-nine border-[0.5px] border-gray-400
            rounded-md bg-white dark:bg-darkhover/30 dark:border-white/90'/>

            <motion.input 
            name='email'
             initial={{x: 50, opacity: 0}}
             whileInView={{x: 0, opacity: 1}}
             transition={{delay: 1.2, duration: 0.5}} type='email' placeholder='Enter your email' required
            className='flex-1 p-3 outline-nine border-[0.5px] border-gray-400
            rounded-md bg-white dark:bg-darkhover/30 dark:border-white/90'/>

          </div>
          <motion.textarea 
          name='message'
           initial={{y: 100, opacity: 0}}
           whileInView={{y: 0, opacity: 1}}
           transition={{delay: 1.3, duration: 0.5}}
          rows='6' placeholder='Enter your message' required
          className='w-full p-4 outline-none border-[0.5px] border-gray-400
          rounded-md bg-white mb-6 dark:bg-darkhover/30 dark:border-white/90 '>
          </motion.textarea>

          
           <motion.button
            whileHover={{scale: 1.05}}
            transition={{duration:0.3 }}
           type='submit'
           value='send'
           className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80
           text-white rounded-full mx-auto hover:black duration-500 
           dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkhover'
           > Submit now  <Image src={assets.right_arrow_white} alt='right arrow' className='w-4'/> </motion.button> 
        < p className='mt-4'> {result}</p>
        </motion.form> 
    </motion.div> 
  )
}

export default Contact
