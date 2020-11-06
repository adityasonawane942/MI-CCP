import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1;
    public tableData2: TableData;

  constructor(
    private http: HttpClient) { }
    leadermain;
    leaderfort;
  ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'Rank', 'Name',  'College','City' ,'Points' ],
      };
      this.tableData2 = {
          headerRow: [ 'Rank', 'Name',  'College','City', 'Points' ],
          dataRows: [
              ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
              ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
              ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
              ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
              ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
              ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
          ]
      };
      
      this.http.get('https://api2.moodi.org/ccpuserlead/CHleaderboardmain/')
      .subscribe((data: any[]) =>{
          this.leadermain=data
          console.log(this.leadermain)
      }
      )
      this.http.get('https://api2.moodi.org/ccpuserlead/socialleader/')
      .subscribe((data: any[]) =>{
          this.leaderfort=data
          console.log(this.leaderfort)
      }
      )

  }

}
