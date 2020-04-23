var _target, _deg = 0;
function ordSequential() {
    return _deg = _deg + (45*3) + 1080;
};
jQuery(document).ready(function ($) {
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