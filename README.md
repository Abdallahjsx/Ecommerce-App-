# 📝 Project Conventions

هذا الملف يحتوي على القواعد الأساسية التي يجب أن يلتزم بها كل أعضاء الفريق أثناء العمل على المشروع، لضمان تنظيم الكود وسهولة التعاون.

---

## 1️⃣ Naming Conventions

- **React Components (inside code):** `PascalCase`  
  Example: `UserCard`, `ProfilePage`

- **Types & Interfaces:** `PascalCase`  
  Example: `UserType`, `AuthResponse`, `ProductInterface`

- **Functions:** `camalCase`  
  Example: `getUser()`, `calculateTotalPrice()`

- **Global Constants (inside code):** `UPPER_CASE`  
   Example: `API_URL`, `TOKEN_KEY`
- **Variables** : `camalCase`
  Examples: `const userName = "John"`,
  `const isLoggedIn = true`
- **Folder Names (general):** `camelCase`
  Example: `userService`, `authGuard`
- **File Names For Components Files :** `PascalCase` just like the Name of the _component_ itself  
  Example: `UserService.ts`, `AuthGuard.ts`

- **Enums:** `PascalCase` for the enum name, `UPPER_CASE` for members  
  Example:
  ```ts
  enum UserRole {
    ADMIN,
    CUSTOMER,
    GUEST,
  }
  ```

-**Environment Variables:** Always UPPER_CASE and prefixed with NEXT_PUBLIC if exposed to the client
Example:

```ts
NEXT_PUBLIC_API_URL=https://example.com/api
NEXT_PUBLIC_GOOGLE_KEY=xxxxxxx
```

# 📝 Commit Message Conventions

This Part defines the rules for writing commit messages in the project.
The goal is to keep commits **short, clear, and consistent** across all team members.

---

## 1️⃣ الصيغة العامة

- **ACTION** → keyword (ADD, FIX, UPDATE, …)
- **Short description** → what was changed (preferably ≤ 50 characters).

---

## 2️⃣ Available Actions

- `ADD:` Add something new (component, file, feature)
  Example: `ADD: userCard component`

- `UPDATE:` Modify or improve something existing
  Example: `UPDATE: navbar responsive behavior`

- `FIX:` Fix an error or issue
  Example: `FIX: login button not redirecting`

- `RENAME:` Rename a file or component
  Example: `RENAME: profilePage to userProfilePage`

- `REMOVE:` Delete unused file or code
  Example: `REMOVE: old auth service`

- `REFACTOR:` Restructure code without changing behavior
  Example: `REFACTOR: fetchData util with axios`

- `STYLE:` Style-only changes (formatting, linting)
  Example: `STYLE: format code with Prettier`

- `DOCS:` Documentation changes (README, comments)
  Example: `DOCS: update setup instructions`

- `TEST:` Add or modify tests
  Example: `TEST: add unit tests for auth service`

- `CONFIG:` Update project configuration (ESLint, Prettier, tsconfig)
  Example: `CONFIG: update ESLint rules`

---

- `ADD:` إضافة شيء جديد (مكون، ملف، خاصية)
  Example : `ADD: userCard component`

- `UPDATE:` تعديل أو تحسين شيء موجود
  Example : `UPDATE: navbar responsive behavior`

- `FIX:` إصلاح خطأ أو مشكلة
  Example : `FIX: login button not redirecting`

- `RENAME:` إعادة تسمية ملف أو مكون
  Example : `RENAME: profilePage to userProfilePage`

- `REMOVE:` حذف ملف أو كود غير مستخدم
  Example : `REMOVE: old auth service`

- `REFACTOR:` إعادة هيكلة الكود بدون تغيير السلوك
  Example : `REFACTOR: fetchData util with axios`

- `STYLE:` تعديلات شكلية (تنسيق، linting)
  Example : `STYLE: format code with Prettier`

- `DOCS:` تعديل أو إضافة في التوثيق (README, comments)
  Example : `DOCS: update setup instructions`

- `TEST:` إضافة أو تعديل اختبارات
  Example : `TEST: add unit tests for auth service`

- `CONFIG:` تعديل إعدادات المشروع (ESLint, Prettier, tsconfig)
  Example : `CONFIG: update ESLint rules`

---

## 3️⃣ Golden Rules

- ✅Start Directly With The **ACTION** (ADD... , FIX...,REMOVE...)
- ✅ Keep the description **short and direct**.
- ✅ Split large changes into smaller commits.
- ❌ Avoid vague words like: `changes`, `work`, `stuff`.

---

## 4️⃣ GOOD EXAMPLES

ADD: productCard component
UPDATE: global styles with new theme
FIX: hydration error in home page
REFACTOR: dashboard layout structure
REMOVE: unused user type

# 🌱 GitHub Workflow

## 📌 Branch Naming

- **Feature** → `Feature/task-1-create-car`
- **Bug Fix** → `Fix/bug-1-car-instance-null-exception`

## 📌 Branch Rules

- `master` → Production (Restricted)
- `staging` → Pre-production (Read-only)
- `development` → Main integration branch (all team commits)
- Personal branches → per developer

## 📌 Contribution Process

1. Clone repo OR pull development branch
2. Create personal branch → `Feature/...` or `Bug/...`
3. Commit small changes frequently
4. Checkout development, pull latest
5. Merge development → personal branch
6. Push changes
7. Create Pull Request (PR)
8. Repeat cycle

---

# General Rule 

Every **shared component, function, or service** must have clear comments or documentation explaining:

- **What it does**
- **Inputs / parameters**
- **Outputs / return values**
- **Any assumptions or important notes**

This ensures that anyone in the team can understand and use the code without confusion.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Getting Started

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
