let tabla;
let originalData = [];

// Helpers
const uid = (() => { let i=0; return () => (++i).toString(36) + Date.now().toString(36); })();

function renderClamped(text){
  const id = uid();
  const safe = (text || '').toString();
  const html = `
    <div class="clamp clamp-3" id="clamp-${id}">${safe}</div>
    <div><button class="toggle-clamp" data-target="clamp-${id}">Ver más</button></div>
  `;
  return html;
}

async function fetchData(){ return window._DATASET || []; }

function populateSelect(selector, field, data){
  const $s = $(selector);
  $s.empty().append('<option value="">Todos</option>');
  [...new Set(data.map(r => r[field]).filter(Boolean))]
    .sort((a,b)=>a.localeCompare(b,'es',{sensitivity:'base'}))
    .forEach(v => $s.append(`<option value="${v}">${v}</option>`));
}

function applyFilters(){
  const delito = $('#delito').val();
  const factor = $('#factor').val();
  const institucion = $('#Institucion').val();
  const tipo = $('#tipo').val();
  const nivel = $('#nivel').val();

  const filtered = originalData.filter(r =>
    (!delito || r.Delito === delito) &&
    (!factor || r.Factor === factor) &&
    (!institucion || r.Institucion === institucion) &&
    (!tipo || r.Tipo === tipo) &&
    (!nivel || r.Nivel === nivel)
  );
  tabla.clear().rows.add(filtered).draw();
}

$(async function(){
  originalData = await fetchData();

  tabla = $('#tabla').DataTable({
    data: originalData,
    autoWidth: false,
    scrollX: true,           // Scroll horizontal
    scrollCollapse: true,
    paging: true,
    columns: [
      { data: 'Delito' },
      { data: 'Factor' }, // Lugar
      { // Estrategia -> hipervínculo si existe EnlaceUrl
        data: 'Institucion',
        className: 'link-cell',
        render: (data, type, row) => {
          if (type !== 'display') return data;
          const url = row.EnlaceUrl || '#';
          const title = data || '';
          return url && title ? `<a href="${url}" target="_blank" rel="noopener">${title}</a>` : title;
        }
      },
      { // Descripción larga con clamp
        data: 'Descripcion',
        render: (data, type) => {
          if (type !== 'display') return data;
          return renderClamped(data);
        }
      },
      { data: 'Responsable', defaultContent: '' },
      { data: 'Lanzamiento', className: 'text-center', defaultContent: '' },
      { data: 'Tipo', defaultContent: '' },
      { data: 'Nivel', defaultContent: '' },
      { data: 'Financiero', defaultContent: '' },
      { data: 'Técnico', defaultContent: '' },
      { data: 'Articulacion', defaultContent: '' },
      { data: 'Confianza', defaultContent: '' },
      { data: 'Adaptabilidad', defaultContent: '' },
      { data: 'Evaluacion', defaultContent: '' }
    ],
    dom: 'Bfrtip',
    buttons: [
      { extend: 'copyHtml5', text: 'Copiar' },
      { extend: 'excelHtml5', text: 'Excel' },
      { extend: 'colvis', text: 'Columnas' }   // Ocultar/mostrar columnas
    ],
    language: { url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json' }
  });

  // Poblar selects
  populateSelect('#delito','Delito',originalData);
  populateSelect('#factor','Factor',originalData);
  populateSelect('#Institucion','Institucion',originalData);
  populateSelect('#tipo','Tipo',originalData);
  populateSelect('#nivel','Nivel',originalData);

  // Eventos filtros
  $('#delito,#factor,#Institucion,#tipo,#nivel').on('change', applyFilters);
  $('#reset').on('click', ()=>{
    $('#delito,#factor,#Institucion,#tipo,#nivel').val('');
    applyFilters();
  });
  $('#searchBox').on('keyup', function(){ tabla.search(this.value).draw(); });

  // Delegación: expandir/contraer celdas largas
  $('#tabla tbody').on('click', '.toggle-clamp', function(){
    const target = $(this).data('target');
    const $box = $('#'+target);
    if ($box.hasClass('clamp-3')) {
      $box.removeClass('clamp-3').addClass('clamp-unclamp');
      $(this).text('Ver menos');
    } else {
      $box.removeClass('clamp-unclamp').addClass('clamp-3');
      $(this).text('Ver más');
    }
  });

  // Expandir/contraer todas las descripciones
  $('#expandAll').on('click', function(){
    $('#tabla tbody .clamp').removeClass('clamp-3').addClass('clamp-unclamp');
    $('#tabla tbody .toggle-clamp').text('Ver menos');
  });
  $('#collapseAll').on('click', function(){
    $('#tabla tbody .clamp').removeClass('clamp-unclamp').addClass('clamp-3');
    $('#tabla tbody .toggle-clamp').text('Ver más');
  });
});
