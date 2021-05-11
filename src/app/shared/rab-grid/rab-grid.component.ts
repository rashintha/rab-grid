import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RABGridEditComponents, RABGridProperties } from './rab-grid.enum';

@Component({
  selector: 'rab-grid',
  templateUrl: './rab-grid.component.html',
  styleUrls: ['./rab-grid.component.css']
})
export class RabGridComponent implements OnInit {

  //Private
  private _data: Array<Object> = []

  //Inputs
  @Input() config: any = null

  @Input() set data(value: Array<Object>){
    if(this._data.length > value.length){
      this.page = 1
    }
    
    this._data = value

    if(this.getProperty(RABGridProperties.PaginationEnable)){
      this.page_numbers = [];

      let pages_c = (this.getProperty(RABGridProperties.DataLength) ? this.getProperty(RABGridProperties.DataLength) / this.getProperty(RABGridProperties.PageSize) : value.length / this.getProperty(RABGridProperties.PageSize));

      if((this.getProperty(RABGridProperties.DataLength) ? this.getProperty(RABGridProperties.DataLength) % this.getProperty(RABGridProperties.PageSize) : value.length % this.getProperty(RABGridProperties.PageSize)) > 0){
        pages_c += 1;
      }

      for(let i = 1; i <= pages_c; i++){
        this.page_numbers.push(i)
      }

      this.change_page(this.page)
    }
  }
  get data(): Array<Object>{
    return this._data;
  }

  //Outputs
  @Output() pageChanged = new EventEmitter<number>()
  @Output() cellClick = new EventEmitter<Object>()
  @Output() deleteClick = new EventEmitter<Object>()
  @Output() saveClick = new EventEmitter<Object>()

  //Variables
  rabGridProperties = RABGridProperties
  rabGridEditComponents = RABGridEditComponents

  page: number = 1
  page_numbers: Array<number> = []
  page_data: Array<Object> = []
  custom_page_size: number = 10
  
  download_mode: boolean = false
  
  editing_rows: Array<Object> = []
  editing_row: Array<Object> = []
  editing_all: Boolean = false
  non_edited_row: Array<Object> = []
  
  add_new_row: Boolean = false
  new_row: Object = {}

  deleting_row: Object = {};
  
  sort_by: string = ''
  sort_data: Array<Object> = []
  sort_direction: number = 0

  constructor() { }

  ngOnInit(): void{
  }

