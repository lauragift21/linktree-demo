addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Responds with a json object
 * @param {Request} request
 * 
 */
async function handleRequest(request) {
  const links = JSON.stringify([
    { "name": "Twitter", "url": "https://twitter.com/lauragift_" },
    { "name": "Youtube", "url": "https://youtube.com/egwuenugift" },
    { "name": "LinkedIn", "url": "https://linkedin.com/egwuenugift" },
    { "name": "Instagram", "url": "https://instagram.com/thegiftcode_" },
  ]);
  return new Response(links, {
    headers: { 'content-type': 'application/json' },
  })
}

