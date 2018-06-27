Array.prototype.unique = function()
{
	return this.filter(function(el, index, arr){ return index == arr.indexOf(el); });
};

HTMLElement.prototype.hasClass = function(c)
{
	return this.className.split(" ").indexOf(c)>=0;
};

HTMLElement.prototype.addClass = function(c)
{
	this.className = this.className.split(" ").concat(c.split(" ")).unique().filter(Boolean).join(" ");
	return this;
};

HTMLElement.prototype.removeClass = function(c)
{
	c = c.split(" ");
	this.className = this.className.split(" ").filter(function(e){ return c.indexOf(e) < 0; }).join(" ");
	return this;
};

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

/**
 * Runs callback for every element in array.
 * @param function(index,ref)
 * 		@param Int index	Loop index.
 *		@param Array ref	Reference to array.
 *		@return boolean True to continue; False|Null to break
 *
 * @return this
 */
Array.prototype.each = function(callback)
{
	var ret;
	for (var i = 0; i < this.length; i++)
	{
		ret = callback.apply(this, [i, this]);
		if (!ret && typeof ret !== 'undefined')
			{ break; }
	}
	return this;
};
