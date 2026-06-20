# 🤖 AI-FitTrack – Intelligent Biometric Analytics & Predictive Fitness Planner
> An advanced, full-stack personal health application combining reactive frontend architecture with machine learning capabilities to deliver automated routine generation, visual progression metrics, and type-safe performance analytics.
## 📖 Project Overview
**AI-FitTrack** evolves traditional, manual activity logging into an automated, data-driven optimization ecosystem. By utilizing intelligent state tracking and client-side computational loops, the application acts as an autonomous virtual coach—analyzing systemic training data to predict fatigue thresholds, calculate continuous progressive overload targets, and dynamically adjust meal macros.
---
### 🚀 Core Capabilities
* 🧠 **AI Coaching Engine** – Machine learning models that automatically generate customized workout splits based on user historic output and current fatigue levels.
* 📊 **Predictive Analytics Dashboards** – High-fidelity charts projecting linear weight/volume trajectories and muscle recovery status.
* 🥗 **Dynamic Macro Rebalancing** – Automated nutrient targets that pivot based on real-time biometric inputs and active calorie burn tracking.
* ⚡ **Ultra-Fast Compilation** – Fully optimized React 19 execution pipeline handled by Vite and SWC for immediate local response rates.
---
## 🎨 Design System & Interface Preview :-
> 💡 **Figma Architecture:** Explore our unified visual layout components here: [AI-FitTrack Figma Workspace & Prototyping System](ADD_YOUR_FIGMA_LINK_HERE).

| 🤖 AI Routine Generation & Metrics | 📈 Predictive Overload Analytics |
| :--- | :--- |
| ![AI Interface Control](2199337792304420184.jpeg) | ![Analytics Forecasting View](3895737464602910742.jpeg) |
| *Tailored dashboard providing instant AI-driven muscle fatigue scores, active volume logs, and macronutrient trends.* | *Type-safe analytics charts forecasting structural strength trends over upcoming training blocks.* |
---
## 🛠️ System Architecture & Tech Stack :
The application infrastructure utilizes a highly decoupled, state-governed architecture to maintain strict memory efficiency:[ Responsive User UI Layer ]
             (React 19 Hooks + shadcn/ui)
                          │
           ┌──────────────┴──────────────┐
           ▼                             ▼| Component Layer | Technology Stack Choice |
| :--- | :--- |
| **Frontend Framework** | React 19, TypeScript, Tailwind CSS, shadcn/ui |
| **Build Core** | Vite Engine + SWC (Speedy Web Compiler) |
| **Analytical Visuals** | Recharts / Chart.js (Dynamic Data Canvas vectors) |
| **Code Governance** | ESLint + Strict Type-Aware Configuration (`tseslint`) |

---

## ⚙️ Strict Type Governance & Linting

To guarantee zero runtime exceptions during state transformation matrices, the template enforces strict type checking through the following `eslint.config.js` script setup:

```js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Enforce zero-implicit type coercions & strict parameter audits
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      
      // Structural integrity enforcement for React & DOM elements
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
⚡ Setup & Local Installation
1. Replicate Project Repository
Bash
git clone [https://github.com/Suprasannaramaka/Fitness_Tracker.git](https://github.com/Suprasannaramaka/Fitness_Tracker.git)
cd Fitness_Tracker
2. Dependency Allocation
Installs node packages along with necessary developer type definition bundles:
Bash
npm install
3. Initialize Local Execution Module
Bash
npm run dev
The build environment will spin up a local instance streaming directly at http://localhost:5173.
---
## 🎨 Blueprint for Designing Your Figma Workspace
To match the high-end look of your new README file, build out a dark-themed, sleek dashboard file in Figma using this architectural canvas system layout:
### 1. Global Visual Tokens (Setup First)
* **Background Tones:** #0B0F19 (Deep Charcoal Slate) or #09090B (Zinc Neutral).
* **Primary Accent:** #10B981 (Emerald Green for healthy metrics/completion rates) or #6366F1 (Indigo Indigo for high-tech AI tracking accents).
* **Typography Hierarchy:** Inter or Geist Sans (Medium for numbers, regular for micro-copy elements).

### 2. Core Screen Frameworks to Draw

#### Screen A: The Intelligent Dashboard
* **Left Rails:** Sticky navigation containing icons for (Dashboard, Workout Log, Machine Learning Engine, Profiles, App Settings).
* **Center Body (Top Layout):** 3 metric block cards tracking (1. Current Fatigue Index out of 100%, 2. Recommended Routine Focus: *e.g., "Pull Day / Hypertrophy"*, 3. Daily Caloric Ingestion Progress).
* **Center Body (Main Canvas):** A beautiful spline line-chart showing user historic target volumes mapped against a dotted predictive trendline generated by your AI logic.

#### Screen B: The Workout Input Interface :
* Form control blocks utilizing minimalistic shadcn design cards.
* A clear button at the top header displaying: `✨ Autogenerate Next Set with AI`. When clicked

### 🖥️ Project Interface Preview

| 📊 Centralized Dashboard | 🧠 Activity Metrics | 🥗 Nutrition Profile |
| :---: | :---: | :---: |
| <img src="https://github.com/user-attachments/assets/ac49e83f-4acd-41fe-803a-517d2e101382" width="100%" /> | <img src="https://github.com/user-attachments/assets/f0210ddd-899a-4c26-b2e8-b538a3964f34" width="100%" /> | <img src="https://github.com/user-attachments/assets/3f27819d-a76b-449a-9aab-f96e6e485b04" width="100%" /> |
| *Active performance hub tracking metrics.* | *Granular activity analytics mapping.* | *Caloric intake distribution.* |







