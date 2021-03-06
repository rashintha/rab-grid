export enum RABGridEditComponents{
    TextInput,
    EmailInput,
    DropDownInput,
}

export enum RABGridColorThemes{
    Default,
    Primary,
    Secondary,
    Success,
    Danger,
    Warning,
    Info,
    Light,
    Dark
}

export enum RABGridBorderColors{
    Default,
    Primary,
    Secondary,
    Success,
    Danger,
    Warning,
    Info,
    Light,
    Dark,
    White,
    BorderLess
}

export enum RABGridPaginationColorThemes{
    Default,
    Primary,
    Secondary,
    Success,
    Danger,
    Warning,
    Info,
    Light,
    Dark,
    White
}

export enum RABGridProperties{
    Responsive, 
    
    ThemeStriped, ThemeColorTheme, ThemeHoverable, ThemeBorderEnable, ThemeBorderColorTheme, ThemeCustomClasses,

    PaginationEnable, PageSizes, SelectedPageSize, PaginationThemeColorTheme,

    PageEdit,
    
    HeaderOrder,

    DataLength, DataTotalShow,

    ExportEnable, ExportTypes,

    RowEdit, RowDelete, RowAdd, LastRowBold,
    
    ColumnEdit, ColumnSort, ColumnSize, ColumnName, 
    ColumnInputComponent, ColumnInputOptions, ColumnInputOptionName, ColumnInputOptionValue,
    ColumnBold, ColumnPrefix, ColumnSuffix, ColumnCommaSeparate, ColumnRound, ColumnAlign, ColumnLinkEnable, ColumnLinkCallback, ColumnLinkCallbackOrigin,

    FooterEnable
}