// Notify IndexNow search engines (Bing, Yandex, Seznam, Naver) that site URLs changed.
// Run after a production deploy: npm run indexnow
const host = "www.loopfound.in";
const key = "7d7c6d4be9719e62f4bbc0cdcfa23602";
const sitemap = await (await fetch(`https://${host}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs, status ${response.status}`);
if (!response.ok && response.status !== 202) process.exit(1);
