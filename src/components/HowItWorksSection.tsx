import { motion } from "framer-motion";
import { Settings, Palette, Dumbbell, TrendingUp } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Settings,
    title: "Define Your Goals",
    description: "Tell us what skill you want to master. Our AI helps you design the perfect course structure through a comprehensive planning phase.",
  },
  {
    step: "02",
    icon: Palette,
    title: "Build Your World",
    description: "Customize your virtual training environment and create your ideal AI coach with any personality and expertise you desire.",
  },
  {
    step: "03",
    icon: Dumbbell,
    title: "Train in Real-Time",
    description: "Your avatar mirrors your movements while your AI coach provides instant feedback on form and technique.",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Track & Evolve",
    description: "Watch your progress with detailed analytics. The environment adapts dynamically via MCP server calls to maximize your learning.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            How <span className="gradient-text">It Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From goal setting to mastery, our platform guides you through every step of your journey.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`flex items-center gap-8 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
            >
              <div className={`flex-1 ${index % 2 === 1 ? "text-right" : ""}`}>
                <div className="glass-card p-8 inline-block">
                  <div className="flex items-center gap-4 mb-4" style={{ flexDirection: index % 2 === 1 ? "row-reverse" : "row" }}>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-mono text-primary">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
              
              {/* Center dot */}
              <div className="hidden md:flex w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 relative">
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
              </div>
              
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
