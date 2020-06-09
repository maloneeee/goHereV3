import { writable } from 'svelte/store';
export const global = {
    phone: '305.999.5595',
    address: '400 South Point Dr<br>Miami Beach, FL 33139',
    email: 'help@gohere.tech',
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
                'Companies who proactively embrace the power of technology for business in the digital age will disrupt those who wait too long.',
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
                '<b>Technology designed for you.</b> <br>Our solutions are built to drive your business into the future. ',
            button: '',
            sub: '',
            buttonHref: '',
            clear: true,
            left: true,
        },
        {
            title:
                '<span style="font-family:Arial;">go<b style="font-family:Arial;">Here</b></span> for Performance.',
            p:
                '<b>Data-driven. Business simplified.</b><br> We help you solve problems, grow, and streamline your business.',
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
            title:
                '<span style="font-family:Arial;">go<b style="font-family:Arial;">Here</b></span> for Service.',
            p:
                '<b>Powerful Experiences. By Design.</b> <br> We’re a team of innovative consultants and creators with a passion for excellence, an eye for opportunity, and a love of service. Sharing our talents with others to make a positive impact is what drives us.',
            sub: 'nerd alert',
            button: 'Envision With Us!',
            buttonHref: 'cta',
            invert: true,
            color1: 'red',
            color2: 'purple',
        },
    ],

    cta: {
        head: "Let's Create Together",
        button: "Let's Go!",
    },
};
export const what = {
    title: 'goHere - Creative Solutions',
    metaDesc: 'This is the description',
    h1: 'Powerful',
    h1Sub: 'Outcomes',
    section: [
        {
            title:
                '<span style="font-family:Arial;">go<b style="font-family:Arial;">Here</b></span> for Results',
            p:
                '<b>Technology that has you covered.</b><br> Build. Grow. Optimize. Impress. Solutions to drive business. We design and build custom technology solutions that bring structure, growth, and peace of mind.',
            sub: 'masterminds',
            button: '',
            buttonHref: '',
            invert: true,
        },
    ],
    cta: {
        head: 'Get The Most Out Of Our Business',
        button: 'Get Started',
    },
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
                'Whether you’re a startup, nonprofit, or a household brand, goHere has solutions for you. We select clients we <b>resonate</b> with, bringing <b>passion and inspiration</b> to any project.',
            sub: 'powerful',
            button: 'Become a Partner',
            buttonHref: 'cta',
            invert: true,
            color1: 'red',
            color2: 'purple',
        },
    ],
    cta: {
        head: 'Our Clients Love Us. <br>So Will You!',
        button: "Let's Go!",
    },
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
            title:
                '<span style="font-family:Arial;">go<b style="font-family:Arial;">Here</b></span> for the Latest',
            p: 'Reach out today and find out what goHere can do for you.',
            sub: 'Learn Something',
            button: "Let's Go",
            buttonHref: 'cta',
            invert: true,
            color1: 'red',
            color2: 'purple',
        },
    ],
    cta: {
        head: 'The best for the brightest.',
        button: 'REACH OUT',
    },
};

export const cta = {
    title: "Let's Create<br>Something Beautiful",
    p:
        'Reach out today and find out what <span style="font-family:Arial;">go<b style="font-family:Arial;">Here</b></span> can do for you!',
    sub: 'be creative',
    button: "Let's Go",
    buttonHref: 'cta',
    color1: '#2BD9FF',
    color2: '#BF37A9',
};

export const tags = [
    'problem solving',
    'web development',
    'ui/ux',
    'platinum level hosting',
    'white Labeling',
    'Conversion Rate Optimization',
    'Lead Generation',
    'Creative Direction',
    'Content Strategy',
    'Digital Marketing',
    'SEO',
    'Asset Creation',
    'Digital Communications',
    'PPC Advertising',
    'Public Relations',
    'Brand Identity',
    'Reputation Management',
    'GTM Strategy',
    'System Auditing',
    'Application Integration',
    'Creative Solutions',
    'Virtual Reality',
    'Machine Learning',
    'Edge Computing',
    'Blockchain Technologies',
    'Technology Solutions',
    'Mobile First Design',
    'App Development',
    'Business Consulting',
    'Full-Stack Development',
    'crisis management',
    'projection mapping',
];
