import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Debounce1Service } from './debounce-1.service';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-1',
  imports: [FormsModule],
  templateUrl: './debounce-1.component.html',
  styleUrl: './debounce-1.component.scss'
})
export class Debounce1Component implements OnInit, OnDestroy {
  search: string = '';
  filteredNames: string[] = [];
  private searchSubject = new Subject<string>();
  private sub?: Subscription;
  loading = false;

  constructor(private service: Debounce1Service) {}

  ngOnInit(): void {
    this.loading = true;
    this.service.loadNames('').then(names => {
      this.filteredNames = names;
      this.loading = false;
    });
    
    this.sub = this.searchSubject.pipe(
      debounceTime(500)
    ).subscribe(async (value) => {
      this.loading = true;
      this.filteredNames = await this.service.loadNames(value);
      this.loading = false;
    });
  }

  onSearchChange(value: string) {
    this.searchSubject.next(value);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
