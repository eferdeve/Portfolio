class Works {
    constructor() {

        // Variables
        this.box = $('.box');
        this.global = $('.global-container');
        this.content = $('.work-content');
        this.webagency = $('.webagency');
        this.noumea = $('.noumea');
        this.bikemap = $('.bikemap');
        this.jeanf = $('.jeanf');
        this.youjudge = $('.youjudge');
        this.margotdemir = $('.margotdemir');
        this.todolist = $('.todolist');
        this.tabac = $('.tabac');
        //Icons
        this.html = $('.fa-html5');
        this.css = $('fa-css3');
        this.js = $('.fa-js-square');
        this.php = $('.fa-php');
        this.symfony = $('.fab fa-symfony');
        this.database = $('.fa-database');
        this.wordpress = $('.fa-wordpress');

        //Events
        this.webagency.click(this.webagencyItem.bind(this));
        this.noumea.click(this.noumeaItem.bind(this));

        // Reset
    }
    // Methods
    webagencyItem() {
        this.box.not(this.webagency).toggle();
        this.content.toggle();
        this.webagency.toggleClass("activeB");
    }

    noumeaItem() {
        this.box.not(this.noumea).toggle();
        this.content.toggle();
        this.noumea.toggleClass("activeB");
    }

}