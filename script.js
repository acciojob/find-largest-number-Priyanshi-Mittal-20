function findLargest(a, b, c) {
  //your code here
	if(a>b && a>c)
	{
		return a
	}
	else if(b>a && b>c)
	{
		return b
	}
	else if(c>a && c>b)
	{
		return c
	}
	else if(a==b)
	{
		if(a>c)
		{
			return a
		}
		else
		{
			return c
		}
	}
	else if(a==c)
	{
		if(a>b)
		{
			return a
		}
		else
		{
			return b
		}
	}
	else if(b==c)
	{
		if(b>a)
		{
			return b
		}
		else
		{
			return a
		}
	}
	else if(a==b && b==c)
	{
		return a
	}
	else
	{
		return
	}
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
