# use-current-time
A lightweight package (1.9 kB) to keep track of time using React hooks

Useful for clocks, calendars and any where else the current time is displayed.

Returns date object, hours (num), minutes (num), seconds (num), standard (1-12) time (string), and military (0-23) time (string)  

## Install
`npm install react-use-current-time`

## Example 
```js
import React from 'react'
import { useCurrentTime } from 'react-use-current-time'

function MyApp() {
  const { date, hours, minutes, seconds, time, military } = useCurrentTime();
  console.log('date:', date, 'hours:', hours, 'minutes:', minutes, 'seconds:', seconds, 'time:', time, 'military:' military ) 

}
```
