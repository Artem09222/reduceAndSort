// ex 1 
let users = [
    { name: "Користувач 1", balance: 100 },
    { name: "Користувач 2", balance: 200 },
];

let balance = users.reduce((accumulator, user) => {
    return accumulator + user.balance;
}, 0);

console.log("Загальна сума балансу всіх користувачів: " + balance);
// ex 2
let user = [
    { name: "Користувач 1", friends: ["Друг 1", "Друг 2"] },
    { name: "Користувач 2", friends: ["Друг 3", "Друг 4"] },
];

let friendName = "Друг 1";

let usersWithTargetFriend = users.find((user) => {
    return user.friends && user.friends.includes(friendName);
});

if (usersWithTargetFriend) {
    console.log(friendName + " знайдено у користувача " + usersWithTargetFriend.name);
} else {
    console.log(friendName + " не знайдено у жодного користувача");
}
// ex 3
let people = [
    { name: "Особа 1", friends: ["Друг 1", "Друг 2"] },
    { name: "Особа 2", friends: ["Друг 3", "Друг 4", "Друг 5"] },
    { name: "Особа 3", friends: ["Друг 6"] },
];

people.sort((a, b) => {
    return a.friends.length - b.friends.length;
});

let sortedNames = people.map(function (person) {
    return person.name;
});

console.log("Масив імен людей, відсортованих за кількістю друзів:", sortedNames);

// ex 4
let skills = [
    {name: 'Vlad', skil: 'karate'},
    {name: 'Egor', skil: 'football'},
    {name: 'Sonia', skil: 'basketball'},
    {name: 'Artem', skil: 'voleyball'},
];
    
let sorted = skills.sort((a, b) => a.skil.localeCompare(b.skil));
    
console.log(sorted);
    