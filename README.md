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

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
