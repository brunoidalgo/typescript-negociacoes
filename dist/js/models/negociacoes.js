export class Negociacoes {
    constructor() {
        // Escrevendo Array<Generics> sem o generics.
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // Antes ArrayReadOnly<Negociacao> somente leitura.
    list() {
        return [...this.negociacoes];
    }
}
;
