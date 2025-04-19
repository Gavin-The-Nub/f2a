"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Navigation, Clock, Car } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export default function LocationPage() {
  return (
    <>
      <Navbar />

      {/* Add Hero Section */}
      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <Image
          src="/u15.jpg"
          alt="F2A CARS Location"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl text-center md:text-5xl font-bold text-secondary mb-4">
              Our Location
            </h1>
            <p className="text-center md:text-xl text-secondary/90">
              Visit our dealership in Quezon City
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-secondary">
              Our Location
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Visit our dealership in Quezon City to view our premium vehicles
              in person.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl">
          <Card className="mb-8 bg-card border-border">
            <CardHeader>
              <CardTitle className="text-secondary">
                Visit Our Dealership
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Our dealership is conveniently located in Timog, Quezon City,
                Philippines.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 overflow-hidden rounded-b-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.4106831542286!2d121.0336!3d14.6346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM4JzA0LjYiTiAxMjHCsDAyJzAxLjAiRQ!5e0!3m2!1sen!2sph!4v1617345678901!5m2!1sen!2sph"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="F2A CARS Location"
              ></iframe>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-secondary">
                  Address & Directions
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  How to find us
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-secondary">Address</h3>
                    <p className="text-muted-foreground">
                      Timog Q.C, Quezon City, Philippines
                    </p>
                  </div>
                </div>

                <div className="bg-accent p-4 rounded-lg border border-border">
                  <h3 className="font-semibold mb-2 text-secondary">
                    Directions
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <span className="text-muted-foreground">
                        From EDSA, take the Quezon Avenue exit
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <span className="text-muted-foreground">
                        Turn right onto Timog Avenue
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <span className="text-muted-foreground">
                        Look for our F2A CARS signage on the right side
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-start gap-4">
                  <Navigation className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-secondary">Navigation</h3>
                    <p className="text-muted-foreground mb-2">
                      Use these coordinates in your GPS:
                    </p>
                    <p className="text-sm bg-accent p-2 rounded font-mono text-secondary">
                      14.6346° N, 121.0336° E
                    </p>
                  </div>
                </div>

                <Button
                  className="w-full md:w-auto bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a
                    href="https://maps.app.goo.gl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions on Google Maps
                  </a>
                </Button>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-secondary">
                    Hours of Operation
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    When you can visit us
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-secondary">
                        Business Hours
                      </h3>
                      <p className="text-muted-foreground">
                        We are always open to serve you.
                      </p>
                      <div className="mt-2">
                        <p className="font-semibold text-secondary">
                          Monday - Sunday
                        </p>
                        <p className="text-muted-foreground">
                          24 hours / 7 days a week
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-secondary">
                    Parking Information
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Convenient parking options
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We offer free parking for all our customers. There is ample
                    space available in our dealership lot.
                  </p>
                  <div className="flex items-start gap-4">
                    <Car className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-secondary">
                        Test Drive
                      </h3>
                      <p className="text-muted-foreground">
                        Visit us today to test drive any of our available
                        vehicles. No appointment necessary, but we recommend
                        calling ahead for specific models.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-secondary">
                  Dealership Photos
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Take a virtual tour of our facility
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative h-48 rounded-lg overflow-hidden border border-border">
                    <Image
                      src="/l3.jpg"
                      alt="Dealership exterior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden border border-border">
                    <Image
                      src="/l1.jpg"
                      alt="Showroom interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden border border-border">
                    <Image
                      src="/l2.jpg"
                      alt="Vehicle display"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-secondary">
              Ready to Visit Us?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Come see our premium vehicles in person and take a test drive. Our
              friendly staff is ready to assist you with all your automotive
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-silver-400 text-secondary hover:bg-accent"
                asChild
              >
                <Link href="/inventory">Browse Inventory</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
