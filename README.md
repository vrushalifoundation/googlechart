# Installation of googlechart
Please see [this page][example-page] for a live demo.

[![NPM Version][npm-image]][npm-url]
[![Downloads][npm-downloads-image]][npm-downloads-url]

<h3>Step 1:Add the following code into your index.html</h3>
<pre>&lt;<span class="pl-ent">script</span><span class="pl-e"> src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://www.google.com/jsapi<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;</pre>

<pre>&lt;<span class="pl-ent">script</span> &gt;
 google.load('visualization', '1.0', {
    'packages': ['corechart']
  });
  &lt;/<span class="pl-ent">script</span>&gt;</pre>

<h3>Step 2:Install googlechart into your project</h3>

<pre>npm i @vrushalisoft/googlechart --save</pre>


Please see [this page][example-page] for a demo with more examples.

## License

[MIT](LICENSE.md)

[npm-image]: https://img.shields.io/npm/v/@vrushalisoft/googlechart
[npm-url]: https://npmjs.org/package/@vrushalisoft/googlechart
[npm-downloads-image]: http://img.shields.io/npm/dm/@vrushalisoft/googlechart.svg
[npm-downloads-url]: https://npmjs.org/package/@vrushalisoft/googlechart
[example-page]: http://vrushalifoundation.github.io/googlechart
