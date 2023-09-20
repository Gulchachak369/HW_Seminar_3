// Cоздать функцию greeting, которая принимает в качестве параметра имя человека и выводит приветствие, используя переданное ей имя, в консоль.

const username = prompt ('Введите имя: ');

function greeting(name){
    alert(`Привет, ${username}!`);
}

greeting(username);