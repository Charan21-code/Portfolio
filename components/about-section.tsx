import React from 'react';
import { FadeIn } from '@/components/fade-in';

export function AboutSection() {
  return (
    <section className="py-24 border-t border-[#E8E5D9] bg-[#FAF9F6]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: The Bio */}
          <FadeIn delay={0} className="lg:col-span-7 space-y-8">
            <h2 className="text-xs font-bold tracking-[0.2em] text-[#1E5F5A] uppercase">
              The Operator
            </h2>
            <h3 className="text-2xl md:text-3xl leading-snug text-[#2C2825] font-serif font-medium">
              I build intelligent systems and autonomous applications, blending machine learning infrastructure with global curiosity.
            </h3>
            <div className="space-y-4 text-base text-[#5C564F] leading-relaxed">
              <p>
                My approach combines the mathematical rigor required for AI with an explorer&apos;s mindset. Whether I&apos;m architecting an Agentic Production Planning System or deploying Computer Vision models for intelligent road safety, I believe the best code bridges complex, real-world domains.
              </p>
              <p>
                Currently focused on the intersection of AI agents, Retrieval-Augmented Generation (RAG), and MLOps. I write models and systems that are clean, scalable, and deeply aware of the data environments they operate within.
              </p>
            </div>
          </FadeIn>

          {/* Right Column: Stats & Skills */}
          <FadeIn delay={0.15} className="lg:col-span-5 space-y-12">
            
            {/* Vitals / Stats */}
            <div>
              <h2 className="text-xs font-bold tracking-[0.2em] text-[#1E5F5A] uppercase mb-6">
                Vitals &amp; Metrics
              </h2>
              <div className="grid grid-cols-2 gap-8 border-l-2 border-[#E8E5D9] pl-6">
                <div>
                  <div className="text-3xl font-light text-[#2C2825]">8.98</div>
                  <div className="text-sm text-[#5C564F] mt-1">Current CGPA</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-[#2C2825]">AI &amp; MLOps</div>
                  <div className="text-sm text-[#5C564F] mt-1">Domain Focus</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-[#2C2825]">GRIET</div>
                  <div className="text-sm text-[#5C564F] mt-1">Institution</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-[#2C2825]">2028</div>
                  <div className="text-sm text-[#5C564F] mt-1">Graduation</div>
                </div>
              </div>
            </div>

            {/* Technical Toolkit */}
            <div>
              <h2 className="text-xs font-bold tracking-[0.2em] text-[#1E5F5A] uppercase mb-6">
                Technical Toolkit
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  'Python', 
                  'PostgreSQL', 
                  'Redis', 
                  'Docker', 
                  'Socket.io', 
                  'Computer Vision', 
                  'YOLOv8', 
                  'RAG', 
                  'LLMs (Gemini/LLaMA)', 
                  'NumPy'
                ].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 text-sm bg-white border border-[#E8E5D9] text-[#2C2825] rounded-full shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </FadeIn>
        </div>
      </div>
    </section>
  );
}
