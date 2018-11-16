
import { Observable, of } from 'rxjs';

const source = of('Jerry', 'Anna');

source.subscribe({
    next: function(value) {
        console.log(value);
    },
    complete: function() {
        console.log('complete!')
    },
    error: function(error) {
        console.log(error)
    }
})