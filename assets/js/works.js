class Works {
    constructor() {

        // Variables
        this.box = $('.box');
        this.global = $('.global-container');
        this.content = $('.work-content');
        this.links = $('.work-links');
        this.skills = $('.work-skills');
        this.title = $('.work-title');
        this.text = $('.work-text');
        this.link = $('.website-link');

        this.webagency = $('.webagency');
        this.noumea = $('.noumea');
        this.bikemap = $('.bikemap');
        this.jeanf = $('.jeanf');
        this.youjudge = $('.youjudge');
        this.margotdemir = $('.margotdemir');
        this.todolist = $('.todolist');
        this.tabac = $('.tabac');
        //Icons
        this.htmlcss = $('.htmlcsslg');
        this.htmlcssjs = $('.htmlcssjslg');
        this.jquery = $('.jqlg');
        this.wordpress = $('.wplg');
        this.php = $('.phplg');
        this.symfony = $('.sflg');
        this.react = $('.reactlg');

        //Events
        this.webagency.click(this.webagencyItem.bind(this));
        this.noumea.click(this.noumeaItem.bind(this));
        this.bikemap.click(this.bikemapItem.bind(this));
        this.jeanf.click(this.jeanfItem.bind(this));
        this.youjudge.click(this.youjudgeItem.bind(this));
        this.margotdemir.click(this.margotdemirItem.bind(this));
        this.todolist.click(this.todolistItem.bind(this));
        this.tabac.click(this.tabacItem.bind(this));

        //Animation d'entrée
        $('.card-menu-section-3').click(this.InAnimateBox.bind(this));
        this.box.click(this.animateSkillLinks.bind(this));
        this.box.click(this.darkMode.bind(this));

        // Reset
    }
    // Methods
    InAnimateBox() {
        $('.global-container .box:nth-child(1)').css('animation', 'boxin 0.8s backwards');
        $('.global-container .box:nth-child(2)').css({
            'animation' : 'boxin 0.8s backwards',
            'animation-delay' : '0.2s'
        });
        $('.global-container .box:nth-child(3)').css({
            'animation' : 'boxin 0.8s backwards',
            'animation-delay' : '0.4s'
        });
        $('.global-container .box:nth-child(4)').css({
            'animation' : 'boxin 0.8s backwards',
            'animation-delay' : '0.6s'
        });
        $('.global-container .box:nth-child(5)').css({
            'animation' : 'boxin 0.8s backwards',
            'animation-delay' : '0.8s'
        });
        $('.global-container .box:nth-child(6)').css({
            'animation' : 'boxin 0.8s backwards',
            'animation-delay' : '1s'
        });
        $('.global-container .box:nth-child(7)').css({
            'animation' : 'boxin 0.8s backwards',
            'animation-delay' : '1.2s'
        });
        $('.global-container .box:nth-child(8)').css({
            'animation' : 'boxin 0.8s backwards',
            'animation-delay' : '1.4s'
        });
    }

    animateSkillLinks() {
        this.links.toggle();
        this.skills.toggle();
    }

    darkMode() {
        $('.card-menu-section-3').toggleClass("dark-mode");
    }

    webagencyItem() {
        this.box.not(this.webagency).toggle();
        this.content.toggle();
        this.webagency.toggleClass("activeB");
        this.title.html('Webagency');
        this.text.html(
            "Premier projet de la formation développeur web d'Openclassrooms, ce projet consiste en l'intégration d'une maquette graphique en HTML CSS pure sans framework en respectant les bons usages de la sémantique HTML."
            );
        this.link.show();
        this.link.attr("href", "http://projetocferres.com/");
        //logos
        this.htmlcss.show();
        this.htmlcssjs.hide();
        this.jquery.hide();
        this.wordpress.hide();
        this.php.hide();
        this.symfony.hide();
        this.react.hide();
        this
    }

    noumeaItem() {
        this.box.not(this.noumea).toggle();
        this.content.toggle();
        this.noumea.toggleClass("activeB");
        this.title.html("Noumea-touring");
        this.text.html(
            "Deuxième projet Openclassrooms. Création d'un site fonctionnel pour le compte de l'agence de tourisme de la ville de Nouméa qui mets en avant les activités touristiques principales et les évènements de la ville organisés. Ce site est réalisé sous Wordpress et l'objectif visé est de permettre le référencement de celui-ci en respectant les pratiques de bases du SEO et la gestion d'un calendrier des évènement."
            );
        this.link.show();
        this.link.attr("href", "https://noumea-touring.com/");
        //logos
        this.htmlcss.show();
        this.htmlcssjs.hide();
        this.jquery.hide();
        this.wordpress.show();
        this.php.hide();
        this.symfony.hide();
        this.react.hide();
    }

    bikemapItem() {
        this.box.not(this.bikemap).toggle();
        this.content.toggle();
        this.bikemap.toggleClass("activeB");
        this.title.html("Bikemap");
        this.text.html(
            "Troisième projet Openclassrooms. Création d'une site en utilisant principalement Javascript orienté objet pour la mise en place d'un système de réservation de vélo dans la ville de Lyon en utilisant une API dédié, permettant ainsi aux utilisateurs de réserver un  vélo rapidement en ligne. L'objectif est Front-end et d'offrir une navigation ergonomique et intuitive."
            );
        this.link.show();
        this.link.attr("href", "http://bikemap.projetocferres.com/");
        //logos
        this.htmlcss.hide();
        this.htmlcssjs.show();
        this.jquery.show();
        this.wordpress.hide();
        this.php.hide();
        this.symfony.hide();
        this.react.hide();
    }

    jeanfItem() {
        this.box.not(this.jeanf).toggle();
        this.content.toggle();
        this.jeanf.toggleClass("activeB");
        this.title.html("Blog pour écrivain");
        this.text.html(
            "Quatrième projet Openclassrooms. Création d'un Blog en ligne pour un écrivain dôté d'un espace d'administration sur mesure afin que le client puisse gérer le contenu de son site (CRUD). Réalisé en HTML CSS Javascript et PHP orienté objet en architecture MVC."
            );
        this.link.show();
        this.link.attr("href", "http://jeanforteroche.projetocferres.com/");
        //logos
        this.htmlcss.hide();
        this.htmlcssjs.show();
        this.jquery.show();
        this.wordpress.hide();
        this.php.show();
        this.symfony.hide();
        this.react.hide();
    }

    youjudgeItem() {
        this.box.not(this.youjudge).toggle();
        this.content.toggle();
        this.youjudge.toggleClass("activeB");
        this.title.html("Youjudge");
        this.text.html(
            "Cinquième projet Openclassrooms. C'est un projet libre. J'ai choisis de me consacrer aux jeux vidéos et aux streamers de la plateforme Twitch. Ce site répertorie selon un jugement personnel les meilleurs streamers de Twitch et les jeux en vogue sur la plateforme (les plus regardés). Le site fût réalisé sous Symfony 4 et 5 et utilisant l'api de Twitch. Il est également dôté d'un espace administrateur sur mesure."
            );
        this.link.show();
        this.link.attr("href", "http://youjudge.projetocferres.com/");
        //logos
        this.htmlcss.hide();
        this.htmlcssjs.show();
        this.jquery.show();
        this.wordpress.hide();
        this.php.show();
        this.symfony.show();
        this.react.hide();
    }

    margotdemirItem() {
        this.box.not(this.margotdemir).toggle();
        this.content.toggle();
        this.margotdemir.toggleClass("activeB");
        this.title.html("Vitrine psychologue");
        this.text.html("Site vitrine pour le compte d'une psychologue travaillant à son compte réalisé en HTML CSS Javascript objet"
        );
        this.link.show();
        this.link.attr("href", "http://margotdemirdjian.com/");
        //logos
        this.htmlcss.hide();
        this.htmlcssjs.show();
        this.jquery.show();
        this.wordpress.hide();
        this.php.show();
        this.symfony.hide();
        this.react.hide();
    }

    todolistItem() {
        this.box.not(this.todolist).toggle();
        this.content.toggle();
        this.todolist.toggleClass("activeB");
        this.title.html("Todolist");
        this.text.html(
            "Un petit projet fait en ReactJs, une liste de choses à faire avec un tri possible. Application React de 3 composants fonctionnels."
            );
        this.link.show();
        this.link.attr("href", "http://todolist.enzoferres.com/");
        //logos
        this.htmlcss.hide();
        this.htmlcssjs.show();
        this.jquery.show();
        this.wordpress.hide();
        this.php.hide();
        this.symfony.hide();
        this.react.show();
    }

    tabacItem() {
        this.box.not(this.tabac).toggle();
        this.content.toggle();
        this.tabac.toggleClass("activeB");
        this.title.html("Tabac");
        this.text.html(
            "Projet personnel de référencement en cours de production."
            );
        this.link.hide();
        //logos
        this.htmlcss.show();
        this.htmlcssjs.hide();
        this.jquery.hide();
        this.wordpress.show();
        this.php.hide();
        this.symfony.hide();
        this.react.hide();
    }

}