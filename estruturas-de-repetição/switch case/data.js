// const bloco = document.querySelector("div");

// const dateText = document.createElement("p");

// const date = new Date();

// const day = date.getDay();
// const month = date.getMonth();
// const year = date.getFullYear();
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const data = date.getDate();
// let monthText;

// switch (month) {
//     case 0:
//         monthText = "Janeiro";
//         break;
//     case 1:
//         monthText = "Janeiro";
//         break;
//     case 2:
//         monthText = "Janeiro";
//         break;
//     case 3:
//         monthText = "Janeiro";
//         break;
//     case 4:
//         monthText = "Janeiro";
//         break;
//     case 5:
//         monthText = "Janeiro";
//         break;
//     case 6:
//         monthText = "Janeiro";
//         break;
//     case 7:
//         monthText = "Janeiro";
//         break;
//     case 8:
//         monthText = "Janeiro";
//         break;
//     case 9:
//         monthText = "Janeiro";
//         break;
//     case 10:
//         monthText = "Janeiro";
//         break;
//     case 11:
//         monthText = "Janeiro";
//         break;
//     default:
//         alert('mês indefinido');
// }

// switch (day) {
//     case 0:
//         dateText.textContent = `Domingo, ${data} de ${monthText} de ${year} ${hours}:${minutes > 10 ? minutes : `0${minutes}`}`;
//         bloco.appendChild(dateText);
//         break;
//     case 1:
//         dateText.textContent = `Segunda, ${data} de ${monthText} de ${year} ${hours}:${minutes > 10 ? minutes : `0${minutes}`}`;
//         bloco.appendChild(dateText);
//         break;
//     case 2:
//         dateText.textContent = `Terça, ${data} de ${monthText} de ${year} ${hours}:${minutes > 10 ? minutes : `0${minutes}`}`;
//         bloco.appendChild(dateText);
//         break;
//     case 3:
//         dateText.textContent = `Quarta, ${data} de ${monthText} de ${year} ${hours}:${minutes > 10 ? minutes : `0${minutes}`}`;
//         bloco.appendChild(dateText);
//         break;
//     case 4:
//         dateText.textContent = `Quinta, ${data} de ${monthText} de ${year} ${hours}:${minutes > 10 ? minutes : `0${minutes}`}`;
//         bloco.appendChild(dateText);
//         break;
//     case 5:
//         dateText.textContent = `Sexta, ${data} de ${monthText} de ${year} ${hours}:${minutes > 10 ? minutes : `0${minutes}`}`;
//         bloco.appendChild(dateText);
//         break;
//     case 6:
//         dateText.textContent = `Sábado, ${data} de ${monthText} de ${year} ${hours}:${minutes > 10 ? minutes : `0${minutes}`}`;
//         bloco.appendChild(dateText);
//         break;
//     default:
//         alert('Dia indefinido');
// };


const bloco = document.querySelector("div");
const dateText = document.createElement("p");
const date = new Date();
const opcoes = {
    dateStyle: "full",
    timeStyle: "short"
}

dateText.textContent = date.toLocaleString("pt-BR", opcoes);
bloco.appendChild(dateText);
