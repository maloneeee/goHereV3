import { writable } from 'svelte/store';
export const global = {
    phone: '305.999.5595'
}
export const home = {
           title: 'goHere - Creative Solutions',
           metaDesc: 'This is the description',
           h1: "Let's Get",
           h1Sub: 'Creative',
           sections: [
               {
                   title: 'High Tech, Engineered Solutions',
                   p:
                       'We engineer web based business solutions. You know your industry, is it your job to know every piece of technology?',
                   sub: 'inciting inspiration',

                   button: 'who we are',
                   buttonHref: '/who',
               },

               {
                   title: 'Experts Helping Experts.',
                   p:
                       'We are thinkers and creators operating with a solution-oriented mindset, a spirit of excellence, and an emphasis on adding value--we place no limits on what we can do!',
                   button: '',
                   sub: '',
                   buttonHref: '',
                   clear: true,
                   left: true,
               },
               {
                   title: 'Who We Are',
                   p:
                       'We are a group of innovative consultants and creators. Engineering custom business solutions to maximize your impact, optimize sales, spark prosperity, and bring you peace of mind <b>is what we love to do.</b>',
                   sub: 'masterminds',
                   button: 'Learn More',
                   buttonHref: '/what',
               },
               {
                   title: 'Ideas Are Currency',
                   p: 'And we are the fucking Federal Reserve',
                   sub: 'be creative',
                   button: "let's go",
                   buttonHref: '/get-started',
                   clear: true,
               },
           ],
       };
export const who = {
           title: 'goHere - Creative Solutions',
           metaDesc: 'This is the description',
           h1: 'Trailblazers',
           h1Sub: 'of Tech',
           section: [
               {
                   title: 'Envisioneers.',
                   p:
                       'We combine technology, design, and communication to create engineered outcomes. Join us at the cutting edge.',
                   sub: 'nerd alert',
                   button: "Let's get started",
                   buttonHref: '/get-started',
                   invert: true
               }
           ]
       };
export const what = {
           title: 'goHere - Creative Solutions',
           metaDesc: 'This is the description',
           h1: 'Strategic',
           h1Sub: 'Outcomes',
           section: [
               {
                   title: 'Sharpening The<br>Cutting Edge.',
                   p:
                       'Create engaging experiences, designed for connection. Engineer outcomes, designed for growth. Discover solutions, designed for the future.',
                   sub: 'masterminds',
                   button: '',
                   buttonHref: ''
               }
           ]
       };
export const work = {
           title: 'goHere - Creative Solutions',
           metaDesc: 'This is the description',
           h1: 'Tech',
           h1Sub: 'Renaissance',
           section: [
               {
                   title: 'Our Amazing Partners.',
                   p:
                       'Whether you’re a startup, nonprofit, or a household brand, goHere adds value. We select clients we resonate with, bringing passion and inspiration to any project.',
                   sub: 'powerful',
                   button: 'Become a Partner',
                   buttonHref: '/get-started',
                   invert: true
               }
           ]
       };
export const contact = {
           title: 'goHere - Creative Solutions',
           metaDesc: 'This is the description',
           h1: 'Call',
           h1Sub: 'Today',
           section: [
               {
                   title: 'We Want To<br>Hear From You!',
                   p:
                       'We tackle projects of all types and work with organizations across all industries. Discover the power of creative tech solutions for any project you might have.',
                   sub: 'lets go!',
                   button: 'phone',
                   buttonHref: 'tel:309.999.5595'
               }
           ]
       };
export const insights = {
           title: 'goHere - Creative Solutions',
           metaDesc: 'This is the description',
           h1: 'Incredible',
           h1Sub: 'Insights',
           section: [
               {
                   title: 'The Lastest Tech Updates',
                   p:
                       'We tackle projects of all types and work with organizations across all industries. Discover the power of creative tech solutions for any project you might have.',
                   sub: 'Learn Something',
                   button: 'What We Do',
                   buttonHref: '/what'
               }
           ]
       };

export const cta = {
    title: "Let's Create<br>Something Beautiful",
    p: 'Reach out today and find out what goHere can do for you!',
    sub: 'be creative',
    button: "Let's Go!",
    buttonHref: '/get-started#cta',
    bottom:true
};
