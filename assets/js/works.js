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

        //Animations entrée
        this.animate();
        this.animateSquare();
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

    animate() {
        $('.fixed-left-bottom-title').show();
        $('.fixed-left-bottom-title').css('animation', 'typebar .5s 16');
        $('.fixed-left-bottom-title h2').css('animation', 'typeTitleWork 4s 2 steps(12)');
    }

    animateSquare() {
        $('.bg-cube').fadeIn(3000)
        $('.bg-cube').css('animation', 'bg-cube 20s linear infinite');
        $('.bg-cube2').fadeIn(3000);
        $('.bg-cube2').css('animation', 'bg-cube 15s linear infinite');
        $('.bg-cube3').fadeIn(3000);
        $('.bg-cube3').css('animation', 'bg-cube 10s linear infinite');
    }

}