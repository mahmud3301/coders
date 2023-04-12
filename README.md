# b7a9-career-hub-mahmud3301
# Live site : https://coders-3301.netlify.app/

* Those things that i do in my Blogs Component
  - Imported the React library: import React from 'react';
  - Defined a functional component called BlogsThe Blogs component returned a JSX element that contained a list of collapsible panels.
  - Each panel had a title and content, with the content being collapsed by default.
  - Used tabIndex to make the panels focusable by keyboard.
  - Used CSS classes to apply styling to the panels and their content.
  - Each panel had a question as the title, with an answer as the content.
  - The questions covered different React concepts: Context API, custom hooks, useRef, and useMemo.
  - The answers provided brief explanations of each concept.
  - Used the className attribute to apply CSS classes to the containing div element.
  - Exported the Blogs component as the default export.

* Those things that i do in my Error Component
  - Import React and the Link component from the react-router-dom library
  - Define a function-based component named Error404
  - Return JSX code that displays a 404 error message along with a link to go back to the home page
  - The JSX code uses Tailwind CSS classes for styling, including a gradient text effect for the "404"  and error message text
  - The Link component is used to create a clickable link that navigates to the home page ("/") when clicked
  - The Error404 component is exported as the default export of the module.

* Those things that i do in my FeatureJobs Component
  - Importing React, useState, and Link from the 'react' and 'react-router-dom' packages.
  - Defining the FeatureJobs functional component that takes in a prop named featureJobs.
  - Using the useState hook to define a showAll state variable and a setShowAll function to update it.
  - Rendering a div that contains a grid of job cards.
  - Mapping over the featureJobs array and rendering a job card for each one.
  - Using the slice method to only show the first four job cards, or all of them if showAll is true.
  - Adding event listeners to the "See All Jobs" button that toggles the showAll state variable when clicked.
  - Using the Link component from react-router-dom to create a clickable link to the job details page.
  - Exporting the FeatureJobs component as the default export of the module.

* Those things that i do in my Footer Component
  - Imported the React library at the top of the file.
  - Created a functional component called Footer using an arrow function syntax.
  - Defined a JSX template within the component that renders the footer section of your blog.
  - Used tailwind CSS classes to style the elements of the footer section.
  - Exported the Footer component at the bottom of the file for use in other parts of your application.

* Those things that i do in my HomePage Component
  - I have imported React, useState, useEffect, useLoaderData, and components for rendering the homepage and footer.
  - I have created a functional component called HomePage that renders the homepage of your website.
  - I have used the useLoaderData hook from react-router-dom to fetch job data from the Job.json file.
  - I have used the useState hook to set the state for featured jobs and useEffect hook to fetch data from the Job.json file when the component mounts.
  - I have rendered the header section of the homepage with a title, subtitle, and a call-to-action button.
  - I have rendered the job categories section with a title and description and used a grid to render the job cards.
  - I have rendered the featured jobs section with a title, description, and used a grid to render the featured job cards.
  - I have created a functional component called SingleCard that renders the job card.
  - I have created a functional component called FeatureJobs that renders the featured job card.
  - I have exported the HomePage component as the default export.

* Those things that i do in my JobDetails Component
  - This is a React component that displays job details and allows users to apply for the job. It uses React Router to get the job ID from the URL and fetches the job details using a useLoaderData hook. The component also uses the useState hook to manage the job details and the useEffect hook to fetch the job details when the component mounts.
  - The handleAppNow function is called when the user clicks the "Apply Now" button. It retrieves the data from localStorage and checks if the job ID already exists in the data array. If the job ID doesn't exist, it adds the job ID to the data array and stores it in localStorage. Otherwise, it shows an error message indicating that the job has already been applied for.
  - The component uses the react-hot-toast library to show success and error messages when the user applies for a job.
  - The JSX code in the component displays the job details, including the job description, job responsibilities, educational requirements, experience, salary, job title, location, email, phone, and the "Apply Now" button.

* Those things that i do in my Job Component
  - Importing React, useState and useEffect from the 'react' library.
  - Defining a functional component named Jobs.
  - Declaring three state variables using the useState hook:
    - allData initialized as an empty array.
    - jobs initialized as an empty array.
    - selectItems initialized as an empty string.
  - Defining a handler function named handlerFilterChange that updates the selectItems state with the value of the select element when it is changed.
  - Using the filter method to filter the jobs array based on the value of selectItems state variable and store the filtered result in a new filterItem array.
  - Using the useEffect hook to fetch job data from a Job.json file and update the allData state with the data.
  - Using another useEffect hook that runs only when allData state variable changes, reads data from localStorage, and if any data exists, filters out the saved job data and updates the jobs state with the filtered data.
  - Returning JSX that renders the UI for the Jobs component.
  - Rendering an image and a heading.
  - Rendering a dropdown select element that filters the job data based on remote/onsite job type.
  - Mapping through the filterItem array and rendering a card for each job that displays various job-related data.

* Those things that i do in my Layout Component
  - Imported React and two custom components, Footer and Navbar, as well as Outlet from react-router-dom.
  - Defined a functional component called Layout.
  - Returned a JSX expression inside the Layout component, which consists of:
    - A div element that contains the Navbar, an element with a class of min-h-[calc(100vh-137px)] that wraps the Outlet component, and the Footer.
    - The Outlet component is a placeholder for the child route components that are rendered by the parent route component that uses this Layout component as its layout.
  - Exported the Layout component as the default export of the module.

* Those things that i do in my Navbar Component
  - Imported React and the Link component from react-router-dom.
  - Created a functional component called Navbar.
  - Returned a JSX element that renders a navigation bar with a dropdown menu and links to different pages.
  - Used Tailwind CSS classes to style the navbar, dropdown, buttons, and links.
  - Used the Link component from react-router-dom to create links to different pages.
  - Exported the Navbar component as the default export of the module.

* Those things that i do in my SingleCard Component
  - Created a functional component using React.
  - Destructured the Cards prop to get the logo, name, and jobs_available values.
  - Used the destructured values to render a card element that displays the logo, name, and number of available jobs.
  - Used tailwind CSS classes to style the card element.

* Those things that i do in my Statistics Component
  - Imported React and various components from recharts.
  - Defined an array of objects named data, which represents the data to be plotted on the chart.
  - Created a functional component named Statistics.
  - Within the Statistics component:
    - Defined the data array.
    - Rendered a div element with inline styles for width, max-width, and margin.
    - Rendered a ComposedChart component from recharts.
    - Set the width, height, and data props for the ComposedChart.
    - Rendered an XAxis, YAxis, Tooltip, Legend, and CartesianGrid within the ComposedChart component.
    - Added an Area and Line component to the ComposedChart to display the data.
  - Exported the Statistics component as the default export.

* Those things that i do in my main.jsx file
  - Imported necessary modules and components from React and other packages.
  - Imported your custom components Layout, Statistics, HomePage, Jobs, Blogs, Error, and JobDetails.
  - Created a router using createBrowserRouter() from the react-router-dom package.
  - Defined the paths and their corresponding components in the router object.
  - Rendered the router using RouterProvider from the react-router-dom package using ReactDOM.createRoot().
  - Wrapped the router with React.StrictMode.