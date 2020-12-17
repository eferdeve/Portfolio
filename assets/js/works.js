class Works {
    constructor() {

        // Variables
        this.webagency = $('.webagency');
        this.noumea = $('.noumea-touring');
        this.bikemap = $('.bikemap');
        this.jeanf = $('.jeanforteroche');
        this.youjudge = $('.youjudge');
        this.margotdemir = $('.margotdemir');
        this.tabac = $('.tabac');
        this.todolist = $('.todolist');
        this.content = $('.main-container');
        this.title = $('.work-content-title');
        this.text = $('.work-content-text');
        this.url = $('.url');
        this.code = $('.source-code');
        this.nocode = $('.nocode');
        this.noUrl = $('.noUrl');
        this.workLinks = $('.work-links');
        this.swiper = $('.swiper-container');
        this.menu = $('.card-menu-menu-btn');
        this.card = $('.thecard');
        this.stackBox = $('.stacks-used');
        this.slideActive = $('.swiper-slide-active');
        this.icon = document.createElement('i')

        //Icons
        this.html = $('.fa-html5');
        this.css = $('fa-css3');
        this.js = $('.fa-js-square');
        this.php = $('.fa-php');
        this.symfony = $('.fa-symfony');
        this.database = $('.fa-database');
        this.wordpress = $('.fa-wordpress');

        //Events
        this.webagency.click(this.webagencyItem.bind(this));
        this.noumea.click(this.noumeaItem.bind(this));
        this.bikemap.click(this.bikemapItem.bind(this));
        this.jeanf.click(this.jeanfItem.bind(this));
        this.youjudge.click(this.youjudgeItem.bind(this));
        this.margotdemir.click(this.margotdemirItem.bind(this));
        this.tabac.click(this.tabacItem.bind(this));
        this.todolist.click(this.todolistItem.bind(this));

        //Animations au click sur le carousel
        this.swiper.click(this.animate.bind(this));
        this.swiper.click(this.animateSquare.bind(this));
        // Reset
        this.menu.click(this.reset.bind(this));
    }
    // Methods
    webagencyItem() {
        this.content.show();
        this.title.html("Webagency (Projet 1 OCR)");
        this.text.html("Intégration d'une maquette graphique en HTML CSS sans framework.");
        this.url.show();
        this.url.attr("href", "http://projetocferres.com/");
        this.code.show();
        this.code.attr("href", "https://github.com/eferdeve/Webagency");
        this.card.css('box-shadow', 'inset 0px 0px 25px #6e6c6d');

        console.log(mySwiper.activeIndex);
    }

    noumeaItem() {
        this.content.show();
        this.title.html("Nouméa-Touring (Projet 3 OCR)");
        this.text.html("Réalisation d'un site pour l'office de tourisme de la ville de Nouméa en utilisant le CMS Wordpress. Le site doit être référencable en utilisant les bases du SEO, et dôté d'un thème personnalisé en modifiant le code CSS interne.");
        this.url.show();
        this.url.attr("href", "https://noumea-touring.com/");
        this.code.hide();
        this.card.css('box-shadow', 'inset 0px 0px 25px rgb(22 126 211)');
        console.log(mySwiper.realIndex);
    }

    bikemapItem() {
        this.content.show();
        this.title.html("Bikemap (Projet 3 OCR)");
        this.text.html("Site de réservation de vélo avec l'API de Jcdecaux Ce site est développé en HTML CSS JAVASCRIPT.");
        this.url.show();
        this.url.attr("href", "http://bikemap.projetocferres.com/");
        this.code.show();
        this.code.attr("href", "https://github.com/eferdeve/Bikemap");
        this.card.css('box-shadow', 'inset 0px 0px 25px #6f584d');
        console.log(mySwiper.realIndex);
    }

    jeanfItem() {
        this.content.show();
        this.title.html("Blog écrivain (Projet 4 OCR)");
        this.text.html("Site pour un client exclusivement développé en PHP pure et en respectant la notion de Programmation Orientée Objet ( POO ). C'est un site pour un écrivain fictif qui lui permettra de poster ses chapitres via un interface d'administration sur-mesure.");
        this.url.show();
        this.url.attr("href", "http://jeanforteroche.projetocferres.com/");
        this.code.show();
        this.code.attr("href", "https://github.com/eferdeve/projet4OC");
        this.card.css('box-shadow', 'inset 0px 0px 25px #d3e6ec');
    }

    youjudgeItem() {
        this.content.show();
        this.title.html("Youjudge (Projet 5 OCR)");
        this.text.html("Bibliothèque des meilleurs jeux vidéos du moment qui tournent sur la plateforme de streaming TWITCH. Ce site comporte un espace d'administration personnalisé et d'une capacité d'intéraction entre les utilisateurs inscrits. Le site est entièrement développer avec le Framework PHP Symfony 5.");
        this.url.show();
        this.url.attr("href", "http://youjudge.projetocferres.com/");
        this.code.show();
        this.code.attr("href", "https://github.com/eferdeve/youjudge");
        this.card.css('box-shadow', 'inset 0px 0px 25px #54678a');
    }

    margotdemirItem() {
        this.content.show();
        this.title.html("Psychologue");
        this.text.html("Réalisation d'un site vitrine pour une psychologue sophrologue indépendante. Réalisation Front-end en HTML CSS JAVASCRIPT.");
        this.url.show();
        this.url.attr("href", "http://www.margotdemirdjian.com/");
        this.code.hide();
        this.card.css('box-shadow', 'inset 0px 0px 25px #a4817d');
    }

    tabacItem() {
        this.content.show();
        this.title.html("Stop Tabac");
        this.text.html("Un projet personnel en cours de référencement avec Wordpress. (en cours)");
        this.url.hide();
        this.code.hide();
        this.card.css('box-shadow', 'inset 0px 0px 25px #656668');
    }

    todolistItem() {
        this.content.show();
        this.title.html("Todolist en REACTJS");
        this.text.html("Un petit projet fait en ReactJs, une liste de choses à faire avec un tri possible. Application React de 3 composants fonctionnels.");
        this.url.show();
        this.url.attr("href", "http://todolist.enzoferres.com/");
        this.code.show();
        this.code.attr("href", "https://github.com/eferdeve/Todolist");
        this.card.css('box-shadow', 'inset 0px 0px 25px #59b7db');
    }

    animate() {
        this.workLinks.show();
        this.workLinks.css('animation', 'movingUrl 1s linear');
        this.card.css('animation', 'movingCard 1s linear');
        this.stackBox.css('animation', 'stacksMove 1s forwards')
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

    reset() {
        this.swiper.css('animation', '');
        this.workLinks.hide();
        this.content.hide();
        $('.bg-cube').hide();
        $('.bg-cube2').hide();
        $('.bg-cube3').hide();
        $('.bg-cube').css('animation', '');
        $('.bg-cube2').css('animation', '');
        $('.bg-cube3').css('animation', '');
        $('.fixed-left-bottom-title').css('animation', '');
        $('.fixed-left-bottom-title h2').css('animation', '');
        $('.fixed-left-bottom-title').hide();
    }
}