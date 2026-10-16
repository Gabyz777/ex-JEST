const sistema = require('./sistema');

// 1. Verificador de Palíndromo (ehPalindromo)
describe('Verificador de Palíndromo', () => {
    test('Deve retornar true para palavras palíndromas', () => {
        expect(sistema.ehPalindromo('Arara')).toBe(true);
        expect(sistema.ehPalindromo('radar')).toBe(true);
        expect(sistema.ehPalindromo('javascript')).toBe(false);
    });
});

// 2. Contador de Vogais (contarVogais)
describe('Contador de Vogais', () => {
    test('Deve conter uma palavra com vogais', () => {
        expect(sistema.contarVogais('escola')).toBe(3);
        expect(sistema.contarVogais('xyz')).toBe(0);
    });
});

// 3. Calculadora de Fatorial (calcularFatorial)
describe('Calculadora de Fatorial', () => {
    test('Deve calcular o fatorial corretamente', () => {
        expect(sistema.calcularFatorial(5)).toBe(120);
        expect(sistema.calcularFatorial(0)).toBe(1);
        expect(() => sistema.calcularFatorial(-2)).toThrow('Não existe fatorial de número negativo');
    });
});

// 4. Removedor de Duplicatas (removerDuplicatas)
describe('Removedor de Duplicatas', () => {
    test('Deve remover duplicatas de um array', () => {
        expect(sistema.removerDuplicatas([1, 1, 2, 3, 3])).toEqual([1, 2, 3]);
    });
});

// 5. Validador de Agendamento (agendarConsulta)
describe('Validador de Agendamento (Dias Úteis)', () => {
    test('Deve permitir agendar apenas em dias úteis', () => {
        expect(sistema.agendarConsulta(new Date('2026-10-16T00:00:00'))).toBe('Consulta agendada com sucesso');
        expect(() => sistema.agendarConsulta(new Date('2026-10-17T00:00:00'))).toThrow('Clínica fechada aos finais de semana');
    });
});

// 6. Formatador de Moeda (formatarMoeda)
describe('Formatador de Moeda', () => {
    test('Deve testar um valor válido', () => {
        expect(sistema.formatarMoeda(10)).toBe('R$ 10,00');
        expect(sistema.formatarMoeda(15.5)).toBe('R$ 15,50');
        expect(() => sistema.formatarMoeda('abc')).toThrow('Valor inválido');
    });
});

// 7. Validador de CPF Básico (validarCpfBasico)
describe('Validador de CPF Básico', () => {
    test('Deve validar o CPF corretamente', () => {
        expect(sistema.validarCpfBasico('123.456.789-09')).toBe(true);
        expect(sistema.validarCpfBasico('12345678909')).toBe(true);
        expect(sistema.validarCpfBasico('111.111.111-11')).toBe(false);
        expect(sistema.validarCpfBasico('11111111111')).toBe(false);
    });
});

// 8. Cálculo de Ingresso (calcularIngresso)
describe('Cálculo de Ingresso', () => {
    test('Deve calcular o preço do ingresso corretamente', () => {
        expect(sistema.calcularIngresso(65, true, 3)).toBe(20);
        expect(sistema.calcularIngresso(30, true, 3)).toBe(20);
        expect(sistema.calcularIngresso(30, false, 2)).toBe(40);
    });
});

// 9. Conta Bancária (ContaBancaria)
describe('Classe de Conta Bancária', () => {
    let conta;

    beforeEach(() => {
        conta = new sistema.ContaBancaria('Gabrielly');
    });

    test('Deve criar uma conta bancária e realizar operações', () => {
        expect(conta.obterSaldo()).toBe(0);
        expect(() => conta.sacar(1000)).toThrow('Saldo insuficiente');
        conta.depositar(300);
        conta.sacar(200);
        expect(conta.obterSaldo()).toBe(100);
    });
});

// 10. Consulta de Clima (obterClima) - Avançado
describe('Consulta de Clima (Avançado)', () => {
    test('Deve obter o clima corretamente usando um mock', async () => {
        const apiFalsa = {
            buscar: async () => ({ temperatura: 28 })
        };
        await expect(sistema.obterClima('São Paulo', apiFalsa)).resolves.toBe('A temperatura em São Paulo é de 28°C');
    });
});
