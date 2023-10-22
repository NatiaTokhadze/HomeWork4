// დაწერე ფუნქცია, რომელიც მიიღებს სამ პარამეტრს (string, valueToReplace,
// valueToReplaceWith), ჩაანაცვლებს "valueToReplace"-ს "valueToReplaceWith"
// მნიშვნელობით და დააბრუნებს ახალ stringს
// არ გამოიყენო string.replace() ფუნქცია


// Task1

const replaceFunc = (string, valueToReplace, valueToReplaceWith) => {
    // return string.replace(valueToReplace, valueToReplaceWith)
    let index = string.indexOf(valueToReplace)
    let newString = string.slice(0, index)
        + valueToReplaceWith
        + string.slice(index + valueToReplace.length)
    return newString
}
console.log(replaceFunc("Hi", "Hello", "Hello world"))


// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს string ტიპის მნიშვნელობას
// (წინადადებას), მასში ყოველ სიტყვას გადაწერს დიდი ასოთი და დააბრუნებს
// ახალ წინადადებას

// Task2
function capitalizeWords(sentence) {
    const words = sentence.split(' ')
    const capitalizeWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    const capitalizedSentence = capitalizeWords.join(' ')
    return capitalizedSentence
}
console.log(capitalizeWords("I would traverse not once more, but often the hell of my inner being. One day I would be a better hand at the game."))


// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს მომხმარებლების მასივს და
// დააბრუნებს დალაგებულ მასივს მომხმარებლების ასაკის ზრდადობის
// მიხედვით
// მაგალითად, ჩავთვალოთ, რომ გვაქვს[{name: ‘Lasha’, age: 30}, {name: ‘Saba’, age: 20}].
// ფუნქციამ უნდა დააბრუნოს [{name: ‘Saba’, age: 20}, {name: ‘Lasha’, age: 30}]
//  შეგიძლია გამოიყენო sort() ფუნქცია

//Task3

function sortUsersByAge(users) {
    users.sort((a, b) => a.age - b.age)
    return users
}

const users = [
    { name: 'Lasha', age: 30 },
    { name: 'Saba', age: 20 },
];
console.log(sortUsersByAge(users))
