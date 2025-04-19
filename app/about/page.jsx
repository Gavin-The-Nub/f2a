import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Check, Users, ShieldCheck, Car } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="relative h-[50vh] w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
          <Image
            src="/c2.jpg"
            alt="About Us"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl text-center md:text-5xl font-bold text-secondary mb-4">
                About Us
              </h1>
              <p className="text-center md:text-xl text-secondary/90">
                Your trusted partner in finding the perfect vehicle
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <Image
                  src="/f2a-logo.png"
                  alt="F2A CARS Logo"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-center text-secondary">
                Our Mission
              </h2>

              <div className="grid gap-8 mb-12">
                <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-secondary">
                      Quality Vehicles
                    </h3>
                    <p className="text-muted-foreground">
                      Our primary mission is to find and provide quality cars to
                      our clients. We meticulously select each vehicle in our
                      inventory, ensuring they meet our high standards for
                      performance, reliability, and value. We believe that every
                      customer deserves a vehicle they can trust and enjoy for
                      years to come.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-secondary">
                      Customer Satisfaction
                    </h3>
                    <p className="text-muted-foreground">
                      Customer service and client satisfaction are at the heart
                      of everything we do. We take the time to understand your
                      needs and preferences, guiding you through the car buying
                      process with transparency and integrity. Our goal is to
                      ensure you drive away not just with a great car, but with
                      complete confidence in your purchase.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-secondary">
                      Excellent Aftersales Service
                    </h3>
                    <p className="text-muted-foreground">
                      Our relationship with you doesn't end when you drive off
                      the lot. We pride ourselves on providing excellent
                      aftersales service, staying in communication to ensure
                      your complete satisfaction with your purchase. Whether you
                      have questions about your vehicle or need assistance with
                      maintenance, our team is always ready to help.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-16 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-secondary">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                At F2A CARS, we offer comprehensive automotive services to meet
                all your needs.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-card p-6 rounded-lg shadow-sm text-center border border-border">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">
                    BUY
                  </h3>
                  <p className="text-muted-foreground">
                    Purchase your dream car from our carefully curated selection
                    of quality vehicles at negotiable prices.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-sm text-center border border-border">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">
                    SELL
                  </h3>
                  <p className="text-muted-foreground">
                    Let us help you sell your vehicle at a fair price. We handle
                    the marketing and find qualified buyers.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-sm text-center border border-border">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">
                    TRADE
                  </h3>
                  <p className="text-muted-foreground">
                    Trade in your current vehicle and upgrade to something new.
                    We offer competitive trade-in values.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-sm text-center border border-border">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">
                    CONSIGN
                  </h3>
                  <p className="text-muted-foreground">
                    Let us sell your vehicle on your behalf. We'll handle
                    everything while you maintain ownership until sold.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link href="/contact">Contact Us About Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-secondary">
                Why Choose F2A CARS
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mx-auto mb-4 border border-border">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">
                    Trusted by Many
                  </h3>
                  <p className="text-muted-foreground">
                    With over 407K followers and 67K likes, we've built a
                    reputation for excellence and reliability.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mx-auto mb-4 border border-border">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">
                    Quality Assurance
                  </h3>
                  <p className="text-muted-foreground">
                    Every vehicle in our inventory undergoes thorough inspection
                    to ensure quality and reliability.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mx-auto mb-4 border border-border">
                    <Car className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">
                    Diverse Selection
                  </h3>
                  <p className="text-muted-foreground">
                    From luxury sports cars to practical family vehicles, we
                    offer a wide range of options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Work With Us?
              </h2>
              <p className="text-lg mb-8 text-muted-foreground">
                Whether you're looking to buy, sell, trade, or consign, our team
                is here to help you every step of the way.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
