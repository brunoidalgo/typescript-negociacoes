export class Negociacao {
    // Cria uma propriedade dos parametros do seu construtor e por debaixos dos panos faz a atribuição.
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get date() {
        const data = new Date(this._data.getTime());
        return data;
    }
}
;
