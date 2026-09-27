import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import WhatsAppButton from '../components/shared/WhatsAppButton'

function NotFound() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f6f2] text-neutral-950">
      <Navbar />
      <main>
        <section className="flex min-h-[70svh] items-center bg-[#f7f6f2]">
          <div className="jp-container w-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-3xl py-24 text-center sm:py-32"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a47d48] sm:text-xs">
                Page not found
              </p>
              <h1 className="mt-5 font-['Manrope'] text-6xl font-800 tracking-[-0.06em] sm:text-8xl">
                404
              </h1>
              <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-neutral-500 sm:text-base">
                The page you are looking for does not exist or may have moved.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/"
                  className="group inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800"
                >
                  <ArrowLeft size={16} />
                  Back to JP Wings Group
                </Link>
                <Link
                  to="/construction"
                  className="group inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-950 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-950"
                >
                  Explore Construction
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default NotFound
