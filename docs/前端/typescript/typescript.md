# TypeScript 类型工具文档

## 基础类型

### 1. `number`

TypeScript 中的 `number` 类型用于表示数字（整数或浮点数）。

```ts
let age: number = 25;
let price: number = 19.99;
```

### 2. `string`

`string` 类型用于表示字符串。

```ts
let name: string = "John";
```

### 3. `boolean`

`boolean` 类型用于表示布尔值。

```ts
let isActive: boolean = true;
let isComplete: boolean = false;
```

### 4. `void`

`void` 类型通常用于函数没有返回值的情况。

```ts
function greet(): void {
  console.log("Hello, world!");
}
```

### 5. `null` 和 `undefined`

`null` 和 `undefined` 分别表示空值和未定义的状态。

```ts
let n: null = null;
let u: undefined = undefined;
```

### 6. `any`

`any` 类型表示可以接受任意类型，它绕过了类型检查。

```ts
let value: any = 42;
value = "String now";
value = true;
```

### 7. `unknown`

`unknown` 类型比 `any` 类型更安全。它表示未知的类型，在使用前必须进行类型检查。

```ts
let result: unknown = 42;
if (typeof result === 'number') {
  let num: number = result; // 类型安全
}
```

## 联合类型与交叉类型

### 1. 联合类型 (`|`)

联合类型表示一个值可以是多种类型中的一种。

```ts
let id: number | string = 123;
id = "abc"; // 合法
```

### 2. 交叉类型 (`&`)

交叉类型表示将多个类型合并成一个新类型，要求值同时满足多个类型。

```ts
interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

type EmployeePerson = Person & Employee;

const worker: EmployeePerson = {
  name: "John",
  employeeId: 123
};
```



## 字面量类型

字面量类型用于限制变量只能是指定的一个或一组值。

```ts
let direction: "left" | "right" = "left"; // 只允许 "left" 或 "right"
direction = "right"; // 合法
direction = "up"; // 错误: "up" 不在字面量类型中
```

### 1. 数字字面量类型

```ts
let status: 0 | 1 = 1; // 只允许 0 或 1
```

### 2. 布尔字面量类型

```ts
let isActive: true = true; // 只允许 true
```

## 条件类型

条件类型用于根据类型的条件来选择不同的类型。

```ts
type IsString<T> = T extends string ? "Yes" : "No";

type Test1 = IsString<string>;  // "Yes"
type Test2 = IsString<number>;  // "No"
```

### 1. `infer` 关键字

`infer` 关键字允许从类型中推断出某部分类型。

```ts
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function foo() {
  return "hello";
}

type FooReturnType = ReturnType<typeof foo>; // "hello"
```

## 映射类型

映射类型可以基于一个类型来创建新类型，通常用于对象属性的转换。

### 1. 映射类型基础

```ts
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

interface Person {
  name: string;
  age: number;
}

type ReadOnlyPerson = ReadOnly<Person>;
// ReadOnlyPerson的属性是只读的，无法修改
```

### 2. 可选属性映射

```ts
type Partial<T> = {
  [K in keyof T]?: T[K];
};

type PersonPartial = Partial<Person>; // Person 的属性都是可选的
```

## 索引类型

索引类型用于访问和操作对象的属性类型。

### 1. `keyof` 操作符

`keyof` 操作符返回一个对象类型所有属性名的联合类型。

```ts
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // "name" | "age"
```

### 2. `typeof` 操作符

`typeof` 操作符返回变量或对象的类型。

```ts
const user = {
  name: "John",
  age: 30
};

type UserType = typeof user; // { name: string, age: number }
```

## 类型推断与类型别名

### 1. 类型推断

TypeScript 会根据初始值推断变量的类型。

```ts
let count = 10; // TypeScript 自动推断 count 为 number 类型
```

### 2. 类型别名

类型别名用于给类型起一个别名，以便复用。

```ts
type Point = { x: number, y: number };

const pt: Point = { x: 10, y: 20 };
```

## 高级类型工具

### 1. `Exclude<T, U>`

`Exclude<T, U>` 用于从类型 `T` 中排除类型 `U`，它返回的是从 `T` 中去除所有可以赋值给 `U` 的部分。

#### 示例：

```ts
type WithoutString = Exclude<string | number | boolean, string>; 
// 结果: number | boolean
```

此示例排除了 `string` 类型，最终 `WithoutString` 类型变为 `number | boolean`。

### 2. `Extract<T, U>`

`Extract<T, U>` 用于提取类型 `T` 和类型 `U` 中交集的部分。换句话说，`Extract<T, U>` 返回的是 `T` 中所有同时属于 `U` 的类型。

#### 示例：

```ts
type Extracted = Extract<string | number | boolean, string | boolean>; 
// 结果: string | boolean
```

这里我们提取了 `string` 和 `boolean`，所以 `Extracted` 类型是 `string | boolean`。

### 3. `NonNullable<T>`

`NonNullable<T>` 用于从类型 `T` 中排除 `null` 和 `undefined`，确保类型不包含这两种特殊值。

#### 示例：

```ts
type NonNullType = NonNullable<string | null | undefined>; 
// 结果: string
```

`NonNullable` 使得类型中的 `null` 和 `undefined` 被排除，结果就是 `string`。

### 4. `ReturnType<T>`

`ReturnType<T>` 用于获取一个函数类型的返回值类型。传入一个函数类型，返回该函数的返回值类型。

#### 示例：

