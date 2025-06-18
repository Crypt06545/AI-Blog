"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CustomAccr = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16">
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="space-y-6"
      >
        {/* AI Ethics */}
        <AccordionItem
          value="item-1"
          className="rounded-xl bg-gray-800/50 border border-gray-700 backdrop-blur-md shadow-md"
        >
          <AccordionTrigger className="text-left px-6 py-4 text-white text-xl font-semibold hover:no-underline">
            🧠 How do we approach AI ethics?
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 text-gray-300 text-sm leading-relaxed">
            Ethical concerns are at the heart of every article we publish. From bias in datasets to transparency in algorithms, we explore AI’s societal impact with clarity and responsibility.
          </AccordionContent>
        </AccordionItem>

        {/* Learning Path */}
        <AccordionItem
          value="item-2"
          className="rounded-xl bg-gray-800/50 border border-gray-700 backdrop-blur-md shadow-md"
        >
          <AccordionTrigger className="text-left px-6 py-4 text-white text-xl font-semibold hover:no-underline">
            📘 Who is this blog for?
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 text-gray-300 text-sm leading-relaxed">
            Whether you’re a student, developer, or industry expert, our AI blog breaks down complex topics into digestible guides and hands-on tutorials — no prior PhD required.
          </AccordionContent>
        </AccordionItem>

        {/* Tools & Frameworks */}
        <AccordionItem
          value="item-3"
          className="rounded-xl bg-gray-800/50 border border-gray-700 backdrop-blur-md shadow-md"
        >
          <AccordionTrigger className="text-left px-6 py-4 text-white text-xl font-semibold hover:no-underline">
            🛠️ Do we recommend tools or code?
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 text-gray-300 text-sm leading-relaxed">
            Absolutely. Our blog includes code snippets, frameworks, GitHub links, and tool reviews to help you go from reading to building. We believe in **learning by doing**.
          </AccordionContent>
        </AccordionItem>

        {/* Future Insights */}
        <AccordionItem
          value="item-4"
          className="rounded-xl bg-gray-800/50 border border-gray-700 backdrop-blur-md shadow-md"
        >
          <AccordionTrigger className="text-left px-6 py-4 text-white text-xl font-semibold hover:no-underline">
            🚀 What’s next in AI we’re watching?
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 text-gray-300 text-sm leading-relaxed">
            From AGI to AI alignment, we constantly explore the bleeding edge of artificial intelligence. Our goal is to keep you informed — not just about the present, but what’s coming next.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CustomAccr;
