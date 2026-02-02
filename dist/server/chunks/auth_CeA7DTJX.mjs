function validateAdminPassword(password) {
  const adminPassword = "rar";
  return password === adminPassword;
}
function getAuthFromRequest(request) {
  return request.headers.get("X-Admin-Password");
}
function validateRequest(request) {
  const password = getAuthFromRequest(request);
  if (!password) {
    return new Response(JSON.stringify({ error: "Authentication required" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }
  if (!validateAdminPassword(password)) {
    return new Response(JSON.stringify({ error: "Invalid password" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }
  return null;
}

export { validateRequest as v };
