import { useState } from 'react';
import type { NextPage } from 'next';
import NewSlider from '../components/NewSlider'
import { motion, useIsPresent } from 'framer-motion';
import { MenuIcon, XmarkIcon } from '../icons/icons'
import Navbar from '@/components/Navbar';

const Home: NextPage = () => {
  const isPresent = useIsPresent();
  const [isVisible, setVisible] = useState(false);
  const [menu, setMenu] = useState(false)

  return (
    <>
      <Navbar menu={menu} setMenu={setMenu} />
      <main className='h-[calc(100vh-43px)]  bg-neutral-900 text-white'>
        <div className='flex justify-center items-center overflow-hidden max-sm:p-8 max-500:mx-6'>
            <NewSlider />
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0, transition: { duration: 1.5, ease: "easeInOut", delay: 2.5 } }}
            exit={{ scaleY: 1, transition: { duration: 1.5, ease: "easeInOut", delay: 2 } }}
            style={{ originY: isPresent ? 0 : 1 }}
            className="fixed top-0 left-0 right-0 bottom-0 z-[2] bg-gray-400 privacy-screen flex justify-center items-center"
          >
            <h3 className='flex gap-4'>
              <motion.span
                initial={{ opacity: 0, x: -300 }}
                animate={{
                  opacity: isVisible ? 0 : 1,
                  x: 0,
                  y: isVisible ? -45 : 0,
                  transition: { duration: 0.95, delay: 0.05, ease: [0.08, 0.82, 0.17, 1] }
                }}
                transition={{ duration: 3 }}
                onAnimationComplete={() => setTimeout(() => { setVisible(true) }, 1000)}
              >
                Photographer
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -300 }}
                animate={{
                  opacity: isVisible ? 0 : 1,
                  x: 0,
                  y: isVisible ? -45 : 0,
                  transition: { duration: 0.95, delay: 0.4, ease: [0.08, 0.82, 0.17, 1] }
                }}
                transition={{ duration: 3, delay: 4 }}
              >
                John Doe
              </motion.span>
            </h3>
          </motion.div>
        </div>
      </main>
    </>
  )
}

export default Home;