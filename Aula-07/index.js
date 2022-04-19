$.support.cors = true;

$(document).ready(
    function(){
        $('#conteudo').load("pages/pagina01.html")
}


)

$('#btPagina1').click(
    function(){
        console.log("clique pagina 1")
        $('#conteudo').load("pages/pagina01.html")
        

    }

)

$('#btPagina2').click(
    function(){
        console.log("clique pagina 2")
        $('#conteudo').load("pages/pagina02.html")
        
    }




)