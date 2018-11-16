
import { throwError } from 'rxjs'
import { subscriber } from './subscriber'
const source = throwError('Oop!');

source.subscribe(subscriber)