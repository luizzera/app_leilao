function navega(dest) {
    var novo = "";
    switch (dest) {
        case 1:
            novo = 'apresentacao';
            break;
        case 2:
            novo = 'informacoes';
            break;
        case 3:
            novo = 'fazenda';
            break;
        case 4:
            novo = 'patrocinadores';
            break;

        default :
            novo = 'inicio';
    }
    var endereco = novo + ".html";
    $.ajax({
        url: endereco,
        success: function(r) {
            $('body').html(r);
        }
    });

}