## 🌱 GitHub Workflow

### 📌 Branch Naming
- **Feature** → `Feature/task-1-create-car`
- **Bug Fix** → `Fix/bug-1-car-instance-null-exception`

### 📌 Commit Messages
**Adding**
```
- Add handler
- Add repository
- Add contract
- Add migrations
```

**Deleting**
```
- Remove DTO file
```

**Editing**
```
- Update AddService in Repository
```

### 📌 Branch Rules
- `master` → Production (Restricted)
- `staging` → Pre-production (Read-only)
- `development` → Main integration branch (all team commits)
- Personal branches → per developer

### 📌 Contribution Process
1. Clone repo OR pull development branch
2. Create personal branch → `Feature/...` or `Bug/...`
3. Commit small changes frequently
4. Checkout development, pull latest
5. Merge development → personal branch
6. Push changes
7. Create Pull Request (PR)
8. Repeat cycle

---
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
