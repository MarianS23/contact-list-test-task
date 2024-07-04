import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactData } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-full-info',
  templateUrl: './full-info.component.html',
  styleUrls: ['./full-info.component.scss']
})
export class FullInfoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public contact: ContactData) {}
}
