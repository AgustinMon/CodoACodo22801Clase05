export default class Lista {
    // Params:
    // elementos[]: elementos de la lista
    // clase: clase boostrap

    constructor(elementos, clase){
        this.elementos = elementos;
        this.clase = clase;
    }

    render(){
        let myHtml = `<section class="block">
        <h3>Elemento Lista</h3>
        <ul>`;
        for (let e of this.elementos) {
            myHtml += `<li>${e}</li>`;
        }
        myHtml += `</ul></section>`;
        return myHtml;
    }
}

