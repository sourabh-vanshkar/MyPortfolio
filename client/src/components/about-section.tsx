import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Lightbulb, Rocket, GraduationCap, Trophy, Drama, Video, Speech, LucideTrophy } from "lucide-react";

export function AboutSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Developer mindset: Fast, focused, and functional
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">The Developer Journey</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I completed my B.Tech in Computer Science & Engineering from GLA University in 2025.
              As a dedicated Software Developer, I am passionate about crafting efficient, 
              user-friendly, and impactful digital solutions. I believe that technology is a powerful tool for solving real-world problems 
              and improving everyday lives.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Driven by curiosity and a problem-solving mindset, I aim to contribute to meaningful 
              projects that have a positive impact. Whether working independently or in collaboration 
              with a team, I strive to write code that is not only functional but also purposeful and maintainable.
            </p>

            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <Badge variant="secondary" className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2">
                  <Code className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium">Clean Code Advocate</span>
                </Badge>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Badge variant="secondary" className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-4 py-2">
                  <Lightbulb className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-medium">Problem Solver</span>
                </Badge>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Badge variant="secondary" className="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 px-4 py-2">
                  <Rocket className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-medium">Innovation Focused</span>
                </Badge>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-50 dark:bg-slate-900">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Education
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium">GLA University</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Bachelor of Technology - Computer Science & Engineering
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">Expected May 2025</p>
                  </div>
                  <div>
                    <h5 className="font-medium"> Intermediate</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                       Board of Higher Secondary Education, Khaniyadhana, Madhya Pradesh
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">Expected May 2020</p>
                  </div>
                  <div>
                    <h5 className="font-medium">High School</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                       Board of High Secondary Education, Khaniyadhana, Madhya Pradesh 
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">Expected May 2018</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 dark:bg-slate-900">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  Recent Achievements
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">GLA Hackathon - Finalist</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">Kavach Hackathon - Internal Finalist</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Speech className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">SRIJAN - Deputy Head Organizer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="h-4 w-4 text-blue-500" />
                    <span className="text-sm"> Literario Club - Video Editor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Drama className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Vihiti Theatre Club - Designing Head</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}