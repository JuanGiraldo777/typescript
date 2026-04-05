## Uso de `interface` para entidades
Se usó `interface` para modelar entidades como `Estudiante` y `Asignatura` porque representa bien la forma de un objeto. Además, permite extender modelos de manera clara si en el futuro hace falta añadir más campos.

## Uso de `type` para `EstadoMatricula`
Se usó `type` para `EstadoMatricula` porque aquí solo necesitamos unir varios valores concretos: `MatriculaActiva`, `MatriculaSuspendida` y `MatriculaFinalizada`. En este caso, `type` es más simple y deja claro que solo se puede elegir una de esas opciones.

## Uso de genéricos en la API
Los genéricos como `RespuestaAPI<T>` y `obtenerRecurso<T>` sirven para reutilizar la misma lógica con distintos datos. Así, la estructura de la respuesta y la función de red funcionan igual para cualquier recurso, pero sin perder el tipo real de la información.