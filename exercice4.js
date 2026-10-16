'use strict'
//ex 7
const fn = () => {
    const user1 = { name: "Ada" };
    let user2 = { name: "Ada" };
    user1.name = "Grace";
    user2.name = "Grace";
    //user1 = { name: "Linus" }; //Помилка: const забороняє змінювати саме посилання
    user2 = { name: "Linus" }; //Працює: let дозволяє записати нове посилання
    console.log(user1.name); //Grace
    console.log(user2.name); //Linus
};
fn();

//ex 8
const createUser = (name, city) => {
    return { name, city };
};
console.log(createUser("Marcus Aurelius", "Roma"));
