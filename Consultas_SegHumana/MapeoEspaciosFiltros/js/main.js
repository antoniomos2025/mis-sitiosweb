let tabla; // Variable global para la Instancia de DataTables
let originalData = []; // Para almacenar la data original cargada

// Función para cargar los datos (simula una API)
async function fetchData() {
    // En un entorno real, aquí harías una llamada a una API:
    // try {
    //     const response = await fetch('/api/oferta-Instanciaal');
    //     if (!response.ok) throw new Error('Network response was not ok.');
    //     return await response.json();
    // } catch (error) {
    //     console.error("Error fetching data:", error);
    //     return [];
    // }

    // Datos hardcodeados para demostración (de tu HTML original)
    return [{"Delito":"Homicidio","Factor":"N\/A","Instancia":"Consejo de Seguridad","Nivel":"Departamental","Competencia":"Decreto 2615 de 1991\nArt. 1"},{"Delito":"Extorsión","Factor":"N\/A","Instancia":"Consejo de Seguridad","Nivel":"Departamental","Competencia":"Decreto 2615 de 1991\nArt. 1"},{"Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Instancia":"Consejo de Seguridad","Nivel":"Departamental","Competencia":"Decreto 2615 de 1991\nArt. 1"},{"Delito":"Homicidio","Factor":"N\/A","Instancia":"Consejo de Seguridad","Nivel":"Municipal ","Competencia":"Decreto 2615 de 1991\nArt. 5"},{"Delito":"Extorsión","Factor":"N\/A","Instancia":"Consejo de Seguridad","Nivel":"Municipal ","Competencia":"Decreto 2615 de 1991\nArt. 5"},{"Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Instancia":"Consejo de Seguridad","Nivel":"Municipal ","Competencia":"Decreto 2615 de 1991\nArt. 5"},{"Delito":"Homicidio","Factor":"N\/A","Instancia":"Comité Territorial de Orden Público","Nivel":"Departamental","Competencia":"Decreto 399 de 2011\nArt. 17-18"},{"Delito":"Extorsión","Factor":"N\/A","Instancia":"Comité Territorial de Orden Público","Nivel":"Departamental","Competencia":"Decreto 399 de 2011\nArt. 17-18"},{"Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Instancia":"Comité Territorial de Orden Público","Nivel":"Departamental","Competencia":"Decreto 399 de 2011\nArt. 17-18"},{"Delito":"Homicidio","Factor":"N\/A","Instancia":"Comité Territorial de Orden Público","Nivel":"Municipal ","Competencia":"Decreto 399 de 2011\nArt. 17-18"},{"Delito":"Extorsión","Factor":"N\/A","Instancia":"Comité Territorial de Orden Público","Nivel":"Municipal ","Competencia":"Decreto 399 de 2011\nArt. 17-18"},{"Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Instancia":"Comité Territorial de Orden Público","Nivel":"Municipal ","Competencia":"Decreto 399 de 2011\nArt. 17-18"},{"Delito":"Homicidio","Factor":"N\/A","Instancia":"Puesto de Mando Unificado ","Nivel":"Nacional","Competencia":"Decreto 003 de 2015\nArts. 7 - 8\nDecreto 3888 de 2007\nArts. 7 - 8"},{"Delito":"Homicidio","Factor":"N\/A","Instancia":"Puesto de Mando Unificado ","Nivel":"Departamental","Competencia":"Decreto 003 de 2015\nArts. 7 - 8\nDecreto 3888 de 2007\nArts. 7 - 8"},{"Delito":"Homicidio","Factor":"N\/A","Instancia":"Puesto de Mando Unificado ","Nivel":"Municipal ","Competencia":"Decreto 003 de 2015\nArts. 7 - 8\nDecreto 3888 de 2007\nArts. 7 - 8"},{"Delito":"N\/A","Factor":"Intolerancia social y afectaciones a la convivencia","Instancia":"Comité Civil de Convivencia","Nivel":"Municipal ","Competencia":"Ley 1801 de 2016\nArt. 19"},{"Delito":"N\/A","Factor":"Intolerancia social y afectaciones a la convivencia","Instancia":"Consejo de Seguridad y Convivencia Ciudadana","Nivel":"Departamental","Competencia":"Ley 1801 de 2016\nArt. 19"},{"Delito":"N\/A","Factor":"Intolerancia social y afectaciones a la convivencia","Instancia":"Consejo de Seguridad y Convivencia Ciudadana","Nivel":"Municipal ","Competencia":"Ley 1801 de 2016\nArt. 19"},{"Delito":"N\/A","Factor":"Intolerancia social y afectaciones a la convivencia","Instancia":"Consejo Nacional de Convivencia y Seguridad Ciudadana","Nivel":"Nacional","Competencia":"Decreto 1070 de 2015\nArt. 2.2.8.16 - 2.2.8.18"},{"Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Instancia":"Mecanismo Articulador para el Abordaje Integral de las Violencias por Razones de Sexo y Género","Nivel":"Nacional","Competencia":"Decreto 1710 de 2020\nArt. 3"},{"Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Instancia":"Comité para el abordaje integral de las violencias por razones de sexo y género de las mujeres y NNA","Nivel":"Departamental","Competencia":"Decreto 1710 de 2020\nArt. 22-23"},{"Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Instancia":"Comité para el abordaje integral de las violencias por razones de sexo y género de las mujeres y NNA","Nivel":"Municipal ","Competencia":"Decreto 1710 de 2020\nArt. 22-23"},{"Delito":"N\/A","Factor":"Vinculación o instrumentalización de menores de edad","Instancia":"Comisión Intersectorial de Prevención del Reclutamiento, Uso, Utilización y Violencia Sexual en contra Niños, Niñas y Adolescentes ","Nivel":"Nacional","Competencia":"Decreto 2081 de 2019\nArt. 2-3"},{"Delito":"N\/A","Factor":"Vinculación o instrumentalización de menores de edad","Instancia":"Sistema Nacional de Coordinación de Responsabilidad Penal para Adolescentes","Nivel":"Nacional","Competencia":"Decreto 1885 de 2015\nArt. 3-5"},{"Delito":"N\/A","Factor":"Vinculación o instrumentalización de menores de edad","Instancia":"Comité Departamental del Sistema Nacional de Coordinación de Responsabilidad Penal para Adolescentes","Nivel":"Departamental","Competencia":"Decreto 1885 de 2015\nArt. 14-16"},{"Delito":"Homicidio","Factor":"N\/A","Instancia":"Mesa Interinstitucional de seguimiento a homicidios contra personas defensoras de derechos humanos","Nivel":"Nacional","Competencia":"Decreto 2137 de 2018\nArt. 15-17"},{"Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Instancia":"Mesa Interinstitucional para Erradicar la Violencia contra las Mujeres","Nivel":"Nacional","Competencia":"Decreto 164 de 2010\nArt. 1-3"},{"Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Instancia":"Comité Interinstitucional Consultivo para la Prevención de la Violencia Sexual y Atención Integral de los Niños, Niñas y Adolescentes Víctimas del Abuso Sexual","Nivel":"Nacional","Competencia":"Ley 1146 de 2007\nArt. 3"},{"Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Instancia":"Comité Territorial Interinstitucional Consultivo para la Prevención de la Violencia Sexual y Atención Integral de los Niños, Niñas y Adolescentes Víctimas del Abuso Sexual","Nivel":"Departamental","Competencia":"Ley 1146 de 2007\nArt. 4"},{"Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Instancia":"Comité Territorial Interinstitucional Consultivo para la Prevención de la Violencia Sexual y Atención Integral de los Niños, Niñas y Adolescentes Víctimas del Abuso Sexual","Nivel":"Municipal ","Competencia":"Ley 1146 de 2007\nArt. 4"},{"Delito":"N\/A","Factor":"Presencia y operatividad de grupos delictivos","Instancia":"Comisión Intersectorial para la Respuesta Rápida a las Alertas Tempranas","Nivel":"Nacional","Competencia":"Decreto 2124 de 2017\nArt. 9-10"},{"Delito":"N\/A","Factor":"Presencia y operatividad de grupos delictivos","Instancia":"Comités Territoriales de Alertas para la Reacción Rápida","Nivel":"Departamental","Competencia":"Decreto 2124 de 2017\nArt. 12"},{"Delito":"N\/A","Factor":"Presencia y operatividad de grupos delictivos","Instancia":"Comités Territoriales de Alertas para la Reacción Rápida","Nivel":"Municipal ","Competencia":"Decreto 2124 de 2017\nArt. 12"},{"Delito":"Extorsión","Factor":"N\/A","Instancia":"Consejo Nacional de Lucha Contra el Secuestro y Demás Atentados Contra la Libertad Personal (CONASE)","Nivel":"Nacional","Competencia":"Ley 282 de 1996\nArt. 1"},{"Delito":"N\/A","Factor":"Vulnerabilidades en los entornos digitales","Instancia":"Grupo de Respuesta a Emergencias Cibernéticas de Colombia (COLCERT)","Nivel":"Nacional","Competencia":"Decreto 338 de 2022\nArt. 2.2.21.1.5.2.\nCONPES 3995 de 2020\nCONPES 3701 de 2011"},{"Delito":"N\/A","Factor":"Vulnerabilidades en los entornos digitales","Instancia":"Equipo de Respuesta a Incidentes de Seguridad Digital para entidades del sector gobierno (CSIRT Gobierno)","Nivel":"Nacional","Competencia":"Decreto 338 de 2022\nArt. 2.2.21.1.5.3."},{"Delito":"N\/A","Factor":"Vulnerabilidades en los entornos digitales","Instancia":"Equipo de Respuesta a Incidentes de Seguridad Cibernética de los sectores definidos como críticos o prestadores de servicios esenciales (CSIRT Sectoriales, CSIRT Defensa, CSIRT Inteligencia)","Nivel":"Nacional","Competencia":"Decreto 338 de 2022\nArt. 2.2.21.1.5.4."},{"Delito":"N\/A","Factor":"Vulnerabilidades en los entornos digitales","Instancia":"Coordinación Nacional de Seguridad Digital","Nivel":"Nacional","Competencia":"Decreto 338 de 2022\nArt. 2.2.21.1.3.3."},{"Delito":"N\/A","Factor":"Vulnerabilidades en los entornos digitales","Instancia":"Comité Nacional de Seguridad Digital","Nivel":"Nacional","Competencia":"Decreto 338 de 2022\nArt. 2.2.21.1.3.6."},{"Delito":"N\/A","Factor":"Vulnerabilidades en los entornos digitales","Instancia":"Grupos de Trabajo de Seguridad Digital","Nivel":"Nacional","Competencia":"Decreto 338 de 2022\nArt. 2.2.21.1.3.7."},{"Delito":"N\/A","Factor":"Vulnerabilidades en los entornos digitales","Instancia":"Mesas de Trabajo de Seguridad Digital","Nivel":"Nacional","Competencia":"Decreto 338 de 2022\nArt. 2.2.21.1.3.8."},{"Delito":"N\/A","Factor":"Roles de género rígidos","Instancia":"Grupo de Trabajo Nacional de Violencia de Género","Nivel":"Nacional","Competencia":"Resolución 0858 de 2021"},{"Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Instancia":"Equipo de Investigación de Delitos Priorizados cometidos contra Niños, Niñas y Adolescentes","Nivel":"Nacional","Competencia":"Resolución 0409de 2023"},{"Delito":"N\/A","Factor":"Roles de género rígidos","Instancia":"Mecanismo Articulador para el Abordaje Integral de las Violencias por Razones de Sexo y Género","Nivel":"Nacional","Competencia":"Decreto 1710 de 2020\nArt.2-4"},{"Delito":"N\/A","Factor":"Vulnerabilidades socioeconómicas","Instancia":"Comisión Intersectorial de las Mujeres","Nivel":"Nacional","Competencia":"Decreto 1106 de 2022\nArt. 2.1.9.2.3."},{"Delito":"N\/A","Factor":"Vulnerabilidades socioeconómicas","Instancia":"Observatorio de Asuntos de Género","Nivel":"Nacional","Competencia":"Decreto 1106 de 2022\nArt. 2.1.9.2.11."},{"Delito":"N\/A","Factor":"Vulnerabilidades socioeconómicas","Instancia":"Comisión Regional para la Equidad","Nivel":"Departamental","Competencia":"Decreto 1106 de 2022\nArt. 2.1.9.2.12"},{"Delito":"Extorsión","Factor":"N\/A","Instancia":"Puestos de Mando Unificado de Seguridad Digital ","Nivel":"Nacional","Competencia":"Decreto 338 de 2022\nArt. 2.2.21.1.3.9."},{"Delito":"Homicidio","Factor":"N\/A","Instancia":"Red de Apoyo y Solidaridad Ciudadana","Nivel":"Municipal ","Competencia":"Decreto 322 de 2002\nArt. 1-2"},{"Delito":"Extorsión","Factor":"N\/A","Instancia":"Red de Apoyo y Solidaridad Ciudadana","Nivel":"Municipal ","Competencia":"Decreto 322 de 2002\nArt. 1-2"},{"Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Instancia":"Red de Apoyo y Solidaridad Ciudadana","Nivel":"Municipal ","Competencia":"Decreto 322 de 2002\nArt. 1-2"},{"Delito":"N\/A","Factor":"Limitada capacidad humana institucional","Instancia":"Frentes de Seguridad \"Ciudadanos en Red\"","Nivel":"Municipal ","Competencia":"Instructivo 005 de 2018 DISEC-GRUPE-70"},{"Delito":"N\/A","Factor":"Corrupción","Instancia":"Veedurías Ciudadanas","Nivel":"Municipal ","Competencia":"Ley 850 de 2003\nArt. 15"},{"Delito":"Homicidio","Factor":"N\/A","Instancia":"Consejo Nacional de Seguridad y Convivencia Ciudadana","Nivel":"Nacional","Competencia":"Decreto 647 de 2021\nArt. 2.2.8.2.18."},{"Delito":"Extorsión","Factor":"N\/A","Instancia":"Consejo Nacional de Seguridad y Convivencia Ciudadana","Nivel":"Nacional","Competencia":"Decreto 647 de 2021\nArt. 2.2.8.2.18."},{"Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Instancia":"Consejo Nacional de Seguridad y Convivencia Ciudadana","Nivel":"Nacional","Competencia":"Decreto 647 de 2021\nArt. 2.2.8.2.18."},{"Delito":"N\/A","Factor":"Limitada capacidad técnica institucional","Instancia":"Mesa Técnica de Apoyo del Consejo Nacional de Seguridad y Convivencia Ciudadana","Nivel":"Nacional","Competencia":"Decreto 647 de 2021\nArt. 2.2.8.2.22."},{"Delito":"N\/A","Factor":"Dificultades en el acceso al crédito formal","Instancia":"Comisión Intersectorial de Inclusión y Educación Económica y Financiera","Nivel":"Nacional","Competencia":"Decreto 2338 de 2015\nArt. 3"}];
}

