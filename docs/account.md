# TNP Accounting Module

This project is a comprehensive **Accounting Management System** developed using **React + Vite** (Frontend) and **Laravel** (Backend). It supports managing **quotations**, **invoices**, **delivery notes**, and **pricing integration** with features like PDF generation, role-based access control, Thai Baht formatting, and real-time data synchronization.

---

## 🚀 Features

| Feature | Description |
|---------|-------------|
| **Pricing Integration** | Import pricing data from CRM system to create quotations |
| **Quotation Management** | Manage quotations - create, edit, approve, send, and track status |
| **Invoice Management** | Manage invoices - link with quotations, automatic VAT calculation |
| **Delivery Notes** | Manage delivery notes - print multiple PDF formats, support bundle download |
| **PDF Generation** | Generate PDF for all document types, support multi-header types |
| **Role-Based Access** | Permission system by role (Admin, Account, Sale) |
| **Thai Localization** | Support Thai language, Thai Baht format, Thai date format |

---

## 🛠️ Tech Stack

**Frontend:**
- React 18 + Vite
- Redux Toolkit + RTK Query
- Material-UI (MUI) v6
- React Router DOM v6
- React Hook Form + Yup
- date-fns / dayjs

**Backend:**
- Laravel (PHP)
- MySQL
- RESTful API

---

## 📁 Module Structure

```
Accounting/
├── PricingIntegration/   # Import Pricing → Create Quotations
├── Quotations/           # Quotation Management
├── Invoices/             # Invoice Management
├── DeliveryNotes/        # Delivery Note Management
├── shared/               # Shared components & hooks
├── hooks/                # Performance optimization hooks
├── theme/                # MUI Theme customization
└── utils/                # Utility functions
```

---

## 📊 Workflow

```
[Pricing Request] → [Quotation] → [Invoice] → [Delivery Note]
       ↓                ↓             ↓              ↓
  Import Data     Create Quote    Issue Invoice   Ship & Print PDF
```

---

## 🔧 Core Utilities

### Formatters
- `formatTHB(value)` - Thai Baht currency formatting
- `formatDate(date)` - Thai locale date formatting
- `formatPhoneNumber(phone)` - Phone number with dashes
- `formatTaxId(taxId)` - Tax ID with dashes

### Validators
- `validateCustomerData(data)` - Full customer validation
- `isValidEmail(email)` - Email format validation
- `isValidPhoneNumber(phone)` - Thai phone validation (9-10 digits)
- `isValidTaxId(taxId)` - Thai Tax ID validation (13 digits)

---

## 📦 Key Dependencies

```json
{
  "@mui/material": "^6.5.0",
  "@reduxjs/toolkit": "^1.9.3",
  "react": "^18.2.0",
  "react-router-dom": "^6.15.0",
  "react-hook-form": "^7.56.1",
  "date-fns": "^2.30.0",
  "axios": "^1.3.1"
}
```

---

## 🚀 Getting Started

```bash
# Install dependencies
cd tnp-frontend
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📝 Version

**Current Version:** 0.0.104  
**Last Updated:** December 2025
