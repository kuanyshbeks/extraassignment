const message = document.getElementById("message");

const submit = () => {

let messageValue = message.value;
let messageWords = []
let numberOfWordsInTheMessage = 0;
let saveword = "";

for (var i = 0; i < messageValue.length; i++){
    if (messageValue[i] != " " && messageValue[i] != "," && messageValue[i] != "." && messageValue[i] != "!" && messageValue[i] != "?" && messageValue[i] != "(" && messageValue[i] != ")"){
            saveword += messageValue[i].toLowerCase();
        }
    if (messageValue[i] == " " || i == messageValue.length-1){
        messageWords.push(saveword);
        saveword = "";
        numberOfWordsInTheMessage++;
    }
}

let counter = 0;
let frequency = [];
let maximum = 0;
for (var i = 0; i < messageWords.length; i++){
    for (var j = 0; j < messageWords.length; j++){
        if (messageWords[i] == messageWords[j]){
            counter++;
        }
    }
    frequency.push(counter);
    counter = 0;
    if(frequency[i] > maximum){
        maximum = frequency[i];
    }
}

for (var i = 0; i < messageWords.length; i++){ 
    if (maximum == 1){
        console.log(`There are no repeated word`);
        break;
    }
    if (frequency[i] == maximum){
        console.log(`The most frequent word of this message is "${messageWords[i]}"`);
        break;
    }
}

console.log(`The number of words in this message is ${numberOfWordsInTheMessage}`);

const randomPhrasesAndPictures = [
    {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "https://i.pinimg.com/originals/aa/eb/49/aaeb4941ff8afe1bf468c148926c1bdd.jpg",
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg",
        
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg",
    }
]

let index = Math.floor(Math.random() * randomPhrasesAndPictures.length);
document.getElementById("phrase").innerHTML = randomPhrasesAndPictures[index].phrase;
document.getElementById("picture").src = randomPhrasesAndPictures[index].imageURL;

}

document.getElementById("submit").addEventListener("click", function() {
    submit();
});
