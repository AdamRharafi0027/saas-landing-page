"use client";
import Button from "@/components/ui/Button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";

const Hero = () => {
  const heading = "Turn Rough Ideas Into Polished Content";
  const headingWords = heading.split(" ");

  const para =
    "Draftly uses AI to help teams write faster, better, and smarter. Transform rough drafts into professional content in seconds.";
  const paraWords = para.split(" ");

  return (
    <>
      <section className="lg:pt-20 flex flex-col text-center lg:flex-row items-center justify-center lg:justify-evenly min-h-screen w-full overflow-x-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-[#7C3AED]/20 to-cyan-500/20 rounded-full blur-3xl" />
        {/* Left Side */}
        <aside className=" text-white w-full max-w-lg  px-4 lg:px-0 -mt-20 lg:mt-0">
          <div className="flex flex-col gap-8 lg:gap-10">
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
          </div>
          {/* buttons */}
          <div className="flex items-center mt-10 gap-5 flex-col lg:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
            >
              <Button
                classname={
                  "py-4  text-white bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 text-[15px] "
                }
              >
                Starting Writing Free
                <span>
                  <ArrowRight />
                </span>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
            >
              <Button
                classname={
                  "px-8 py-4 rounded-xl bg-white/5 text-white font-semibold hover:bg-white/10 border border-white/10 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                }
              >
                {" "}
                <span>
                  <Play />
                </span>{" "}
                Watch Demo
              </Button>
            </motion.div>
          </div>
        </aside>
        {/* Right side */}
        <aside>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex"
          >
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl border-amber-300 border w-130 mt-60 ">
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
        </aside>
      </section>
    </>
  );
};

export default Hero;
