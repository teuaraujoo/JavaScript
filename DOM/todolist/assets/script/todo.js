const input = document.querySelector('input');
const button = document.querySelector('button');
const itens = document.querySelector('ul');
const li = document.getElementsByTagName('LI');


button.addEventListener("click", () => {
    if (input.value === '') {

        Swal.fire({
            title: 'Ops!',
            text: 'Digite uma tarefa!',
            icon: 'error',
            confirmButtonColor: '#ff4d3d',
        });
        return;
    };

    const newItem = document.createElement('li');
    newItem.textContent = input.value;
    itens.appendChild(newItem);

    const span = document.createElement("span");
    span.textContent = "\u00d7";
    newItem.appendChild(span);

    input.value = '';

    newItem.addEventListener("click", () => {

        newItem.classList.toggle("checked");
    });

    const removeActivity = () => {
        span.addEventListener("click", () => {
            newItem.remove();
        });
    };

    return removeActivity();
});
