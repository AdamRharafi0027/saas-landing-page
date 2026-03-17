"use client"
import { motion } from "motion/react";
import { PenTool, Sparkles, CheckCircle } from "lucide-react";

const  HowItWorks =()=> {
  const steps = [
    {
      number: "01",
      icon: PenTool,
      title: "Share Your Idea",
      description: "Start with a rough thought, bullet points, or just a topic. No need to be perfect."
    },
    {
      number: "02",
      icon: Sparkles,
      title: "AI Works Magic",
      description: "Our AI analyzes your input and generates polished, professional content instantly."
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Refine & Publish",
      description: "Review, edit, and customize. Then publish or export your finished content."
    }
  ];

  return (
    <section className="bg-[#09090B] py-32 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-5xl font-bold text-white">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Three simple steps to transform your ideas into professional content
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-24 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent hidden lg:block" />
          <div className="absolute top-24 left-[16.66%] right-[16.66%] h-[2px] border-t-2 border-dashed border-white/20 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center space-y-6"
              >
                {/* Number badge */}
                <div className="relative inline-block">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] flex items-center justify-center relative z-10">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-[#7C3AED] flex items-center justify-center font-bold text-white text-lg z-20 border-4 border-[#09090B]">
                    {step.number}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default HowItWorks