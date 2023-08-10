const ocupacionEl = document.getElementById('ocupacion');
const estudioEl = document.getElementById('estudio');
const cuestionarioDiv = document.querySelector('.cuestionario');
const emcy_trEl = document.getElementById('emcy-tr');
const urgenciaEl = document.getElementById('urgencia');
const dialisisEl = document.getElementById('dialisis');
const dialisis_pregunta = document.getElementById('dialisis-pregunta');

ocupacionEl.addEventListener('change', mostrarCuestionario);
estudioEl.addEventListener('change', mostrarCuestionario);
urgenciaEl.addEventListener('change', verificarUrgencia);
dialisis_pregunta.addEventListener('change', verificarDialisis)

function mostrarCuestionario() {
    const ocupacion = ocupacionEl.value;
    const estudio = estudioEl.value;

    if (ocupacion !== '' && estudio !== '') {
        cuestionarioDiv.style.display = 'block';
        emcy_trEl.style.display= 'block';
        verificarUrgencia
    } else {
        cuestionarioDiv.style.display = 'none';
    }
}

function verificarUrgencia() {
    const ocupacion = ocupacionEl.value;
    const estudio = estudioEl.value;
    const resultUrgencia = urgenciaEl.value;

    if (ocupacion === 'tecnico-en-radiologia' && estudio === 'estudio-con-medio-de-contraste-yodado') {
        if (resultUrgencia === 'si') {
            alert('**Realizar estudio**\nRealice medidas generales:\nCorrija deshidratación/Sobrecarga\nControle choque\nUso de medio de contraste iso/hipo-osmolar\nSuspenda otros agentes nefrotóxicos (ej AINE)\nTiempo entre estudios contrastados ideal > de 40 horas\n Sin riezgo de crisis hipertensivas y TFGc < 30 ml/min/1,73m2: Suspender IECA/ARAii transitoriamente\nPreferir via radial para angiografía\nSuspender metformina si TFG < 30 ml/min/1.73m2\nRosuvastatina o atorvastatina a altas dosis si tiene indicación médica adicional de uso (riezgo cardiovascular)\nHidratación oral en ambulatorio sin contraindicación');
        }else{
            dialisisEl.style.display ='block'
            // const resultadoDialisis = dialisis_pregunta.value;
            // if (resultadoDialisis === 'si'){
            //     alert('**Realizar estudio**\nRealice medidas generales:\nCorrija deshidratación/Sobrecarga\nControle choque\nUso de medio de contraste iso/hipo-osmolar\nSuspenda otros agentes nefrotóxicos (ej AINE)\nTiempo entre estudios contrastados ideal > de 40 horas\n Sin riezgo de crisis hipertensivas y TFGc < 30 ml/min/1,73m2: Suspender IECA/ARAii transitoriamente\nPreferir via radial para angiografía\nSuspender metformina si TFG < 30 ml/min/1.73m2\nRosuvastatina o atorvastatina a altas dosis si tiene indicación médica adicional de uso (riezgo cardiovascular)\nHidratación oral en ambulatorio sin contraindicación');
            // }
            

        }
    }
}

dialisis_pregunta.addEventListener('change', verificarDialisis)

function verificarDialisis () {
    const resultadoDialisis = dialisis_pregunta.value;
    if (resultadoDialisis === 'si'){
        alert('**Realizar estudio**\nRealice medidas generales:\nCorrija deshidratación/Sobrecarga\nControle choque\nUso de medio de contraste iso/hipo-osmolar\nSuspenda otros agentes nefrotóxicos (ej AINE)\nTiempo entre estudios contrastados ideal > de 40 horas\n Sin riezgo de crisis hipertensivas y TFGc < 30 ml/min/1,73m2: Suspender IECA/ARAii transitoriamente\nPreferir via radial para angiografía\nSuspender metformina si TFG < 30 ml/min/1.73m2\nRosuvastatina o atorvastatina a altas dosis si tiene indicación médica adicional de uso (riezgo cardiovascular)\nHidratación oral en ambulatorio sin contraindicación');
    }
}

