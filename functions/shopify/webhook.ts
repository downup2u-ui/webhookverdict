export async function onRequest(context: any) {
  const target = "https://webhookverdict-worker.downup2u.workers.dev/shopify/webhook";

  return fetch(target, {
    method: context.request.method,
    headers: context.request.headers,
    body: context.request.body,
  });
}
