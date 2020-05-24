import { writable } from 'svelte/store';
export const global = {
    phone: '305.999.5595',
};
export const home = {
           title: 'goHere - Creative Solutions',
           metaDesc: 'This is the description',
           h1: 'Creating',
           h1Sub: 'Solutions',
           sections: [
               {
                   title:
                       '<span style="font-family:Arial;">go<b style="font-family:Arial;">Here</b></span> for Success.',
                   p:
                       '<b>Fueled by creativity. Driven by excellence.</b> We love creating authentic, memorable, and moving digital experiences that bring growth and prosperity.',
                   sub: 'inciting inspiration',

                   button: '',
                   buttonHref: '/what',
                   invert: true,
                   color1: 'red',
                   color2: 'purple',
               },

               {
                   title: '',
                   p:
                       '<b>Technology designed for you.</b> Our solutions are built to drive your business into the future. ',
                   button: '',
                   sub: '',
                   buttonHref: '',
                   clear: true,
                   left: true,
               },
               {
                   title: 'Emotion Creates Motion.',
                   p:
                       'We help you discover what makes your brand stand out and channel it into <b>moving</br> digital experiences that convert. Our job isn’t done until your customers <b>feel</b> it.',
                   sub: 'masterminds',
                   button: '',
                   buttonHref: '/who',
                   invert: true,

                   color1: 'red',
                   color2: 'purple',
               },
               {
                   title: '',
                   p: '',
                   sub: 'Start Your Journey',
                   button: "Let's Get Started",
                   buttonHref: '/get-started',
                   clear: true,
                   color1: '#2BD9FF',
                   color2: '#BF37A9',
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
                   title: 'Envisioning Success.',
                   p:
                       '<span style="font-family:Arial;">go<b style="font-family:Arial;">Here</b></span> is a team of innovative consultants and creators fueled by ideas that break the mold. We love to bring our clients <b>peace of mind</b> with custom designed technology that gets results.<br><br> We bring our clients peace of mind with creative, customized solutions that optimize impact and prosperity in every area of business.',
                   sub: 'nerd alert',
                   button: 'Envision With Us!',
                   buttonHref: 'cta',
                   invert: true,
                   color1: 'red',
                   color2: 'purple',
               },
           ],
       };
export const what = {
           title: 'goHere - Creative Solutions',
           metaDesc: 'This is the description',
           h1: 'Powerful',
           h1Sub: 'Outcomes',
           section: [
               {
                   title: '<span style="font-family:Arial;">go<b style="font-family:Arial;">Here</b></span> for Results',
                   p:
                       'Data-driven. Intuitive. Creative. Beautiful.<br/> Simple principles. Powerful outcomes.',
                   sub: 'masterminds',
                   button: '',
                   buttonHref: '',
                   invert: true,
               },
           ],
       };
export const work = {
           title: 'goHere - Creative Solutions',
           metaDesc: 'This is the description',
           h1: 'The',
           h1Sub: 'Vault',
           section: [
               {
                   title:
                       '<span style="font-family:Arial;">go<b style="font-family:Arial;">Here</b></span> for Partnership',
                   p:
                       'Whether you’re a startup, nonprofit, or a household brand, <span style="font-family:Arial;">go<b style="font-family:Arial;">Here</b></span> has solutions for you. We select clients we resonate with, bringing passion and inspiration to any project.',
                   sub: 'powerful',
                   button: 'Become a Partner',
                   buttonHref: '/get-started',
                   invert: true,
                   color1: 'red',
                   color2: 'purple',
               },
           ],
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
                       '<span style="font-family:Arial;">go<b style="font-family:Arial;">Here</b></span> and discover the power of creative solutions for <b>your next project</b>.',
                   sub: 'lets go!',
                   button: 'phone',
                   buttonHref: 'tel:309.999.5595',
                   invert: true,
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
                   buttonHref: '/what',
                   invert: true,
                   color1: 'red',
                   color2: 'purple',
               },
           ],
       };

export const cta = {
           title: "Let's Create<br>Something Beautiful",
           p: 'Reach out today and find out what <span style="font-family:Arial;">go<b style="font-family:Arial;">Here</b></span> can do for you!',
           sub: 'be creative',
           button: "Let's Go",
           buttonHref: 'cta',
           bottom: true,
           color1: '#2BD9FF',
           color2: '#BF37A9',
       };

export const tags = [
    'Problem Solving', 'Web Development', 'UI/UX', 'Platinum Level Hosting', 'White Labeling', 'Conversion Rate Optimization', 'Lead Generation', 'Creative Direction', 'Content Strategy', 'Digital Marketing', 'SEO', 'Asset Creation', 'Digital Communications', 'PPC Advertising', 'Public Relations', 'Brand Identity', 'Reputation Management', 'GTM Strategy', 'System Auditing', 'Application Integration', 'Creative Solutions', 'Virtual Reality', 'Machine Learning', 'Edge Computing', 'Blockchain Technologies', 'Technology Solutions', 'Mobile First Design', 'App Development', 'Business Consulting', 'Full-Stack Development', 'Crisis Management'
];
