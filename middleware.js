export function middleware(request) {
  const auth = request.headers.get('authorization');

  const USER = 'invito';
  const PASS = 'matrimonio2026';

  if (!auth) {
    return new Response('Auth required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Area privata"',
      },
    });
  }

  const base64 = auth.split(' ')[1];
  const [user, pass] = atob(base64).split(':');

  if (user === USER && pass === PASS) {
    return; // accesso OK
  }

  return new Response('Access denied', {
    status: 401,
  });
}