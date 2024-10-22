import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { google, appstore, bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#about-us", label: "About Us" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Laundry Services",
        subtext: "Our premium laundry service allows customers to effortlessly get their laundry done with just a few taps on our mobile app. We ensure top-notch quality and timely delivery, so you can focus on what matters most."
    },
    {
        imgURL: support,
        label: "E-commerce/Marketplace",
        subtext: "Richion Store offers a diverse range of fashion items, including clothing, apparel, and gadgets, all at competitive prices. Our marketplace is designed to provide a wide selection of the latest trends and high-quality products, making shopping both enjoyable and cost-effective."
    },
    {
        imgURL: shieldTick,
        label: "⁠Virtual Accounts",
        subtext: "In partnership with Malperad and 9 Payment Service Bank, we provide virtual accounts for our users to conveniently fund their wallets. This feature ensures secure and efficient transactions, enhancing the overall user experience."
    },
    {
        imgURL: shieldTick,
        label: "Wallet Services",
        subtext: "Our digital wallets enable users to pay for their orders seamlessly. With the Richion Store wallet, managing your finances and making purchases has never been easier."
    },
    {
        imgURL: shieldTick,
        label: "⁠Virtual Dollar Card",
        subtext: "Through our collaboration with Malperad, we offer virtual dollar cards that allow customers to shop globally and manage their subscriptions to various streaming platforms. This service provides financial flexibility and ease of use, catering to the diverse needs of our customers."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Help",
        links: [
            // { name: "About us", link: "/" },
            // { name: "FAQs", link: "/" },
            // { name: "How it works", link: "/" },
            { id: 1, name: "Privacy policy", link: "/" },
            { id: 2, name: "Terms & Conditions", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "support@richionstore.com", link: "mailto:support@richionstore.com" },
            { name: "07049847056", link: "tel:07049847056" },
        ],
    },
];

export const socialMedia = [
    { src: google, alt: "playstore logo", link: "https://play.google.com/store/apps/details?id=com.richion.mobile&hl=en_US" },
    { src: appstore, alt: "appstore logo", link: "https://apps.apple.com/ng/app/richion-stores/id6450187925" },
];