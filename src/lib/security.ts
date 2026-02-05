/**
 * Security utilities for input sanitization and rate limiting
 */

// Simple in-memory rate limiter (for production, use Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

interface RateLimitConfig {
  windowMs: number;  // Time window in milliseconds
  maxRequests: number;  // Max requests per window
}

/**
 * Check if a request should be rate limited
 * @param identifier - Unique identifier (IP address, user ID, etc.)
 * @param config - Rate limit configuration
 * @returns Object with isLimited flag and remaining requests
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig = { windowMs: 60000, maxRequests: 10 }
): { isLimited: boolean; remaining: number; resetIn: number } {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  // Clean up expired entries periodically
  if (rateLimitMap.size > 10000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!record || now > record.resetTime) {
    // First request or window expired
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + config.windowMs,
    });
    return { isLimited: false, remaining: config.maxRequests - 1, resetIn: config.windowMs };
  }

  if (record.count >= config.maxRequests) {
    // Rate limit exceeded
    return { 
      isLimited: true, 
      remaining: 0, 
      resetIn: record.resetTime - now 
    };
  }

  // Increment counter
  record.count++;
  rateLimitMap.set(identifier, record);
  
  return { 
    isLimited: false, 
    remaining: config.maxRequests - record.count, 
    resetIn: record.resetTime - now 
  };
}

/**
 * Sanitize string input to prevent XSS attacks
 * @param input - Raw input string
 * @param maxLength - Maximum allowed length
 * @returns Sanitized string
 */
export function sanitizeString(input: unknown, maxLength: number = 1000): string {
  if (typeof input !== 'string') {
    return '';
  }
  
  return input
    .trim()
    .slice(0, maxLength)
    // Remove HTML tags
    .replace(/<[^>]*>/g, '')
    // Escape special HTML characters
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    // Remove null bytes
    .replace(/\0/g, '')
    // Remove control characters except newlines and tabs
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
}

/**
 * Validate and sanitize rating input
 * @param rating - Raw rating input
 * @returns Valid rating between 1-5 or null if invalid
 */
export function sanitizeRating(rating: unknown): number | null {
  const num = Number(rating);
  if (isNaN(num) || num < 1 || num > 5) {
    return null;
  }
  return Math.round(num);
}

/**
 * Validate email format
 * @param email - Email string to validate
 * @returns Boolean indicating if email is valid
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

/**
 * Get client IP from request headers
 * @param request - Request object
 * @returns Client IP address or 'unknown'
 */
export function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIp) {
    return realIp;
  }
  return 'unknown';
}

/**
 * Validate content security - check for suspicious patterns
 * @param content - Content to check
 * @returns Boolean indicating if content is safe
 */
export function isContentSafe(content: string): boolean {
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,  // Event handlers like onclick=
    /data:/i,
    /vbscript:/i,
    /expression\s*\(/i,
  ];
  
  return !suspiciousPatterns.some(pattern => pattern.test(content));
}
