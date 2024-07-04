import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContactData } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.scss']
})
export class AddEditContactComponent implements OnInit {
  @Output() userSaved = new EventEmitter<any>();
  public form!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { contact: ContactData, isEdit: boolean },
    private dialogRef: MatDialogRef<AddEditContactComponent>,
  ) {}

  ngOnInit(): void {
    if(this.data.isEdit){
      this.initFormForEditing(this.data.contact)
    }else{
      this.initFormForAdding()
    }
  }
  initFormForAdding() {
    this.form = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, [Validators.required,Validators.pattern(/^\d{10}$/)]),
      address: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
    })
  }
  initFormForEditing(contact:ContactData) {
    this.form = new FormGroup({
      firstName: new FormControl(contact.firstName, Validators.required),
      lastName: new FormControl(contact.lastName, Validators.required),
      email: new FormControl(contact.email, [Validators.required, Validators.email]),
      phoneNumber: new FormControl(contact.phoneNumber, [Validators.required,Validators.pattern(/^\d{10}$/)]),
      address: new FormControl(contact.address, Validators.required)
    })
  }

  createContact() {
    if(this.form.valid){
      this.dialogRef.close({data:this.form.value})
    }

  }
  editContact() {
    if(this.form.valid){
      this.dialogRef.close({data:this.form.value})
    }

  }
}
