# The Noise

This repository contains the source code for "The Noise," a static site project built using [Eleventy](https://www.11ty.dev/). It serves as a comprehensive portfolio and documentation platform for various computer science subjects.

## Table of Contents

- [Content Overview](#content-overview)
- [Project Setup](#project-setup)
- [Running Locally](#running-locally)
  - [Development Mode](#development-mode)
  - [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [License](#license)

## Content Overview

"The Noise" is structured to provide comprehensive documentation and resources across various computer science subjects. Key areas include:

-   **Subjects:** Detailed chapters and topics covering algorithms, data structures, information theory, and more, organized into logical parts and chapters for structured learning and reference.
-   **Online Courses:** Information and links related to available online courses.
-   **Research:** A section dedicated to research topics and findings.
-   **Changelog & FAQ:** Resources for tracking project updates and answering common questions.

The site aims to be a central hub for learning and reference in these domains.

## Project Setup

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**
    ```bash
    git clone git@github.com:Pinkuagrawal28/the-noise.git
    cd the-noise
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Running Locally

### Development Mode

To run the project in development mode with a local server and live reloading:

```bash
npm run start
```

This will typically start a server at `http://localhost:8080` (or a similar address), allowing you to see changes in real-time as you develop.

### Building for Production

To build the project for production, generating all static files into the `_site` directory:

```bash
npm run build
```

The complete static website will be generated and located in the `_site/` directory.

## Deployment

This project is automatically deployed to GitHub Pages using a GitHub Actions workflow.

-   **Workflow File:** The deployment logic is defined in `.github/workflows/deploy.yml`.
-   **Trigger:** The deployment is triggered automatically on every push to the `main` branch.
-   **Process:** The workflow installs dependencies, builds the Eleventy site, and then deploys the contents of the `_site/` directory to GitHub Pages.
-   **Live Site:** Once deployed, your site will be accessible at: `https://Pinkuagrawal28.github.io/the-noise/` (replace with your actual GitHub Pages URL if different).

To ensure automatic deployment, verify that GitHub Pages is configured to use "GitHub Actions" as its source in your repository settings (`Settings > Pages`).

## How to Contribute

We welcome contributions to "The Noise"! To ensure a smooth and collaborative process, please follow these guidelines when contributing new content or making changes.

### Branch Naming Conventions

To maintain a clear and organized Git history, please use the following branch naming conventions:

-   **Features:** For adding new chapters, sections, or functionality.
    -   `feat/add-new-chapter-name`
    -   `feat/implement-search-functionality`
-   **Fixes:** For correcting errors, typos, or bugs.
    -   `fix/correct-typo-in-chapter-1`
    -   `fix/resolve-build-error`
-   **Documentation:** For changes to the README or other documentation.
    -   `docs/update-contribution-guidelines`

### Adding New Chapters

To add a new chapter to an existing subject, follow these steps:

1.  **Navigate to the subject directory:** Go to `src/subjects/` and find the relevant subject folder (e.g., `src/subjects/algorithm/`).
2.  **Create a new Markdown file:** Add a new `.md` file for your chapter. Follow the existing naming convention (e.g., `chapter-6-new-topic.md`).
3.  **Add content:** Write your chapter content in Markdown format. You can reference existing chapters for formatting and structure.
4.  **Link the chapter (if necessary):** Depending on the subject's structure, you may need to update an `index.md` or a navigation file to include a link to your new chapter.

By following these guidelines, you help us keep the project organized and make it easier for everyone to contribute.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
