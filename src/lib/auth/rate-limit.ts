const attempts = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(
  ip: string,
  maxAttempts = 5,
  windowMs = 15 * 60 * 1000
): { allowed: boolean; retryAfterMs: number } {
  const now = Date.now();
  const record = attempts.get(ip);

  if (!record || now > record.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfterMs: 0 };
  }

  if (record.count >= maxAttempts) {
    return { allowed: false, retryAfterMs: record.resetAt - now };
  }

  record.count++;
  return { allowed: true, retryAfterMs: 0 };
}
