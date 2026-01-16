import { motion } from "framer-motion";
import { Cpu, Eye, Layers, Wifi } from "lucide-react";

const technologies = [
  {
    icon: Eye,
    name: "OpenPose & DensePose",
    description: "Advanced pose estimation for precise motion tracking",
  },
  {
    icon: Layers,
    name: "Stable Diffusion",
    description: "AI-generated immersive training environments",
  },
  {
    icon: Cpu,
    name: "ControlNets",
    description: "High-fidelity texture and scene generation",
  },
  {
    icon: Wifi,
    name: "MCP Server",
    description: "Real-time environmental modifications",
  },
];

const TechSection = () => {
  return (
    <section id="technology" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Built on <span className="gradient-text">Cutting-Edge Tech</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Powered by the latest advances in AI, computer vision, and generative models
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <tech.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-2">{tech.name}</h3>
              <p className="text-xs text-muted-foreground">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;