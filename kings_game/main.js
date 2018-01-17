(function () {
    var number = document.getElementById("number");
    var btn = document.getElementById("btn");
    var result = document.getElementById("result");
    var action = ['にキスをする','をほめまくる','にお酌する'];

    btn.addEventListener('click', function (){
        //入力に対して例外処理
        var reg = number.value.match(/^[1-9][0-9]*$/);
        if (!reg) {
            result.innerHTML = "数字を入力してください。";
        } else {
        // 処理
        var king = Math.floor(Math.random() * number.value) + 1;
        var target;

        if (number.value < 2){
            target = 1;
        } else {
            do {
                target = Math.floor(Math.random() * number.value) + 1;
            } while (king === target);
        }

        var w = Math.floor(Math.random() * action.length);

        result.innerHTML = '#' + king + 'が、' + '#' + target + action[w];
        }
    });

})();