$.extend( true, $.fn.dataTable.defaults, {
    "language": {
        "decimal": ",",
        "thousands": ".",
        "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
        "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
        "infoPostFix": "",
        "infoFiltered": "(filtrado de un total de _MAX_ registros)",
        "loadingRecords": "Cargando...",
        "lengthMenu": "Mostrar _MENU_ registros",
        "paginate": {
            "first": "Primero",
            "last": "Último",
            "next": "Siguiente",
            "previous": "Anterior"
        },
        "processing": "Procesando...",
        "search": "Buscar:",
        "searchPlaceholder": "Término de búsqueda",
        "zeroRecords": "No se encontraron resultados",
        "emptyTable": "Ningún dato disponible en esta tabla",
        "aria": {
            "sortAscending":  ": Activar para ordenar la columna de manera ascendente",
            "sortDescending": ": Activar para ordenar la columna de manera descendente"
        },
        //only works for built-in buttons, not for custom buttons
        "buttons": {
            "create": "Nuevo",
            "edit": "Cambiar",
            "remove": "Borrar",
            "copy": "Copiar",
            "csv": "fichero CSV",
            "excel": "tabla Excel",
            "pdf": "documento PDF",
            "print": "Imprimir",
            "colvis": "Visibilidad columnas",
            "collection": "Colección",
            "upload": "Seleccione fichero...."
        },
        "select": {
            "rows": {
                _: '%d filas seleccionadas',
                0: 'clic fila para seleccionar',
                1: 'una fila seleccionada'
            }
        }
    }           
} );

