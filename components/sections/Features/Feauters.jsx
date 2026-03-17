"use client"
import { motion } from "motion/react";
import { Zap, Brain, Users, Lock } from "lucide-react";

 const  Features = ()=> {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Writing",
      description: "Generate high-quality content in seconds. Our AI understands context and delivers polished drafts instantly."
    },
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced language models trained on millions of documents to understand your voice and style."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly. Share, edit, and refine content with your entire team in real-time."
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance. Your data stays private and secure, always."
    }
  ];

  return (
    <section id="features" className="bg-[#09090B] py-32">
      <div className="max-w-[1440px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-5xl font-bold text-white">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to create exceptional content, faster than ever before
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#7C3AED]/50 transition-all duration-300 cursor-pointer"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 to-cyan-500/0 group-hover:from-[#7C3AED]/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-300" />
              
              <div className="relative space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Border glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-[#7C3AED]/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Features