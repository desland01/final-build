/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "grovestreetpainting-com-inter-bold":
          "var(--grovestreetpainting-com-inter-bold-font-family)",
        "grovestreetpainting-com-inter-medium":
          "var(--grovestreetpainting-com-inter-medium-font-family)",
        "grovestreetpainting-com-inter-medium-upper":
          "var(--grovestreetpainting-com-inter-medium-upper-font-family)",
        "grovestreetpainting-com-inter-regular":
          "var(--grovestreetpainting-com-inter-regular-font-family)",
        "grovestreetpainting-com-inter-regular-upper":
          "var(--grovestreetpainting-com-inter-regular-upper-font-family)",
        "grovestreetpainting-com-inter-semi-bold":
          "var(--grovestreetpainting-com-inter-semi-bold-font-family)",
        "grovestreetpainting-com-semantic-button":
          "var(--grovestreetpainting-com-semantic-button-font-family)",
        "grovestreetpainting-com-semantic-button-upper":
          "var(--grovestreetpainting-com-semantic-button-upper-font-family)",
        "grovestreetpainting-com-semantic-heading-1":
          "var(--grovestreetpainting-com-semantic-heading-1-font-family)",
        "grovestreetpainting-com-semantic-heading-2":
          "var(--grovestreetpainting-com-semantic-heading-2-font-family)",
        "grovestreetpainting-com-semantic-heading-3":
          "var(--grovestreetpainting-com-semantic-heading-3-font-family)",
        "grovestreetpainting-com-semantic-heading-4":
          "var(--grovestreetpainting-com-semantic-heading-4-font-family)",
        "grovestreetpainting-com-semantic-input":
          "var(--grovestreetpainting-com-semantic-input-font-family)",
        "grovestreetpainting-com-semantic-item":
          "var(--grovestreetpainting-com-semantic-item-font-family)",
        "grovestreetpainting-com-semantic-link":
          "var(--grovestreetpainting-com-semantic-link-font-family)",
        "grovestreetpainting-com-semantic-link-upper":
          "var(--grovestreetpainting-com-semantic-link-upper-font-family)",
        "grovestreetpainting-com-semantic-strong":
          "var(--grovestreetpainting-com-semantic-strong-font-family)",
        "grovestreetpainting-com-semantic-textarea":
          "var(--grovestreetpainting-com-semantic-textarea-font-family)",
      },
    },
  },
  plugins: [],
};
