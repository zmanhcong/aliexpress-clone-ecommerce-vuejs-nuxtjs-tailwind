# AliExpress

## App Setup (localhost)

git clone <https://github.com>

cp .env.example .env

npm i

npx prisma generate

npm run dev

```bash

You'll have to setup a Supabase account & Stripe account, then add all of the details in to your .env file.

Once you've connected your application to Supabase. You'll also need to setup the Auth Providers:
Google [Google](https://cloud.google.com)
Github [Github](https://github.com/settings/developers)

    https://supabase.com/docs/guides/auth/social-login/auth-google
    https://supabase.com/docs/guides/auth/social-login/auth-github

Now run the command to migrate your database tables and run your seed file.
```

```bash
npx prisma migrate dev --name init
```

You should be good to go! If you need any more help, take a look at the tutorial video by clicking the image above.

# Application Images

<img width="1439" src="https://user-images.githubusercontent.com/108229029/234481659-ede8c034-b085-4a45-8d80-6271c6050474.png">
<img width="1439" src="https://user-images.githubusercontent.com/108229029/234481744-e3b237b3-0621-46ab-9494-60ac65b84d91.png">
<img width="1439" src="https://user-images.githubusercontent.com/108229029/234481876-dcd29b14-70c4-41d4-b29a-6c27937f68b2.png">
<img width="1439" src="https://user-images.githubusercontent.com/108229029/234481803-c3fc935b-1feb-496b-ae8d-ec63184536aa.png">
<img width="1439" src="https://user-images.githubusercontent.com/108229029/234481940-e29a65fa-38c3-4fea-aa31-79d8932773f2.png">
<img width="1439" src="https://user-images.githubusercontent.com/108229029/234481996-9b16ec84-89e9-4d1e-ae14-7935db1e4c29.png">

Init prisma

```bash
npx prisma Init
```

Prisma schema generate

```bash
npx prisma generate
```

Prisma : create migration

```bash
npx prisma migrate dev --name init
npx prisma db seed
```

Prisma : Push data

```bash
npx prisma db seed
```
