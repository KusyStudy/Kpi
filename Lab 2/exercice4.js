'use strict'

const fn = () => {
    const user1 = { name: "Ada" };
    let user2 = { name: "Ada" };
    user1.name = "Grace";
    user2.name = "Grace";
    user2 = { name: "Linus" };
    console.log(user1.name);
    console.log(user2.name);
};
fn();

const createUser = (name, city) => {
    return { name, city };
};
console.log(createUser("Marcus Aurelius", "Roma"));
