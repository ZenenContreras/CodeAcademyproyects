
const MensajesMisticos = () =>{
    const Sujeto = [
        'El universo', 
        'Los Astros', 
        'Tu personaje interior', 
        'El destino']
    const Mensaje = [
        'dice que deberias de escuchar.', 
        'manifiesta tu nuevo comienzo.', 
        'dice que todo estara bien siempre y cuando estes tranquil@.', 
        'dice que confies en tus capaciddades.']
    const Conclusion = [
        "Mantén tu mente abierta a los secretos del cosmos.",
        "Sigue el camino del sol y encontrarás respuestas.",
        "No ignores los signos o perderás una gran oportunidad.",
        "Escucha tu intuición y hallarás la verdad."]

    const SujetoRandom = Sujeto[Math.floor(Math.random() * Sujeto.length)]
    const MensajeRandom = Mensaje[Math.floor(Math.random() * Mensaje.length)]
    const ConclusionRandom = Conclusion[Math.floor(Math.random() * Conclusion.length)]

    console.log(`El mensaje del dia es: ${SujetoRandom} ${MensajeRandom} ${ConclusionRandom}`)
}

MensajesMisticos()






