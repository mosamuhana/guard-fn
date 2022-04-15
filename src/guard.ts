/**
 * guards function with pre function and post function
 * @param fn 
 * @param pre function to execute before fn
 * @param post function to execute after fn
 * @returns function with same signature as fn
 */
export function guard<Args extends any[], R>(
  fn: (...args: Args) => R,
  pre?: () => void,
  post?: () => void,
): typeof fn {
  if (!pre && !post) return fn
  return (...args: Args) => {
    pre && pre();
    try {
      return fn(...args);
    } finally {
      post && post();
    }
  };
}

/**
 * guards async function with pre function and post function
 * @param fn 
 * @param pre function to execute before fn
 * @param post function to execute after fn
 * @returns function with same signature as fn
 */
export function guardAsync<Args extends any[], R>(
  fn: (...args: Args) => Promise<R>,
  pre?: () => void,
  post?: () => void,
): typeof fn {
  if (!pre && !post) return fn
  return async (...args: Args) => {
    pre && pre();
    try {
      return await fn(...args);
    } finally {
      post && post();
    }
  };
}
