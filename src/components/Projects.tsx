
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from './ui/badge';
import { Link } from 'react-router-dom';

const Projects = () => {
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
      id: 3,
      title: 'Ohm Shield (Website)',
      description: 'A professional website for Ohm Shield company.',
      image: '',
      category: 'professional',
      technologies: ['WordPress', 'CSS', 'JavaScript'],
      liveUrl: 'https://ohmshield.com/'
    },
    {
      id: 6,
      title: 'ProESD (Android App)',
      description: 'Mobile application for ProESD customers to access services and information.',
      image: '',
      category: 'professional',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      demoUrl: 'https://www.linkedin.com/posts/maheshwaran002_proesd-appdevelopment-androiddevelopment-activity-7308379314872336385-xyZn?utm_source=share&utm_medium=member_desktop&rcm=ACoAADm4y_oBMeu5jhhmdfQjbPpgZ3Se9ga3z_E'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto"></div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex gap-2">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'} 
              onClick={() => setFilter('all')}
            >
              All
            </Button>
            <Button
              variant={filter === 'personal' ? 'default' : 'outline'} 
              onClick={() => setFilter('personal')}
            >
              Personal
            </Button>
            <Button
              variant={filter === 'professional' ? 'default' : 'outline'} 
              onClick={() => setFilter('professional')}
            >
              Professional
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

        <div className="flex justify-center mt-10">
          <Button asChild>
            <Link to="/projects">
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
