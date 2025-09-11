/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                buttonPrimary: "#38E07B",
                buttonSecondary: "#1F2937",
                primary: "#151f1a",
                secondary: "#111827",
            },
            backgroundImage: {
                heroPattern: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA9sCAUOtD75X7hRZi4N9MjhYxFifWdZaU3rwNNbfMeUubZ68FnbiUtYAOffH6_308Lwj3SxJDWO7j9aycXfVmg2A3GnDXPPDbVrUxdbyN4gkvGUiHkbEnZILgvTLEzZ6aVIK8DuT4I91uyMDjwhDycwPQ9xbr6G8NycaLn1DETUrhFMZYeKeZthvAduhWW7E12nbApFraUg5A_we2gX52uNvQBvrVbUKRR1dS-KNE83_lVJv73CJfB9s35yu4nxKrPI3QLD0oTHSXX')",
                heroPattern2: "url('https://deerdesigner.com/wp-content/uploads/17951-Article-Illustration-Can-you-be-a-self-taught-web-designer-1200x790-illustration-1.png')",
                CardImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaYJxnNJohEO9l9v3HCwpRQEZ99vnilg2SqsVe1FSfnRJxCm02SGeEO-HbirV9hBN3YnRY4JxhXiDNusFhpgm2meNxLQ2zNpUorasKMUo38ZHajzHeo1l5TNQOotQeP3T3Xgtc3qeZ5CB5TwYEgb5wcd1gSjVvCZbxF6Kh3jjeXEz2J9Vx24RPy0pSvm44m0Dutrcp5WB-HOmAnkRsq4cSGIMtL2OmdOGtdvUupt2Fe4QM8yMw7oWgBz1Nxh3ozZWmLHKhnKTcCCBb')",
            }
        },
    },
    plugins: [],
};
