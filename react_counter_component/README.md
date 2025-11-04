Here is the task for **React Counter Component**

I have created 3 files to allow me to complete this task 

1. page.tsx - the main .tsx file
2. ./css/App.css - the style of the React app 
3. ./components/counter.tsx - the counter component

---
In counter.tsx
```tsx
'use client' 
```
As the app are using the React Server Components ```useState```, the app is server-rendered by default. ```'use client'``` introduces a server-client.

```tsx
// State to hold the count value
// setCount = function to update the count value
// count = current value of the counter
const [count, setCount] = useState(0);
```
Used to save the current value of the counter

```tsx
{/* Display the current count value */}
<h1 className="Counter">Counter: {count}</h1>
{/* Button to increment the count value */}
<button onClick={() => setCount(count + 1)} className="Button">Increment</button>
```
create a ```<hr>``` for displaying the number of count that created

create a ```<button>``` for count += 1 
