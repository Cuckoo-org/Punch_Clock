
import { Observable, fromEvent } from 'rxjs';
import { subscriber } from './subscriber';

const source = fromEvent(document.body, 'click');

source.subscribe(subscriber);