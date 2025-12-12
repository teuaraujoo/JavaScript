1. Soma até estabilizar (para quando repetir o mesmo número duas vezes seguidas)
soma = 0
anterior = None

while True:
    n = int(input("Número: "))
    soma += n

    if n == anterior:  # repetiu duas vezes seguidas
        break

    anterior = n

print("Soma total:", soma)

2. Verificar número primo apenas com while
n = int(input("Número: "))

if n <= 1:
    print("Não é primo.")
else:
    divisor = 2
    primo = True

    while divisor * divisor <= n:  # até a raiz quadrada
        if n % divisor == 0:
            primo = False
            break
        divisor += 1

    if primo:
        print("É primo!")
    else:
        print("Não é primo.")

3. Sequência de Collatz + contar passos
n = int(input("Número: "))
passos = 0

while n != 1:
    print(n, end=" → ")
    if n % 2 == 0:
        n = n // 2
    else:
        n = 3*n + 1
    passos += 1

print(1)
print("Total de passos:", passos)

4. Maior sequência crescente consecutiva
print("Digite números (0 para parar):")

maior_seq = 1
seq_atual = 1

anterior = int(input("Número: "))
if anterior == 0:
    print("Nenhuma sequência.")
    exit()

while True:
    n = int(input("Número: "))
    if n == 0:
        break

    if n > anterior:
        seq_atual += 1
    else:
        seq_atual = 1

    if seq_atual > maior_seq:
        maior_seq = seq_atual

    anterior = n

print("Maior sequência crescente:", maior_seq)

5. Adivinhe o número com 7 tentativas
import random

secreto = random.randint(1, 100)
tentativas = 7

while tentativas > 0:
    palpite = int(input("Seu palpite: "))

    if palpite == secreto:
        print("Acertou!")
        break
    elif palpite < secreto:
        print("Maior!")
    else:
        print("Menor!")

    tentativas -= 1
    print("Tentativas restantes:", tentativas)

if tentativas == 0:
    print("Você perdeu. O número era", secreto)

6. Número palíndromo sem usar string
n = int(input("Número: "))
original = n
invertido = 0

while n > 0:
    digito = n % 10
    invertido = invertido * 10 + digito
    n //= 10

if invertido == original:
    print("É palíndromo!")
else:
    print("Não é palíndromo.")

7. Fatorial de grande porte
n = int(input("Número: "))
f = 1
i = 1

while i <= n:
    f *= i
    i += 1

print(f"Fatorial de {n} é {f}")

8. Encerrar ao digitar 3 números decrescentes seguidos + maior número digitado
maior = -999999
crescente = 0

print("Digite números:")

a = int(input())
b = int(input())
c = int(input())

# já temos 3 números digitados
while not (a > b > c):  # só para quando isso for verdade
    maior = max(maior, a, b, c)

    a = b
    b = c
    c = int(input())

# atualiza o último
maior = max(maior, c)

print("Você digitou três decrescentes seguidos.")
print("Maior número digitado:", maior)

9. Número perfeito sem usar for
n = int(input("Número: "))
soma = 0
d = 1

while d < n:
    if n % d == 0:
        soma += d
    d += 1

if soma == n:
    print("É perfeito!")
else:
    print("Não é perfeito.")

10. Sequência customizada usando while
inicio = float(input("Início: "))
fim = float(input("Fim: "))
pas = float(input("Passo: "))
op = input("Operação (+, -, *, /): ")

atual = inicio

while (pas > 0 and atual <= fim) or (pas < 0 and atual >= fim):
    print(atual)

    if op == '+':
        atual += pas
    elif op == '-':
        atual -= pas
    elif op == '*':
        atual *= pas
    elif op == '/':
        if pas == 0:
            print("Erro: divisão por zero.")
            break
        atual /= pas