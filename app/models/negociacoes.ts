import { Negociacao } from "./negociacao";

export class Negociacoes {
    // Escrevendo Array<Generics> sem o generics.
    private negociacoes:Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    // Antes ArrayReadOnly<Negociacao> somente leitura.
    list(): readonly Negociacao[] {
        return [...this.negociacoes];
    }

};
