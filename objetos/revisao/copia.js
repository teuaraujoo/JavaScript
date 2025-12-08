const config = { 
    tema: "dark", 
    layout: { largura: 1200 } 
};

const shallowCopy = {...config};
// console.log(shallowCopy);
const deepCopy = JSON.parse(JSON.stringify(config));
console.log(deepCopy);

shallowCopy.layout = { largura: 1440 };
deepCopy.layout = { largura: 1920 };

console.log(config);
console.log(shallowCopy);
console.log(deepCopy);
