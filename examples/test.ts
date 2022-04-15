//import { guard, guarded, callOnce } from "@devteks/guard-fn";
// @ts-ignore
import { guard, guardAsync, guarded, guardedAsync, callOnce } from '../';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// @ts-ignore
async function test1() {
    const fn = guardAsync(
      async (a: number, b: number) => {
        await delay(10);
        //console.log(`${a} + ${b} = ${a + b}`);
        //throw 'ER'
        return a + b;
      },
      () => console.log("pre"),
      () => console.log("post")
    );
    const result = await fn(1, 2);
  
    console.log("result:", result);
}

// @ts-ignore
async function test2() {
    const result = await guardedAsync(
      async () => {
        await delay(10);
        //console.log(`${a} + ${b} = ${a + b}`);
        //throw 'ER'
        return 10;
      },
      () => console.log("pre"),
      () => console.log("post")
    );
  
    console.log("result:", result);
}

// @ts-ignore
async function test3() {
  const fn = callOnce(
    async (a: number, b: number) => {
      await delay(1000);
      throw 'ERROR';
      //console.log(`${a} + ${b} = ${a + b}`);
      //throw 'ER'
      return a + b;
    },
  );

  console.time('total');
  for (let i = 0; i < 10; i++) {
    try {
      await fn(1, 2);
    } catch (ex) {}
    //console.time('t');
    //const r = await fn(1, 2);
    //if (r != 3) console.log("result: NOT EQUAL");
    //console.timeEnd('t');
  }
  //console.log('result:', await fn(1, 2));
  console.timeEnd('total');
}

// @ts-ignore
async function main() {
  await test1();
  await test2();
  await test3();
}

main();
