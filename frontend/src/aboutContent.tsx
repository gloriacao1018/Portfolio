import stefImage from '../public/images/stef.jpg';
import jpImage from '../public/images/jp.jpg';

export const aboutContent = {
  intro: ["I'm Gloria! (they/them)", 'I make visions come to life.'],
  mission: [
    'I help creators turn visions into reality, one frame at a time, bringing ideas to fruition.',
    'Together, let\'s create something that stands out––and has your users saying, "woah."',
  ],
  testimonials: [
    {
      quote:
        "Gloria's kickass work is complemented by his infectious energy and passion for creating original, exciting work. He is a true creative partner––always bringing new ideas to the table.",
      shortName: 'Stef',
      name: 'Stephanie Jung',
      headshot: stefImage,
      title: ['Brand Design Lead, Employer Marketing at Handshake'],
    },
    {
      quote:
        "Gloria's collaborative mindset and aptitude to explore ideas well beyond the minimum viable product make him an invaluable partner.",
      name: 'JP Ramirez',
      shortName: 'JP',
      title: [
        'Design Manager, Brand Design Strategy at Intuit',
        'Director, Studio Ramírez',
      ],
      headshot: jpImage,
    },
  ],
  skills: [
    `
      I thrive in cross-functional collaboration. Whether it's brainstorming with creatives or working hand-in-hand with developers, I bring a knack for bridging the gap and transforming ideas into stunning designs that captivate and inspire.

    `,
    `
      strong command of design systems. excellent
      at interpreting mockups in any form (adobe, figma,
      whatev) and working with minimal OR maximal direction
    `,
    `
      exceptional at visual
      styling and attention to
      detail.  whatever tool it
      takes: CSS, SCSS/PostCSS,
      Tailwind, animation,
      2D & 3D rendering...
    `,
    `
      expert communication &
      project management.
      experienced in video editing, content creation, and digital asset management
    `,
    `
      full stack & at the cutting edge. this site is built with React/NextJS,
      Typescript, Sanity, Three.js/R3F, GLSL, and a laundry list more
    `,
    `
      always accessible, functional, responsive, compatible,
      performant and search engine optimized
    `,
  ],
};
