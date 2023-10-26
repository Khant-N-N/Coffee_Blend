import {
    dessert1,
    dessert2,
    dessert3,
    dessert4,
    dessert5,
    dessert6,
    dish1,
    dish2,
    dish3,
    dish4, dish5, dish6,
    dish9,
    dish8, dish7,
    drink1,
    drink2,
    drink3, drink4, drink5, drink6, drink7, drink8,
    menu1, menu2, menu3, menu4,
    image1, image2, image3, image4, image5, image6,
    person2, person3, person4
} from "../assets";

const foodMenu = [

    {
        id: 17,
        name: "shrimp salad",
        price: 20,
        img: dish7,
        category: "Starter",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 18,
        name: "salad",
        price: 20,
        img: dish8,
        category: "Starter",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 19,
        name: "fried vege",
        price: 20,
        img: dish9,
        category: "Starter",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 4,
        name: "steak beef",
        price: 20,
        img: dish1,
        category: "Main Dish",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 5,
        name: "grilled ribs",
        price: 20,
        img: dish2,
        category: "Main Dish",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 6,
        name: "grilled beef",
        price: 20,
        img: dish3,
        category: "Main Dish",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 1,
        name: "Lemonade juice",
        price: 2.9,
        img: drink1,
        category: "Drinks",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 2,
        name: "pineapple wine",
        price: 2.9,
        img: drink2,
        category: "Drinks",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 3,
        name: "Bye Bye my friend",
        price: 2.9,
        img: drink3,
        category: "Drinks",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 7,
        name: "rosey cake",
        price: 2.9,
        img: dessert1,
        category: "Dessert",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 8,
        name: "hot honey pancake",
        price: 2.9,
        img: dessert2,
        category: "Dessert",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 9,
        name: "fruity pie",
        price: 2.9,
        img: dessert3,
        category: "Dessert",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 10,
        name: "coffee capuccino",
        price: 5.9,
        img: menu1,
        category: "Coffee",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 11,
        name: "coffee capuccino",
        price: 5.9,
        img: menu2,
        category: "Coffee",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 12,
        name: "coffee capuccino",
        price: 5.9,
        img: menu3,
        category: "Coffee",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 13,
        name: "coffee capuccino",
        price: 5.9,
        img: menu4,
        category: "Coffee",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 14,
        name: "rapsberry creamy cake",
        price: 5.9,
        img: dessert4,
        category: "Dessert",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 15,
        name: "choco banana",
        price: 5.9,
        img: dessert5,
        category: "Dessert",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 16,
        name: "fruit honey pancakes ",
        price: 5.9,
        img: dessert6,
        category: "Dessert",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 20,
        name: "Coconut Beers",
        price: 5.9,
        img: drink4,
        category: "Drinks",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 21,
        name: "Sugar Bugar",
        price: 5.9,
        img: drink5,
        category: "Drinks",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 22,
        name: "heaven tomorrow",
        price: 5.9,
        img: drink6,
        category: "Drinks",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 23,
        name: "Lemonade Piss",
        price: 5.9,
        img: drink7,
        category: "Drinks",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 24,
        name: "Buhwahwa",
        price: 5.9,
        img: drink8,
        category: "Drinks",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 25,
        name: "grilled chicken",
        price: 5.9,
        img: dish4,
        category: "Main Dish",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 26,
        name: "grilled shrimp",
        price: 5.9,
        img: dish5,
        category: "Main Dish",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 27,
        name: "grilled fish",
        price: 5.9,
        img: dish6,
        category: "Main Dish",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
];

const blogs = [
    {
        id: 1,
        img: image1,
        title: "The Delicious Pizza",
        date: "Sept 10, 2023",
        blog: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
        id: 2,
        img: image2,
        title: "The Delicious Pizza",
        date: "Sept 10, 2023",
        blog: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
        id: 3,
        img: image3,
        title: "The Delicious Pizza",
        date: "Sept 10, 2023",
        blog: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
        id: 4,
        img: image4,
        title: "Coffee Testing Day",
        date: "Sept 10, 2023",
        blog: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
        id: 5,
        img: image5,
        title: "Coffee Testing Day",
        date: "Sept 10, 2023",
        blog: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
        id: 6,
        img: image6,
        title: "Coffee Testing Day",
        date: "Sept 10, 2023",
        blog: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
];

const customerReviews = [
    {
        id: 1,
        name: "Maxime Flock",
        role: "Illustrator Designer",
        comment:
            "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.",
        profile: person2,
    },
    {
        id: 2,
        name: "Eren Yeager",
        role: "Reviewer",
        comment:
            "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however.",
        profile: person3,
    },
    {
        id: 3,
        name: "Robert Den",
        role: "Head Manager",
        comment:
            "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.",
        profile: person4,
    },
    {
        id: 4,
        name: "Louise Kelly",
        role: "Reviewer",
        comment:
            "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
        profile: person3,
    },
    {
        id: 5,
        name: "Ferro Home",
        role: "Illustrator Designer",
        comment:
            "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small",
        profile: person2,
    },
];

export { foodMenu, blogs, customerReviews }