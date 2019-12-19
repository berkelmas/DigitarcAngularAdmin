import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { IRoom, AllRoomsData } from "../../../../../assets/data/room.data";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-all-rooms",
  templateUrl: "./all-rooms.component.html",
  styleUrls: ["./all-rooms.component.scss"]
})
export class AllRoomsComponent implements OnInit {
  dataSource = new MatTableDataSource<IRoom>(AllRoomsData);
  displayedColumns: string[] = ["roomName", "roomPrice", "editAction"];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
