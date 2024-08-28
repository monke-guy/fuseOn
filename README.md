<a name="readme-top"></a>

# fuseOn - A collaborative workspace that lets teams create, share, and work together on projects seamlessly.

![image](https://github.com/user-attachments/assets/5c60de26-6f90-49c1-bc13-1b39d95b474b)


This is a [Next.js](https://nextjs.org/) project bootstrapped with `bun create next-app`.

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env` file in root directory.
4. Contents of `.env`:

```bash
# .env

# clerk auth keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# firebase api key
NEXT_PUBLIC_FIREBASE_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# google gemini api key
NEXT_PUBLIC_GEMINI_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# liveblock secret key
LIVEBLOCK_SK=sk_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

5. **Clerk Keys**:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` are provided by Clerk. You need to sign up for an account on Clerk (https://www.clerk.dev/), log in, and access these keys in your account settings.

6. **Gemini API Keys**:

   - `NEXT_PUBLIC_GEMINI_API_KEY` will be provided by Google AI Studio for FREE. Go Check this Link (https://ai.google.dev/aistudio).

7. **FireBase API Keys**:

   - `NEXT_PUBLIC_FIREBASE_API_KEY` is an environment variable in Next.js that stores the Firebase API key, making it accessible to both server-side and client-side code.To get the `NEXT_PUBLIC_FIREBASE_API_KEY`, you need to create a Firebase project in the [Firebase Console](https://console.firebase.google.com/), then navigate to your project settings to find the API key under "Project settings" in the "General" tab.

8. **Liveblock API Keys**:

    - `LIVEBLOCK_SK` is an environment variable typically used to store a secret key for Liveblocks, a real-time collaboration platform. It helps authenticate and secure API requests to Liveblocks services. To get the `LIVEBLOCK_SK` (Liveblocks secret key), you need to sign up for an account on the [Liveblocks website](https://liveblocks.io/), create a project, and then find the secret key in your project’s settings or dashboard.

9. Open terminal in `root` Directory.
```
Run `bun install` or `yarn install`

Run `bun run dev` or `yarn start / yarn dev`

Run `bun run build` or `yarn build`

```
1o. Now app is fully configured 👍 and you can start using this app using `bun run dev` or `yarn dev`.

11. Deploy the App on Vercel.😊✨

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.
