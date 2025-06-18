import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-full bg-gray-900 text-white px-6 py-16 space-y-20">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Empowering Minds with Artificial Intelligence
        </h1>
        <p className="text-lg text-gray-300">
          We decode the complexities of AI, making it approachable, reliable,
          and impactful for enthusiasts, developers, and industry professionals.
        </p>
      </section>

      {/* Mission Section */}
      <Card className="max-w-4xl mx-auto bg-gray-800/50 border border-gray-700 text-white backdrop-blur-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 leading-relaxed">
            Our mission is to bridge the gap between cutting-edge AI research
            and real-world applications. Through well-researched articles,
            tutorials, and opinion pieces, we empower our readers with the
            knowledge and tools they need to navigate the AI revolution.
          </p>
        </CardContent>
      </Card>

      {/* What We Cover */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          What You'll Find Here
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "🤖 AI Concepts Simplified",
            "📊 Machine Learning & Deep Learning Guides",
            "🧠 Thoughtful AI Ethics Discussions",
            "🛠️ Tools, Code, and Real-World Applications",
          ].map((item, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border border-gray-700 text-white"
            >
              <CardContent className="p-5 text-base">{item}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Trust Us? */}
      <Card className="max-w-4xl mx-auto bg-gray-800/50 border border-gray-700 text-white shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-white">
            Why Follow Our Blog?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 leading-relaxed">
            Our team consists of experienced AI practitioners, researchers, and
            writers who are passionate about technology and knowledge sharing.
            We blend human insights with AI tools to deliver precise,
            accessible, and high-impact content.
          </p>
        </CardContent>
      </Card>

      {/* CTA */}
      <section className="max-w-3xl mx-auto text-center mt-10">
        <h3 className="text-xl md:text-2xl font-semibold mb-2">
          Let’s Explore the Future Together
        </h3>
        <p className="text-gray-400 mb-6">
          Join our growing community of AI learners and leaders.
        </p>
        <Button
          variant="outline"
          className="mt-4 text-white cursor-pointer bg-gray-800 border-gray-600 hover:bg-gray-700 hover:border-gray-500 hover:text-white transition-colors"
        >
          <Link href="/blogs">Read Our Latest Blogs</Link>
        </Button>
      </section>
    </div>
  );
};

export default About;
