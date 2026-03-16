"use client"
import { motion } from "motion/react";
const SocialProof = () => {
    const companies = ["Stripe", "Notion", "Vercel", "Linear", "Figma", "GitHub"]
  return (
    <>
        <section className="bg-[#09090B] py-16 border-y border-white/5 relative z-10 mt-20">
      <div className="max-w-[1440px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <p className="text-gray-500 uppercase tracking-wider text-sm">
            Trusted by teams at
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            {companies.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-2xl font-semibold text-gray-600 hover:text-gray-400 transition-colors grayscale opacity-60 hover:opacity-100"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </>
  )
}

export default SocialProof