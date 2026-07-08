# Saba Sohail Mirza - Professional Portfolio

## 🌟 Overview

This is a beautiful, fully responsive professional portfolio website for Saba Sohail Mirza - a UI/UX Designer and Computer Science student. Built with vanilla HTML, CSS, and JavaScript (no frameworks), this portfolio showcases all CV details with stunning animations and visual effects designed to impress hiring companies.

## ✨ Features

### Design & Visual Effects
- **Beautiful Gradient Background**: Cyan/turquoise color palette throughout the site
- **Smooth Animations**: Fade-ins, slide animations, floating shapes, and scroll reveals
- **Interactive Elements**: Hover effects on cards, buttons with ripple effects, and parallax effects
- **Responsive Design**: Fully mobile-friendly with media queries for all screen sizes
- **Professional Typography**: Clean, readable fonts with perfect contrast

### Sections

1. **Navigation Bar**
   - Fixed navigation with smooth scroll links
   - Mobile hamburger menu
   - Active link highlighting based on scroll position

2. **Hero Section**
   - Eye-catching introduction
   - Profile picture frame with glow effect and mouse-follow animation
   - Animated title text
   - Call-to-action buttons
   - Floating shape animations

3. **About Section**
   - Professional summary
   - Contact information with hover effects
   - Statistics cards with animated counters

4. **Skills Section**
   - 5 skill categories (Design, Development, AI & Automation, Machine Learning, Soft Skills)
   - Interactive skill tags
   - Smooth card animations on scroll

5. **Projects Section**
   - Featured projects with detailed descriptions
   - Project highlights and technologies used
   - Hover animations and transitions

6. **Education Section**
   - Timeline design with visual markers
   - Education history and certifications
   - Professional presentation of academic achievements

7. **Contact Section**
   - Multiple contact methods (Email, Phone, GitHub)
   - Interactive contact cards
   - Easy-to-use links

8. **Footer**
   - Dynamic year display
   - Professional copyright notice

## 🖼️ Adding Your Photo

1. Click the **"📸 Upload Photo"** button on the hero section
2. Select an image from your computer
3. The image will be instantly displayed in the circular profile frame
4. The photo will animate smoothly when uploaded

**Alternative - Manual Setup in Code:**
- Replace the placeholder image URL in the HTML:
  ```html
  <img id="profileImage" src="https://your-image-url.com/photo.jpg" alt="Saba Sohail Mirza" class="profile-image">
  ```

## 🎨 Color Palette

The portfolio uses a beautiful cyan/turquoise gradient theme:
- **Light Cyan**: `#e3fdfd`
- **Pale Cyan**: `#cbf1f5`
- **Cyan**: `#a6e3e9`
- **Teal**: `#71c9ce`
- **Dark Teal**: `#5cb7bb`

### Customizing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --color-light-cyan: #e3fdfd;
    --color-pale-cyan: #cbf1f5;
    --color-cyan: #a6e3e9;
    --color-teal: #71c9ce;
    --color-dark-teal: #5cb7bb;
    /* ... other colors ... */
}
```

## 🚀 How to Use

### Option 1: Open Directly
Simply open `index.html` in any modern web browser.

### Option 2: Local Server
```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server)
npx http-server
```

Then visit: `http://localhost:8000`

### Option 3: Deploy
1. **Vercel** (Recommended):
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Netlify**: Drag and drop the project folder

3. **GitHub Pages**: Push to a repository and enable GitHub Pages

## 📝 Customizing Content

### Update Personal Information
Edit these sections in `index.html`:

**Contact Info** (About Section):
```html
<span class="info-value">+92 311 4922521</span>
<span class="info-value">sabasohailmirza@gmail.com</span>
<span class="info-value">Chichawatni, Sahiwal, Pakistan</span>
```

**Social Links**:
```html
<a href="https://github.com/YourUsername" target="_blank">
```

### Update Projects
Modify the project cards in the Projects section with your own projects.

### Update Education
Update the timeline items in the Education section with your schooling details.

## 🎬 Animation Details

### Built-in Animations
- **Fade In**: Elements fade in smoothly on page load and scroll
- **Slide In**: Text and cards slide in from different directions
- **Float Up**: Profile image floats up on initial load
- **Bounce**: Project placeholder icons bounce continuously
- **Pulse**: Profile frame pulses with a glow effect
- **Parallax**: Floating shapes follow mouse movement
- **Ripple**: Buttons show ripple effect on click
- **Scale**: Skill tags scale up on hover
- **Rotate**: Timeline items have smooth animations

### Disabling Animations
To reduce animations for accessibility, add to your browser preferences or modify `styles.css`:
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full experience with all animations)
- **Tablet**: 768px - 1199px (optimized layout)
- **Mobile**: Below 768px (mobile-first design)

## ♿ Accessibility Features

✓ Semantic HTML structure
✓ Proper ARIA labels and roles
✓ Keyboard navigation support
✓ Focus indicators on interactive elements
✓ Color contrast compliance (WCAG AA)
✓ Alt text for images
✓ Responsive text sizing

## 🔧 Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, animations, and flexbox/grid
- **Vanilla JavaScript**: Pure JS with no dependencies
  - Image upload handler
  - Smooth scrolling
  - Scroll animations
  - Mouse follow effects
  - Counter animations
  - Ripple effects

## 📊 Performance

- ⚡ **Zero dependencies** - Fast loading
- 🎯 **Optimized animations** - Uses CSS transforms for smooth performance
- 📉 **Minimal JavaScript** - Efficient event handling with debouncing
- 🖼️ **Optimized images** - No large image files bundled
- ♿ **Accessibility built-in** - Better user experience for all

## 🐛 Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips for Best Results

1. **Add a professional photo** for the best impact
2. **Update all CV information** to match your details
3. **Add project images** by uploading them and updating image URLs
4. **Deploy to a live domain** for sharing with recruiters
5. **Test on mobile** to ensure everything looks perfect
6. **Share on LinkedIn** with your portfolio URL

## 📄 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript interactions
├── data/               # CV document (reference)
└── README.md           # This file
```

## 🎯 Next Steps

1. ✅ Replace placeholder image with your photo
2. ✅ Update all contact information
3. ✅ Add your project details
4. ✅ Deploy to a live URL
5. ✅ Share with recruiters and on your resume

## 📞 Support

For any issues or questions:
- Check the console for error messages (F12 > Console)
- Ensure all files are in the same directory
- Try a different browser
- Clear cache and refresh

---

**Made with ❤️ for Saba Sohail Mirza**

Last updated: 2025