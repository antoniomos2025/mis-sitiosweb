let tabla; // Variable global para la instancia de DataTables
let originalData = []; // Para almacenar la data original cargada

// Función para cargar los datos (simula una API)
async function fetchData() {
    // En un entorno real, aquí harías una llamada a una API:
    // try {
    //     const response = await fetch('/api/oferta-institucional');
    //     if (!response.ok) throw new Error('Network response was not ok.');
    //     return await response.json();
    // } catch (error) {
    //     console.error("Error fetching data:", error);
    //     return [];
    // }

    // Datos hardcodeados para demostración (de tu HTML original)
    return [
        
		  {Delito:"Extorsión",Factor:"Vunerabilidad de los entornos digitales",Institucion:"UIAF",Normativas:"Recomendaciones del GAFI \n Constitución Política de Colombia  \n Ley 590 de 2000 \n Ley 906 de 2004 \n Ley 526 de 2009 \n Ley 1621 de 203 \n",Oferta:"a. Desarrollo de nuevas tipologías \n b. Mejoramiento de la infraestructuraque incluye analítica de datos para el procesamiento de la información \n c. Firma de convenios para la recepción de la nueva información \n d. Detección de organizaciones criminales a través de redes complejas  \n e. Detección, prevención procesamiento de informes de inteligencia financieradifundidos principalmente a la Fiscalía General de la Nación  \n f. Labores de inteligencia, incluidas las que contemplan la Fuerza Pública \n"},
{Delito:"Extorsión",Factor:"Vunerabilidad de los entornos digitales",Institucion:"DIASE",Normativas:"Ley 282 de 1996 \n Plan 'Todos Unidos contra el secuestro y la extorsión'",Oferta:"a. Campañs de prevención por parte de los GAULA \n b. Pezas comunicacionales de difusión masiva \n"},
{Delito:"Extorsión",Factor:"Vulnerabilidades socioeconómicas",Institucion:"Ministerio de la Igualdad y la Equidad",Normativas:"ND",Oferta:"a. Garantizar el derecho a la igualdad y equidad de todas las personas, especiamente de las que han sido históricamente excluidad (Aporte a la triada de la segurida humana en la libertad de vivir con dignidad y sin pobreza) \n b. Cinco viceministerios: Juentud, mujeres, poblaciones y territorios excluidos y superación de la pobreza, Pueblos étnicos y campesinos, diversidades \n c. Programa y direcciones como: \n * Hambre cero: provisión de alimentos - canastas PECC/Corredores. \n * Fortalecimiento local para plantas de transformación de platano y caña; \n * Direccion para el acceso igualitario al agua;  \n * Dirección de cuidad;  \n * Población migrante;  \n * Personas mayores;  \n * Dirección de Personas en Situación de Calle: Unidades móviles, albergues, dormitorios sociales, servicios para mitigación de riesgo alimentario y social \n * Programa de Economía Popular para la superación de la pobreza;  \n * Centros de acopio, empaque, distribución: centros de abastecimiento regional con canastas en la Guajira (Dibulla, Maicao, Manaure, Riohacha, Uribia), Chocó Norte - Antioquia, Choco Sur - Risaralda, Nariño, Cauca, Valle del Cauca, Catatumbo; \n * Comedores: Cúcuta, Popayán, Buenaventura, Quibdó, Tumaco, Cali, Bogotá; \n * Agua: soluciones comunitarias, no convencionales. Alternativas donde no es posible infraestructura tradicional, captas de agua lluvia, bomberos, ..); * Cuidado: cuidado de los cuidadores, conpes de Cuidado; \n * Poblacion migrante: centros de atención, atención humanitaria, emprendimiento;  \n * Personas mayores: centros de atención, política de vejez, protección de personas mayores en zonas rurales, reconocimiento de saberes"},
{Delito:"Extorsión",Factor:"Contextos de criminalidad (presencia y operatividad de grupos armados no estatales)",Institucion:"Ministerio del Interior",Normativas:"Ley 418 de 1997 \n Ley 2197 de 2022",Oferta:"FONSECON:a. Infraestructura: 1) centros de convivencia; 2) estaciones de policía e infraestructuras especiales. \n b. Movilidad: 1) carros, camionetas y camiones; 2) Botes, lanchas,motos, cuatrimotos \n c. Sistemas integrados de emergencia y seguridad: 1) sistemas de seguridad; 2) radios de comunicaciones; 3) alarmas comunitarias"},
{Delito:"Extorsión",Factor:"Contextos de criminalidad (presencia y operatividad de grupos armados no estatales)",Institucion:"DIASE-GAULA-PONAL",Normativas:"Ley 282 de 1996 \n Plan 'Todos Unidos contra el secuestro y la extorsión'",Oferta:"a. GAULAS a nivel nacional y con procesos investigativos contra dichas estructuras"},
{Delito:"Extorsión",Factor:"Baja custodia de datos personales",Institucion:"Fiscalía General de la Nación",Normativas:"Ley 1581 de 2012 \n Decreto 1377 de 2013",Oferta:"a. aseguramiento de la información personal de los ciudadanos disponible en: empresas de telefonía e internet, Cámaras de Comercio, Secretarías de Hacienda municipales y departamentales, otros"},
{Delito:"Extorsión",Factor:"Deficit del sistema de justicia (investigación y judicialización)",Institucion:"Fiscalía General de la Nación",Normativas:"Ley 906 de 2004 \n Ley 599 de 2002",Oferta:"a. Gestión inicial de casos \n b. Modelo único de investigación financiera \n c. Casos estructurales \n d. Nuevos indicadores de éxito  \n e. Reducción de tiempos BSBD \n f. Nueva metodología de análisis sobre el delito (follow the money, análisis de redes)"},
{Delito:"Extorsión",Factor:"Deficit del sistema de justicia (investigación y judicialización)",Institucion:"INPEC",Normativas:"Ley 599 de 2000 \n Ley 906 de 2004 \n Ley 1621 de 2003",Oferta:"ND"},
{Delito:"Extorsión",Factor:"Deficit del sistema de justicia (investigación y judicialización)",Institucion:"DIASE-GAULA-PONAL",Normativas:"ND",Oferta:"ND"},
{Delito:"Extorsión",Factor:"Deficit del sistema de justicia (investigación y judicialización)",Institucion:"Ministerio de Justicia y del Derecho",Normativas:"Decreto 1069 de 2015",Oferta:"a. Articulación con la rama y la Fiscalía General de la Nación  \n b. Asistencias técnicas para fortalecer la investigación y judicialización (territorios por definir)"},
{Delito:"Extorsión",Factor:"Deficit del sistema de justicia (investigación y judicialización)",Institucion:"SEMOC-COGAM - GAULA",Normativas:"Resolución MDN 2772 \n Resolución MDN 5729 \n",Oferta:"ND"},
{Delito:"Extorsión",Factor:"Deficit del sistema de justicia (investigación y judicialización)",Institucion:"Ministerio de Defensa Nacional",Normativas:"Ley 282 de 1996",Oferta:"Estrategia contra el secuestro y la extorsión"},
{Delito:"Extorsión",Factor:"Deficit de atención y custodia penitenciaria -corrupción",Institucion:"INPEC",Normativas:"Ley 599 de 2000 \n Ley 906 de 2004 \n Ley 794 de 2002",Oferta:"ND"},
{Delito:"Extorsión",Factor:"Deficit de atención y custodia penitenciaria -corrupción",Institucion:"Departamento Nacional de Planeación",Normativas:"Decreto 851 de 2024 (comunicaciones no permitidas) \n Decreto 694 de 2018 (Incautación física)",Oferta:"CONPES Política Carcelaria"},
{Delito:"Extorsión",Factor:"Deficit de atención y custodia penitenciaria -corrupción",Institucion:"Ministerio de Justicia y del Derecho",Normativas:"Decreto 2160 de 1992 \n Decreto 1069 de 2015 \n Decreto 1427 de 2017 \n Decreto 851 de 2024  \n Ley 65 de 1993 \n Ley 282 de 1996",Oferta:"a. Articulación con el Ministerio de Defensa en el marco de la Estrategia Integral  \n b. Implementación del Decreto 851 de 2024 \n c. Impulso a la Operación Dominó  \n d. Articulación con INPEC en los operativos en los  ERON \n e. Formulación del CONPES del sistema penitenciario y carcelario"},
{Delito:"Extorsión",Factor:"Bajo control en acceso y tenencia de líneas móviles",Institucion:"Ministerio de Defensa Nacional",Normativas:"Decreto 851 de 2024 (comunicaciones no permitidas)",Oferta:"a. Estrategia integral contra el secuestro y la extorsión"},
{Delito:"Extorsión",Factor:"Subregistro de la extorsión",Institucion:"Fiscalía General de la Nación",Normativas:"Artículo 229 - Constitución Política - Acceso a la justicia",Oferta:"a. Priorización del delito de extorsión en todas las seccionales \n b. Investigación con enfoque financiero de la estructura criminal extorsiva  \n c. Diferentes canales para denucniar"},
{Delito:"Extorsión",Factor:"Subregistro de la extorsión",Institucion:"DIASE-GAULA-PONAL",Normativas:"Ley 282 de 1996  \n Plan Todos Unidos contra el Secuestro y la Extorsión",Oferta:"a. Campaña yo no pago, yo denuncio \n b. Línea 165 y 147"},
{Delito:"Extorsión",Factor:"Subregistro de la extorsión",Institucion:"Ministerio del Interior",Normativas:"Ley 1801 de 2016",Oferta:"a. Asistencia técnica para la formulación e implementación de los Planes Integrales de Seguridad y Convivencia"},
{Delito:"Extorsión",Factor:"Subregistro de la extorsión",Institucion:"Departamento Nacional de Planeación",Normativas:"ND",Oferta:"Documento de análisis de la extorsión en conjunto con Asocapitales"},
{Delito:"Extorsión",Factor:"Subregistro de la extorsión",Institucion:"SEMOC-COGAM - GAULA",Normativas:"Resolución MDN 2772 \n Resolución MDN 5729 \n",Oferta:"a. campañas de prevención  \n b. Línea 147  \n c. Innovación con el Gaula Digital"},
{Delito:"VIF",Factor:"Contexto de criminalidad",Institucion:"Policia Nacional",Normativas:" \n Ley 599 de 2000",Oferta:"Estrategia EMFAG.  \n Investigación criminal de delitos priorizados: \n • Violencia Intrafamiliar \n • Ataque con agentes químicos \n • Delitos sexuales \n • Homicidios a mujer \n • Feminicidio \n"},
{Delito:"VIF",Factor:"Contexto de criminalidad",Institucion:"Ministerio de Educación Nacional",Normativas:"Ley 115 \n Ley 1620 \n Dec. 1965 \n De. 459/2024 \n Ley 2083 \n PND",Oferta:"• Sistema Nacional de Convivencia escolar, \n • Comités nacionales/territoriales y escolares de convivencia \n • Asistencias técnicas a secretarias de educación"},
{Delito:"VIF",Factor:"Contexto de criminalidad",Institucion:"ICBF",Normativas:"Ley 1098 de 2006 \n Código de Infancia y adolescencia \n",Oferta:"Servicios de atención para la ejecución y cumplimiento de medidas y … el marco del SRPA (prevención tercería).  \n •Acompañamiento psicosocial con familias – fortalecimiento de … violentes vínculos …. \n • Fortalecimiento técnico con equipos defensoras de familias y operativas pedagógicas en … detención y ... \n"},
{Delito:"VIF",Factor:"Contexto de criminalidad",Institucion:"Fiscalia",Normativas:"Constitución nacional: Art. 250  \n Ley 906/04 132y55,200 \n Ley 1257/08 \n Res. 014/2025 – Criterios de conocimiento de Direcciones Especializadas contra la criminalidad organizada \n",Oferta:""},
{Delito:"VIF",Factor:"Contexto de criminalidad",Institucion:"Ministerio de Defensa",Normativas:"Art.5, Decreto 1512 de 2000 \n Art.8, Decreto 1874 de 2021 \n",Oferta:"• Diseñar, fomentar, gestionar y dirigir políticas y estrategias de seguridad \n • Liderar el direccionamiento estratégico de la fuerza publica y proveer … para su funcionamiento \n"},
{Delito:"VIF",Factor:"Políticas de seguridad no territorializadas",Institucion:"Ministerio del Interior",Normativas:"Res. 041 de 2024 \n Res. 1325 \n Plan nacional de Desarrollo, capitulo seguridad humana \n",Oferta:"Asistencias técnicas a entidades territoriales (alcaldías y gobernaciones) de todo el país para promover la transversalidad del enfoque de género y diversidad en los procesos de planeación, programas, proyectos y políticas de seguridad y convivencia"},
{Delito:"VIF",Factor:"Políticas de seguridad no territorializadas",Institucion:"Ministerio del Interior",Normativas:"Res. 1325",Oferta:"Socializar lineamientos para la garantía de la participación y representación de las mujeres en todas sus diversidades para la toma de decisiones sobre la seguridad y la paz, y fortalecer los procesos organizativos de las mujeres desde los saberes ancestrales y los modelos de justicia propria"},
{Delito:"VIF",Factor:"Políticas de seguridad no territorializadas",Institucion:"Policia Nacional",Normativas:"Planes de Desarrollo Territorial \n PISCC \n Políticas Sectoriales \n",Oferta:"Ley 4 de 1991: Control de Prevención, conservación del orden público y la tranquilidad ciudadana"},
{Delito:"VIF",Factor:"Políticas de seguridad no territorializadas",Institucion:"Procuraduría",Normativas:"Constitución Política \n Ley 262/00 \n Res.  377/22 \n",Oferta:"• Función preventiva \n • Intervención \n • Disciplinaria \n • Auxilo@procuradoria.gov.co \n • noalatrata@procuradoria.gov.co \n • intervencionpenalmujeres@procuradoria.gov.co \n • Sede electrónica de la entidad \n • Atención Presencial a la ciudadana \n • CAP: Centro de Antención Promujeres \n"},
{Delito:"VIF",Factor:"Políticas de seguridad no territorializadas",Institucion:"Defensoria del Pueblo",Normativas:"Constitución política \n Ley 24/1992 \n Ley 1257/2008 \n Ley 1098/2006 \n Ley 1719/2014 \n Ley 1761/2015 \n Ley 2126/2021 \n Ley 2215/2022 \n Dec. 1574/2021 \n CEDAW \n Convención Belem do Para \n Convención de los derechos del niño \n Declaración de Beijing \n",Oferta:"• Fortalecimiento de los comités territoriales del mecanismo articulador \n • Seguimiento a casa refugio en los 42 departamentos Monitoreo de la repuesta institucional para la medición de la tasa de efectividad de acceso a justicia \n • Actividades de promoción y divulgación \n"},
{Delito:"VIF",Factor:"Políticas de seguridad no territorializadas",Institucion:"Defensoria del Pueblo",Normativas:"Constitución política \n Ley 24/1992 \n Ley 1257/2008 \n Ley 1098/2006 \n Ley 1719/2014 \n Ley 1761/2015 \n Ley 2126/2021 \n Ley 2215/2022 \n Dec. 1574/2021 \n CEDAW \n Convención Belem do Para \n Convención de los derechos del niño \n Declaración de Beijing \n",Oferta:"• Curso derechos de la niñez (Presencial y virtual) – Ley 1098/06 \n • Curso violencias basadas en género – Ley 1257/08 \n • Incidencia como ministerio publico en los espacios de política publica \n • Actividades de fortalecimiento de entornos protectores de NNA \n"},
{Delito:"VIF",Factor:"Déficit del sistema de justicia (barreras de acceso a justicia)",Institucion:"Policia Nacional",Normativas:"",Oferta:"Frente a este factor de riesgo, la Policía Nacional a través de su componente Patrulla Purpura genera articulación y relacionamiento estratégico con las instituciones corresponsables a fin de garantizar un acceso efectivo-eficiente y eficaz, llevando la oferta a lugar donde no se cuenta de manera permanente"},
{Delito:"VIF",Factor:"Déficit del sistema de justicia (barreras de acceso a justicia)",Institucion:"Instituto Nacional de Medicina Legal",Normativas:"• Ley 938 de 2004: Creación del Instituto Nacional de Medicina legal \n • Ley 1257 de 2008 \n • Ley 599 de 2000 – código Penal \n • Ley 1146 de 2007 – Prevención violencia sexual \n • Ley 1098 de 2006 – código de la infancia y adolescencia \n • Ley 1773 de 2016 – Ley Natalia Ponce de Léon victimas de ataques con ácido. \n",Oferta:"1. Valoraciones medicolegales en lesiones fatales y no fatales en apoyo técnico científico a la justicia \n 2. En valoración de lesiones no fatales se cuenta con protocolos, guías en la atención de Violencia Intrafamiliar: \n • Protocolo valoración riesgo violencia mortal contra las mujeres partante de pareja a expareja \n • Guía para abordaje forense integral en la Investitgación de la violencia sexual \n • Guía de recomendaciones para la Investigación judicial, atención y prevención de muertes con sospecha de femicidio \n • Guía para la realización de pe.. psiquiátrica o psicológica forense en NNA pasantes víctimas de delitos sexuales. \n • Modelo de atención a las violencias basados en género para clínica forense \n • Disposición de datos estadísticos de lesiones fatales y no fatales de causa extrema para la toma de decisiones en materia de política publica \n • Captura de información con variables de enfoque diferencial \n"},
{Delito:"VIF",Factor:"Déficit del sistema de justicia (barreras de acceso a justicia)",Institucion:"Ministerio de Justicia",Normativas:"• Ley 1257 de 2008 \n • Ley 2128 de 2001 \n • Decreto 103 de 2025 \n • Articulo 113 de la constitución política \n • Articulo 229 de la constitución política \n • Decreto 1069 de 2015 – Decreto único reglamentario del sector justicia \n • Decreto 1427 de 2017 – hace referencia a los funciones y competencias del ministerio de justicia \n",Oferta:"Programa Nacional de Casas de Justicia y con violencia ciudadana. Programa responsable de establecer lineamiento de atención y presencias que contribuyen a garantizar el acceso eficiente y ..  \n 1. Casas de Justicia \n 2. Centro de convivencia ciudadana. Objetivo general: Facilitar el acceso de las comunidades desde los servicios de justicia formal y no formal para la resolución … de conflictos y el fortalecimiento de la convivencia positiva \n 3. Fortalecimiento Institucional a comisarias de Familia (todos los profesionales) \n 4. Procesos de articulación y coordinación efectiva con autoridades locales para el fortalecimiento a comisarías de Familia. Lineamientos técnicos atención y abordaje violencia en contexto familiar. \n 5. Sistema Nacional de Justicia Familiar: \n • Mesas Interinstitucionales (Nacional) \n • Defensorías de Familia \n • Autoridades Administrativas \n • Comisarías de Familia (local) \n"},
{Delito:"VIF",Factor:"Déficit del sistema de justicia (barreras de acceso a justicia)",Institucion:"Instituto Nacional de Medicina Legal",Normativas:"",Oferta:"1. Valoraciones medicolegales en lesiones fatales y no fatales en apoyo técnico científico a la justicia. \n 2. En valoraciones de lesiones no fatales se cuenta con protocolos, guías en la atención de violencia intrafamiliar: \n • Protocolo valoración riesgo violencia mental contra las mujeres partante de pareja o expareja. \n • Guía para el abordaje forense integral en la investigación de la violencia sexual. \n • Guía de recomendaciones para la investigación judicial, atención y prevención de muertes con sospecha de feminicidio. \n • Guía para la realización de p.. psiquatrica o psicológica forense en NNA posantes víctimas de delitos sexuales. \n • Modelo de atención a las violencias basadas en género para clínica forense. \n • Disposición de datos estadísticos de lesiones fatales y no fatales de causa extrema para la toma de decisiones en materia de política pública. \n • Captura de información con variables de enfoque diferencial. \n"},
{Delito:"VIF",Factor:"Déficit del sistema de justicia (barreras de acceso a justicia)",Institucion:"Fiscalia",Normativas:"• Constitución Político \n • Ley 906/04 \n • Directiva 013/2013 – que establece lineamientos para el reconocimiento, garantías y protección de los derechos de las victimas en el proceso penal \n • Art. 250 \n • Art. 229 \n • Art. 200 \n • Art. 132 55 \n",Oferta:""},
{Delito:"VIF",Factor:"Déficit del sistema de justicia (barreras de acceso a justicia)",Institucion:"Defensoria del Pueblo",Normativas:"• Plan estratégico institucional defensoría del pueblo  \n • Ley 24/1992 \n • Constitución Política \n • Ley 1257/2008 \n • Ley 1719/2014 \n",Oferta:"• Monitoreo de la repuesta institucional para mediación tasa efectiva de acceso a justicia. \n • Integración y recomendaciones comités territoriales del mecanismo articulador \n • Entidad integrante de comité de seguimiento ley 1257/2008, Ley 1719/2014 \n"},
{Delito:"VIF",Factor:"Violencia Institucional",Institucion:"Policia Nacional",Normativas:"Ley 1257 / CONPES 4080",Oferta:"• La Patrulla púrpura de la política cuenta con capacidades humanas especializadas en la atención y abordaje adecuado y victimas, con un enfoque diferencial y de género centrado en reducir la activación de ruta interinstitucional el riesgo de revictimización con su acompañamiento"},
{Delito:"VIF",Factor:"Violencia Institucional",Institucion:"Defensoria del Pueblo",Normativas:"• Ley 1257/2008 \n • Ley 1719/2015 \n",Oferta:"• Estrategias duplas de género \n • Asesores de infancia y vejez \n • Representación judicial de victimas (Ley 1257/2008, Ley 1719/2015) \n • Grupo elite defensoría pública especializado en mujeres y OSIGD \n"},
{Delito:"VIF",Factor:"Violencia Institucional",Institucion:"Ministerio de Justicia",Normativas:"",Oferta:"• Construcción P.P. Prevención -> atención a violencias C.Fam. (enfoque DDHH) \n • Diseño de programas de prevención de VBG y VIF \n"},
{Delito:"VIF",Factor:"Violencia Institucional",Institucion:"Ministerio del Interior",Normativas:"• Resolución 071 de 2024",Oferta:"Fortalecimiento del proceso de modernización de la UNP para la incorporación efectiva del enfoque de género y diversidad dentro de su misionalidad"},
{Delito:"VIF",Factor:"Violencia Institucional",Institucion:"Fiscalia",Normativas:"• Constitución Política \n • Ley 906/ \n • Art. 132 y 55 \n • Art. 200 \n • Directiva 013/2023 – por la que se establecen lineamientos para el reconocimiento, garantías y protección de los derechos de las victimas en el proceso penal \n",Oferta:""},
{Delito:"VIF",Factor:"Violencia Institucional",Institucion:"Ministerio de Educación Nacional",Normativas:"Ley 115 1994 – ley de educación  \n Ley 1620 – convivencia escolar  \n Dec. 1965 Dec reglamentario \n",Oferta:"Asistencias técnias: en Ruta de Atención Integral para la Convivencia Escolar - Resignificación de manual de Convivencia Escolar con enfoque restaurativo y Protocolos de abordaje pedagógico: Violencias basadas en género, consumo de SPA conducta suicida, ciberacoso, xenofobia y discriminación por racismo"},
{Delito:"VIF",Factor:"Vulnerabilidades socioeconómicas",Institucion:"Ministerio de Justicia",Normativas:"",Oferta:"• Consultorios jurídicos \n • Estrategia consultorios jurídicos para la paz ->Enfoqie DDGG, construcción de Paz, enfoque de Género \n"},
{Delito:"VIF",Factor:"Machismo - Patriarcado",Institucion:"ICBF",Normativas:"• Código de Infancia y adolescencia \n • Ley 1098 de 2006 \n • Ley 1146 de 2007 \n • Ley 1336 de 2009  \n • Resolución 459 de 2012 Min.Salud \n • Sentencias: C-055 de 2022 y C-355 de 2006 \n • Ley 1257 de 2008 \n • Ley 1761de 2015 \n • Decreto 1710 de 2020 \n",Oferta:"Desde la Subdirección de restablecimiento de derechos \n • Equipo técnico para brindar orientación frente a la atención de la VBG, \n • Estrategia BINAS para la atención especializada en VBG con énfasis en violencia sexual \n • Modalidades de servicios de protección \n"},
{Delito:"VIF",Factor:"Machismo - Patriarcado",Institucion:"Ministerio de Salud",Normativas:"Resolución 3280",Oferta:"• Desarrollo de capacidades para la prevención de las violencias de género en el curso de la vida en los entornos: hogar, escolar, institucional y comunitaria \n • Creación o fortalecimiento social, redes sociales y comunitarias \n"},
{Delito:"VIF",Factor:"Machismo - Patriarcado",Institucion:"Policia Nacional",Normativas:"• Ley 1257/2008 \n • CONPES 4080 \n",Oferta:"Patrulla Púrpura: Capacidad del servicio de policía orientada a prevenir, atender y proteger a mujeres víctimas, orientar la denuncia y sensibilizar la población par la no normalización de violencia"},
{Delito:"VIF",Factor:"Machismo - Patriarcado",Institucion:"Ministerio de Salud",Normativas:"",Oferta:"Acciones de prevención para evitar o intervenir el estigma y la discriminación hacia las personas con trastornos o afectaciones mentales, personas con consumos problemáticos de SPA"},
{Delito:"VIF",Factor:"Roles de género rígidos",Institucion:"Ministerio de Educación Nacional",Normativas:"Ley 115 1994 – ley de educación  \n Ley 1620 – convivencia escolar  \n Directiva 01 de 2022  \n En esencia la competencia normativa está centrada en la formación integral de estudiantes entendiendo que en dicho concepto se consolida el derecho a la educación como escenario en el que se garantizan todos los derechos de los estudiantes al libre desarrollo de la personalidad, derechos sexuales y reproductivos, derechos a la dignidad humana, entre otros relacionadas directamente con los procesos pedagógicos a los que hay lugar para abordar los roles d género rígidos, el machismo o patriarcado",Oferta:"1. Asistencia técnica para el fortalecimiento de capacidades en la promoción de los derechos humanos, sexuales y reproductivos, prevención de las violencias basadas en género y las violencias sexuales y construcción de Programas de Educación para la Sexualidad y Construcción de Ciudadanía – PESCC  \n 2. Protocolos abordaje pedagógico de situaciones de riesgo en el marco de la convivencia escolar.  \n 3. Educación CRESE"},
{Delito:"VIF",Factor:"Roles de género rígidos",Institucion:"Policia Nacional",Normativas:"",Oferta:"A través de la estrategia de atención a mujer, familia y género y su componente de Patrulla Púrpura ha priorizado la oferta preventiva enfocada en la necesidad de la participación de los hombres en los procesos disrupción del delito de violencia intrafamiliar, masculinidades responsables y afectividad"},
{Delito:"VIF",Factor:"Roles de género rígidos",Institucion:"Defensoria del Pueblo",Normativas:"",Oferta:"• Actividades de PyD. Dirigidas a mujeres victimas del conflicto armado, población OSIGD, .., públicos, padres madres y cuidadores \n • Acciones de formación con enfoque de género y diferencial, … resolución de conflictos familiares, … generacionales y prevención de violencias \n • Duplas de género 42 regionales \n • Asesores Infancia y vejez en 17 regionales \n"},
{Delito:"VIF",Factor:"Roles de género rígidos",Institucion:"Ministerio de Justicia",Normativas:"• Ley 1257  \n • Ley 2126 \n • Ley 731 de 2002 \n",Oferta:"Entornos protectores para mujeres y personas LGBTIQ+ en la ruralidad"},
{Delito:"VIF",Factor:"Roles de género rígidos",Institucion:"Fiscalia",Normativas:"• Art. 250 Constitución Nacional \n • Ley 906/04, art. 200, 132 y 55 \n • Ley 1257/2008  \n • Resolución 077/2024 – que crea … violencias fundadas en orientación sexual o identidad de género \n • Directiva 006/2023 – lineamiento Investigación y judicialización de VBG, orientación sexual \n • Guía de buenas practicas para la investigación  y judicialización de violencias en orientación sexual e identidad de género \n",Oferta:""},
{Delito:"VIF",Factor:"Roles de género rígidos",Institucion:"Ministerio de Educación Nacional",Normativas:"• Ley 115 – art. 7 y 14 \n • Decreto 1860/94 \n • Ley 1620 \n",Oferta:"• Educación CRESE \n • Programa nacional de educación para la sexualidad y construcción de ciudadana \n • Protocolos de abordaje pedagógico de situaciones de riesgo de la convivencia escolar \n • SIUCE – Sistema Unificado de Convivencia Escolar \n"},
{Delito:"VIF",Factor:"Roles de género rígidos",Institucion:"Ministerio de Educación Nacional",Normativas:"Ley 115 1994 – ley de educación  \n Ley 1620 – convivencia escolar  \n Directiva 01 de 2022  \n En esencia la competencia normativa está centrada en la formación integral de estudiantes entendiendo que en dicho concepto se consolida el derecho a la educación como escenario en el que se garantizan todos los derechos de los estudiantes al libre desarrollo de la personalidad, derechos sexuales y reproductivos, derechos a la dignidad humana, entre otros relacionadas directamente con los procesos pedagógicos a los que hay lugar para abordar los roles d género rígidos, el machismo o patriarcado",Oferta:"1. Asistencia técnica para el fortalecimiento de capacidades en la promoción de los derechos humanos, sexuales y reproductivos, prevención de las violencias basadas en género y las violencias sexuales y construcción de Programas de Educación para la Sexualidad y Construcción de Ciudadanía – PESCC  \n 2. Protocolos abordaje pedagógico de situaciones de riesgo en el marco de la convivencia escolar.  \n 3. Educación CRESE"},
{Delito:"VIF",Factor:"Salud mental y gestión emocional",Institucion:"Policia Nacional",Normativas:"• Ley 1257/2008 \n • CONPES 4080 \n",Oferta:"• Comunidad: MinSalud \n • Prevención: Patrulla Púrpura, sensibilización tipos de violencia, derechos de las víctimas, rutas y tipos de atención, denuncia y no normalización de la violencia \n"},
{Delito:"VIF",Factor:"Salud mental y gestión emocional",Institucion:"ICBF",Normativas:"• Ley de Infancia y adolescencia \n • Código de Infancia y Adolescencia \n • Ley 2326 /23 – coordinación alerta rosa \n • Ley 1146/07 – Comité Interinstitucional para la prevención y atención a la violencia sexual a NNA \n",Oferta:"Atrapasueños \n • Casa atrapasueños, \n • Experiencias comunitarias \n • Atrapasueños de apoyos \n • Espacios comunitarios \n"},
{Delito:"VIF",Factor:"Salud mental y gestión emocional",Institucion:"Defensoria del Pueblo",Normativas:"",Oferta:"• Actividades de promoción y divulgación dirigidas a mujeres víctimas del conflicto armado, población OSIGD, funcionaros públicos, padres, madres y cuidadores \n • Acciones de formación con enfoque de género y diferencial, sobre resolución de conflictos familiares, dialogo generacionales y prevención de violencia \n"},
{Delito:"VIF",Factor:"Salud mental y gestión emocional",Institucion:"ICBF",Normativas:"• Ley 1098 de 2006 – Código de Infancia y Adolescencia  \n • Ley 1751 de 2015 \n • Ley 1616 de 2013 \n • Decreto1574 de 2024 \n",Oferta:"• Promoción y … de la salud mental, prevención consumo de sustancias psicoactivas (atención … en salud con MinSalud \n • Sistema Nacional de justicia familiar -> fortalecimiento de defensorías de familia \n"},
{Delito:"VIF",Factor:"Salud mental y gestión emocional",Institucion:"Fiscalia",Normativas:"• Art. 250 – Constitución Nacional \n • Art. 200, Ley 906 \n • Art,132 y 55 \n • Ley 1257 de 2008 \n • Directiva 001 de 2021 – violencia intrafamiliar \n • Directiva 004 de 2023 - feminicidio \n",Oferta:""},
{Delito:"VIF",Factor:"Salud mental y gestión emocional",Institucion:"Ministerio de Educación Nacional",Normativas:"• Ley 115/1994 \n • Ley1620/2023 – Sistema Nacional: Convivencia escolar \n • Decreto 1965/2013 \n • Decreto 459/2024 \n • Ley 2083/2024 \n • Ley 1616/2015 – promoción de salud mental \n",Oferta:"1. Formación Integral con acciones para el fortalecimiento de salud mental, gestión emocional y EVS (estilos de vida saludable) \n 2. Asistencias técnicas y demandas \n 3. Proyecto educación CRESE \n 4. Protocolos de prevención de consumo de SPA y conducta suicida. \n 5. Estrategias emociones conexión vital \n"},
{Delito:"VIF",Factor:"Salud mental y gestión emocional",Institucion:"Ministerio de Educación Nacional",Normativas:"• Ley 115 1994 – \n • Ley de educación Ley 1620  \n • Convivencia escolar Dec. 1965 Dec reglamentario  \n • La Ley 1620 de 2013 - establece el Sistema Nacional de Convivencia Escolar.  \n • El Decreto 459 de 2024 y la Ley 2083 de 2024 que refuerzan el papel de las familias en los procesos formativos y la corresponsabilidad en la prevención de riesgos.  \n • La ley 1616 de 2013 que regula la promoción de la salud mental; el Decreto 120 de 2010, sobre prevención del consumo de alcohol.  \n • El Plan Nacional de Desarrollo 2022 – 2026 que plantea como prioridad la transformación de la jornada escolar para incorporar componentes de bienestar, salud, arte, cultura, ciencia y participación articulados a estrategias como CRESE.",Oferta:"1. Formación Integral con acciones para el fortalecimiento de la salud mental y la gestión emocional en el sistema educativo  \n 2. Asistencias Técnicas a ETC  \n 3. Proyecto de Educación CRESE - Educación para la Ciudadanía, la reconciliación, socioemocional, antirracista y para el cambio climático. \n  4. En el marco del Plan Nacional de Desarrollo 2022–2026, el Ministerio de Educación Nacional promueve una formación integral con acciones para el fortalecimiento de la salud mental y la gestión emocional en el sistema educativo, articuladas con el enfoque intersectorial de promoción de estilos de vida saludables (EVS), prevención del consumo de SPA y la generación de entornos escolares protectores.  \n 5. Principales estrategias y recursos:  \n 6. Protocolos de prevención del consumo de SPA y de la conducta suicida: orientaciones pedagógicas para prevenir afectaciones en salud mental desde el ámbito educativo, con enfoque preventivo y educativo.  \n 7. Estrategia de Estilos de Vida Saludables (EVS): fortalece capacidades en alimentación saludable, actividad física y prácticas de higiene como lavado de manos, higiene menstrual, gestión de excretas y saneamiento básico.  \n 8. Estrategia 'Emociones, conexión vital': formación para el fortalecimiento de competencias socioemocionales, resiliencia e inclusión de niñas, niños y adolescentes.  \n 9. Programa 'Paso a paso' y 'Emociones para la vida': herramientas para docentes, familias y cuidadores para fortalecer habilidades socioemocionales desde la primera infancia hasta secundaria."},
{Delito:"Homicidio",Factor:"Cultura de la ilegalidad",Institucion:"Policía Nacional",Normativas:"• Constitución Política \n • Ley 599 de 2000 \n • Ley 1801 de 2016 \n • Ley 906 de 2004 \n • Ley de transparencia \n • Estatuto anticorrupción",Oferta:"•Área anticorrupción \n •Modelo Nacional de Vigilancia Comunitaria por Cuadrantes \n •Inteligencia policial"},
{Delito:"Homicidio",Factor:"Cultura de la ilegalidad",Institucion:"ICBF",Normativas:"• Decreto 1649 de 2023 por el cual se crea el Programa Nacional Jóvenes en Paz \n • Ley 1098 de 2006 \n • Ley 1751 de 2015 \n •  Ley 1616 de 2013 \n • Conpes 4040",Oferta:"• Articulación con programa 'Jóvenes en paz', liderado por MinIgualdad, en el componente de salud mental y buenos vivires, facilitando un proceso psicosocial \n • Fortalecimiento de procesos pedagógicos y restaurativos en las modalidades de atención para la ejecución y cumplimiento de medidas y sanciones en el marco del SRPA \n • Prevención terciaria"},
{Delito:"Homicidio",Factor:"Vulnerabilidades socioeconómicas y digitales de NNA",Institucion:"Ministerio de Justicia y del Derecho",Normativas:"• Decreto 1069 de 2015 \n •  Ley 1098 de 2006",Oferta:"• Política Nacional de Prevención del Delito \n • Política Nacional de Justicia Juvenil Restaurativa \n • Comités Departamentales de SRPA \n • CIPRUNA: Comisión Intersectorial de Prevención del Reclutamiento, Uso, Utilización y Violencia Sexual en contra Niños, Niñas y Adolescentes"},
{Delito:"Homicidio",Factor:"Vulnerabilidades socioeconómicas y digitales de NNA",Institucion:"Ministerio de Salud",Normativas:"• Ley 1146 de 2007 que le otorga la presidencia del Comité Interinstitucional Consultivo para la prevención de la violencia sexual y atención integral de los NNA y víctimas de abuso sexual \n • Decreto 1710 de 1020 Secretaría técnicas del Mecanismo Articulador para el Abordaje Integral de las Violencias por Razones de Sexo y Género",Oferta:"• Compromiso país"},
{Delito:"Homicidio",Factor:"Vulnerabilidades socioeconómicas y digitales de NNA",Institucion:"Ministerio del Deporte",Normativas:"• Constitución Política Art. 52 \n • Ley 181 de 1995 Ley del deporte \n • CONPES 440 Desarrollo integral de la juventud \n • Ley 2236 de 2022 Juegos intercolegiados nacionales",Oferta:"Aprovechamiento del tiempo libre  \n •Fortalecimiento del deporte y la educación física en NNA en estapa escolar mediante la jornada deportiva escolar complementaria y juegos intercolegiados \n •Fomento de la práctica deportiva, recreativa y de actividad física mediante el programa campamentos juveniles"},
{Delito:"Homicidio",Factor:"Vulnerabilidades socioeconómicas y digitales de NNA",Institucion:"Policía Nacional",Normativas:"• Constitución Política \n • Ley 1098 de 2006 \n • Ley 599 de 2000 \n • Ley 906 de 2004",Oferta:"• DIJIN \n • Dirección de protección \n • Inteligencia policial"},
{Delito:"Homicidio",Factor:"Vulnerabilidades socioeconómicas y digitales de NNA",Institucion:"ICBF",Normativas:"• Ley 1098 de 2006 \n • Plan Nacional de Desarrollo",Oferta:"Dirección de Infancia y Dirección de Adolescencia y Juventud \n • Estrategia atrapasueños, en la modalidad de atención, con el componente de promoción y disfrute de derechos y prevención de vulneraciones y el componente promoción de la salud mental y el buen vivir \n • Casas atrapasueños: centros de atención especializada \n Dirección de protección y subdirección de SRPA \n • Línea de referenciación para el acceso a servicios y oportunidades sociales. Convenio con Acción Interna para fortalecimiento de la empleabilidad, el emprendimiento y la inclusión social \n • Línea sociocomunitaria"},
{Delito:"Homicidio",Factor:"Vulnerabilidades socioeconómicas y digitales de NNA",Institucion:"Fiscalía General de la Nación",Normativas:"• Ley 2205 de 2025",Oferta:"• Unidad especializada de delitos priorizados cometidos contra NNA"},
{Delito:"Homicidio",Factor:"Déficit del sistema de justicia (barreras de acceso a justicia, investigación, judicialización y corrupción)",Institucion:"Policía Nacional",Normativas:"• Constitución Política \n • Ley 599 de 2000 \n • Ley 906 de 2004 \n • Ley de transparencia \n • Estatuto anticorrupción",Oferta:"• Investigación criminal \n • Grupo anticorrupción \n • Línea 157 anticorrupción \n • Inteligencia policial"},
{Delito:"Homicidio",Factor:"Déficit del sistema de justicia (barreras de acceso a justicia, investigación, judicialización y corrupción)",Institucion:"Fiscalía General de la Nación",Normativas:"• Constitución Política Art. 250 ejercicio de la acción penal \n • Ley 599 del 2000 Código penal \n • Ley 906 de 2004 Código procedimiento penal",Oferta:"Instrumento de planificación 'Desarrollo Estratégico 2024-2028' - 5 pilares \n 1. Priorizar investigación con enfoque territorial: acción penal con fundamento en las características particulares de cada territorio \n 2. Fortalecer el análisis criminal con apoyo en la tecnología: mejora en la recolección y acceso a la información detallada; implementación de tecnologías y herramientas avanzadas (big data, IA) para analizar tendencias y patrones, rastrear rutas financieras. \n 3. Fortalecer rutas especiales de atención a las víctimas con enfoque diferencial e intersección, con canales de atención y articulación institucional \n 4. Dinamizar mecanismos de terminación anticipada de optimizar la actuación en juicio \n 5. Diseñar indicadores de gestión compatibles con las metas institucionales: tener un sistema de indicadores de resultados, desempeño e impacto"},
{Delito:"Homicidio",Factor:"Déficit del sistema de justicia (barreras de acceso a justicia, investigación, judicialización y corrupción)",Institucion:"Medicina Legal",Normativas:"• Ley 938 de 2004 \n • Ley 9 de 1979 \n • Decreto 786 de 1990 \n • Ley 23 de 1981 \n • Decreto 1171 de 1997 \n • Decreto 780 de 2016",Oferta:"• Valoraciones medicolegales en lesiones fatales como aporte técnico científico a la justicia en el esclarecimiento de la verdad frente a la causa de muertes violentas \n • Entrega información y datos estadísticos derivados del quehacer forense que permite visibilizar las lesiones de causa externa (fatales) para la toma de decisiones en materia de politica pública \n • Publicación Forensis datos para la vida que brinda un análisis de los contextos de violencia y lesiones fatales que son de conocimiento del sistema medicolegal \n • Mesas interinstitucionales para el abordaje de casos específicos y contrastación de datos estadísticos para identificar diferencias por institución. A nivel nacional se hacen las mesas con Policía y Fiscalía y a nivel local se tienen mesas en el Valle, Medellin y Barranquilla"},
{Delito:"Homicidio",Factor:"Estigmatización liderazgos sociales",Institucion:"Policía Nacional",Normativas:"• Tratados Internacionales \n • Constitución y Ley \n • Ley 599 de 2000 \n • Ley 906 de 2004 \n • Decretos, instructivos, reglamentos",Oferta:"• DIJIN- Cuerpodiitc: investigación judicial y criminal – cuerpo elite realiza investigaciones contra afectaciones a lideres sociales \n • Direccion de Protección (esquemas de protección, estudios de seguridad) \n • Articulación con Fiscalía General de la Nación"},
{Delito:"Homicidio",Factor:"Estigmatización liderazgos sociales",Institucion:"Ministerio del Interior",Normativas:"• Decreto 2124 de 2017 \n • Decreto 660 de 2018 \n • Decreto 2262 \n • Decreto 1066 de 2015",Oferta:" Atención a las alertas tempranas donde se evidencian riesgos a líderes y defensores de derechos humanos"},
{Delito:"Homicidio",Factor:"Estigmatización liderazgos sociales",Institucion:"Ministerio de Justicia y del Derecho",Normativas:"• Decreto 1069 de 2015 \n •  SU- 546 de 2023 \n • Acuerdo Fianl \n • Decreto 154 de 2017 \n •  Decreto 665 de 2024",Oferta:"• Política Pública Integral del Ministerio de Justicia y del Derecho \n • Garantías a la labor de la Defensoría de DDHH \n • Plan Integral SU-546/23: Programa integral de justicia efectiva para líderes y defensores, el programa también hace parte de la política pública. En conjunto con Policía, cuerpo élite, Fiscalía.  \n • Ambos instrumentos responden a la prevención, rpotección, garantías de no repetición y acceso a la justicia efectiva como respuesta a las agresiones contra líderes sociales y defensores. \n • Política de desmantelamiento como política interinstitucional \n • Se está formulando la política pública para garantía de defensa de derechos humanos (prevención, protección, no repetición y acceso)"},
{Delito:"Homicidio",Factor:"Estigmatización liderazgos sociales",Institucion:"ICBF",Normativas:"• Ley 1098 de 2006 \n • Conpes 4040 \n",Oferta:" Ejercicio de ciudadanía y construcción de paz  \n • En el marco de los procesos de atención de los adolescentes y jovenes vinculados al SRPA \n • Lineamiento linea socio-comunitaria en el marco de los procesos de atención de los adolescentes y jovenes vinculados al SRPA \n •  Fortalecimiento de procesos de participación en escenarios sociales, comunitarios y políticos"},
{Delito:"Homicidio",Factor:"Violencia  Doméstica y VBG",Institucion:"Policía Nacional",Normativas:"• Constitución Política \n • ley 1801 de 2016 \n • Ley 599 de 2000 \n • Ley 906 de 2004 \n • Demás decretos, reglamentos e instructivos",Oferta:"• Patrulla purpura \n • Modelo Nacional de vigilancia por cuadrantes a través de las zonas de atención y microterritorios \n"},
{Delito:"Homicidio",Factor:"Violencia  Doméstica y VBG",Institucion:"Ministerio de Salud",Normativas:"• Resolución 459 de 2012 que crea el protocolo de atención a víctimas de violencia sexual (no importa el contexto ni seco, etc) \n • Ley 1257 de 2008 art. 13 \n • Decreto 0075 de 2024 disposiciones relacionadas con la atención integral en salud a las mujeres víctimas \n • Ley 1257 de 2008 Referente a casas de refugio buscando atender a la mujer sus hijos evitando feminicidios \n • Decreto 1710 de 2020 que conforma el mecanismo articulador para el abordaje integral de las violencias por razones de sexo y género de las mujers y NNA \n • El ministerio hace parte de la secretaria técnica \n • Los departamentos ya cuentan con los cómites del mecanismo articulador \n • Inrsectorialidad con Min Igualdad, ICBF, Min Justicia, Fiscalía y las secretarías de los departamentos",Oferta:"• Apoyo a la creación de mecanismos articuladores \n • Asistencias técnicas a territorios \n • Asignación de recursos a las E.T. de acuerdo a criterios técnicos del Decreto 0075 de 2024 \n • Acciones entorno a la CIPRUNNA"},
{Delito:"Homicidio",Factor:"Violencia  Doméstica y VBG",Institucion:"Ministerio del Interior",Normativas:"• Ley 1801 de 2016 \n • ley 418 de 1997 \n • Decreto 2124 de 2017 \n • Decreto 1066 de 2015",Oferta:"• Socialización en los territorios de mayor indice de comportamientos contratios a la convivencia en el CNSCC \n • Construcción de la Política Pública de SCC \n • Creación del grupo de genero en prevención de violencias de genero \n • Asistencias técnicas a los PISCC-Diseño de campañas de prevención \n • Atención alertas tempranas del CIPRAT"},
{Delito:"Homicidio",Factor:"Violencia  Doméstica y VBG",Institucion:"Ministerio de Justicia y del Derecho",Normativas:"• Decreto 1069 de 2015 \n • Ley 2220 de 2022",Oferta:"• Viceministerio para resolución de conflictos, casas de justicia, conciliadores en equidad \n • Elaboración de estudio y segumiento del fenómeno del feminicidio y otros delitos asociados a VBG \n • Módulos de formación para incorporar el enfoque de género en la investigación y judicialización de VBG \n • Guia para conocer y reconocer violencias contra mujeres y la población LGBT en la ruralidad \n • Estrategia entornos protectores \n • Estrategia fortalecimiento para liderazgos sociales \n • Estrategia red justas \n • Mecanismos de resolución de conflictos"},
{Delito:"Homicidio",Factor:"Violencia  Doméstica y VBG",Institucion:"Ministerio del Deporte",Normativas:"• Art 52 de la constitución \n • ley 1976 de 2019 \n • ley 181 de 1995 \n •  CONPES 3992- Salud Mental",Oferta:"Programas Sociales con enfoque de Derechos y valores  \n Fomentos de la practica deportiva, recreativa y de la actividad física en Colombia \n • Programa deportes + (DSC) \n • Programa habitos y estilo de vida saludables \n • Plan Nacional de Recreación"},
{Delito:"Homicidio",Factor:"Violencia  Doméstica y VBG",Institucion:"ICBF",Normativas:"• Ley 1098 de 2006 \n • Ley 1257 de 2008",Oferta:" • Estrategia atrapasueños \n • Transversalización del enfoque de género \n • Prevención de VBG \n • Promoción de masculinidades no hegemónicas"},
{Delito:"Homicidio",Factor:"Acceso a armas de fuego",Institucion:"Policía Nacional",Normativas:"• Tratados Internacionales \n • Constitución Nacional \n • Ley 1801 de 2016 \n • Ley 599 de 2000 \n • Ley 906 de 2004 \n • Decretos, instructivos, reglamentos",Oferta:"• Modelo Nacional de vigilancia comunitaria por cuadrantes \n • Investigación criminal en: 1) Rastreo de armas - SUCOBA y 2) Investigación de actores y estructuras \n • Inteligencia policial"},
{Delito:"Homicidio",Factor:"Acceso a armas de fuego",Institucion:"Ministerio de Defensa",Normativas:"• Decreto ley 2535 de 1993 Art 32 \n • Decreto ley 2535 de 1993 Art 8 Parágrafo 2",Oferta:"•  Programa nacional de control de armas \n • Huella balística decreto \n • Reglamento de armas menos letales \n • Permiso de porte de armas y dispositivos menos letales"},
{Delito:"Homicidio",Factor:"Disputas Criminales y control de rentas ilícitas",Institucion:"Policía Nacional",Normativas:"• Tratados Internacionales \n • Constitución Nacional \n • Ley 599 de 2000 \n • Ley 906 de 2004 \n • Decretos, instructivos, reglamentos",Oferta:"• Direcciones Operativas (DIJIN, DIPOC, DIPRO) - área de contexto criminal para focalizar delito \n • Capacidades humanas, logísticas y tecnológicas \n • Cooperación internacional (INTERPOL, DEA, ICE, FBI) \n • Articulación con Fiscalía General de la Nación y FFMM \n • Vinculación de autoridades político administrativas"},
{Delito:"Homicidio",Factor:"Disputas Criminales y control de rentas ilícitas",Institucion:"INPEC",Normativas:"• Ley 65 de 1993 \n • Ley 17 de 2009 \n • Resolución 6345 de 2016",Oferta:"• Control penitenciario:  evitar rentas ilícitas adentro que dinamizan la convivencia y seguridad, neutralizar el ingreso de sustancias estupefacientes a los ERONES \n • Canales de denuncia ante casos de corrupción. Unidad investigativa para minimizar los focos de corrupción"},
{Delito:"Homicidio",Factor:"Disputas Criminales y control de rentas ilícitas",Institucion:"Ministerio de Defensa",Normativas:"• Política de Seguridad, Defensa y Convivencia ciudadana \n • Estrategia nacional contra el homicidio intencional \n • Decreto 1874 de 2021 art 10 \n",Oferta:"• Estrategia nacional contra el crimen organizado (en construcción) \n • Política sectorial de seguridad y defensa \n • Estrategia nacional contra el homicidio intencional"},
{Delito:"Homicidio",Factor:"Disputas Criminales y control de rentas ilícitas",Institucion:"Defensoría del Pueblo",Normativas:"• Decreto 2124 de 2017",Oferta:"• Alertas tempranas con sus recomendaciones \n • Identificar factores que generan situaciones de riesgo  \n • Recomendaciones para movilizar la oferta institucional para mitigar el escenario de riesgo: 1. disuasión del contexto de amenaza 2. medidas de protección urgente 3. acceso a la justicia 4. superación de factores de vulnerabilidad"},
{Delito:"Homicidio",Factor:"Disputas Criminales y control de rentas ilícitas",Institucion:"DNP",Normativas:"",Oferta:"•Asistencia y acompañamiento técnico al proceso de implementación y evaluación de los PISCC \n •Guía PISCC \n • SISPT  \n • Observatorio Sistema de Ciudades"},
{Delito:"Homicidio",Factor:"Reincidencia Criminal (antecedentes de conducta)",Institucion:"Ministerio de Justicia y del Derecho",Normativas:"• Decreto 1069 de 2015 \n • Ley 65 de 1993 \n • T-388 de 2013 \n • T-762 de 2015 \n • SU-122 de 2021",Oferta:"• Política Criminal \n • Formulación CONPES sistema penitenciario y carcelario: fortalecer el sistema de rehabilitación, mejorar la oferta posegreso (subsidio de transporte, oferta educativa, salud, política integral de posegreso), hechos ilícitos que se cometen desde establecimientos"},
{Delito:"Homicidio",Factor:"Reincidencia Criminal (antecedentes de conducta)",Institucion:"INPEC",Normativas:"• ley 65 de 1993 \n • Ley 1709 de 2014 \n • Resolución 001753 de 2024",Oferta:"• Tratamiento Penitenciario: estrategias de ocupación para los PPL, enfocado en tres pilares: trabajo, estudio y enseñanza"},
{Delito:"Homicidio",Factor:"Reincidencia Criminal (antecedentes de conducta)",Institucion:"ICBF",Normativas:"• Ley1951 de 2015 \n • Ley 1098 de 2006  \n • Ley 1616 de 2013",Oferta:"En la modalidad privativa del sistema de responsabilidad penal adolescente y la dirección de protección: \n • Articulacion con Atrapasueños con casas atrapasueños en Turbaco, Popayán y Pasto \n • Acompañamiento psicosocial y activación de rutas \n • Relacionado con consumo de SPA"},

    ];
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

// Función para cargar opciones en los selectores
function cargarOpciones(dataToProcess) {
    const delitos = [...new Set(dataToProcess.map(item => item.Delito))];
    const delitoSelect = $('#delito');
    delitoSelect.empty().append('<option value="">Seleccione un Delito</option>');
    delitos.sort().forEach(delito => {
        delitoSelect.append(`<option value="${delito}">${delito}</option>`);
    });
}

// Función para filtrar factores de riesgo basados en el delito seleccionado
function filtrarFactores(delitoSeleccionado, dataToProcess) {
    const factorSelect = $('#factor');
    factorSelect.empty().append('<option value="">Seleccione un Factor de Riesgo</option>');

    let factores = [];
    if (delitoSeleccionado) {
        factores = [...new Set(dataToProcess
            .filter(item => item.Delito === delitoSeleccionado)
            .map(item => item.Factor)
        )];
    } else {
        factores = [...new Set(dataToProcess.map(item => item.Factor))];
    }
    factores.sort().forEach(factor => {
        factorSelect.append(`<option value="${factor}">${factor}</option>`);
    });
}

// Función para filtrar instituciones basadas en el factor de riesgo seleccionado
function filtrarInstituciones(factorSeleccionado, dataToProcess) {
    const institucionSelect = $('#institucion');
    institucionSelect.empty().append('<option value="">Seleccione una Institución</option>');

    let instituciones = [];
    if (factorSeleccionado) {
        instituciones = [...new Set(dataToProcess
            .filter(item => item.Factor === factorSeleccionado)
            .map(item => item.Institucion)
        )];
    } else {
        instituciones = [...new Set(dataToProcess.map(item => item.Institucion))];
    }
    instituciones.sort().forEach(institucion => {
        institucionSelect.append(`<option value="${institucion}">${institucion}</option>`);
    });
}

// Función para actualizar la tabla y los badges de filtros activos
function actualizarTablaYFiltros() {
    const delito = $('#delito').val();
    const factor = $('#factor').val();
    const institucion = $('#institucion').val();

    // Resetear DataTables para aplicar nuevos filtros desde el conjunto original
    if (tabla) {
        tabla.destroy(); // Destruye la instancia actual de DataTables
    }

    // Filtra la data original con los selectores
    let filteredData = originalData.filter(d => {
        return (delito === '' || d.Delito === delito) &&
               (factor === '' || d.Factor === factor) &&
               (institucion === '' || d.Institucion === institucion);
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
            d.Delito,
            `<div class='oferta-format'>${d.Factor.replace(/\n/g, '<br>')}</div>`,
            d.Institucion,
            `<div class='oferta-format oferta-truncada' data-fulltext="${d.Normativas}">${d.Normativas.substring(0, 850).replace(/\n/g, '<br>')} </div>`,
            `<div class='oferta-format oferta-truncada' data-fulltext="${d.Oferta}">${d.Oferta.substring(0, 450).replace(/\n/g, '<br>')} </div>`
        ])
    });

    // Sincronizar el campo de búsqueda global con la búsqueda de DataTables
    $('#searchBox').off('keyup').on('keyup', function() {
        tabla.search(this.value).draw();
    });

    actualizarFiltrosActivos(delito, factor, institucion);
}

