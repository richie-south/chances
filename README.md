# chances

Helper function to build percentage chance options. e.g. You want something to happen 10% of times and another thing 60% of the times.

Got to think of this while riding my bike and later wrote down almost line by line in my tent.

````typescript
import {chance} from 'chance'

const event = chance([10, '10% event', 40, '40% event'])

console.log(event) // '10% event' or '40% event' or undefined if no event should match

```
