<p align="center">
  <a href="https://http://www.android.com">
		<img src="https://img.shields.io/badge/Written%20in-JavaScript-orange.svg?style=flat">
	</a>
	<a href="https://tldrlegal.com/license/apache-license-2.0-(apache-2.0)">
		<img src="https://img.shields.io/badge/License-Apache 2.0-blue.svg?style=flat">
	</a>
</p>

## At a Glance

`TellMe.js` is a library that simplifies work with voice in JavaScript.

## How to Get Started

Copy the [tellme.js](source/tellme.js) file to your project.

## Requirements

No special requirements.

## Usage

The very basic usage looks like the example below:

```javascript
tellMeIn("en-US").say(
    "Hello! How are you doing?"
)
```

Everything starts with `tellMeIn()` method that takes the only string parameter which is a locale identifier of your text: `en-US`, `fr-FR`, `ru-RU`, etc.

Also, the library can notify you when it finished speaking:

```javascript
tellMeIn("en-US")
    .say(
        "Hello! How are you doing?"
    )
    .onFinished(function() {
        console.log("Finished");
    });
```

## License

`TellMe.js` is available under the Apache 2.0 license. See the [LICENSE](./LICENSE) file for more info.
