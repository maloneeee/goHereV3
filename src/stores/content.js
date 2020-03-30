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
            buttonHref: '/what',
            invert: false
        },
        {
            title: 'Creative Solutions Are Our Business.',
            p:
                'Give your brand the look and feel of excellence to spark powerful outcomes. Our stunning designs and tailored content will open up a world of opportunities for you and your business.',
            sub: '',
            button: '',
            buttonHref: '',
            invert: true,
    bottom:false
        },
        {
            title: 'Be Exceptional.',
            p:
                'At goHere, we have built a community where creative minds flourish, a spirit of excellence is embraced, and adding value is a way of life. Helping you create is what we love to do.',
            sub: 'inciting inspiration',
            button: 'who we are',
            buttonHref: '/who',
            invert: false
        },
        {
            title: 'Join Us At The Cutting Edge.',
            p: '',
            sub: 'be creative',
            button: "let's go",
            buttonHref: '/get-started',
            invert: false
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
            invert: true,
    bottom:false
        }
    ]
};
export const what = {
           title: 'goHere - Creative Solutions',
           metaDesc: 'This is the description',
           h1: 'Strategic Outcomes',
           section: [
               {
                   title: 'Sharpening The Cutting Edge.',
                   p:
                       'Create engaging experiences, designed for connection. Engineer outcomes, designed for growth. Discover solutions, designed for the future.',
                   sub: 'masterminds',
                   button: "",
                   buttonHref: '',
                   invert:false,
    bottom:false
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
                   invert: true,
    bottom:false
               }
           ]
       };
export const contact = {
           title: 'goHere - Creative Solutions',
           metaDesc: 'This is the description',
           h1: 'Call Today',
           section: [
               {
                   title: 'We Want To Hear From You!',
                   p:
                       'We tackle projects of all types and work with organizations across all industries. Discover the power of creative tech solutions for any project you might have.',
                   sub: 'lets go!',
                   button: 'Become a Partner',
                   buttonHref: '/get-started',
                   invert: false,
    bottom:false
               }
           ]
       };

export const cta = {
    title: "Let's Create Something Beautiful",
    p: 'Reach out today and find out what goHere can do for you!',
    sub: 'be creative',
    button: "Let's Go!",
    buttonHref: '/get-started#cta',
    invert: false,
    bottom:true
};
