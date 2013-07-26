#Kernr.js
Kerner.js is a jQuery based plugin for adjusting the kerning of HTML elements.

##Usage
Include the jquery.kernr.min.js file after the jquery library in your project.

```html
<script src="jquery.kernr.min.js"></script>
```

Apply kerning to an element on your page:

```js
$("h1").kernr();
```

Use the data attribute "data-kernr" to add your spacing rules:

```html
<h1 data-kernr='{"He":"-1px", "Wo":"-3px"}'>
  Hello World!
</h1>
```

##How does it work?
The plugin looks at the data-kernr attribute which is an object. It takes each pair of case-sensitive character matches and applies the spacing assigned to it between the characters.

Spacings can be any positive or negative valid CSS length unit such as px, em, rem, etc.

##Found a bug?

Submit a bug report above or here:

<https://github.com/rikkipitt/jquery-kernr/issues>

##License
Copyright (c) 2013 Rikki Pitt. Licensed under the MIT license.
