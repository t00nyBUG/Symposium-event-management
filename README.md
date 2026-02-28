SYMPO - Smart Event Management Portal

A modern, highly advanced React web application for college event management. Built specifically to handle event announcements, online registrations, secure attendance, and dynamic certificate generation featuring professional, high-end aesthetics.

Features
- **Glassmorphism & Dark Mode**: Professional UI design focused on an immersive, premium user experience.
- **Dynamic Event Dashboard**: Search and filter events in real-time.
- **Registration Flow**: Secure contextual forms that store attendee names over an underlying state layer.
- **QR-Based Attendance**: Displays an entry pass to speed up physical check-ins.
- **Elegant Certificate Engine**: Using `html2canvas`, the app generates a gorgeous web-certificate populated with the user's name and event details, which can be downloaded instantly as a high-resolution PNG image or natively shared (if supported).

Tech Stack
- **React** (Vite)
- **Vanilla CSS** (Vibrant variables, glassmorphism techniques)
- **lucide-react** (Iconography)
- **react-router-dom** (Navigation)
- **qrcode.react** (Entry ticket QR Generation)
- **html2canvas** (Certificate image extraction)

Running Locally

Because the `node_modules` folder has been omitted for ease of sharing, you will need to re-install the dependencies before running the application.

1. Install Dependencies:
```bash
npm install
```

2. Start the Development Server:
```bash
npm run dev
```

3. Open exactly as shown in your terminal (usually `http://localhost:5173`) in your browser.
