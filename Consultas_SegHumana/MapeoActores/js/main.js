let tabla; // Variable global para la Institucion de DataTables
let originalData = []; // Para almacenar la data original cargada

// Función para cargar los datos (simula una API)
async function fetchData() {
    // En un entorno real, aquí harías una llamada a una API:
    // try {
    //     const response = await fetch('/api/oferta-Institucional');
    //     if (!response.ok) throw new Error('Network response was not ok.');
    //     return await response.json();
    // } catch (error) {
    //     console.error("Error fetching data:", error);
    //     return [];
    // }

    // Datos hardcodeados para demostración (de tu HTML original)
    return [{"Institucion":"Ministerio de Defensa Nacional","Direccion":"Dirección de Seguridad Ciudadana","Nivel":"Nacional","Rol":"Responsable","Delito":"Homicidio","Factor":"N\/A","Competencia":"Decreto 1874 de 2021 Art. 10 "},{"Institucion":"Ministerio de Defensa Nacional","Direccion":"Dirección de Seguridad Pública","Nivel":"Nacional","Rol":"Responsable","Delito":"Homicidio","Factor":"N\/A","Competencia":"Decreto 1874 de 2021 Art. 12"},{"Institucion":"Policía Nacional de Colombia ","Direccion":"Dirección de Investigación Criminal e Interpol","Nivel":"Nacional","Rol":"Responsable","Delito":"Homicidio","Factor":"N\/A","Competencia":"Decreto 113 de 2022\nArt. 11"},{"Institucion":"Policía Nacional de Colombia ","Direccion":"Dirección de Inteligencia Policial","Nivel":"Nacional","Rol":"Responsable","Delito":"Homicidio","Factor":"N\/A","Competencia":"Decreto 113 de 2022\nArt. 12"},{"Institucion":"Policía Nacional de Colombia ","Direccion":"Dirección de Protección y Servicios Especiales","Nivel":"Nacional","Rol":"Responsable","Delito":"Homicidio","Factor":"N\/A","Competencia":"Decreto 113 de 2022\nArt. 16"},{"Institucion":"Policía Nacional de Colombia ","Direccion":"Departamentos de Policía","Nivel":"Departamental","Rol":"Responsable","Delito":"Homicidio","Factor":"N\/A","Competencia":"Decreto 113 de 2022\nArt. 10"},{"Institucion":"Policía Nacional de Colombia ","Direccion":"Metropolitanas de Policía","Nivel":"Municipal ","Rol":"Responsable","Delito":"Homicidio","Factor":"N\/A","Competencia":"Decreto 113 de 2022\nArt. 10"},{"Institucion":"Ministerio del Interior","Direccion":"Dirección de Seguridad, Convivencia Ciudadana y Gobierno","Nivel":"Nacional","Rol":"Responsable","Delito":"Homicidio","Factor":"N\/A","Competencia":"Decreto 1152 de 2022\nArt. 19"},{"Institucion":"Ministerio de Justicia y del Derecho","Direccion":"Dirección de Métodos Alternativos y de Solución de Conflictos","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Intolerancia social y afectaciones a la convivencia","Competencia":"Decreto 1427 de 2017\nArt. 16"},{"Institucion":"Ministerio de Justicia y del Derecho","Direccion":"Dirección de Política Criminal y Penitenciaria","Nivel":"Nacional","Rol":"Responsable","Delito":"Homicidio","Factor":"N\/A","Competencia":"Decreto 1427 de 2017\nArt. 21"},{"Institucion":"Fiscalía General de la Nación","Direccion":"Dirección de Políticas y Estrategia","Nivel":"Nacional","Rol":"Responsable","Delito":"Homicidio","Factor":"N\/A","Competencia":"Decreto 016 de 2014\nArt. 6"},{"Institucion":"Fiscalía General de la Nación","Direccion":"Dirección del Cuerpo Técnico de Investigación","Nivel":"Nacional","Rol":"Responsable","Delito":"Homicidio","Factor":"N\/A","Competencia":"Decreto 016 de 2014\nArt. 14A"},{"Institucion":"Fiscalía General de la Nación","Direccion":"Dirección de Apoyo a la Investigación y Análisis de Seguridad Ciudadana","Nivel":"Nacional","Rol":"Responsable","Delito":"Homicidio","Factor":"N\/A","Competencia":"Decreto 016 de 2014\nArt. 35A"},{"Institucion":"Fiscalía General de la Nación","Direccion":"Dirección Especializada Contra las Organizaciones Criminales","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Presencia y operatividad de grupos delictivos","Competencia":"Decreto 016 de 2014\nArt. 20"},{"Institucion":"Fiscalía General de la Nación","Direccion":"Dirección de Apoyo a la Investigación y Análisis Contra la  Criminalidad Organizada","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Presencia y operatividad de grupos delictivos","Competencia":"Decreto 016 de 2014\nArt. 17A"},{"Institucion":"Fiscalía General de la Nación","Direccion":"Direcciones Seccionales","Nivel":"Departamental","Rol":"Responsable","Delito":"Homicidio","Factor":"N\/A","Competencia":"Decreto 016 de 2014\nArt. 31"},{"Institucion":"Fiscalía General de la Nación","Direccion":"Direcciones Seccionales","Nivel":"Municipal ","Rol":"Responsable","Delito":"Homicidio","Factor":"N\/A","Competencia":"Decreto 016 de 2014\nArt. 31"},{"Institucion":"Departamento Nacional de Planeación","Direccion":"Dirección de Gestión y Promoción del Sistema General de Regalías","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Limitada capacidad financiera institucional","Competencia":"Decreto 1893 de 2021\nArt. 67"},{"Institucion":"Comando General de las Fuerzas Militares de Colombia","Direccion":"Departamento de control comercio de armas, municiones y explosivos","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Fácil acceso a armas de fuego","Competencia":"Decreto 1070 de 2015"},{"Institucion":"Migración Colombia","Direccion":"Subdirección de Control Migratorio","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Antecedentes de conducta y reincidencia","Competencia":"Decreto 4062 de 2011\nArt. 16"},{"Institucion":"Procuraduría General de la Nación","Direccion":"Procuraduría Delegada Preventiva y de Control de Gestión para la Gestión y la Gobernanza Territorial","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Corrupción","Competencia":"Ley 262 de 2000\nArt. 24"},{"Institucion":"Ministerio de Salud y Protección Social","Direccion":"Dirección de Promoción y Prevención","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Consumo problemático de drogas y alcohol","Competencia":"Decreto 4107 de 2011"},{"Institucion":"Ministerio de Salud y Protección Social","Direccion":"Dirección de Promoción y Prevención","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Salud mental y gestión emocional","Competencia":"Decreto 4107 de 2011"},{"Institucion":"Entidades Territoriales","Direccion":"Comisarías de Familia","Nivel":"Municipal ","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Violencias en el contexto familiar","Competencia":"Ley 2126 de 2021"},{"Institucion":"Inspecciones rurales, urbanas y corregidurías","Direccion":"Inspecciones rurales, urbanas y corregidurías","Nivel":"Municipal ","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Intolerancia social y afectaciones a la convivencia","Competencia":"Ley 1801 de 2016\nArt. 206"},{"Institucion":"Ministerio Público","Direccion":"Personería","Nivel":"Municipal ","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Corrupción","Competencia":"Constitución Política de Colombia\nArt. 118; 277"},{"Institucion":"Entidades Territoriales","Direccion":"Gobernadores ","Nivel":"Departamental","Rol":"Responsable","Delito":"Homicidio","Factor":"N\/A","Competencia":"Ley 1801 de 2016\nArt. 201\nLey 418 de 1997\nArt. 105\nDecreto 1222 de 1986\nArt. 7"},{"Institucion":"Entidades Territoriales","Direccion":"Alcaldes ","Nivel":"Municipal ","Rol":"Responsable","Delito":"Homicidio","Factor":"N\/A","Competencia":"Ley 1801 de 2016\nArt. 205 \nLey 1551 de 2012\nArt. 29, numeral b"},{"Institucion":"Entidades Territoriales","Direccion":"Secretarías de Gobierno \/ Interior \/ Seguridad","Nivel":"Departamental","Rol":"Responsable","Delito":"Homicidio","Factor":"N\/A","Competencia":"Estructura Orgánica Departamental "},{"Institucion":"Entidades Territoriales","Direccion":"Secretarías de Gobierno \/ Interior \/ Seguridad","Nivel":"Municipal ","Rol":"Responsable","Delito":"Homicidio","Factor":"N\/A","Competencia":"Estructura Orgánica Municipal"},{"Institucion":"Entidades Territoriales","Direccion":"Secretarías de Salud","Nivel":"Departamental","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Consumo problemático de drogas y alcohol","Competencia":"Estructura Orgánica Departamental "},{"Institucion":"Entidades Territoriales","Direccion":"Secretarías de Salud","Nivel":"Municipal ","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Consumo problemático de drogas y alcohol","Competencia":"Estructura Orgánica Municipal"},{"Institucion":"Entidades Territoriales","Direccion":"Secretarías de Educación","Nivel":"Departamental","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Vinculación o instrumentalización de menores de edad","Competencia":"Estructura Orgánica Departamental "},{"Institucion":"Entidades Territoriales","Direccion":"Secretarías de Educación","Nivel":"Municipal ","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Vinculación o instrumentalización de menores de edad","Competencia":"Estructura Orgánica Municipal"},{"Institucion":"Ciudadanía","Direccion":"Ciudadanía","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Cultura de ilegalidad","Competencia":"Ley Estatutaria 1757 de 2015"},{"Institucion":"Academia","Direccion":"Academia","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Limitada capacidad técnica institucional","Competencia":"Ley Estatutaria 1757 de 2015"},{"Institucion":"Academia","Direccion":"Academia","Nivel":"Departamental","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Limitada capacidad técnica institucional","Competencia":"Ley Estatutaria 1757 de 2015"},{"Institucion":"Academia","Direccion":"Academia","Nivel":"Municipal ","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Limitada capacidad técnica institucional","Competencia":"Ley Estatutaria 1757 de 2015"},{"Institucion":"Ministerio de Defensa Nacional","Direccion":"Viceministerio para las Políticas de Defensa y Seguridad","Nivel":"Nacional","Rol":"Responsable","Delito":"Extorsión","Factor":"N\/A","Competencia":"Decreto 1874 de 2021 Art. 8"},{"Institucion":"Policía Nacional de Colombia ","Direccion":"Dirección de Antisecuestro y Antiextorsión","Nivel":"Nacional","Rol":"Responsable","Delito":"Extorsión","Factor":"N\/A","Competencia":"Decreto 113 de 2022\nArt. 17"},{"Institucion":"Policía Nacional de Colombia ","Direccion":"Grupos  de Acción Unificada por la Libertad Personal","Nivel":"Nacional","Rol":"Responsable","Delito":"Extorsión","Factor":"N\/A","Competencia":"Ley 282 de 1996\nArts. 4; 5"},{"Institucion":"Policía Nacional de Colombia ","Direccion":"Escuela Antisecuestro y Antiextorsión (ESANT)","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Limitada capacidad técnica institucional","Competencia":"Resolución 0263 de 2023"},{"Institucion":"Policía Nacional de Colombia ","Direccion":"Departamentos de Policía","Nivel":"Departamental","Rol":"Responsable","Delito":"Extorsión","Factor":"N\/A","Competencia":"Decreto 2203 de 1993\nArt. 56"},{"Institucion":"Comando General de las Fuerzas Militares de Colombia","Direccion":"Comando de Gaula Militares (COGAM)","Nivel":"Nacional","Rol":"Responsable","Delito":"Extorsión","Factor":"N\/A","Competencia":"Ley 282 de 1996\nArts. 4 y 5\n"},{"Institucion":"Policía Nacional de Colombia ","Direccion":"CIBERGAULA","Nivel":"Nacional","Rol":"Responsable","Delito":"Extorsión","Factor":"N\/A","Competencia":"Resolución 2040 de 2015"},{"Institucion":"Ministerio del Interior","Direccion":"Dirección de Seguridad, Convivencia Ciudadana y Gobierno","Nivel":"Nacional","Rol":"Responsable","Delito":"Extorsión","Factor":"N\/A","Competencia":"Decreto 1152 de 2022\nArt. 19"},{"Institucion":"Fiscalía General de la Nación","Direccion":"Dirección del Cuerpo Técnico de Investigación","Nivel":"Nacional","Rol":"Responsable","Delito":"Extorsión","Factor":"N\/A","Competencia":"Decreto 016 de 2014\nArt. 14A"},{"Institucion":"Fiscalía General de la Nación ","Direccion":"Dirección de Apoyo a la Investigación y Análisis Contra la  Criminalidad Organizada","Nivel":"Nacional","Rol":"Responsable","Delito":"Extorsión","Factor":"N\/A","Competencia":"Decreto 898 de 2017\nArt. 17"},{"Institucion":"Fiscalía General de la Nación ","Direccion":"Dirección Especializada Contra las Organizaciones Criminales","Nivel":"Nacional","Rol":"Responsable","Delito":"Extorsión","Factor":"N\/A","Competencia":"Decreto 898 de 2017\nDecreto 016 de 2014\nArt. 20"},{"Institucion":"Fiscalía General de la Nación ","Direccion":"Dirección Especializada contra los delitos informáticos ","Nivel":"Nacional","Rol":"Responsable","Delito":"Extorsión","Factor":"N\/A","Competencia":"Ley 2197 de 2022 \nArt. 68"},{"Institucion":"Fiscalía General de la Nación ","Direccion":"Dirección Especializada contra el Lavado de Activos","Nivel":"Nacional","Rol":"Responsable","Delito":"Extorsión","Factor":"N\/A","Competencia":"Decreto 016 de 2014\nArt. 20"},{"Institucion":"Fiscalía General de la Nación ","Direccion":"Dirección Especializada de Extinción del Derecho de Dominio","Nivel":"Nacional","Rol":"Responsable","Delito":"Extorsión","Factor":"N\/A","Competencia":"Decreto 016 de 2014\nArt. 20"},{"Institucion":"Fiscalía General de la Nación ","Direccion":"Dirección Especializada de Investigaciones Financiera","Nivel":"Nacional","Rol":"Responsable","Delito":"Extorsión","Factor":"N\/A","Competencia":"Decreto 016 de 2014\nArt. 20"},{"Institucion":"Fiscalía General de la Nación ","Direccion":"Dirección de Apoyo a la Investigación y Análisis de Seguridad Ciudadana","Nivel":"Nacional","Rol":"Responsable","Delito":"Extorsión","Factor":"N\/A","Competencia":"Decreto 016 de 2014\nArt. 35A"},{"Institucion":"Fiscalía General de la Nación ","Direccion":"Dirección de Apoyo Territorial ","Nivel":"Nacional","Rol":"Responsable","Delito":"Extorsión","Factor":"N\/A","Competencia":"Ley 2111 de 2021\nArts. 7; 8"},{"Institucion":"Fiscalía General de la Nación ","Direccion":"Dirección de Apoyo Territorial ","Nivel":"Nacional","Rol":"Responsable","Delito":"Homicidio","Factor":"N\/A","Competencia":"Ley 2111 de 2021\nArts. 7; 8"},{"Institucion":"Fiscalía General de la Nación ","Direccion":"Dirección de Apoyo Territorial ","Nivel":"Nacional","Rol":"Responsable","Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Competencia":"Ley 2111 de 2021\nArts. 7; 8"},{"Institucion":"Fiscalía General de la Nación ","Direccion":"Dirección de Atención al Usuario, Intervención Temprana y Asignaciones ","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Déficit en la aplicación de justicia","Competencia":"Decreto 898 de 2017\nArt. 45"},{"Institucion":"Fiscalía General de la Nación","Direccion":"Direcciones Seccionales","Nivel":"Departamental","Rol":"Responsable","Delito":"Extorsión","Factor":"N\/A","Competencia":"Decreto 016 de 2014\nArt. 31"},{"Institucion":"Fiscalía General de la Nación","Direccion":"Direcciones Seccionales","Nivel":"Municipal ","Rol":"Responsable","Delito":"Extorsión","Factor":"N\/A","Competencia":"Decreto 016 de 2014\nArt. 31"},{"Institucion":"Instituto Nacional y Penitenciario y Carcelario ","Direccion":"Dirección de Custodia y Vigilancia","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Déficit en la atención y custodia penitenciaria","Competencia":"Resolución 243 de 2020\nArts. 30 - 39\nDecreto 4151 de 2011\nArt. 15"},{"Institucion":"Instituto Nacional y Penitenciario y Carcelario ","Direccion":"Dirección de Atención y Tratamiento ","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Déficit en la atención y custodia penitenciaria","Competencia":"Resolución 243 de 2020\nArts. 40 - 56\nDecreto 4151 de 2011\nArt. 18"},{"Institucion":"Ministerio de Justicia y del Derecho","Direccion":"Dirección de Justicia Formal","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Déficit en la aplicación de justicia","Competencia":"Decreto 1427 de 2017\nArt. 17"},{"Institucion":"Ministerio de Justicia y del Derecho","Direccion":"Dirección de Política Criminal y Penitenciaria","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Déficit en la aplicación de justicia","Competencia":"Decreto 1427 de 2017\nArt. 21"},{"Institucion":"Departamento Nacional de Planeación","Direccion":"Dirección de Justicia, Seguridad y Defensa","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Limitada capacidad técnica institucional","Competencia":"Decreto 1893 de 2021\nArt. 37"},{"Institucion":"Ministerio de Igualdad y Equidad","Direccion":"Dirección para las Mujeres en Actividades Sexuales Pagas","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Vulnerabilidades socioeconómicas","Competencia":"Decreto 1075 de 2023\nArt. 22"},{"Institucion":"Ministerio de Igualdad y Equidad","Direccion":"Dirección para el Goce Efectivo de los Derechos y el Fomento de Oportunidades para la Juventud","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Vulnerabilidades socioeconómicas","Competencia":"Decreto 1075 de 2023\nArt. 25"},{"Institucion":"Ministerio de Igualdad y Equidad","Direccion":"Dirección de Jóvenes en Paz","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Vulnerabilidades socioeconómicas","Competencia":"Decreto 1075 de 2023\nArt. 27"},{"Institucion":"Ministerio de Igualdad y Equidad","Direccion":"Dirección para la Superación de la Pobreza","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Vulnerabilidades socioeconómicas","Competencia":"Decreto 1075 de 2023\nArt. 29"},{"Institucion":"Departamento de Prosperidad Social","Direccion":"Dirección de Economía Popular","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Vulnerabilidades socioeconómicas","Competencia":"Decreto 17 de 2025\nArt. 20"},{"Institucion":"Departamento de Prosperidad Social","Direccion":"Dirección de Transferencias Monetarias","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Vulnerabilidades socioeconómicas","Competencia":"Decreto 17 de 2025\nArt. 24"},{"Institucion":"Unidad de Información y Análisis Financiero","Direccion":"Subdirección de Análisis Estratégico","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Limitada capacidad técnica institucional","Competencia":"Ley 1762 de 2015\nArt. 35\nLey 526 de 1999\nArt. 6"},{"Institucion":"Dirección Nacional de Inteligencia ","Direccion":"Dirección de Inteligencia y Contrainteligencia ","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Limitada capacidad técnica institucional","Competencia":"Decreto 4179 de 2011\nArt. 16"},{"Institucion":"Instituto Colombiano de Bienestar Familiar","Direccion":"Dirección de Adolescencia y Juventud","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Vinculación o instrumentalización de menores de edad","Competencia":"Decreto 879 de 2020\nArt. 5"},{"Institucion":"Instituto Colombiano de Bienestar Familiar","Direccion":"Dirección de Protección","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Vinculación o instrumentalización de menores de edad","Competencia":"Decreto 987 de 2012\nArt. 38"},{"Institucion":"Ministerio de Tecnologías de la Información y las Comunicaciones ","Direccion":"Dirección de Estándares y Arquitectura de Tecnologías de la Información ","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Limitada capacidad de custodia de datos personales e infraestructura digital","Competencia":"Decreto 1064 de 2020\nArt. 27"},{"Institucion":"Policía Nacional de Colombia ","Direccion":"DIJIN - Centro Cibernético Policial (CeCIP)","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Vulnerabilidades en los entornos digitales","Competencia":"CONPES 3995 de 2020\nCONPES 3701 de 2011"},{"Institucion":"Policía Nacional de Colombia ","Direccion":"DIJIN - Centro Cibernético Policial (CeCIP)","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Subregistro de datos por baja denuncia","Competencia":"CONPES 3995 de 2020\nCONPES 3701 de 2011"},{"Institucion":"Comando General de las Fuerzas Militares de Colombia","Direccion":"Comando Conjunto Cibernético ","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Vulnerabilidades en los entornos digitales","Competencia":"CONPES 3995 de 2020\nCONPES 3701 de 2011"},{"Institucion":"Departamento Administrativo Nacional de Estadística","Direccion":"Dirección de Metodología y Producción Estadística ","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Subregistro de datos por baja denuncia","Competencia":"Decreto 262 de 2004\nArt. 13"},{"Institucion":"Departamento Administrativo Nacional de Estadística","Direccion":"Dirección de Recolección y Acopio ","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Subregistro de datos por baja denuncia","Competencia":"Decreto 111 de 2022\nArt. 6\nDecreto 262 de 2004\nArt. 12A"},{"Institucion":"Superintendencia de Industria y Comercio","Direccion":"Dirección de Investigaciones de Protección de Datos Personales ","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Limitada capacidad de custodia de datos personales e infraestructura digital","Competencia":"Decreto 092 de 2022 \nArt. 8\nDecreto 4886 de 2011\nArt. 17A"},{"Institucion":"Superintendencia de Industria y Comercio","Direccion":"Dirección de Hábeas Data","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Limitada capacidad de custodia de datos personales e infraestructura digital","Competencia":"Decreto 092 de 2022 \nArt. 7 \nDecreto 4886 de 2011\nArt. 17"},{"Institucion":"Superintendencia Financiera","Direccion":"Dirección de Control del Ejercicio Ilegal de la Actividad Financiera","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Vulnerabilidades socioeconómicas","Competencia":"Decreto 2399 de 2019\nArt.  11.2.1.4.13."},{"Institucion":"Superintendencia Financiera","Direccion":"Delegatura Adjunta para Riesgos","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Dificultades en el acceso al crédito formal","Competencia":"Decreto 2399 de 2019\nArt.  11.2.1.4.20."},{"Institucion":"Entidades Territoriales","Direccion":"Gobernadores ","Nivel":"Departamental","Rol":"Responsable","Delito":"Extorsión","Factor":"N\/A","Competencia":"Ley 1801 de 2016\nArt. 201\nLey 418 de 1997\nArt. 105\nDecreto 1222 de 1986\nArt. 7"},{"Institucion":"Entidades Territoriales","Direccion":"Alcaldes ","Nivel":"Municipal ","Rol":"Responsable","Delito":"Extorsión","Factor":"N\/A","Competencia":"Ley 1801 de 2016\nArt. 205 \nLey 1551 de 2012\nArt. 29, numeral b"},{"Institucion":"Entidades Territoriales","Direccion":"Secretarías de Gobierno \/ Interior \/ Seguridad","Nivel":"Departamental","Rol":"Responsable","Delito":"Extorsión","Factor":"N\/A","Competencia":"Estructura Orgánica Departamental "},{"Institucion":"Entidades Territoriales","Direccion":"Secretarías de Gobierno \/ Interior \/ Seguridad","Nivel":"Municipal ","Rol":"Responsable","Delito":"Extorsión","Factor":"N\/A","Competencia":"Estructura Orgánica Municipal"},{"Institucion":"Entidades Territoriales","Direccion":"Secretarías de Desarrollo Económico y Social ","Nivel":"Departamental","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Vulnerabilidades socioeconómicas","Competencia":"Estructura Orgánica Departamental "},{"Institucion":"Entidades Territoriales","Direccion":"Secretarías de Desarrollo Económico y Social ","Nivel":"Municipal ","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Vulnerabilidades socioeconómicas","Competencia":"Estructura Orgánica Municipal"},{"Institucion":"Asociaciones","Direccion":"Gremios","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Subregistro de datos por baja denuncia","Competencia":"Estatutos gremiales"},{"Institucion":"Asociaciones","Direccion":"Gremios","Nivel":"Departamental","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Subregistro de datos por baja denuncia","Competencia":"Estatutos gremiales"},{"Institucion":"Asociaciones","Direccion":"Gremios","Nivel":"Municipal ","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Subregistro de datos por baja denuncia","Competencia":"Estatutos gremiales"},{"Institucion":"Policía Nacional de Colombia ","Direccion":"Patrulla purpura","Nivel":"Nacional","Rol":"Responsable","Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Competencia":"Ley 599 de 2000"},{"Institucion":"Policía Nacional de Colombia ","Direccion":"Departamentos de Policía","Nivel":"Departamental","Rol":"Responsable","Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Competencia":"Decreto 113 de 2022"},{"Institucion":"Policía Nacional de Colombia ","Direccion":"Metropolitanas de Policía","Nivel":"Municipal ","Rol":"Responsable","Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Competencia":"Decreto 113 de 2022"},{"Institucion":"Instituto Colombiano de Bienestar Familiar","Direccion":"Subdirección de Infancia y adolescencia","Nivel":"Nacional","Rol":"Responsable","Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Competencia":"Ley 1098 de 2006"},{"Institucion":"Instituto Colombiano de Bienestar Familiar","Direccion":"Subdirección de restablecimiento de derechos Subdirección de restablecimiento de derechos","Nivel":"Nacional","Rol":"Responsable","Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Competencia":"Ley 1098 de 2006"},{"Institucion":"Fiscalía General de la Nación","Direccion":"Dirección Grupo Convivencia Social y Ciudadanía","Nivel":"Nacional","Rol":"Responsable","Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Competencia":"Directiva 013 de 2013"},{"Institucion":"Fiscalía General de la Nación","Direccion":"Dirección de Apoyo a la Investigación y Análisis de Seguridad Ciudadana","Nivel":"Nacional","Rol":"Responsable","Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Competencia":"Decreto 016 de 2014\nArt. 35A"},{"Institucion":"Fiscalía General de la Nación","Direccion":"Unidad Técnico Científica en Psicología y Neuropsicología Forense","Nivel":"Nacional","Rol":"Responsable","Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Competencia":"Resolución 0115 de 2025"},{"Institucion":"Fiscalía General de la Nación","Direccion":"Direcciones Seccionales","Nivel":"Municipal ","Rol":"Responsable","Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Competencia":"Decreto 016 de 2014 - Articulo 14A."},{"Institucion":"Ministerio de Justicia y del Derecho","Direccion":"Dirección de Justicia Formal","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Déficit en la aplicación de justicia","Competencia":"Decreto 1427 de 2017\nArt. 17"},{"Institucion":"Ministerio de Justicia y del Derecho","Direccion":"Dirección de Métodos Alternativos y de Solución de Conflictos","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Déficit en la aplicación de justicia","Competencia":"Decreto 1427 de 2017\nArt. 16"},{"Institucion":"Entidades Territoriales","Direccion":"Casas de Justicia","Nivel":"Municipal ","Rol":"Responsable","Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Competencia":"Decreto 1477 de 2000\nArt. 3"},{"Institucion":"Ministerio del Interior","Direccion":"Grupo de Enfoque de Género y Diversidad","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Violencia institucional","Competencia":"Resolución 0041 de 2024"},{"Institucion":"Entidades Territoriales","Direccion":"Casa Refugio","Nivel":"Municipal ","Rol":"Responsable","Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Competencia":"Ley 2215 de 2022\nArt. 2"},{"Institucion":"Defensoría del Pueblo","Direccion":"Delegada para Derechos de las Mujeres y Asuntos de Género","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Roles de genero rígidos","Competencia":"Decreto 25 de 2014"},{"Institucion":"Defensoría del Pueblo","Direccion":"Delegación para la Infancia y la Vejez","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Violencias en el contexto familiar","Competencia":"Decreto 25 de 2015"},{"Institucion":"Defensoría del Pueblo","Direccion":"Prevención de Riesgos de Violaciones de DDHH y DIH","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Presencia y operatividad de grupos delictivos","Competencia":"Decreto 25 de 2016"},{"Institucion":"Ministerio de Salud y Protección Social","Direccion":"Dirección Grupo Convivencia Social y Ciudadanía","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Consumo problemático de drogas y alcohol","Competencia":"Ley 1257 de 2008"},{"Institucion":"Procuraduría General de la Nación","Direccion":"Delegación para la Defensa de los Derechos de la Infancia, la Adolescencia, la Familia y las Mujeres","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Déficit en la aplicación de justicia","Competencia":"Resolución 377 de 2022\nResolución 0376"},{"Institucion":"Instituto Nacional de Medicina Legal y Ciencias Forenses","Direccion":"Grupo Centro de Referencia Nacional sobre Violencia ","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Déficit en la aplicación de justicia","Competencia":"Ley 294 de 1996\nArt. 11"},{"Institucion":"Ministerio de Defensa Nacional","Direccion":"Ministerio de Defensa","Nivel":"Nacional","Rol":"Responsable","Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Competencia":"Ley 1719 de 2014\nArt.30"},{"Institucion":"Ministerio de Igualdad y Equidad","Direccion":"Dirección para la Garantía de los Derechos de las Mujeres del Viceministerio de las Mujeres ","Nivel":"Nacional","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Vulnerabilidades socioeconómicas","Competencia":"Decreto 1710 de 2020"},{"Institucion":"Entidades Territoriales","Direccion":"Gobernadores ","Nivel":"Departamental","Rol":"Responsable","Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Competencia":"Ley 1801 de 2016\nArt. 201\nLey 418 de 1997\nArt. 105\nDecreto 1222 de 1986\nArt. 7"},{"Institucion":"Entidades Territoriales","Direccion":"Alcaldes ","Nivel":"Municipal ","Rol":"Responsable","Delito":"Violencia Intrafamiliar ","Factor":"N\/A","Competencia":"Ley 1801 de 2016\nArt. 205 \nLey 1551 de 2012\nArt. 29, numeral b"},{"Institucion":"Entidades Territoriales","Direccion":"Secretarías de Salud","Nivel":"Departamental","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Salud mental y gestión emocional","Competencia":"Estructura Orgánica Departamental "},{"Institucion":"Entidades Territoriales","Direccion":"Secretarías de Salud","Nivel":"Municipal ","Rol":"Corresponsable ","Delito":"N\/A","Factor":"Salud mental y gestión emocional","Competencia":"Estructura Orgánica Municipal"}];
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
    delitoSelect.empty().append('<option value="">Seleccione un delito</option>');
    delitos.sort().forEach(delito => {
        delitoSelect.append(`<option value="${delito}">${delito}</option>`);
    });
}

