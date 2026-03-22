"use client"
import { motion } from "motion/react";
import { Star } from "lucide-react";

const Testimonials=()=> {
  const testimonials = [
    {
      quote: "Draftly has completely transformed how our content team works. What used to take hours now takes minutes. The quality is incredible.",
      name: "Sarah Chen",
      role: "Content Director at TechCorp",
      avatar: "https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFuJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzczMzkyMjUyfDA&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      quote: "The AI understands context better than any tool I've used. It's like having a professional writer on the team 24/7.",
      name: "Marcus Rodriguez",
      role: "Founder & CEO at StartupLabs",
      avatar: "https://images.unsplash.com/photo-1769636930047-4478f12cf430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG1hbiUyMGVudHJlcHJlbmV1cnxlbnwxfHx8fDE3NzM0MTI3NTN8MA&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      quote: "We've increased our content output by 300% while maintaining quality. Draftly is an absolute game-changer for our marketing team.",
      name: "Alex Kim",
      role: "Marketing Lead at GrowthCo",
      avatar: "https://images.unsplash.com/photo-1604783020105-a1c1a856a55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGRpdmVyc2UlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NzM0MTAyMjF8MA&ixlib=rb-4.1.0&q=80&w=400"
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
            Loved by Thousands of Teams
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See what our customers have to say about Draftly
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#7C3AED]/30 transition-all duration-300 space-y-6"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#7C3AED] text-[#7C3AED]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials