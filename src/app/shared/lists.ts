import {List} from './list';

export const LISTS: List[] = [
    {
        id: '0',
        name: 'Munich',
        image: '/assets/images/Munich.png',
        category: 'photos',
        featured: true,
        label: 'Popular',
        price: '$ 45.99',
        // tslint:disable-next-line:max-line-length
        description: 'A unique collection of photos of Munich and its surroundings',
        comments: [
            {
                rating: 5,
                comment: 'Can it be better than this?',
                author: 'ABC XYZ',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Awesome!',
                author: 'XYZ ABC',
                date: '2014-09-05T17:57:28.556094Z'
            }

        ]
    },

    {
        id: '1',
        name: 'Hypnobirthing',
        image: '/assets/images/Hypnobirthing.png',
        category: 'medical',
        featured: false,
        label: 'informative',
        price: '$ 19.99',
        description: 'A natural approach to a safe, easier, more comfortable birthing',
        comments: [
            {
                rating: 5,
                comment: 'It helped me a lot to know things beforehand!',
                author: 'JKL MNO',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'I wish I had read this before!',
                author: 'NNO NNO',
                date: '2014-09-05T17:57:28.556094Z'
            }

        ]
    },
    {
        id: '2',
        name: 'Practical AR',
        image: '/assets/images/PracticalAR.png',
        category: 'Educational',
        featured: false,
        label: 'Technology',
        price: '$ 29.99',
        description: 'A guide to the technologies, applications and human factors for AR and VR',
        comments: [
            {
                rating: 5,
                comment: 'Higly recommended!',
                author: 'PPL LLP',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'I would love to see more diagrams!',
                author: 'JJU UJH',
                date: '2014-09-05T17:57:28.556094Z'
            }

        ]
    },
    {
        id: '3',
        name: 'Dabawallas',
        image: '/assets/images/Dabawallas.png',
        category: 'Business',
        featured: false,
        label: 'Supply Chain',
        price: '$ 9.99',
        description: 'Lessons for building lasting success based on values',
        comments: [
            {
                rating: 5,
                comment: 'Astonishing to see the process in work',
                author: 'YYT IRI',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Dialogues in the book are really good',
                author: 'PCVT JHJHJ',
                date: '2014-09-05T17:57:28.556094Z'
            }
            
        ]
    }
];
