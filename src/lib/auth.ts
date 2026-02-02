/**
 * Check if the admin panel is enabled
 */
export function isAdminEnabled(): boolean {
  const enabled = import.meta.env.ADMIN_ENABLED;
  return enabled !== 'false' && enabled !== '0';
}

/**
 * Validate the admin password
 */
export function validateAdminPassword(password: string): boolean {
  const adminPassword = import.meta.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    console.error('ADMIN_PASSWORD environment variable is not set');
    return false;
  }

  return password === adminPassword;
}

/**
 * Extract admin password from request headers
 */
export function getAuthFromRequest(request: Request): string | null {
  return request.headers.get('X-Admin-Password');
}

/**
 * Middleware helper to validate request authentication
 * Returns an error response if auth fails, or null if auth succeeds
 */
export function validateRequest(request: Request): Response | null {
  if (!isAdminEnabled()) {
    return new Response(JSON.stringify({ error: 'Admin panel is disabled' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const password = getAuthFromRequest(request);

  if (!password) {
    return new Response(JSON.stringify({ error: 'Authentication required' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (!validateAdminPassword(password)) {
    return new Response(JSON.stringify({ error: 'Invalid password' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return null; // Auth successful
}
