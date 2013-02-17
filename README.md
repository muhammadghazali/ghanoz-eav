ghanoz-eav
==========

The hardcore way to validate email address.

### How it works

* Validating the local-part of email address the hardcore way
* Validating the domain-part of email address the hardcore way

### How to install

Invoke the following command:

```bash
$ npm install ghanoz-eav
```

### How to use

```javascript
geav = require('ghanoz-eav');

geav.isValid('test@example.com');
```

or look over the [examples](https://github.com/muhammadghazali/ghanoz-eav/tree/master/examples).

### Running Tests

To run the test suite first invoke the following command within the repo,
installing the development dependencies:

```bash
$ npm install
```

then run the tests:
```bash
$ npm test
```

### License

Licensed under the MIT License.