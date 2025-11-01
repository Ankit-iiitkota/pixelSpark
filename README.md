# ✨ PixelSpark: AI Image Showcase

PixelSpark is a full-stack MERN application that allows users to generate imaginative images using OpenAI's DALL-E AI and share them with a vibrant community. Browse a gallery of creations, search for specific prompts, and spark your own imagination.

## 🚀 Core Features

* **Generate Images:** Create stunning, unique images from any text prompt using the DALL-E API.
* **Community Showcase:** Browse a gallery of all images shared by the community.
* **Share Your Art:** Post your generated images to the community feed with your name and the prompt you used.
* **Search Functionality:** Easily search the community showcase for images by prompt text or creator name.
* **"Surprise Me" Button:** Get a random, creative prompt from a predefined list to inspire your next creation.

## 💻 Tech Stack

This project is built with a modern MERN stack and utilizes third-party APIs for its core functionality.

* **Frontend:**
    * **React 18**
    * **Vite**
    * **React Router**
    * **TailwindCSS**

* **Backend:**
    * **Node.js**
    * **Express.js**
    * **CORS** (Configured for security)

* **Database & APIs:**
    * **MongoDB (Mongoose)** (For storing post information)
    * **OpenAI API (DALL-E)** (For image generation)
    * **Cloudinary** (For cloud-based image hosting)

## 🏁 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v16 or later)
* `npm`
* A free MongoDB Atlas account (for your database URL)
* An OpenAI API key
* A Cloudinary account (for API keys and cloud name)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/Ankit-iiitkota/pixelSpark.git](https://github.com/Ankit-iiitkota/pixelSpark.git)
    cd pixelSpark
    ```

2.  **Set up the Backend (Server):**
    * Navigate to the server directory: `cd server`
    * Install dependencies: `npm install`
    * Create a `.gitignore` file and add `.env` to it.
    * Create a `.env` file in the `server` folder and add your secret keys:
        ```env
        MONGODB_URL="your_mongodb_atlas_url"
        OPENAI_API_KEY="your_openai_api_key"
        CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
        CLOUDINARY_API_KEY="your_cloudinary_api_key"
        CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
        ```
    * Start the server: `npm run start`
    * Your server will be running on `http://localhost:8080`.

3.  **Set up the Frontend (Client):**
    * Open a new terminal and navigate to the client directory: `cd client`
    * Install dependencies: `npm install`
    * Start the client development server: `npm run dev`

4.  **You're all set!**
    * Open [http://localhost:5173](http://localhost:5173) in your browser to see the application.
    * The client is configured to make requests to your local server running on `http://localhost:8080`.

## 🌐 Deployment

This project is deployed in two parts:

* **Backend:** Deployed on **Render**.
* **Frontend:** Deployed on **GitHub Pages**.

The live application is available at:
**[https://Ankit-iiitkota.github.io/pixelSpark/](https://Ankit-iiitkota.github.io/pixelSpark/)**

