export default class Button {
    //Params:
    //Text: cadena de texto con formato string
    //Clase: cadena de texto con estilo del css o de bootstrap

    constructor(texto,css_clase){
        this.text = texto;
        this.clase = css_clase;
    }

    render() {
        let myHtml = `
        <section class="block">
        <h3>Elemento Boton</h3>
        <Button class="${this.clase}">${this.text}</Button>
        </section>`;
        return myHtml;
    }

}  
