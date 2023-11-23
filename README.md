Hi 👋 welcome to my project

The project involves creating a React application that interacts with a Django API. Here's a summary of the key components and features:

Homepage (App Component):

Displays a table with two columns: "Message" and "IP Address."
Fetches data from a Django API endpoint (/api/retrieve/) using the fetch API.
Periodically updates the displayed data every 5 seconds to show the newest entries at the top.
Uses the useState and useEffect hooks to manage state and perform side effects.
Formatting Date:

The date is formatted using the toLocaleString method with custom options to display it as "Nov. 23, 2023, 2:32 a.m."
CSS Styling:

Styling is applied using an external CSS file (AppPage.css) to center the table and provide a clean layout.
Reverse Order of Entries:

The displayed entries are reversed before rendering, ensuring that the newest entry appears at the top of the table.
Automatic Data Refresh:

Utilizes setInterval to fetch data from the API at regular intervals (every 5 seconds).
Clears the interval on component unmount to avoid memory leaks.
Overall, the application provides a real-time view of messages and IP addresses stored on the Django backend, with automatic updates and a user-friendly date format.