```ts
function getUser() {
  return { name: "Alice", age: 30 };
}

type User = ReturnType<typeof getUser>;
// 结果: { name: string, age: number }
```

此例中，`ReturnType<typeof getUser>` 获取 `getUser` 函数返回的对象类型 `{ name: string, age: number }`。

### 5. `InstanceType<T>`

`InstanceType<T>` 获取构造函数类型 `T` 所产生实例的类型。这个工具非常适合用来推断类的实例类型。

#### 示例：

```ts
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

type PersonInstance = InstanceType<typeof Person>;
// 结果: Person
```

通过 `InstanceType<typeof Person>`，我们能够得到 `Person` 类的实例类型。

### 6. `ThisType<T>`

`ThisType<T>` 用于指定一个类型，在特定上下文中作为 `this` 的类型。通常用于对象字面量类型中，尤其是在定义带有方法的类型时。

#### 示例：

```ts
interface MyObject {
  name: string;
  greet(): void;
}

// 使用 ThisType 来确保 greet 方法中的 this 是 MyObject 类型
const obj: MyObject & ThisType<MyObject> = {
  name: "Alice",
  greet() {
    console.log(`Hello, ${this.name}`);  // `this` 被正确推断为 MyObject 类型
  }
};

obj.greet();  // 输出: Hello, Alice

```

`ThisType` 是指在特定上下文中，`this` 的类型，通常会与 `bind`、`call` 等方法一起使用。

### 7. `Omit<T, K>`

`Omit<T, K>` 用于从类型 `T` 中排除属性 `K`，它实际上是 `Pick<T, Exclude<keyof T, K>>` 的组合。

#### 示例：

```ts
interface Person {
  name: string;
  age: number;
  address: string;
}

type PersonWithoutAddress = Omit<Person, 'address'>;
// 结果: { name: string, age: number }
```

`Omit` 可以用来从已有的类型中排除一个或多个属性，这对构建派生类型非常有用。

### 8. `Pick<T, K>`

`Pick<T, K>` 用于从类型 `T` 中选择指定的属性 `K` 构造一个新类型。

#### 示例：

```ts
type PersonDetails = Pick<Person, 'name' | 'age'>;
// 结果: { name: string, age: number }
```

在这个例子中，`Pick<Person, 'name' | 'age'>` 只选取了 `Person` 类型中的 `name` 和 `age` 属性。

## 内置类型工具

### 1. `Partial<T>`

`Partial<T>` 将类型 `T` 中的所有属性变为可选。它可以用于创建一个类型与原类型相同，但所有属性都不强制要求提供的类型。

#### 示例：

```ts
interface Person {
  name: string;
  age: number;
}

type PartialPerson = Partial<Person>;
// 结果: { name?: string, age?: number }
```

`Partial<T>` 对所有属性进行可选化，即所有属性变成了 `T | undefined`。

### 2. `Required<T>`

`Required<T>` 与 `Partial<T>` 相对，它将类型 `T` 中的所有属性变为必填。

#### 示例：

```ts
type RequiredPerson = Required<Person>;
// 结果: { name: string, age: number }
```

通过 `Required<T>`，所有的属性都被变成了必填项。与 `Partial` 相反，它加强了类型的约束。



### 3. `Readonly<T>`

`Readonly<T>` 将类型 `T` 中的所有属性变为只读属性，意味着这些属性在对象创建后不能被修改。

#### 示例：

```ts
type ReadonlyPerson = Readonly<Person>;
// 结果: { readonly name: string, readonly age: number }
```

使用 `Readonly<T>` 后，`name` 和 `age` 都变为只读属性，不能再被修改。



### 4. `Record<K, T>`

`Record<K, T>` 用于构造一个对象类型，其中的 `K` 是对象的键（可以是联合类型或其他），`T` 是对应的值类型。这个工具通常用于构建映射类型。

#### 示例：

```ts
type NameToAge = Record<string, number>;
// 结果: { [key: string]: number }
```

`Record<string, number>` 表示一个对象，它的键是 `string` 类型，值是 `number` 类型。



### 5. `Pick<T, K>`

`Pick<T, K>` 用于从类型 `T` 中选择指定的属性 `K` 创建新类型，这对于提取类型中的一部分非常有用。

#### 示例：

```ts
type PersonInfo = Pick<Person, 'name'>;
// 结果: { name: string }
```

`Pick` 可以用于从类型中选取一些特定的属性，形成一个新的类型。



### 6. `Extract<T, U>`

`Extract<T, U>` 返回 `T` 和 `U` 交集的部分类型，也就是 `T` 中那些类型是 `U` 的一部分的部分。

#### 示例：

```ts
type Intersection = Extract<string | number | boolean, string | boolean>;
// 结果: string | boolean
```

此例中，`Extract` 提取了 `string` 和 `boolean`，结果是 `string | boolean`。



### 7. `ReadonlyArray<T>`

`ReadonlyArray<T>` 用于将数组类型的元素变为只读。这意味着数组中的元素不能被修改。

#### 示例：

```ts
const arr: ReadonlyArray<number> = [1, 2, 3];
// arr[0] = 10; // 错误：不能修改只读数组
```

`ReadonlyArray<T>` 用于确保数组的不可变性，通常用于处理那些不希望被修改的数组。



### 8. `Array<T>`

`Array<T>` 是 TypeScript 中常用的数组类型工具，表示由 `T` 类型元素组成的数组。

#### 示例：

```ts
let numbers: Array<number> = [1, 2, 3];
```

`Array<T>` 是 `T[]` 的泛型形式，两者功能等同。

