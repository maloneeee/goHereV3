import { writable } from 'svelte/store';
export const home = {
           title: 'goHere - Creative Solutions',
           metaDesc: 'This is the description',
           h1: 'Creative Solutions',
           sections: [
               {
                   title: 'What Are Creative Solutions?',
                   p:
                       'We develop customized, technology-based strategies to help you solve problems, optimize growth, and reach your unique goals.',
                   sub: 'masterminds',
                   button: 'Learn More',
                   buttonHref: '/what'
               },
               {
                   title: 'Creative Solutions<br>Are Our Business.',
                   p:
                       'Give your brand the look and feel of excellence to spark powerful outcomes. Our stunning designs and tailored content will open up a world of opportunities for you and your business.',
                   sub: '',
                   button: '',
                   buttonHref: '',
                   clear: true,
                   left:true
               },
               {
                   title: 'Be Exceptional.',
                   p:
                       'At goHere, we have built a community where creative minds flourish, a spirit of excellence is embraced, and adding value is a way of life. Helping you create is what we love to do.',
                   sub: 'inciting inspiration',
                   button: 'who we are',
                   buttonHref: '/who'
               },
               {
                   title: 'Join Us At<br>The Cutting Edge.',
                   p: '',
                   sub: 'be creative',
                   button: "let's go",
                   buttonHref: '/get-started',
                   clear: true
               }
           ]
       };
export const who = {
    title: 'goHere - Creative Solutions',
    metaDesc: 'This is the description',
    h1: 'Trailblazers of Tech',
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
           h1: 'Strategic Outcomes',
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
           h1: 'Tech Renaissance',
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
           h1: 'Call Today',
           section: [
               {
                   title: 'We Want To<br>Hear From You!',
                   p:
                       'We tackle projects of all types and work with organizations across all industries. Discover the power of creative tech solutions for any project you might have.',
                   sub: 'lets go!',
                   button: '305.999.5595',
                   buttonHref: 'tel:309.999.5595'
               }
           ]
       };
export const insights = {
           title: 'goHere - Creative Solutions',
           metaDesc: 'This is the description',
           h1: 'Incredible Insights',
           section: [
               {
                   title: "The Lastest Tech Updates",
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
