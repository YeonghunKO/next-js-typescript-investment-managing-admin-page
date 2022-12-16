interface PaginationType {
  totalPage: number | false | undefined;
  currentPage: number;
  onPage: (pageNum: number) => void;
}

export type { PaginationType };
