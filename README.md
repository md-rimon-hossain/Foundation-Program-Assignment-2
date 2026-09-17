# Foundation Program Assignment 2
## Project: greatMovies 2026 🎬

HI! This is my greatMovies project for Foundation Program Assignment 2.

Basically, I am doing here is making a very simple and clean designed movie explorer. You can see all movies and search for your favorite movies. It fetch data from TVMaze API. I tried to make the design minimal and aesthetic with dark theme!


## what features i implemented of this project
1. Show home page with good hero section with CTA Button (Explore All Movies) 
1. Movie List Display with Movie Card 
2. Search Functionality with Search Bar
3. Movie Details Modal
4. React Context API




## What I learn from this project

### The `dangerouslySetInnerHTML` Case!

This is very important thing I learn. In my `MovieDetailsModal`, the API give me movie summary but it have HTML tags inside it (like `<p>` and `<b>`). If I just render normal `{summary}`, React try to protect me and print the exact `<p>` in the screen, which look very ugly!

So I have to use `dangerouslySetInnerHTML={{ __html: summaryHTML }}` to tell React to parse it as real HTML.

But **why I use self close div?** Like this:

```jsx
<div dangerouslySetInnerHTML={{ __html: summaryHTML }} />
```

Because React have a very strict rule! If I use `dangerouslySetInnerHTML`, the div is forbidden to have any children. If I do `<div dangerouslySetInnerHTML={...}>some text</div>`, React get very confused what to render and crash. So by writing it as a self-close tag `<div />`, it is the safest way to tell React that this div is completely empty and controlled 100% by the innerHTML!

## Tech Stack

- React + Vite
- Tailwind CSS (for the premium simple clean looks)
- Lucide React
- TVMaze API

Thank you for checking my project!
