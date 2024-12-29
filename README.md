# Object Segmentation App

This is an object segmentation app built with **shadcn/ui**, **Next.js**, and **Flask**. It allows users to upload an image and process it to generate two results: an edges image and a background-removed image.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Backend**: [Flask](https://flask.palletsprojects.com/)
- **Image Processing**: [OpenCV](https://opencv.org/)
- **State Management**: [React](https://reactjs.org/)

## Features

- Image upload functionality with a responsive UI using **shadcn/ui** components.
- Processes images to produce:
  - **Edges-only image**
  - **Background-removed image**
- Axios integration for seamless communication with the Flask backend.
- Base64 encoding and decoding to handle image data.
- Responsive design with **Tailwind CSS**.

## Running Locally

### Clone the Repository:
```bash
git clone https://github.com/yourusername/object-segmentation-app.git
```
### Install Dependencies:
```bash
npm install
```
### Setup Flask Backend:
```bash
pip install -r requirements.txt
```
### Start Flask Server:
```bash
python app.py
```
### Start the Development Server:
```bash
npm run dev
```

