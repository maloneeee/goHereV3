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
                   title: 'Engineered Solutions. <br>Bottom Line.',
                   p:
                       "You know your industry but it's not your job to know every piece of technology? We engineer digital business solutions.",
                   sub: 'inciting inspiration',

                   button: 'what we do',
                   buttonHref: '/what',
               },

               {
                   title: '',
                   p:
                       'Our solutions will strengthen your reputation, demonstrate thought leadership and establish superior market position to take on your competitors.',
                   button: '',
                   sub: '',
                   buttonHref: '',
                   clear: true,
                   left: true,
               },
               {
                   title: 'We Can Help You',
                   p:
                       "You're looking for something <b>authentic</b>. <b>We love to create</b> business solutions engineered to bring you <b>peace of mind.</b>",
                   sub: 'masterminds',
                   button: 'Who We Are',
                   buttonHref: '/who',
               },
               {
                   title: 'Ideas Are <br>Our Currency',
                   p: '',
                   sub: 'be creative',
                   button: 'Welcome to the Federal Reserve',
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
                   title: 'Engineering Success.',
                   p:
                       'We bridge human emotions with beauty, functionality and orginality. This creates impactful impressions and exciting opportunities are brought within reach.',
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
                   title: 'Sharpening The<br>Cutting Edge.',
                   p:
                       "Constantly shifting: in a field of rapid innovation, sustainability is a luxury, and versatility is essential. We're in the age of emergency solutions and goHere is cornering the market.",
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