// Función para filtrar factores de riesgo basados en el delito seleccionado
function filtrarFactores(delitoSeleccionado, dataToProcess) {
    const factorSelect = $('#factor');
    factorSelect.empty().append('<option value="">Seleccione un factor de riesgo</option>');

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

// Función para filtrar Instituciones basadas en el factor de riesgo seleccionado
function filtrarInstituciones(factorSeleccionado, dataToProcess) {
    const InstitucionSelect = $('#Institucion');
    InstitucionSelect.empty().append('<option value="">Seleccione un actor</option>');

    let Instituciones = [];
    if (factorSeleccionado) {
        Instituciones = [...new Set(dataToProcess
            .filter(item => item.Factor === factorSeleccionado)
            .map(item => item.Institucion)
        )];
    } else {
        Instituciones = [...new Set(dataToProcess.map(item => item.Institucion))];
    }
    Instituciones.sort().forEach(Institucion => {
        InstitucionSelect.append(`<option value="${Institucion}">${Institucion}</option>`);
    });
}

// Función para actualizar la tabla y los badges de filtros activos
function actualizarTablaYFiltros() {
    const delito = $('#delito').val();
    const factor = $('#factor').val();
    const Institucion = $('#Institucion').val();

    // Resetear DataTables para aplicar nuevos filtros desde el conjunto original
    if (tabla) {
        tabla.destroy(); // Destruye la Institucion actual de DataTables
    }

    // Filtra la data original con los selectores
    let filteredData = originalData.filter(d => {
        return (delito === '' || d.Delito === delito) &&
               (factor === '' || d.Factor === factor) &&
               (Institucion === '' || d.Institucion === Institucion);
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
            `<div class='oferta-format oferta-truncada' data-fulltext="${d.Institucion}">${d.Institucion.substring(0, 850).replace(/\n/g, '<br>')} </div>`,			
			`<div class='oferta-format oferta-truncada' data-fulltext="${d.Direccion}">${d.Direccion.substring(0, 850).replace(/\n/g, '<br>')} </div>`,			
			`<div class='oferta-format oferta-truncada' data-fulltext="${d.Nivel}">${d.Nivel.substring(0, 850).replace(/\n/g, '<br>')} </div>`,
			`<div class='oferta-format oferta-truncada' data-fulltext="${d.Rol}">${d.Rol.substring(0, 850).replace(/\n/g, '<br>')} </div>`,
			d.Delito,
            `<div class='oferta-format'>${d.Factor.replace(/\n/g, '<br>')}</div>`,            
            `<div class='oferta-format oferta-truncada' data-fulltext="${d.Competencia}">${d.Competencia.substring(0, 450).replace(/\n/g, '<br>')} </div>`           
			
        ])
    });

    // Sincronizar el campo de búsqueda global con la búsqueda de DataTables
    $('#searchBox').off('keyup').on('keyup', function() {
        tabla.search(this.value).draw();
    });

    actualizarFiltrosActivos(delito, factor, Institucion);
}

