1. Ler números até o usuário digitar 0
int num;

do {
    printf("Digite um número: ");
    scanf("%d", &num);
} while (num != 0);

printf("Programa encerrado!");


✔ O laço executa ao menos uma vez e só para quando o valor digitado for 0.

2. Somar números enquanto o usuário quiser
int num, soma = 0;
char opcao;

do {
    printf("Digite um número: ");
    scanf("%d", &num);
    soma += num;

    printf("Deseja continuar? (s/n): ");
    scanf(" %c", &opcao);
} while (opcao == 's' || opcao == 'S');

printf("Soma final = %d", soma);


✔ O usuário decide se continua ou não.

3. Validar senha
int senha;

do {
    printf("Digite a senha (1234): ");
    scanf("%d", &senha);
} while (senha != 1234);

printf("Acesso permitido!");


✔ Repete até a senha correta ser digitada.

4. Ler idade válida (0 a 120)
int idade;

do {
    printf("Digite sua idade: ");
    scanf("%d", &idade);
} while (idade < 0 || idade > 120);

printf("Idade válida: %d", idade);


✔ O do-while força pelo menos uma leitura antes da validação.

5. Menu simples com repetição
int opcao;

do {
    printf("\n--- MENU ---\n");
    printf("1 - Dizer Olá\n");
    printf("2 - Dizer Tchau\n");
    printf("3 - Sair\n");
    scanf("%d", &opcao);

    switch (opcao) {
        case 1: printf("Olá!\n"); break;
        case 2: printf("Tchau!\n"); break;
        case 3: printf("Saindo...\n"); break;
        default: printf("Opção inválida!\n");
    }

} while (opcao != 3);


✔ Menu clássico usando repetição.

6. Média até o usuário parar
int num, qtd = 0;
float soma = 0;
char opc;

do {
    printf("Digite um número: ");
    scanf("%d", &num);

    soma += num;
    qtd++;

    printf("Deseja inserir mais? (s/n): ");
    scanf(" %c", &opc);

} while (opc == 's' || opc == 'S');

printf("Média = %.2f", soma / qtd);


✔ Conta quantos valores foram digitados para calcular a média.

7. Ler números até o usuário digitar um negativo e mostrar o maior
int num, maior = -999999;

do {
    printf("Digite um número (negativo para parar): ");
    scanf("%d", &num);

    if (num >= 0 && num > maior) {
        maior = num;
    }

} while (num >= 0);

printf("Maior número digitado: %d", maior);


✔ Um negativo encerra o laço; o maior é guardado.

8. Tabuada com repetição
int n, i = 1;
char opc;

do {
    printf("Digite um número para mostrar a tabuada: ");
    scanf("%d", &n);

    i = 1;
    do {
        printf("%d x %d = %d\n", n, i, n * i);
        i++;
    } while (i <= 10);

    printf("Deseja ver outra tabuada? (s/n): ");
    scanf(" %c", &opc);

} while (opc == 's' || opc == 'S');


✔ Aqui há dois do-while aninhados.

9. Repetir até a soma dos números passar de 100
int num, soma = 0;

do {
    printf("Digite um número: ");
    scanf("%d", &num);
    soma += num;
} while (soma <= 100);

printf("Soma final = %d", soma);


✔ Só para quando a soma ultrapassar 100.

🔥 10. DESAFIO — Jogo de adivinhação com limites dinâmicos
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int min, max, chute, secreto;

    printf("Digite o valor mínimo: ");
    scanf("%d", &min);

    printf("Digite o valor máximo: ");
    scanf("%d", &max);

    srand(time(NULL));
    secreto = min + rand() % (max - min + 1);

    do {
        printf("Tente adivinhar o número (%d a %d): ", min, max);
        scanf("%d", &chute);

        if (chute > secreto) {
            printf("Muito alto!\n");
        } else if (chute < secreto) {
            printf("Muito baixo!\n");
        }

    } while (chute != secreto);

    printf("Parabéns! Você acertou: %d", secreto);
}


✔ O jogador tenta adivinhar até acertar, com dicas de maior/menor.