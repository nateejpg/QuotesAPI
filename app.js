import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

const quotes = [

    {
        "text": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "author": "Winston Churchill"
      },
      {
        "text": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
      },
      {
        "text": "In three words I can sum up everything I've learned about life: It goes on.",
        "author": "Robert Frost"
      },
      {
        "text": "The best way to predict the future is to create it.",
        "author": "Peter Drucker"
      },
      {
        "text": "Life is what happens when you're busy making other plans.",
        "author": "Allen Sanders"
      },
      {
        "text": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "author": "Nelson Mandela"
      },
      {
        "text": "Believe you can and you're halfway there.",
        "author": "Theodore Roosevelt"
      },
      {
        "text": "The only limit to our realization of tomorrow will be our doubts of today.",
        "author": "Franklin D. Roosevelt"
      },
      {
        "text": "Success is stumbling from failure to failure with no loss of enthusiasm.",
        "author": "Winston Churchill"
      },
      {
        "text": "Do not wait to strike till the iron is hot, but make it hot by striking.",
        "author": "William Butler Yeats"
      },
      {
        "text": "The only person you are destined to become is the person you decide to be.",
        "author": "Ralph Waldo Emerson"
      },
      {
        "text": "Don't count the days, make the days count.",
        "author": "Muhammad Ali"
      },
      {
        "text": "Success usually comes to those who are too busy to be looking for it.",
        "author": "Henry David Thoreau"
      },
      {
        "text": "It always seems impossible until it's done.",
        "author": "Nelson Mandela"
      },
      {
        "text": "The only thing we have to fear is fear itself.",
        "author": "Franklin D. Roosevelt"
      },
      {
        "text": "Your time is limited, don't waste it living someone else's life.",
        "author": "Steve Jobs"
      },
      {
        "text": "Life is really simple, but we insist on making it complicated.",
        "author": "Confucius"
      },
      { "text": "The best revenge is massive success.", "author": "Frank Sinatra" },
      {
        "text": "The purpose of our lives is to be happy.",
        "author": "Dalai Lama"
      },
      {
        "text": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
      },
      {
        "text": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        "author": "Albert Schweitzer"
      },
      {
        "text": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
        "author": "Jordan Belfort"
      },
      {
        "text": "It is never too late to be what you might have been.",
        "author": "George Eliot"
      },
      {
        "text": "If you want to achieve greatness stop asking for permission.",
        "author": "Anonymous"
      },
      {
        "text": "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        "author": "Brian Tracy"
      },
      {
        "text": "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        "author": "Roy T. Bennett"
      },
      {
        "text": "To live a creative life, we must lose our fear of being wrong.",
        "author": "Joseph Chilton Pearce"
      },
      {
        "text": "The only limit to our realization of tomorrow will be our doubts of today.",
        "author": "Franklin D. Roosevelt"
      },
      {
        "text": "Success is stumbling from failure to failure with no loss of enthusiasm.",
        "author": "Winston Churchill"
      },
      {
        "text": "Do not wait to strike till the iron is hot, but make it hot by striking.",
        "author": "William Butler Yeats"
      },
      {
        "text": "The only person you are destined to become is the person you decide to be.",
        "author": "Ralph Waldo Emerson"
      },
      {
        "text": "Don't count the days, make the days count.",
        "author": "Muhammad Ali"
      },
      {
        "text": "Success usually comes to those who are too busy to be looking for it.",
        "author": "Henry David Thoreau"
      },
      {
        "text": "It always seems impossible until it's done.",
        "author": "Nelson Mandela"
      },
      {
        "text": "The only thing we have to fear is fear itself.",
        "author": "Franklin D. Roosevelt"
      },
      {
        "text": "Your time is limited, don't waste it living someone else's life.",
        "author": "Steve Jobs"
      },
      {
        "text": "Life is really simple, but we insist on making it complicated.",
        "author": "Confucius"
      },
      { "text": "The best revenge is massive success.", "author": "Frank Sinatra" },
      {
        "text": "The purpose of our lives is to be happy.",
        "author": "Dalai Lama"
      },
      {
        "text": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
      },
      {
        "text": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        "author": "Albert Schweitzer"
      },
      {
        "text": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
        "author": "Jordan Belfort"
      },
      {
        "text": "It is never too late to be what you might have been.",
        "author": "George Eliot"
      },
      {
        "text": "If you want to achieve greatness stop asking for permission.",
        "author": "Anonymous"
      },
      {
        "text": "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        "author": "Brian Tracy"
      },
      {
        "text": "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        "author": "Roy T. Bennett"
      },
      {
        "text": "To live a creative life, we must lose our fear of being wrong.",
        "author": "Joseph Chilton Pearce"
      },
      {
        "text": "Believe you can and you're halfway there.",
        "author": "Theodore Roosevelt"
      },
      {
        "text": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
      },
      {
        "text": "In three words I can sum up everything I've learned about life: It goes on.",
        "author": "Robert Frost"
      },
      {
        "text": "The best way to predict the future is to create it.",
        "author": "Peter Drucker"
      },
      {
        "text": "Life is what happens when you're busy making other plans.",
        "author": "Allen Sanders"
      },
      {
        "text": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "author": "Nelson Mandela"
      },
      {
        "text": "The only limit to our realization of tomorrow will be our doubts of today.",
        "author": "Franklin D. Roosevelt"
      },
      {
        "text": "Success is stumbling from failure to failure with no loss of enthusiasm.",
        "author": "Winston Churchill"
      },
      {
        "text": "Do not wait to strike till the iron is hot, but make it hot by striking.",
        "author": "William Butler Yeats"
      },
      {
        "text": "The only person you are destined to become is the person you decide to be.",
        "author": "Ralph Waldo Emerson"
      },
      {
        "text": "Don't count the days, make the days count.",
        "author": "Muhammad Ali"
      },
      {
        "text": "Success usually comes to those who are too busy to be looking for it.",
        "author": "Henry David Thoreau"
      },
      {
        "text": "It always seems impossible until it's done.",
        "author": "Nelson Mandela"
      },
      {
        "text": "The only thing we have to fear is fear itself.",
        "author": "Franklin D. Roosevelt"
      },
      {
        "text": "Your time is limited, don't waste it living someone else's life.",
        "author": "Steve Jobs"
      },
      {
        "text": "Life is really simple, but we insist on making it complicated.",
        "author": "Confucius"
      },
      { "text": "The best revenge is massive success.", "author": "Frank Sinatra" },
      {
        "text": "The purpose of our lives is to be happy.",
        "author": "Dalai Lama"
      },
      {
        "text": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
      },
      {
        "text": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        "author": "Albert Schweitzer"
      },
      {
        "text": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
        "author": "Jordan Belfort"
      },
      {
        "text": "It is never too late to be what you might have been.",
        "author": "George Eliot"
      },
      {
        "text": "If you want to achieve greatness stop asking for permission.",
        "author": "Anonymous"
      },
      {
        "text": "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        "author": "Brian Tracy"
      },
      {
        "text": "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        "author": "Roy T. Bennett"
      },
      {
        "text": "To live a creative life, we must lose our fear of being wrong.",
        "author": "Joseph Chilton Pearce"
      },
      {
        "text": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        "author": "Ralph Waldo Emerson"
      },
      {
        "text": "The only way to achieve the impossible is to believe it is possible.",
        "author": "Charles Kingsleigh"
      },
      {
        "text": "Every morning brings new potential, but only if you make the most of it.",
        "author": "Anonymous"
      },
      {
        "text": "Don’t watch the clock; do what it does. Keep going.",
        "author": "Sam Levenson"
      },
      {
        "text": "Success is not just about making money. It's about making a difference.",
        "author": "Unknown"
      },
      {
        "text": "Your attitude, not your aptitude, will determine your altitude.",
        "author": "Zig Ziglar"
      },
      {
        "text": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
        "author": "Jordan Belfort"
      },
      {
        "text": "The only way to predict the future is to create it.",
        "author": "Peter Drucker"
      },
      {
        "text": "Life is what happens when you're busy making other plans.",
        "author": "Allen Sanders"
      },
      {
        "text": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "author": "Nelson Mandela"
      },
      {
        "text": "Believe you can and you're halfway there.",
        "author": "Theodore Roosevelt"
      },
      {
        "text": "Life is really simple, but we insist on making it complicated.",
        "author": "Confucius"
      },
      { "text": "The best revenge is massive success.", "author": "Frank Sinatra" },
      {
        "text": "The purpose of our lives is to be happy.",
        "author": "Dalai Lama"
      },
      {
        "text": "It is never too late to be what you might have been.",
        "author": "George Eliot"
      },
      {
        "text": "If you want to achieve greatness stop asking for permission.",
        "author": "Anonymous"
      },
      {
        "text": "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        "author": "Brian Tracy"
      },
      {
        "text": "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        "author": "Roy T. Bennett"
      },
      {
        "text": "To live a creative life, we must lose our fear of being wrong.",
        "author": "Joseph Chilton Pearce"
      },
      {
        "text": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        "author": "Ralph Waldo Emerson"
      },
      {
        "text": "The only way to achieve the impossible is to believe it is possible.",
        "author": "Charles Kingsleigh"
      },
      {
        "text": "Every morning brings new potential, but only if you make the most of it.",
        "author": "Anonymous"
      },
      {
        "text": "Don’t watch the clock; do what it does. Keep going.",
        "author": "Sam Levenson"
      },
      {
        "text": "Success is not just about making money. It's about making a difference.",
        "author": "Unknown"
      },
      {
        "text": "Your attitude, not your aptitude, will determine your altitude.",
        "author": "Zig Ziglar"
      }


];

app.get('/api/quotes', (req, res) => {

    res.json({quotes});

})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})