// // Función para cargar opciones en los selectores
// function cargarOpciones(dataToProcess) {
    // const delitos = [...new Set(dataToProcess.map(item => item.Delito))];
    // const delitoSelect = $('#delito');
    // delitoSelect.empty().append('<option value="">Seleccione un delito</option>');
    // delitos.sort().forEach(delito => {
        // delitoSelect.append(`<option value="${delito}">${delito}</option>`);
    // });
// }

// Función para filtrar instancias de riesgo basados en el delito seleccionado
function filtrarInstancia(dataToProcess) {
	debugger;
	
    const instanciaSelect = $('#instancia');
    instanciaSelect.empty().append('<option value="">Seleccione un factor de riesgo</option>');

    let instancias = [];
	instancias = [...new Set(dataToProcess.map(item => item.Factor))];
	
    // if (delitoSeleccionado) {
        // instancias = [...new Set(dataToProcess
            // .filter(item => item.Delito === delitoSeleccionado)
            // .map(item => item.Instancia)
        // )];
    // } else {
        // instancias = [...new Set(dataToProcess.map(item => item.Instancia))];
    // }
    instancias.sort().forEach(instancia => {
        instanciaSelect.append(`<option value="${instancia}">${instancia}</option>`);
    });
}

// Función para filtrar Instanciaes basadas en el factor de riesgo seleccionado
function filtrarNivel(instanciaSeleccionado, dataToProcess) {
	debugger;
    const NivelSelect = $('#nivel');
    NivelSelect.empty().append('<option value="">Seleccione un nivel</option>');

    let Instanciaes = [];
    if (instanciaSeleccionado) {
        Instanciaes = [...new Set(dataToProcess
            .filter(item => item.Factor === instanciaSeleccionado)
            .map(item => item.Nivel)
        )];
    } else {
        Instanciaes = [...new Set(dataToProcess.map(item => item.Nivel))];
    }
    Instanciaes.sort().forEach(nivel => {
        NivelSelect.append(`<option value="${nivel}">${nivel}</option>`);
    });
}

