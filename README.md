# Darman Ravankar Pars Landing Page

A professional, responsive landing page for Darman Ravankar Pars, a lubricant manufacturing company based in Kermanshah, Iran. The page is designed for B2B purposes, showcasing industrial and automotive lubricants, company information, and contact details with multi-language support.

## Features

- **Multilingual Support**: Available in Persian, English, Arabic, Russian, and Turkish with RTL layout for Persian and Arabic.
- **Language Selector**: Dropdown menu with country flags for easy language switching.
- **AI-Optimized Content**: Structured data and dedicated sections for better AI search and understanding.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Industrial Theme**: Clean, minimal design with blue and gray color scheme suitable for B2B audience.
- **Interactive Elements**:
  - Typewriter effect for the main title.
  - Smooth scrolling navigation.
  - Fade-in animations on scroll.
  - Hover effects on product cards.
- **Embedded Map**: OpenStreetMap integration showing the factory location.
- **Product Showcase**: Categorized product cards for different lubricant types.
- **Contact Information**: Direct phone link and location details.
- **Additional Sections**: FAQ, Mission & Vision, Brand Introduction, and Company Identity for enhanced user engagement.

## File Structure

```
/
├── index.html          # Main HTML file with page structure and content
├── style.css           # CSS styles for layout, colors, and animations
├── script.js           # JavaScript for interactivity (typewriter, scroll effects, etc.)
├── .gitattributes      # Git attributes for line endings
├── LICENSE             # MIT License file
├── LLMO/               # Language data files
│   ├── arabic-data.js
│   ├── english-data.js
│   ├── persian-data.js
│   ├── russian-data.js
│   └── turkish-data.js
├── static/
│   └── images/
│       ├── darman_image_main.png  # Company logo
│       └── flags/                 # Country flag images
│           ├── ae.png
│           ├── Flag_of_Russia.svg.webp
│           ├── Flag_of_Turkey.png
│           ├── Flag-United-Kingdom.webp
│           └── Iran.svg.png
├── translate/          # Translation YAML files
│   ├── arabic.yml
│   ├── english.yml
│   ├── persian.yml
│   ├── russian.yml
│   └── turkish.yml
└── README.md           # This file
```

## Technologies Used

- **HTML5**: Semantic markup for structure.
- **CSS3**: Styling with Flexbox, Grid, and animations.
- **JavaScript (ES6)**: DOM manipulation and event handling.
- **YAML**: Translation files for multi-language support.
- **Google Fonts**: Vazirmatn font for Persian text.
- **OpenStreetMap**: Embedded map for location display.

## How to Run

1. Clone or download the project files.
2. Ensure the `static/images/darman_image_main.png` logo file is present.
3. Open `index.html` in a modern web browser.
4. The page will load with all interactive features enabled.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

Note: For optimal Persian and Arabic text rendering, use a browser with good Unicode support.

## Customization

- **Content**: Edit text in `index.html` to update company information, products, or contact details.
- **Styling**: Modify `style.css` for color scheme, fonts, or layout changes.
- **Functionality**: Adjust `script.js` for animation timings or adding new features.
- **Logo**: Replace `static/images/darman_image_main.png` with your updated logo.
- **Translations**: Edit YAML files in `translate/` to update text in different languages.

## License

This project is licensed under the MIT License. See LICENSE file for details.
