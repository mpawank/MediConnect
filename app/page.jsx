import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { features, testimonials } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const packages = [
  {
    title: "Basic Plan",
    price: "₹199",
    features: ["1 Consultation", "Valid for 7 days", "Email Support"],
  },
  {
    title: "Standard Plan",
    price: "₹499",
    features: ["3 Consultations", "Valid for 30 days", "Priority Support"],
  },
  {
    title: "Premium Plan",
    price: "₹999",
    features: ["Unlimited Consultations", "Valid for 90 days", "24/7 Support"],
  },
];

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium"
              >
                HealthCare Made Simple
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Connect with Doctors <br />
                <span className="gradient-title">anytime, anywhere</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                MediConnect helps you easily book appointments with trusted doctors from the comfort of your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700">
                  <Link href="/onboarding">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-emerald-700/30 hover:bg-muted/80">
                  <Link href="/onboarding">Find Doctors</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
              <Image src="/banner2.png" alt="MediConnect Banner" fill priority className="object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform is designed to make healthcare accessible and convenient for everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-emerald-900/20 hover:border-emerald-800/40 transition-all duration-300">
                <CardHeader className="flex items-center space-x-4">
                  <div className="text-emerald-400">{feature.icon}</div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Packages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium">
              Affordable Healthcare
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Consultation Packages</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose a package that fits your healthcare needs. Each consultation requires{" "}
              <strong className="text-emerald-400">2 credits</strong> regardless of duration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="bg-background border border-muted shadow-md">
                <CardHeader>
                  <CardTitle className="text-white text-xl">{pkg.title}</CardTitle>
                  <p className="text-emerald-400 text-2xl font-semibold">{pkg.price}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {pkg.features.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="text-emerald-400 w-5 h-5" />
                      <span>{item}</span>
                    </div>
                  ))}
                  <Button variant="secondary" className="w-full mt-4">Choose Plan</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium">
              What Patients Say
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Testimonials</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from our community of patients and doctors who love MediConnect.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <Card key={index} className="bg-muted/20 border border-muted p-6">
                <p className="text-muted-foreground mb-4 italic">"{item.quote}"</p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="bg-emerald-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">
                    {item.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
  <div className="container mx-auto px-4">
    <Card className="bg-gradient-to-r from-emerald-900/30 to-emerald-950/20 border-emerald-800">
      <CardContent className="pt-8 md:p-12 lg:p-16 relative overflow-hidden">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to take control of your healthcare?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of users who have simplified their healthcare journey with our platform.
            Get started today and experience healthcare the way it should be.
          </p>
          <div className="flex flex">
            <Button
              size="lg"
              className="bg-emerald-600 text-white hover:bg-emerald-700"
              asChild
            >
              <Link href="/sign-up">Sign Up</Link>
            </Button>
             <Button
              size="lg"
              className="bg-emerald-600 text-white hover:bg-emerald-700"
              asChild
            >
              <Link href="/pricing">View Pricing</Link>

            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</section>
    </div>
  );
}  