function filtrarDelito(nivelSeleccionado, dataToProcess){
	debugger;
    //const delitos = [...new Set(dataToProcess.map(item => item.Delito))];
    const delitoSelect = $('#delito');
    delitoSelect.empty().append('<option value="">Seleccione un delito</option>');
	
	 let Niveles = [];
    if (nivelSeleccionado) {
        Niveles = [...new Set(dataToProcess
            .filter(item => item.Nivel === nivelSeleccionado)
            .map(item => item.Delito)
        )];
    } else {
        Niveles = [...new Set(dataToProcess.map(item => item.Delito))];
    }
    
	Niveles.sort().forEach(delito => {
        delitoSelect.append(`<option value="${delito}">${delito}</option>`);
    });
}

// Función para actualizar la tabla y los badges de filtros activos
function actualizarTablaYFiltros() {
	debugger;
    const delito = $('#delito').val();
    const instancia = $('#instancia').val();
    const nivel = $('#nivel').val();

    // Resetear DataTables para aplicar nuevos filtros desde el conjunto original
    if (tabla) {
        tabla.destroy(); // Destruye la nivel actual de DataTables
    }

    // Filtra la data original con los selectores
    let filteredData = originalData.filter(d => {
        return (instancia === '' || d.Factor === instancia) &&
               (nivel === '' || d.Nivel === nivel) &&
			   (delito === '' || d.Delito === delito);
    });

    // Re-inicializa DataTables con la data filtrada
    tabla = $('#tabla').DataTable({
        responsive: true,
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'excelHtml5',
                text: 'Exportar a Excel',
                className: 'btn btn-success'
            }
        ],
        rowGroup: {
            dataSrc: '0' // Agrupar por columna 0: Delito
        },
		pageLength: 20
		,
        data: filteredData.map(d => [
            d.Instancia,
			`<div class='oferta-format oferta-truncada' data-fulltext="${d.Nivel}">${d.Nivel.substring(0, 850).replace(/\n/g, '<br>')} </div>`,
			d.Delito,
            `<div class='oferta-format'>${d.Factor.replace(/\n/g, '<br>')}</div>`,
            `<div class='oferta-format oferta-truncada' data-fulltext="${d.Competencia}">${d.Competencia.substring(0, 450).replace(/\n/g, '<br>')} </div>`
        ])
    });

    // Sincronizar el campo de búsqueda global con la búsqueda de DataTables
    $('#searchBox').off('keyup').on('keyup', function() {
        tabla.search(this.value).draw();
    });

    actualizarFiltrosActivos(delito, instancia, nivel);
}

