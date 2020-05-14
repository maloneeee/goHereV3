import { writable } from 'svelte/store';
export const global = {
    phone: '305.999.5595'
}
export const home = {
           title: 'goHere - Creative Solutions',
           metaDesc: 'This is the description',
           h1: 'Creating',
           h1Sub: 'Solutions',
           sections: [
               {
                   title: 'Engineered Solutions.',
                   p:
                       'goHere is a team of innovative consultants and creators. We bring our clients peace of mind with creative, customized solutions that maximize impact and prosperity.',
                   sub: 'inciting inspiration',

                   button: 'what we do',
                   buttonHref: '/what',
               },

               {
                   title: '',
                   p:
                       'You know your industry, but it’s not your job to know everything about the opportunities of technology for business in the digital age. That’s where we come in.',
                   button: '',
                   sub: '',
                   buttonHref: '',
                   clear: true,
                   left: true,
               },
               {
                   title: 'Ideas are Our Business',
                   p:'goHere when you don’t know what you need, when you know exactly what you need, when you need to out-compete in a saturated market, or when you’re looking to break the mold.',
                   sub: 'masterminds',
                   button: 'Who We Are',
                   buttonHref: '/who',
               },
               {
                   title: 'REPLACE ME',
                   p: '',
                   sub: 'be creative',
                   button: 'Join Us On the Cutting Edge',
                   buttonHref: '/get-started',
                   clear: true,
               },
           ],
       };
export const who = {
           title: 'goHere - Creative Solutions',
           metaDesc: 'This is the description',
           h1: 'Creative',
           h1Sub: 'Envisioneers',
           section: [
               {
                   title: 'goHere for Success.',
                   p:
                       'Setting new standards of excellence is our passion--and we have the technological versatility to deliver.',
                   sub: 'nerd alert',
                   button: "Let's get started",
                   buttonHref: '/get-started',
                   invert: true,
               },
           ],
       };
export const what = {
           title: 'goHere - Creative Solutions',
           metaDesc: 'This is the description',
           h1: 'Strategic',
           h1Sub: 'Outcomes',
           section: [
               {
                   title: 'goHere for Success',
                   p:
                       "In a field of rapid innovation, sustainability is a luxury, and versatility is essential. We dream bigger and aim higher to create customized solutions that spark extraordinary, lasting results.",
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
                   title: 'goHere for Partnership',
                   p:
                       'Whether you’re a startup, nonprofit, or a household brand--goHere! We select clients we <b>resonate,</b> with, bringing <b>passion and inspiration</b> to any project.',
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
                   buttonHref: 'tel:309.999.5595',
               },
           ],
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
