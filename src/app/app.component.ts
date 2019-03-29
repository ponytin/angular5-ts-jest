import { Component } from '@angular/core';

import { graphql, fetchQuery } from 'relay-runtime';
import { environment } from './graphql-env';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    // this.hello();
  }

  hello(): Promise<String> {
    const query = graphql`
      query appComponentQuery {
        hello
      }
    `;

    return new Promise<String>((resolve, reject) => {
      try {
        fetchQuery(environment, query).then(result => {
          resolve(result['hello']);
        });
      } catch (error) {
        reject(error);
      }
    });
  }

}
