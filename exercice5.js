'use strict'
const phones = [
    { name: "Marcus Aurelius", phone: "+380445554433" },
    { name: "Julius Caesar", phone: "+380671112233" },
    { name: "Cicero", phone: "+380501234567" },
    { name: "Seneca", phone: "+380931234000" }
];
const findPhoneByName = (name) => {
    for (let i = 0; i < phones.length; i++) {
        if (phones[i].name === name) {
            return phones[i].phone;
        }
    }
    return "error: user not found";
};
console.log("Cicero's phone is " + findPhoneByName("Cicero"));
console.log("Nero's phone is " + findPhoneByName("Nero"));

const phoneBook = {
    "Marcus Aurelius": "+380445554433",
    "Julius Caesar": "+380671112233",
    "Cicero": "+380501234567",
    "Seneca": "+380931234000"
};
const hashFindPhoneByName = (name) => {
    const phone = phoneBook[name];
    if (phone === undefined) {
        return "error: user not found";
    }
    return phone;
};
console.log("Seneca's phone is " + hashFindPhoneByName("Seneca"));
console.log("Nero's phone is " + hashFindPhoneByName("Nero"));
