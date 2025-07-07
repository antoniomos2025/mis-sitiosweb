let tabla; // Variable global para la instancia de DataTables
let originalData = []; // Para almacenar la data original cargada

// Función para cargar los datos (simula una API)
async function fetchData() {
    // Datos hardcodeados de tu archivo HTML original
    return [{"Marco normativo y público":"Lineamientos internacionales","TipoMarco":"Convención para prevenir y sancionar los actos de terrorismo configurados en delitos contra las personas y la extorsión conexa cuando estos tengan trascendencia internacional, 1971","Descripción":"Establece lineamientos de cooperación para prevenir y sancionar los actos de terrorismo, entre esos_\nArt. 2 Secuestro, homicidio y extorsión","Ámbito de aplicación":"Homicidio intencional\nExtorsión ","EnlaceUrl_TipoMarco":"https:\/\/www.oas.org\/juridico\/spanish\/tratados\/a-49.html"},{"Marco normativo y público":"Lineamientos internacionales","TipoMarco":"Convención sobre la eliminación de todas las formas de discriminación contra la mujer, 1979","Descripción":"Establece medidas adecuadas para eliminar la discriminación contra la mujer, entre esas_\nArt. 16 derechos en el ámbito matrimonial y en las relaciones familiares","Ámbito de aplicación":"Violencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.ohchr.org\/sites\/default\/files\/cedaw_SP.pdf"},{"Marco normativo y público":"Lineamientos internacionales","TipoMarco":"Convención de los derechos del niño, 1989","Descripción":"Establece los derechos del niño que deben ser garantizados por los Estados, entre esos_\nArt. 19 Protección del Estado contra los malos tratos perpetrados por padres y madres u otro responsable de su cuidado y establecer medidas preventivas y de tratamiento al respecto","Ámbito de aplicación":"Violencia intrafamiliar","EnlaceUrl_TipoMarco":"http:\/\/un.org\/es\/events\/childrenday\/pdf\/derechos.pdf"},{"Marco normativo y público":"Lineamientos internacionales","TipoMarco":"Convención interamericana para prevenir, sancionar y erradicar la violencia contra la mujer, 1994","Descripción":"Establece lineamientos para prevenir, sancionar y erradicar toda forma de violencia contra la mujer, entre esos_\nArt. 2 Define los ámbitos de violencia contra la mujer, incluida la familia.\nArt. 3 Define los derechos de la mujer a que se respete su vida e integridad física, psíquica y moral\nArt. 4 Define los deberes del Estado para prevenir, sancionar y erradicar la violencia contra la mujer.","Ámbito de aplicación":"Violencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.oas.org\/juridico\/spanish\/tratados\/a-61.html"},{"Marco normativo y público":"Lineamientos internacionales","TipoMarco":"Convención de las Naciones Unidas contra la delincuencia organizada transnacional, 2001","Descripción":"Establece lineamientos de cooperación para prevenir y combatir la delincuencia organizada transnacional, entre esos_\nArt. 5. Penalización de la participación en un grupo delictivo organizado\nArt. 25. Asistencia y protección a las víctimas\nArt. 28. Recopilación, intercambio y análisis de información sobre la naturaleza de la delincuencia organizada\nArt. 31. Prevención","Ámbito de aplicación":"Homicidio intencional\nExtorsión","EnlaceUrl_TipoMarco":"https:\/\/www.unodc.org\/documents\/treaties\/UNTOC\/Publications\/TOC Convention\/TOCebook-s.pdf"},{"Marco normativo y público":"Lineamientos internacionales","TipoMarco":"Convención de las Naciones Unidas contra la Ciberdelincuencia, 2024","Descripción":"Establece medidas para prevenir y combatir más eficaz y eficientemente la ciberdelincuencia, entre ellas_\nArt. 7. Acceso ilícito\nArt. 8. Interceptación ilícita\nArt. 11. Uso indebido de dispositivos\nArt. 12. Falsificación relacionada con un sistema de tecnología de la información y comunicaciones\nArt. 13. Robo o fraude relacionados con un sistema de tecnología de la información y comunicaciones\nArt. 16. Difusión no consentida de imágenes de caracter íntimo\nArt. 28. Búsqueda e incautación de datos electrónicos almacenados Art. 29. Recoleccion en tiempo real de datos relativos al tráfico\nArt. 30. Interceptación de datos relativos al contenido\nArt. 31. Embargo preventivo y decomiso del producto del delito\nArt. 34. Asistencia y protección a las víctimas\nArt. 53 Medidas preventivas","Ámbito de aplicación":"Extorsión","EnlaceUrl_TipoMarco":"https:\/\/docs.un.org\/es\/A\/RES\/79\/243"},{"Marco normativo y público":"Lineamientos internacionales","TipoMarco":"Declaración Universal de los Derechos Humanos (Resolución 217 A III, 1948)","Descripción":"Establece los derechos fundamentales que deben protegerse en el mundo entero, entre esos_\nArt.3 Derecho la vida, a la libertad y a la seguridad de su persona.","Ámbito de aplicación":"Homicidio intencional\nExtorsión\nViolencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.un.org\/es\/about-us\/universal-declaration-of-human-rights"},{"Marco normativo y público":"Lineamientos internacionales","TipoMarco":"Declaración sobre los principios fundamentales de justicia para las víctimas de delitos y del abuso de poder (Resolución 40\/34, 1985)","Descripción":"Establece principios fundamentales de justicia para las víctimas de delitos, entre esos_\nArt. 4. Acceso a los mecanismos de justicia y pronta reparación del daño\nArt 8. Resarcimiento\nArt. 12. Indemnización\nArt. 14. Asistencia","Ámbito de aplicación":"Homicidio intencional\nExtorsión\nViolencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.hchr.org.co\/informes_onu\/declaracion-sobre-los-principios-fundamentales-de-justicia-para-las-victimas-de-delitos-y-del-abuso-de-poder\/"},{"Marco normativo y público":"Lineamientos internacionales","TipoMarco":"Declaración de Beijing, 1995","Descripción":"Establece el compromiso de los Estados para defender los derechos de las mujeres, entre esos_\nSección D. Prevenir y eliminar la violencia contra la mujer, incluido el ámbito familiar.","Ámbito de aplicación":"Violencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.unwomen.org\/sites\/default\/files\/Headquarters\/Attachments\/Sections\/CSW\/BPA_S_Final_WEB.pdf"},{"Marco normativo y público":"Lineamientos internacionales","TipoMarco":"Directrices para la cooperación y la asistencia técnica en la esfera de la prevención de la delincuencia urbana (Resolución 1995\/9, 1995)","Descripción":"Establece principios para la cooperación en materia de prevención de la delincuencia urbana, entre esos_\n- Diagnóstico local de los fenómenos delictivos\n- Mapeo de posibles intervinientes\n- Plan de acción con enfoque interinstitucional y respuesta coordinada\n- Prevención primaria y de reincidencia","Ámbito de aplicación":"Homicidio intencional\nExtorsión","EnlaceUrl_TipoMarco":"https:\/\/digitallibrary.un.org\/record\/222690?ln=es&v=pdf"},{"Marco normativo y público":"Lineamientos internacionales","TipoMarco":"Directrices para la prevención del delito (Resolución 2002\/13, 2002)","Descripción":"Establece medidas para la prevención eficaz del delito, tales como_ \n- Aplicación de medidas sociales, económicas, de salud y educación\n- Modificar las condiciones existentes\n- Prevenir delitos mediante el diseño ambiental\n- Prevenir la reincidencia mediante la reintegración social","Ámbito de aplicación":"Homicidio intencional\nExtorsión","EnlaceUrl_TipoMarco":"https:\/\/digitallibrary.un.org\/record\/501411?ln=es&v=pdf"},{"Marco normativo y público":"Lineamientos internacionales","TipoMarco":"Declaración de Doha, 2015","Descripción":"Reafirma el compromiso de los Estados para apoyar sistemas de prevención del delito y justicia penal, tales como_\na. Políticas y programas amplios e inclusivos que respondan a las causas profundas de la delincuencia\nf. Estrategias para promover la protección de las mujeres y niñas contra actos de violencia","Ámbito de aplicación":"Homicidio intencional\nExtorsión\nViolencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.unodc.org\/documents\/congress\/Declaration\/V1504154_Spanish.pdf"},{"Marco normativo y público":"Lineamientos internacionales","TipoMarco":"Agenda 2030 para el Desarrollo Sostenible (Resolución 70\/1, 2015)","Descripción":"Establece un conjunto de objetivos globales para alcanzar, entre esos_\nArt. 5. Igualdad de género\nArt. 10. Reducción de las desigualdades\nArt. 16. Paz, justicia e instituciones sólidas","Ámbito de aplicación":"Homicidio intencional\nExtorsión\nViolencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/docs.un.org\/es\/A\/RES\/70\/1"},{"Marco normativo y público":"Normatividad","TipoMarco":"Constitución Política","Descripción":"Define los principios y derechos fundamentales en Colombia, así como las distribuciones de recursos y competencias, entre esos_\nArt. 5 Familia como institución básica de la sociedad\nArt. 11 Derecho a la vida\nArt. 42 Protección de la familia como nucleo fundamental de la sociedad\nArt. 356-357 Sistema General de Participaciones de los departamentos, distritos y municipios\nArt. 360-361 Sistema General de Regalías","Ámbito de aplicación":"Homicidio intencional\nExtorsión\nViolencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.funcionpublica.gov.co\/eva\/gestornormativo\/norma.php?i=4125"},{"Marco normativo y público":"Normatividad","TipoMarco":"Normas sobre orden público interno – Ley 4 de 1991","Descripción":"Dicta normas sobre orden público interno en los distintos niveles de administración territorial,entre esas_\nArt. 7 Normas en lo nacional\nArt. 8 Normas en lo departamental, distrital, intendencial, comisarial y municipal","Ámbito de aplicación":"Homicidio intencional\nExtorsión","EnlaceUrl_TipoMarco":"https:\/\/www.funcionpublica.gov.co\/eva\/gestornormativo\/norma.php?i=1572"},{"Marco normativo y público":"Normatividad","TipoMarco":"Normas sobre la Policía Nacional – Ley 62 de 1993","Descripción":"Expide normas sobre la Policía Nacional, entre esas_\nArt. 12 Subordinación de las autoridades políticas\nArt 16 Atribuciones y Obligaciones de los Gobernadores y Alcaldes en relación con los Comandantes de Policía","Ámbito de aplicación":"Homicidio intencional\nExtorsión\nViolencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.funcionpublica.gov.co\/eva\/gestornormativo\/norma.php?i=6943"},{"Marco normativo y público":"Normatividad","TipoMarco":"Medidas para erradicar algunos delitos contra la libertad personal, especialmente el secuestro y la extorsión – Ley 282 de 1996","Descripción":"Dicta medidas para erradicar la extorsión, tales como_ \nArt 1 Crear el Consejo Nacional de Lucha contra el Secuestro y demás Atentados contra la Libertad Personal, Conase\nArt 4 Crear Grupos de Acción Unificada por la Libertad Personal, \"Gaula\"","Ámbito de aplicación":"Extorsión","EnlaceUrl_TipoMarco":"https:\/\/www.funcionpublica.gov.co\/eva\/gestornormativo\/norma.php?i=17492"},{"Marco normativo y público":"Normatividad","TipoMarco":"Normas para prevenir, remediar y sancionar la violencia intrafamiliar – Ley 294 de 1996","Descripción":"Dicta normas para prevenir, remediar y sancionar la violencia intrafamiliar, tales como_\nArt 4 Medidas de protección inmediata\nArt 5 Medida definitiva de protección \nArt 20 Asistencia a las víctimas\nArt 28 Diseño de políticas, planes y programas para prevenir y erradicar la violencia intrafamiliar por parte del ICBF","Ámbito de aplicación":"Violencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.funcionpublica.gov.co\/eva\/gestornormativo\/norma.php?i=5387"},{"Marco normativo y público":"Normatividad","TipoMarco":"Ley de Orden Público – Ley 418 de 1997","Descripción":"Consagra instrumentos para la búsqueda de la convivencia y la eficacia de la justicia, entre esos, la financiación de los fondos de seguridad como_\nArt. 119 Fondos Territoriales de Seguridad y Convivencia Ciudadana (FONSET)\nArt. 122 Fondo Nacional de Seguridad y Convivencia Ciudadana (FONSECON)","Ámbito de aplicación":"Homicidio intencional\nExtorsión\nViolencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.funcionpublica.gov.co\/eva\/gestornormativo\/norma.php?i=6372"},{"Marco normativo y público":"Normatividad","TipoMarco":"Código Penal - Ley 599 de 2000","Descripción":"Establece las normas rectoras de la ley penal en Colombia, entre esas_\nArt. 103 Homicidio\nArt 104 A Feminicidio\nArt. 163 Exacción o contribuciones arbitrarias\nArt. 169 Secuestro extorsivo\nArt. 229 Violencia intrafamiliar\nArt. 244 Extorsión\nArt. 340 Concierto para delinquir","Ámbito de aplicación":"Homicidio intencional\nExtorsión\nViolencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.funcionpublica.gov.co\/eva\/gestornormativo\/norma.php?i=6388"},{"Marco normativo y público":"Normatividad","TipoMarco":"Código de Procedimiento penal - Ley 906 de 2004","Descripción":"Establece normas que regulan el proceso penal, entre esos_\nArt 175 Término del que dispone la Fiscalía para formular la imputación u ordenar el archivo de la indagación en casos de los delitos de homicidio, feminicidio y violencia intrafamiliar","Ámbito de aplicación":"Homicidio intencional\nExtorsión\nViolencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.funcionpublica.gov.co\/eva\/gestornormativo\/norma.php?i=14787"},{"Marco normativo y público":"Normatividad","TipoMarco":"Código de Infancia y Adolescencia – Ley 1098 de 2006","Descripción":"Establece normas para la protección integral de los niños, niñas y adolescentes, tales como_ \nArt 14 Responsabilidad parental\nArt 18 Derecho a la integridad personal\nArt 39 Obligaciones de la familia\nArt 41 Obligaciones del Estado\nArt 44 Obligaciones complementarias de las instituciones educativas\nArt 46 Obligaciones especiales del Sistema de Seguridad Social en Salud\nArt 83 Comisarías de familia","Ámbito de aplicación":"Violencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.funcionpublica.gov.co\/eva\/gestornormativo\/norma.php?i=22106"},{"Marco normativo y público":"Normatividad","TipoMarco":"Sistema General de Participaciones – Ley 1176 de 2007","Descripción":"Establece lineamientos para el funcionamiento del Sistema General de Participaciones, tales como_\nArt 4 Distribuciones sectoriales","Ámbito de aplicación":"Homicidio intencional\nExtorsión\nViolencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.funcionpublica.gov.co\/eva\/gestornormativo\/norma.php?i=28306"},{"Marco normativo y público":"Normatividad","TipoMarco":"Normas de sensibilización, prevención y sanción de formas de violencia y discriminación contra las mujeres – Ley 1257 de 2008","Descripción":"Dicta normas de sensibilización, prevención y sanción de formas de violencia y discriminación contra las mujeres, entre esas_\nArt 2 Definición de la violencia contra la mujer\nArt 3 Concepto de daño contra la mujer\nArt 8 Derechos de las víctimas de violencia\nArt 9 Medidas de sensibilización y prevención para el gobierno nacional, los departamentos y municipios","Ámbito de aplicación":"Violencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.funcionpublica.gov.co\/eva\/gestornormativo\/norma.php?i=34054"},{"Marco normativo y público":"Normatividad","TipoMarco":"Organización y funcionamiento de los municipios – Ley 1551 de 2012","Descripción":"Dicta normas para modernizar la organización y el funcionamiento de los municipios, entre esas_\nArt 3 Elaborar e implementar los planes integrales de seguridad ciudadana, en coordinación con las autoridades locales de policía y promover la convivencia entre sus habitantes","Ámbito de aplicación":"Homicidio intencional\nExtorsión\nViolencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.funcionpublica.gov.co\/eva\/gestornormativo\/norma.php?i=48267"},{"Marco normativo y público":"Normatividad","TipoMarco":"Código Nacional de Seguridad y Convivencia Ciudadana – Ley 1801 de 2016","Descripción":"Establece las disposiciones para establecer la convivencia en el territorio nacional, entre esas_\nArt 27 Comportamientos que ponen en riesgo la vida e integridad\nArt 198 Autoridades de Policía","Ámbito de aplicación":"Homicidio intencional\nExtorsión\nViolencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.funcionpublica.gov.co\/eva\/gestornormativo\/norma.php?i=80538"},{"Marco normativo y público":"Normatividad","TipoMarco":"Investigación y judicialización de organizaciones criminales – Ley 1908 de 2018","Descripción":"Dispone medidas para fortalecer la investigación y judicialziación de organizaciones criminales, entre esas_\nArt 340 Medidas punitivas para combatir el concierto para delinquir","Ámbito de aplicación":"Homicidio intencional\nExtorsión","EnlaceUrl_TipoMarco":"https:\/\/www.funcionpublica.gov.co\/eva\/gestornormativo\/norma.php?i=87301"},{"Marco normativo y público":"Normatividad","TipoMarco":"Sistema General de Regalías – Ley 2056 de 2020","Descripción":"Regula la organización y funcionamiento del Sistema General de Regalías, entre esos_\nArt 28 Destinación\nArt 29 Características de los proyectos de inversión\nArt 33 Formulación y presentación de los proyectos de inversión\nArt 35 Priorización y aprobación de los proyectos de inversión","Ámbito de aplicación":"Homicidio intencional\nExtorsión\nViolencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.funcionpublica.gov.co\/eva\/gestornormativo\/norma.php?i=142858"},{"Marco normativo y público":"Normatividad","TipoMarco":"Creación, conformación y funcionamiento de las comisarías de familia – Ley 2126 de 2021","Descripción":"Dicta normas para la creación, conformación y funcionamiento de las comisarías de familia, entre esas_\nArt 5 Medidas de protección en casos de violencia intrafamiliar\nArt 30 Disponibilidad permanente","Ámbito de aplicación":"Violencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.funcionpublica.gov.co\/eva\/gestornormativo\/norma.php?i=168066"},{"Marco normativo y público":"Normatividad","TipoMarco":"Sistema Nacional de alertas tempranas para la prevención de la violencia sexual contra los niños, niñas y adolescentes – Ley 2137 de 2021","Descripción":"Crea el sistema nacional de alertas tempranas para la prevención de la violencia sexual contra los niños, niñas y adolescentes y le asigna lineamientos, entre esas_\nArt 5 Funciones\nArt 17 Recursos","Ámbito de aplicación":"Violencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.funcionpublica.gov.co\/eva\/gestornormativo\/norma.php?i=168047"},{"Marco normativo y público":"Normatividad","TipoMarco":"Implementación de las casas refugio – Ley 2215 de 2022","Descripción":"Provee lineamientos para la creación y funcionamiento de las casas de refugio y fortalece la Política Pública en contra de la violencia hacia las mujeres, entre esas_\nArt 4 Definición dela violencia contra la mujer\nArt 7 Autorícese al Gobierno Nacional y a los entes territoriales disponer de los recursos necesarios para la implementación de las Casas de Refugio.","Ámbito de aplicación":"Violencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.funcionpublica.gov.co\/eva\/gestornormativo\/norma.php?i=188287"},{"Marco normativo y público":"Normatividad","TipoMarco":"Política de Paz Total - Ley 2272 de 2022","Descripción":"Define la política de paz como política de Estado, estableciendo lineamientos como_\nArt 2 Definción de seguridad humana y paz total\nArt 3 Establecimiento de un orden social justo que asegure la convivencia pacífica, la protección de la naturaleza y de los derechos y libertades de las persona\nArt 14 Programa Nacional de Entrega Voluntaria de Armas","Ámbito de aplicación":"Homicidio intencional\nExtorsión\nViolencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.funcionpublica.gov.co\/eva\/gestornormativo\/norma.php?i=197883"},{"Marco normativo y público":"Política Pública","TipoMarco":"Plan Nacional de Desarrollo \"Colombia, potencia mundial de la vida\" 2022-2026","Descripción":"El eje 2, seguridad humana y justicia social, incluye lineamientos para la convivencia y seguridad ciudadana, así como para el control institucional del territorio para minimizar las amenazas al bienestar de las personas y las comunidades. Incluye estrategias contra el homicidio, la extorsión, la violencia contra las mujeres, las niñas, niños y adolescentes","Ámbito de aplicación":"Homicidio intencional\nExtorsión\nViolencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/colaboracion.dnp.gov.co\/CDT\/Prensa\/Publicaciones\/plan-nacional-de-desarrollo-2022-2026-colombia-potencia-mundial-de-la-vida.pdf"},{"Marco normativo y público":"Política Pública","TipoMarco":"Política de Seguridad, Defensa y Convivencia Ciudadana 2022-2026","Descripción":"Incluye estrategias para proveer condiciones de seguridad y protección de la vida, la integridad personal y el patrimonio. En materia de seguridad urbana, prioriza el homicidio, la extorsión y la violencia basada en género como delitos de mayor afectación ciudadana.","Ámbito de aplicación":"Homicidio intencional\nExtorsión\nViolencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.mindefensa.gov.co\/_cache_850b\/content\/Pol%C3%ADtica de Seguridad Defensa y Convivencia Ciudadana-5295010000147821.pdf"},{"Marco normativo y público":"Política Pública","TipoMarco":"Plan Nacional de Política Criminal 2021-2025","Descripción":"Dentro de las prioridades de la política se encuentra en primer lugar la prevención y reducción del homicidio, en segundo lugar visibilizar, prevenir y perseguir la violencia basada en género y a NNA y en tercer lugar la disrupción del crimen organizado, aumentando la persecusión de delitos como la extorsión","Ámbito de aplicación":"Homicidio intencional\nExtorsión\nViolencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.minjusticia.gov.co\/Sala-de-prensa\/Documents\/Plan Nacional de Poli%C2%B4tica Criminal 2021-2025 .pdf"},{"Marco normativo y público":"Política Pública","TipoMarco":"Política Pública de prevención del delito de adolescentes y jóvenes 2022-2031","Descripción":"Establece lineamientos para la prevención del delito en adolscentes y jóvenes mediante la generación de herramientas individuales que le permita a os jovenes afrontar entornos y situaciones de riesgo, el desarrollo de proyectos de vida autónomos y sostenibles, el fortalecimiento de la familia, la prevención de la instrumentalización, uso y utilización de NNA y el fortalecimiento de la inclusión social de jóvenes en el SRPA","Ámbito de aplicación":"Homicidio intencional\nExtorsión\nViolencia intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/www.icbf.gov.co\/system\/files\/politica_publica_nacional_de_prevencion_del_delito_aj_2022_web.pdf"},{"Marco normativo y público":"Política Pública","TipoMarco":"Política Nacional de Confianza y Seguridad Digital CONPES 3995\/2020: ","Descripción":"Establece como objetivo general_ Establecer medidas para desarrollar la confianza digital a través de la mejora la seguridad digital de manera que Colombia sea una sociedad incluyente y competitiva en el futuro digital mediante el fortalecimiento de capacidades y la actualización del marco de gobernanza en seguridad digital, así como con la adopción de modelos con énfasis en nuevas tecnologías. ","Ámbito de aplicación":"Extorsión","EnlaceUrl_TipoMarco":"https:\/\/colaboracion.dnp.gov.co\/CDT\/Conpes\/Econ%C3%B3micos\/3995.pdf"},{"Marco normativo y público":"Política Pública","TipoMarco":"Política Penitenciaria y Carcelaria en Colombia CONPES 3828: ","Descripción":"Establece como objetivo general_ Fortalecer la capacidad institucional desde una perspectiva integral con miras a garantizar la efectiva resocialización de la población privada de la libertad y el cumplimiento de los fines constitucionales de la pena en condiciones de dignidad humana. ","Ámbito de aplicación":"Extorsión","EnlaceUrl_TipoMarco":"https:\/\/colaboracion.dnp.gov.co\/CDT\/Conpes\/Econ%C3%B3micos\/Pol%C3%ADtica penitenciaria y carcelaria.pdf"},{"Marco normativo y público":"Política Pública","TipoMarco":"Política Nacional de Infancia y Adolescencia (PNIA) 2018-2030","Descripción":"Definición de principios, enfoques, marco de gestión y líneas de acción para la protección integral de niñas, niños y adolescentes entre los 6 y 18 años","Ámbito de aplicación":"Violencia Intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/siteal.iiep.unesco.org\/sites\/default\/files\/sit_accion_files\/11131.pdf"},{"Marco normativo y público":"Política Pública","TipoMarco":"Política Pública de Equidad de Género para las Mujeres 2022-2030","Descripción":"Establece una hoja de ruta intersectorial para generar las condiciones que permitan la garantía plena de los derechos de las mujeres y la igualdad efectiva entre hombres y mujeres. Su cuarto eje estratégico se enfoca en la prevención y atención integral de las violencias contra las mujeres.","Ámbito de aplicación":"Violencia Intrafamiliar","EnlaceUrl_TipoMarco":"https:\/\/multimedia.ideaspaz.org\/especiales\/generando-equidad\/docs\/Cartilla-ppeg-mujeres-2022-2030.pdf"},{"Marco normativo y público":"Política Pública","TipoMarco":"Estrategia Nacional contra el Homicidio 2024","Descripción":"Brinda lineamientos para combatir el homicidio a través de la intensificación operacional, la coordinación en la investigación judicial, la articulación con autoridades territoriales para la prevención. Este último, a través del fomento de la convivencia ciudadana, el fortalecimiento de las condiciones de seguridad ciudadana y la intervención social","Ámbito de aplicación":"Homicidio","EnlaceUrl_TipoMarco":"#"},{"Marco normativo y público":"Política Pública","TipoMarco":"Estrategia integral de lucha conta el secuestro y la extorsion 2024 - 2026","Descripción":"Establece como objetivo general_ Desarrollar acciones conjuntas y coordinadas con las Entidades que intervienen en la estrategia y demás autoridades de la República, para proteger a todas las personas residentes en Colombia contra el secuestro y la extorsión, a través de un enfoque diferencial para el fortalecimiento de la prevención, captura y judicialización de los responsables del delito, y contribuir con la contención y disminución sustancial de estos flagelos.","Ámbito de aplicación":"Extorsión","EnlaceUrl_TipoMarco":"#"},{"Marco normativo y público":"Política Pública","TipoMarco":"Estrategia integral de protección a mujer, familia y género ","Descripción":"Es una estrategia de la Policía Nacioanl orientada a contribuir en la prevención y atención de las manifestaciones de violencia contra la mujer. Sus tres componentes son_ prevención, atención e investigación criminal","Ámbito de aplicación":"Violencia Intrafamiliar","EnlaceUrl_TipoMarco":"#"}];
}

