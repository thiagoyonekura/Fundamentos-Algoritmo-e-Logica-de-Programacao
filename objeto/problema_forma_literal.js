const d1 = {
    dia: 1,
    mes: 2,
    ano: 2010,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};

const d2 = {
    dia: 21,
    mes: 12,
    ano: 2023,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};

const d3 = {
    dia: 12,
    mes: 3,
    ano: 2022,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());