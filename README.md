# FORMA® — Digital Studio Website

A responsive digital-agency landing page built with **Next.js App Router**, **React**, **TypeScript**, and **Tailwind CSS v4**. The visual system includes a glassmorphism navigation, purple-accented light mode, black-to-purple dark mode, portfolio showcase, service cards, process section, estimate calculator, and contact inquiry UI.

## Requirements

- Node.js **20.9+** (Node.js 22 LTS is recommended)
- npm
- VS Code (recommended editor)

## Run locally

1. Extract `forma-studio.zip`.
2. Open the extracted `forma-studio` folder in VS Code.
3. Open the integrated terminal in the project folder.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Main project structure

```text
forma-studio/
├── app/
│   ├── globals.css       # Theme tokens, component styling and responsive rules
│   ├── icon.svg          # Browser tab icon
│   ├── layout.tsx        # Root layout and page metadata
│   └── page.tsx          # Homepage route
├── components/
│   └── agency-site.tsx   # Interactive landing page sections and UI state
├── public/               # Public assets (ready for project images and logos)
├── .env.example
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## Included interactions

- Light/dark theme toggle; the selected theme is saved in browser `localStorage`.
- Responsive mobile navigation.
- Portfolio category filters.
- Interactive budget and timeline estimator.
- Expandable FAQ items.
- Required-field validation on the contact form.

## Important implementation notes

- **The contact form is a front-end demo.** It validates inputs in the browser and displays a confirmation state, but it does not send/store submissions yet. To receive real enquiries, connect an API route and an email service or CRM.
- **The estimate values are sample planning ranges in Indonesian rupiah.** Update the values in `estimateOptions` and `scopeOptions` inside `components/agency-site.tsx` before publishing.
- The portfolio entries are clearly labelled **concept studies**, not verified client projects. Replace them with approved project information and artwork.
- The homepage is the public marketing/showcase module. Client portal, authentication, database-backed booking, project tracking, and admin CMS are not configured in this starter; add them as separate routes and connect a database when extending the wider Digital Agency & Creative Service Booking Hub brief.
- Replace the demo studio identity, metadata, and copy with the agency's real brand details before deployment.

## Styling notes

Tailwind CSS v4 is configured through `@tailwindcss/postcss` and imported in `app/globals.css`. The page also uses a small set of custom CSS components and design tokens for the editorial layout, abstract graphic mockups, glass UI, and theme system.

## Deployment

This project can be deployed to Vercel or any compatible Node.js hosting provider after installing dependencies and running a production build. Add environment variables only when backend services are integrated.


## Revisi fitur (WhatsApp + floating detail)

- Kartu layanan memiliki panel penjelasan yang muncul melayang saat hover atau keyboard focus.
- Kartu portfolio memiliki panel studi kasus berisi tantangan, pendekatan/hasil, dan disiplin yang digunakan.
- Tombol konsultasi layanan dan navigasi `Let's talk` membuka WhatsApp ke nomor `+62 851-9650-7699`.
- Formulir kontak menyusun detail inquiry ke pesan WhatsApp. Setelah WhatsApp terbuka, pengguna tetap perlu menekan tombol **Send/Kirim** di WhatsApp.
- Panel hover dirancang untuk desktop dan juga bisa diakses dengan keyboard focus; di perangkat sentuh, tap tombol panah WhatsApp untuk langsung konsultasi.

Nomor WhatsApp disimpan di `components/agency-site.tsx` pada konstanta `WHATSAPP_NUMBER`. Format internasional tanpa tanda `+` atau spasi: `6285196507699`.
