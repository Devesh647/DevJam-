
const bookData = {
    "atomic-habits": {
        title: "Atomic Habits",
        author: "James Clear",
        price:"₹799",
        img: "book1.jpg",
        desc: "An easy and proven way to build good habits and break bad ones. Learn how tiny changes can lead to remarkable results."
    },
    "the-alchemist": {
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: "₹799",
        img: "book2.jpg",
        desc: "Santiago's journey to the Egyptian pyramids in search of a treasure is a global phenomenon about following your heart."
    },
    "rich-dad-poor-dad": {
        title: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        price: "₹799",
        img: "book3.jpg",
        desc: "What the rich teach their kids about money that the poor and middle class do not!"
    },
    "harry-potter": {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        price: "₹799",
        img: "book4.jpg",
        desc: "The boy who lived. Follow Harry's first year at Hogwarts School of Witchcraft and Wizardry."
    },
    "the-silent-patient": {
        title: "The Silent Patient",
        author: "Alex Michaelides",
        price: "₹799",
        img: "book5.jpg",
        desc: "A shocking psychological thriller of a woman’s act of violence against her husband—and the therapist obsessed with uncovering her motive."
    },
    "think-like-a-monk": {
        title: "Think Like a Monk",
        author: "Jay Shetty",
        price: "₹799",
        img: "book6.jpg",
        desc: "Train your mind for peace and purpose every day. Learn how to overcome negative thoughts and find calm."
    },
    "psychology-of-money": {
        title: "The Psychology of Money",
        author: "Morgan Housel",
        price: "₹799",
        img: "book7.jpg",
        desc: "Timeless lessons on wealth, greed, and happiness. Understand your behavior toward money."
    },
    "george-orwell": {
        title: "1984",
        author: "George Orwell",
        desc: "A classic dystopian novel that explores the dangers of totalitarianism, surveillance, and the repression of individualism.",
        price: "₹799",
        img: "book8.jpg"
    },
    "the-subtle": {
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        price: "₹799",
        img: "book9.jpg",
        desc: "A counterintuitive approach to living a good life by focusing on what truly matters and letting go of the rest."
    },
    "ikigai": {
        title: "Ikigai: The Japanese Secret to a Long and Happy Life",
        author: "Héctor García",
        price: "₹799",
        img: "book10.jpg",
        desc: "Discover the Japanese concept of finding your 'reason for being' to live a more fulfilling and purposeful life."
    },
    "book11": { 
        title: "The Midnight Library", 
        author: "Matt Haig", 
        price: "₹799", 
        img: "book11.jpg", 
        desc: "Between life and death there is a library of infinite books."
    },
    "book12": { title: "The Maze Runner", author: "James Dashner", price: "₹799", img: "book12.jpg", desc: "A heart-pounding dystopian survival thriller." },
    "book13": { title: "A Good Girl's Guide to Murder", author: "Holly Jackson", price: "₹799", img: "book13.jpg", desc: "The case is closed. But Pippa Fitz-Amobi isn't so sure." },
    "book14": { title: "Bird Box", author: "Josh Malerman", price: "₹799", img: "book14.jpg", desc: "Don't open your eyes. Something is out there." },
    "book15": { title: "Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", price: "₹799", img: "book15.jpg", desc: "A comedy sci-fi classic about the end of the world." },
    "book16": { title: "All the Light We Cannot See", author: "Anthony Doerr", price: "₹799", img: "book16.jpg", desc: "A beautiful story of a blind French girl and a German boy." },
    "book18": {
        title: "Freakonomics",
        author: "Steven D. Levitt & Stephen J. Dubner",
        price: "₹799",
        img: "book18.jpg", // Update to your actual filename
        desc: "A rogue economist explores the hidden side of everything. This book challenges the way we think about the world by using economic tools to explore real-world scenarios."
    },
    "book19": {
        title: "Sacred Games",
        author: "Vikram Chandra",
        price: "₹799",
        img: "book19.jpg", // Update to your actual filename
        desc: "An epic thriller set in the Mumbai underworld. A weary policeman and a notorious gangster become entangled in a high-stakes game that threatens the entire city."
    },
    "book20": {
        title: "Till the Last Breath",
        author: "Durjoy Datta",
        price: "₹799",
        img: "book20.jpg", // Update to your actual filename
        desc: "A powerful story about two individuals facing life-threatening illnesses in the same hospital room, exploring love, hope, and the will to survive against all odds."
    }
    
};

const params = new URLSearchParams(window.location.search);
const bookId = params.get('id');

const book = bookData[bookId];

if (book) {
    document.getElementById('book-title').innerText = book.title;
    document.getElementById('book-author').innerText = book.author;
    document.getElementById('book-desc').innerText = book.desc;
    document.getElementById('book-price').innerText = book.price;
    document.getElementById('book-cover').src = book.img;
} else {
    document.getElementById('book-title').innerText = "Book not found";
}
function addToCart() {
    const bookToSave = {
        title: document.getElementById('book-title').innerText,
        author: document.getElementById('book-author').innerText,
        price: document.getElementById('book-price').innerText,
        img: document.getElementById('book-cover').src
    };
    let cart = JSON.parse(localStorage.getItem('bookflixCart')) || [];
    cart.push(bookToSave);
    localStorage.setItem('bookflixCart', JSON.stringify(cart));
    window.location.href = "cart.html";
}