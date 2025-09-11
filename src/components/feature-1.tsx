
import { useMemo } from 'react';
// import {
//   Shield,
//   BarChart3,
//   Rocket,
//   Terminal,
//   Paintbrush,
//   Cpu,
// } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

type Feature = {
  // icon: React.ReactNode;
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    // icon: <Shield className="h-6 w-6" />,
    title: 'introduce myself',
    desc: "Hi! I'm Hean Kimleng. I’m currently studying Full Stack Development at DICHI Academy and building my skills in both front-end and back-end technologies. I’m excited to gain hands-on experience and grow as a developer.",
  },
  {
    // icon: <BarChart3 className="h-6 w-6" />,
    title: 'Soft Skills',
    desc: "Strong Communicator, Problem Solver, Team Player, Adaptable, Time Manager.",
  },
  {
    // icon: <Rocket className="h-6 w-6" />,
    title: 'Programming Languages',
    desc: "HTML, CSS, JavaScript, TypeScript, Ruby.",
  },
  {
    // icon: <Terminal className="h-6 w-6" />,
    title: 'Frameworks',
    desc: "React, Express.js, Ruby on Rails, NestJS, Tailwind CSS.",
  },
  {
    // icon: <Paintbrush className="h-6 w-6" />,
    title: 'Tools',
    desc: "VS Code, Git, GitHub, Postman, npm, Vite, TablePlus",
  },
  {
    // icon: <Cpu className="h-6 w-6" />,
    title: 'Languages',
    desc: "Khmer (Mother Tongue), English (Intermediate), Chinese (HSK2)",
  },
];

export default function Feature1() {
  const reduceMotion = useReducedMotion();

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: reduceMotion ? 0 : 0.06,
          delayChildren: reduceMotion ? 0 : 0.05,
        },
      },
    }),
    [reduceMotion]
  );

  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: reduceMotion ? 0 : 14, scale: 0.98 },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: 'spring' as const, stiffness: 420, damping: 30, mass: 0.6 },
      },
      hover: {
        y: reduceMotion ? 0 : -4,
        scale: reduceMotion ? 1 : 1.01,
        transition: { type: 'spring' as const, stiffness: 420, damping: 26, mass: 0.5 },
      },
      tap: {
        scale: reduceMotion ? 1 : 0.995,
      },
    }),
    [reduceMotion]
  );

  // const iconWrapVariants = useMemo(
  //   () => ({
  //     initial: { rotate: 0 },
  //     hover: { rotate: reduceMotion ? 0 : 3 },
  //   }),
  //   [reduceMotion]
  // );

  return (
    <section id="about" className="relative py-14" >
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="relative mx-auto max-w-2xl sm:text-center">
          <h3 className="font-geist mt-4 text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl whitespace-nowrap overflow-hidden text-ellipsis">
            About Me
          </h3>
          {/* <p className="font-geist text-foreground/60 mt-3">
            From secure foundations and scalable infra to analytics, automation, and a developer-first toolkit.
          </p> */}
        </div>

        <hr className="bg-foreground/30 mx-auto mt-5 h-px w-1/2" />
        

        <motion.div
          className="relative mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.slice(0, 6).map((item, idx) => (
              <motion.li
                key={idx}
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
                className="group transform-gpu space-y-3 rounded-xl border bg-transparent p-5 transition-shadow duration-300 [box-shadow:0_-20px_80px_-20px_#7dd3fc2f_inset] hover:shadow-md"
              >
                <motion.div
                  // variants={iconWrapVariants}
                  // className="text-sky-600 w-fit transform-gpu rounded-full border p-4 transition-colors duration-300"
                >
                  {/* {item.icon} */}
                </motion.div>
                <h4 className="font-geist text-lg font-bold tracking-tighter">
                  {item.title}
                </h4>
                <p className="text-gray-500">{item.desc}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}