  getProperty(property: RABGridProperties, columnName: string = '', index: number = 0): any{
    switch(property){
      case RABGridProperties.Responsive: {
        return this.config && this.config.responsive ? true : false;
      }

      case RABGridProperties.Stripped: {
        return this.config && this.config.stripped ? true : false;
      }

      //Pagination
      case RABGridProperties.PaginationEnable: {
        return this.config && this.config.pagination && this.config.pagination.enable ? true : false;
      }

      case RABGridProperties.PageSize: {
        return this.download_mode ? this.data.length : this.config && 
          this.config.pagination && 
          this.config.pagination.page_size && 
          this.config.pagination.page_size > 0 ? 
            this.custom_page_size == this.config.pagination.page_size ? 
              this.config.pagination.page_size : this.custom_page_size == 0 ? 
                this.getProperty(RABGridProperties.DataLength) ? 
                  this.getProperty(RABGridProperties.DataLength) : this.data.length : 
              this.custom_page_size : 
          this.custom_page_size == 0 ? 
            this.getProperty(RABGridProperties.DataLength) ? 
              this.getProperty(RABGridProperties.DataLength) : this.data.length : 
            this.custom_page_size;
      }

      //Page
      case RABGridProperties.PageEdit: {
        return this.config && this.config.page && 
          this.config.page.edit ? true : false;
      }

      //Header
      case RABGridProperties.HeaderOrder: {
        if(this.config && this.config.header && this.config.header.order && this.config.header.order.length > 0){
          return this.config.header.order;
        }else if(this.data.length){
          return Object.keys(this.data[0])
        }else{
          return null;
        }
      }

      //Data
      case RABGridProperties.DataLength: {
        return this.config && this.config.data && 
          this.config.data.length && 
          this.config.data.length > 0 ? this.config.data.length : 0;
      }

      case RABGridProperties.DataTotalShow: {
        return this.config && this.config.data && 
          this.config.data.total == false ? false : true;
      }

      //Data -> Export
      case RABGridProperties.ExportEnable: {
        return this.config && this.config.data && 
          this.config.data.export && 
          this.config.data.export.enable ? true : false;
      }

      case RABGridProperties.ExportType: {
        if(this.config && this.config.data && this.config.data.export && this.config.data.export.type && this.config.data.export.type.length){
          let return_arr: Array<Object> = [];

          this.config.data.export.type.forEach((type: string): void => {
            if(type.toLowerCase() === "pdf"){
              return_arr.push({
                name: "PDF File",
                type: 'pdf',
                icon: 'fas fa-file-pdf'
              });
            }

            if(type.toLowerCase() === "xlsx"){
              return_arr.push({
                name: "Excel File",
                type: 'xlsx',
                icon: 'fas fa-file-excel'
              });

              if(type.toLowerCase() === "csv"){
                return_arr.push({
                  name: "CSV File",
                  type: 'csv',
                  icon: 'fas fa-file-csv'
                });
              }
            }
          });

          return return_arr;
        }else{
          return [{
            name: "PDF File",
            type: 'pdf',
            icon: 'fas fa-file-pdf'
          },{
            name: "Excel File",
            type: 'xlsx',
            icon: 'fas fa-file-excel'
          },{
            name: "CSV File",
            type: 'csv',
            icon: 'fas fa-file-csv'
          }];
        }
      }

      //Data -> Columns
      case RABGridProperties.ColumnEdit: {
        return this.config && this.config.data && 
          this.config.data.columns && 
          columnName && columnName !== '' &&
          this.config.data.columns[columnName] && 
          this.config.data.columns[columnName].edit != null ? this.config.data.columns[columnName].edit : true;
      }

      case RABGridProperties.ColumnSort: {
        return this.config && this.config.data && 
          this.config.data.columns && 
          columnName && columnName !== '' &&
          this.config.data.columns[columnName] && 
          this.config.data.columns[columnName].sort ? true : false;
      }

      case RABGridProperties.ColumnSize: {
        return this.config && this.config.data && 
          this.config.data.columns && 
          columnName && columnName !== '' &&
          this.config.data.columns[columnName] && 
          this.config.data.columns[columnName].size ? this.config.data.columns[columnName].size : 'auto';
      }

      case RABGridProperties.ColumnName: {
        return this.config && this.config.data && 
          this.config.data.columns && 
          columnName && columnName !== '' &&
          this.config.data.columns[columnName] && 
          this.config.data.columns[columnName].name ? this.config.data.columns[columnName].name : null;
      }

      case RABGridProperties.ColumnInputComponent: {
        return this.config && this.config.data && 
          this.config.data.columns && 
          columnName && columnName !== '' &&
          this.config.data.columns[columnName] && 
          this.config.data.columns[columnName].input && 
          this.config.data.columns[columnName].input.component ? this.config.data.columns[columnName].input.component : RABGridEditComponents.TextInput;
      }

      case RABGridProperties.ColumnInputOptions: {
        return this.config && this.config.data && 
          this.config.data.columns && 
          columnName && columnName !== '' &&
          this.config.data.columns[columnName] && 
          this.config.data.columns[columnName].input && 
          this.config.data.columns[columnName].input.options ? this.config.data.columns[columnName].input.options : [];
      }

      case RABGridProperties.ColumnInputOptionName: {
        return this.config && this.config.data && 
          this.config.data.columns && 
          columnName && columnName !== '' &&
          this.config.data.columns[columnName] && 
          this.config.data.columns[columnName].input && 
          this.config.data.columns[columnName].input.options &&
          this.config.data.columns[columnName].input.options[index] && 
          this.config.data.columns[columnName].input.options[index].name ? this.config.data.columns[columnName].input.options[index].name : null;
      }

      case RABGridProperties.ColumnInputOptionValue: {
        return this.config && this.config.data && 
          this.config.data.columns && 
          columnName && columnName !== '' &&
          this.config.data.columns[columnName] && 
          this.config.data.columns[columnName].input && 
          this.config.data.columns[columnName].input.options &&
          this.config.data.columns[columnName].input.options[index] && 
          this.config.data.columns[columnName].input.options[index].value ? this.config.data.columns[columnName].input.options[index].value : this.getProperty(RABGridProperties.ColumnInputOptionName, columnName, index);
      }

      case RABGridProperties.ColumnBold: {
        return this.config && this.config.data && this.config.data.columns && columnName && columnName !== '' && this.config.data.columns[columnName] && this.config.data.columns[columnName].bold ? true : false;
      }

      case RABGridProperties.ColumnPrefix: {
        return this.config && this.config.data && this.config.data.columns && columnName && columnName !== '' && this.config.data.columns[columnName] && this.config.data.columns[columnName].prefix ? this.config.data.columns[columnName].prefix : null;
      }

      case RABGridProperties.ColumnSuffix: {
        return this.config && this.config.data && this.config.data.columns && columnName && columnName !== '' && this.config.data.columns[columnName] && this.config.data.columns[columnName].suffix ? this.config.data.columns[columnName].suffix : null;
      }

      case RABGridProperties.ColumnCommaSeparate: {
        return this.config && this.config.data && this.config.data.columns && columnName && columnName !== '' && this.config.data.columns[columnName] && this.config.data.columns[columnName].commas ? true : false;
      }

      case RABGridProperties.ColumnRound: {
        return this.config && this.config.data && this.config.data.columns && columnName && columnName !== '' && this.config.data.columns[columnName] && this.config.data.columns[columnName].round ? this.config.data.columns[columnName].round : 0;
      }

      case RABGridProperties.ColumnAlign: {
        return this.config && this.config.data && this.config.data.columns && columnName && columnName !== '' && this.config.data.columns[columnName] && this.config.data.columns[columnName].align ? this.config.data.columns[columnName].align : 'left';
      }

      case RABGridProperties.ColumnLinkEnable: {
        return this.config && this.config.data && this.config.data.columns && columnName && columnName !== '' && this.config.data.columns[columnName] && this.config.data.columns[columnName].link && this.config.data.columns[columnName].link.enable ? true : false;
      }

      case RABGridProperties.ColumnLinkCallback: {
        return this.config && this.config.data && this.config.data.columns && columnName && columnName !== '' && this.config.data.columns[columnName] && this.config.data.columns[columnName].link && this.config.data.columns[columnName].link.callback ? this.config.data.columns[columnName].link.callback : (data: any): void => {};
      }

      case RABGridProperties.ColumnLinkCallbackOrigin: {
        return this.config && this.config.data && this.config.data.columns && columnName && columnName !== '' && this.config.data.columns[columnName] && this.config.data.columns[columnName].link && this.config.data.columns[columnName].link.callbackorigin ? this.config.data.columns[columnName].link.callbackorigin : null;
      }

      //Data -> Rows
      case RABGridProperties.RowEdit: {
        return this.config && this.config.data && this.config.data.rows && this.config.data.rows.edit ? true : false;
      }

      case RABGridProperties.RowDelete: {
        return this.config && this.config.data && this.config.data.rows && this.config.data.rows.delete ? true : false;
      }

      case RABGridProperties.RowAdd: {
        return this.config && this.config.data && this.config.data.rows && this.config.data.rows.add ? true : false;
      }

      case RABGridProperties.LastRowBold: {
        return this.config && this.config.data && this.config.data.rows && this.config.data.rows.last_row && this.config.data.rows.last_row.bold ? true : false;
      }

      //Footer
      case RABGridProperties.FooterEnable: {
        return this.config && this.config.footer && this.config.footer.enable ? true : false;
      }

      default: {
        return null;
      }
    }
  }

