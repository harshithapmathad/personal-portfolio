export default function handler(request) {
  if (request.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'content-type': 'application/json; charset=utf-8', allow: 'GET' },
    });
  }

  return Response.json({ status: 'ok', service: 'portfolio-api' });
}
