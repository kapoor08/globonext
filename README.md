# GloboNext

Welcome to **GloboNext**, a modern, multilingual landing page built with **Next.js 14** using the **App Router**. This project leverages `next-intl` for seamless internationalization and is styled with **Tailwind CSS**. It offers a responsive and elegant design, adapted from the original [Nextly Template](https://github.com/web3templates/nextly-template).

## 🌍 Live Demo

The live version of this project is deployed and accessible [here](https://globonext.vercel.app/).

## 🚀 Features

- 🌐 Multilingual support (English 🇺🇸 and German 🇩🇪)

- ⚡ Built with Next.js 14 (App Router)

- 🗂️ File-based routing and layouts

- 💬 Easy language switching powered by next-intl

- 🧩 Fully responsive design

- 🎨 Styled using Tailwind CSS

- 🧪 Developer-friendly structure with minimal setup

- 📁 Clean project structure inspired by production standards

## 🛠️ Technologies Used

- **Next.js 14**: Framework for building full-stack React applications with App Router support.
- **next-intl**: Internationalization (i18n) solution for Next.js with translation management.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Node.js v20.9.0^**: Runtime environment used to run the project.
- **Nextly Template**: Base UI/UX structure adapted from [Nextly](https://github.com/web3templates/nextly-template).

## 📦 Installation & Setup

Follow these steps to run the project locally:

1. Clone the repository:

```bash
git clone https://github.com/yourusername/globonext.git
```

2. Navigate into the project directory:

```bash
cd nextjs-intl-landing-page
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

5. Open http://localhost:3000 in your browser to view the project.

## 🌐 Internationalization

This project uses `next-intl` for robust language support.

**Languages Supported:**

- English (en)
- German (de)

**Translation Files**

Translations are stored in the `/messages` directory as JSON files, structured per locale.

```
/messages
  └── en.json
  └── de.json
```

**Adding New Languages**

1. Create a new JSON file inside /messages with the locale code (e.g., fr.json).
2. Add the translations inside the file.
3. Update the supported locales in your i18n.ts config.
4. Add routing logic if required using the App Router.

## 🧱 Project Structure

```
globonext/
├── node_modules/
├── public/
│   └── logo.png
├── src/
│   ├── app/
│   │   └── [locale]/
│   │       ├── layout.js
│   │       ├── page.js
│   │       └── ...
│   ├── components/
│   │   ├── LocaleSwitcher.js
│   │   ├── LocaleSwitcherSelect.js
│   │   └── ...
│   ├── messages/
│   │   ├── en.json
│   │   └── de.json
│   ├── config.js
│   ├── i18n.js
│   ├── middleware.js
│   └── navigation.js
├── styles/
│   └── globals.css
├── .eslintrc.json
├── .gitignore
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tailwind.config.js
├── README.md
└── ...
```

## 🚧 Roadmap & Future Improvements

- Add support for more languages (e.g., French, Spanish)
- Integrate CMS for dynamic content localization
- Include dark/light theme toggle
- SEO optimization with i18n metadata
- Add unit tests for components

## 🧑‍💻 Contributing

Contributions are welcome! Feel free to open issues, fork the repo, and submit pull requests.

**Steps to contribute:**

1. Fork this repository
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes
4. Commit and push (`git commit -m 'Added feature' && git push`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.  
You are free to use, modify, and distribute this project as per the license terms.
