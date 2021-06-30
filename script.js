const subject = ["You" , "I" , "He" , "She" , "They"];
const verb = ["will run" , "will hide" , "will jump" , "will sleep"];
const emotion = ["with joy" , 'with sadness' , 'with anger' , 'with boredom', 'with horniness'];

const randomizer = (array) =>{
    return Math.floor(Math.random()*(array.length));
};

let phrase = () => {
    let randomSubject = subject[randomizer(subject)];
    let randomVerb = verb[randomizer(verb)];
    let randomEmotion = emotion[randomizer(emotion)];
    let randomPhrase = `${randomSubject} ${randomVerb} ${randomEmotion}`;
    document.write(randomPhrase);
}



