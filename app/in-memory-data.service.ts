import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, name: 'Mike' },
      { id: 12, name: 'Conor' },
      { id: 14, name: 'Vitas' },
      { id: 15, name: 'Aiden' },
    ];
    return {users};
  }
}
