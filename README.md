# Responsive exercise
The aim of this exercise is to practice with relative units like em or rem and display block in a different way depending on the width of the browser. We will also practice creating a basic menu responsive.

The first step will be to download this repo and take a look at the code and its result in your browser.


#### 1 Relative units
As you can see in the page, we have a main article (The first one). A good way to remark that is the most important article in the web is incresing the font size so let's do it.

If you inspect the code, you will see that the font-size of the h2 tag is 2em. but if you want to know how may pixels are 2em you will have to click inside the chrome inspector in "computed". The result there is 32 pixels. 2em = 2 x 16.

Now, we want to change the font size of the title to 48, and the font size to 24 but we are not going to do it over the h2 or the p tag. We will change the font of the parent since we are using em as unit.

You will find in the css the selector of the parent, you just need to change the font size (try to use relative units) to get the result.


#### 2 Media queries
The 3 "ordinary articles" are displayed inline, but when the browser with is reduced, there are not enough space for them. So we are going to improve the design.

You have to change the css to get:
- When the screen is from 600px to 900px the first block will occupy the whole width and the second and the third will be inline occupying just the half each of them

- When the screen is less than 600px, each element will occupy the whole row

#### 3 Create a responsive menu
We will do it during the class