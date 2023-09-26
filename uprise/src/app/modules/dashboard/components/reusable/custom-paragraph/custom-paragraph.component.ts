import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-paragraph',
  templateUrl: './custom-paragraph.component.html',
  styleUrls: ['./custom-paragraph.component.scss']
})
export class CustomParagraphComponent {

  @Input('content') content='';
  @Input('type') className='text-white';

}
