console.log(a); // undefined
var a = 10;

console.log(b); // Error TDZ ReferenceError
let b = 20;

console.log(c); // Error TDZ ReferenceError
const c = 30;

/*

| Feature       | `var`                               | `let`                      | `const`                    |
| ------------- | ----------------------------------  | -------------------------- | -------------------------- |
| Scope         | Function-scoped                     | Block-scoped               | Block-scoped               |
| Redeclaration | ✅ Allowed                          | ❌ Not allowed              | ❌ Not allowed              |
| Reassignment  | ✅ Allowed                          | ✅ Allowed                  | ❌ Not allowed              |
| Hoisted       | ✅ Yes (initialized as `undefined`) | ✅ Yes (Temporal Dead Zone) | ✅ Yes (Temporal Dead Zone) |

*/



