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
