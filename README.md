# Michael McPhail - Personal Portfolio

A modern, responsive personal website built with Jekyll showcasing my work, projects, and blog.

## Features

- **Responsive Design** - Works beautifully on all devices
- **Blog Section** - Share your thoughts and insights
- **Portfolio Projects** - Showcase your work with interactive elements
- **Background** - Professional background 
- **Interactive Dashboards** - Embed live projects and visualizations
- **SEO Optimized** - Built-in search engine optimization
- **Fast Loading** - Optimized for performance

## File Structure

```
michaelmcphail.github.io/
├── _config.yml              # Jekyll configuration
├── _layouts/                # Page layouts
│   ├── default.html         # Main layout template
│   ├── post.html           # Blog post layout
│   ├── project.html        # Project page layout
│   └── background.html     # Background layout
├── _posts/                  # Blog posts
│   └── 2024-01-15-welcome-to-my-blog.md
├── _projects/              # Portfolio projects
│   └── example-dashboard-project.md
├── _background/            # Background entries
│   └── senior-data-scientist.md
├── assets/                 # Static assets
│   ├── css/
│   │   └── main.css        # Main stylesheet
│   └── js/
│       └── main.js         # JavaScript functionality
├── blog/                   # Blog index page
│   └── index.html
├── projects/               # Projects index page
│   └── index.html
├── background/             # Background index page
│   └── index.html
├── index.html              # Homepage
├── Gemfile                 # Ruby dependencies
└── README.md               # This file
```

## Getting Started

### Prerequisites

- Ruby (version 2.6 or higher)
- RubyGems
- GCC and Make

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/michaelmcphail.github.io.git
   cd michaelmcphail.github.io
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Start the development server**
   ```bash
   bundle exec jekyll serve
   ```

4. **View your site**
   Open your browser and go to `http://localhost:4000`

## Customization

### Site Configuration

Edit `_config.yml` to customize your site:

```yaml
title: Your Name
email: your-email@example.com
description: Your site description
github_username: your-github-handle
twitter_username: your-twitter-handle
```

### Adding Content

#### Blog Posts
Create new files in `_posts/` with the format `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "Your Post Title"
date: 2024-01-15
categories: [category1, category2]
excerpt: "Brief description of your post"
---

Your post content here...
```

#### Projects
Create new files in `_projects/` with the format `project-name.md`:

```markdown
---
layout: project
title: "Project Title"
date: 2024-01-10
description: "Project description"
technologies: [Python, JavaScript, React]
external_link: "https://your-project-url.com"
---

Project content here...
```

#### Background
Create new files in `_background/` with the format `job-title.md`:

```markdown
---
layout: background
title: "Job Title"
company: "Company Name"
start_date: 2022-03-01
end_date: 2024-01-01
location: "City, State"
excerpt: "Brief job description"
---

Job details here...
```

### Interactive Elements

For projects with dashboards or interactive visualizations:

1. **Embed iframes** in your project files:
   ```html
   <div class="interactive-container">
       <div class="dashboard-container">
           <iframe src="your-dashboard-url" width="100%" height="600px"></iframe>
       </div>
   </div>
   ```

2. **Add external links** to live demos:
   ```yaml
   external_link: "https://your-live-demo.com"
   ```

### Styling

Customize the appearance by editing `assets/css/main.css`. The site uses:
- Modern CSS Grid and Flexbox
- Responsive design principles
- Clean, professional color scheme
- Smooth animations and transitions

## Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial site setup"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "GitHub Pages" section
   - Select "main" branch as source
   - Your site will be available at `https://your-username.github.io`

### Other Hosting Options

- **Netlify** - Drag and drop the `_site` folder
- **Vercel** - Connect your GitHub repository
- **AWS S3** - Upload the `_site` folder to an S3 bucket

## Development

### Local Development

```bash
# Start development server with live reload
bundle exec jekyll serve --livereload

# Build for production
bundle exec jekyll build
```

### Adding New Features

1. **New Layouts** - Add to `_layouts/` directory
2. **Custom CSS** - Add to `assets/css/` directory
3. **JavaScript** - Add to `assets/js/` directory
4. **Images** - Add to `assets/images/` directory

## SEO and Performance

The site includes:
- **Meta tags** for social sharing
- **Structured data** for search engines
- **Sitemap generation** (via Jekyll SEO Tag)
- **RSS feed** for blog posts
- **Optimized images** and lazy loading
- **Fast loading** with minimal dependencies

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have questions or need help:
- Check the [Jekyll documentation](https://jekyllrb.com/docs/)
- Open an issue on GitHub
- Contact me directly

---

*Built with ❤️ using Jekyll*
