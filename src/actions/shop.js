
import {
    SET_SHOP_CATEGORIES,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID,
    FILTER_PRODUCTS_WITH_QUERY
} from './types';

export function filterProductsWithQuery(fields) {
    return ({
        type: FILTER_PRODUCTS_WITH_QUERY,
        payload: fields
    })
}

export function filterProductsWithCategoryId(_id) {
    return ({
        type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
        payload: _id
    })
}


export function fetchShopCategories() {
    return ({
        type: SET_SHOP_CATEGORIES,
        payload: [
            {
                _id: 0,
                title: 'All'
            },
            {
                _id: 1,
                title: 'Men'
            },
            {
                _id: 2,
                title: 'Women'
            },
            {
                _id: 3,
                title: 'Kids'
            },
            {
                _id: 4,
                title: 'Sales'
            },
            {
                _id: 5,
                title: 'New'
            }
        ]
    })
}

export function fetchShopProducts() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 200,
                belongsTo: [0, 1],
                imageUrl: '/photos/men/bike11.jpg'
            },
            {
                _id: 1,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 199,
                belongsTo: [0, 1],
                imageUrl: '/photos/men/bike10.jpg'
            },
            {
                _id: 2,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 300,
                belongsTo: [0, 1, 5],
                imageUrl: '/photos/men/bike13.jpg'
            },
            {
                _id: 3,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 470,
                belongsTo: [0, 1],
                imageUrl: '/photos/men/bike14.jpg'
            },
            {
                _id: 4,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 500,
                belongsTo: [0, 1, 5],
                imageUrl: '/photos/men/bike8.jpg'
            },
            {
                _id: 5,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 450,
                belongsTo: [0, 1, 5],
                imageUrl: '/photos/men/bike9.jpg'
            },
            {
                _id: 6,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 400,
                belongsTo: [0, 1, 5],
                imageUrl: '/photos/men/bike12.jpg'
            },
            {
                _id: 7,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 100,
                belongsTo: [0, 1, 5],
                imageUrl: '/photos/men/bike15.jpg'
            },
            {
                _id: 8,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 150,
                belongsTo: [0, 1, 5],
                imageUrl: '/photos/men/bike14.jpg'
            },
            {
                _id: 9,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 400,
                belongsTo: [0, 1, 5],
                imageUrl: '/photos/men/bike8.jpg'
            },
            {
                _id: 10,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 500,
                belongsTo: [0, 1, 5],
                imageUrl: '/photos/men/bike9.jpg'
            },
            {
                _id: 11,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 100,
                belongsTo: [0, 2],
                imageUrl: '/photos/women/bike1.jpg'
            },
            {
                _id: 12,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 300,
                belongsTo: [0, 2, 5],
                imageUrl: '/photos/women/bike2.jpg'
            },
            {
                _id: 13,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 600,
                belongsTo: [0, 2, 5],
                imageUrl: '/photos/women/bike3.jpg'
            },
            {
                _id: 14,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 100,
                belongsTo: [0, 2, 4],
                imageUrl: '/photos/women/bike4.jpg'
            },
            {
                _id: 15,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 690,
                belongsTo: [0, 2, 4, 5],
                imageUrl: '/photos/women/bike5.jpg'
            },
            {
                _id: 16,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 599,
                belongsTo: [0, 2, 5],
                imageUrl: '/photos/women/bike6.jpg'
            },
            {
                _id: 17,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 300,
                belongsTo: [0, 2, 4, 5],
                imageUrl: '/photos/women/bike7.jpg'
            },
            {
                _id: 18,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 400,
                belongsTo: [0, 2, 5],
                imageUrl: '/photos/women/bike8.jpg'
            },
            {
                _id: 19,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 400,
                belongsTo: [0, 3, 5],
                imageUrl: '/photos/kids/bike1.jpg'
            },
            {
                _id: 20,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 200,
                belongsTo: [0, 3, 5],
                imageUrl: '/photos/kids/bike2.jpg'
            },
            {
                _id: 21,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 490.90,
                belongsTo: [0, 3, 5],
                imageUrl: '/photos/kids/bike3.jpg'
            },
            {
                _id: 22,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 467-90,
                belongsTo: [0, 3, 4, 5],
                imageUrl: '/photos/kids/bike4.jpg'
            },
            {
                _id: 23,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 398,
                belongsTo: [0, 3, 4, 5],
                imageUrl: '/photos/kids/bike5.jpg'
            },
            {
                _id: 24,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 233,
                belongsTo: [0, 3, 5],
                imageUrl: '/photos/kids/bike6.jpg'
            },
            {
                _id: 25,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 450,
                belongsTo: [0, 3, 4, 5],
                imageUrl: '/photos/kids/bike8.jpg'
            },
            {
                _id: 26,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 300,
                belongsTo: [0, 3, 5],
                imageUrl: '/photos/kids/bike9.jpg'
            },
            {
                _id: 27,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 500,
                belongsTo: [0, 3, 4, 5],
                imageUrl: '/photos/kids/bike10.jpg'
            },
            {
                _id: 28,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 490,
                belongsTo: [0, 3, 4, 5],
                imageUrl: '/photos/kids/bike11.jpg'
            },
            {
                _id: 29,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 300,
                belongsTo: [0, 3, 5],
                imageUrl: '/photos/kids/bike12.jpg'
            },
            {
                _id: 30,
                title: 'Giant',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 230,
                belongsTo: [0, 3, 5],
                imageUrl: '/photos/kids/bike2.jpg'
            },
        ]
    })
} 