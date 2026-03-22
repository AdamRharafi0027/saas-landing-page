"use client";
import Button from "@/components/ui/Button";
import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

const Hero = () => {


const heading = "Turn Rough Ideas Into Polished Content";
  const headingWords = heading.split(" ");

  const para =
    "Draftly uses AI to help teams write faster, better, and smarter. Transform rough drafts into professional content in seconds.";
  const paraWords = para.split(" ");


  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#09090B] pt-24">
      {/* Background gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#7C3AED]/20 to-cyan-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-[1440px] mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 text-white">
           <h1 className=" text-3xl md:text-5xl lg:w-150 lg:text-7xl font-bold flex flex-wrap gap-2 lg:gap-4 justify-center lg:justify-start">
              {headingWords.map((word, wordIndex) => (
                <span key={wordIndex} className="flex">
                  {word.split("").map((letter, letterIndex) => {
                    const globalIndex =
                      headingWords
                        .slice(0, wordIndex)
                        .reduce((acc, w) => acc + w.length, 0) +
                      wordIndex +
                      letterIndex;
                    return (
                      <motion.span
                        key={letterIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: globalIndex * 0.03,
                          duration: 0.5,
                        }}
                      >
                        {letter}
                      </motion.span>
                    );
                  })}
                </span>
              ))}
            </h1>
            <p className="text-gray-400 text-base md:text-lg flex flex-wrap gap-1 lg:gap-2 justify-center lg:justify-start">
              {paraWords.map((word, wordIndex) => (
                <span key={wordIndex} className="flex">
                  {word.split("").map((letter, letterIndex) => {
                    const globalIndex =
                      paraWords
                        .slice(0, wordIndex)
                        .reduce((acc, w) => acc + w.length, 0) +
                      wordIndex +
                      letterIndex;
                    return (
                      <motion.span
                        key={letterIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: globalIndex * 0.01,
                          duration: 0.3,
                        }}
                      >
                        {letter}
                      </motion.span>
                    );
                  })}
                </span>
              ))}
            </p>
          

            <div className="flex flex-wrap gap-4">
              <Link href={"/signup"}>
              <Button classname="px-8 py-4 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] text-white font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 flex items-center gap-2">
                Start Writing Free
                <ArrowRight className="w-5 h-5" />
              </Button>
              </Link>
              <Button classname="px-8 py-4 rounded-xl bg-white/5 text-white font-semibold hover:bg-white/10 border border-white/10 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right side - Floating UI mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-white/20 rounded w-3/4 animate-pulse" />
                    <div className="h-4 bg-white/20 rounded w-full" />
                    <div className="h-4 bg-white/20 rounded w-5/6" />
                    <div className="h-4 bg-gradient-to-r from-[#7C3AED] to-cyan-400 rounded w-4/5" />
                  </div>
                </div>
              </div>

              {/* Floating element */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-cyan-400 to-[#7C3AED] rounded-full blur-2xl opacity-60"
              />

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/20 to-cyan-500/20 rounded-2xl blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
