// event.preventDefault
// el.insertAdjacentElement

import { ValidaCPF } from "./cpf.js";

class ValidaForms {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener("submit", e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault(); // impede o envio padrão
        const campos = this.checkFields();
    }

    // validacao dos campos
    checkFields() {
        let valid = true; // flag

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove(); // remove a div de error
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {

            let label = campo.previousElementSibling.innerHTML; // irmão anterior ao input

            if (/* campo.value === '' */ !campo.value) {
                this.createError(campo, `${label} não pode estar vazio!`);
                valid = false;
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) {
                    valid = false;
                }
            }

            if(campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) {
                    valid = false;
                }
            }
            
        }
    }
    
    validaUsuario(campo) {
        const usuario = campo.value;
        const regex = /^[A-Za-z0-9]+$/;
        const flag = true;
        if (!regex.test(usuario)) {
            this.createError(campo, 'Usuário não pode conter caractere especial');
            flag = false;
        }
        if (usuario.length < 3 || usuario.length > 12) {
            this.createError(campo, 'Usuário não pode conter menos que 3 ou mais que 12 caracteres');
            flag = false;
        }

        return flag;
    }


    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);
        if (!cpf.validar()) {
            this.createError(campo, 'CPF inválido');
        }
        return true;
    }

    // criação da mensagem de error
    createError(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div); // insere o elemento  após o alvo, no caso após o input
    }


}

const valida = new ValidaForms();