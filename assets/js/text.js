$(function () {
    var title = document.title,
        animSeq = ["_"],
        animIndex = 0,
        titleIndex = 0;
    function doInverseSpinZeroPitch() {
        var loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) {
            animIndex = 0;
            titleIndex = 0
        }
        if (animIndex > 1) {
            titleIndex++;
            animIndex = 0
        }
        document.title = loadTitle + animSeq[0];
        animIndex++
    }
    window.setInterval(doInverseSpinZeroPitch, 150);
});
$(function () {
    $(".typed").typed({
        strings: ['Sp3kE', "Кто это?", "типа разработчик", "гей ловер... ой", "обсасыватель кода", "недоебанный кодер", "пусси султан", "милашка :3"],
        typeSpeed: 100,
        loop: true,
        cursorChar: "_",
    });
});
