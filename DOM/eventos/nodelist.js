// nodelist <> array
// se comporta de forma muito similar a um array, logo pode usar as diferentes formas de iterar um array e os metodos (.length, for of, for in....);

const paragrafos = document.querySelector("div");
const elementos = paragrafos.querySelectorAll("p");
const cor = getComputedStyle(document.body);
const background = cor.backgroundColor;

for (p of elementos){
    p.style.backgroundColor = background;
    p.style.color = 'white';
};

// é possível acessar qualquer propriedade css pelo javascript
// propriedades css possuem o mesmo nome em javascript porém em camelCase
