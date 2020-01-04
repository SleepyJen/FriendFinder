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
        console.log(friend);


        $.ajax({
            type: 'POST',
            url: '/api/friends',
            data: friend
        }).then(res => {
            console.log(res);
            alert('Best match is with: ' + res.name);
        });

    });

});