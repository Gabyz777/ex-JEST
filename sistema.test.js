// --- EXERCÍCIOS INICIANTES ---
const sistema = require('./sistema');

// 1) 
describe('Verificar Maioridade', () => {
    test('Deve retornar true para idade maior ou igual a 18', () => {
        expect(sistema.verificarMaioridade(18)).toBe(true);
        expect(sistema.verificarMaioridade(21)).toBe(true);
        expect(sistema.verificarMaioridade(15)).toBe(false);
    });
});

// 2) 
describe('Calcular IMC', () => {
    test('Verfique se o peso 70 e altura 1.75 retornam 22.86', () => {
        expect(sistema.calcularIMC(70, 1.75)).toBe(22.86);
    });
});

// 3)
describe('Formatar Nome', () => {
    test('Deve formatar o nome e sobrenome corretamente', () => {
        expect(sistema.formatarNome('Lucas', 'Silva')).toBe('Silva, Lucas');
    });
});

// 4) 
describe('Verificar se é Par ou Ímpar', () => {
    test('Deve retornar true para números pares e false para ímpares', () => {
        expect(sistema.ehPar(4)).toBe(true);
        expect(sistema.ehPar(7)).toBe(false);
        expect(sistema.ehPar(0)).toBe(true);
    });
});

// 5) 
describe('Converter Celsius para Fahrenheit', () => {
    test('Deve converter corretamente de Celsius para Fahrenheit', () => {
        expect(sistema.celsiusParaFahrenheit(0)).toBe(32);
        expect(sistema.celsiusParaFahrenheit(100)).toBe(212);
        expect(sistema.celsiusParaFahrenheit(-40)).toBe(-40);
    });
});

//  6) 
describe('Adicionar Hobby à Lista', () => {
    test('Deve adicionar um hobby à lista existente', () => {
        const lista = ['volêi', 'ler'];
        const hobby = 'filmes';
        expect(sistema.adicionarHobby(lista, hobby)).toEqual(['volêi', 'ler', 'filmes']);
    });
});

//  7) 
describe('Divisão de Números', () => {
  test('Deve dar erro ao dividir por zero', () => {
    expect(() => sistema.dividir(10, 0)).toThrow('Divisão por zero não permitida');
  });
});

// 8) 
describe('Criar Aluno', () => {
    test('Deve criar a estrutura e dados do objeto de um aluno', () => {
        const aluno = sistema.criarAluno('João', 'DS');
        expect(aluno).toEqual({ nome: 'João', curso: 'DS', ativo: true });
    });
});

// 9) 
describe('Aplicar Desconto', () => {
    test('Deve aplicar o desconto corretamente', () => {
        expect(sistema.aplicarDesconto(100, 10)).toBe(90);
        expect(sistema.aplicarDesconto(100, 0)).toBe(100);
    });
});

// 10) 
describe('Validar Tamanho da Senha', () => {
    test('Deve retornar true para senhas com 8 ou mais caracteres', () => {
        expect(sistema.validarTamanhoSenha('12345')).toBe(false);
        expect(sistema.validarTamanhoSenha('12345678')).toBe(true);
    });
});
