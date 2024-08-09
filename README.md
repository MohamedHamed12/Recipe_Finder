# Recipe Finder

![WhatsApp Image 2024-08-09 at 17 33 57_c3e1cea8](https://github.com/user-attachments/assets/1a63e1a2-fe27-4f75-baac-90710d576c48)


Recipe Finder is a simple and intuitive web application that allows users to search for recipes by ingredients, cuisine, or meal type. Built with React and styled using Tailwind CSS, this project aims to provide a responsive and user-friendly interface for discovering new recipes.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Recipe Search:** Search for recipes using keywords, ingredients, or cuisine types.
- **Responsive Design:** Fully responsive layout, optimized for mobile, tablet, and desktop screens using Tailwind CSS.
- **Favorites:** Mark and save favorite recipes for easy access.
- **Detailed Recipe View:** View detailed recipe instructions, ingredients, and nutritional information.
- **Dynamic Filtering:** Filter recipes based on dietary preferences, meal types, or preparation time.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 12 or later)
- npm or yarn

### Installation

1. **Clone the repository:**
    
    bash
    

    ```bash
    git clone https://github.com/MohamedHamed12/Recipe_Finder.git
    cd recipe-finder
    ```
    
3. **Install dependencies:**
    
    Using npm:
    

    
    `npm install`
    
    Or using yarn:
    
    
    
    `yarn install`
    

### Running the Project

To start the development server, run:

Using npm:



`npm start`

Or using yarn:


`yarn start`

The application will be available at `http://localhost:3000`.

## Project Structure

Here's a brief overview of the project structure:

```
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── assets
│   │   └── images, icons, etc.
│   ├── components
│   │   ├── RecipeItem.js
│   │   ├── RecipeSearch.js
│   │   └── ...
│   ├── pages
│   │   ├── HomePage.js
│   │   ├── RecipeDetailPage.js
│   │   └── ...
│   ├── styles
│   │   └── tailwind.css
│   ├── App.js
│   ├── index.js
│   └── ...
└── tailwind.config.js

```

- **components/**: Contains reusable components like `RecipeItem`, `RecipeSearch`, etc.
- **styles/**: Contains custom Tailwind CSS styles.
- **tailwind.config.js**: Tailwind CSS configuration file.

## Usage

1. **Search for Recipes:**
    
    - Enter a keyword, ingredient, or cuisine type in the search bar.
    - Press the search button to view the results.
2. **View Recipe Details:**
    
    - Click on a recipe card to view detailed instructions, ingredients, and nutritional information.
3. **Save Favorites:**
    
    - Click on the heart icon to save a recipe to your favorites list.

## Built With

- **React:** JavaScript library for building user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **React Router:** Library for routing in React applications.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---


