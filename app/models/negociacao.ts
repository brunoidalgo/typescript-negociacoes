export class Negociacao {

    // Cria uma propriedade dos parametros do seu construtor e por debaixos dos panos faz a atribuição.
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number) {}

    get volume():number {
        return this.quantidade * this.valor;
    }

    get date():Date {
        const data = new Date(this._data.getTime());
        return data;
    }

};
