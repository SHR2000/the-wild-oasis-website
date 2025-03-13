# The Wild Oasis Website

## Description

This web application is a luxury cabin reservation platform designed for booking exclusive, high-end cabin accommodations. Built with Next.js and React, it provides a seamless and luxurious booking experience with an elegant, user-friendly interface. The app integrates Supabase for backend services and uses Auth.js for secure Google Authentication, allowing users to sign in effortlessly with their Google accounts.

To make the reservation process even smoother, React Day Picker offers an interactive, customizable date picker for easy check-in and check-out date selection. The UI is beautifully styled using Tailwind CSS, ensuring it’s not only responsive but also visually appealing and in line with the luxurious aesthetic of the cabins.

## Technologies Used

- **Next.js**: A React framework for building static and dynamic web applications.
- **Supabase**: For backend services such as database management.
- **Date-fns**: A modern JavaScript date utility library for date manipulation.
- **React Day Picker**: A flexible and customizable date picker for React.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs.
- **Heroicons**: A set of free, open-source SVG icons for use with React.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (preferably v14 or higher)
- npm or yarn

### Installation

First, Clone this repository to your local machine:

```bash
git clone https://github.com/SHR2000/the-wild-oasis-website.git
```

Second, navigate to the project directory:

```bash
cd the-wild-oasis-website
```

Third, install dependencies:

```bash
npm install
```

or, if you prefer yarn:

```bash
yarn install
```

## Configuration

First, create a `.env.local` file in the root directory of your project to store environment variables.
Then Add the following environment variables to the file:

```ini
# Supabase Configuration
SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-service-role-key  # Keep this secret, do not expose it on the frontend

# Authentication Configuration
AUTH_URL=your-auth-url
AUTH_SECRET=your-auth-secret
AUTH_GOOGLE_ID=your-google-client-id
AUTH_GOOGLE_SECRET=your-google-client-secret
```
