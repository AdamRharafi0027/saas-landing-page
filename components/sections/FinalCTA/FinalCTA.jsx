"use client"
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
const FinalCTA=() =>{
  return (
    <section className="relative bg-[#09090B] py-32 overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/20 via-cyan-500/20 to-[#7C3AED]/20 blur-3xl opacity-50" />
      
      <div className="relative max-w-[1440px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#7C3AED]/20 to-cyan-500/20 border border-[#7C3AED]/30 text-[#A78BFA] text-sm font-medium">
              ✨ Join 50,000+ teams already using Draftly
            </div>
          </motion.div>

          {/* Headline */}
          <h2 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
            Ready to Write
            <span className="block bg-gradient-to-r from-[#7C3AED] to-cyan-400 bg-clip-text text-transparent">
              10x Faster?
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start creating professional content in seconds. No credit card required.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href={"/signup"} >
              <Button classname="px-12 py-5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] text-white text-lg font-semibold hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-3 mx-auto">
                Get Started Free
                <ArrowRight className="w-6 h-6" />
              </Button>
            </Link>
          </motion.div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free forever plan</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No credit card needed</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default FinalCTA