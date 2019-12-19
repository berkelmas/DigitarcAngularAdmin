import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener
} from "@angular/core";
import { MatTableDataSource, MatTable } from "@angular/material/table";
import {
  AllReservationsData,
  IReservation
} from "../../../../../assets/data/reservation.data";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-all-reservations",
  templateUrl: "./all-reservations.component.html",
  styleUrls: ["./all-reservations.component.scss"]
})
export class AllReservationsComponent implements OnInit {
  dataSource = new MatTableDataSource<IReservation>(AllReservationsData);
  displayedColumns: string[] = [
    "name",
    "surname",
    "roomType",
    "checkInDate",
    "checkOutDate",
    "price"
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild("cardBody", { static: true }) cardBody: ElementRef;
  tableWidth: string;

  @HostListener("window:resize", ["$event"]) handleScroll(e) {
    if (window.innerWidth < 800) {
      this.tableWidth = 800 + "px";
    } else {
      this.tableWidth = this.cardBody.nativeElement.offsetWidth;
    }
  }

  constructor() {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    if (window.innerWidth < 800) {
      this.tableWidth = 800 + "px";
    } else {
      // this.tableWidth = this.cardBody.nativeElement.offsetWidth;
      this.tableWidth = "100%";
    }
  }
}
