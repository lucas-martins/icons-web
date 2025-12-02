export interface Time {
  id: number;
  nome: string;
  escudo: string | null;
}

export interface PageResponseDTO<T> {
  pagina: number;
  tamanho: number;
  totalPaginas: number;
  totalRegistros: number;
  data: T[];
}
