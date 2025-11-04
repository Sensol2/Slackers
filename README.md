# Slackers - Language Exchange Platform

A bilingual (Korean–Japanese) language exchange and tutoring platform for university students.

## 🚀 Features

- **User Authentication**: Google and Email login via Supabase Auth
- **Teacher Marketplace**: Find and connect with language teachers
- **Real-time Chat**: Slack-style chat rooms for language practice
- **Subscription Management**: Flexible pricing plans
- **Bilingual Support**: Korean and Japanese interface

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Styled Components + shadcn/ui
- **Icons**: Lucide React
- **State Management**: Zustand
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Home page
│   ├── dashboard/         # Dashboard page
│   ├── chat/              # Chatroom page
│   ├── teachers/          # Teachers list page
│   └── login/             # Login/Signup page
├── components/            # Reusable UI components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer component
│   ├── Card.tsx          # Card components
│   └── ChatMessage.tsx   # Chat message component
├── lib/                   # Utilities and helpers
│   ├── supabase.ts       # Supabase client
│   ├── utils.ts          # Utility functions
│   └── registry.tsx      # Styled Components registry
├── store/                 # Zustand state stores
│   ├── authStore.ts      # Authentication state
│   ├── chatStore.ts      # Chat state
│   └── uiStore.ts        # UI state
├── types/                 # TypeScript type definitions
│   └── index.ts          # Shared types
├── styles/                # Global styles
│   └── globals.css       # Tailwind + global CSS
└── public/                # Static assets

```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd Slackers
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Copy `.env.example` to `.env.local` and fill in your Supabase credentials:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 🎨 Design Theme

- **Primary**: #1E88E5 (blue)
- **Secondary**: #64B5F6 (light blue)
- **Background**: #F5F6FA
- **Typography**: Inter / Pretendard
- **Border Radius**: rounded-2xl (1rem)
- **Transitions**: Smooth hover effects

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🔧 Development Guidelines

- Use TypeScript strictly
- Follow ESLint + Prettier rules
- Use App Router conventions
- Prefer server components when possible
- Keep components small and reusable

## 📦 Key Dependencies

- `next` - React framework
- `react` & `react-dom` - React library
- `typescript` - Type safety
- `@supabase/supabase-js` - Supabase client
- `zustand` - State management
- `styled-components` - CSS-in-JS
- `tailwindcss` - Utility-first CSS
- `lucide-react` - Icon library

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project on Vercel
3. Add environment variables
4. Deploy!

## 📄 License

This project is for educational purposes.

## 🤝 Contributing

Contributions are welcome! Please follow the development guidelines.

---

Built with ❤️ for language learners
