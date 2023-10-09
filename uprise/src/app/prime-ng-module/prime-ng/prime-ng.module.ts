import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableBody, TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';
import { CustomDialogService } from 'src/app/shared/custom-dialog.service';
import { InputSwitchModule } from 'primeng/inputswitch';
import { PaginatorModule } from 'primeng/paginator';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';

const PrimeNgComponents = [
  ButtonModule,
  InputTextModule,
  TableModule,
  TooltipModule,
  RippleModule,
  ConfirmDialogModule,
  ToastModule,
  DynamicDialogModule,
  InputSwitchModule,
  PaginatorModule,
  FileUploadModule,
  DialogModule,
  CardModule,
  ChipModule
  
]

@NgModule({
  imports: [ PrimeNgComponents ],
  exports: [ PrimeNgComponents ],
  providers: [ConfirmationService,DialogService,
    CustomDialogService,]
})
export class PrimeNgModule { }
