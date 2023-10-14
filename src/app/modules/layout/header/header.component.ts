import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedLang = 'en';
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    switch (language) {
      case 'en':
        document.getElementById('lang')?.classList.remove('rtl');
        document.getElementById('lang')?.classList.add('ltr');
        break;

      case 'ar':
        document.getElementById('lang')?.classList.remove('ltr')
        document.getElementById('lang')?.classList.add('rtl')
        break
      default:
        break;
    }
  }
}
