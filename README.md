# Invoice App

A web-based invoice generator application built with Next.js 13, TypeScript, React, and the Shadcn UI library. It provides an easy way to create and manage professional invoices.

## Technologies

### Core Technologies

- **Next.js:** React framework for SSR and client-side navigation.
- **TypeScript:** JavaScript superset with static typing.
- **Shadcn-UI:** UI library for enhanced visuals.
- **Tailwind:** Utility-first CSS framework.
- **React Hook Form:** Form management for React.
- **Zod:** TypeScript-first schema validation.
- **Puppeteer:** PDF generation with headless browsers.

### Additional Dependencies

- **Nodemailer:** Node.js module for sending emails.
- **Lucide Icons:** Collection of customizable SVG icons.

## Getting Started

Follow these instructions to get Invoice App up and running on your local machine.

### Prerequisites

- Node.js and npm installed on your system.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/pipsclimber/invoice-app
    cd invoice-app
    ```

2. Install dependencies

    ```bash
    npm install
    ```

3. Create an .env.local file with this content (This step is for sending pdf to email feature):
    ```env
    NODEMAILER_EMAIL=your_email@example.com
    NODEMAILER_PW=your_email_password
    ```
4. Start development server

    ```bash
    npm run dev
    ```

5. Open your web browser and access the application at [http://localhost:3000](http://localhost:3000)
 <!-- LICENSE -->

## License

Distributed under the MIT License.