// Función para actualizar los badges de filtros activos
function actualizarFiltrosActivos(delito, factor, Institucion) {
    const badgesContainer = $('#active-filters-badges');
    badgesContainer.empty();

    if (delito) {
        badgesContainer.append(`<span class="badge bg-primary me-2">Delito: ${delito}</span>`);
    }
    if (factor) {
        badgesContainer.append(`<span class="badge bg-info text-dark me-2">Factor: ${factor}</span>`);
    }
    if (Institucion) {
        badgesContainer.append(`<span class="badge bg-success me-2">Institución: ${Institucion}</span>`);
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
        filtrarInstituciones('', originalData); // Resetear Instituciones si cambia delito
        $('#factor').val(''); // Resetear factor
        $('#Institucion').val(''); // Resetear Institucion
        actualizarTablaYFiltros();
    });

    $('#factor').on('change', function () {
        const v = $(this).val();
        filtrarInstituciones(v, originalData);
        $('#Institucion').val(''); // Resetear Institucion si cambia factor
        actualizarTablaYFiltros();
    });

    $('#Institucion').on('change', function () {
        actualizarTablaYFiltros();
    });

    // Evento para el botón de Reiniciar
    $('#reset').on('click', function () {
        $('#delito').val('');
        $('#factor').val('');
        $('#Institucion').val('');
        cargarOpciones(originalData); // Recargar opciones principales
        filtrarFactores('', originalData); // Recargar factores
        filtrarInstituciones('', originalData); // Recargar Instituciones
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