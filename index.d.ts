/**
 * Wrapper for a function to be called only once
 * @param fn 
 * @retrun same function signature
 */
export function callOnce<Fn extends (...args: any[]) => any>(fn: Fn): Fn;

/**
 * execute function guarded with pre function and post function
 * @param fn 
 * @param pre function to execute before fn
 * @param post function to execute after fn
 * @returns same function signature
 */
export function guarded<Fn extends () => any>(fn: Fn, pre?: () => void, post?: () => void): ReturnType<Fn>;

/**
 * guards function with pre function and post function
 * @param fn 
 * @param pre function to execute before fn
 * @param post function to execute after fn
 * @returns function with same signature as fn
 */
export function guard<Fn extends (...args: any[]) => any>(fn: Fn, pre?: () => void, post?: () => void): Fn;
