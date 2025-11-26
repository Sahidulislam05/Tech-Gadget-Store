
# Tech Gadget Store BD 🛒

একটি আধুনিক, Full Stack ই-কমার্স অ্যাপ্লিকেশন যা প্রযুক্তি এবং গ্যাজেট বিক্রির উপর নির্মিত। প্রজেক্টটি **Next.js 16 App Router** এর ক্ষমতা, **Firebase Authentication** এর নিরাপত্তা এবং **MongoDB/Express** এর ডেটা হ্যান্ডলিং দক্ষতা প্রদর্শন করে।

-----

## 🌟Project Description

Tech Gadget Store BD একটি গতিশীল ই-কমার্স প্ল্যাটফর্ম যেখানে সুরক্ষিত ইউজার ফ্লো (User Flow) এবং অ্যাডমিন-স্তরের প্রোডাক্ট ম্যানেজমেন্ট (যা আপনি এখন যুক্ত করতে পারবেন) এর ব্যবস্থা রাখা হয়েছে। অ্যাপ্লিকেশনটি পারফরম্যান্সের জন্য ডিজাইন করা হয়েছে, যা Next.js এর সার্ভার-সাইড এবং ক্লাউড সার্ভিসেস (Firebase) এর সুবিধা ব্যবহার করে।

### Key Features Implemented:

  * **Modern Architecture:** Built with Next.js 16 (App Router).
  * **Robust Authentication:** Secure user sign-up/login/logout using **Firebase Authentication**.
  * **Secure Private Routes:** Implementation of **Next.js Middleware** integrated with **Firebase Admin SDK** to verify user sessions and protect `/dashboard` routes.
  * **Backend:** Scalable **RESTful API** developed with **Express.js**.
  * **Data Persistence:** Flexible data storage using **MongoDB**.
  * **Product Management:** A panel for viewing and deleting products (via Express/MongoDB API).

-----

## 🛠️ Setup & Installation Instructions

প্রজেক্টটি লোকালি চালু করার জন্য এই ধাপগুলো অনুসরণ করুন।

### Prerequisites

  * Node.js (LTS version)
  * MongoDB Atlas Account and Connection String
  * Firebase Project (Authentication enabled)

### 1\. Clone the Repository

```bash
git clone https://github.com/Sahidulislam05/Tech-Gadget-Store
cd tech-gadget-store
```

### 2\. Install Dependencies

আপনার Next.js এবং Express (যদি আলাদা থাকে) প্রজেক্টে এই প্যাকেজগুলো ইন্সটল করুন:

```bash
# Next.js Project এ
npm install
# আপনার Express/Backend Project এ
npm install firebase
npm install express cors mongodb
```

### 3\. Environment Variables

প্রজেক্টের রুটে একটি `.env.local` ফাইল তৈরি করুন এবং নিচের ভ্যারিয়েবলগুলো কনফিগার করুন:

```env
# Firebase Client Side Configuration (আপনার Firebase Console থেকে)  
NEXT_PUBLIC_FIREBASE_API_KEY="..."
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="..."

```
### 5\. Run the Project

ডেভেলপমেন্ট সার্ভার চালু করুন:

```bash
npm run dev
```

অ্যাপ্লিকেশনটি `http://localhost:3000` এ অ্যাক্সেস করা যাবে।

-----

## 🗺️ Route Summary (Next.js Side)

| Route | Type | Description | Security |
| :--- | :--- | :--- | :--- |
| `/` | Page | Homepage featuring main product listings. | Public |
| `/login` | Page | Firebase-based Sign-in/Sign-up interface. | Public |
| `/dashboard` | Page | Secured private route area. | **Private (Middleware Protected)** |
| `/products/[id]` | Page | Detailed individual product view. | Public |
| `/api/register` | API | API endpoint to handle user sign-up via Express/MongoDB. | Public (POST) |
| `/api/products` | API | CRUD operations (GET, POST, DELETE) for products via Express/MongoDB. | Public/Private (depending on the action) |
