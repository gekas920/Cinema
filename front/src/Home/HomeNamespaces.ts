
export interface TableRow{
    title:string,
    actors:string,
    description:string,
    genres:string
    link:string,
    createdBy:string,
    tenant:string,
    done?:boolean,
    send?:boolean,
    error?:boolean
}
export interface TableHeaders{
    title:string,
    field:string
}
export interface FilmTableProps {}
export interface FilmTableState {
    columns:TableHeaders[],
    current:TableRow,
    data:TableRow[],
    open:boolean,
    openRow:boolean
}