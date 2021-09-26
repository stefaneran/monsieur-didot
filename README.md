===================
To run the project:
===================

1) yarn

2) yarn start

For testing: yarn test

============
Implemented:
============

- Routing with a working nav bar in the header that switches styling based on which page the user is in

- Accessibility for screen readers by using correct HTML where possible, and aria labels and roles where necessary. 

- Select input for Guests in the booking bar (didn't have time to implement a DatePicker for dates)

- i18n strings for some reason

- Unit tests for util functions, and integration test for carousel. I felt like carousel was the only component that really justified a test given how simple the rest of the components are. For everything else, I would go with snapshot testing with Cypress. 

- An optimized custom carousel with animated image sliding. It controls when images are loaded based on user interaction by preloading the image which comes after the next one. You can see this in action by looking at the network tab of the dev tools 

Example of execution: Given the user is at image 3, images 1, 2, 3, and 4 have already been loaded. When the user presses forward to view the 4th image, the 5rd one will be preloaded.


========
Remarks:
========

- The logo says "Lum Guide" because the svg I downloaded from your website had a white fill, and when I changed it to black as per design it was missing the "P". I decided to keep it because I found it a bit funny and also it made me feel less like I'm making a phishing website.

- All fonts are bolder than the design, however I downloaded the fonts directly from your website so I did not want to go on a goose chase of finding the right ones assuming that under normal circumstances I would have those fonts supplied to me anyway.

- Icons are not as per design because I used material-ui icons for convenience. Same as fonts, the assumption is that normally I would have those assets on hand. Using material icons also forced me to add several other dependencies:

  "@emotion/react": "^11.4.1",
  "@emotion/styled": "^11.3.0",
  "@mui/icons-material": "^5.0.1",
  "@mui/material": "^5.0.1",

- In Carousel, I use material IconButton because I tried to assign role="button" to the material svg icons, but material-ui didn't pass them down so my integration test could not capture them, so I had to resign to using IconButton. Under normal circumstances, I wouldn't have to do this.

- I used CSS modules for convenience, normally I would use SASS and store certain repeating values into variables or use material ui styles with custom theme.