import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Smartphone, Database, Settings, Brain } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "blue",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 95 }
    ]
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "green",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 85 },
      { name: "Firebase", level: 75 }
    ]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "purple",
    skills: [
      { name: "React Native", level: 80 },
      { name: "Java", level: 75 },
      { name: "Android Studio", level: 70 }
    ]
  },
  {
    title: "Database & Cloud",
    icon: Database,
    color: "yellow",
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 80 },
      { name: "Firebase", level: 75 }
    ]
  },
  {
    title: "Tools & Design",
    icon: Settings,
    color: "red",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Figma", level: 70 },
      { name: "VS Code", level: 95 }
    ]
  },
  {
    title: "Professional Skills",
    icon: Brain,
    color: "cyan",
    skills: [
      { name: "Problem Solving", level: 95 },
      { name: "Communication", level: 85 },
      { name: "Leadership", level: 80 }
    ]
  }
];

const colorMap = {
  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-600",
  green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-600",
  purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-600",
  yellow: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border-yellow-600",
  red: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-red-600",
  cyan: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 border-cyan-600"
};

function SkillBar({ skill, color, delay }: { skill: { name: string; level: number }, color: string, delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => {
            setAnimatedWidth(skill.level);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [skill.level, delay, isVisible]);

  return (
    <div ref={ref} className="skill-item">
      <div className="flex justify-between text-sm mb-1">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-1500 ease-out ${color === 'blue' ? 'bg-blue-600' : 
            color === 'green' ? 'bg-green-600' : 
            color === 'purple' ? 'bg-purple-600' : 
            color === 'yellow' ? 'bg-yellow-600' : 
            color === 'red' ? 'bg-red-600' : 'bg-cyan-600'}`}
          style={{ width: `${animatedWidth}%` }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Tools and technologies I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorMap[category.color as keyof typeof colorMap].split(' ')[0]} ${colorMap[category.color as keyof typeof colorMap].split(' ')[1]}`}>
                        <IconComponent className={`h-5 w-5 ${colorMap[category.color as keyof typeof colorMap].split(' ')[2]} ${colorMap[category.color as keyof typeof colorMap].split(' ')[3]}`} />
                      </div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                    </div>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <SkillBar 
                          key={skillIndex} 
                          skill={skill} 
                          color={category.color}
                          delay={skillIndex * 200}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
