import { Checkers } from './Checkers';
import { Matrix } from './../Matrix';

export default class Games {
    constructor(name) {
        this.name = name;
    }

    load() {
        switch (this.name) {
          case 'checkers':
              return new Checkers((new Matrix(8)).matrix).run();
              break;
        }
    }
}
