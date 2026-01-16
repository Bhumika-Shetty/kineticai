import { motion } from "framer-motion";
import { Camera, Gamepad2, Bot, Target } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Live Motion Mirroring",
    description: "Your on-screen avatar copies your movements exactly in real-time using just a standard camera, powered by OpenPose and DensePose technology.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Gamepad2,
    title: "Virtual Training Arenas",
    description: "Immerse yourself in realistic digital spaces—boxing rings, yoga studios, gyms—rendered with Stable Diffusion and ControlNets for high-fidelity textures.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Bot,
    title: "Custom AI Experts",
    description: "Design a coach with any personality or specialty that actually 'sees' and reacts to your performance with personalized feedback and encouragement.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Target,
    title: "Real-Time Form Correction",
    description: "Advanced AI analyzes your movements instantly and provides immediate feedback to fix your technique, leveraging high-performance AI pipelines.",
    gradient: "from-orange-500 to-red-500",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="absolute inset-0 feature-glow opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Master Any Skill With
            <span className="gradient-text"> AI Precision</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform combines cutting-edge AI with immersive environments to create 
            the ultimate personalized training experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-8 h-full hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
