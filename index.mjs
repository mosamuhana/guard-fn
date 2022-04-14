"use strict";

export function callOnce(fn) {
  let [a, b] = [fn, undefined];
  return (...args) => (a ? (([a, b] = [undefined, a]), (b = b(...args))) : b);
}

export function guarded(fn, pre, post) {
  if (!pre && !post) return fn();
  post && (post = callOnce(post));
  try {
    pre && pre();
    const result = fn();
    if (result && typeof result.then === "function") {
      return (async () => {
        try {
          return await result;
        } finally {
          post && post();
        }
      })();
    } else {
      return result;
    }
  } finally {
    post && post();
  }
}

export function guard(fn, pre, post) {
  if (!pre && !post) return fn;
  post && (post = callOnce(post));
  return (...args) => {
    try {
      pre && pre();
      const result = fn(...args);
      if (result && typeof result.then === "function") {
        return (async () => {
          try {
            return await result;
          } finally {
            post && post();
          }
        })();
      } else {
        return result;
      }
    } finally {
      post && post();
    }
  };
}
