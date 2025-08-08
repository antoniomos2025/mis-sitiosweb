let tabla;
let originalData = [];

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
    scrollX: true,           // scroll horizontal
    scrollCollapse: true,
    paging: true,
    columns: [
      { data: 'Delito' },
      { data: 'Factor' }, // Lugar
      { // Estrategia -> hipervínculo si existe EnlaceUrl
        data: 'Institucion',
        render: (data, type, row) => {
          if (type !== 'display') return data;
          const url = row.EnlaceUrl || '#';
          const title = data || '';
          return url && title ? `<a href="${url}" target="_blank" rel="noopener">${title}</a>` : title;
        }
      },
      { data: 'Descripcion' },
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
    buttons: ['copyHtml5','excelHtml5'],
    language: { url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json' }
  });

  populateSelect('#delito','Delito',originalData);
  populateSelect('#factor','Factor',originalData);
  populateSelect('#Institucion','Institucion',originalData);
  populateSelect('#tipo','Tipo',originalData);
  populateSelect('#nivel','Nivel',originalData);

  $('#delito,#factor,#Institucion,#tipo,#nivel').on('change', applyFilters);
  $('#reset').on('click', ()=>{
    $('#delito,#factor,#Institucion,#tipo,#nivel').val('');
    applyFilters();
  });
  $('#searchBox').on('keyup', function(){ tabla.search(this.value).draw(); });
});
