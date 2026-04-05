## 1. Título y descripción breve del proyecto

# Proyecto de lógica matemática en TypeScript

Este proyecto es una práctica de DAM donde he creado desde cero una pequeña base de lógica matemática usando TypeScript puro, sin frameworks. La idea es tener funciones claras y tipadas para trabajar con datos numéricos y poder probarlas rápido en desarrollo.

## 2. Tecnologías utilizadas

- TypeScript con modo strict para detectar errores de tipos desde el principio.
- tsx para ejecutar archivos TypeScript directamente durante desarrollo.
- tsc para compilar el código TypeScript a JavaScript.

## 3. Configuración del proyecto

Para preparar el proyecto seguí estos pasos:

1. Inicializar npm:
   - npm init -y
2. Instalar dependencias de desarrollo:
   - npm install -D typescript tsx
3. Configurar tsconfig.json con opciones base:
   - strict: true
   - rootDir: ./src
   - outDir: ./dist

Con esta configuración el código fuente queda en src y el código compilado se genera en dist.

## 4. Módulo matemático math-utils.ts

En el archivo math-utils.ts implementé tres funciones principales:

- calcularMedia:
  - Suma todos los valores con reduce y divide entre length.
  - Si el array está vacío devuelve number | null, en este caso null.
- calcularMediana:
  - Hace una copia del array con slice() y luego ordena con sort().
  - Si hay cantidad impar devuelve el valor central.
  - Si hay cantidad par devuelve la media de los dos valores centrales.
  - Si el array está vacío también devuelve number | null, en este caso null.
- filtrarAtipicos:
  - Calcula la media del conjunto.
  - Usa filter y Math.abs para quedarse solo con valores que no se alejan más de un límite dado respecto a la media.

## 5. Ejecución y verificación

Para probar y comprobar el proyecto utilicé:

- Ejecutar en desarrollo:
  - npx tsx src/index.ts
- Compilar a JavaScript:
  - npx tsc

Después de compilar, se puede revisar la carpeta dist/ para ver el JavaScript generado.

## 6. Aprendizajes clave

- Por qué usar number | null en vez de devolver 0:
  - Porque 0 puede ser un resultado matemático real y null deja claro que no había datos suficientes para calcular.
- Por qué usar slice() antes de sort():
  - Porque sort() modifica el array original, y con slice() evito efectos secundarios en los datos de entrada.
- Diferencia entre tsx y tsc:
  - tsx me sirve para ejecutar rápido en desarrollo sin compilar manualmente.
  - tsc me sirve para generar JavaScript final listo para ejecutar o distribuir.