// Función para cargar opciones en los selectores
function cargarOpciones(dataToProcess) {
    const marcos = [...new Set(dataToProcess.map(item => item['Marco normativo y público']))];
    const marcoSelect = $('#filtro-marco');
    marcoSelect.empty().append('<option value="">Seleccione un Marco</option>');
    marcos.sort().forEach(marco => {
        marcoSelect.append(`<option value="${marco}">${marco}</option>`);
    });

    const tipos = [...new Set(dataToProcess.map(item => item['TipoMarco']))];
    const tipoSelect = $('#filtro-tipo');
    tipoSelect.empty().append('<option value="">Seleccione un Instrumento</option>');
    tipos.sort().forEach(tipo => {
        tipoSelect.append(`<option value="${tipo}">${tipo}</option>`);
    });

    const ambitos = [...new Set(dataToProcess.flatMap(item => item['Ámbito de aplicación'].split('\n')).map(s => s.trim()).filter(Boolean))];
    const ambitoSelect = $('#filtro-ambito');
    ambitoSelect.empty().append('<option value="">Seleccione un Ámbito</option>');
    ambitos.sort().forEach(ambito => {
        ambitoSelect.append(`<option value="${ambito}">${ambito}</option>`);
    });
}

// Función para filtrar y actualizar la tabla y los badges de filtros activos
function actualizarTablaYFiltros() {
    const marco = $('#filtro-marco').val();
    const tipo = $('#filtro-tipo').val();
    const ambito = $('#filtro-ambito').val();

    // Destruye la instancia actual de DataTables si existe
    if (tabla) {
        tabla.destroy();
    }

    // Filtra la data original con los selectores
    let filteredData = originalData.filter(d => {
        return (marco === '' || d['Marco normativo y público'] === marco) &&
               (tipo === '' || d['TipoMarco'] === tipo) &&
               (ambito === '' || d['Ámbito de aplicación'].includes(ambito));
    });

    // Re-inicializa DataTables con la data filtrada
    tabla = $('#tabla-datos').DataTable({
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
            dataSrc: '0' // Agrupar por columna 0: Marco normativo y público
        },
        data: filteredData.map(d => {
            const enlace = d.EnlaceUrl_TipoMarco && d.EnlaceUrl_TipoMarco !== '#' ? d.EnlaceUrl_TipoMarco : '#';
            return [
                d['Marco normativo y público'],
                `<a href="${enlace}" target="_blank">${d['TipoMarco']}</a>`,
                `<div class='oferta-format oferta-truncada' data-fulltext="${d.Descripción}">${d.Descripción.substring(0, 150).replace(/\n/g, '<br>')}... <a href="#" class="ver-mas" data-column="Descripción">Ver más</a></div>`,
                `<div class='oferta-format oferta-truncada' data-fulltext="${d['Ámbito de aplicación']}">${d['Ámbito de aplicación'].substring(0, 100).replace(/\n/g, '<br>')}... <a href="#" class="ver-mas" data-column="Ámbito de aplicación">Ver más</a></div>`
            ];
        })
    });

    // Sincronizar el campo de búsqueda global con la búsqueda de DataTables
    $('#searchBox').off('keyup').on('keyup', function() {
        tabla.search(this.value).draw();
    });

    actualizarFiltrosActivos(marco, tipo, ambito);
}

