const a=[
 "The purpose of our lives is to be happy. — Dalai Lama ",
    "Life is what happens when you’re busy making other plans.— John Lennon ",
    "You only live once, but if you do it right, once is enough.— Mae West ",
    "Many of life’s failures are people who did not realize how close they were to success when they gave up.– Thomas A. Edison ",
    "If you want to live a happy life, tie it to a goal, not to people or things.– Albert Einstein ",
    "Never let the fear of striking out keep you from playing the game.– Babe Ruth 2",
    "Money and success don’t change people; they merely amplify what is already there.— Will Smith ",
    "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking. – Steve Jobs ",
    "Not how long, but how well you have lived is the main thing. — Seneca ",
    "If life were predictable it would cease to be life, and be without flavor. – Eleanor Roosevelt ",
    "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.– Henry Ford ",
    "In order to write about life first you must live it.– Ernest Hemingway ",
    "Life is not a problem to be solved, but a reality to be experienced.– Soren Kierkegaard ",
    "The unexamined life is not worth living. — Socrates ",
    "Turn your wounds into wisdom.— Oprah Winfrey ",
    "The way I see it, if you want the rainbow, you gotta put up with the rain. — Dolly Parton ",
    "Do all the good you can, for all the people you can, in all the ways you can, as long as you can. — Hillary Clinton (inspired by John Wesley quote) ",
    "Everybody wants to be famous, but nobody wants to do the work. 2 I hope you find these quotes helpful!",
       ]
function quotes()
{debugger
    const rand=Math.floor(Math.random()*18);
    const rand1=a[rand];
    document.getElementById('id1').innerHTML=rand1;
}
