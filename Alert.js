import Noty from 'noty';

export default class Alert {
    constructor(type, text) {
        this.text = text;
        this.type = type;
        this.alert();
    }

    alert(){
        new Noty({
            theme: 'bootstrap-v3',
            type: this.type,
            layout: 'topCenter',
            progressBar: false,
            timeout: 1000,
            text: this.text,
        }).show();
    }
}
