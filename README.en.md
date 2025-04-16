<div align="center">

<h1>Homepage Creators</h1>

<p align="center">

[Preview](#-preview) | [Quick Start](#-quick-start) | [Discussion](#-discussion)

[中文](https://github.com/iWangJiaxiang/Homepage-Creators/blob/main/README.md) | [English](https://github.com/iWangJiaxiang/Homepage-Creators/blob/main/README.en.md)

</p>
</div>

[![preview](https://github.com/iWangJiaxiang/Homepage-Creators/raw/refs/heads/main/screenshot.png)](https://jiaxiang.wang)

## 🔥 Preview

| Site Name | Site Address |
|:------:|:-----------------------|
| Jiaxiang Wang Personal Homepage| [https://www.jiaxiang.wang](https://www.jiaxiang.wang) |


## ℹ️ Introduction

[Homepage Creators](https://github.com/iWangJiaxiang/Homepage-Creators) is a personal homepage theme for [Zola](https://github.com/getzola/zola), styled similarly to Apple, beautiful and elegant.

> Note: This theme is a port of the open-source [HeoWeb](https://github.com/zhheo/HeoWeb) static theme, thanks to [Zhang Hong Heo](https://blog.zhheo.com/) for the generous sharing.

This theme is easy to use; you only need to modify the `config.toml` file to dynamically adjust the content. There is no need to modify HTML content like in the upstream repository, greatly reducing the cognitive burden on users.

### 🔌 Features

> All features have been successfully ported

- [x] Basic
  - [x] Mobile responsiveness
  - [x] Animated scrolling
  - [x] AVIF / WebP responsiveness
  - [x] Dynamic footer year update
  - [x] Analytics
- [x] Content
  - [x] Navigation menu
  - [x] Hero section
  - [x] Author section
  - [x] Event section
  - [x] Product section (single)
  - [x] Product section (list)
- [x] Operations
  - [x] Sticky notifications
- [x] Compliance
  - [x] ICP filing (China)

## 📝 Quick Start

This section helps you quickly run your own homepage website. If you plan to formally use this theme, please refer to the [Formal Usage](#formal-usage) section for a better theme update experience.

### Free Static Page Hosting Services

#### GitHub Pages

1. [Fork](https://github.com/iWangJiaxiang/Homepage-Creators/fork) this repository.
1. Ensure the repository contains the `.github/workflows/deploy.yml` file, no additional configuration needed.
1. Enable the `Build GH Pages` workflow in the repository's **Actions** page, then manually trigger the build.
1. After committing changes, GitHub Actions will automatically build and deploy to the `gh-pages` branch.
1. In your GitHub repository, go to **Settings** -> **Pages**, select the `gh-pages` branch in the **Source** dropdown menu and save.
1. After deployment, you can access your site at `https://<your-username>.github.io/<repository-name>`.
1. Refer to the [Customize Your Homepage](#customize-your-homepage) section to customize your personal homepage.

#### CloudFlare Pages

1. [Fork](https://github.com/iWangJiaxiang/Homepage-Creators/fork) this repository.
1. Log in to [Cloudflare](https://dash.cloudflare.com/) and go to the **Pages** page.
1. Click the **Create a project** button.
1. Choose **Connect to Git**, then authorize Cloudflare to access your GitHub repository.
1. Select your `Homepage-Creators` repository from the list.
1. Configure build settings:
  - **Framework preset**: Select `None`
  - **Build command**: Enter `zola build`
  - **Build output directory**: Enter `public`
  - Add environment variable `UNSTABLE_PRE_BUILD` with value `asdf plugin add zola https://github.com/salasrod/asdf-zola && asdf install zola $ZOLA_VERSION && asdf global zola $ZOLA_VERSION`
  - Add environment variable `ZOLA_VERSION` with value `0.20.0`
  - If you encounter any issues, please refer to the [official documentation](https://www.getzola.org/documentation/deployment/cloudflare-pages/)
1. Click the **Save and Deploy** button, Cloudflare Pages will start building and deploying your site.
1. After deployment, you can access your site via the Cloudflare-provided domain or bind a custom domain.
1. Refer to the [Customize Your Homepage](#customize-your-homepage) section to customize your personal homepage.

### Local Deployment

1. Refer to the [official documentation](https://www.getzola.org/documentation/getting-started/installation/) to install the Zola command line tool
1. Clone this repository to your local machine

    ```bash
    git clone --depth=1 https://github.com/iWangJiaxiang/Homepage-Creators
    ```

1. Navigate to the local repository

    ```bash
    cd Homepage-Creators
    ```

1. Run the preview command, then open the suggested preview address in your browser

    ```bash
    zola serve
    ```

    You should now be able to successfully access the blog website

1. Refer to the official materials to further customize your homepage
   - [Zola command documentation](https://www.getzola.org/documentation/getting-started/cli-usage/)
   - [Understanding project structure](https://www.getzola.org/documentation/getting-started/directory-structure/)
   - [Customization](https://www.getzola.org/documentation/getting-started/configuration/)

1. Modify the `config.toml` configuration file as needed; you should have a basic understanding of TOML format.

1. Place your image assets in the `static/img` folder as needed

## Formal Usage

This section's solution differs from directly modifying the repository code mainly in content isolation. Based on the Zola blog framework mechanism, installing this repository's code as a theme allows complete isolation between theme updates and user modifications, enabling long-term use and avoiding technical debt.

For formal usage, it's assumed you have basic knowledge of the [Zola](https://github.com/getzola/zola) framework and Git Submodules. The specific steps are as follows:

1. Install the Zola command-line tool locally, refer to the [official documentation](https://www.getzola.org/documentation/getting-started/installation/)
1. Use the `zola` command to initialize a new website locally (your personal homepage) and initialize it as a Git repository. The command format is `zola init <site name>`
1. Install this theme repository as a Git Submodule in your website
   ```bash
   git submodule add -b main https://github.com/iWangJiaxiang/Homepage-Creators themes
   ```
   At this point, your repository should automatically create a `themes/Homepage-Creators` folder
1. Download the repository contents
   ```bash
   git submodule update --init
   ```
   Now, the `themes/Homepage-Creators` folder should have content
1. Configure the new website to use this theme by modifying the `config.toml` file's property to `theme = "Homepage-Creators"`
1. Refer to the [Customize Your Homepage](#customize-your-homepage) section to modify the `config.toml` configuration file as needed; you should have a basic understanding of TOML format.

Afterwards, your personal homepage website can be maintained as a separate Git repository.

To update the theme, you only need to update the Git Submodule's branch/tag/code.

## Customize Your Homepage

Customization is very simple! No code changes are needed, as I've modularized the sections. You only need to:

1. Place your image assets in the `static/img` folder (the most time-consuming and challenging work is actually image creation...)
2. Modify the `config.toml` file to configure sections, text content, and referenced images
3. Run the `zola serve` command to preview the homepage locally, with real-time refresh support

To customize your homepage, you need a basic understanding of the Zola framework, such as [understanding project structure](https://www.getzola.org/documentation/getting-started/directory-structure/) and [configuration files](https://www.getzola.org/documentation/getting-started/configuration/). These are very simple concepts that only require a single read-through.

### Basic Configuration

You can configure website information in the `config.toml` file as follows:

```toml
[extra.site]
# Website establishment year, used for generating copyright content
start_year = 2024
# Website Logo
logo = "/img/logo.webp"
# Navigation bar Logo, defaults to website Logo if empty
nav_logo = "/img/logo.webp"
# Contact email
mail = "contact@example.com"
# ICP filing number (for Chinese websites)
compliance_icp = "ICP备XXXXXXXX号"
# Public security filing number (for Chinese websites)
compliance_security = "公网安备0000000000号"
# Public security filing link (for Chinese websites)
compliance_security_link = "https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=0000000000"

[extra.other]
# Enable AVIF image format conversion to significantly reduce image size
avif_enable = true
```

### Navigation Menu

You can configure the content of the **top navigation bar** and **notifications** in the `config.toml` file as follows:

```toml
[extra.nav]

# Notification popup below navigation bar
[extra.nav.message]
enable = true
# support inline html
text = "🎉 Visit Author's Blog"
url = "https://blog.jiaxiang.wang"

# Center navigation bar configuration
[extra.nav.center]
menus = [
    # Set internal = true, url as text indicates internal navigation, page scrolls to specific section
    { name = "Home", url = "Home", internal = true},
    { name = "Theme", url = "Theme", internal = true},
    { name = "Blog", url = "Blog", internal = true},
    { name = "Media", url = "Media", internal = true},
    # Set internal = false, url as link indicates external navigation
    { name = "Projects", url = "https://blog.jiaxiang.wang/tags/project/", internal = false},
]

# Right navigation bar configuration
[extra.nav.right]
menus = [
    { name = "Author's Blog", url = "https://blog.jiaxiang.wang", internal = false},
    { name = "Author's Github", url = "https://github.com/iWangJiaxiang", internal = false},
]
```

### Content Sections

You can flexibly customize sections according to your needs. Except for the top navigation bar, any section of the page is a **modular component** that can have **unlimited customization of order and quantity**.

Using sections is very simple, just paste the **section configuration code at the end of `config.toml`**, after the `[extra.other]` Section. The first line of configuration code is uniformly `[[extra.index.widgets]]`, where `[[ ]]` represents an array in TOML syntax.

**The order of sections matches the order of addition**, meaning you can adjust the code order in the `config.toml` file to control the page display order.

If you have any doubts, the quickest way is to reference this project's [config.toml file](https://github.com/iWangJiaxiang/Homepage-Creators/blob/main/config.toml).

Currently supported modular components are as follows:

#### Modular Component Section: Header Content

Configuration code:

```toml
[[extra.index.widgets]]
# Important, do not modify
type = "header"
[extra.index.widgets.value]
title_1 = "Main Title 1"
title_2 = "Main Title 2"
bio_1 = "This description has <span class=\"inline-word\">highlighted text</span>"
bio_2 = "Another description line"
# "Learn More" button link
about_url = "https://blog.jiaxiang.wang/about/"
# Right side image
cover = "/img/logo.svg"
# Small buttons next to "Learn More", can add/remove as needed, usually for social media links
[[extra.index.widgets.value.links]]
class_icon = " icon-github-line"
url = "https://github.com/iWangJiaxiang"
[[extra.index.widgets.value.links]]
class_icon = " icon-github-line"
url = "https://github.com/iWangJiaxiang"
```

#### Modular Component Section: Author Introduction

Configuration code:

```toml
[[extra.index.widgets]]
# Important, do not modify
type = "author"
[extra.index.widgets.value]
# Name
name = "Site Owner"
# Avatar, place images in /static/img folder, format here starts with: /img/
avatar = "/img/logo01.webp"
title = "Team leader, architect,"
# Personal introduction or thoughts
bio = "A brief introduction about the site owner~"
```

#### Modular Component Section: Single Product

Can be used to showcase personal projects, works, achievements, etc.

Configuration code:

```toml
[[extra.index.widgets]]
# Important, do not modify
type = "product-single"
[extra.index.widgets.value]
# Modify text content as needed
tip = "Homepage"
title = "Personal Homepage<br>Now Open Source"
bio_1 = "Present stunning <span class=\"inline-word\">effects</span> like this page"
bio_2 = "Easy configuration, quickly build your <span class=\"inline-word\">personal homepage</span>"
# Product image, place in /static/img folder, format here starts with: /img/
img = "/img/homepage-single.avif"
# Product button list
[[extra.index.widgets.value.links]]
# Style, supports primary-button and second-link
class = "primary-button"
# Link
url = "https://github.com/iWangJiaxiang/Homepage-Creators"
# Display name
name = "Get Source Code Now"
[[extra.index.widgets.value.links]]
class = "second-link"
url = "https://github.com/iWangJiaxiang"
name = "Developer's Page"
```

#### Modular Component Section: Product List

Used to display a series of content

Configuration code:

```toml
[[extra.index.widgets]]
# Important, do not modify
type = "product-list"
[extra.index.widgets.value]
# Modify text content as needed
title = "Media"
bio = "Contributing to the spirit of internet sharing"
[[extra.index.widgets.value.items]]
# Product logo, place in /static/img folder, format here starts with: /img/
logo = "/img/internet.svg"
# Modify text content as needed
title = "Personal Blog"
bio = "Introduction text for personal blog"
# Button configuration
url = "https://blog.jiaxiang.wang/"
button = "Visit"
# Show hot tag
hot = true
[[extra.index.widgets.value.items]]
logo = "/img/wechat.svg"
title = "WeChat Official Account"
bio = "Get updates first"
url = "https://blog.jiaxiang.wang/wechat"
button = "Visit"
```

#### Modular Component Section: Important Events

Display important activities, major events, etc.

Configuration code:

```toml
[[extra.index.widgets]]
# Important, do not modify
type = "event"
[extra.index.widgets.value]
# Modify text content as needed
tip = "Major Event"
title = "Jiaxiang Wang Blog Theme<br>Now Open Source!"
bio = "A theme built for creators, start your blogging journey with zero cost and zero maintenance, progress together with excellent bloggers!"
button = "Get Source Code Now"
note = "Built with Zola"
url = "https://github.com/iWangJiaxiang/zola-theme-jiaxiang.wang"
# Background image, place in /static/img folder, format here starts with: /img/
img = "/img/blog-event.avif"
```

## 💬 Discussion

If you have any suggestions or comments about the theme, feel free to submit PRs & Issues.

## 🔐 License

[Homepage Creators](https://github.com/iWangJiaxiang/Homepage-Creators) is open-source under the [AGPL](./LICENSE) license, please comply with the open-source agreement.
