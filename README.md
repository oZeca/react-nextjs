
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Initialized with`typescript` and `taillwindcss`

Some more tools were added:
- Redux toolkit store 
- Tests with jest and react testing library
- Docker-compose for prod and dev workflows

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Test with

```bash
npm run test
```

### Build for production

```bash
npm run test
```

---
## With Docker




Docker hot reload bug:
https://github.com/vercel/next.js/issues/36774
> It turns out that I reinstall my windows Docker Desktop with Hyper-v but not WSL2 solved this problem. This problem is caused by a WSL2 bug that still exists here: microsoft/WSL#4739 (comment)
This way doesn't need to change the config and we can still use the SWC compiler.
