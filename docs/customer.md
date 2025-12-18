# TNP Customer Management Module

This project is a comprehensive **Customer Relationship Management (CRM) System** developed using **React + Vite** (Frontend) and **Laravel** (Backend). It supports managing customer data, filtering, transfers between teams, recall scheduling, and multi-channel customer organization with features like role-based access control, real-time data synchronization, and responsive mobile/desktop views.

---

## 🚀 Features

| Feature | Description |
|---------|-------------|
| **Customer List** | Display customers in card view (mobile) or data grid (desktop) with sorting & pagination |
| **Advanced Filtering** | Filter by date range, sales channel, customer group, and multiple criteria |
| **Customer Forms** | Create/Edit customers with 2-tab layout (Essential Info & Additional Info) |
| **Transfer System** | Transfer customers between Sales and Online teams with history tracking |
| **Recall Management** | Schedule and track customer recall/follow-up dates |
| **Multi-Channel Support** | Organize customers by channel (Sales, Online, Office) |
| **Role-Based Access** | Permission system based on user roles and sub-roles (HEAD, MEMBER) |
| **Duplicate Detection** | Detect and handle duplicate phone numbers during customer creation |
| **Quick Create Form** | Telesales quick form for rapid customer entry |
| **Responsive Design** | Mobile-first design with card view and desktop data grid |

---

## 🛠️ Tech Stack

**Frontend:**
- React 18 + Vite
- Redux Toolkit + RTK Query
- Material-UI (MUI) v6
- React Router DOM v6
- React Icons
- date-fns / dayjs

**Backend:**
- Laravel (PHP)
- MySQL
- RESTful API

---

## 📁 Module Structure

```
Customer/
├── CustomerList.jsx           # Main customer list page
├── components/
│   ├── Common/                # Shared utility components
│   │   ├── CustomComponents.jsx
│   │   ├── QuickActionsBar.jsx
│   │   └── ScrollTopButton.jsx
│   ├── DataDisplay/           # Data presentation components
│   │   ├── CustomerCard.jsx
│   │   ├── CustomerCardList.jsx
│   │   ├── DataGridWithRowIdFix.jsx
│   │   └── parts/             # Card sub-components
│   ├── Filters/               # Filter components
│   │   ├── FilterPanel.jsx
│   │   ├── FilterTab.jsx
│   │   ├── FilterTags.jsx
│   │   └── sections/          # Filter sections
│   ├── Forms/                 # Form components
│   │   ├── DialogForm.jsx
│   │   ├── DuplicatePhoneDialog.jsx
│   │   ├── TelesalesQuickCreateForm.jsx
│   │   ├── tabs/              # Form tabs
│   │   └── layout/            # Form layout components
│   └── transfer/              # Transfer dialog components
│       ├── TransferToSalesDialog.jsx
│       ├── TransferToOnlineDialog.jsx
│       └── TransferHistoryDialog.jsx
├── config/
│   └── columnDefinitions.jsx  # Data grid column config
├── constants/
│   ├── customerChannel.js     # Channel constants (Sales, Online, Office)
│   ├── dialogConstants.js     # Dialog configurations
│   ├── filterConstants.js     # Filter options
│   └── validationConstants.js # Validation rules
├── hooks/
│   ├── useCustomerActions.js  # Customer CRUD actions
│   ├── useDialogApiData.js    # Dialog data fetching
│   ├── useDuplicateCheck.js   # Phone duplicate detection
│   ├── filter/                # Filter-related hooks
│   ├── form/                  # Form-related hooks
│   └── list/                  # List-related hooks
├── styles/
│   └── FilterStyledComponents.jsx
└── utils/
    ├── addressUtils.js        # Address formatting
    ├── customerCardUtils.js   # Card helper functions
    └── dateAdapters.js        # Date handling utilities
```

---

## 📊 Customer Channels

| Channel | Code | Description |
|---------|------|-------------|
| **Sales** | 1 | Field sales team customers |
| **Online** | 2 | Online sales team customers |
| **Office** | 3 | Walk-in customers |

---

## 🔄 Workflow

```
[Create Customer] → [Assign to Channel] → [Manage/Follow-up] → [Transfer if needed]
       ↓                    ↓                    ↓                    ↓
  Fill Form          Sales/Online/Office    Set Recall Date    Change Team
```

---

## 🔧 Key Hooks

### Data Hooks
- `useCustomerData()` - Fetch and manage customer list data
- `useCustomerActions()` - CRUD operations (create, update, delete, recall)
- `useDialogApiData()` - Fetch data for dialog forms

### Form Hooks
- `useCustomerFormHandler()` - Form state and validation management
- `useCustomerSubmit()` - Handle form submission
- `useDuplicateCheck()` - Phone number duplicate detection
- `useStepperValidation()` - Multi-step form validation

### Filter Hooks
- `useFilterState()` - Filter state management
- `useFilterActions()` - Filter actions and handlers
- `useDateRangeHelpers()` - Date range filter utilities

---

## 👥 Role-Based Access

| Role | Sub-Role | Permissions |
|------|----------|-------------|
| Admin | - | Full access to all customers |
| Sales | HEAD_OFFLINE | View team customers, transfer, assign |
| Sales | MEMBER | View own customers only |
| Online | HEAD_ONLINE | View team customers, transfer, assign |
| Online | MEMBER | View own customers only |

---

## 📦 Key Components

### CustomerCard
- Display customer info in card format (mobile view)
- Shows: Name, Phone, Channel, Group, Recall status
- Actions: Edit, Delete, Transfer, Change Group

### DataGridWithRowIdFix
- MUI DataGrid with custom row ID handling
- Server-side sorting and pagination
- Column visibility and order persistence

### DialogForm
- 2-tab layout: Essential Info & Additional Info
- Integrated duplicate phone detection
- Transfer history viewing

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
