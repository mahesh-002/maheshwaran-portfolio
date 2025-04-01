
import React from 'react';
import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="section bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-6"></div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Personal Details</h3>
            <p><strong>Full Name:</strong> Maheshwaran M</p>
            <p><strong>Contact:</strong> +91 78719 39594</p>
            <p><strong>Email:</strong> <a href="mailto:dmmahesh002@outlook.com" className="text-indigo-500 hover:underline">dmmahesh002@outlook.com</a></p>
            <p className="mt-4">
              "Passionate Mobile & Web App Developer with expertise in Flutter, Firebase, and Java. Eager to contribute 
              my technical skills and innovation to a dynamic team while continuously learning and growing in software 
              development. Committed to delivering impactful solutions that drive both personal and organizational success."
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold">Education</h3>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>B.Tech in Information Technology</strong> - Tagore Engineering College, Chennai (2020 – 2024) | <strong>CGPA: 8.4</strong></li>
                <li><strong>Higher Secondary Certificate (HSC)</strong> - Saraswathi Vidyalaya Matric Higher Secondary School, Muthupet (2019 – 2020) | <strong>57.16%</strong></li>
                <li><strong>Secondary School Leaving Certificate (SSLC)</strong> - Victory Matriculation Higher Secondary School, Panchanathikulam (2017 – 2018) | <strong>74%</strong></li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Internships</h3>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Android App Development Intern</strong> - NSIC, Chennai (July 10 – July 17, 2023) (Short-term training program)</li>
                <li><strong>Java Full Stack Development</strong> - QSpiders, Chennai (Jan – Dec, 2024) (Completed Training in Java, SQL, Web Development)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block w-full max-w-md">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Download Resume</h3>
              <a 
                href="https://drive.google.com/file/d/16suvVz_uJ8MgvOQYzM_mrK6SBE0nOoDc/view?usp=drive_link" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium transition duration-300"
              >
                Download CV
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
