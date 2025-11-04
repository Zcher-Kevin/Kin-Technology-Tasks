async function fetchAndLogTitles() {
    try {
        // Call the fetch function to get the data from the API https://jsonplaceholder.typicode.com/posts
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        // Check if the response of the fetch is ok or not
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Parse the response as JSON
        const data = await response.json();
        // Extract and log the titles of the first five posts 
        const titles = data.slice(0,5).map(post => post.title);

        console.log('============== Titles of the first five posts ==============');
        // Log the titles to the console (print the titles one by one)
        titles.forEach(title => console.log(title));
    } catch (error) {
        // prevent the error from crashing the program
        console.error('Error fetching or processing data:', error);
    }
}

// Call the function to execute the fetch and log titles
fetchAndLogTitles();
