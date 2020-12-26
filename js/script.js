let images = $('img');

function view() {

    for (let i = 0; i < images.length; i++) {
        setTimeout(() => {
            $(images[i]).fadeIn();

        }, i * 400);


        if (i == images.length) {
            alert('msg');
            for (let k = 0; k < images.length; k++) {
                setTimeout(() => {
                    $(images[k]).fadeOut();
        
                }, k * 400);
        
            }
        }
    }
}

view()