  change_page(page: number = 1): void{
    this.page = page;
    this.editing_row = [];

    this.page_data = [];
    
      
    for(let i = this.getProperty(RABGridProperties.PageSize) * this.page - this.getProperty(RABGridProperties.PageSize); i < (this.data.length > this.getProperty(RABGridProperties.PageSize) ? this.data.length > this.getProperty(RABGridProperties.PageSize) * this.page ? this.getProperty(RABGridProperties.PageSize) * this.page : this.data.length : this.data.length); i++){
      this.page_data.push(this.sort_by ? this.sort_data[i] : this.data[i])
    }

    if(this.pageChanged.observers.length && this.getProperty(RABGridProperties.DataLength) && this.getProperty(RABGridProperties.PageSize) * this.getProperty(RABGridProperties.PageSize)){
      this.pageChanged.emit(this.page)
    }
  }

  sort(sort_by: string = ''): void{
    if(sort_by && sort_by !== ''){
      if(this.sort_by == sort_by){
        this.sort_direction++;
  
        if(this.sort_direction >= 3){
          this.sort_direction = 0;
          this.sort_by = '';
        }
      }else{
        this.sort_by = sort_by;
        this.sort_direction = 1;
      }
  
      this.sort_data = this.data.slice();
      this.sort_data.sort((a: any, b: any) => {
        if(typeof a[sort_by] == "string"){
          return ('' + a[sort_by]).localeCompare(b[sort_by]);
        }
        return a[sort_by] - b[sort_by];
      })
  
      if(this.sort_direction == 2){
        this.sort_data.reverse()
      }
  
      this.change_page(this.page)
    }
  }

