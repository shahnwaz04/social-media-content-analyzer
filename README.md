# Social Media Content Analyzer

A full-stack web application that helps users analyze social media content and get useful insights for improving their posts. Users can enter text directly or upload documents and images, making it easier to analyze content from different sources.

The project combines content processing with AI-based analysis to provide feedback and suggestions based on the submitted content.

## Live Demo

The application is deployed and available here:

[Social Media Content Analyzer](https://social-media-content-analyzer-rose.vercel.app/)

---

## Features

* Analyze social media content entered as text
* Upload and extract text from PDF files
* Extract text from images using OCR
* Generate insights and suggestions based on the content
* Clean and responsive user interface
* Handle different types of user input in a single application

---

## Screenshots

### Home Page

<!-- Add a screenshot of your application's main/home page here -->
<img width="1201" height="549" alt="image" src="https://github.com/user-attachments/assets/9bef615c-e207-4e89-a653-438905ee88ef" />



> **Screenshot:** Main interface where users can enter or upload content for analysis.

### Content Analysis

<!-- Add a screenshot showing the analysis results here -->

![Content Analysis Screenshot](./screenshots/analysis.png)

> **Screenshot:** Results and insights generated after analyzing the submitted content.

### File Upload / OCR





> **Note:** Create a folder named `screenshots` in your project and place your images inside it. You can change the image file names in the README if needed.

---

## How It Works

1. The user enters social media content or uploads a supported file.
2. Text is extracted from the uploaded PDF or image.
3. OCR is used when text needs to be recognized from an image.
4. The processed content is sent for analysis.
5. The application displays insights and suggestions to the user.

### Content Processing Flow

```text
User Input
    ↓
Text / PDF / Image Processing
    ↓
Text Extraction or OCR
    ↓
Content Analysis
    ↓
Insights and Suggestions
```

---

## Technology Stack

The project is built using modern web technologies:

**Frontend**

* React
* Vite
* CSS

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB

**Content Processing**

* PDF text extraction
* OCR for image-based text
* AI-based content analysis

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
cd YOUR_REPOSITORY_NAME
```

### Install Dependencies

Install the dependencies for both the frontend and backend.

```bash
cd client
npm install
```

For the backend:

```bash
cd server
npm install
```

### Environment Variables

Create a `.env` file in the server directory and add the required environment variables.

```env
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_api_key
PORT=5000
```

Make sure not to commit your `.env` file or API keys to GitHub.

### Run the Application

Start the backend server:

```bash
cd server
npm run dev
```

Start the frontend:

```bash
cd client
npm run dev
```

The application will then be available on the local development URL shown in your terminal.

---

## PDF Extraction and OCR

The application supports analyzing content from uploaded files in addition to direct text input.

For PDF files, the application extracts available text and uses it as input for the analysis process.

For images, OCR (Optical Character Recognition) is used to identify and extract text from the image. The extracted text can then be analyzed in the same way as manually entered content.

The accuracy of OCR may depend on image quality, text size, and the complexity of the background.

---

## Limitations

* OCR results may not be accurate for low-quality or unclear images.
* Analysis quality depends on the content provided by the user.
* Large files may take longer to process.
* AI-based features require valid API configuration and internet access.

---

## Future Improvements

Some possible improvements for the project include:

* Hashtag recommendations
* Sentiment analysis
* Platform-specific content suggestions
* User authentication and analysis history
* Content analytics dashboard
* Support for additional file formats

---

## Deployment

The frontend of the project is deployed using Vercel.

When deploying the complete application, make sure that:

* Environment variables are configured correctly
* The frontend uses the correct production API URL
* CORS is configured if the frontend and backend are hosted separately

**Live Application:**
https://social-media-content-analyzer-rose.vercel.app/

---

## Author

**Shahnwaz**

Computer Science and Engineering student interested in software development, AI, and building practical full-stack applications.

---

If you found this project useful or interesting, feel free to give the repository a star.
