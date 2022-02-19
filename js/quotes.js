const quotes = [
    {
        quote: "Love is or it ain't. Thin love ain't love at all.",
        author: "Toni Morrison, Beloved"
    },
    {
        quote: "It's the possibility of having a dream come true that makes life interesting.",
        author: "Paulo Coelho, The Alchemist",
    },
    {
        quote: "Time moves slowly, but passes quickly.",
        author: "Alice Walker, The Color Purple"
    },
    {
        quote: "It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
        author: "Antoine de Saint-Exupéry, The Little Prince"
    },
    {
        quote: "That's the thing about books. They let you travel without moving your feet.",
        author: "Jhumpa Lahiri, The Namesake"
    },
    {
        quote: "Life had stepped into the place of theory and something quite different would work itself out in his mind.",
        author: "Fyodor Dostoyevsky, Crime and Punishment."
    },
    {
        quote: "The one thing that doesn’t abide by majority rule is a person’s conscience.",
        author: "To Kill a Mockingbird, Harper Lee"
    },
    {
        quote: "Life is C (Choice) between B (Birth) and D (Death).",
        author: "Jean-Paul Sartre"
    },
    {
        quote: "You are a wonderful creation. You know more than you think you know, just as you know less than you want to know.",
        author: "Oscar Wilde, The Picture of Dorian Gray"
    },
    {
        quote: "Beauty exists where you least expect to find it.",
        author: "Gail Tsukiyama, The Samurai's Garden"
    },
    {
        quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
        author: "Albus Dumbledore, Harry Potter"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;