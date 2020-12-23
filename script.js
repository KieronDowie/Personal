$(document).ready(function(){
	content = $('.typing').attr('content')
	typingSpeed = 65
	pauseSpeed = 500

	type = function(){		
		c = $('.typing').html().length -1;
		if (c == content.length)
		{
			$('.typing').html(content)
		}
		else
		{
			$('.typing').html(content.substring(0,c+1) + "_")		
			if (content[c] == ".")
			{
				setTimeout(type, pauseSpeed)	
			}
			else
			{
				setTimeout(type, typingSpeed)
			}
		}		
	}
	type();

	$('.project .overlay').height($('.project img').height())
})