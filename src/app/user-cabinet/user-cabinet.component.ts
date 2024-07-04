import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditContactComponent } from 'src/app/components/add-edit-contact/add-edit-contact.component';
import { FullInfoComponent } from 'src/app/components/full-info/full-info.component';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { ContactData } from '../shared/interfaces/interfaces';
import { LIST } from '../shared/constants/constants';


@Component({
  selector: 'app-user-cabinet',
  templateUrl: './user-cabinet.component.html',
  styleUrls: ['./user-cabinet.component.scss']
})
export class UserCabinetComponent implements OnInit {
  public readonly displayedColumns: string[] = ['sequenceNumber', 'firstName', 'lastName', 'phoneNumber', 'actions'];
  public dataSource!: MatTableDataSource<ContactData>;
  constructor(
    public dialog: MatDialog,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.fillTheList()
    this.getContacts()
  }

  fillTheList(){
    this.localStorageService.setItem('contacts', JSON.stringify(LIST))
  }

  getContacts() {
    let contacts = this.localStorageService.getItem('contacts');
    if (contacts) {
      this.dataSource = new MatTableDataSource(JSON.parse(contacts))
    }
  } 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addData() {
    const dialogRef = this.dialog.open(AddEditContactComponent, {
      width: '500px',
      data: {
        isEdit: false
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        let contacts = [...this.dataSource.data, result.data]
        console.log(contacts)
        this.localStorageService.setItem('contacts', JSON.stringify(contacts))
      }
      this.getContacts()
    });
  }

  showFullContact(contact: ContactData) {
    this.dialog.open(FullInfoComponent, {
      width: '500px',
      data: contact
    });
  }

  editContact(contact: ContactData): void {
    const dialogRef = this.dialog.open(AddEditContactComponent, {
      width: '500px',
      data: {
        contact: contact,
        isEdit: true
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      let contacts = this.dataSource.data.map((item,index)=>index === this.getCurrentIndex(contact)?result.data:item)
      this.localStorageService.setItem('contacts', JSON.stringify(contacts))
      this.getContacts();
    });
  }

  deleteContact(contact: ContactData): void {
    let contacts = this.dataSource.data.filter((item,index)=>index!== this.getCurrentIndex(contact) )
    this.localStorageService.setItem('contacts', JSON.stringify(contacts))
    this.getContacts();
  }

  getCurrentIndex(contact:ContactData):number{
    return this.dataSource.data.indexOf(contact);
  }
}
