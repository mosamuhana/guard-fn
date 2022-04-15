/**
 * Wrapper for a function to be called only once
 * @param fn 
 * @retrun same function signature
 */
export function callOnce<Fn extends (...args: any[]) => any>(fn: Fn): Fn {
  let [a, b]: [any, any] = [fn, undefined];
  return ((...args: any[]) => (a ? (([a, b] = [undefined, a]), (b = b(...args))) : b)) as any;
}
