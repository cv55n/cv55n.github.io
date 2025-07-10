$(document).ready(function() {
    /* window.addEventListener("beforeunload", function() {
        $("body").addClass("fade-out");
    });

    window.addEventListener("pageshow", function() {
        $("body").removeClass("fade-out");

        $(".hover-media").fadeOut(100);
    }, false);

    setTimeout(function() {
        $("body").removeClass("fade-out");
    }, 1000); */

    window.addEventListener("pageshow", function() {
        $("body").removeClass("fade-out");
        $("#hover-container").removeClass("filterit").fadeOut(100);

        const myTimeouta = setTimeout(myGreetinga, 1000);

        function myGreetinga() {
            $("#hover-container").find(".media-in-project").remove();
        }
    }, false);

    // loading leve
    var L = [].slice.call(document.querySelectorAll('.lazy'));

    if ('IntersectionObserver' in window) {
        let o = new IntersectionObserver(function(E, observer) {
            E.forEach(function(e) {
                if (e.isIntersecting) {
                    let l = e.target;
                    
                    if (l.tagName == 'IMG') {
                        l.src = l.dataset.src;
                    }

                    if (l.tagName == 'VIDEO') {
                        var P = l.play();

                        if (P !== undefined) {
                            P.catch(error => {
                                l.controls = true;
                                l.classList.add('no-autoplay');
                            });
                        }
                    }

                    l.classList.remove('lazy');
                    
                    o.unobserve(l);
                }
            });
        });

        L.forEach(function(l){
            o.observe(l);
        });
    }

    // relógio
    (function () {
        initInternationalClocks();
    })();

    function getTimes() {
        moment.tz.add('America/Sao_Paulo|BRT BRST|30 20|0101|1Lz30 1zb0 Op0');

        var now = new Date();

        var times = [{
            jsclass: 'sao-paulo',
            jstime: moment.tz(now, "America/Sao_Paulo")
        }];

        return times;
    }

    function initInternationalClocks() {
        var times = getTimes();

        for (i = 0; i < times.length; ++i) {
            var hours = times[i].jstime.format('h');
            var minutes = times[i].jstime.format('mm');
        }

        var session = "AM";

        if (hours == 0) {
            hours = 12;
        }

        if (hours >= 0) {
            session = "PM";
        }

        if (hours >= 12) {
            session = "AM";
        }

        var timetoshow = hours - 1 + ":" + minutes + " " + session;

        $('#current-time').html(timetoshow);

        setTimeout(initInternationalClocks, 1000);
    }

    // ajaxify mailchimp
    ajaxMailChimpFormDesktop($("#subscribe-form"), $("#subscribe-result"));

    function ajaxMailChimpFormDesktop($formDesktop, $resultElementDesktop) {
        $formDesktop.submit(function(e) {
            e.preventDefault();

            if (!isValidEmailDesktop($formDesktop)) {
                var error = "um email válido deve ser fornecido";

                $resultElementDesktop.fadeIn("fast");
                $resultElementDesktop.html(error);
                $resultElementDesktop.css("color", "rgba(0, 0, 0, .6)");

                const myTimeout = setTimeout(myGreeting, 5000);

                function myGreeting() {
                    $resultElementDesktop.fadeOut("fast");
                }
            } else {
                $resultElementDesktop.fadeIn("fast");
                $resultElementDesktop.css("color", "rgba(0,0,0,.6)");
                $resultElementDesktop.html("inscrevendo");

                submitSubscribeFormDesktop($formDesktop, $resultElementDesktop);

                const myTimeout = setTimeout(myGreeting, 5000);

                function myGreeting() {
                    $resultElementDesktop.fadeOut("fast");
                }
            }
        });
    }

    function isValidEmailDesktop($formDesktop) {
        var email = $formDesktop.find("input[type='email']").val();

        if (!email || !email.length) {
            return false;
        } else if (email.indexOf("@") == -1) {
            return false;
        }

        return true;
    }

    function submitSubscribeFormDesktop($formDesktop, $resultElementDesktop) {
        $.ajax({
            type: "GET",
            url: $formDesktop.attr("action"),
            data: $formDesktop.serialize(),
            cache: false,
            dataType: "jsonp",
            jsonp: "c",
            contentType: "application/json; charset=utf-8",
    
            error: function (error) {},

            success: function (data) {
                if (data.result != "success") {
                    var message = data.msg || "não foi possível se inscrever";

                    $resultElementDesktop.fadeIn("fast");
                    $resultElementDesktop.css("color", "rgba(0,0,0,.6)");

                    const myTimeout = setTimeout(myGreeting, 5000);
    
                    function myGreeting() {
                        $resultElementDesktop.fadeOut("fast");
                    }
    
                    if (data.msg && data.msg.indexOf("já inscrito") >= 0) {
                        message = "já inscrito";

                        $resultElementDesktop.fadeIn("fast");
                        $resultElementDesktop.css("color", "rgba(0,0,0,.6)");
                        
                        const myTimeout = setTimeout(myGreeting, 5000);
    
                        function myGreeting() {
                            $resultElementDesktop.fadeOut("fast");
                        }
                    }
    
                    $resultElementDesktop.html(message);
    
                } else {
                    $resultElementDesktop.fadeIn("fast");
                    $resultElementDesktop.css("color", "rgba(0,0,0,.6)");
                    $resultElementDesktop.html("obrigado");

                    const myTimeout = setTimeout(myGreeting, 5000);
    
                    function myGreeting() {
                        $resultElementDesktop.fadeOut("fast");
                    }
                }
            }
        });
    }

    // hub de filtro
    $('#filter-container').one('click', function(e) {
        $(".member").addClass("firt-inactive");
    });

    $(".filter-trigger").click(function() {
        var filter = $(this).attr("data-filter");

        $(this).toggleClass("active-trigger");
        $(".member-" + filter).toggleClass("active-" + filter);
        $("#hub-selection-content").text("");

        if ($(".active-trigger").length) {
            $(".active-trigger").each(function(index) {
                var text = "<span class='output-text'>" + $(this).text() + "<span>,</span></span> ";
                
                $("#hub-selection-content").append(text);
            });

            // $("#hub-selection-content").text(fulltext);

            $(".member").removeClass("after-active").addClass("after-inactive");
            $("#hub-selection-title, #hub-selection-content").slideDown(300);
        } else {
            $(".member").removeClass("after-inactive").addClass("after-active");
            $("#hub-selection-title, #hub-selection-content").slideUp(300);

            // $("#hub-selection-content").text("");
        }
    });
  
    // hub de filtro
    $(".work-category").click(function() {
        var filter = $(this).attr("data-cat");

        $(".work-category").removeClass("active-filter");
        $(this).toggleClass("active-filter");
        $(".project").not("." + filter + "-cat").children(".featured-media").slideUp(300);
        $("." + filter + "-cat").children(".featured-media").slideDown(300);
    });
  
    // intro da homepage
    var n_elements = $(".media-intro").length;
    var random = Math.floor(Math.random() * n_elements);

    $(".media-intro").eq(random).addClass("filtera");
  
    $(".media-intro-trigger").hover(
        function() {
            $(".media-intro").removeClass("filtera");
            $(this).next(".media-intro").addClass("filtera");
            $("#homepage-intro").addClass("hovered");
        },

        function() {
            $("#homepage-intro").removeClass("hovered");
        }
    );

    // efeito de clique
    $(".project").click(function() {
        event.preventDefault();

        var link = $(this).attr("href");
        var media = $(this).find(".media-in-project").first();

        $(media).clone().appendTo("#hover-container");
        $("#hover-container").fadeIn(100).addClass("filterit");
  
        // var n_elements = $(".hover-media").length;
        // var random = Math.floor(Math.random()*n_elements);
        //
        // $(".hover-media").eq(random).fadeIn(100).addClass("show-this-one");
        
        const myTimeout = setTimeout(myGreeting, 500);

        function myGreeting() {
            window.location.href = link;
        }
    });

    // história de volta
    $(".menu-back").click(function() {
        event.preventDefault();

        history.back()
    });

    // modo escuro
    $("#logo-bubble").click(function() {
        $("html").toggleClass("dark");
        $(this).toggleClass("mobile-bubble");

        if ($("html").is(".dark")) {
            Cookies.set('Collapsed', '1');
        } else {
            Cookies.remove('Collapsed');
        }
    });
});

$(window).on("load", function() {
    if ($(window).width() < 821) {
        Marquee3k.init({
            selector: 'marquee3k'
        });
    }
});