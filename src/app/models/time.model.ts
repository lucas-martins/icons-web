import { Pais } from "./pais.model";

export interface Time {
  id: number;
  nome: string;
  escudo: string | null;
  pais?: number | Pais;
}

export interface PageResponseDTO<T> {
  pagina: number;
  tamanho: number;
  totalPaginas: number;
  totalRegistros: number;
  data: T[];
}
