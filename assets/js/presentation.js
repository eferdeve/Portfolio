class Presentation {
    constructor() {
        // Variables
        this.title = $('.content.reveal .heading span');
        this.text = $('.home-text');
        this.square = $('.square');
        this.homeText = $('.home-text');
        this.content = $('.content');
        this.menu = $('.card-menu-menu-btn');
        this.links = $('.pro-links');
        this.linkedin = $('.linkedin');
        this.github = $('.github');

        //Events
        this.content.click(this.textReplace.bind(this));
        this.homeText.click(this.rollBack.bind(this));
        this.homeText.click(this.titleShow.bind(this));
        this.menu.click(this.rollBack.bind(this));

        this.links.click(this.linkBoxes.bind(this));
    }

    textReplace() {
        this.content.hide();
        this.homeText.show();
        this.homeText.css('animation', 'push 0.5s linear');
        this.square.css('width', '1000px');
        this.square.css('height', '1000px');
    }

    rollBack() {
        this.homeText.css('animation', 'pushback 0.5s linear');
        this.homeText.fadeOut(500);
        this.content.show();
        this.content.css('animation', 'backcontent 0.5s linear');
        this.square.css('width', '400px');
        this.square.css('height', '400px');
    }

    titleShow() {
        $('.content.reveal .heading span').css('animation', 'headingIn 1s ease forwards');
        $('.content.reveal .line').css('animation', 'lineIn 2s linear forwards');
        $('.content.reveal .sub-heading span').css('animation', 'subHeadIn 1.5s ease  forwards');
        $('.content.reveal .heading span').css('animation-delay', '2.2s');
        $('.content.reveal .sub-heading span').css('animation-delay', '2s');
    }

    linkBoxes() {
        this.links.toggleClass("fat");
        this.linkedin.toggleClass("lined-linkedin");
        this.github.toggleClass("lined-github")
    }

}