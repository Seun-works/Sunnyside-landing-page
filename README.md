# Sunnyside agency landing page

![Design preview for the Sunnyside agency landing page](./design/desktop-preview.jpg)

### Table of contents

- [Overview](#overview)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)




## Overview

This project is a landing page for a fictional company created to be responisve at various sizes. The aim of this project is for users to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Live Site URL: [Sunnyside agency landing page ](https://seun-works.github.io/Loopstudios-landing-page/)

## My process
Similar to the loopstudios landing page also found in my repo, i've learned to fully adopt the mobile first workflow to make styling and coding websites a lot easier and more efficient.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SASS
- Javascript
- CSS Grid
- Flexbox
- Mobile-first workflow
- Frontend-mentor.io (stock images and styling inspiration)

## What I learned

I fully embraced the need to understand and utilize custom css and scss to learn how to build a responsive site across all screens. This project also allowed me to

make use of my javascript knowledge in manipulating the document objects in the HTML files, by showing a full navbar selection at smaller and medium screen sizes (767px and below).

Below is a snippnet of how i was able to manipulate the DOM in my javascript file.


```js
// DEFINING THE VARIABLES 
const heading = document.getElementById('head');
const mobileBtn = document.querySelector('.mobile-button');
let menuOpen = false;

// THIS FUNCTION IS WHAT SHALL BE USED TO DISPLAY THE CLASS THAT SHOWS A MOBILE NAVBAR
function changeMenu() {
    if(!menuOpen) {
        heading.classList.add ('is-open');
        mobileBtn.setAttribute("src", "images/icon-hamburger.svg");
        menuOpen = true;
    } else {
        heading.classList.remove ('is-open');
        mobileBtn.setAttribute("src", "images/icon-hamburger.svg");
        menuOpen = false;
    }
}
```

The styling for the is-open class was how i was able to display the mobile navbar when the sandwich button was clicked.This styling only applied to screens below 767px as you would see with the inclusion of a mixin. The snippet of my code is down below.

```scss
@mixin small-screen {
    @media (max-width: 766px) {
        @content;
    }
}

/* --------- STYLING FOR THE OPEN MENU FUNCTIONALITY IN MOBILE MODE --------- */
@include small-screen {

.is-open {

    .popup-triangle {
        border: 15px solid hsl(30, 100%, 99%);
        border-top: 15px solid transparent;
        border-left: 15px solid transparent;
        position: absolute;
        right: 7.5%;
        top: 5.7rem;
    }

    .navbar {
        display: block;
        position: relative;
        

        nav {
            float: center;
            background-color: white;
            text-align: center;


            
                margin-left: 0rem;
                margin-top: 7rem;
                padding-top: 2rem;
                

                li {
                    padding-bottom: 2rem;
                    padding-left: auto;
                    padding-right: auto;
                    text-align: center;
                    list-style: none;

                    a {
                        &:hover {
                            color: hsl(212, 27%, 19%);
                        }
                    }


                    .menu-item-4 {
                        background-color: hsl(51, 100%, 49%);
                        color: black;
                        border-radius: 2em;
                        padding-top: 0.5rem;
                        padding-bottom: 0.5rem;
                        padding-left: 1rem;
                        padding-right: 1rem;
                        font-family: 'Fraunces', 'serif';
                        font-size: 0.7rem;

                        &:hover {
                            background-color: orange;
                            color: white;
                        }
                        
                        
                        
                    }
                    
                    a {
                        text-decoration: none;
                        color: hsl(213, 9%, 39%);
                        font-size: 15px;
                    }  
            }
        }  
    }

    .title {
        display: none;
    }

    .icon-arrow {
        display: none;
    }

}
}
```

### Continued development

My goal as a developer is to work on how well i use my tools and to get better at writing clean code in the nearest future.


## Author

- Frontend Mentor - [@Seun-works](https://www.frontendmentor.io/profile/Seun-works)
- LinkedIn - [@SeunOgundipe](https://www.linkedin.com/in/seun-ogundipe)

