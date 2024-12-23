document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario-contacto");
  
    formulario.addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
  
      // Obtener los valores de los campos del formulario
      const nombre = document.getElementById("nombre").value;
      const correo = document.getElementById("correo").value;
      const mensaje = document.getElementById("mensaje").value;
  
      // Validar que los campos no estén vacíos
      if (!nombre || !correo || !mensaje) {
        alert("Por favor, completa todos los campos.");
        return;
      }
  
      try {
        // Enviar los datos al servidor mediante una solicitud fetch
        const respuesta = await fetch("https://tu-servidor.com/api/contacto", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nombre, correo, mensaje }),
        });
  
        if (respuesta.ok) {
          alert("Mensaje enviado correctamente.");
          formulario.reset(); // Limpiar el formulario
        } else {
          alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
        }
      } catch (error) {
        console.error("Error al enviar el mensaje:", error);
        alert("No se pudo enviar el mensaje. Revisa tu conexión a internet.");
      }
    });
  });