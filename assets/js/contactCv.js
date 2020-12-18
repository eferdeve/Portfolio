class Contact {
    constructor() {
        //Vars


        //Events
        $('.eye-on-text').click(this.displayEye.bind(this));
        $('.checkbox').click(this.hideEye.bind(this));


    }
//Methods
    displayEye() {
        $('#display').show()
    }

    hideEye() {
        $('#display').hide();
    }

}