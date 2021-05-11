import { RABGridBorderColors, RABGridColorThemes, RABGridEditComponents, RABGridPaginationColorThemes } from "./rab-grid.enum";

export interface RABGridConfig{
    /** Set true to enable responsiveness. Default: false */
    responsive?: boolean
    /** Theme configurations of the grid */
    theme?: RABGridTheme
    /** Pagination configurations */
    pagination?: RABGridPagination
    /** Page configurations */
    page?: RABGridPage
    /** Header configurations */
    header?: RABGridHeader
    /** Data configurations */
    data?: RABGridData
    /** Footer configurations */
    footer?: RABGridFooter
}

interface RABGridTheme{
    /** Set true to enable table strips. Default: false */
    striped?: boolean
    /** Change color theme of the grid. */
    color_theme?: RABGridColorThemes,
    /** Set true to enable hoverable strips. Default: false */
    hoverable?: boolean
    /** Border configurations */
    border?: RABGridThemeBorder
    /** If required to add custom classes to the table, mention them here. Seperate them by a space. */
    custom_classes?: string
}

interface RABGridThemeBorder{
    /** Set true to enable borders. Default: false */
    enable: boolean
    color_theme?: RABGridBorderColors
}

interface RABGridPagination{
    /** Set true to enable pagination. Default: false */
    enable?: boolean
    /** Set page size. Default: 10 */
    page_size?: number
    /** Pagination Theme Configurations */
    theme?: RABGridPaginationTheme
}

interface RABGridPaginationTheme{
    color_theme?: RABGridPaginationColorThemes
}

interface RABGridPage{
    /** Set true if want to enbale page edit. Default: false */
    edit: boolean
}

interface RABGridHeader{
    /** Place header names as in the data object here if want to reorder headers */
    order: Array<string>;
}

interface RABGridData{
    /** Set data length if want to set a custom data size (Pagination purposes). Default: 0 */
    length?: number
    /** Set false to hide total data count. Default: true */
    total?: boolean
    /** Data export settings */
    export?: RABGridDataExport
    /** Columns configurations */
    columns?: RABGridDataColumns
    rows?: RABGridDataRows
}

interface RABGridDataExport{
    /** Set true to enable exports. Default: false */
    enable?: boolean
    /** Export types (pdf, xlsx, csv) supported. Default: ['pdf', 'xlsx', 'csv'] */
    types?: Array<string>
}

interface RABGridDataColumns{
    /** Put the name of the column as in the dataset */
    [key: string]: RABGridDataColumn
}

interface RABGridDataColumn{
    /** Set false to disable editing for this column. Page edit or row edit should be enabled this to work. Default: true */
    edit?: boolean
    /** Set true to enable sorting for this column. Default: false */
    sort?: boolean
    /** Set column width in (px, %, vw, em, vh, rem). Default: auto */
    size?: string
    /** Set custom column header name */
    name?: string
    /** Input configurations to be used in Edits */
    input?: RABGridDataColumnInput
    /** Set true to bold the entire column. Default: false */
    bold?: boolean
    /** Set column prefix */
    prefix?: string
    /** Set column suffix */
    suffix?: string
    /** Set true to separate each 3 digits by a comma (Applicable for numbers only). Default: false */
    commas?: boolean
    /** Set a value to round up numbers to decimal points. Default: 0 */
    round?: number
    /** Align column to left, right or center */
    align?: string
    /** Link configurations */
    link?: RABGridDataColumnLink
}

interface RABGridDataColumnInput{
    /** Editing Component for this column (Optional, Default Text Input) */
    component?: RABGridEditComponents
    /** Editing options to be used in Dropdown */
    options?: Array<RABGridDataColumnInputOptions>
}

interface RABGridDataColumnInputOptions{
    /** Return value when selected (Optional). If not included, name will be returned */
    value?: any
    /** Display value in the dropdown */
    name: string
}

interface RABGridDataColumnLink{
    /** Set true to disable links. Default: false */
    enable: boolean
    /** Link click callback(data, _this=null) */
    callback: (data: any, _this:any) => {}
    /** Send the origin of the callback function to be used as 'this' inside the function */
    callbackorigin?: any
}

interface RABGridDataRows{
    /** Set true to enable row edit. Default: false */
    edit?: boolean
    /** Set true to enable row delete. Default: false */
    delete?: boolean
    /** Set true to enable row add. Default: false */
    add?: boolean
    /** Last row configurations */
    last_row?: RABGridDataRowsLastRow
}

interface RABGridDataRowsLastRow{
    /** Set to true if want to bold the last row. Default: false */
    bold: boolean
}

interface RABGridFooter{
    /** Set to true to enable footer. Default: false */
    enable: boolean
}