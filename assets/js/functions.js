$(document).ready(function() {

    var pattern = new Trianglify({
        width: document.body.clientWidth,
        height: document.body.clientHeight,
        cell_size: 100,
        variance: 0.75,
        x_colors: ['#444444', '#333333', '#111111'],
        y_colors: ['#c0b283', '#444444', '#222222', '#000000']
    });

    document.body.style['background-image'] = 'url(' + pattern.canvas().toDataURL() + ')';

});