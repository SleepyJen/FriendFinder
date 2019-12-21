$(document).ready(function () {


    $('#submit').on('click', function (e) {
        e.preventDefault();
        var scores = [];
        for (let i = 1; i < 11; i++) {
            scores.push(parseInt($(`#q${i}`).val()));
        }

        const friend = {
            'name': $('#name').val(),
            'photo': $('#photo').val(),
            'scores': scores
        }


    });

});