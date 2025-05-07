
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Certificate = () => {
  const certificates = [
    {
      id: 1,
      title: "Create a WordPress website with Hostinger",
      issuer: "Udemy",
      date: "Dec 2023",
      description: "Comprehensive training in creating and managing WordPress websites using Hostinger hosting platform.",
      skills: ["WordPress", "Web Hosting", "CMS", "Web Design"],
      credentialUrl: "https://www.udemy.com/certificate/UC-cc849133-c248-495b-bfd6-cf6fa4d92203/"
    },
    {
      id: 2,
      title: "Angular",
      issuer: "Infosys",
      date: "Oct 2022",
      description: "Professional certification covering Angular framework concepts, components, services, and modern web development practices.",
      skills: ["Angular", "TypeScript", "Web Development", "Frontend"],
      credentialUrl: "https://drive.google.com/file/d/1GoRARzQkVb5O2ov8PA4yPcI1AMR6B-we/view?usp=drivesdk"
    },
    
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16">
          <div className="container-custom mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Certificates & Achievements</h1>
              <div className="h-1 w-20 bg-indigo-500 mx-auto"></div>
              <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
                A collection of professional certifications and achievements that demonstrate my commitment to continuous learning and skill development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certificates.map((cert) => (
                <Card key={cert.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{cert.title}</CardTitle>
                        <CardDescription className="mt-2">
                          Issued by {cert.issuer} • {cert.date}
                        </CardDescription>
                      </div>
                      <Award className="h-8 w-8 text-indigo-500" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{cert.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="ml-auto" asChild>
                      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Credential
                      </a>
                    </Button>
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

export default Certificate;
