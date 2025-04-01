
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectPage = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Hospital Management Web App',
      description: 'A web application for managing hospital operations and patient records.',
      image: '',
      category: 'personal',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/mahesh-002/Hospital-Management.git'
    },
    {
      id: 2,
      title: 'E-commerce Web App',
      description: 'A complete e-commerce solution with product listings, cart and checkout functionality.',
      image: '',
      category: 'personal',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/mahesh-002/Ecommerce-website.git'
    },
    {
      id: 3,
      title: 'Ohm Shield (Website)',
      description: 'A professional website for Ohm Shield company.',
      image: '',
      category: 'professional',
      technologies: ['WordPress', 'CSS', 'JavaScript'],
      liveUrl: 'https://ohmshield.com/'
    },
    {
      id: 4,
      title: 'Ohm Shield ESD Certificate (Website)',
      description: 'A dedicated website for Ohm Shield ESD certification services.',
      image: '',
      category: 'professional',
      technologies: ['WordPress', 'PHP', 'MySQL'],
      liveUrl: 'https://www.ohmshield-esdcertificate.in/home'
    },
    {
      id: 5,
      title: 'Pro ESD (Website)',
      description: 'Professional website for Pro ESD services and products.',
      image: '',
      category: 'professional',
      technologies: ['WordPress', 'CSS', 'JavaScript'],
      liveUrl: 'https://proesd.in/'
    },
    {
      id: 6,
      title: 'ProESD (Android App)',
      description: 'Mobile application for ProESD customers to access services and information.',
      image: '',
      category: 'professional',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      demoUrl: 'https://www.linkedin.com/posts/maheshwaran002_proesd-appdevelopment-androiddevelopment-activity-7308379314872336385-xyZn?utm_source=share&utm_medium=member_desktop&rcm=ACoAADm4y_oBMeu5jhhmdfQjbPpgZ3Se9ga3z_E'
    },
    {
      id: 7,
      title: 'Employee Expense Management App',
      description: 'Mobile application for managing employee expenses and reimbursements (currently in development).',
      image: '',
      category: 'ongoing',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      status: 'Ongoing Development 🚧'
    },
    {
      id: 8,
      title: 'Employee To-Do App',
      description: 'Task management application for employees to organize their work (currently in development).',
      image: '',
      category: 'ongoing',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      status: 'Ongoing Development 🚧'
    },
    {
      id: 9,
      title: 'Employee Working Time for OT',
      description: 'Application to track overtime hours for employees (currently in development).',
      image: '',
      category: 'ongoing',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      status: 'Ongoing Development 🚧'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16">
          <div className="container-custom mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
              <div className="h-1 w-20 bg-indigo-500 mx-auto"></div>
              <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
                A showcase of my recent work, personal projects, and contributions. 
                Each project represents different skills and technologies I've worked with.
              </p>
            </div>

            <div className="flex justify-center items-center mb-12">
              <div className="flex gap-2 items-center border rounded-lg p-2 bg-card">
                <Filter className="h-5 w-5 text-muted-foreground mr-2" />
                <Button
                  variant={filter === 'all' ? 'default' : 'ghost'} 
                  size="sm"
                  onClick={() => setFilter('all')}
                >
                  All
                </Button>
                <Button
                  variant={filter === 'personal' ? 'default' : 'ghost'} 
                  size="sm"
                  onClick={() => setFilter('personal')}
                >
                  Personal
                </Button>
                <Button
                  variant={filter === 'professional' ? 'default' : 'ghost'} 
                  size="sm"
                  onClick={() => setFilter('professional')}
                >
                  Professional
                </Button>
                <Button
                  variant={filter === 'ongoing' ? 'default' : 'ghost'} 
                  size="sm"
                  onClick={() => setFilter('ongoing')}
                >
                  Ongoing
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-medium">
                    {/* Replace with actual image when available */}
                    Project Image
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                    {project.status && (
                      <div className="mt-4 text-amber-500 font-medium">
                        {project.status}
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild className="mr-2">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button size="sm" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo Video
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage;
