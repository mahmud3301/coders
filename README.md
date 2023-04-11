# b7a9-career-hub-mahmud3301
# Live site : http://localhost:5173/jobdetails/1


* Those things that i do in my FeatureJobs Components
  - This is a functional React component named FeatureJobs.
  - It takes in an array of featureJobs as a prop.
  - It uses the useState hook to manage the state of whether or not to show all jobs.
  - It renders a grid of cards for each featureJob in the featureJobs array.
  - It only displays up to 4 jobs by default, or up to 6 jobs if the "See All Jobs" button is clicked.
  - Each card displays the job title, company name, company logo, location, salary, and job type (remote or onsite, fulltime or parttime).
  - Each card also has a "View Details" button that links to a job details page.
  - If there are more than 4 jobs in the featureJobs array, a "See All Jobs" button is displayed at the bottom, which when clicked shows all the jobs.