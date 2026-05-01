export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const token = url.searchParams.get("access");

  if (token !== "NL2026") {
    return new Response("Access denied.", { status: 403 });
  }

  return await context.next();
}
