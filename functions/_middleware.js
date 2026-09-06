// Geo pricing: pages are authored in USD (international default).
// Visitors from mainland China (IP country CN) see CNY instead.
// Testing override: append ?cc=US (or any non-CN code) to force USD, ?cc=CN to force CNY.
export async function onRequest(context) {
  const response = await context.next();
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) {
    return response;
  }

  const url = new URL(context.request.url);
  const country =
    url.searchParams.get("cc") ||
    (context.request.cf && context.request.cf.country) ||
    "";
  if (country !== "CN") {
    return response;
  }

  const html = await response.text();
  const localized = html.replace(/(<p class="plan-price">)\$(\d+)/g, "$1¥$2");

  const headers = new Headers(response.headers);
  headers.delete("content-length");
  headers.delete("etag");
  headers.set("x-currency", "CNY");
  return new Response(localized, { status: response.status, headers });
}
