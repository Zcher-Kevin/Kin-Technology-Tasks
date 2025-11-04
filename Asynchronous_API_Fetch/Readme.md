Here is the task for **Asychronous API Fetch**

```js
const response = await fetch('https://jsonplaceholder.typicode.com/posts');
```
call the fetch function to get the data from https://jsonplaceholder.typicode.com/posts

```js
const data = await response.json();
const titles = data.slice(0,5).map(post => post.title)
```
parse the response into json and store in data, then extract the title of the first five posts and store it into array 

```js
titles.forEach(title => console.log(title));
```
print the title one by one 

