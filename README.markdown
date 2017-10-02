# Express Sample

Example of the simplest express-based application possible.

## Getting started

* Install [nvm][nvm] if you don't already have it
* Clone this repo
* `nvm install`
* `npm install`
* `npm start`

Now navigate to http://127.0.0.1:3000/ to see its output, and/or http://127.0.0.1:3000/?name=bob

To run it on a different port:

```bash
HTTP_PORT=4000 npm start
```

Note that `HTTP_PORT` has no special meaning, look for it in `index.js` to see how it's used.

[nvm]: https://github.com/creationix/nvm
[yarn]: https://yarnpkg.com/
[npm]: https://www.npmjs.com
