const users = ['Ana', 'Joao', 'Carlos', 'Mario'];

const logados = ['Ana', 'Carlos', 'Pedro'];

users.push('Pedro');

// function usersOnline(users, logados){
//     return users.filter(u => logados.includes(u));
// }

// ou

function onlineUsers(){
    let online = [];
    logados.forEach(element => {
        if(users.includes(element)){
            online.push(element);
        }
    });
    return online;
}

console.log(onlineUsers());

// console.log(usersOnline(users, logados));