# 📘 Explicação: Tipos de Variáveis em JavaScript

Você já domina `let`, mas existem outras duas muito importantes: **var** e **const**.

## **1) var – O antigo**

* Foi a primeira forma de declarar variável.
* Possui **escopo global ou de função**, o que pode causar problemas.
* Permite redeclarar a variável (isso gera muitos bugs).

📌 Hoje em dia, **não é recomendado**, exceto em casos muito específicos.

---

## **2) let – A mais usada**

* Tem **escopo de bloco** (só existe dentro de `{ }`).
* Não permite redeclaração, mas permite **reatribuição**.

Exemplo:

```javascript
let idade = 20;
idade = 21; // ok
```

É a variável padrão para valores que vão mudar.

---

## **3) const – A constante**

* Também tem **escopo de bloco**.
* **Não** pode ser reatribuída.
* Usada para valores que não mudam.

Exemplo:

```javascript
const PI = 3.14159;
```

📌 *Dica:* `const` não impede que **arrays e objetos sejam modificados**, apenas impede a troca da referência.

Exemplo:

```javascript
const numeros = [1, 2, 3];
numeros.push(4); // permitido!
```

---

# 🎯 Quando usar cada uma?

* **let** → Use para quase tudo: valores que vão mudar.
* **const** → Use para valores que não mudam ou estruturas fixas (funções, arrays, objetos).
* **var** → Praticamente caiu em desuso.

---

Se quiser, posso criar também **gabarito**, ou transformar isso em uma **lista interativa HTML/CSS/JS** para você treinar!

https://www.devmedia.com.br/javascript-variaveis-e-constantes/41012