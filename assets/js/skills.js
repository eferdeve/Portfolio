class Skills {
    constructor() {
        // Vars
        this.cards = $('.card');
        this.htmlcss = $('.htmlcss');
        this.javascript = $('.javascript');
        this.php = $('.php');
        this.libs = $('.librairies');
        this.cms = $('.cms');
        this.marketing = $('.marketing');
        this.experience = $('.experience');
        this.title = $('.skill-title');
        this.p1 = $('.skill-p1');
        this.p2 = $('.skill-p2');
        this.p3 = $('.skill-p3');
        this.p4 = $('.skill-p4');
        this.p5 = $('.skill-p5');

        //code logos
        this.htmlcsslogo = $('.htmlcss-logo');
        this.jsLogo = $('.js-logo');
        this.phpLogo = $('.php-logo');
        this.toolsLogo = $('.tools-logo');
        this.cmsLogo = $('.wp-logo');
        this.marketingLogo = $('.marketing-logo');
        this.experiencelogo = $('.experience-logo');

        // Events
        this.cards.click(this.animeLine.bind(this));
        this.htmlcss.click(this.htmlcssCard.bind(this));
        this.javascript.click(this.javascriptCard.bind(this));
        this.php.click(this.phpCard.bind(this));
        this.libs.click(this.libsCard.bind(this));
        this.cms.click(this.cmsCard.bind(this));
        this.marketing.click(this.marketingCard.bind(this));
        this.experience.click(this.experienceCard.bind(this));


        // Animation d'entrée du container
        $('.card-menu-section-2').click(() => {
            $('.skill-container').show();
            $('.container').css('animation', 'cardContainer 1s linear');
        });

        //reset 
        $('.card-menu-menu-btn').click(this.reset.bind(this));

    }
    // Methods
    animeLine() {
        $('.welcome').hide();
        $('.blabla-stacks').hide();
        $('.skill-line').show();
        this.p1.css({
            "animation": "p1 1s forwards",
            "animation-delay": "2s"
        });
        this.p2.css({
            "animation": "p2 1s forwards",
            "animation-delay": "2.5s"
        });
        this.p3.css({
            "animation": "p3 1s forwards",
            "animation-delay": "3s"
        });
        this.p4.css({
            "animation": "p4 1s forwards",
            "animation-delay": "2.5s"
        });
        this.p5.css({
            "animation": "p5 1s forwards",
            "animation-delay": "2s"
        });
    }

    illustrationAnime() {
        $('.block-illustration, .windows-logo, .apple-logo, .malta-flag').animate({
            opacity: 1,
        }, 1000);

    }

    htmlcssCard() {
        this.cards.removeClass('active');
        this.htmlcss.addClass('active');
        this.p1.html('Respect de la sémantique HTML5');
        this.p2.html('Responsive design');
        this.p3.html('Optimisation des balises HTML');
        this.p4.html('Création de templates');
        this.p5.html('Animation CSS3');
        //logo moves
        this.htmlcsslogo.css("transform", "translate(30px, 320px) scale(1.5)");
        this.jsLogo.css('transform', 'translate(0, 0)');
        this.phpLogo.css("transform", "translate(0, 0)");
        this.toolsLogo.css("transform", "translate(0, 0)");
        this.cmsLogo.css("transform", "translate(0, 0)");
        this.marketingLogo.css("transform", "translate(0, 0)");
        this.experiencelogo.css("transform", "translate(0, 0)");
        // Illustrations
        $('<img src="/assets/images/illustrations/htmlIllustration.png">').addClass('block-illustration').appendTo(this.p1);
        $('<img src="/assets/images/illustrations/responsiveIllustration.png">').addClass('block-illustration').appendTo(this.p2);
        $('<img src="/assets/images/illustrations/balisesIllustration.png">').addClass('block-illustration adjustment').appendTo(this.p3);
        $('<img src="/assets/images/illustrations/templateIllustration.png">').addClass('block-illustration').appendTo(this.p4);
        $('<img src="assets/images/illustrations/animationcssIllustration.png">').addClass('block-illustration').appendTo(this.p5);
        this.illustrationAnime();
    }

    javascriptCard() {
        this.cards.removeClass('active');
        this.javascript.addClass('active');
        this.p1.html('programmation Orienté objet');
        this.p2.html('Animations Front-end');
        this.p3.html('Librairies adaptées aux besoins');
        this.p4.html('Manipulation du DOM');
        this.p5.html('Dynamisation du DOM');
        //logo moves
        this.htmlcsslogo.css("transform", "translate(0, 0)");
        this.jsLogo.css('transform', 'translate(-80px, 320px) scale(1.5)');
        this.phpLogo.css("transform", "translate(0, 0)");
        this.toolsLogo.css("transform", "translate(0, 0)");
        this.cmsLogo.css("transform", "translate(0, 0)");
        this.marketingLogo.css("transform", "translate(0, 0)");
        this.experiencelogo.css("transform", "translate(0, 0)");
        // Illustrations
        $('<img src="assets/images/illustrations/objetIllustration.png">').addClass('block-illustration adjustment').appendTo(this.p1);
        $('<img src="assets/images/illustrations/animationjsIllustration.png">').addClass('block-illustration adjustment').appendTo(this.p2);
        $('<img src="assets/images/illustrations/librairieadaptIllustration.png">').addClass('block-illustration').appendTo(this.p3);
        $('<img src="assets/images/illustrations/manipulationdomIllustration.png">').addClass('block-illustration adjustment').appendTo(this.p4);
        $('<img src="assets/images/illustrations/dynamisationDOMIllustration.png">').addClass('block-illustration').appendTo(this.p5);
        this.illustrationAnime();
    }

    phpCard() {
        this.cards.removeClass('active');
        this.php.addClass('active');
        this.p1.html('programmation Orienté objet');
        this.p2.html('Symfony 4 et 5');
        this.p3.html('Architecture MVC');
        this.p4.html('PHP v7.4 - 8');
        this.p5.html('Gestion de bases de données SQL');
        //logo moves
        this.htmlcsslogo.css("transform", "translate(0, 0)");
        this.jsLogo.css('transform', 'translate(0, 0)');
        this.phpLogo.css('transform', 'translate(-190px, 320px) scale(1.5)');
        this.toolsLogo.css("transform", "translate(0, 0)");
        this.cmsLogo.css("transform", "translate(0, 0)");
        this.marketingLogo.css("transform", "translate(0, 0)");
        this.experiencelogo.css("transform", "translate(0, 0)");
        // Illustrations
        $('<img src="assets/images/illustrations/objetIllustration.png">').addClass('block-illustration adjustment').appendTo(this.p1);
        $('<img src="assets/images/illustrations/symfony_4.png">').addClass('block-illustration adjustment').appendTo(this.p2);
        $('<img src="assets/images/illustrations/mcvIllustration.png">').addClass('block-illustration').appendTo(this.p3);
        $('<img src="assets/images/illustrations/databaseIllustration.png">').addClass('block-illustration adjustment').appendTo(this.p5);
        this.illustrationAnime();
    }

    libsCard() {
        this.cards.removeClass('active');
        this.libs.addClass('active');
        //logo moves
        this.htmlcsslogo.css("transform", "translate(0, 0)");
        this.jsLogo.css("transform", "translate(0, 0)");
        this.phpLogo.css("transform", "translate(0, 0)");
        this.toolsLogo.css("transform", "translate(0, 500px) scale(1.5)");
        this.cmsLogo.css("transform", "translate(0, 0)");
        this.marketingLogo.css("transform", "translate(0, 0)");
        this.experiencelogo.css("transform", "translate(0, 0)");
        this.p1.html('Bootstrap, Animate.css');
        this.p2.html('Animejs, Three.js, Swiperjs');
        this.p3.html('Symfony 4, 5');
        this.p4.html('JQUERY');
        this.p5.html('Reactjs');
        $('<img src="assets/images/illustrations/symfony_4.png">').addClass('block-illustration adjustment').appendTo(this.p3);
        $('<img src="assets/images/illustrations/css.png">').addClass('block-illustration adjustment').appendTo(this.p1);
        $('<img src="assets/images/javascript.png">').addClass('block-illustration').appendTo(this.p2);
        $('<img src="assets/images/illustrations/jquery.png">').addClass('block-illustration').appendTo(this.p4);
        $('<img src="assets/images/illustrations/reactIllustration.png">').addClass('block-illustration').appendTo(this.p5);
        this.illustrationAnime();

    }

    cmsCard() {
        this.cards.removeClass('active');
        this.cms.addClass('active');
        this.p1.html('Personnalisation de template Wordpress');
        this.p2.html('Shopify e-commerce');
        this.p3.html('Wordpress');
        this.p4.html('Optimisation SEO sous Wordpress');
        this.p5.html('Gestion des plug-in Wordpress');
        //logo moves
        this.htmlcsslogo.css("transform", "translate(0, 0)");
        this.jsLogo.css("transform", "translate(0, 0)");
        this.phpLogo.css("transform", "translate(0, 0)");
        this.toolsLogo.css("transform", "translate(0, 0)");
        this.cmsLogo.css("transform", "translate(220px, 320px) scale(1.5)");
        this.marketingLogo.css("transform", "translate(0, 0)");
        this.experiencelogo.css("transform", "translate(0, 0)");
        // Illustrations
        $('<img src="assets/images/illustrations/templatewpIllustration.png">').addClass('block-illustration').appendTo(this.p1);
        $('<img src="assets/images/illustrations/shopify.png">').addClass('block-illustration').appendTo(this.p2);
        $('<img src="/assets/images/wordpress.png">').addClass('block-illustration').appendTo(this.p3);
        $('<img src="assets/images/illustrations/seoIllustration.png">').addClass('block-illustration').appendTo(this.p4);
        $('<img src="assets/images/illustrations/pluginIllustration.png">').addClass('block-illustration adjustment').appendTo(this.p5);
        this.illustrationAnime();
    }

    marketingCard() {
        this.cards.removeClass('active');
        this.marketing.addClass('active');
        this.p1.html('SEO');
        this.p2.html('SEA Google ads');
        this.p3.html('Social Media advertising');
        this.p4.html('Shopify e-commerce');
        this.p5.html('Optimisation du contenu');
        //logo moves
        this.htmlcsslogo.css("transform", "translate(0, 0)");
        this.jsLogo.css("transform", "translate(0, 0)");
        this.phpLogo.css("transform", "translate(0, 0)");
        this.toolsLogo.css("transform", "translate(0, 0)");
        this.cmsLogo.css("transform", "translate(0, 0)");
        this.marketingLogo.css("transform", "translate(105px, 320px) scale(1.5)");
        this.experiencelogo.css("transform", "translate(0, 0)");
        // Illustrations
        $('<img src="assets/images/illustrations/seopureIllustration.png">').addClass('block-illustration adjustment').appendTo(this.p1);
        $('<img src="assets/images/illustrations/googleadsIllustration.png">').addClass('block-illustration').appendTo(this.p2);
        $('<img src="assets/images/illustrations/socialmediaIllustration.png">').addClass('block-illustration adjustment').appendTo(this.p3);
        $('<img src="assets/images/illustrations/shopify.png">').addClass('block-illustration').appendTo(this.p4);
        $('<img src="assets/images/illustrations/contentIllustration.png">').addClass('block-illustration adjustment').appendTo(this.p5);
        this.illustrationAnime();
    }

    experienceCard() {
        this.cards.removeClass('active');
        this.experience.addClass('active');
        this.p1.html('Formation développeur web Openclassrooms (Bac+2)');
        this.p2.html('Cinq années d\'entrepreneuriat affiliate marketing');
        this.p3.html('Développement web Front-end / Affiliation marketing');
        this.p4.html('Une année d\'entrepreneuriat sur l\'île de Malte');
        this.p5.html('Environnement Windows / MAC');
        $('<a href="assets/docs/certification.pdf" target="_blank">Voir le Certificat de réussite</a>').addClass('ocr-link').appendTo(this.p1);
        //logo moves
        this.htmlcsslogo.css("transform", "translate(0, 0)");
        this.jsLogo.css("transform", "translate(0, 0)");
        this.phpLogo.css("transform", "translate(0, 0)");
        this.toolsLogo.css("transform", "translate(0, 0)");
        this.cmsLogo.css("transform", "translate(0, 0)");
        this.marketingLogo.css("transform", "translate(0, 0)");
        this.experiencelogo.css("transform", "translate(0, 320px) scale(1.5)");
        // Illustrations
        $('<img src="assets/images/illustrations/ocr.png">').addClass('block-illustration').appendTo(this.p1);
        $('<img src="assets/images/illustrations/entrepreneurIllustration.png">').addClass('block-illustration adjustment').appendTo(this.p2);
        $('<img src="assets/images/illustrations/designIllustration.png">').addClass('block-illustration adjustment').appendTo(this.p3);
        $('<img src="assets/images/illustrations/malta.png">').addClass('malta-flag').appendTo(this.p4);
        $('<img src="assets/images/illustrations/aircraft.png">').addClass('block-illustration adjustment').appendTo(this.p4);
        $('<img src="assets/images/illustrations/apple.png">').addClass('apple-logo').appendTo(this.p5);
        $('<img src="assets/images/illustrations/windows.png">').addClass('windows-logo').appendTo(this.p5);
        this.illustrationAnime();
    }

    reset() {
        $('.skill-container').hide();
        $('.skill-line').hide();
        this.htmlcsslogo.css("transform", "translate(0, 0)");
        this.jsLogo.css('transform', 'translate(0, 0)');
        this.phpLogo.css("transform", "translate(0, 0)");
        this.toolsLogo.css("transform", "translate(0, 0)");
        this.cmsLogo.css("transform", "translate(0, 0)");
        this.marketingLogo.css("transform", "translate(0, 0)");
        this.experiencelogo.css("transform", "translate(0, 0)");
    }

}
