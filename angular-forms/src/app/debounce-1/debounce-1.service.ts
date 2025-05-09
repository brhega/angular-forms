import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Debounce1Service {
  private names = [
    'Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy',
    'Mallory', 'Niaj', 'Olivia', 'Peggy', 'Rupert', 'Sybil', 'Trent', 'Uma', 'Victor', 'Wendy'
  ];

  async loadNames(filterText: string): Promise<string[]> {
    await new Promise(res => setTimeout(res, 100)); // Simulate 100ms delay
    if (!filterText) return this.names;
    return this.names.filter(name => name.toLowerCase().includes(filterText.toLowerCase()));
  }
}
