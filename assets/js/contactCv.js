class Contact {
    constructor() {
        //Vars
        this.eye = $('.fa-eye');


        //Events
        $('.eye-on-text').click(this.displayEye.bind(this));
        $('.checkbox').click(this.hideEye.bind(this));
        $('.right').click(() => {
            $('.form-title').hide();
        });


    }
//Methods
    displayEye() {
        $('#display').show();
        this.eye.show();
    }

    hideEye() {
        $('#display').hide();
        this.eye.hide();
    }

}