# TypeScript Basics – Quick Notes

These notes cover **project setup**, **core TypeScript concepts**, and **type-safety mechanisms** in a clean, structured format.

---

## 1. Project Initialization (Step-by-Step)

### Initialize `package.json`

```bash
npm init -y
```

* Creates a default `package.json` file.

### Install TypeScript (Dev Dependency)

```bash
npm i -D typescript
```

* `-D` / `--save-dev` means TypeScript is required **only during development**, not at runtime.

### Initialize TypeScript Configuration

```bash
npx tsc --init
```

* Generates a `tsconfig.json` file.

### Compile TypeScript Code

```bash
npx tsc
```

* Compiles `.ts` files into `.js` files based on `tsconfig.json`.

---

## 2. `tsconfig.json` Important Settings

Uncomment and configure the following options:

```json
"rootDir": "./src",
"outDir": "./dist"
```

### Meaning

* **rootDir** → Where your TypeScript source files live
* **outDir** → Where compiled JavaScript files are generated

Typical structure:

```
src/
  index.ts
dist/
  index.js
```

---

## 3. `package.json` Scripts

Update scripts as follows:

```json
"scripts": {
  "start": "node dist/index.js",
  "build": "tsc"
}
```

### Usage

* `npm run build` → Compiles TypeScript
* `npm start` → Runs compiled JavaScript

---

## 4. Type Annotation

**Definition:**
Type annotation is when you explicitly specify the type of a variable, parameter, or return value.

### Example

```ts
let age: number = 17;
let name: string = "Ronny";

function add(a: number, b: number): number {
  return a + b;
}
```

---

## 5. Type Inference

**Definition:**
Type inference is when TypeScript automatically determines the type based on the assigned value.

### Example

```ts
let city = "Karachi"; // inferred as string
let score = 95;      // inferred as number
```

---

## 6. Union Types

**Definition:**
A union type allows a variable to hold **one of multiple specific types**.

### Example

```ts
let id: number | string;

id = 101;     // ✅ valid
id = "A12";  // ✅ valid
id = true;    // ❌ error
```

---

## 7. `any` Type

**Definition:**
The `any` type disables all TypeScript type checking.

### Example

```ts
let data: any;

data = 10;
data = "hello";
data = true;

data.toUpperCase(); // ❌ runtime error possible
```

⚠️ **Warning:** Avoid `any` unless absolutely necessary.

---

## 8. Type Narrowing

**Definition:**
Type narrowing is when TypeScript reduces a broad type into a more specific type inside a block of code.

### Example

```ts
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

---

## 9. Type Guards

**Definition:**
A type guard is a condition used to narrow types.

### Common Type Guards

* `typeof`
* `instanceof`
* `in`
* Custom guard functions

### `typeof` Example

```ts
if (typeof value === "string") {
  // value is string here
}
```

### `instanceof` Example

```ts
if (error instanceof Error) {
  console.log(error.message);
}
```

### `in` Operator Example

```ts
type Admin = { role: "admin"; permissions: string[] };
type User = { role: "user" };

function checkRole(person: Admin | User) {
  if ("permissions" in person) {
    console.log(person.permissions);
  }
}
```

---

## 10. Summary

* Use **Type Annotations** for clarity
* Rely on **Type Inference** when possible
* Prefer **Union Types** over `any`
* Use **Type Guards** to safely handle multiple types
* Keep a clean `src → dist` workflow

---

## Type Predicate

A type predicate is a special return type in TypeScript that tells the compiler how to narrow a variable’s type when a function returns true.

## unknown in TypeScript

`unknown` is a safe alternative to `any`.

> “I don’t know the type yet, and I must check it first before using it.”

### Example

```ts
let value: unknown;

value = 10;
value = "chai";
value = true;
// All assignments are allowed — just like any.
// But usage is restricted 👇
value.toUpperCase(); // ❌ Error
// TypeScript stops you because it does not know the type.

// You must narrow it first:
if (typeof value === "string") {
  value.toUpperCase(); // ✅ Safe
}
```