// Función para actualizar los badges de filtros activos
function actualizarFiltrosActivos(delito, factor, institucion) {
    const badgesContainer = $('#active-filters-badges');
    badgesContainer.empty();

    if (delito) {
        badgesContainer.append(`<span class="badge bg-primary me-2">Delito: ${delito}</span>`);
    }
    if (factor) {
        badgesContainer.append(`<span class="badge bg-info text-dark me-2">Factor: ${factor}</span>`);
    }
    if (institucion) {
        badgesContainer.append(`<span class="badge bg-success me-2">Institución: ${institucion}</span>`);
    }
}

// Bloque principal de ejecución cuando el DOM está listo
$(document).ready(async function () {
    originalData = await fetchData(); // Cargar la data al inicio
  


    if (originalData.length > 0) {
        cargarOpciones(originalData);
        filtrarFactores('', originalData);
        filtrarInstituciones('', originalData);
        actualizarTablaYFiltros(); // Inicializar la tabla y filtros
    } else {
        $('#tabla tbody').html('<tr><td colspan="5" class="text-center">No se pudieron cargar los datos o no hay datos disponibles.</td></tr>');
    }

    // Eventos de cambio para los selectores de filtro
    $('#delito').on('change', function () {
        const v = $(this).val();
        filtrarFactores(v, originalData);
        filtrarInstituciones('', originalData); // Resetear instituciones si cambia delito
        $('#factor').val(''); // Resetear factor
        $('#institucion').val(''); // Resetear institucion
        actualizarTablaYFiltros();
    });

    $('#factor').on('change', function () {
        const v = $(this).val();
        filtrarInstituciones(v, originalData);
        $('#institucion').val(''); // Resetear institucion si cambia factor
        actualizarTablaYFiltros();
    });

    $('#institucion').on('change', function () {
        actualizarTablaYFiltros();
    });

    // Evento para el botón de Reiniciar
    $('#reset').on('click', function () {
        $('#delito').val('');
        $('#factor').val('');
        $('#institucion').val('');
        cargarOpciones(originalData); // Recargar opciones principales
        filtrarFactores('', originalData); // Recargar factores
        filtrarInstituciones('', originalData); // Recargar instituciones
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