export interface TableColumn {
  key: string | ((field: any) => string);
  name: string;
}
