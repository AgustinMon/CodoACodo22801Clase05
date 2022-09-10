export default class Video{

    //Params:

    constructor(url, width, height, css_class){
        this.url = url;
        this.width = width;
        this.height = height;
        this.css_class = css_class;
    }

    render(){
        let myHtml = `<section class="block">
        <h3>Elemento video</h3>
        <video  width="${this.width}" height="${this.height}" class="${this.css_class}" controls>
        <source src="${this.url}" type="video/mp4">
        Your browser does not support the video tag.
        </video>
        </section>`;
        return myHtml;
    }
    
}