// const data = new Date();
// // let mes = "" + data.getMonth() + 1;
// // let ano = data.getFullYear();
// // let mesAno = `${mes}/${ano}`;

// console.log(data.toDateString());
// console.log(mesAno);
// console.log(Date.now()) // timestamp: valor que representa milesegundos que passaram desde janeiro de 1970

// 2026-01-17T18:03:08.468Z -> formato de saída new Date();

const VALIDITY = "16/08/27";

function productCondition (validity) {

    const productValidate = () => {

        const today = new Date();

        const [dayV, monthV, yearV] = validity.split('/');

        const day = Number(dayV);
        const month = Number(monthV);
        const year = Number('20' + yearV);

        const VALIDITY_DATE = new Date(year, month - 1, day);

        return VALIDITY_DATE > today;
    };


    return productValidate();
};

const condition = productCondition(VALIDITY);

if (!condition){
    console.log("Invalid Product!");
} else {
    console.log("Valid Product!");
};