  displayValue(data: any, key: string): string{
    let return_val = data[key];

    if(data && data[key] && this.config && this.config.data && this.config.data.columns && this.config.data.columns[key]){
      if(this.getProperty(RABGridProperties.ColumnRound, key) > 0 && !isNaN(data[key])){
        return_val = data[key].toFixed(this.getProperty(RABGridProperties.ColumnRound, key))
      }

      if(this.getProperty(RABGridProperties.ColumnCommaSeparate, key) && !isNaN(data[key])){
        return_val = return_val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }

      if(this.getProperty(RABGridProperties.ColumnPrefix, key)){
        return_val = `${this.getProperty(RABGridProperties.ColumnPrefix, key)}${return_val}`
      }

      if(this.getProperty(RABGridProperties.ColumnSuffix, key)){
        return_val = `${return_val}${this.getProperty(RABGridProperties.ColumnSuffix, key)}`
      }
    }

    return return_val;
  }

  edit_row(row: any): void{
    this.cancel_edit()
    this.editing_row = row;
    this.non_edited_row = JSON.parse(JSON.stringify(row));
  }

  cancel_edit(): void{
    for(let key in this.editing_row){
      this.editing_row[key] = this.non_edited_row[key];
    }

    this.editing_row = [];
    this.non_edited_row = [];
  }

  delete_row(row: any): void{
    this.deleting_row = row;
  }

  delete_yes(): void{
    if(this.deleteClick.observers.length){
      this.deleteClick.emit(this.deleting_row)
    }

    this.delete_no()
  }

  delete_no(): void{
    this.deleting_row = {};
  }

  save_row(row: any): void{
    if(this.saveClick.observers.length){
      this.saveClick.emit({
        old_row: row,
        new_row: this.editing_row
      })

      this.editing_row = [];
      this.non_edited_row = [];
    }
  }

  emit_cellClick(row: any, key: string): void{
    if(this.cellClick.observers.length){
      this.cellClick.emit({row: row, cell: {key: key, value: row[key]}})
    }
  }

  objToAny(value: Object): any{
    return value
  }

}
