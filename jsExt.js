/**
 * filter the Array return a new array with unique values
 * @returns {Array}
 */
Array.prototype.unique = function()
{
	return this.filter(function(el, index, arr){ return index == arr.indexOf(el); });
};
/**
 * Runs callback for every item in Object|Array.
 * @param function(key,value,obj)
 * 		@param Mixed key	key index.
 *		@param Mixed ref	Value of item.
 *		@return boolean True to continue; False to break
 * @param thisArg Value to use as this (i.e the reference Object) when executing callback.
 * @return this
 */
Object.prototype.each = function(callback,ref)
{
	var ret,i,l,k;
	ref = ref||this;
	k = Object.keys(ref);
	for (i=0,l=k.length;i<l;i++)
	{
		ret = callback.apply(ref, [k[i], this[k[i]], this]);
		if (!ret && typeof ret !== 'undefined')
			{ break; }
	}
	return this;
};
/**
 * HTMLElement has this class
 * @param {string} c class name
 * @returns {boolean}
 */
HTMLElement.prototype.hasClass = function(c)
{
	return this.className.split(" ").indexOf(c)>=0;
};

/**
 * add class or classes from the element (seperated with a space for multiple)
 * @param {string} c add class(s) from an element
 * @returns {HTMLElement}
 */
HTMLElement.prototype.addClass = function(c)
{
	this.className = this.className.split(" ").concat(c.split(" ")).unique().filter(Boolean).join(" ");
	return this;
};
/**
 * remove class or classes from the element (seperated with a space for multiple)
 * @param {string} c remove class(s) from an element
 * @returns {HTMLElement}
 */
HTMLElement.prototype.removeClass = function(c)
{
	c = c.split(" ");
	this.className = this.className.split(" ").filter(function(e){ return c.indexOf(e) < 0; }).join(" ");
	return this;
};

/**
 * get or set an elements style property or properties
 * @param {string|object} name|json property name or json object of keys and values of properties to set.
 * 							when used as a json object returnes the element
 * @param {mixed} value [optional] when using string as the first param, this will set the value the property and return the element, 
 * 						if value is not set the computed style value for the property will be returned.
 * @returns {HTMLElement|string} HTMLElement | property (value | values)
 */
HTMLElement.prototype.css = function(name,value)
{
	if(typeof name == "object")
	{
		for(var x in name)
			{ this.style[x] = name[x]; }
		return this;
	}
	else if(typeof name == "string")
	{
		if(typeof value != "undefined")
		{
			this.style[name] = value;
			return this;
		}
		return window.getComputedStyle(this,null)[name];
	}
	return window.getComputedStyle(this,null);
};

/**
 * set or get an elements height, if no value set this will return a float of the height in px,
 * otherwise it will return the element for chaining
 * @param {float} px [optional] set element style.height to this value in px
 */
HTMLElement.prototype.height = function(px)
{
	if(!isNaN(px))
	{
		px = parseFloat(px);
		this.css("height",px+"px");
		return this;
	}
	return parseFloat(this.css("height"));
};

/**
 * set or get an elements width, if no value set this will return a float of the width in px,
 * otherwise it will return the element for chaining
 * @param {float} px [optional] set element style.width to this value in px
 */
HTMLElement.prototype.width = function(px)
{
	if(!isNaN(px))
	{
		px = parseFloat(px);
		this.css("width",px+"px");
		return this;
	}
	return parseFloat(this.css("width"));
};

