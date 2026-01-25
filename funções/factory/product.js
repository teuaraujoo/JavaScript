function createProduct(name, value){
    return {
        name, 
        value,
        set discount(value){
            this.value = value;
        }
    };
};

const p1 = createProduct('Notebook', 1500);
p1.value = 1800;
console.log(p1);