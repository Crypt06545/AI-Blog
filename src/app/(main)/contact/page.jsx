import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="w-full bg-gray-900 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Connect with Our AI Team
          </h1>
          <p className="text-lg text-gray-300">
            Whether you’re curious about AI, need guidance, or want to
            collaborate — we're here to talk.
          </p>
        </section>

        {/* Contact Form */}
        <Card className="bg-gray-800/50 border border-gray-700 backdrop-blur-md shadow-lg text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-white">
              Send Us a Message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div>
                <label className="block text-sm mb-1 text-gray-300">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  className="bg-gray-900 text-white border border-gray-700 focus-visible:ring-1 focus-visible:ring-white"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-gray-300">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  className="bg-gray-900 text-white border border-gray-700 focus-visible:ring-1 focus-visible:ring-white"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-gray-300">
                  Message
                </label>
                <Textarea
                  placeholder="How can we help you?"
                  rows={5}
                  className="bg-gray-900 text-white border border-gray-700 focus-visible:ring-1 focus-visible:ring-white"
                />
              </div>
              <Button
                variant="outline"
                className="mt-4 text-white cursor-pointer bg-gray-800 border-gray-600 hover:bg-gray-700 hover:border-gray-500 hover:text-white transition-colors"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <section className="text-center">
          <h3 className="text-xl font-semibold mb-2">Other Ways to Reach Us</h3>
          <p className="text-gray-400">📧 Email: support@aiblog.io</p>
          <p className="text-gray-400">🐦 Twitter: @AI_Blog_Official</p>
          <p className="text-gray-400">🌐 LinkedIn: AI Blog Network</p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
