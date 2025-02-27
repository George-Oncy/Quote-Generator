let btn = document.getElementById('btn')
let output = document.getElementById('output')
let quotes = [
    `“Be yourself; everyone else is already taken.” ―Oscar Wilde`,
    `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”  ― Marilyn Monroe`,
    `“So many books, so little time.”― Frank Zappa`,
    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”― Albert Einstein`,
    `“A room without books is like a body without a soul.”― Marcus Tullius Cicero`,
    `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.―BernardM. Baruch`,
    `“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”
― William W. Purkey`,
`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
― Dr. Seuss`,
`“You only live once, but if you do it right, once is enough.”
― Mae West`,
`“Be the change that you wish to see in the world.”
― Mahatma Gandhi`,
`“In three words I can sum up everything I've learned about life: it goes on.”
― Robert Frost`,
`“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”
― J.K. Rowling, Harry Potter and the Goblet of Fire`,
`“Don’t walk in front of me… I may not follow
Don’t walk behind me… I may not lead
Walk beside me… just be my friend”
― Albert Camus`,
`If you tell the truth, you don't have to remember anything.”
― Mark Twain`,
`“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”
― Maya Angelou`,
`“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”
― C.S. Lewis, The Four Loves`,
`“A friend is someone who knows all about you and still loves you.”
― Elbert Hubbard`,
`“To live is the rarest thing in the world. Most people exist, that is all.”
― Oscar Wilde`,
`Always forgive your enemies; nothing annoys them so much.”
― Oscar Wilde`,
`“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”
― Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches`,
`“Live as if you were to die tomorrow. Learn as if you were to live forever.”
― Mahatma Gandhi`,
`“We accept the love we think we deserve.”
― Stephen Chbosky, The Perks of Being a Wallflower`,
`“Without music, life would be a mistake.”
― Friedrich Nietzsche, Twilight of the Idols`,
];

btn.addEventListener('click', function(){
    var randomQuote =quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})