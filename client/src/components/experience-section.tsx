import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Android Developer",
    company: "Altrun Techs",
    duration: "Jun 2023 - Jul 2023",
    achievements: [
      "Developed an Online Music App using React Native and Firebase",
      "Integrated Firebase for real-time data management and cloud storage",
      "Implemented user authentication and music streaming features"
    ],
    side: "right"
  },
  {
    title: "Web Development Intern",
    company: "Unified Mentor",
    duration: "Jun 2024 - Jul 2024",
    achievements: [
      "Developed responsive web applications using HTML, CSS, JavaScript, and React",
      "Implemented real-time features in chat applications using React and Socket.io",
      "Integrated Firebase for authentication and cloud storage solutions"
    ],
    side: "left"
  },
  {
    title: "Python Programming",
    company: "YBI Foundation",
    duration: "Jun 2024 - Jul 2024",
    achievements: [
      "Developed a Movie Recommendation System using Python",
      "Focused on data analysis and machine learning techniques",
      "Implemented algorithms for personalized movie recommendations"
    ],
    side: "right"
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Building experience through hands-on development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200 dark:bg-blue-800"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="relative flex items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 border-4 border-white dark:border-slate-900 rounded-full z-10"></div>

                <div className={`ml-16 md:ml-0 ${experience.side === 'left' ? 'md:w-1/2 md:pr-8 md:text-right' : 'md:w-1/2 md:ml-auto md:pl-8'}`}>
                  <Card className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <CardContent className="p-6">
                      <div className={`flex ${experience.side === 'left' ? 'md:justify-end' : ''} items-center gap-2 mb-2`}>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          {experience.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                        {experience.company}
                      </p>
                      <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-1">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i}>• {achievement}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
