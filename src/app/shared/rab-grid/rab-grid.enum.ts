export enum RABGridEditComponents{
    TextInput,
    EmailInput,
    DropDownInput,
}

export enum RABGridProperties{
    Responsive, Stripped,

    PaginationEnable, PageSize,

    PageEdit,
    
    HeaderOrder,

    DataLength, DataTotalShow,

    ExportEnable, ExportType,

    RowEdit, RowDelete, RowAdd, LastRowBold,
    
    ColumnEdit, ColumnSort, ColumnSize, ColumnName, 
    ColumnInputComponent, ColumnInputOptions, ColumnInputOptionName, ColumnInputOptionValue,
    ColumnBold, ColumnPrefix, ColumnSuffix, ColumnCommaSeparate, ColumnRound, ColumnAlign, ColumnLinkEnable, ColumnLinkCallback, ColumnLinkCallbackOrigin,

    FooterEnable
}