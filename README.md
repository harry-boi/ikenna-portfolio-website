# Ikenna Nwachukwu - Portfolio Website

A beautiful, modern, and responsive portfolio website showcasing Ikenna Nwachukwu's professional background, core values, and the impact of Afro Socialite Incorporated.

## 🚀 Features

- **Modern Design**: Clean, professional design with Tailwind CSS
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Contact Form**: Functional contact form for inquiries
- **SEO Optimized**: Semantic HTML structure and meta tags

## 🛠️ Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **Animations**: CSS transitions and transforms
- **Deployment**: Ready for production deployment

## 📋 Sections

1. **Hero**: Introduction and call-to-action
2. **About**: Mission, vision, and personal story
3. **Core Values**: Six key principles that drive leadership
4. **Professional Background**: Education, expertise, and international experience
5. **Afro Socialite**: Organization initiatives and impact
6. **Contact**: Contact information and inquiry form
7. **Footer**: Social links and additional information

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd ikenna-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install and configure Tailwind CSS**

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Configure Tailwind CSS**

   Update `tailwind.config.js`:

   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

5. **Start development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🎨 Customization

### Colors

The website uses a blue-purple gradient theme that can be easily customized in the Tailwind config or component files.

### Content

All content is stored in the component files and can be easily updated:

- `src/components/Hero.jsx` - Main introduction
- `src/components/About.jsx` - About section
- `src/components/CoreValues.jsx` - Values and principles
- `src/components/ProfessionalBackground.jsx` - Education and experience
- `src/components/AfroSocialite.jsx` - Organization details
- `src/components/Contact.jsx` - Contact information and form

### Styling

The website uses Tailwind CSS utility classes for consistent styling. Custom CSS can be added to `src/index.css`.

## 🌐 Deployment

The website is ready for deployment on various platforms:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist/` folder
- **GitHub Pages**: Deploy from the `dist/` folder
- **AWS S3**: Upload the `dist/` folder to an S3 bucket

## 📞 Contact

For questions about this portfolio website or to connect with Ikenna:

- **Email**: Ikenna.n@afrosocialite.com
- **Website**: www.afrosocialite.com
- **LinkedIn**: [nwachukwu-ikenna-k](https://www.linkedin.com/in/nwachukwu-ikenna-k/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ for community empowerment and cultural inclusion.
