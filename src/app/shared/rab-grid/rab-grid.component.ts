import { Component, Input, OnInit } from '@angular/core';
import { RABGridProperties } from './rab-grid.enum';

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
    // if(this._data.length > value.length){
    //   this.page = 1
    // }
    
    this._data = value

    // if(this.getProperty(CGridProperties.PaginationEnable)){
    //   this.page_numbers = [];

    //   let pages_c = (this.getProperty(CGridProperties.DataLength) ? this.getProperty(CGridProperties.DataLength) / this.getProperty(CGridProperties.PageSize) : value.length / this.getProperty(CGridProperties.PageSize));

    //   if((this.getProperty(CGridProperties.DataLength) ? this.getProperty(CGridProperties.DataLength) % this.getProperty(CGridProperties.PageSize) : value.length % this.getProperty(CGridProperties.PageSize)) > 0){
    //     pages_c += 1;
    //   }

    //   for(let i = 1; i <= pages_c; i++){
    //     this.page_numbers.push(i)
    //   }

    //   this.change_page(this.page)
    // }
  }
  get data(): Array<Object>{
    return this._data;
  }

  //Variables
  rabGridProperties = RABGridProperties

  constructor() { }

  ngOnInit(): void {
  }

  getProperty(property: RABGridProperties, columnName: string = '', index: number = 0): any{
    if(this.config){
      switch(property){
      //   case CGridProperties.Responsive: {
      //     return this.config.responsive ? true : false;
      //   }

      //   case CGridProperties.Stripped: {
      //     return this.config.stripped ? true : false;
      //   }

      //   //Pagination
      //   case CGridProperties.PaginationEnable: {
      //     return this.config.pagination && this.config.pagination.enable ? true : false;
      //   }

      //   case CGridProperties.PageSize: {
      //     return this.download_mode ? this.data.length : this.config.pagination && 
      //       this.config.pagination.page_size && 
      //       this.config.pagination.page_size > 0 ? 
      //         this.custom_page_size == this.config.pagination.page_size ? 
      //           this.config.pagination.page_size : this.custom_page_size == 0 ? 
      //             this.getProperty(CGridProperties.DataLength) ? 
      //               this.getProperty(CGridProperties.DataLength) : this.data.length : 
      //           this.custom_page_size : 
      //       this.custom_page_size == 0 ? 
      //         this.getProperty(CGridProperties.DataLength) ? 
      //           this.getProperty(CGridProperties.DataLength) : this.data.length : 
      //         this.custom_page_size;
      //   }

      //   //Page
      //   case CGridProperties.PageEdit: {
      //     return this.config.page && 
      //       this.config.page.edit ? true : false;
      //   }

        //Header
        case RABGridProperties.HeaderOrder: {
          if(this.config.header && this.config.header.order && this.config.header.order.length > 0){
            return this.config.header.order;
          }else if(this.data.length){
            return Object.keys(this.data[0])
          }else{
            return null;
          }
        }

      //   //Data
      //   case CGridProperties.DataLength: {
      //     return this.config.data && 
      //       this.config.data.length && 
      //       this.config.data.length > 0 ? this.config.data.length : 0;
      //   }

      //   case CGridProperties.DataTotalShow: {
      //     return this.config.data && 
      //       this.config.data.total == false ? false : true;
      //   }

      //   //Data -> Export
      //   case CGridProperties.ExportEnable: {
      //     return this.config.data && 
      //       this.config.data.export && 
      //       this.config.data.export.enable ? true : false;
      //   }

      //   case CGridProperties.ExportType: {
      //     if(this.config.data && this.config.data.export && this.config.data.export.type && this.config.data.export.type.length){
      //       let return_arr = [];

      //       this.config.data.export.type.forEach(type => {
      //         if(type.toLowerCase() === "pdf"){
      //           return_arr.push({
      //             name: "PDF File",
      //             type: 'pdf',
      //             icon: 'fas fa-file-pdf'
      //           });
      //         }

      //         if(type.toLowerCase() === "xlsx"){
      //           return_arr.push({
      //             name: "Excel File",
      //             type: 'xlsx',
      //             icon: 'fas fa-file-excel'
      //           });

      //           if(type.toLowerCase() === "csv"){
      //             return_arr.push({
      //               name: "CSV File",
      //               type: 'csv',
      //               icon: 'fas fa-file-csv'
      //             });
      //           }

      //           return return_arr;
      //         }
      //       });
      //     }else{
      //       return [{
      //         name: "PDF File",
      //         type: 'pdf',
      //         icon: 'fas fa-file-pdf'
      //       },{
      //         name: "Excel File",
      //         type: 'xlsx',
      //         icon: 'fas fa-file-excel'
      //       },{
      //         name: "CSV File",
      //         type: 'csv',
      //         icon: 'fas fa-file-csv'
      //       }];
      //     }
      //   }

      //   //Data -> Columns
      //   case CGridProperties.ColumnEdit: {
      //     return this.config.data && 
      //       this.config.data.columns && 
      //       columnName && 
      //       this.config.data.columns[columnName] && 
      //       this.config.data.columns[columnName].edit != null ? this.config.data.columns[columnName].edit : true;
      //   }

      //   case CGridProperties.ColumnSort: {
      //     return this.config.data && 
      //       this.config.data.columns && 
      //       columnName && 
      //       this.config.data.columns[columnName] && 
      //       this.config.data.columns[columnName].sort ? true : false;
      //   }

      //   case CGridProperties.ColumnSize: {
      //     return this.config.data && 
      //       this.config.data.columns && 
      //       columnName && 
      //       this.config.data.columns[columnName] && 
      //       this.config.data.columns[columnName].size ? this.config.data.columns[columnName].size : 'auto';
      //   }

      //   case CGridProperties.ColumnName: {
      //     return this.config.data && 
      //       this.config.data.columns && 
      //       columnName && 
      //       this.config.data.columns[columnName] && 
      //       this.config.data.columns[columnName].name ? this.config.data.columns[columnName].name : null;
      //   }

      //   case CGridProperties.ColumnInputComponent: {
      //     return this.config.data && 
      //       this.config.data.columns && 
      //       columnName && 
      //       this.config.data.columns[columnName] && 
      //       this.config.data.columns[columnName].input && 
      //       this.config.data.columns[columnName].input.component ? this.config.data.columns[columnName].input.component : CGridEditComponents.TextInput;
      //   }

      //   case CGridProperties.ColumnInputOptions: {
      //     return this.config.data && 
      //       this.config.data.columns && 
      //       columnName && 
      //       this.config.data.columns[columnName] && 
      //       this.config.data.columns[columnName].input && 
      //       this.config.data.columns[columnName].input.options ? this.config.data.columns[columnName].input.options : [];
      //   }

      //   case CGridProperties.ColumnInputOptionName: {
      //     return this.config.data && 
      //       this.config.data.columns && 
      //       columnName && 
      //       this.config.data.columns[columnName] && 
      //       this.config.data.columns[columnName].input && 
      //       this.config.data.columns[columnName].input.options &&
      //       this.config.data.columns[columnName].input.options[index] && 
      //       this.config.data.columns[columnName].input.options[index].name ? this.config.data.columns[columnName].input.options[index].name : null;
      //   }

      //   case CGridProperties.ColumnInputOptionValue: {
      //     return this.config.data && 
      //       this.config.data.columns && 
      //       columnName && 
      //       this.config.data.columns[columnName] && 
      //       this.config.data.columns[columnName].input && 
      //       this.config.data.columns[columnName].input.options &&
      //       this.config.data.columns[columnName].input.options[index] && 
      //       this.config.data.columns[columnName].input.options[index].value ? this.config.data.columns[columnName].input.options[index].value : this.getProperty(CGridProperties.ColumnInputOptionName, columnName, index);
      //   }

      //   case CGridProperties.ColumnBold: {
      //     return this.config.data && this.config.data.columns && columnName && this.config.data.columns[columnName] && this.config.data.columns[columnName].bold ? true : false;
      //   }

      //   case CGridProperties.ColumnPrefix: {
      //     return this.config.data && this.config.data.columns && columnName && this.config.data.columns[columnName] && this.config.data.columns[columnName].prefix ? this.config.data.columns[columnName].prefix : null;
      //   }

      //   case CGridProperties.ColumnSuffix: {
      //     return this.config.data && this.config.data.columns && columnName && this.config.data.columns[columnName] && this.config.data.columns[columnName].suffix ? this.config.data.columns[columnName].suffix : null;
      //   }

      //   case CGridProperties.ColumnCommaSeparate: {
      //     return this.config.data && this.config.data.columns && columnName && this.config.data.columns[columnName] && this.config.data.columns[columnName].commas ? true : false;
      //   }

      //   case CGridProperties.ColumnRound: {
      //     return this.config.data && this.config.data.columns && columnName && this.config.data.columns[columnName] && this.config.data.columns[columnName].round ? this.config.data.columns[columnName].round : 0;
      //   }

      //   case CGridProperties.ColumnAlign: {
      //     return this.config.data && this.config.data.columns && columnName && this.config.data.columns[columnName] && this.config.data.columns[columnName].align ? this.config.data.columns[columnName].align : 'left';
      //   }

      //   case CGridProperties.ColumnLinkEnable: {
      //     return this.config.data && this.config.data.columns && columnName && this.config.data.columns[columnName] && this.config.data.columns[columnName].link && this.config.data.columns[columnName].link.enable ? true : false;
      //   }

      //   case CGridProperties.ColumnLinkCallback: {
      //     return this.config.data && this.config.data.columns && columnName && this.config.data.columns[columnName] && this.config.data.columns[columnName].link && this.config.data.columns[columnName].link.callback ? this.config.data.columns[columnName].link.callback : (data) => {};
      //   }

      //   case CGridProperties.ColumnLinkCallbackOrigin: {
      //     return this.config.data && this.config.data.columns && columnName && this.config.data.columns[columnName] && this.config.data.columns[columnName].link && this.config.data.columns[columnName].link.callbackorigin ? this.config.data.columns[columnName].link.callbackorigin : null;
      //   }

      //   //Data -> Rows
      //   case CGridProperties.RowEdit: {
      //     return this.config.data && this.config.data.rows && this.config.data.rows.edit ? true : false;
      //   }

      //   case CGridProperties.RowDelete: {
      //     return this.config.data && this.config.data.rows && this.config.data.rows.delete ? true : false;
      //   }

      //   case CGridProperties.RowAdd: {
      //     return this.config.data && this.config.data.rows && this.config.data.rows.add ? true : false;
      //   }

      //   case CGridProperties.LastRowBold: {
      //     return this.config.data && this.config.data.rows && this.config.data.rows.last_row && this.config.data.rows.last_row.bold ? true : false;
      //   }

      //   //Footer
      //   case CGridProperties.FooterEnable: {
      //     return this.config.footer && this.config.footer.enable ? true : false;
      //   }

        default: {
          return null;
        }
      }
    }else{
      return null;
    }
  }

}
