import { useState } from 'react';
import type { NextPage } from 'next';
import NewSlider from '../components/NewSlider'
import { motion, useIsPresent } from 'framer-motion';


const Home: NextPage = () => {
  const isPresent = useIsPresent();
  const [isVisible, setVisible] = useState(false);

  return (
    <main className='flex justify-center items-center overflow-hidden min-h-screen max-sm:p-8 relative max-500:mx-6'>
      <NewSlider />
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0, transition: { duration: 0.9, ease: "easeInOut", delay: 2 } }}
        exit={{ scaleY: 1, transition: { duration: 0.9, ease: "easeInOut", delay: 2 } }}
        style={{ originY: isPresent ? 0 : 1 }}
        className="fixed top-0 left-0 right-0 bottom-0 z-[2] bg-gray-400 privacy-screen flex justify-center items-center"
      >
        <h3 className='flex gap-2'>
          <motion.span
            initial={{ opacity: 0, x: -300 }}
            animate={{
              opacity: isVisible ? 0 : 1,
              x: 0,
              y: isVisible ? -60 : 0,
              transition: { duration: 0.95, delay: 0.1, ease: [0.08, 0.82, 0.17, 1] }
            }}
            transition={{ duration: 3 }}
            onAnimationComplete={() => setVisible(true)}
          >
            Photographer
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -300 }}
            animate={{
              opacity: isVisible ? 0 : 1,
              x: 0,
              y: isVisible ? -60 : 0,
              transition: { duration: 0.95, delay: 0.1, ease: [0.08, 0.82, 0.17, 1] }
            }}
            transition={{ duration: 3 }}
            onAnimationComplete={() => setVisible(true)}
          >
            -
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -300 }}
            animate={{
              opacity: isVisible ? 0 : 1,
              x: 0,
              y: isVisible ? -60 : 0,
              transition: { duration: 0.95, delay: 0.2, ease: [0.08, 0.82, 0.17, 1] }
            }}
            transition={{ duration: 3 }}
            onAnimationComplete={() => setVisible(true)}
          >
            John Doe
          </motion.span>
        </h3>
      </motion.div>
    </main>
  )
}

export default Home;