import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20"
        >
          <div className="w-full h-full rounded-full border border-primary/30" />
          <div className="absolute inset-8 rounded-full border border-accent/30" />
          <div className="absolute inset-16 rounded-full border border-primary/20" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="glass-card glow-border p-12 md:p-16 rounded-3xl">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent mb-8"
            >
              <Zap className="w-10 h-10 text-primary-foreground" />
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              Ready to Transform
              <br />
              <span className="gradient-text">Your Training?</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Join thousands of athletes and enthusiasts who are already mastering 
              their skills with personalized AI coaching.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                Schedule Demo
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required • Start training in minutes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
