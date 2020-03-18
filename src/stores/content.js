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
            buttonHref: 'what'
        },
        {
            title: 'Creative Solutions Are Our Business.',
            p:
                'Give your brand the look and feel of excellence to spark powerful outcomes. Our stunning designs and tailored content will open up a world of opportunities for you and your business.',
            sub: '',
            button: '',
            buttonHref: ''
        },
        {
            title: 'Be Exceptional.',
            p:
                'At goHere, we have built a community where creative minds flourish, a spirit of excellence is embraced, and adding value is a way of life. Helping you create is what we love to do.',
            sub: 'inciting inspiration',
            button: 'who we are',
            buttonHref: 'who'
        },
        {
            title: 'Join Us At The Cutting Edge.',
            p: '',
            sub: 'be creative',
            button: "let's go",
            buttonHref: 'get-started'
        }
    ]
};
