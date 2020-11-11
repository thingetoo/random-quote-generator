var quotes = 
['The Best Way To Get Started Is To Quit Talking And Begin Doing. -Walt Disney',
"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. -Winston Churchill",
"Don\’t Let Yesterday Take Up Too Much Of Today. -Will Rogers",
"You Learn More From Failure Than From Success. Don\’t Let It Stop You. Failure Builds Character. -Unknown",
"It\’s Not Whether You Get Knocked Down, It\’s Whether You Get Up. -Vince Lombardi",
"If You Are Working On Something That You Really Care About, You Don\’t Have To Be Pushed. The Vision Pulls You. -Steve Jobs",
"We Generate Fears While We Sit. We Overcome Them By Action. -Dr. Henry Link", 
"The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today. -Franklin D. Roosevelt",
"Creativity Is Intelligence Having Fun. -Albert Einstein",
"You Are Never Too Old To Set Another Goal Or To Dream A New Dream. -C.S. Lewis"]

randomQuote = () => {
	document.getElementById('quoteDisplay').innerHTML = quotes[Math.floor(Math.random() * quotes.length)]
	}