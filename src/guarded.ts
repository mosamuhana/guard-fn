/**
 * execute function guarded with pre function and post function
 * @param fn 
 * @param pre function to execute before fn
 * @param post function to execute after fn
 * @returns same function signature
 */
export function guarded<T>(
  fn: () => T,
  pre?: () => void,
  post?: () => void,
): T {
  if (!pre && !post) return fn();
  pre && pre();
  try {
    return fn();
  } finally {
    post && post();
  }
}

/**
 * execute async function guarded with pre function and post function
 * @param fn 
 * @param pre function to execute before fn
 * @param post function to execute after fn
 * @returns same function signature
 */
export async function guardedAsync<T>(
  fn: () => Promise<T>,
  pre?: () => void,
  post?: () => void,
): Promise<T> {
  if (!pre && !post) return await fn();
  pre && pre();
  try {
    return await fn();
  } finally {
    post && post();
  }
}
