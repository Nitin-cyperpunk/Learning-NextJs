// src/app/page.tsx or your desired homepage file
"use client"; // This component uses client-side hooks, so it must be a Client Component

import { useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText'; // Import from the correct path after installation
import { useGSAP } from '@gsap/react';

// Register the SplitText plugin
gsap.registerPlugin(SplitText);
type HomePageProps = {
  h1: string;
};

export default function HomePage({ h1 }: HomePageProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Target the h1 within the container scope
    const heading = container.current?.querySelector('h1');

    if (heading) {
      // Ensure the heading is visible before splitting
      gsap.set(heading, { opacity: 1 });

      // Create the SplitText instance
      const split = new SplitText(heading, { type: "chars" });

      // Animate the characters
      gsap.from(split.chars, {
        y: 20,
        autoAlpha: 0, // autoAlpha is like opacity but also sets visibility to 'hidden' when opacity is 0
        stagger: 0.05,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    }

  }, { scope: container }); // Scope the animation to the container element for better performance and targeting

  return (
     <main ref={container} style={{ textAlign: 'center', padding: '50px' }}>
      <h1 id="heading" style={{ opacity: 0, fontSize: '3rem' }}>
        {h1}
      </h1>
     
    </main>
  );
}