# Ubisense
This project uses VueJS to implement the take-home excercise for Ubisense. It is using the Vuetify Material Design framework for styling and layout.
It also includes the Moment library for datetime formatting and comparisons.

I don't believe I understood how to calculate the "Time Elapsed" since the times returned from the API move around and the elapsed time may be very long if calculated against the current datetime.
To compensate, I created a fake datetime value for the current datetime which is computed based on the lowest datetime returned as the workstation entryTime. It adds a random number of minutes to the lowest entryTime and makes that the current datetime.

I also added color coding of the Time Elapsed progress bar and icons when the Time Elapsed begins to reach and overtake the Cycle Time.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Live Demo
See the [Live Demo](https://cli.vuejs.org/config/).
