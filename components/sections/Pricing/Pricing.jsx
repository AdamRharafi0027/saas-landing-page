"use client"
import { motion } from "motion/react";
import { Check, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
const Pricing=() =>{
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out Draftly",
      features: [
        "5,000 words per month",
        "Basic AI writing tools",
        "3 document storage",
        "Community support",
        "Export to PDF"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "For professional writers and creators",
      features: [
        "Unlimited words",
        "Advanced AI models",
        "Unlimited documents",
        "Priority support",
        "Export to all formats",
        "Team collaboration",
        "Custom templates"
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Team",
      price: "$99",
      period: "per month",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Up to 10 team members",
        "Admin dashboard",
        "Advanced analytics",
        "SSO & security",
        "Dedicated support",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="bg-[#09090B] py-32">
      <div className="max-w-[1440px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-5xl font-bold text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Always know what you'll pay.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-br from-[#7C3AED]/20 to-[#A78BFA]/10 border-2 border-[#7C3AED] scale-105"
                  : "bg-gradient-to-br from-white/10 to-white/5 border border-white/10"
              } backdrop-blur-xl transition-all duration-300 hover:scale-105`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#7C3AED] to-cyan-400 text-white text-sm font-semibold flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{plan.period}</p>
                </div>

                <Button
                  classname={` w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] text-white hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                  }`}
                >
                  {plan.cta}
                </Button>

                <div className="pt-6 space-y-4 border-t border-white/10">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Pricing