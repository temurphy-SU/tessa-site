# Slavery in the Age of Abolition Website

## Contacts:

| **Field**      | **Info**                  |
| -------------- | ------------------------- |
| _Authors_      | Jason Scharf              |
| _Email_        | jason@cnydataventures.com |
| _Last Updated_ | 06/2026                   |

## Introduction

This website was created in React using Create-React-App.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Site and Page Overviews

We made each page a React component. There are certain pages that have other React components if they were complicated (such as Tableau Vis embeds or the Tableau Crop Selector on the Plantation page). Images are all stored in the "images" folder.

### HomePage

Where we have an overview of the website, we are using CSS Grid for styling.

### Geography

Here we are mainly embedding the Main Dashboard section of the TableauDashboard.

### Geography

Here we are mainly embedding the Map section of the TableauDashboard. You can select which Dashboard you embed into the page changing the last section of the url, in the case below it is the "Dashboard3" portion: [public.tableau.com/app/profile/tessa.murphy1162/viz/TMurphyExShcarf/Dashboard3](https://public.tableau.com/app/profile/tessa.murphy1162/viz/TMurphyExShcarf/Dashboard3)

### Plantations (currently hidden)

This page is the most complicated. Here we are using the TableauCropSelector component. This component let's us add whichever crops we want to include in the "cropInfo" object.

That object when selected will update the React component with the descriptions, images, metrics, and filtered Tableau Data Visualization (if desired and added back to the site).

In this case we are loading the visualization, then once that is loaded, we are running the async function fetchDataForCrop. This parses the numbers in the visualization to only display what we want to display.

**NOTE**: I did it this way, because pulling the data directly from the data layer took loner and pulled every single record. Also, Tessa is planning on adding another islands worth of data, and I wanted this visualization to be able to update when that happens.

When full data is in here, these values could be hard coded in if desired. Also, if we use a different visualization, this will need to be modified.

The visualiztion on this page is currently commented out. If you would like to return it, instructions on how to do so are in the TableauCropSelector.jsx component.

### Contact Page

Similar layout to Overview, but we made the image extand pass the div and added some breakpoints to make it look better on tablet and mobile.

### Styling

This is in the App.css file, and is broken down primarily by page, and then the breakpoint (responsive web design) information is at the bottom of the file.

## How to add a new page

1. You will create a new .jsx file under the "pages" folder. Recommend that you just copy a page that is similar to how you want it to look and then modify accordingly.
2. In the App.jsx file you will need to import the page along with the path using "import {name} from "{file path}"
3. Add this to the NavLink section
4. Add this to the Routes also.

## Test changes

As you are making changes test them locally. When you are ready to push a new change, it is encouraged to run "npm run build" first to make sure that there are no errors and everything builds fine.

Then when after you commit and push your code, netlify should automatically update the site with your changes.

If there are errors, check the error logs in Netlify.
