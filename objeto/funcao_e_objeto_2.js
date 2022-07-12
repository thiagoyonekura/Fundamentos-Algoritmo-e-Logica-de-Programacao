function criaData(dia, mes, ano) {
    return {
        dia,                //EVITAR REPETIÇÃO;
        mes,
        ano,
        exibir() {
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    }
};


const d1 = criaData(1, 2, 2010);
const d2 = criaData(21, 12, 2023);
const d3 = criaData(12, 3, 2022);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());