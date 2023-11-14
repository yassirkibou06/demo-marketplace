import { useState } from 'react';
import { motion } from 'framer-motion';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { Cross2Icon } from '@radix-ui/react-icons';

const transition = { type: 'tween', ease: 'easeInOut', duration: 0.3 };

const ShowLogin = ({ show, setShow }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleForm = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <motion.div
        transition={{ delay: 0.7, ease: "easeInOut" }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        onClick={() => setShow(!show)}
        className="bg-black/80 w-full h-screen fixed left-0 top-0 z-[999]"></motion.div>
      <motion.div
        transition={{ delay: 0.5, ease: "easeInOut" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, duration: 0.2 }}
        className={` z-[1000] bg-white rounded-lg w-[440px] md:w-[450px] ${isOpen ? "h-[580px]" : "h-[550px]"} fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden`}>
        <Cross2Icon onClick={() => setShow(!show)} className='md:hidden z-[99999] cursor-pointer absolute right-3 top-3 w-6 h-6' />
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={{
            x: isOpen ? -400 : 0,
            opacity: isOpen ? 0 : 1,
          }}
          exit={{ x: isOpen ? 100 : 0, opacity: 0 }}
          transition={transition}
          className={`absolute left-0`}
        >
          <LoginForm handleToggleForm={handleToggleForm} />
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={{
            x: isOpen ? 0 : 500,
            opacity: isOpen ? 1 : 0,
          }}
          exit={{ x: 200, opacity: 0 }}
          transition={transition}
        >
          <RegisterForm handleToggleForm={handleToggleForm} />
        </motion.div>
      </motion.div>
    </>
  );
}

export default ShowLogin;
