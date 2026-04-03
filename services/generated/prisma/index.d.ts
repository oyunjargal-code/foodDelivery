
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Food
 * 
 */
export type Food = $Result.DefaultSelection<Prisma.$FoodPayload>
/**
 * Model FoodCategory
 * 
 */
export type FoodCategory = $Result.DefaultSelection<Prisma.$FoodCategoryPayload>
/**
 * Model FoodOrder
 * 
 */
export type FoodOrder = $Result.DefaultSelection<Prisma.$FoodOrderPayload>
/**
 * Model FoodOrderItems
 * 
 */
export type FoodOrderItems = $Result.DefaultSelection<Prisma.$FoodOrderItemsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  PENDING: 'PENDING',
  CANCELED: 'CANCELED',
  DELIVERED: 'DELIVERED'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.food`: Exposes CRUD operations for the **Food** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foods
    * const foods = await prisma.food.findMany()
    * ```
    */
  get food(): Prisma.FoodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foodCategory`: Exposes CRUD operations for the **FoodCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodCategories
    * const foodCategories = await prisma.foodCategory.findMany()
    * ```
    */
  get foodCategory(): Prisma.FoodCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foodOrder`: Exposes CRUD operations for the **FoodOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodOrders
    * const foodOrders = await prisma.foodOrder.findMany()
    * ```
    */
  get foodOrder(): Prisma.FoodOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foodOrderItems`: Exposes CRUD operations for the **FoodOrderItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodOrderItems
    * const foodOrderItems = await prisma.foodOrderItems.findMany()
    * ```
    */
  get foodOrderItems(): Prisma.FoodOrderItemsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Food: 'Food',
    FoodCategory: 'FoodCategory',
    FoodOrder: 'FoodOrder',
    FoodOrderItems: 'FoodOrderItems'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "food" | "foodCategory" | "foodOrder" | "foodOrderItems"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Food: {
        payload: Prisma.$FoodPayload<ExtArgs>
        fields: Prisma.FoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findFirst: {
            args: Prisma.FoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findMany: {
            args: Prisma.FoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          create: {
            args: Prisma.FoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          createMany: {
            args: Prisma.FoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          delete: {
            args: Prisma.FoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          update: {
            args: Prisma.FoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          deleteMany: {
            args: Prisma.FoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          upsert: {
            args: Prisma.FoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          aggregate: {
            args: Prisma.FoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFood>
          }
          groupBy: {
            args: Prisma.FoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodCountArgs<ExtArgs>
            result: $Utils.Optional<FoodCountAggregateOutputType> | number
          }
        }
      }
      FoodCategory: {
        payload: Prisma.$FoodCategoryPayload<ExtArgs>
        fields: Prisma.FoodCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          findFirst: {
            args: Prisma.FoodCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          findMany: {
            args: Prisma.FoodCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>[]
          }
          create: {
            args: Prisma.FoodCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          createMany: {
            args: Prisma.FoodCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>[]
          }
          delete: {
            args: Prisma.FoodCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          update: {
            args: Prisma.FoodCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          deleteMany: {
            args: Prisma.FoodCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoodCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>[]
          }
          upsert: {
            args: Prisma.FoodCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          aggregate: {
            args: Prisma.FoodCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodCategory>
          }
          groupBy: {
            args: Prisma.FoodCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<FoodCategoryCountAggregateOutputType> | number
          }
        }
      }
      FoodOrder: {
        payload: Prisma.$FoodOrderPayload<ExtArgs>
        fields: Prisma.FoodOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOrderPayload>
          }
          findFirst: {
            args: Prisma.FoodOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOrderPayload>
          }
          findMany: {
            args: Prisma.FoodOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOrderPayload>[]
          }
          create: {
            args: Prisma.FoodOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOrderPayload>
          }
          createMany: {
            args: Prisma.FoodOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOrderPayload>[]
          }
          delete: {
            args: Prisma.FoodOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOrderPayload>
          }
          update: {
            args: Prisma.FoodOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOrderPayload>
          }
          deleteMany: {
            args: Prisma.FoodOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoodOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOrderPayload>[]
          }
          upsert: {
            args: Prisma.FoodOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOrderPayload>
          }
          aggregate: {
            args: Prisma.FoodOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodOrder>
          }
          groupBy: {
            args: Prisma.FoodOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodOrderCountArgs<ExtArgs>
            result: $Utils.Optional<FoodOrderCountAggregateOutputType> | number
          }
        }
      }
      FoodOrderItems: {
        payload: Prisma.$FoodOrderItemsPayload<ExtArgs>
        fields: Prisma.FoodOrderItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodOrderItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOrderItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodOrderItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOrderItemsPayload>
          }
          findFirst: {
            args: Prisma.FoodOrderItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOrderItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodOrderItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOrderItemsPayload>
          }
          findMany: {
            args: Prisma.FoodOrderItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOrderItemsPayload>[]
          }
          create: {
            args: Prisma.FoodOrderItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOrderItemsPayload>
          }
          createMany: {
            args: Prisma.FoodOrderItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodOrderItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOrderItemsPayload>[]
          }
          delete: {
            args: Prisma.FoodOrderItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOrderItemsPayload>
          }
          update: {
            args: Prisma.FoodOrderItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOrderItemsPayload>
          }
          deleteMany: {
            args: Prisma.FoodOrderItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodOrderItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoodOrderItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOrderItemsPayload>[]
          }
          upsert: {
            args: Prisma.FoodOrderItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOrderItemsPayload>
          }
          aggregate: {
            args: Prisma.FoodOrderItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodOrderItems>
          }
          groupBy: {
            args: Prisma.FoodOrderItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodOrderItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodOrderItemsCountArgs<ExtArgs>
            result: $Utils.Optional<FoodOrderItemsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    food?: FoodOmit
    foodCategory?: FoodCategoryOmit
    foodOrder?: FoodOrderOmit
    foodOrderItems?: FoodOrderItemsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodOrderWhereInput
  }


  /**
   * Count Type FoodCountOutputType
   */

  export type FoodCountOutputType = {
    foodOrderItems: number
  }

  export type FoodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foodOrderItems?: boolean | FoodCountOutputTypeCountFoodOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCountOutputType
     */
    select?: FoodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountFoodOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodOrderItemsWhereInput
  }


  /**
   * Count Type FoodCategoryCountOutputType
   */

  export type FoodCategoryCountOutputType = {
    foods: number
  }

  export type FoodCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foods?: boolean | FoodCategoryCountOutputTypeCountFoodsArgs
  }

  // Custom InputTypes
  /**
   * FoodCategoryCountOutputType without action
   */
  export type FoodCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategoryCountOutputType
     */
    select?: FoodCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodCategoryCountOutputType without action
   */
  export type FoodCategoryCountOutputTypeCountFoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
  }


  /**
   * Count Type FoodOrderCountOutputType
   */

  export type FoodOrderCountOutputType = {
    foodOrderItems: number
  }

  export type FoodOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foodOrderItems?: boolean | FoodOrderCountOutputTypeCountFoodOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * FoodOrderCountOutputType without action
   */
  export type FoodOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrderCountOutputType
     */
    select?: FoodOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodOrderCountOutputType without action
   */
  export type FoodOrderCountOutputTypeCountFoodOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodOrderItemsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    phoneNumber: string | null
    address: string | null
    role: $Enums.Role | null
    ttl: Date | null
    isVerifies: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    phoneNumber: string | null
    address: string | null
    role: $Enums.Role | null
    ttl: Date | null
    isVerifies: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    phoneNumber: number
    address: number
    role: number
    ttl: number
    isVerifies: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    phoneNumber?: true
    address?: true
    role?: true
    ttl?: true
    isVerifies?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    phoneNumber?: true
    address?: true
    role?: true
    ttl?: true
    isVerifies?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    phoneNumber?: true
    address?: true
    role?: true
    ttl?: true
    isVerifies?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    phoneNumber: string
    address: string
    role: $Enums.Role
    ttl: Date | null
    isVerifies: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    address?: boolean
    role?: boolean
    ttl?: boolean
    isVerifies?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    address?: boolean
    role?: boolean
    ttl?: boolean
    isVerifies?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    address?: boolean
    role?: boolean
    ttl?: boolean
    isVerifies?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    address?: boolean
    role?: boolean
    ttl?: boolean
    isVerifies?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "phoneNumber" | "address" | "role" | "ttl" | "isVerifies" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      orders: Prisma.$FoodOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      phoneNumber: string
      address: string
      role: $Enums.Role
      ttl: Date | null
      isVerifies: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly ttl: FieldRef<"User", 'DateTime'>
    readonly isVerifies: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrder
     */
    select?: FoodOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrder
     */
    omit?: FoodOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderInclude<ExtArgs> | null
    where?: FoodOrderWhereInput
    orderBy?: FoodOrderOrderByWithRelationInput | FoodOrderOrderByWithRelationInput[]
    cursor?: FoodOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodOrderScalarFieldEnum | FoodOrderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Food
   */

  export type AggregateFood = {
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  export type FoodAvgAggregateOutputType = {
    id: number | null
    foodCategoyId: number | null
  }

  export type FoodSumAggregateOutputType = {
    id: number | null
    foodCategoyId: number | null
  }

  export type FoodMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: string | null
    image: string | null
    ingredients: string | null
    foodCategoyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: string | null
    image: string | null
    ingredients: string | null
    foodCategoyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodCountAggregateOutputType = {
    id: number
    name: number
    price: number
    image: number
    ingredients: number
    foodCategoyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FoodAvgAggregateInputType = {
    id?: true
    foodCategoyId?: true
  }

  export type FoodSumAggregateInputType = {
    id?: true
    foodCategoyId?: true
  }

  export type FoodMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    image?: true
    ingredients?: true
    foodCategoyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    image?: true
    ingredients?: true
    foodCategoyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    image?: true
    ingredients?: true
    foodCategoyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Food to aggregate.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Foods
    **/
    _count?: true | FoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodMaxAggregateInputType
  }

  export type GetFoodAggregateType<T extends FoodAggregateArgs> = {
        [P in keyof T & keyof AggregateFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood[P]>
      : GetScalarType<T[P], AggregateFood[P]>
  }




  export type FoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithAggregationInput | FoodOrderByWithAggregationInput[]
    by: FoodScalarFieldEnum[] | FoodScalarFieldEnum
    having?: FoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodCountAggregateInputType | true
    _avg?: FoodAvgAggregateInputType
    _sum?: FoodSumAggregateInputType
    _min?: FoodMinAggregateInputType
    _max?: FoodMaxAggregateInputType
  }

  export type FoodGroupByOutputType = {
    id: number
    name: string
    price: string
    image: string
    ingredients: string
    foodCategoyId: number
    createdAt: Date
    updatedAt: Date
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  type GetFoodGroupByPayload<T extends FoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodGroupByOutputType[P]>
            : GetScalarType<T[P], FoodGroupByOutputType[P]>
        }
      >
    >


  export type FoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    image?: boolean
    ingredients?: boolean
    foodCategoyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | FoodCategoryDefaultArgs<ExtArgs>
    foodOrderItems?: boolean | Food$foodOrderItemsArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    image?: boolean
    ingredients?: boolean
    foodCategoyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | FoodCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    image?: boolean
    ingredients?: boolean
    foodCategoyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | FoodCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    image?: boolean
    ingredients?: boolean
    foodCategoyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FoodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "image" | "ingredients" | "foodCategoyId" | "createdAt" | "updatedAt", ExtArgs["result"]["food"]>
  export type FoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | FoodCategoryDefaultArgs<ExtArgs>
    foodOrderItems?: boolean | Food$foodOrderItemsArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FoodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | FoodCategoryDefaultArgs<ExtArgs>
  }
  export type FoodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | FoodCategoryDefaultArgs<ExtArgs>
  }

  export type $FoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Food"
    objects: {
      category: Prisma.$FoodCategoryPayload<ExtArgs>
      foodOrderItems: Prisma.$FoodOrderItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: string
      image: string
      ingredients: string
      foodCategoyId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["food"]>
    composites: {}
  }

  type FoodGetPayload<S extends boolean | null | undefined | FoodDefaultArgs> = $Result.GetResult<Prisma.$FoodPayload, S>

  type FoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodCountAggregateInputType | true
    }

  export interface FoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Food'], meta: { name: 'Food' } }
    /**
     * Find zero or one Food that matches the filter.
     * @param {FoodFindUniqueArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodFindUniqueArgs>(args: SelectSubset<T, FoodFindUniqueArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Food that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodFindUniqueOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodFindFirstArgs>(args?: SelectSubset<T, FoodFindFirstArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foods
     * const foods = await prisma.food.findMany()
     * 
     * // Get first 10 Foods
     * const foods = await prisma.food.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodWithIdOnly = await prisma.food.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodFindManyArgs>(args?: SelectSubset<T, FoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Food.
     * @param {FoodCreateArgs} args - Arguments to create a Food.
     * @example
     * // Create one Food
     * const Food = await prisma.food.create({
     *   data: {
     *     // ... data to create a Food
     *   }
     * })
     * 
     */
    create<T extends FoodCreateArgs>(args: SelectSubset<T, FoodCreateArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Foods.
     * @param {FoodCreateManyArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodCreateManyArgs>(args?: SelectSubset<T, FoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Foods and returns the data saved in the database.
     * @param {FoodCreateManyAndReturnArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Foods and only return the `id`
     * const foodWithIdOnly = await prisma.food.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Food.
     * @param {FoodDeleteArgs} args - Arguments to delete one Food.
     * @example
     * // Delete one Food
     * const Food = await prisma.food.delete({
     *   where: {
     *     // ... filter to delete one Food
     *   }
     * })
     * 
     */
    delete<T extends FoodDeleteArgs>(args: SelectSubset<T, FoodDeleteArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Food.
     * @param {FoodUpdateArgs} args - Arguments to update one Food.
     * @example
     * // Update one Food
     * const food = await prisma.food.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodUpdateArgs>(args: SelectSubset<T, FoodUpdateArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Foods.
     * @param {FoodDeleteManyArgs} args - Arguments to filter Foods to delete.
     * @example
     * // Delete a few Foods
     * const { count } = await prisma.food.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodDeleteManyArgs>(args?: SelectSubset<T, FoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodUpdateManyArgs>(args: SelectSubset<T, FoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods and returns the data updated in the database.
     * @param {FoodUpdateManyAndReturnArgs} args - Arguments to update many Foods.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Foods and only return the `id`
     * const foodWithIdOnly = await prisma.food.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FoodUpdateManyAndReturnArgs>(args: SelectSubset<T, FoodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Food.
     * @param {FoodUpsertArgs} args - Arguments to update or create a Food.
     * @example
     * // Update or create a Food
     * const food = await prisma.food.upsert({
     *   create: {
     *     // ... data to create a Food
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food we want to update
     *   }
     * })
     */
    upsert<T extends FoodUpsertArgs>(args: SelectSubset<T, FoodUpsertArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCountArgs} args - Arguments to filter Foods to count.
     * @example
     * // Count the number of Foods
     * const count = await prisma.food.count({
     *   where: {
     *     // ... the filter for the Foods we want to count
     *   }
     * })
    **/
    count<T extends FoodCountArgs>(
      args?: Subset<T, FoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodAggregateArgs>(args: Subset<T, FoodAggregateArgs>): Prisma.PrismaPromise<GetFoodAggregateType<T>>

    /**
     * Group by Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodGroupByArgs['orderBy'] }
        : { orderBy?: FoodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Food model
   */
  readonly fields: FoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Food.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends FoodCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodCategoryDefaultArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    foodOrderItems<T extends Food$foodOrderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Food$foodOrderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodOrderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Food model
   */
  interface FoodFieldRefs {
    readonly id: FieldRef<"Food", 'Int'>
    readonly name: FieldRef<"Food", 'String'>
    readonly price: FieldRef<"Food", 'String'>
    readonly image: FieldRef<"Food", 'String'>
    readonly ingredients: FieldRef<"Food", 'String'>
    readonly foodCategoyId: FieldRef<"Food", 'Int'>
    readonly createdAt: FieldRef<"Food", 'DateTime'>
    readonly updatedAt: FieldRef<"Food", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Food findUnique
   */
  export type FoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findUniqueOrThrow
   */
  export type FoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findFirst
   */
  export type FoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food findFirstOrThrow
   */
  export type FoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food findMany
   */
  export type FoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food create
   */
  export type FoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to create a Food.
     */
    data: XOR<FoodCreateInput, FoodUncheckedCreateInput>
  }

  /**
   * Food createMany
   */
  export type FoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Foods.
     */
    data: FoodCreateManyInput | FoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Food createManyAndReturn
   */
  export type FoodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * The data used to create many Foods.
     */
    data: FoodCreateManyInput | FoodCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Food update
   */
  export type FoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to update a Food.
     */
    data: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
    /**
     * Choose, which Food to update.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food updateMany
   */
  export type FoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to update.
     */
    limit?: number
  }

  /**
   * Food updateManyAndReturn
   */
  export type FoodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Food upsert
   */
  export type FoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The filter to search for the Food to update in case it exists.
     */
    where: FoodWhereUniqueInput
    /**
     * In case the Food found by the `where` argument doesn't exist, create a new Food with this data.
     */
    create: XOR<FoodCreateInput, FoodUncheckedCreateInput>
    /**
     * In case the Food was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
  }

  /**
   * Food delete
   */
  export type FoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter which Food to delete.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food deleteMany
   */
  export type FoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foods to delete
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to delete.
     */
    limit?: number
  }

  /**
   * Food.foodOrderItems
   */
  export type Food$foodOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrderItems
     */
    select?: FoodOrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrderItems
     */
    omit?: FoodOrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderItemsInclude<ExtArgs> | null
    where?: FoodOrderItemsWhereInput
    orderBy?: FoodOrderItemsOrderByWithRelationInput | FoodOrderItemsOrderByWithRelationInput[]
    cursor?: FoodOrderItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodOrderItemsScalarFieldEnum | FoodOrderItemsScalarFieldEnum[]
  }

  /**
   * Food without action
   */
  export type FoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
  }


  /**
   * Model FoodCategory
   */

  export type AggregateFoodCategory = {
    _count: FoodCategoryCountAggregateOutputType | null
    _avg: FoodCategoryAvgAggregateOutputType | null
    _sum: FoodCategorySumAggregateOutputType | null
    _min: FoodCategoryMinAggregateOutputType | null
    _max: FoodCategoryMaxAggregateOutputType | null
  }

  export type FoodCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type FoodCategorySumAggregateOutputType = {
    id: number | null
  }

  export type FoodCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodCategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FoodCategoryAvgAggregateInputType = {
    id?: true
  }

  export type FoodCategorySumAggregateInputType = {
    id?: true
  }

  export type FoodCategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodCategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FoodCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodCategory to aggregate.
     */
    where?: FoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCategories to fetch.
     */
    orderBy?: FoodCategoryOrderByWithRelationInput | FoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodCategories
    **/
    _count?: true | FoodCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodCategoryMaxAggregateInputType
  }

  export type GetFoodCategoryAggregateType<T extends FoodCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodCategory[P]>
      : GetScalarType<T[P], AggregateFoodCategory[P]>
  }




  export type FoodCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodCategoryWhereInput
    orderBy?: FoodCategoryOrderByWithAggregationInput | FoodCategoryOrderByWithAggregationInput[]
    by: FoodCategoryScalarFieldEnum[] | FoodCategoryScalarFieldEnum
    having?: FoodCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodCategoryCountAggregateInputType | true
    _avg?: FoodCategoryAvgAggregateInputType
    _sum?: FoodCategorySumAggregateInputType
    _min?: FoodCategoryMinAggregateInputType
    _max?: FoodCategoryMaxAggregateInputType
  }

  export type FoodCategoryGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: FoodCategoryCountAggregateOutputType | null
    _avg: FoodCategoryAvgAggregateOutputType | null
    _sum: FoodCategorySumAggregateOutputType | null
    _min: FoodCategoryMinAggregateOutputType | null
    _max: FoodCategoryMaxAggregateOutputType | null
  }

  type GetFoodCategoryGroupByPayload<T extends FoodCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], FoodCategoryGroupByOutputType[P]>
        }
      >
    >


  export type FoodCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    foods?: boolean | FoodCategory$foodsArgs<ExtArgs>
    _count?: boolean | FoodCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodCategory"]>

  export type FoodCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["foodCategory"]>

  export type FoodCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["foodCategory"]>

  export type FoodCategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FoodCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["foodCategory"]>
  export type FoodCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foods?: boolean | FoodCategory$foodsArgs<ExtArgs>
    _count?: boolean | FoodCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FoodCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FoodCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FoodCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodCategory"
    objects: {
      foods: Prisma.$FoodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["foodCategory"]>
    composites: {}
  }

  type FoodCategoryGetPayload<S extends boolean | null | undefined | FoodCategoryDefaultArgs> = $Result.GetResult<Prisma.$FoodCategoryPayload, S>

  type FoodCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodCategoryCountAggregateInputType | true
    }

  export interface FoodCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodCategory'], meta: { name: 'FoodCategory' } }
    /**
     * Find zero or one FoodCategory that matches the filter.
     * @param {FoodCategoryFindUniqueArgs} args - Arguments to find a FoodCategory
     * @example
     * // Get one FoodCategory
     * const foodCategory = await prisma.foodCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodCategoryFindUniqueArgs>(args: SelectSubset<T, FoodCategoryFindUniqueArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoodCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodCategoryFindUniqueOrThrowArgs} args - Arguments to find a FoodCategory
     * @example
     * // Get one FoodCategory
     * const foodCategory = await prisma.foodCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryFindFirstArgs} args - Arguments to find a FoodCategory
     * @example
     * // Get one FoodCategory
     * const foodCategory = await prisma.foodCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodCategoryFindFirstArgs>(args?: SelectSubset<T, FoodCategoryFindFirstArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryFindFirstOrThrowArgs} args - Arguments to find a FoodCategory
     * @example
     * // Get one FoodCategory
     * const foodCategory = await prisma.foodCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoodCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodCategories
     * const foodCategories = await prisma.foodCategory.findMany()
     * 
     * // Get first 10 FoodCategories
     * const foodCategories = await prisma.foodCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodCategoryWithIdOnly = await prisma.foodCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodCategoryFindManyArgs>(args?: SelectSubset<T, FoodCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoodCategory.
     * @param {FoodCategoryCreateArgs} args - Arguments to create a FoodCategory.
     * @example
     * // Create one FoodCategory
     * const FoodCategory = await prisma.foodCategory.create({
     *   data: {
     *     // ... data to create a FoodCategory
     *   }
     * })
     * 
     */
    create<T extends FoodCategoryCreateArgs>(args: SelectSubset<T, FoodCategoryCreateArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoodCategories.
     * @param {FoodCategoryCreateManyArgs} args - Arguments to create many FoodCategories.
     * @example
     * // Create many FoodCategories
     * const foodCategory = await prisma.foodCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodCategoryCreateManyArgs>(args?: SelectSubset<T, FoodCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FoodCategories and returns the data saved in the database.
     * @param {FoodCategoryCreateManyAndReturnArgs} args - Arguments to create many FoodCategories.
     * @example
     * // Create many FoodCategories
     * const foodCategory = await prisma.foodCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FoodCategories and only return the `id`
     * const foodCategoryWithIdOnly = await prisma.foodCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FoodCategory.
     * @param {FoodCategoryDeleteArgs} args - Arguments to delete one FoodCategory.
     * @example
     * // Delete one FoodCategory
     * const FoodCategory = await prisma.foodCategory.delete({
     *   where: {
     *     // ... filter to delete one FoodCategory
     *   }
     * })
     * 
     */
    delete<T extends FoodCategoryDeleteArgs>(args: SelectSubset<T, FoodCategoryDeleteArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoodCategory.
     * @param {FoodCategoryUpdateArgs} args - Arguments to update one FoodCategory.
     * @example
     * // Update one FoodCategory
     * const foodCategory = await prisma.foodCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodCategoryUpdateArgs>(args: SelectSubset<T, FoodCategoryUpdateArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoodCategories.
     * @param {FoodCategoryDeleteManyArgs} args - Arguments to filter FoodCategories to delete.
     * @example
     * // Delete a few FoodCategories
     * const { count } = await prisma.foodCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodCategoryDeleteManyArgs>(args?: SelectSubset<T, FoodCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodCategories
     * const foodCategory = await prisma.foodCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodCategoryUpdateManyArgs>(args: SelectSubset<T, FoodCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodCategories and returns the data updated in the database.
     * @param {FoodCategoryUpdateManyAndReturnArgs} args - Arguments to update many FoodCategories.
     * @example
     * // Update many FoodCategories
     * const foodCategory = await prisma.foodCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FoodCategories and only return the `id`
     * const foodCategoryWithIdOnly = await prisma.foodCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FoodCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, FoodCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FoodCategory.
     * @param {FoodCategoryUpsertArgs} args - Arguments to update or create a FoodCategory.
     * @example
     * // Update or create a FoodCategory
     * const foodCategory = await prisma.foodCategory.upsert({
     *   create: {
     *     // ... data to create a FoodCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodCategory we want to update
     *   }
     * })
     */
    upsert<T extends FoodCategoryUpsertArgs>(args: SelectSubset<T, FoodCategoryUpsertArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoodCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryCountArgs} args - Arguments to filter FoodCategories to count.
     * @example
     * // Count the number of FoodCategories
     * const count = await prisma.foodCategory.count({
     *   where: {
     *     // ... the filter for the FoodCategories we want to count
     *   }
     * })
    **/
    count<T extends FoodCategoryCountArgs>(
      args?: Subset<T, FoodCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodCategoryAggregateArgs>(args: Subset<T, FoodCategoryAggregateArgs>): Prisma.PrismaPromise<GetFoodCategoryAggregateType<T>>

    /**
     * Group by FoodCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodCategoryGroupByArgs['orderBy'] }
        : { orderBy?: FoodCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodCategory model
   */
  readonly fields: FoodCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    foods<T extends FoodCategory$foodsArgs<ExtArgs> = {}>(args?: Subset<T, FoodCategory$foodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FoodCategory model
   */
  interface FoodCategoryFieldRefs {
    readonly id: FieldRef<"FoodCategory", 'Int'>
    readonly name: FieldRef<"FoodCategory", 'String'>
    readonly createdAt: FieldRef<"FoodCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"FoodCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FoodCategory findUnique
   */
  export type FoodCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategory to fetch.
     */
    where: FoodCategoryWhereUniqueInput
  }

  /**
   * FoodCategory findUniqueOrThrow
   */
  export type FoodCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategory to fetch.
     */
    where: FoodCategoryWhereUniqueInput
  }

  /**
   * FoodCategory findFirst
   */
  export type FoodCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategory to fetch.
     */
    where?: FoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCategories to fetch.
     */
    orderBy?: FoodCategoryOrderByWithRelationInput | FoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodCategories.
     */
    cursor?: FoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodCategories.
     */
    distinct?: FoodCategoryScalarFieldEnum | FoodCategoryScalarFieldEnum[]
  }

  /**
   * FoodCategory findFirstOrThrow
   */
  export type FoodCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategory to fetch.
     */
    where?: FoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCategories to fetch.
     */
    orderBy?: FoodCategoryOrderByWithRelationInput | FoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodCategories.
     */
    cursor?: FoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodCategories.
     */
    distinct?: FoodCategoryScalarFieldEnum | FoodCategoryScalarFieldEnum[]
  }

  /**
   * FoodCategory findMany
   */
  export type FoodCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategories to fetch.
     */
    where?: FoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCategories to fetch.
     */
    orderBy?: FoodCategoryOrderByWithRelationInput | FoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodCategories.
     */
    cursor?: FoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodCategories.
     */
    distinct?: FoodCategoryScalarFieldEnum | FoodCategoryScalarFieldEnum[]
  }

  /**
   * FoodCategory create
   */
  export type FoodCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodCategory.
     */
    data: XOR<FoodCategoryCreateInput, FoodCategoryUncheckedCreateInput>
  }

  /**
   * FoodCategory createMany
   */
  export type FoodCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodCategories.
     */
    data: FoodCategoryCreateManyInput | FoodCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodCategory createManyAndReturn
   */
  export type FoodCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many FoodCategories.
     */
    data: FoodCategoryCreateManyInput | FoodCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodCategory update
   */
  export type FoodCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodCategory.
     */
    data: XOR<FoodCategoryUpdateInput, FoodCategoryUncheckedUpdateInput>
    /**
     * Choose, which FoodCategory to update.
     */
    where: FoodCategoryWhereUniqueInput
  }

  /**
   * FoodCategory updateMany
   */
  export type FoodCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodCategories.
     */
    data: XOR<FoodCategoryUpdateManyMutationInput, FoodCategoryUncheckedUpdateManyInput>
    /**
     * Filter which FoodCategories to update
     */
    where?: FoodCategoryWhereInput
    /**
     * Limit how many FoodCategories to update.
     */
    limit?: number
  }

  /**
   * FoodCategory updateManyAndReturn
   */
  export type FoodCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * The data used to update FoodCategories.
     */
    data: XOR<FoodCategoryUpdateManyMutationInput, FoodCategoryUncheckedUpdateManyInput>
    /**
     * Filter which FoodCategories to update
     */
    where?: FoodCategoryWhereInput
    /**
     * Limit how many FoodCategories to update.
     */
    limit?: number
  }

  /**
   * FoodCategory upsert
   */
  export type FoodCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodCategory to update in case it exists.
     */
    where: FoodCategoryWhereUniqueInput
    /**
     * In case the FoodCategory found by the `where` argument doesn't exist, create a new FoodCategory with this data.
     */
    create: XOR<FoodCategoryCreateInput, FoodCategoryUncheckedCreateInput>
    /**
     * In case the FoodCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodCategoryUpdateInput, FoodCategoryUncheckedUpdateInput>
  }

  /**
   * FoodCategory delete
   */
  export type FoodCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter which FoodCategory to delete.
     */
    where: FoodCategoryWhereUniqueInput
  }

  /**
   * FoodCategory deleteMany
   */
  export type FoodCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodCategories to delete
     */
    where?: FoodCategoryWhereInput
    /**
     * Limit how many FoodCategories to delete.
     */
    limit?: number
  }

  /**
   * FoodCategory.foods
   */
  export type FoodCategory$foodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    cursor?: FoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * FoodCategory without action
   */
  export type FoodCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
  }


  /**
   * Model FoodOrder
   */

  export type AggregateFoodOrder = {
    _count: FoodOrderCountAggregateOutputType | null
    _avg: FoodOrderAvgAggregateOutputType | null
    _sum: FoodOrderSumAggregateOutputType | null
    _min: FoodOrderMinAggregateOutputType | null
    _max: FoodOrderMaxAggregateOutputType | null
  }

  export type FoodOrderAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type FoodOrderSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type FoodOrderMinAggregateOutputType = {
    id: number | null
    userId: number | null
    totalPrice: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodOrderMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    totalPrice: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodOrderCountAggregateOutputType = {
    id: number
    userId: number
    totalPrice: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FoodOrderAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type FoodOrderSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type FoodOrderMinAggregateInputType = {
    id?: true
    userId?: true
    totalPrice?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodOrderMaxAggregateInputType = {
    id?: true
    userId?: true
    totalPrice?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodOrderCountAggregateInputType = {
    id?: true
    userId?: true
    totalPrice?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FoodOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodOrder to aggregate.
     */
    where?: FoodOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodOrders to fetch.
     */
    orderBy?: FoodOrderOrderByWithRelationInput | FoodOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodOrders
    **/
    _count?: true | FoodOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodOrderMaxAggregateInputType
  }

  export type GetFoodOrderAggregateType<T extends FoodOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodOrder[P]>
      : GetScalarType<T[P], AggregateFoodOrder[P]>
  }




  export type FoodOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodOrderWhereInput
    orderBy?: FoodOrderOrderByWithAggregationInput | FoodOrderOrderByWithAggregationInput[]
    by: FoodOrderScalarFieldEnum[] | FoodOrderScalarFieldEnum
    having?: FoodOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodOrderCountAggregateInputType | true
    _avg?: FoodOrderAvgAggregateInputType
    _sum?: FoodOrderSumAggregateInputType
    _min?: FoodOrderMinAggregateInputType
    _max?: FoodOrderMaxAggregateInputType
  }

  export type FoodOrderGroupByOutputType = {
    id: number
    userId: number
    totalPrice: string
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: FoodOrderCountAggregateOutputType | null
    _avg: FoodOrderAvgAggregateOutputType | null
    _sum: FoodOrderSumAggregateOutputType | null
    _min: FoodOrderMinAggregateOutputType | null
    _max: FoodOrderMaxAggregateOutputType | null
  }

  type GetFoodOrderGroupByPayload<T extends FoodOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodOrderGroupByOutputType[P]>
            : GetScalarType<T[P], FoodOrderGroupByOutputType[P]>
        }
      >
    >


  export type FoodOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalPrice?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    foodOrderItems?: boolean | FoodOrder$foodOrderItemsArgs<ExtArgs>
    _count?: boolean | FoodOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodOrder"]>

  export type FoodOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalPrice?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodOrder"]>

  export type FoodOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalPrice?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodOrder"]>

  export type FoodOrderSelectScalar = {
    id?: boolean
    userId?: boolean
    totalPrice?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FoodOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "totalPrice" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["foodOrder"]>
  export type FoodOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    foodOrderItems?: boolean | FoodOrder$foodOrderItemsArgs<ExtArgs>
    _count?: boolean | FoodOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FoodOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FoodOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FoodOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodOrder"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      foodOrderItems: Prisma.$FoodOrderItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      totalPrice: string
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["foodOrder"]>
    composites: {}
  }

  type FoodOrderGetPayload<S extends boolean | null | undefined | FoodOrderDefaultArgs> = $Result.GetResult<Prisma.$FoodOrderPayload, S>

  type FoodOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodOrderCountAggregateInputType | true
    }

  export interface FoodOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodOrder'], meta: { name: 'FoodOrder' } }
    /**
     * Find zero or one FoodOrder that matches the filter.
     * @param {FoodOrderFindUniqueArgs} args - Arguments to find a FoodOrder
     * @example
     * // Get one FoodOrder
     * const foodOrder = await prisma.foodOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodOrderFindUniqueArgs>(args: SelectSubset<T, FoodOrderFindUniqueArgs<ExtArgs>>): Prisma__FoodOrderClient<$Result.GetResult<Prisma.$FoodOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoodOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodOrderFindUniqueOrThrowArgs} args - Arguments to find a FoodOrder
     * @example
     * // Get one FoodOrder
     * const foodOrder = await prisma.foodOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodOrderClient<$Result.GetResult<Prisma.$FoodOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodOrderFindFirstArgs} args - Arguments to find a FoodOrder
     * @example
     * // Get one FoodOrder
     * const foodOrder = await prisma.foodOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodOrderFindFirstArgs>(args?: SelectSubset<T, FoodOrderFindFirstArgs<ExtArgs>>): Prisma__FoodOrderClient<$Result.GetResult<Prisma.$FoodOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodOrderFindFirstOrThrowArgs} args - Arguments to find a FoodOrder
     * @example
     * // Get one FoodOrder
     * const foodOrder = await prisma.foodOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodOrderClient<$Result.GetResult<Prisma.$FoodOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoodOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodOrders
     * const foodOrders = await prisma.foodOrder.findMany()
     * 
     * // Get first 10 FoodOrders
     * const foodOrders = await prisma.foodOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodOrderWithIdOnly = await prisma.foodOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodOrderFindManyArgs>(args?: SelectSubset<T, FoodOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoodOrder.
     * @param {FoodOrderCreateArgs} args - Arguments to create a FoodOrder.
     * @example
     * // Create one FoodOrder
     * const FoodOrder = await prisma.foodOrder.create({
     *   data: {
     *     // ... data to create a FoodOrder
     *   }
     * })
     * 
     */
    create<T extends FoodOrderCreateArgs>(args: SelectSubset<T, FoodOrderCreateArgs<ExtArgs>>): Prisma__FoodOrderClient<$Result.GetResult<Prisma.$FoodOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoodOrders.
     * @param {FoodOrderCreateManyArgs} args - Arguments to create many FoodOrders.
     * @example
     * // Create many FoodOrders
     * const foodOrder = await prisma.foodOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodOrderCreateManyArgs>(args?: SelectSubset<T, FoodOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FoodOrders and returns the data saved in the database.
     * @param {FoodOrderCreateManyAndReturnArgs} args - Arguments to create many FoodOrders.
     * @example
     * // Create many FoodOrders
     * const foodOrder = await prisma.foodOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FoodOrders and only return the `id`
     * const foodOrderWithIdOnly = await prisma.foodOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FoodOrder.
     * @param {FoodOrderDeleteArgs} args - Arguments to delete one FoodOrder.
     * @example
     * // Delete one FoodOrder
     * const FoodOrder = await prisma.foodOrder.delete({
     *   where: {
     *     // ... filter to delete one FoodOrder
     *   }
     * })
     * 
     */
    delete<T extends FoodOrderDeleteArgs>(args: SelectSubset<T, FoodOrderDeleteArgs<ExtArgs>>): Prisma__FoodOrderClient<$Result.GetResult<Prisma.$FoodOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoodOrder.
     * @param {FoodOrderUpdateArgs} args - Arguments to update one FoodOrder.
     * @example
     * // Update one FoodOrder
     * const foodOrder = await prisma.foodOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodOrderUpdateArgs>(args: SelectSubset<T, FoodOrderUpdateArgs<ExtArgs>>): Prisma__FoodOrderClient<$Result.GetResult<Prisma.$FoodOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoodOrders.
     * @param {FoodOrderDeleteManyArgs} args - Arguments to filter FoodOrders to delete.
     * @example
     * // Delete a few FoodOrders
     * const { count } = await prisma.foodOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodOrderDeleteManyArgs>(args?: SelectSubset<T, FoodOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodOrders
     * const foodOrder = await prisma.foodOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodOrderUpdateManyArgs>(args: SelectSubset<T, FoodOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodOrders and returns the data updated in the database.
     * @param {FoodOrderUpdateManyAndReturnArgs} args - Arguments to update many FoodOrders.
     * @example
     * // Update many FoodOrders
     * const foodOrder = await prisma.foodOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FoodOrders and only return the `id`
     * const foodOrderWithIdOnly = await prisma.foodOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FoodOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, FoodOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FoodOrder.
     * @param {FoodOrderUpsertArgs} args - Arguments to update or create a FoodOrder.
     * @example
     * // Update or create a FoodOrder
     * const foodOrder = await prisma.foodOrder.upsert({
     *   create: {
     *     // ... data to create a FoodOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodOrder we want to update
     *   }
     * })
     */
    upsert<T extends FoodOrderUpsertArgs>(args: SelectSubset<T, FoodOrderUpsertArgs<ExtArgs>>): Prisma__FoodOrderClient<$Result.GetResult<Prisma.$FoodOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoodOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodOrderCountArgs} args - Arguments to filter FoodOrders to count.
     * @example
     * // Count the number of FoodOrders
     * const count = await prisma.foodOrder.count({
     *   where: {
     *     // ... the filter for the FoodOrders we want to count
     *   }
     * })
    **/
    count<T extends FoodOrderCountArgs>(
      args?: Subset<T, FoodOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodOrderAggregateArgs>(args: Subset<T, FoodOrderAggregateArgs>): Prisma.PrismaPromise<GetFoodOrderAggregateType<T>>

    /**
     * Group by FoodOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodOrderGroupByArgs['orderBy'] }
        : { orderBy?: FoodOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodOrder model
   */
  readonly fields: FoodOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    foodOrderItems<T extends FoodOrder$foodOrderItemsArgs<ExtArgs> = {}>(args?: Subset<T, FoodOrder$foodOrderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodOrderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FoodOrder model
   */
  interface FoodOrderFieldRefs {
    readonly id: FieldRef<"FoodOrder", 'Int'>
    readonly userId: FieldRef<"FoodOrder", 'Int'>
    readonly totalPrice: FieldRef<"FoodOrder", 'String'>
    readonly status: FieldRef<"FoodOrder", 'Status'>
    readonly createdAt: FieldRef<"FoodOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"FoodOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FoodOrder findUnique
   */
  export type FoodOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrder
     */
    select?: FoodOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrder
     */
    omit?: FoodOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderInclude<ExtArgs> | null
    /**
     * Filter, which FoodOrder to fetch.
     */
    where: FoodOrderWhereUniqueInput
  }

  /**
   * FoodOrder findUniqueOrThrow
   */
  export type FoodOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrder
     */
    select?: FoodOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrder
     */
    omit?: FoodOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderInclude<ExtArgs> | null
    /**
     * Filter, which FoodOrder to fetch.
     */
    where: FoodOrderWhereUniqueInput
  }

  /**
   * FoodOrder findFirst
   */
  export type FoodOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrder
     */
    select?: FoodOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrder
     */
    omit?: FoodOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderInclude<ExtArgs> | null
    /**
     * Filter, which FoodOrder to fetch.
     */
    where?: FoodOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodOrders to fetch.
     */
    orderBy?: FoodOrderOrderByWithRelationInput | FoodOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodOrders.
     */
    cursor?: FoodOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodOrders.
     */
    distinct?: FoodOrderScalarFieldEnum | FoodOrderScalarFieldEnum[]
  }

  /**
   * FoodOrder findFirstOrThrow
   */
  export type FoodOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrder
     */
    select?: FoodOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrder
     */
    omit?: FoodOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderInclude<ExtArgs> | null
    /**
     * Filter, which FoodOrder to fetch.
     */
    where?: FoodOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodOrders to fetch.
     */
    orderBy?: FoodOrderOrderByWithRelationInput | FoodOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodOrders.
     */
    cursor?: FoodOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodOrders.
     */
    distinct?: FoodOrderScalarFieldEnum | FoodOrderScalarFieldEnum[]
  }

  /**
   * FoodOrder findMany
   */
  export type FoodOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrder
     */
    select?: FoodOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrder
     */
    omit?: FoodOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderInclude<ExtArgs> | null
    /**
     * Filter, which FoodOrders to fetch.
     */
    where?: FoodOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodOrders to fetch.
     */
    orderBy?: FoodOrderOrderByWithRelationInput | FoodOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodOrders.
     */
    cursor?: FoodOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodOrders.
     */
    distinct?: FoodOrderScalarFieldEnum | FoodOrderScalarFieldEnum[]
  }

  /**
   * FoodOrder create
   */
  export type FoodOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrder
     */
    select?: FoodOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrder
     */
    omit?: FoodOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodOrder.
     */
    data: XOR<FoodOrderCreateInput, FoodOrderUncheckedCreateInput>
  }

  /**
   * FoodOrder createMany
   */
  export type FoodOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodOrders.
     */
    data: FoodOrderCreateManyInput | FoodOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodOrder createManyAndReturn
   */
  export type FoodOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrder
     */
    select?: FoodOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrder
     */
    omit?: FoodOrderOmit<ExtArgs> | null
    /**
     * The data used to create many FoodOrders.
     */
    data: FoodOrderCreateManyInput | FoodOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FoodOrder update
   */
  export type FoodOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrder
     */
    select?: FoodOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrder
     */
    omit?: FoodOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodOrder.
     */
    data: XOR<FoodOrderUpdateInput, FoodOrderUncheckedUpdateInput>
    /**
     * Choose, which FoodOrder to update.
     */
    where: FoodOrderWhereUniqueInput
  }

  /**
   * FoodOrder updateMany
   */
  export type FoodOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodOrders.
     */
    data: XOR<FoodOrderUpdateManyMutationInput, FoodOrderUncheckedUpdateManyInput>
    /**
     * Filter which FoodOrders to update
     */
    where?: FoodOrderWhereInput
    /**
     * Limit how many FoodOrders to update.
     */
    limit?: number
  }

  /**
   * FoodOrder updateManyAndReturn
   */
  export type FoodOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrder
     */
    select?: FoodOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrder
     */
    omit?: FoodOrderOmit<ExtArgs> | null
    /**
     * The data used to update FoodOrders.
     */
    data: XOR<FoodOrderUpdateManyMutationInput, FoodOrderUncheckedUpdateManyInput>
    /**
     * Filter which FoodOrders to update
     */
    where?: FoodOrderWhereInput
    /**
     * Limit how many FoodOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FoodOrder upsert
   */
  export type FoodOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrder
     */
    select?: FoodOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrder
     */
    omit?: FoodOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodOrder to update in case it exists.
     */
    where: FoodOrderWhereUniqueInput
    /**
     * In case the FoodOrder found by the `where` argument doesn't exist, create a new FoodOrder with this data.
     */
    create: XOR<FoodOrderCreateInput, FoodOrderUncheckedCreateInput>
    /**
     * In case the FoodOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodOrderUpdateInput, FoodOrderUncheckedUpdateInput>
  }

  /**
   * FoodOrder delete
   */
  export type FoodOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrder
     */
    select?: FoodOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrder
     */
    omit?: FoodOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderInclude<ExtArgs> | null
    /**
     * Filter which FoodOrder to delete.
     */
    where: FoodOrderWhereUniqueInput
  }

  /**
   * FoodOrder deleteMany
   */
  export type FoodOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodOrders to delete
     */
    where?: FoodOrderWhereInput
    /**
     * Limit how many FoodOrders to delete.
     */
    limit?: number
  }

  /**
   * FoodOrder.foodOrderItems
   */
  export type FoodOrder$foodOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrderItems
     */
    select?: FoodOrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrderItems
     */
    omit?: FoodOrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderItemsInclude<ExtArgs> | null
    where?: FoodOrderItemsWhereInput
    orderBy?: FoodOrderItemsOrderByWithRelationInput | FoodOrderItemsOrderByWithRelationInput[]
    cursor?: FoodOrderItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodOrderItemsScalarFieldEnum | FoodOrderItemsScalarFieldEnum[]
  }

  /**
   * FoodOrder without action
   */
  export type FoodOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrder
     */
    select?: FoodOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrder
     */
    omit?: FoodOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderInclude<ExtArgs> | null
  }


  /**
   * Model FoodOrderItems
   */

  export type AggregateFoodOrderItems = {
    _count: FoodOrderItemsCountAggregateOutputType | null
    _avg: FoodOrderItemsAvgAggregateOutputType | null
    _sum: FoodOrderItemsSumAggregateOutputType | null
    _min: FoodOrderItemsMinAggregateOutputType | null
    _max: FoodOrderItemsMaxAggregateOutputType | null
  }

  export type FoodOrderItemsAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    foodId: number | null
    foodOrderId: number | null
  }

  export type FoodOrderItemsSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    foodId: number | null
    foodOrderId: number | null
  }

  export type FoodOrderItemsMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    foodId: number | null
    foodOrderId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodOrderItemsMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    foodId: number | null
    foodOrderId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodOrderItemsCountAggregateOutputType = {
    id: number
    quantity: number
    foodId: number
    foodOrderId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FoodOrderItemsAvgAggregateInputType = {
    id?: true
    quantity?: true
    foodId?: true
    foodOrderId?: true
  }

  export type FoodOrderItemsSumAggregateInputType = {
    id?: true
    quantity?: true
    foodId?: true
    foodOrderId?: true
  }

  export type FoodOrderItemsMinAggregateInputType = {
    id?: true
    quantity?: true
    foodId?: true
    foodOrderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodOrderItemsMaxAggregateInputType = {
    id?: true
    quantity?: true
    foodId?: true
    foodOrderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodOrderItemsCountAggregateInputType = {
    id?: true
    quantity?: true
    foodId?: true
    foodOrderId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FoodOrderItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodOrderItems to aggregate.
     */
    where?: FoodOrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodOrderItems to fetch.
     */
    orderBy?: FoodOrderItemsOrderByWithRelationInput | FoodOrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodOrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodOrderItems
    **/
    _count?: true | FoodOrderItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodOrderItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodOrderItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodOrderItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodOrderItemsMaxAggregateInputType
  }

  export type GetFoodOrderItemsAggregateType<T extends FoodOrderItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodOrderItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodOrderItems[P]>
      : GetScalarType<T[P], AggregateFoodOrderItems[P]>
  }




  export type FoodOrderItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodOrderItemsWhereInput
    orderBy?: FoodOrderItemsOrderByWithAggregationInput | FoodOrderItemsOrderByWithAggregationInput[]
    by: FoodOrderItemsScalarFieldEnum[] | FoodOrderItemsScalarFieldEnum
    having?: FoodOrderItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodOrderItemsCountAggregateInputType | true
    _avg?: FoodOrderItemsAvgAggregateInputType
    _sum?: FoodOrderItemsSumAggregateInputType
    _min?: FoodOrderItemsMinAggregateInputType
    _max?: FoodOrderItemsMaxAggregateInputType
  }

  export type FoodOrderItemsGroupByOutputType = {
    id: number
    quantity: number
    foodId: number
    foodOrderId: number
    createdAt: Date
    updatedAt: Date
    _count: FoodOrderItemsCountAggregateOutputType | null
    _avg: FoodOrderItemsAvgAggregateOutputType | null
    _sum: FoodOrderItemsSumAggregateOutputType | null
    _min: FoodOrderItemsMinAggregateOutputType | null
    _max: FoodOrderItemsMaxAggregateOutputType | null
  }

  type GetFoodOrderItemsGroupByPayload<T extends FoodOrderItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodOrderItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodOrderItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodOrderItemsGroupByOutputType[P]>
            : GetScalarType<T[P], FoodOrderItemsGroupByOutputType[P]>
        }
      >
    >


  export type FoodOrderItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    foodId?: boolean
    foodOrderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    food?: boolean | FoodDefaultArgs<ExtArgs>
    order?: boolean | FoodOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodOrderItems"]>

  export type FoodOrderItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    foodId?: boolean
    foodOrderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    food?: boolean | FoodDefaultArgs<ExtArgs>
    order?: boolean | FoodOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodOrderItems"]>

  export type FoodOrderItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    foodId?: boolean
    foodOrderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    food?: boolean | FoodDefaultArgs<ExtArgs>
    order?: boolean | FoodOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodOrderItems"]>

  export type FoodOrderItemsSelectScalar = {
    id?: boolean
    quantity?: boolean
    foodId?: boolean
    foodOrderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FoodOrderItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "foodId" | "foodOrderId" | "createdAt" | "updatedAt", ExtArgs["result"]["foodOrderItems"]>
  export type FoodOrderItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | FoodDefaultArgs<ExtArgs>
    order?: boolean | FoodOrderDefaultArgs<ExtArgs>
  }
  export type FoodOrderItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | FoodDefaultArgs<ExtArgs>
    order?: boolean | FoodOrderDefaultArgs<ExtArgs>
  }
  export type FoodOrderItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | FoodDefaultArgs<ExtArgs>
    order?: boolean | FoodOrderDefaultArgs<ExtArgs>
  }

  export type $FoodOrderItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodOrderItems"
    objects: {
      food: Prisma.$FoodPayload<ExtArgs>
      order: Prisma.$FoodOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantity: number
      foodId: number
      foodOrderId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["foodOrderItems"]>
    composites: {}
  }

  type FoodOrderItemsGetPayload<S extends boolean | null | undefined | FoodOrderItemsDefaultArgs> = $Result.GetResult<Prisma.$FoodOrderItemsPayload, S>

  type FoodOrderItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodOrderItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodOrderItemsCountAggregateInputType | true
    }

  export interface FoodOrderItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodOrderItems'], meta: { name: 'FoodOrderItems' } }
    /**
     * Find zero or one FoodOrderItems that matches the filter.
     * @param {FoodOrderItemsFindUniqueArgs} args - Arguments to find a FoodOrderItems
     * @example
     * // Get one FoodOrderItems
     * const foodOrderItems = await prisma.foodOrderItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodOrderItemsFindUniqueArgs>(args: SelectSubset<T, FoodOrderItemsFindUniqueArgs<ExtArgs>>): Prisma__FoodOrderItemsClient<$Result.GetResult<Prisma.$FoodOrderItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoodOrderItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodOrderItemsFindUniqueOrThrowArgs} args - Arguments to find a FoodOrderItems
     * @example
     * // Get one FoodOrderItems
     * const foodOrderItems = await prisma.foodOrderItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodOrderItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodOrderItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodOrderItemsClient<$Result.GetResult<Prisma.$FoodOrderItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodOrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodOrderItemsFindFirstArgs} args - Arguments to find a FoodOrderItems
     * @example
     * // Get one FoodOrderItems
     * const foodOrderItems = await prisma.foodOrderItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodOrderItemsFindFirstArgs>(args?: SelectSubset<T, FoodOrderItemsFindFirstArgs<ExtArgs>>): Prisma__FoodOrderItemsClient<$Result.GetResult<Prisma.$FoodOrderItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodOrderItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodOrderItemsFindFirstOrThrowArgs} args - Arguments to find a FoodOrderItems
     * @example
     * // Get one FoodOrderItems
     * const foodOrderItems = await prisma.foodOrderItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodOrderItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodOrderItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodOrderItemsClient<$Result.GetResult<Prisma.$FoodOrderItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoodOrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodOrderItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodOrderItems
     * const foodOrderItems = await prisma.foodOrderItems.findMany()
     * 
     * // Get first 10 FoodOrderItems
     * const foodOrderItems = await prisma.foodOrderItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodOrderItemsWithIdOnly = await prisma.foodOrderItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodOrderItemsFindManyArgs>(args?: SelectSubset<T, FoodOrderItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodOrderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoodOrderItems.
     * @param {FoodOrderItemsCreateArgs} args - Arguments to create a FoodOrderItems.
     * @example
     * // Create one FoodOrderItems
     * const FoodOrderItems = await prisma.foodOrderItems.create({
     *   data: {
     *     // ... data to create a FoodOrderItems
     *   }
     * })
     * 
     */
    create<T extends FoodOrderItemsCreateArgs>(args: SelectSubset<T, FoodOrderItemsCreateArgs<ExtArgs>>): Prisma__FoodOrderItemsClient<$Result.GetResult<Prisma.$FoodOrderItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoodOrderItems.
     * @param {FoodOrderItemsCreateManyArgs} args - Arguments to create many FoodOrderItems.
     * @example
     * // Create many FoodOrderItems
     * const foodOrderItems = await prisma.foodOrderItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodOrderItemsCreateManyArgs>(args?: SelectSubset<T, FoodOrderItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FoodOrderItems and returns the data saved in the database.
     * @param {FoodOrderItemsCreateManyAndReturnArgs} args - Arguments to create many FoodOrderItems.
     * @example
     * // Create many FoodOrderItems
     * const foodOrderItems = await prisma.foodOrderItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FoodOrderItems and only return the `id`
     * const foodOrderItemsWithIdOnly = await prisma.foodOrderItems.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodOrderItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodOrderItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodOrderItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FoodOrderItems.
     * @param {FoodOrderItemsDeleteArgs} args - Arguments to delete one FoodOrderItems.
     * @example
     * // Delete one FoodOrderItems
     * const FoodOrderItems = await prisma.foodOrderItems.delete({
     *   where: {
     *     // ... filter to delete one FoodOrderItems
     *   }
     * })
     * 
     */
    delete<T extends FoodOrderItemsDeleteArgs>(args: SelectSubset<T, FoodOrderItemsDeleteArgs<ExtArgs>>): Prisma__FoodOrderItemsClient<$Result.GetResult<Prisma.$FoodOrderItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoodOrderItems.
     * @param {FoodOrderItemsUpdateArgs} args - Arguments to update one FoodOrderItems.
     * @example
     * // Update one FoodOrderItems
     * const foodOrderItems = await prisma.foodOrderItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodOrderItemsUpdateArgs>(args: SelectSubset<T, FoodOrderItemsUpdateArgs<ExtArgs>>): Prisma__FoodOrderItemsClient<$Result.GetResult<Prisma.$FoodOrderItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoodOrderItems.
     * @param {FoodOrderItemsDeleteManyArgs} args - Arguments to filter FoodOrderItems to delete.
     * @example
     * // Delete a few FoodOrderItems
     * const { count } = await prisma.foodOrderItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodOrderItemsDeleteManyArgs>(args?: SelectSubset<T, FoodOrderItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodOrderItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodOrderItems
     * const foodOrderItems = await prisma.foodOrderItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodOrderItemsUpdateManyArgs>(args: SelectSubset<T, FoodOrderItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodOrderItems and returns the data updated in the database.
     * @param {FoodOrderItemsUpdateManyAndReturnArgs} args - Arguments to update many FoodOrderItems.
     * @example
     * // Update many FoodOrderItems
     * const foodOrderItems = await prisma.foodOrderItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FoodOrderItems and only return the `id`
     * const foodOrderItemsWithIdOnly = await prisma.foodOrderItems.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FoodOrderItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, FoodOrderItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodOrderItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FoodOrderItems.
     * @param {FoodOrderItemsUpsertArgs} args - Arguments to update or create a FoodOrderItems.
     * @example
     * // Update or create a FoodOrderItems
     * const foodOrderItems = await prisma.foodOrderItems.upsert({
     *   create: {
     *     // ... data to create a FoodOrderItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodOrderItems we want to update
     *   }
     * })
     */
    upsert<T extends FoodOrderItemsUpsertArgs>(args: SelectSubset<T, FoodOrderItemsUpsertArgs<ExtArgs>>): Prisma__FoodOrderItemsClient<$Result.GetResult<Prisma.$FoodOrderItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoodOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodOrderItemsCountArgs} args - Arguments to filter FoodOrderItems to count.
     * @example
     * // Count the number of FoodOrderItems
     * const count = await prisma.foodOrderItems.count({
     *   where: {
     *     // ... the filter for the FoodOrderItems we want to count
     *   }
     * })
    **/
    count<T extends FoodOrderItemsCountArgs>(
      args?: Subset<T, FoodOrderItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodOrderItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodOrderItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodOrderItemsAggregateArgs>(args: Subset<T, FoodOrderItemsAggregateArgs>): Prisma.PrismaPromise<GetFoodOrderItemsAggregateType<T>>

    /**
     * Group by FoodOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodOrderItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodOrderItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodOrderItemsGroupByArgs['orderBy'] }
        : { orderBy?: FoodOrderItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodOrderItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodOrderItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodOrderItems model
   */
  readonly fields: FoodOrderItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodOrderItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodOrderItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    food<T extends FoodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodDefaultArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order<T extends FoodOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodOrderDefaultArgs<ExtArgs>>): Prisma__FoodOrderClient<$Result.GetResult<Prisma.$FoodOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FoodOrderItems model
   */
  interface FoodOrderItemsFieldRefs {
    readonly id: FieldRef<"FoodOrderItems", 'Int'>
    readonly quantity: FieldRef<"FoodOrderItems", 'Int'>
    readonly foodId: FieldRef<"FoodOrderItems", 'Int'>
    readonly foodOrderId: FieldRef<"FoodOrderItems", 'Int'>
    readonly createdAt: FieldRef<"FoodOrderItems", 'DateTime'>
    readonly updatedAt: FieldRef<"FoodOrderItems", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FoodOrderItems findUnique
   */
  export type FoodOrderItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrderItems
     */
    select?: FoodOrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrderItems
     */
    omit?: FoodOrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which FoodOrderItems to fetch.
     */
    where: FoodOrderItemsWhereUniqueInput
  }

  /**
   * FoodOrderItems findUniqueOrThrow
   */
  export type FoodOrderItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrderItems
     */
    select?: FoodOrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrderItems
     */
    omit?: FoodOrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which FoodOrderItems to fetch.
     */
    where: FoodOrderItemsWhereUniqueInput
  }

  /**
   * FoodOrderItems findFirst
   */
  export type FoodOrderItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrderItems
     */
    select?: FoodOrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrderItems
     */
    omit?: FoodOrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which FoodOrderItems to fetch.
     */
    where?: FoodOrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodOrderItems to fetch.
     */
    orderBy?: FoodOrderItemsOrderByWithRelationInput | FoodOrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodOrderItems.
     */
    cursor?: FoodOrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodOrderItems.
     */
    distinct?: FoodOrderItemsScalarFieldEnum | FoodOrderItemsScalarFieldEnum[]
  }

  /**
   * FoodOrderItems findFirstOrThrow
   */
  export type FoodOrderItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrderItems
     */
    select?: FoodOrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrderItems
     */
    omit?: FoodOrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which FoodOrderItems to fetch.
     */
    where?: FoodOrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodOrderItems to fetch.
     */
    orderBy?: FoodOrderItemsOrderByWithRelationInput | FoodOrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodOrderItems.
     */
    cursor?: FoodOrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodOrderItems.
     */
    distinct?: FoodOrderItemsScalarFieldEnum | FoodOrderItemsScalarFieldEnum[]
  }

  /**
   * FoodOrderItems findMany
   */
  export type FoodOrderItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrderItems
     */
    select?: FoodOrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrderItems
     */
    omit?: FoodOrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which FoodOrderItems to fetch.
     */
    where?: FoodOrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodOrderItems to fetch.
     */
    orderBy?: FoodOrderItemsOrderByWithRelationInput | FoodOrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodOrderItems.
     */
    cursor?: FoodOrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodOrderItems.
     */
    distinct?: FoodOrderItemsScalarFieldEnum | FoodOrderItemsScalarFieldEnum[]
  }

  /**
   * FoodOrderItems create
   */
  export type FoodOrderItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrderItems
     */
    select?: FoodOrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrderItems
     */
    omit?: FoodOrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodOrderItems.
     */
    data: XOR<FoodOrderItemsCreateInput, FoodOrderItemsUncheckedCreateInput>
  }

  /**
   * FoodOrderItems createMany
   */
  export type FoodOrderItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodOrderItems.
     */
    data: FoodOrderItemsCreateManyInput | FoodOrderItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodOrderItems createManyAndReturn
   */
  export type FoodOrderItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrderItems
     */
    select?: FoodOrderItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrderItems
     */
    omit?: FoodOrderItemsOmit<ExtArgs> | null
    /**
     * The data used to create many FoodOrderItems.
     */
    data: FoodOrderItemsCreateManyInput | FoodOrderItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FoodOrderItems update
   */
  export type FoodOrderItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrderItems
     */
    select?: FoodOrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrderItems
     */
    omit?: FoodOrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodOrderItems.
     */
    data: XOR<FoodOrderItemsUpdateInput, FoodOrderItemsUncheckedUpdateInput>
    /**
     * Choose, which FoodOrderItems to update.
     */
    where: FoodOrderItemsWhereUniqueInput
  }

  /**
   * FoodOrderItems updateMany
   */
  export type FoodOrderItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodOrderItems.
     */
    data: XOR<FoodOrderItemsUpdateManyMutationInput, FoodOrderItemsUncheckedUpdateManyInput>
    /**
     * Filter which FoodOrderItems to update
     */
    where?: FoodOrderItemsWhereInput
    /**
     * Limit how many FoodOrderItems to update.
     */
    limit?: number
  }

  /**
   * FoodOrderItems updateManyAndReturn
   */
  export type FoodOrderItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrderItems
     */
    select?: FoodOrderItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrderItems
     */
    omit?: FoodOrderItemsOmit<ExtArgs> | null
    /**
     * The data used to update FoodOrderItems.
     */
    data: XOR<FoodOrderItemsUpdateManyMutationInput, FoodOrderItemsUncheckedUpdateManyInput>
    /**
     * Filter which FoodOrderItems to update
     */
    where?: FoodOrderItemsWhereInput
    /**
     * Limit how many FoodOrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FoodOrderItems upsert
   */
  export type FoodOrderItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrderItems
     */
    select?: FoodOrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrderItems
     */
    omit?: FoodOrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodOrderItems to update in case it exists.
     */
    where: FoodOrderItemsWhereUniqueInput
    /**
     * In case the FoodOrderItems found by the `where` argument doesn't exist, create a new FoodOrderItems with this data.
     */
    create: XOR<FoodOrderItemsCreateInput, FoodOrderItemsUncheckedCreateInput>
    /**
     * In case the FoodOrderItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodOrderItemsUpdateInput, FoodOrderItemsUncheckedUpdateInput>
  }

  /**
   * FoodOrderItems delete
   */
  export type FoodOrderItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrderItems
     */
    select?: FoodOrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrderItems
     */
    omit?: FoodOrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderItemsInclude<ExtArgs> | null
    /**
     * Filter which FoodOrderItems to delete.
     */
    where: FoodOrderItemsWhereUniqueInput
  }

  /**
   * FoodOrderItems deleteMany
   */
  export type FoodOrderItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodOrderItems to delete
     */
    where?: FoodOrderItemsWhereInput
    /**
     * Limit how many FoodOrderItems to delete.
     */
    limit?: number
  }

  /**
   * FoodOrderItems without action
   */
  export type FoodOrderItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOrderItems
     */
    select?: FoodOrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOrderItems
     */
    omit?: FoodOrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodOrderItemsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    phoneNumber: 'phoneNumber',
    address: 'address',
    role: 'role',
    ttl: 'ttl',
    isVerifies: 'isVerifies',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FoodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    image: 'image',
    ingredients: 'ingredients',
    foodCategoyId: 'foodCategoyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FoodScalarFieldEnum = (typeof FoodScalarFieldEnum)[keyof typeof FoodScalarFieldEnum]


  export const FoodCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FoodCategoryScalarFieldEnum = (typeof FoodCategoryScalarFieldEnum)[keyof typeof FoodCategoryScalarFieldEnum]


  export const FoodOrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    totalPrice: 'totalPrice',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FoodOrderScalarFieldEnum = (typeof FoodOrderScalarFieldEnum)[keyof typeof FoodOrderScalarFieldEnum]


  export const FoodOrderItemsScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    foodId: 'foodId',
    foodOrderId: 'foodOrderId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FoodOrderItemsScalarFieldEnum = (typeof FoodOrderItemsScalarFieldEnum)[keyof typeof FoodOrderItemsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    ttl?: DateTimeNullableFilter<"User"> | Date | string | null
    isVerifies?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orders?: FoodOrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    role?: SortOrder
    ttl?: SortOrderInput | SortOrder
    isVerifies?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: FoodOrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    ttl?: DateTimeNullableFilter<"User"> | Date | string | null
    isVerifies?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orders?: FoodOrderListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    role?: SortOrder
    ttl?: SortOrderInput | SortOrder
    isVerifies?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    address?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    ttl?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isVerifies?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FoodWhereInput = {
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    id?: IntFilter<"Food"> | number
    name?: StringFilter<"Food"> | string
    price?: StringFilter<"Food"> | string
    image?: StringFilter<"Food"> | string
    ingredients?: StringFilter<"Food"> | string
    foodCategoyId?: IntFilter<"Food"> | number
    createdAt?: DateTimeFilter<"Food"> | Date | string
    updatedAt?: DateTimeFilter<"Food"> | Date | string
    category?: XOR<FoodCategoryScalarRelationFilter, FoodCategoryWhereInput>
    foodOrderItems?: FoodOrderItemsListRelationFilter
  }

  export type FoodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image?: SortOrder
    ingredients?: SortOrder
    foodCategoyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: FoodCategoryOrderByWithRelationInput
    foodOrderItems?: FoodOrderItemsOrderByRelationAggregateInput
  }

  export type FoodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    name?: StringFilter<"Food"> | string
    price?: StringFilter<"Food"> | string
    image?: StringFilter<"Food"> | string
    ingredients?: StringFilter<"Food"> | string
    foodCategoyId?: IntFilter<"Food"> | number
    createdAt?: DateTimeFilter<"Food"> | Date | string
    updatedAt?: DateTimeFilter<"Food"> | Date | string
    category?: XOR<FoodCategoryScalarRelationFilter, FoodCategoryWhereInput>
    foodOrderItems?: FoodOrderItemsListRelationFilter
  }, "id">

  export type FoodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image?: SortOrder
    ingredients?: SortOrder
    foodCategoyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FoodCountOrderByAggregateInput
    _avg?: FoodAvgOrderByAggregateInput
    _max?: FoodMaxOrderByAggregateInput
    _min?: FoodMinOrderByAggregateInput
    _sum?: FoodSumOrderByAggregateInput
  }

  export type FoodScalarWhereWithAggregatesInput = {
    AND?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    OR?: FoodScalarWhereWithAggregatesInput[]
    NOT?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Food"> | number
    name?: StringWithAggregatesFilter<"Food"> | string
    price?: StringWithAggregatesFilter<"Food"> | string
    image?: StringWithAggregatesFilter<"Food"> | string
    ingredients?: StringWithAggregatesFilter<"Food"> | string
    foodCategoyId?: IntWithAggregatesFilter<"Food"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Food"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Food"> | Date | string
  }

  export type FoodCategoryWhereInput = {
    AND?: FoodCategoryWhereInput | FoodCategoryWhereInput[]
    OR?: FoodCategoryWhereInput[]
    NOT?: FoodCategoryWhereInput | FoodCategoryWhereInput[]
    id?: IntFilter<"FoodCategory"> | number
    name?: StringFilter<"FoodCategory"> | string
    createdAt?: DateTimeFilter<"FoodCategory"> | Date | string
    updatedAt?: DateTimeFilter<"FoodCategory"> | Date | string
    foods?: FoodListRelationFilter
  }

  export type FoodCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    foods?: FoodOrderByRelationAggregateInput
  }

  export type FoodCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FoodCategoryWhereInput | FoodCategoryWhereInput[]
    OR?: FoodCategoryWhereInput[]
    NOT?: FoodCategoryWhereInput | FoodCategoryWhereInput[]
    name?: StringFilter<"FoodCategory"> | string
    createdAt?: DateTimeFilter<"FoodCategory"> | Date | string
    updatedAt?: DateTimeFilter<"FoodCategory"> | Date | string
    foods?: FoodListRelationFilter
  }, "id">

  export type FoodCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FoodCategoryCountOrderByAggregateInput
    _avg?: FoodCategoryAvgOrderByAggregateInput
    _max?: FoodCategoryMaxOrderByAggregateInput
    _min?: FoodCategoryMinOrderByAggregateInput
    _sum?: FoodCategorySumOrderByAggregateInput
  }

  export type FoodCategoryScalarWhereWithAggregatesInput = {
    AND?: FoodCategoryScalarWhereWithAggregatesInput | FoodCategoryScalarWhereWithAggregatesInput[]
    OR?: FoodCategoryScalarWhereWithAggregatesInput[]
    NOT?: FoodCategoryScalarWhereWithAggregatesInput | FoodCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FoodCategory"> | number
    name?: StringWithAggregatesFilter<"FoodCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FoodCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FoodCategory"> | Date | string
  }

  export type FoodOrderWhereInput = {
    AND?: FoodOrderWhereInput | FoodOrderWhereInput[]
    OR?: FoodOrderWhereInput[]
    NOT?: FoodOrderWhereInput | FoodOrderWhereInput[]
    id?: IntFilter<"FoodOrder"> | number
    userId?: IntFilter<"FoodOrder"> | number
    totalPrice?: StringFilter<"FoodOrder"> | string
    status?: EnumStatusFilter<"FoodOrder"> | $Enums.Status
    createdAt?: DateTimeFilter<"FoodOrder"> | Date | string
    updatedAt?: DateTimeFilter<"FoodOrder"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    foodOrderItems?: FoodOrderItemsListRelationFilter
  }

  export type FoodOrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    foodOrderItems?: FoodOrderItemsOrderByRelationAggregateInput
  }

  export type FoodOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FoodOrderWhereInput | FoodOrderWhereInput[]
    OR?: FoodOrderWhereInput[]
    NOT?: FoodOrderWhereInput | FoodOrderWhereInput[]
    userId?: IntFilter<"FoodOrder"> | number
    totalPrice?: StringFilter<"FoodOrder"> | string
    status?: EnumStatusFilter<"FoodOrder"> | $Enums.Status
    createdAt?: DateTimeFilter<"FoodOrder"> | Date | string
    updatedAt?: DateTimeFilter<"FoodOrder"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    foodOrderItems?: FoodOrderItemsListRelationFilter
  }, "id">

  export type FoodOrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FoodOrderCountOrderByAggregateInput
    _avg?: FoodOrderAvgOrderByAggregateInput
    _max?: FoodOrderMaxOrderByAggregateInput
    _min?: FoodOrderMinOrderByAggregateInput
    _sum?: FoodOrderSumOrderByAggregateInput
  }

  export type FoodOrderScalarWhereWithAggregatesInput = {
    AND?: FoodOrderScalarWhereWithAggregatesInput | FoodOrderScalarWhereWithAggregatesInput[]
    OR?: FoodOrderScalarWhereWithAggregatesInput[]
    NOT?: FoodOrderScalarWhereWithAggregatesInput | FoodOrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FoodOrder"> | number
    userId?: IntWithAggregatesFilter<"FoodOrder"> | number
    totalPrice?: StringWithAggregatesFilter<"FoodOrder"> | string
    status?: EnumStatusWithAggregatesFilter<"FoodOrder"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"FoodOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FoodOrder"> | Date | string
  }

  export type FoodOrderItemsWhereInput = {
    AND?: FoodOrderItemsWhereInput | FoodOrderItemsWhereInput[]
    OR?: FoodOrderItemsWhereInput[]
    NOT?: FoodOrderItemsWhereInput | FoodOrderItemsWhereInput[]
    id?: IntFilter<"FoodOrderItems"> | number
    quantity?: IntFilter<"FoodOrderItems"> | number
    foodId?: IntFilter<"FoodOrderItems"> | number
    foodOrderId?: IntFilter<"FoodOrderItems"> | number
    createdAt?: DateTimeFilter<"FoodOrderItems"> | Date | string
    updatedAt?: DateTimeFilter<"FoodOrderItems"> | Date | string
    food?: XOR<FoodScalarRelationFilter, FoodWhereInput>
    order?: XOR<FoodOrderScalarRelationFilter, FoodOrderWhereInput>
  }

  export type FoodOrderItemsOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    foodId?: SortOrder
    foodOrderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    food?: FoodOrderByWithRelationInput
    order?: FoodOrderOrderByWithRelationInput
  }

  export type FoodOrderItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FoodOrderItemsWhereInput | FoodOrderItemsWhereInput[]
    OR?: FoodOrderItemsWhereInput[]
    NOT?: FoodOrderItemsWhereInput | FoodOrderItemsWhereInput[]
    quantity?: IntFilter<"FoodOrderItems"> | number
    foodId?: IntFilter<"FoodOrderItems"> | number
    foodOrderId?: IntFilter<"FoodOrderItems"> | number
    createdAt?: DateTimeFilter<"FoodOrderItems"> | Date | string
    updatedAt?: DateTimeFilter<"FoodOrderItems"> | Date | string
    food?: XOR<FoodScalarRelationFilter, FoodWhereInput>
    order?: XOR<FoodOrderScalarRelationFilter, FoodOrderWhereInput>
  }, "id">

  export type FoodOrderItemsOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    foodId?: SortOrder
    foodOrderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FoodOrderItemsCountOrderByAggregateInput
    _avg?: FoodOrderItemsAvgOrderByAggregateInput
    _max?: FoodOrderItemsMaxOrderByAggregateInput
    _min?: FoodOrderItemsMinOrderByAggregateInput
    _sum?: FoodOrderItemsSumOrderByAggregateInput
  }

  export type FoodOrderItemsScalarWhereWithAggregatesInput = {
    AND?: FoodOrderItemsScalarWhereWithAggregatesInput | FoodOrderItemsScalarWhereWithAggregatesInput[]
    OR?: FoodOrderItemsScalarWhereWithAggregatesInput[]
    NOT?: FoodOrderItemsScalarWhereWithAggregatesInput | FoodOrderItemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FoodOrderItems"> | number
    quantity?: IntWithAggregatesFilter<"FoodOrderItems"> | number
    foodId?: IntWithAggregatesFilter<"FoodOrderItems"> | number
    foodOrderId?: IntWithAggregatesFilter<"FoodOrderItems"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FoodOrderItems"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FoodOrderItems"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    phoneNumber?: string
    address?: string
    role?: $Enums.Role
    ttl?: Date | string | null
    isVerifies?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: FoodOrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    phoneNumber?: string
    address?: string
    role?: $Enums.Role
    ttl?: Date | string | null
    isVerifies?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: FoodOrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ttl?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerifies?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: FoodOrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ttl?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerifies?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: FoodOrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    phoneNumber?: string
    address?: string
    role?: $Enums.Role
    ttl?: Date | string | null
    isVerifies?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ttl?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerifies?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ttl?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerifies?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodCreateInput = {
    name: string
    price: string
    image?: string
    ingredients?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: FoodCategoryCreateNestedOneWithoutFoodsInput
    foodOrderItems?: FoodOrderItemsCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateInput = {
    id?: number
    name: string
    price: string
    image?: string
    ingredients?: string
    foodCategoyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    foodOrderItems?: FoodOrderItemsUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    ingredients?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: FoodCategoryUpdateOneRequiredWithoutFoodsNestedInput
    foodOrderItems?: FoodOrderItemsUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    ingredients?: StringFieldUpdateOperationsInput | string
    foodCategoyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodOrderItems?: FoodOrderItemsUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodCreateManyInput = {
    id?: number
    name: string
    price: string
    image?: string
    ingredients?: string
    foodCategoyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    ingredients?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    ingredients?: StringFieldUpdateOperationsInput | string
    foodCategoyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodCategoryCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodCreateNestedManyWithoutCategoryInput
  }

  export type FoodCategoryUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type FoodCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUpdateManyWithoutCategoryNestedInput
  }

  export type FoodCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type FoodCategoryCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodOrderCreateInput = {
    totalPrice: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    foodOrderItems?: FoodOrderItemsCreateNestedManyWithoutOrderInput
  }

  export type FoodOrderUncheckedCreateInput = {
    id?: number
    userId: number
    totalPrice: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    foodOrderItems?: FoodOrderItemsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type FoodOrderUpdateInput = {
    totalPrice?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    foodOrderItems?: FoodOrderItemsUpdateManyWithoutOrderNestedInput
  }

  export type FoodOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    totalPrice?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodOrderItems?: FoodOrderItemsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type FoodOrderCreateManyInput = {
    id?: number
    userId: number
    totalPrice: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodOrderUpdateManyMutationInput = {
    totalPrice?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodOrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    totalPrice?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodOrderItemsCreateInput = {
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    food: FoodCreateNestedOneWithoutFoodOrderItemsInput
    order: FoodOrderCreateNestedOneWithoutFoodOrderItemsInput
  }

  export type FoodOrderItemsUncheckedCreateInput = {
    id?: number
    quantity: number
    foodId: number
    foodOrderId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodOrderItemsUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateOneRequiredWithoutFoodOrderItemsNestedInput
    order?: FoodOrderUpdateOneRequiredWithoutFoodOrderItemsNestedInput
  }

  export type FoodOrderItemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    foodOrderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodOrderItemsCreateManyInput = {
    id?: number
    quantity: number
    foodId: number
    foodOrderId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodOrderItemsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodOrderItemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    foodOrderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FoodOrderListRelationFilter = {
    every?: FoodOrderWhereInput
    some?: FoodOrderWhereInput
    none?: FoodOrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FoodOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    role?: SortOrder
    ttl?: SortOrder
    isVerifies?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    role?: SortOrder
    ttl?: SortOrder
    isVerifies?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    role?: SortOrder
    ttl?: SortOrder
    isVerifies?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FoodCategoryScalarRelationFilter = {
    is?: FoodCategoryWhereInput
    isNot?: FoodCategoryWhereInput
  }

  export type FoodOrderItemsListRelationFilter = {
    every?: FoodOrderItemsWhereInput
    some?: FoodOrderItemsWhereInput
    none?: FoodOrderItemsWhereInput
  }

  export type FoodOrderItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FoodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image?: SortOrder
    ingredients?: SortOrder
    foodCategoyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodAvgOrderByAggregateInput = {
    id?: SortOrder
    foodCategoyId?: SortOrder
  }

  export type FoodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image?: SortOrder
    ingredients?: SortOrder
    foodCategoyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image?: SortOrder
    ingredients?: SortOrder
    foodCategoyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodSumOrderByAggregateInput = {
    id?: SortOrder
    foodCategoyId?: SortOrder
  }

  export type FoodListRelationFilter = {
    every?: FoodWhereInput
    some?: FoodWhereInput
    none?: FoodWhereInput
  }

  export type FoodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FoodCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FoodCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FoodOrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodOrderAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FoodOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodOrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodOrderSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type FoodScalarRelationFilter = {
    is?: FoodWhereInput
    isNot?: FoodWhereInput
  }

  export type FoodOrderScalarRelationFilter = {
    is?: FoodOrderWhereInput
    isNot?: FoodOrderWhereInput
  }

  export type FoodOrderItemsCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    foodId?: SortOrder
    foodOrderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodOrderItemsAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    foodId?: SortOrder
    foodOrderId?: SortOrder
  }

  export type FoodOrderItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    foodId?: SortOrder
    foodOrderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodOrderItemsMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    foodId?: SortOrder
    foodOrderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodOrderItemsSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    foodId?: SortOrder
    foodOrderId?: SortOrder
  }

  export type FoodOrderCreateNestedManyWithoutUserInput = {
    create?: XOR<FoodOrderCreateWithoutUserInput, FoodOrderUncheckedCreateWithoutUserInput> | FoodOrderCreateWithoutUserInput[] | FoodOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoodOrderCreateOrConnectWithoutUserInput | FoodOrderCreateOrConnectWithoutUserInput[]
    createMany?: FoodOrderCreateManyUserInputEnvelope
    connect?: FoodOrderWhereUniqueInput | FoodOrderWhereUniqueInput[]
  }

  export type FoodOrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FoodOrderCreateWithoutUserInput, FoodOrderUncheckedCreateWithoutUserInput> | FoodOrderCreateWithoutUserInput[] | FoodOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoodOrderCreateOrConnectWithoutUserInput | FoodOrderCreateOrConnectWithoutUserInput[]
    createMany?: FoodOrderCreateManyUserInputEnvelope
    connect?: FoodOrderWhereUniqueInput | FoodOrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FoodOrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<FoodOrderCreateWithoutUserInput, FoodOrderUncheckedCreateWithoutUserInput> | FoodOrderCreateWithoutUserInput[] | FoodOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoodOrderCreateOrConnectWithoutUserInput | FoodOrderCreateOrConnectWithoutUserInput[]
    upsert?: FoodOrderUpsertWithWhereUniqueWithoutUserInput | FoodOrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FoodOrderCreateManyUserInputEnvelope
    set?: FoodOrderWhereUniqueInput | FoodOrderWhereUniqueInput[]
    disconnect?: FoodOrderWhereUniqueInput | FoodOrderWhereUniqueInput[]
    delete?: FoodOrderWhereUniqueInput | FoodOrderWhereUniqueInput[]
    connect?: FoodOrderWhereUniqueInput | FoodOrderWhereUniqueInput[]
    update?: FoodOrderUpdateWithWhereUniqueWithoutUserInput | FoodOrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FoodOrderUpdateManyWithWhereWithoutUserInput | FoodOrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FoodOrderScalarWhereInput | FoodOrderScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FoodOrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FoodOrderCreateWithoutUserInput, FoodOrderUncheckedCreateWithoutUserInput> | FoodOrderCreateWithoutUserInput[] | FoodOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoodOrderCreateOrConnectWithoutUserInput | FoodOrderCreateOrConnectWithoutUserInput[]
    upsert?: FoodOrderUpsertWithWhereUniqueWithoutUserInput | FoodOrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FoodOrderCreateManyUserInputEnvelope
    set?: FoodOrderWhereUniqueInput | FoodOrderWhereUniqueInput[]
    disconnect?: FoodOrderWhereUniqueInput | FoodOrderWhereUniqueInput[]
    delete?: FoodOrderWhereUniqueInput | FoodOrderWhereUniqueInput[]
    connect?: FoodOrderWhereUniqueInput | FoodOrderWhereUniqueInput[]
    update?: FoodOrderUpdateWithWhereUniqueWithoutUserInput | FoodOrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FoodOrderUpdateManyWithWhereWithoutUserInput | FoodOrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FoodOrderScalarWhereInput | FoodOrderScalarWhereInput[]
  }

  export type FoodCategoryCreateNestedOneWithoutFoodsInput = {
    create?: XOR<FoodCategoryCreateWithoutFoodsInput, FoodCategoryUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: FoodCategoryCreateOrConnectWithoutFoodsInput
    connect?: FoodCategoryWhereUniqueInput
  }

  export type FoodOrderItemsCreateNestedManyWithoutFoodInput = {
    create?: XOR<FoodOrderItemsCreateWithoutFoodInput, FoodOrderItemsUncheckedCreateWithoutFoodInput> | FoodOrderItemsCreateWithoutFoodInput[] | FoodOrderItemsUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: FoodOrderItemsCreateOrConnectWithoutFoodInput | FoodOrderItemsCreateOrConnectWithoutFoodInput[]
    createMany?: FoodOrderItemsCreateManyFoodInputEnvelope
    connect?: FoodOrderItemsWhereUniqueInput | FoodOrderItemsWhereUniqueInput[]
  }

  export type FoodOrderItemsUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<FoodOrderItemsCreateWithoutFoodInput, FoodOrderItemsUncheckedCreateWithoutFoodInput> | FoodOrderItemsCreateWithoutFoodInput[] | FoodOrderItemsUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: FoodOrderItemsCreateOrConnectWithoutFoodInput | FoodOrderItemsCreateOrConnectWithoutFoodInput[]
    createMany?: FoodOrderItemsCreateManyFoodInputEnvelope
    connect?: FoodOrderItemsWhereUniqueInput | FoodOrderItemsWhereUniqueInput[]
  }

  export type FoodCategoryUpdateOneRequiredWithoutFoodsNestedInput = {
    create?: XOR<FoodCategoryCreateWithoutFoodsInput, FoodCategoryUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: FoodCategoryCreateOrConnectWithoutFoodsInput
    upsert?: FoodCategoryUpsertWithoutFoodsInput
    connect?: FoodCategoryWhereUniqueInput
    update?: XOR<XOR<FoodCategoryUpdateToOneWithWhereWithoutFoodsInput, FoodCategoryUpdateWithoutFoodsInput>, FoodCategoryUncheckedUpdateWithoutFoodsInput>
  }

  export type FoodOrderItemsUpdateManyWithoutFoodNestedInput = {
    create?: XOR<FoodOrderItemsCreateWithoutFoodInput, FoodOrderItemsUncheckedCreateWithoutFoodInput> | FoodOrderItemsCreateWithoutFoodInput[] | FoodOrderItemsUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: FoodOrderItemsCreateOrConnectWithoutFoodInput | FoodOrderItemsCreateOrConnectWithoutFoodInput[]
    upsert?: FoodOrderItemsUpsertWithWhereUniqueWithoutFoodInput | FoodOrderItemsUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: FoodOrderItemsCreateManyFoodInputEnvelope
    set?: FoodOrderItemsWhereUniqueInput | FoodOrderItemsWhereUniqueInput[]
    disconnect?: FoodOrderItemsWhereUniqueInput | FoodOrderItemsWhereUniqueInput[]
    delete?: FoodOrderItemsWhereUniqueInput | FoodOrderItemsWhereUniqueInput[]
    connect?: FoodOrderItemsWhereUniqueInput | FoodOrderItemsWhereUniqueInput[]
    update?: FoodOrderItemsUpdateWithWhereUniqueWithoutFoodInput | FoodOrderItemsUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: FoodOrderItemsUpdateManyWithWhereWithoutFoodInput | FoodOrderItemsUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: FoodOrderItemsScalarWhereInput | FoodOrderItemsScalarWhereInput[]
  }

  export type FoodOrderItemsUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<FoodOrderItemsCreateWithoutFoodInput, FoodOrderItemsUncheckedCreateWithoutFoodInput> | FoodOrderItemsCreateWithoutFoodInput[] | FoodOrderItemsUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: FoodOrderItemsCreateOrConnectWithoutFoodInput | FoodOrderItemsCreateOrConnectWithoutFoodInput[]
    upsert?: FoodOrderItemsUpsertWithWhereUniqueWithoutFoodInput | FoodOrderItemsUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: FoodOrderItemsCreateManyFoodInputEnvelope
    set?: FoodOrderItemsWhereUniqueInput | FoodOrderItemsWhereUniqueInput[]
    disconnect?: FoodOrderItemsWhereUniqueInput | FoodOrderItemsWhereUniqueInput[]
    delete?: FoodOrderItemsWhereUniqueInput | FoodOrderItemsWhereUniqueInput[]
    connect?: FoodOrderItemsWhereUniqueInput | FoodOrderItemsWhereUniqueInput[]
    update?: FoodOrderItemsUpdateWithWhereUniqueWithoutFoodInput | FoodOrderItemsUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: FoodOrderItemsUpdateManyWithWhereWithoutFoodInput | FoodOrderItemsUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: FoodOrderItemsScalarWhereInput | FoodOrderItemsScalarWhereInput[]
  }

  export type FoodCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput> | FoodCreateWithoutCategoryInput[] | FoodUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutCategoryInput | FoodCreateOrConnectWithoutCategoryInput[]
    createMany?: FoodCreateManyCategoryInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type FoodUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput> | FoodCreateWithoutCategoryInput[] | FoodUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutCategoryInput | FoodCreateOrConnectWithoutCategoryInput[]
    createMany?: FoodCreateManyCategoryInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type FoodUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput> | FoodCreateWithoutCategoryInput[] | FoodUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutCategoryInput | FoodCreateOrConnectWithoutCategoryInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutCategoryInput | FoodUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FoodCreateManyCategoryInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutCategoryInput | FoodUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutCategoryInput | FoodUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type FoodUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput> | FoodCreateWithoutCategoryInput[] | FoodUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutCategoryInput | FoodCreateOrConnectWithoutCategoryInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutCategoryInput | FoodUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FoodCreateManyCategoryInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutCategoryInput | FoodUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutCategoryInput | FoodUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type FoodOrderItemsCreateNestedManyWithoutOrderInput = {
    create?: XOR<FoodOrderItemsCreateWithoutOrderInput, FoodOrderItemsUncheckedCreateWithoutOrderInput> | FoodOrderItemsCreateWithoutOrderInput[] | FoodOrderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: FoodOrderItemsCreateOrConnectWithoutOrderInput | FoodOrderItemsCreateOrConnectWithoutOrderInput[]
    createMany?: FoodOrderItemsCreateManyOrderInputEnvelope
    connect?: FoodOrderItemsWhereUniqueInput | FoodOrderItemsWhereUniqueInput[]
  }

  export type FoodOrderItemsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<FoodOrderItemsCreateWithoutOrderInput, FoodOrderItemsUncheckedCreateWithoutOrderInput> | FoodOrderItemsCreateWithoutOrderInput[] | FoodOrderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: FoodOrderItemsCreateOrConnectWithoutOrderInput | FoodOrderItemsCreateOrConnectWithoutOrderInput[]
    createMany?: FoodOrderItemsCreateManyOrderInputEnvelope
    connect?: FoodOrderItemsWhereUniqueInput | FoodOrderItemsWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type FoodOrderItemsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<FoodOrderItemsCreateWithoutOrderInput, FoodOrderItemsUncheckedCreateWithoutOrderInput> | FoodOrderItemsCreateWithoutOrderInput[] | FoodOrderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: FoodOrderItemsCreateOrConnectWithoutOrderInput | FoodOrderItemsCreateOrConnectWithoutOrderInput[]
    upsert?: FoodOrderItemsUpsertWithWhereUniqueWithoutOrderInput | FoodOrderItemsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: FoodOrderItemsCreateManyOrderInputEnvelope
    set?: FoodOrderItemsWhereUniqueInput | FoodOrderItemsWhereUniqueInput[]
    disconnect?: FoodOrderItemsWhereUniqueInput | FoodOrderItemsWhereUniqueInput[]
    delete?: FoodOrderItemsWhereUniqueInput | FoodOrderItemsWhereUniqueInput[]
    connect?: FoodOrderItemsWhereUniqueInput | FoodOrderItemsWhereUniqueInput[]
    update?: FoodOrderItemsUpdateWithWhereUniqueWithoutOrderInput | FoodOrderItemsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: FoodOrderItemsUpdateManyWithWhereWithoutOrderInput | FoodOrderItemsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: FoodOrderItemsScalarWhereInput | FoodOrderItemsScalarWhereInput[]
  }

  export type FoodOrderItemsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<FoodOrderItemsCreateWithoutOrderInput, FoodOrderItemsUncheckedCreateWithoutOrderInput> | FoodOrderItemsCreateWithoutOrderInput[] | FoodOrderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: FoodOrderItemsCreateOrConnectWithoutOrderInput | FoodOrderItemsCreateOrConnectWithoutOrderInput[]
    upsert?: FoodOrderItemsUpsertWithWhereUniqueWithoutOrderInput | FoodOrderItemsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: FoodOrderItemsCreateManyOrderInputEnvelope
    set?: FoodOrderItemsWhereUniqueInput | FoodOrderItemsWhereUniqueInput[]
    disconnect?: FoodOrderItemsWhereUniqueInput | FoodOrderItemsWhereUniqueInput[]
    delete?: FoodOrderItemsWhereUniqueInput | FoodOrderItemsWhereUniqueInput[]
    connect?: FoodOrderItemsWhereUniqueInput | FoodOrderItemsWhereUniqueInput[]
    update?: FoodOrderItemsUpdateWithWhereUniqueWithoutOrderInput | FoodOrderItemsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: FoodOrderItemsUpdateManyWithWhereWithoutOrderInput | FoodOrderItemsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: FoodOrderItemsScalarWhereInput | FoodOrderItemsScalarWhereInput[]
  }

  export type FoodCreateNestedOneWithoutFoodOrderItemsInput = {
    create?: XOR<FoodCreateWithoutFoodOrderItemsInput, FoodUncheckedCreateWithoutFoodOrderItemsInput>
    connectOrCreate?: FoodCreateOrConnectWithoutFoodOrderItemsInput
    connect?: FoodWhereUniqueInput
  }

  export type FoodOrderCreateNestedOneWithoutFoodOrderItemsInput = {
    create?: XOR<FoodOrderCreateWithoutFoodOrderItemsInput, FoodOrderUncheckedCreateWithoutFoodOrderItemsInput>
    connectOrCreate?: FoodOrderCreateOrConnectWithoutFoodOrderItemsInput
    connect?: FoodOrderWhereUniqueInput
  }

  export type FoodUpdateOneRequiredWithoutFoodOrderItemsNestedInput = {
    create?: XOR<FoodCreateWithoutFoodOrderItemsInput, FoodUncheckedCreateWithoutFoodOrderItemsInput>
    connectOrCreate?: FoodCreateOrConnectWithoutFoodOrderItemsInput
    upsert?: FoodUpsertWithoutFoodOrderItemsInput
    connect?: FoodWhereUniqueInput
    update?: XOR<XOR<FoodUpdateToOneWithWhereWithoutFoodOrderItemsInput, FoodUpdateWithoutFoodOrderItemsInput>, FoodUncheckedUpdateWithoutFoodOrderItemsInput>
  }

  export type FoodOrderUpdateOneRequiredWithoutFoodOrderItemsNestedInput = {
    create?: XOR<FoodOrderCreateWithoutFoodOrderItemsInput, FoodOrderUncheckedCreateWithoutFoodOrderItemsInput>
    connectOrCreate?: FoodOrderCreateOrConnectWithoutFoodOrderItemsInput
    upsert?: FoodOrderUpsertWithoutFoodOrderItemsInput
    connect?: FoodOrderWhereUniqueInput
    update?: XOR<XOR<FoodOrderUpdateToOneWithWhereWithoutFoodOrderItemsInput, FoodOrderUpdateWithoutFoodOrderItemsInput>, FoodOrderUncheckedUpdateWithoutFoodOrderItemsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type FoodOrderCreateWithoutUserInput = {
    totalPrice: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    foodOrderItems?: FoodOrderItemsCreateNestedManyWithoutOrderInput
  }

  export type FoodOrderUncheckedCreateWithoutUserInput = {
    id?: number
    totalPrice: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    foodOrderItems?: FoodOrderItemsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type FoodOrderCreateOrConnectWithoutUserInput = {
    where: FoodOrderWhereUniqueInput
    create: XOR<FoodOrderCreateWithoutUserInput, FoodOrderUncheckedCreateWithoutUserInput>
  }

  export type FoodOrderCreateManyUserInputEnvelope = {
    data: FoodOrderCreateManyUserInput | FoodOrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FoodOrderUpsertWithWhereUniqueWithoutUserInput = {
    where: FoodOrderWhereUniqueInput
    update: XOR<FoodOrderUpdateWithoutUserInput, FoodOrderUncheckedUpdateWithoutUserInput>
    create: XOR<FoodOrderCreateWithoutUserInput, FoodOrderUncheckedCreateWithoutUserInput>
  }

  export type FoodOrderUpdateWithWhereUniqueWithoutUserInput = {
    where: FoodOrderWhereUniqueInput
    data: XOR<FoodOrderUpdateWithoutUserInput, FoodOrderUncheckedUpdateWithoutUserInput>
  }

  export type FoodOrderUpdateManyWithWhereWithoutUserInput = {
    where: FoodOrderScalarWhereInput
    data: XOR<FoodOrderUpdateManyMutationInput, FoodOrderUncheckedUpdateManyWithoutUserInput>
  }

  export type FoodOrderScalarWhereInput = {
    AND?: FoodOrderScalarWhereInput | FoodOrderScalarWhereInput[]
    OR?: FoodOrderScalarWhereInput[]
    NOT?: FoodOrderScalarWhereInput | FoodOrderScalarWhereInput[]
    id?: IntFilter<"FoodOrder"> | number
    userId?: IntFilter<"FoodOrder"> | number
    totalPrice?: StringFilter<"FoodOrder"> | string
    status?: EnumStatusFilter<"FoodOrder"> | $Enums.Status
    createdAt?: DateTimeFilter<"FoodOrder"> | Date | string
    updatedAt?: DateTimeFilter<"FoodOrder"> | Date | string
  }

  export type FoodCategoryCreateWithoutFoodsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodCategoryUncheckedCreateWithoutFoodsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodCategoryCreateOrConnectWithoutFoodsInput = {
    where: FoodCategoryWhereUniqueInput
    create: XOR<FoodCategoryCreateWithoutFoodsInput, FoodCategoryUncheckedCreateWithoutFoodsInput>
  }

  export type FoodOrderItemsCreateWithoutFoodInput = {
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    order: FoodOrderCreateNestedOneWithoutFoodOrderItemsInput
  }

  export type FoodOrderItemsUncheckedCreateWithoutFoodInput = {
    id?: number
    quantity: number
    foodOrderId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodOrderItemsCreateOrConnectWithoutFoodInput = {
    where: FoodOrderItemsWhereUniqueInput
    create: XOR<FoodOrderItemsCreateWithoutFoodInput, FoodOrderItemsUncheckedCreateWithoutFoodInput>
  }

  export type FoodOrderItemsCreateManyFoodInputEnvelope = {
    data: FoodOrderItemsCreateManyFoodInput | FoodOrderItemsCreateManyFoodInput[]
    skipDuplicates?: boolean
  }

  export type FoodCategoryUpsertWithoutFoodsInput = {
    update: XOR<FoodCategoryUpdateWithoutFoodsInput, FoodCategoryUncheckedUpdateWithoutFoodsInput>
    create: XOR<FoodCategoryCreateWithoutFoodsInput, FoodCategoryUncheckedCreateWithoutFoodsInput>
    where?: FoodCategoryWhereInput
  }

  export type FoodCategoryUpdateToOneWithWhereWithoutFoodsInput = {
    where?: FoodCategoryWhereInput
    data: XOR<FoodCategoryUpdateWithoutFoodsInput, FoodCategoryUncheckedUpdateWithoutFoodsInput>
  }

  export type FoodCategoryUpdateWithoutFoodsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodCategoryUncheckedUpdateWithoutFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodOrderItemsUpsertWithWhereUniqueWithoutFoodInput = {
    where: FoodOrderItemsWhereUniqueInput
    update: XOR<FoodOrderItemsUpdateWithoutFoodInput, FoodOrderItemsUncheckedUpdateWithoutFoodInput>
    create: XOR<FoodOrderItemsCreateWithoutFoodInput, FoodOrderItemsUncheckedCreateWithoutFoodInput>
  }

  export type FoodOrderItemsUpdateWithWhereUniqueWithoutFoodInput = {
    where: FoodOrderItemsWhereUniqueInput
    data: XOR<FoodOrderItemsUpdateWithoutFoodInput, FoodOrderItemsUncheckedUpdateWithoutFoodInput>
  }

  export type FoodOrderItemsUpdateManyWithWhereWithoutFoodInput = {
    where: FoodOrderItemsScalarWhereInput
    data: XOR<FoodOrderItemsUpdateManyMutationInput, FoodOrderItemsUncheckedUpdateManyWithoutFoodInput>
  }

  export type FoodOrderItemsScalarWhereInput = {
    AND?: FoodOrderItemsScalarWhereInput | FoodOrderItemsScalarWhereInput[]
    OR?: FoodOrderItemsScalarWhereInput[]
    NOT?: FoodOrderItemsScalarWhereInput | FoodOrderItemsScalarWhereInput[]
    id?: IntFilter<"FoodOrderItems"> | number
    quantity?: IntFilter<"FoodOrderItems"> | number
    foodId?: IntFilter<"FoodOrderItems"> | number
    foodOrderId?: IntFilter<"FoodOrderItems"> | number
    createdAt?: DateTimeFilter<"FoodOrderItems"> | Date | string
    updatedAt?: DateTimeFilter<"FoodOrderItems"> | Date | string
  }

  export type FoodCreateWithoutCategoryInput = {
    name: string
    price: string
    image?: string
    ingredients?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foodOrderItems?: FoodOrderItemsCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    price: string
    image?: string
    ingredients?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foodOrderItems?: FoodOrderItemsUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutCategoryInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput>
  }

  export type FoodCreateManyCategoryInputEnvelope = {
    data: FoodCreateManyCategoryInput | FoodCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type FoodUpsertWithWhereUniqueWithoutCategoryInput = {
    where: FoodWhereUniqueInput
    update: XOR<FoodUpdateWithoutCategoryInput, FoodUncheckedUpdateWithoutCategoryInput>
    create: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput>
  }

  export type FoodUpdateWithWhereUniqueWithoutCategoryInput = {
    where: FoodWhereUniqueInput
    data: XOR<FoodUpdateWithoutCategoryInput, FoodUncheckedUpdateWithoutCategoryInput>
  }

  export type FoodUpdateManyWithWhereWithoutCategoryInput = {
    where: FoodScalarWhereInput
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyWithoutCategoryInput>
  }

  export type FoodScalarWhereInput = {
    AND?: FoodScalarWhereInput | FoodScalarWhereInput[]
    OR?: FoodScalarWhereInput[]
    NOT?: FoodScalarWhereInput | FoodScalarWhereInput[]
    id?: IntFilter<"Food"> | number
    name?: StringFilter<"Food"> | string
    price?: StringFilter<"Food"> | string
    image?: StringFilter<"Food"> | string
    ingredients?: StringFilter<"Food"> | string
    foodCategoyId?: IntFilter<"Food"> | number
    createdAt?: DateTimeFilter<"Food"> | Date | string
    updatedAt?: DateTimeFilter<"Food"> | Date | string
  }

  export type UserCreateWithoutOrdersInput = {
    email: string
    password: string
    phoneNumber?: string
    address?: string
    role?: $Enums.Role
    ttl?: Date | string | null
    isVerifies?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number
    email: string
    password: string
    phoneNumber?: string
    address?: string
    role?: $Enums.Role
    ttl?: Date | string | null
    isVerifies?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type FoodOrderItemsCreateWithoutOrderInput = {
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    food: FoodCreateNestedOneWithoutFoodOrderItemsInput
  }

  export type FoodOrderItemsUncheckedCreateWithoutOrderInput = {
    id?: number
    quantity: number
    foodId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodOrderItemsCreateOrConnectWithoutOrderInput = {
    where: FoodOrderItemsWhereUniqueInput
    create: XOR<FoodOrderItemsCreateWithoutOrderInput, FoodOrderItemsUncheckedCreateWithoutOrderInput>
  }

  export type FoodOrderItemsCreateManyOrderInputEnvelope = {
    data: FoodOrderItemsCreateManyOrderInput | FoodOrderItemsCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ttl?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerifies?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ttl?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerifies?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodOrderItemsUpsertWithWhereUniqueWithoutOrderInput = {
    where: FoodOrderItemsWhereUniqueInput
    update: XOR<FoodOrderItemsUpdateWithoutOrderInput, FoodOrderItemsUncheckedUpdateWithoutOrderInput>
    create: XOR<FoodOrderItemsCreateWithoutOrderInput, FoodOrderItemsUncheckedCreateWithoutOrderInput>
  }

  export type FoodOrderItemsUpdateWithWhereUniqueWithoutOrderInput = {
    where: FoodOrderItemsWhereUniqueInput
    data: XOR<FoodOrderItemsUpdateWithoutOrderInput, FoodOrderItemsUncheckedUpdateWithoutOrderInput>
  }

  export type FoodOrderItemsUpdateManyWithWhereWithoutOrderInput = {
    where: FoodOrderItemsScalarWhereInput
    data: XOR<FoodOrderItemsUpdateManyMutationInput, FoodOrderItemsUncheckedUpdateManyWithoutOrderInput>
  }

  export type FoodCreateWithoutFoodOrderItemsInput = {
    name: string
    price: string
    image?: string
    ingredients?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: FoodCategoryCreateNestedOneWithoutFoodsInput
  }

  export type FoodUncheckedCreateWithoutFoodOrderItemsInput = {
    id?: number
    name: string
    price: string
    image?: string
    ingredients?: string
    foodCategoyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodCreateOrConnectWithoutFoodOrderItemsInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutFoodOrderItemsInput, FoodUncheckedCreateWithoutFoodOrderItemsInput>
  }

  export type FoodOrderCreateWithoutFoodOrderItemsInput = {
    totalPrice: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type FoodOrderUncheckedCreateWithoutFoodOrderItemsInput = {
    id?: number
    userId: number
    totalPrice: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodOrderCreateOrConnectWithoutFoodOrderItemsInput = {
    where: FoodOrderWhereUniqueInput
    create: XOR<FoodOrderCreateWithoutFoodOrderItemsInput, FoodOrderUncheckedCreateWithoutFoodOrderItemsInput>
  }

  export type FoodUpsertWithoutFoodOrderItemsInput = {
    update: XOR<FoodUpdateWithoutFoodOrderItemsInput, FoodUncheckedUpdateWithoutFoodOrderItemsInput>
    create: XOR<FoodCreateWithoutFoodOrderItemsInput, FoodUncheckedCreateWithoutFoodOrderItemsInput>
    where?: FoodWhereInput
  }

  export type FoodUpdateToOneWithWhereWithoutFoodOrderItemsInput = {
    where?: FoodWhereInput
    data: XOR<FoodUpdateWithoutFoodOrderItemsInput, FoodUncheckedUpdateWithoutFoodOrderItemsInput>
  }

  export type FoodUpdateWithoutFoodOrderItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    ingredients?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: FoodCategoryUpdateOneRequiredWithoutFoodsNestedInput
  }

  export type FoodUncheckedUpdateWithoutFoodOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    ingredients?: StringFieldUpdateOperationsInput | string
    foodCategoyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodOrderUpsertWithoutFoodOrderItemsInput = {
    update: XOR<FoodOrderUpdateWithoutFoodOrderItemsInput, FoodOrderUncheckedUpdateWithoutFoodOrderItemsInput>
    create: XOR<FoodOrderCreateWithoutFoodOrderItemsInput, FoodOrderUncheckedCreateWithoutFoodOrderItemsInput>
    where?: FoodOrderWhereInput
  }

  export type FoodOrderUpdateToOneWithWhereWithoutFoodOrderItemsInput = {
    where?: FoodOrderWhereInput
    data: XOR<FoodOrderUpdateWithoutFoodOrderItemsInput, FoodOrderUncheckedUpdateWithoutFoodOrderItemsInput>
  }

  export type FoodOrderUpdateWithoutFoodOrderItemsInput = {
    totalPrice?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type FoodOrderUncheckedUpdateWithoutFoodOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    totalPrice?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodOrderCreateManyUserInput = {
    id?: number
    totalPrice: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodOrderUpdateWithoutUserInput = {
    totalPrice?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodOrderItems?: FoodOrderItemsUpdateManyWithoutOrderNestedInput
  }

  export type FoodOrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodOrderItems?: FoodOrderItemsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type FoodOrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodOrderItemsCreateManyFoodInput = {
    id?: number
    quantity: number
    foodOrderId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodOrderItemsUpdateWithoutFoodInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: FoodOrderUpdateOneRequiredWithoutFoodOrderItemsNestedInput
  }

  export type FoodOrderItemsUncheckedUpdateWithoutFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    foodOrderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodOrderItemsUncheckedUpdateManyWithoutFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    foodOrderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodCreateManyCategoryInput = {
    id?: number
    name: string
    price: string
    image?: string
    ingredients?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    ingredients?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodOrderItems?: FoodOrderItemsUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    ingredients?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodOrderItems?: FoodOrderItemsUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    ingredients?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodOrderItemsCreateManyOrderInput = {
    id?: number
    quantity: number
    foodId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodOrderItemsUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateOneRequiredWithoutFoodOrderItemsNestedInput
  }

  export type FoodOrderItemsUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodOrderItemsUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}