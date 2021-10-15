function consulta() {
    $.ajax(
            {
                url         :   'https://gbf095ed88d9447-dbdb1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike',
                type        :   'GET',
                dataType    :   'json',

                success     :   function(json){
                    $("#divTabla").empty();
                    $("#divTabla").append("<table>");
                    $("#divTabla").append("<caption>Bicicletas en Existencia</caption>");
                    $("#divTabla").append("<tr><th>ID</th><th>Marca</th><th>Modelo</th><th>Descripcion</th><th>Nombre</th></tr>");
                    for (i=0; i < json.items.length; i++){
                        $("#divTabla").append("<tr>");
                        $("#divTabla").append("<td>" + json.items[i].id + "</td>");
                        $("#divTabla").append("<td>" + json.items[i].brand + "</td>");
                        $("#divTabla").append("<td>" + json.items[i].model + "</td>");
                        $("#divTabla").append("<td>" + json.items[i].category_id + "</td>");
                        $("#divTabla").append("<td>" + json.items[i].name + "</td>");
                        $("#divTabla").append("</tr>");
                    }
                    $("#divTabla").append("</table>");

                    console.log(json)
                    },

                error       : function(xhr,status){
                    console.log(xhr)
                }
            }
    );
}

function crearBicicleta() {

    var bicicleta;
    var idBici = $("#idIDBici").val();
    var marBici = $("#idMarBici").val();
    var modBici = $("#idModBici").val();
    var catBici = $("#idCatBici").val();
    var nomBici = $("#idNomBici").val();

    bicicleta = {id : idBici ,brand : marBici, model: modBici , category_id: catBici, name: nomBici};

    $.ajax (
        {
            url          : 'https://gbf095ed88d9447-dbdb1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike',
            type         : 'POST',
            data         :  bicicleta,
            
            success      :  function(response){
                            console.log(response);
                            },
            error       :   function(xhr,status){
                            console.log( xhr);
                            }
        }
    );
}

function borrarBicicleta() {

    var idBici = $("#idIDBiciBorra").val();
    var bicicleta = {id : idBici};
    datosEnvio = JSON.stringify(bicicleta);

    $.ajax (
        {
        url         :'https://gbf095ed88d9447-dbdb1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike',
        type        :'DELETE',
        data        : datosEnvio,
        contentType : 'application/json',
        
        success      :  function(response){
            console.log(response);
            },
        error       :   function(xhr,status){
            console.log( xhr);
            }
        }
    );
}

function actualizarBicicleta() {

    var idBici = $("#idIDBiciAct").val();
    var marBici = $("#idMarBiciAct").val();
    var modBici = $("#idModBiciAct").val();
    var catBici = $("#idCatBiciAct").val();
    var nomBici = $("#idNomBiciAct").val();
    bicicleta = {id : idBici ,brand :marBici, model: modBici, category_id: catBici, name: nomBici};
    datosEnvio = JSON.stringify(bicicleta);

    $.ajax (
        {
        url         :'https://gbf095ed88d9447-dbdb1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike',
        type        :'PUT',
        data        : datosEnvio,
        contentType : 'application/json',
        
        success      :  function(response){
            console.log(response);
            },
        error       :   function(xhr,status){
            console.log( xhr);
            }
        }
    );
}

function consultaCliente() {
    var codigo = $("#idCliente").val();

    $.ajax (
        {
            url         :   'https://gbf095ed88d9447-dbdb1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/' + codigo,
            type        :   'GET',
            dataType    :   'json',

            success      :  function(json){
                    // $("#idCliente").empty();
                    // for(i=0; i < json.items.length; i++){
                    //     $("#divTabla").append(json.items[i].id + json.items[i].name + json.items[i].email + json.items[i].age + " ")
                    $("#divTabla").empty();
                    $("#divTabla").append("<table>");
                    $("#divTabla").append("<caption>Clientes</caption>");
                    $("#divTabla").append("<tr><th>ID</th><th>Nombre</th><th>E-mail</th><th>Edad</th></tr>");
                    for (i=0; i < json.items.length; i++){
                        $("#divTabla").append("<tr>");
                        $("#divTabla").append("<td>" + json.items[i].id + "</td>");
                        $("#divTabla").append("<td>" + json.items[i].name + "</td>");
                        $("#divTabla").append("<td>" + json.items[i].email + "</td>");
                        $("#divTabla").append("<td>" + json.items[i].age + "</td>");
                        $("#divTabla").append("</tr>");
                        }
                        $("#divTabla").append("</table>");
                console.log(json);
                },
            error       :   function(xhr,status){
                console.log( 'Operacion no satisfactoria, ' + xhr.status );
                },
        }
    )
}

function registroCliente() {

    var cliente;
    var idCliente = $("#idIDClienteReg").val();
    var nomCliente = $("#idNameCliente").val();
    var emailCliente = $("#idEmailCliente").val();
    var ageCliente = $("#idAgeCliente").val();
    cliente = {id : idCliente, name: nomCliente, email : emailCliente, age : ageCliente};

    $.ajax(
        {
            url: 'https://gbf095ed88d9447-dbdb1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/',
            type: 'POST',
            data: cliente,

            success : function(response){
                console.log(response);
            },

            error: function(xhr,status){
                console.log(xhr);
            }
        }
    )
}

function registroMensajes() {
    var mensaje;
    var idMensaje = $("#idIDMensaje").val();
    var textMensaje = $("#idTextM").val();
    mensaje = {id: idMensaje, messagetext: textMensaje};

    $.ajax (
            {
                url          : 'https://gbf095ed88d9447-dbdb1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
                type         : 'POST',
                data         :  mensaje,

                success      :  function(response){
                    console.log(response);
                    },
                error       :   function(xhr,status){
                    console.log( xhr);
                }
            }
            );
}

function consultaMensajes() {
    $.ajax(
        {
            url         :   'https://gbf095ed88d9447-dbdb1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
            type        :   'GET',
            dataType    :   'json',

            success     :   function(json){
                $("#divTabla").empty();
                $("#divTabla").append("<table>");
                $("#divTabla").append("<caption>Consultar Mensajes</caption>");
                $("#divTabla").append("<tr><th>ID</th><th>Mensaje</th></tr>");
                for (i=0; i < json.items.length; i++){
                    $("#divTabla").append("<tr>");
                    $("#divTabla").append("<td>" + json.items[i].id + "</td>");
                    $("#divTabla").append("<td>" + json.items[i].messagetext + "</td>");
                    $("#divTabla").append("</tr>");
                }
                $("#divTabla").append("</table>");
                console.log(json);
                },

            error       : function(xhr,status){
                        console.log(xhr);
                },
            }
            );
}

function borrarMensaje() {

    var idMensaje = $("#idIDMensajeBorra").val();
    var mensaje = {id : idMensaje};
    datosEnvio = JSON.stringify(mensaje);

    $.ajax (
        {
        url         :'https://gbf095ed88d9447-dbdb1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        type        :'DELETE',
        data        : datosEnvio,
        contentType : 'application/json',
        
        success      :  function(response){
            console.log(response);
            },
        error       :   function(xhr,status){
            console.log( xhr);
            }
        }
    );
}