// Función para actualizar los badges de filtros activos
function actualizarFiltrosActivos(marco, tipo, ambito) {
    const badgesContainer = $('#active-filters-badges');
    badgesContainer.empty();

    if (marco) {
        badgesContainer.append(`<span class="badge bg-primary me-2">Marco: ${marco}</span>`);
    }
    if (tipo) {
        badgesContainer.append(`<span class="badge bg-info text-dark me-2">Instrumento: ${tipo}</span>`);
    }
    if (ambito) {
        badgesContainer.append(`<span class="badge bg-success me-2">Ámbito: ${ambito}</span>`);
    }
}

// Bloque principal de ejecución cuando el DOM está listo
$(document).ready(async function () {
    originalData = await fetchData(); // Cargar la data al inicio

    if (originalData.length > 0) {
        cargarOpciones(originalData);
        actualizarTablaYFiltros(); // Inicializar la tabla y filtros
    } else {
        $('#tabla-datos tbody').html('<tr><td colspan="4" class="text-center">No se pudieron cargar los datos o no hay datos disponibles.</td></tr>');
    }

    // Eventos de cambio para los selectores de filtro
    $('#filtro-marco').on('change', function () {
        actualizarTablaYFiltros();
        // Cuando cambia Marco, re-popular Tipo y Ámbito con las opciones relevantes
        const marcoSeleccionado = $(this).val();
        let filteredByMarco = marcoSeleccionado ? originalData.filter(d => d['Marco normativo y público'] === marcoSeleccionado) : originalData;
        
        const tipos = [...new Set(filteredByMarco.map(item => item['TipoMarco']))];
        populateSelect($('#filtro-tipo'), tipos, 'Seleccione un Instrumento');
        
        const ambitos = [...new Set(filteredByMarco.flatMap(item => item['Ámbito de aplicación'].split('\n')).map(s => s.trim()).filter(Boolean))];
        populateSelect($('#filtro-ambito'), ambitos, 'Seleccione un Ámbito');

        $('#filtro-tipo').val(''); // Resetear tipo
        $('#filtro-ambito').val(''); // Resetear ámbito
    });

    $('#filtro-tipo').on('change', function () {
        actualizarTablaYFiltros();
        // Cuando cambia Tipo, re-popular Ámbito con las opciones relevantes
        const marcoSeleccionado = $('#filtro-marco').val();
        const tipoSeleccionado = $(this).val();

        let filtered = originalData.filter(d => {
            return (marcoSeleccionado === '' || d['Marco normativo y público'] === marcoSeleccionado) &&
                   (tipoSeleccionado === '' || d['TipoMarco'] === tipoSeleccionado);
        });

        const ambitos = [...new Set(filtered.flatMap(item => item['Ámbito de aplicación'].split('\n')).map(s => s.trim()).filter(Boolean))];
        populateSelect($('#filtro-ambito'), ambitos, 'Seleccione un Ámbito');
        $('#filtro-ambito').val(''); // Resetear ámbito
    });

    $('#filtro-ambito').on('change', function () {
        actualizarTablaYFiltros();
    });


    // Evento para el botón de Reiniciar Filtros
    $('#reset-filters').on('click', function () {
        $('#filtro-marco').val('');
        $('#filtro-tipo').val('');
        $('#filtro-ambito').val('');
        cargarOpciones(originalData); // Recargar todas las opciones
        actualizarTablaYFiltros(); // Actualizar tabla sin filtros
        $('#searchBox').val(''); // Limpiar también la búsqueda global
    });

    // Evento para el modal de "Ver más"
    $('#tabla-datos tbody').on('click', '.ver-mas', function(e) {
        e.preventDefault();
        const fullText = $(this).parent().data('fulltext');
        const column = $(this).data('column');
        $('#modalTitle').text(`Detalles de ${column}`);
        $('#modalBody').html(fullText.replace(/\n/g, '<br>'));
        var myModal = new bootstrap.Modal(document.getElementById('detailModal'));
        myModal.show();
    });

    // Helper para popular selects (reemplaza la función original populateSelect)
    function populateSelect(selectElement, items, placeholder) {
        const uniqueItems = [...new Set(items)].filter(Boolean).sort();
        selectElement.empty().append(`<option value="">${placeholder}</option>`);
        uniqueItems.forEach(item => {
            selectElement.append(`<option value="${item}">${item}</option>`);
        });
    }
});