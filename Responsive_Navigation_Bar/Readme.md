Here is the task for **Responsive Navigation Bar**

I have created 3 html files for the 3 pages that are required 

1. Index.html => Home
2. About.html => About
3. Contact.html => Contact

and a css files for the style of the file 

1. style.css

---
for each pages:
```html
<head>
    <!-- Link to the shared CSS file -->
    <link rel="stylesheet" href="style.css">
    <title>Home Page</title>
</head>
```
call the "style.css" file to enable to the style of the element of the pages

```html
<nav>
    <!-- navigation toggle for mobile view -->
    <input type="checkbox" id="menu-toggle" class="menu-toggle">
    <!-- 
        Note that "checkbox" is used to toggle the menu 
        show the menu when checked (clicked)
    -->
    <label for="menu-toggle" class="menu-label">&#9776;</label>
    <!-- create the navigation menu -->
    <ul class="menu">
        <li><a href="Index.html">Home</a></li> <!-- Link to the home page-->
        <li><a href="About.html">About</a></li> <!-- Link to the about page-->
        <li><a href="Contact.html">Contact</a></li> <!-- Link to the contact page-->
    </ul>
</nav>
```
create a ```<nav>``` for the navigation menu, and ```<ul>``` for the link to other pages

---

```css
@media (max-width: 767px) { /* Note that the size should smaller than 768px */
    /* Stack vertically as dropdown */
    .menu {
        display: none;
        flex-direction: column; 
        margin-top: 10px;
        margin-left: 20px;
    }

    /* Show the menu when the checkbox is checked */
    .menu-toggle:checked ~ .menu {
        display: flex;
    }
}
```

set the ```.menu``` to *none* as default as "Collapse into a dropdown menu on screens smaller than 768px". 

and using ```.menu-toggle:checked ~ .menu``` to set the display of the menu to flex or not, so that the dropdown menu can be designed as expected