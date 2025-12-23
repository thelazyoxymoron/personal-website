// Taken from this blog post:
// https://www.jeremiak.com/blog/block-bots-netlify-edge-functions/
const botUas = [
	"AdsBot-Google",
	"Amazonbot",
	"anthropic-ai",
	"Applebot",
	"AwarioRssBot",
	"AwarioSmartBot",
	"Bytespider",
	"CCBot",
	"ChatGPT",
	"ChatGPT-User",
	"Claude-Web",
	"ClaudeBot",
	"cohere-ai",
	"DataForSeoBot",
	"Diffbot",
	"FacebookBot",
	"FacebookBot",
	"Google-Extended",
	"GPTBot",
	"ImagesiftBot",
	"magpie-crawler",
	"omgili",
	"Omgilibot",
	"peer39_crawler",
	"PerplexityBot",
	"YouBot",
];

export default async (request, context) => {
	const userAgent = request.headers.get("User-Agent");

	let isBot = false;

	botUas.forEach((ua) => {
		if (userAgent.toLowerCase().includes(ua.toLowerCase())) {
			isBot = true;
		}
	});

	const response = isBot
		? new Response(null, { status: 401 })
		: await context.next();
	return response;
};
