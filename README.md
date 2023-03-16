# Overview

This is demoing a problem I've had with preact and types. See the
[`buttons.tsx`](https://github.com/srsudar/preact-problems/blob/master/src/components/buttons.tsx)
file, and use `tsc` to see the type errors:

```
$ npx tsc --project ./tsconfig.json

src/components/buttons.tsx:36:6 - error TS2322: Type '{ children: never[]; href?: string | (string & SignalLike<string>); accept?: string | SignalLike<string>; acceptCharset?: string | SignalLike<string>; ... 383 more ...; 'aria-valuetext'?: Signalish<...>; }' is not assignable to type 'IntrinsicAttributes & Omit<UnstyledButtonProps, "ref"> & { ref?: Ref<HTMLButtonElement>; } & Readonly<Attributes & { ...; }>'.
  Type '{ children: never[]; href?: string | (string & SignalLike<string>); accept?: string | SignalLike<string>; acceptCharset?: string | SignalLike<string>; ... 383 more ...; 'aria-valuetext'?: Signalish<...>; }' is not assignable to type 'Readonly<Attributes & { children?: ComponentChildren; ref?: Ref<any>; }>'.
    Types of property 'default' are incompatible.
      Type 'boolean | SignalLike<boolean>' is not assignable to type 'boolean'.
        Type 'SignalLike<boolean>' is not assignable to type 'boolean'.

36     <UnstyledButton
        ~~~~~~~~~~~~~~

```

# Original repo description

# ts-preact

## CLI Commands

- `npm install`: Installs dependencies

- `npm run dev`: Run a development, HMR server

- `npm run serve`: Run a production-like server

- `npm run build`: Production-ready build

- `npm run lint`: Pass TypeScript files using ESLint

- `npm run test`: Run Jest and Enzyme with
  [`enzyme-adapter-preact-pure`](https://github.com/preactjs/enzyme-adapter-preact-pure) for
  your tests

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
