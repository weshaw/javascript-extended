# Extend Javascript
Update javascript's base functionallity with some lightweight prototypes

Who needs jQuery?

```
	var h1 = document.querySelector("h1");
	console.log("Starting Classes",h1.className);

	h1.addClass("testing addClass method");
	console.log("Adding Classes",h1.className);

	h1.addClass("testing duplicate classNames");
	console.log("More Classes",h1.className);

	h1.removeClass("addClass classNames");
	console.log("Remove Classes",h1.className);
```
