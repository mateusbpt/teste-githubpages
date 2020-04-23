var _target, _deg = 0;

function ordSequential() {
    return _deg = _deg + (45*3) + 1080;
};

var list = [
    "<li><a href='#peixe' class='fancybox disabled'><img class='whell-img' src='images/peixe.png'></a></li>",
    "<li><a href='#queijo' class='fancybox disabled'><img class='whell-img' src='images/queijo.png'></a></li>",
    "<li><a href='#osso' class='fancybox disabled'><img class='whell-img' src='images/osso.png'></a></li>",
    "<li><a href='#banana' class='fancybox disabled'><img class='whell-img' src='images/banana.png'></a></li>",
    "<li><a href='#capim' class='fancybox disabled'><img class='whell-img' src='images/capim.png'></a></li>",
    "<li><a href='#galinha' class='fancybox disabled'><img class='whell-img' src='images/galinha.png'></a></li>",
    "<li><a href='#pao' class='fancybox disabled'><img class='whell-img' src='images/pao.png'></a></li>",
    "<li><a href='#mel' class='fancybox disabled'><img class='whell-img' src='images/mel.png'></a></li>"
];

list.sort(() => Math.random() - 0.5);

$('#list').html(list);

$(document).ready(function ($) {
    $(".skills-wheel .btn").on("click", function (e) {
        ordSequential();
        _target = (_deg - (360 * parseInt(_deg / 360))) / 45;
        $(".fancybox").parent("li").velocity({
            opacity: 1
        }, {
            duration: 100,
            complete: function () {
                $(".wheel").velocity({
                    rotateZ: "-" + _deg + "deg"
                }, {
                    duration: 3000,
                    complete: function (elements) {
                        $(".fancybox").parent("li").eq(_target).velocity({
                            opacity: 0.4
                        }, {
                            duration: 100,
                            complete: function () {
                                $(".fancybox").eq(_target).trigger("click");
                            }
                        });
                    }
                });
            }
        }); 
        return false;
    }); 

    $(".fancybox").fancybox({
        maxWidth: "100%"
    });
});