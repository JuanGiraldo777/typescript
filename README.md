## 1. Título y descripción breve del proyecto

# Proyecto TypeScript DAM - Dos laboratorios sin frameworks

Este repositorio reúne dos laboratorios hechos en TypeScript puro, sin frameworks, como práctica de empresa en DAM. En el primer módulo trabajo lógica matemática y en el segundo modelo datos y servicios con tipado fuerte.

## 2. Tecnologías utilizadas

- TypeScript con modo strict.
- tsx para ejecución en desarrollo.
- tsc para compilación a JavaScript.

## 3. Estructura del proyecto

- modulo-1/ con src/ dist/ docs/ y tsconfig.json.
- modulo-2/ con src/domain/types/ src/services/ y docs/.

## 4. Módulo 1 - Lógica pura (math-utils.ts)

En el módulo 1 implementé utilidades matemáticas simples y tipadas:

- calcularMedia:
	- Usa reduce para sumar y divide entre length.
	- Devuelve number | null si el array está vacío.
- calcularMediana:
	- Usa slice y sort para ordenar sin tocar el array original.
	- Maneja casos pares e impares.
	- Devuelve number | null.
- filtrarAtipicos:
	- Usa filter y Math.abs con un límite de distancia respecto a la media.

## 5. Módulo 2 - Arquitectura de datos

En el módulo 2 trabajé diseño de tipos, estado y acceso a recursos:

- Interfaces Estudiante y Asignatura con readonly en IDs.
- Unión Discriminada EstadoMatricula con tres estados:
	- MatriculaActiva
	- MatriculaSuspendida
	- MatriculaFinalizada
- Función generarReporte con switch, never y fail fast.
- Interfaz genérica RespuestaAPI<T>.
- Función obtenerRecurso<T> con Promesas, resolve y reject.

## 6. Cómo ejecutar cada módulo

- Módulo 1:
	- cd modulo-1 && npx tsx src/index.ts
- Módulo 2:
	- cd modulo-2 && npx tsx src/index.ts
- Compilar:
	- npx tsc --project modulo-1/tsconfig.json

## 7. Aprendizajes clave

- Diferencia entre interface y type:
	- interface me sirve muy bien para contratos de objetos y ampliaciones.
	- type me da más flexibilidad para uniones y composiciones.
- Por qué never es mejor que un simple throw:
	- never ayuda a verificar exhaustividad en tiempo de compilación y evita estados no controlados.
- Por qué Partial<T> en vez de any:
	- Partial<T> mantiene seguridad de tipos y any rompe ese control.
- Diferencia entre tsx y tsc:
	- tsx es para ejecutar rápido en desarrollo.
	- tsc es para compilar y generar JavaScript final.
