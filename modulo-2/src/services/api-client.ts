// Interface de respuesta de la API
export interface RespuestaAPI<T> {
  datos: T;
  status: number;
  mensaje: string;
}

// Función para obtener recurso de la API
export function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

          if(!endpoint) {
            reject(new Error("Endpoint no valido"));
            return;
          }

          resolve({
                datos: {} as T,
                status: 200,
                mensaje: "Operación exitosa"
            });
        }, 1000);
    });
}