```
# Outputs the tree ignoring node_modules and .git.
$ tree -I "node_modules|.git"
.
├── README.md
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── pages
│   ├── _app.tsx
│   ├── api
│   │   └── hello.ts
│   └── index.tsx
├── public
│   ├── favicon.ico
│   └── vercel.svg
├── styles
│   ├── Home.module.css
│   └── globals.css
└── tsconfig.json

# Output updated structure
$ tree -I "node_modules|.git"
.
├── README.md
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── vercel.svg
├── src
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── api
│   │   │   └── hello.ts
│   │   └── index.tsx
│   └── styles
│       ├── Home.module.css
│       └── globals.css
└── tsconfig.json

$ tree src/common -L 1
src/common
├── components
├── context
├── hooks
├── mocks
├── queries
├── styles
├── types
└── utils

$ tree src
src
├── common
│   ├── components
│   │   └── marketing
│   │       ├── Card
│   │       │   ├── Card.module.css
│   │       │   ├── Card.tsx
│   │       │   └── index.ts
│   │       ├── Footer
│   │       │   ├── Footer.module.css
│   │       │   ├── Footer.tsx
│   │       │   └── index.ts
│   │       └── SimpleGrid
│   │           ├── SimpleGrid.module.css
│   │           ├── SimpleGrid.tsx
│   │           └── index.ts
│   └── styles
│       └── globals.css
├── modules
│   └── home
│       ├── Home.module.css
│       ├── Home.tsx
│       └── index.ts
└── pages
    ├── _app.tsx
    ├── api
    │   └── hello.ts
    └── index.tsx


```
