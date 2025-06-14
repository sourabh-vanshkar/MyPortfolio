import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Music, Film, MessageSquare, Shield } from "lucide-react";

const projects = [
  {
    title: "Online Music App",
    description: "Developed using JavaScript, CSS, React, React Native, Expo, and Firebase for a complete music streaming experience.",
    icon: Music,
    gradient: "from-blue-500 via-purple-500 to-cyan-500",
    technologies: ["React Native", "Firebase", "Expo"],
    colors: ["blue", "green", "purple"]
  },
  {
    title: "Movie Recommendation System",
    description: "Developed using Python, focusing on data analysis and machine learning techniques for personalized recommendations.",
    icon: Film,
    gradient: "from-orange-500 via-red-500 to-pink-500",
    technologies: ["Python", "Machine Learning", "Data Analysis"],
    colors: ["yellow", "green", "blue"]
  },
  {
    title: "Real Time Chat Application",
    description: "Developed using Socket.io, Node.js, and React.js with features like private messaging and live typing indicators.",
    icon: MessageSquare,
    gradient: "from-green-500 via-teal-500 to-blue-500",
    technologies: ["Socket.io", "React.js", "Node.js"],
    colors: ["green", "blue", "gray"]
  },
  {
    title: "Women Safety Application",
    description: "Developed a Mobile Women Safety Application that allows users to send real-time emergency alerts with live location.",
    icon: Shield,
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
    technologies: ["Mobile App", "GPS Tracking", "Real-time Alerts"],
    colors: ["red", "blue", "green"]
  }
];

const colorVariants = {
  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  green: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  yellow: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
  red: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
  gray: "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300"
};

export function ProjectsSection() {
  const handleProjectClick = (title: string) => {
    // In a real implementation, this would navigate to project details
    console.log(`Viewing project: ${title}`);
  };

  const handleGithubClick = (title: string) => {
    // In a real implementation, this would open the GitHub repository
    console.log(`Opening GitHub for: ${title}`);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Showcasing innovative solutions and technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-50 dark:bg-slate-900 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group h-full">
                  {/* Project image placeholder with gradient */}
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <IconComponent className="text-white text-4xl group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className={`text-xs ${colorVariants[project.colors[techIndex] as keyof typeof colorVariants]}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Button
                        variant="ghost"
                        onClick={() => handleProjectClick(project.title)}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium text-sm p-0 h-auto"
                      >
                        <ExternalLink className="mr-1 h-4 w-4" />
                        View Project
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleGithubClick(project.title)}
                        className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 h-8 w-8"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
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