// Función para actualizar los badges de filtros activos
function actualizarFiltrosActivos(delito, instancia, nivel) {
	debugger;
    const badgesContainer = $('#active-filters-badges');
    badgesContainer.empty();

   
    if (instancia) {
        badgesContainer.append(`<span class="badge bg-info text-dark me-2">Factor de riesgo: ${instancia}</span>`);
    }
    if (nivel) {
        badgesContainer.append(`<span class="badge bg-success me-2">Nivel territorial: ${nivel}</span>`);
    }
	 if (delito) {
        badgesContainer.append(`<span class="badge bg-primary me-2">Delito: ${delito}</span>`);
    }
	
}

// Bloque principal de ejecución cuando el DOM está listo
$(document).ready(async function () {
    originalData = await fetchData(); // Cargar la data al inicio
  


    if (originalData.length > 0) {
		debugger;
        //cargarOpciones(originalData);
        filtrarInstancia( originalData);
        filtrarNivel('', originalData);
		filtrarDelito('', originalData);
        actualizarTablaYFiltros(); // Inicializar la tabla y filtros
    } else {
        $('#tabla tbody').html('<tr><td colspan="5" class="text-center">No se pudieron cargar los datos o no hay datos disponibles.</td></tr>');
    }

    // Eventos de cambio para los selectores de filtro
    $('#delito').on('change', function () {
       // const v = $(this).val();
       // filtrarInstancia(v, originalData);
       //filtrarNivel('', originalData); // Resetear Instanciaes si cambia delito
       // $('#instancia').val(''); // Resetear Instancia
       // $('#nivel').val(''); // Resetear nivel
        actualizarTablaYFiltros();
    });

    $('#instancia').on('change', function () {
        const v = $(this).val();
        filtrarNivel(v, originalData);
        $('#nivel').val(''); // Resetear nivel si cambia Instancia
		$('#delito').val('');
        actualizarTablaYFiltros();
    });

    $('#nivel').on('change', function () {
		const v = $(this).val();
        filtrarDelito(v, originalData);		
		$('#delito').val('');
        actualizarTablaYFiltros();		
    });

    // Evento para el botón de Reiniciar
    $('#reset').on('click', function () {        
        $('#nivel').val('');
        $('#instancia').val('');
		$('#delito').val('');
        //cargarOpciones(originalData); // Recargar opciones principales
        filtrarInstancia(originalData); // Recargar factores
        filtrarNivel('', originalData); // Recargar Instanciaes
		filtrarDelito('', originalData); 
        actualizarTablaYFiltros(); // Actualizar tabla sin filtros
    });

    // Evento para el modal de "Ver más"
    $('#tabla tbody').on('click', '.ver-mas', function(e) {
        e.preventDefault();
        const fullText = $(this).parent().data('fulltext');
        const column = $(this).data('column');
        $('#modalTitle').text(`Detalles de ${column}`);
        $('#modalBody').html(fullText.replace(/\n/g, '<br>'));
        var myModal = new bootstrap.Modal(document.getElementById('detailModal'));
        myModal.show();
    });
	
	
});