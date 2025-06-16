# 👨‍💼 Healthy Snacks Website - Admin Panel

React-based Admin Panel for managing products and viewing orders placed by customers.

## 🚀 Live Admin Panel
🔗 [Visit Admin Panel](https://healthy-snacks-website-admin-panel.vercel.app/)

## 🧰 Tech Stack
- React.js
- Vite
- CSS Modules
- REST API integration with Express backend

## 💡 Features
- Add new product with image upload
- Select category and price
- View and manage all orders
- Preview uploaded product images

## 📦 Local Development

### 1. Clone the repository
git clone https://github.com/your-username/healthy-snacks-website-admin-panel.git
cd healthy-snacks-website-admin-panel

2. Install dependencies
npm install

3. Update Backend URL
By default, the admin panel uses the deployed backend URL:

https://healthy-snacks-website-backend.onrender.com
To run it locally, replace all such URLs with:

http://localhost:4000
(for example) in:
AddProduct.jsx
ListOrders.jsx

4. Run the dev server
npm run dev
The app will start at http://localhost:5173

📁 File Structure

admin/
│
├── dist/                     # Production-ready build files
├── node_modules/             # Project dependencies
├── public/                   # Static assets (e.g., favicon, images)
├── src/                      # Source code
│   ├── assets/               # Images, icons, and other media
│   ├── Components/           # Reusable components
│   │   ├── AddProduct/       # Add product form/component
│   │   ├── ListOrders/       # Order listing component
│   │   ├── ListProduct/      # Product listing component
│   │   ├── Navbar/           # Top navigation bar
│   │   └── Sidebar/          # Sidebar navigation
│   ├── Pages/                # Page-level components/views
│   ├── App.css               # App-level styles
│   ├── App.jsx               # Root component
│   ├── index.css             # Global styles
│   └── main.jsx              # Entry point (Vite specific)
│
├── .gitignore                # Files/folders ignored by Git
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML template for Vite
├── package.json              # Project metadata and scripts
├── package-lock.json         # Dependency lock file
├── vite.config.js            # Vite configuration
└── README.md                 # Documentation


📄 License
Licensed under the MIT License.

---
Let me know if you'd like `.env.example`, contribution guidelines, or direct help pushing these to each repository!







