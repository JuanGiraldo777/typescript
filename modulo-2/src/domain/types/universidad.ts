// Interface de Estudiante
export interface Estudiante {
  readonly id: string;
  nombreCompleto: string;
  edad: number;
  carrera: string;
  semestre: string;
}

// Interface de Asignatura
export interface Asignatura {
  readonly id: string;
  codigoCarrera: string;
  carrera: string;
  departamento: string;
  semestre: string;
  estudiantes: Estudiante[];
}

// Interfaces para estado de las matriculas
export interface MatriculaActiva {
  tipo: "ACTIVA";
  arrayAsignaturas: Asignatura[];
}
export interface MatriculaSuspendida {
  tipo: "SUSPENDIDA";
  motivoSuspension: string;
}
export interface MatriculaFinalizada {
  tipo: "FINALIZADA";
  notaMedia: number;
}

// Type de estado de matricula
export type EstadoMatricula =
  | MatriculaActiva
  | MatriculaSuspendida
  | MatriculaFinalizada;

// Funcion para generar reporte de matricula
export function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case "ACTIVA":
      return `Matricula Activa con: ${estado.arrayAsignaturas.length} asignaturas inscritas.`;
    case "SUSPENDIDA":
      return `Matricula Suspendida por: ${estado.motivoSuspension}`;
    case "FINALIZADA":
      return `Matricula Finalizada con: Nota media: ${estado.notaMedia}`;

    default:
      const _exhaustivo: never = estado;
      throw new Error(`Estado no manejado: ${_exhaustivo}`);
  }
}
