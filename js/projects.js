/* ============================================================
   Sawaira Saeed — Portfolio | projects.js
   Project data + card rendering + modal content
   ============================================================ */

/* NOTE TO OWNER:
   - Replace `github` values with specific repository URLs when available.
   - Replace `demo` values with live deployment URLs when available.
   - Replace placeholder metrics with actual notebook results.
   - "upcoming" projects are clearly flagged and should stay flagged until built.
*/

const GITHUB_PROFILE = "https://github.com/Sawaira-saeed";

const PROJECTS = [
  {
    id: "psytrack",
    title: "PsyTrack — Mental Health Management Platform",
    short: "A comprehensive cross-platform mobile application connecting Psychologists, Patients and Family Members for mental health service management.",
    category: "dev",
    catLabel: "Software Development / Healthcare",
    tags: ["Flutter", "Firebase", "Supabase", "OneSignal", "PDF"],
    icon: "fa-solid fa-heart-pulse",
    image: "assets/images/psytrack_architecture.png",
    status: "completed",
    github: GITHUB_PROFILE,
    demo: "",
    overview: "PsyTrack is a digital mental health management platform (Final Year Project) designed to connect psychologists, patients and family members through an organized and secure cross-platform mobile application. It streamlines appointment management, psychological assessments, patient records, mood tracking and progress monitoring.",
    problem: "Mental health care lacks an integrated digital channel that connects all stakeholders — psychologists, patients and their families — for coordinated appointment, assessment and progress tracking in one secure place.",
    methodology: [
      "Cross-platform mobile app built with Flutter for Android and iOS.",
      "Firebase used for Authentication and Cloud Firestore (real-time database).",
      "Supabase Storage used for media files and PDF documents (reports, prescriptions).",
      "OneSignal integrated for cross-platform push notifications.",
      "Bilingual support (English/Urdu) and voice support for accessibility.",
      "Data-driven analytics for mood and progress visualization."
    ],
    features: [
      "Psychologist, Patient and Family Member dashboards",
      "Appointment scheduling and patient management",
      "Digital psychological assessments",
      "Mood check-ins and mood/progress visualization",
      "Prescriptions and follow-up reminders",
      "PDF report generation",
      "Bilingual (English/Urdu) and voice support",
      "Push notifications via OneSignal"
    ],
    tech: ["Flutter", "Firebase (Auth, Firestore)", "Supabase (Storage)", "OneSignal", "PDF Generation", "Data Visualization"],
    hasImage: true,
    note: "Final Year Project. Architecture diagram shown is the official block diagram of the system framework."
  },
  {
    id: "attrition",
    title: "Employee Attrition Prediction Using ANN",
    short: "An Artificial Neural Network-based predictive system to identify employee attrition patterns using HR employee data.",
    category: "ml",
    catLabel: "Machine Learning / Deep Learning",
    tags: ["Python", "TensorFlow", "Keras", "Pandas", "Scikit-learn"],
    icon: "fa-solid fa-users-gear",
    image: "",
    status: "completed",
    github: GITHUB_PROFILE,
    demo: "",
    overview: "An Artificial Neural Network-based predictive system designed to identify employee attrition patterns using HR employee data, helping organizations anticipate workforce turnover.",
    problem: "Predicting which employees are likely to leave an organization enables proactive retention strategies, but requires a well-structured neural model trained on clean HR data.",
    methodology: [
      "Data preprocessing including missing value and outlier handling.",
      "Binary target encoding of the attrition label.",
      "Feature preparation and scaling.",
      "Built a feed-forward ANN and compared multiple optimizers.",
      "Model evaluation with confusion matrix and classification report."
    ],
    features: [
      "Data preprocessing & missing value handling",
      "Outlier handling and feature preparation",
      "Binary target encoding",
      "Neural network architecture (128 → 64 → 32 → 1 sigmoid)",
      "Optimizer comparison",
      "Model evaluation (accuracy, precision, recall, F1)"
    ],
    tech: ["Python", "TensorFlow", "Keras", "Pandas", "NumPy", "Scikit-learn"],
    architecture: "Input → Dense(128) → Dense(64) → Dense(32) → Dense(1, sigmoid)",
    metricsNote: "Replace with actual evaluation results from the notebook: accuracy, precision, recall, F1-score, training/validation curves and confusion matrix."
  },
  {
    id: "waste",
    title: "Smart Waste Classification Using Deep Learning",
    short: "A computer vision project classifying waste images into six categories using EfficientNetB0 and Vision Transformers.",
    category: "dl",
    catLabel: "Deep Learning / Computer Vision",
    tags: ["Python", "TensorFlow", "Computer Vision", "EfficientNet", "ViT"],
    icon: "fa-solid fa-recycle",
    image: "",
    status: "completed",
    github: GITHUB_PROFILE,
    demo: "",
    overview: "A computer vision project that classifies waste images into six categories using deep learning architectures and image classification techniques, supporting automated sorting.",
    problem: "Manual waste sorting is slow and error-prone. An automated image-classification system can categorize waste into recyclable groups to improve efficiency.",
    methodology: [
      "Dataset of waste images across six classes: Cardboard, Glass, Metal, Paper, Plastic, Trash.",
      "Applied Transfer Learning with EfficientNetB0 and Vision Transformer (ViT-B/16).",
      "Used Focal Loss and class weights to handle class imbalance.",
      "Generated Grad-CAM visualizations for model interpretability.",
      "Compared model performance across architectures."
    ],
    features: [
      "Six-class image classification",
      "EfficientNetB0 transfer learning",
      "Vision Transformer (ViT-B/16)",
      "Focal Loss & class weighting",
      "Grad-CAM interpretability",
      "Model comparison & training curves"
    ],
    tech: ["Python", "TensorFlow", "Computer Vision", "Deep Learning", "EfficientNetB0", "ViT-B/16"],
    metricsNote: "Replace with actual model comparison results, training curves, confusion matrix and Grad-CAM visualizations from the project files."
  },
  {
    id: "credit",
    title: "Credit Scoring Prediction System",
    short: "A machine learning application to predict credit risk using financial and applicant-related data, with a Streamlit interface.",
    category: "ml",
    catLabel: "Machine Learning / Financial Technology",
    tags: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    icon: "fa-solid fa-credit-card",
    image: "",
    status: "completed",
    github: GITHUB_PROFILE,
    demo: "",
    overview: "A machine learning application designed to predict credit risk using financial and applicant-related data, exposed through an interactive Streamlit interface.",
    problem: "Assessing credit risk manually is subjective and slow; a trained classifier can provide consistent, data-driven risk predictions.",
    methodology: [
      "Data preprocessing of applicant financial features.",
      "Trained classification models for credit risk prediction.",
      "Model evaluation using standard metrics.",
      "Built an interactive Streamlit prediction interface."
    ],
    features: [
      "Data preprocessing",
      "Credit risk prediction",
      "Classification & model evaluation",
      "Streamlit interactive interface"
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "Streamlit"]
  },
  {
    id: "disease",
    title: "Disease Prediction Using Machine Learning",
    short: "A machine learning predictive application classifying disease-related outcomes using XGBoost.",
    category: "ml",
    catLabel: "Machine Learning / Healthcare",
    tags: ["Python", "XGBoost", "Pandas", "Scikit-learn"],
    icon: "fa-solid fa-stethoscope",
    image: "",
    status: "completed",
    github: GITHUB_PROFILE,
    demo: "",
    overview: "A machine learning-based predictive application developed to classify disease-related outcomes using input features and trained prediction models.",
    problem: "Quick preliminary classification of disease-related outcomes from input features can assist educational understanding of predictive modeling in healthcare.",
    methodology: [
      "Data preprocessing of input features.",
      "XGBoost classification model training.",
      "Model evaluation using standard metrics.",
      "Prediction interface for user input."
    ],
    features: [
      "Data preprocessing",
      "XGBoost classification",
      "Model evaluation",
      "Prediction interface"
    ],
    tech: ["Python", "XGBoost", "Pandas", "Scikit-learn"],
    note: "Educational prediction project — NOT a clinically validated diagnostic system. Not intended for real medical use."
  },
  {
    id: "facemask",
    title: "Face Mask Detection Using CNN & Transfer Learning",
    short: "A deep learning image classification project identifying whether a person is wearing a mask correctly, incorrectly, or not at all.",
    category: "dl",
    catLabel: "Deep Learning / Computer Vision",
    tags: ["Python", "TensorFlow", "CNN", "MobileNetV2"],
    icon: "fa-solid fa-head-side-mask",
    image: "",
    status: "completed",
    github: GITHUB_PROFILE,
    demo: "",
    overview: "A deep learning image classification project designed to identify whether a person is wearing a mask correctly, incorrectly or not wearing a mask, using CNN and transfer learning with MobileNetV2.",
    problem: "Automated mask compliance detection supports public health monitoring in crowded environments.",
    methodology: [
      "Dataset with three classes: With Mask, Without Mask, Incorrect Mask.",
      "Built a custom CNN baseline model.",
      "Applied Transfer Learning with MobileNetV2 for improved accuracy.",
      "Image preprocessing and augmentation.",
      "Model evaluation on test images."
    ],
    features: [
      "Three-class classification (With/Without/Incorrect Mask)",
      "Custom CNN model",
      "MobileNetV2 transfer learning",
      "Image processing & augmentation",
      "Evaluation results"
    ],
    tech: ["Python", "TensorFlow/Keras", "CNN", "MobileNetV2", "Transfer Learning", "Image Processing"],
    metricsNote: "Replace with actual evaluation results, dataset examples and architecture details from the project files."
  },
  {
    id: "allergen",
    title: "AI Allergen Alert System",
    short: "An AI-powered application to analyze food ingredients and identify potential allergens using language model-based explanations.",
    category: "ai",
    catLabel: "Generative AI / Full-Stack AI Application",
    tags: ["Python", "FastAPI", "GenAI", "Streamlit"],
    icon: "fa-solid fa-utensils",
    image: "",
    status: "upcoming",
    github: "",
    demo: "",
    overview: "An AI-powered application designed to analyze food ingredients and identify potential allergens using product information and language model-based explanations.",
    problem: "Consumers with food allergies need a quick, reliable way to check product ingredients and receive clear allergen alerts and explanations.",
    methodology: [
      "Food product search via Open Food Facts API.",
      "Ingredient retrieval and allergen detection against user preferences.",
      "AI-generated ingredient explanations via Google AI Studio API.",
      "Search history and database integration."
    ],
    features: [
      "Food product search",
      "Ingredient retrieval & allergen detection",
      "User-defined allergen preferences",
      "AI-generated ingredient explanations",
      "Search history",
      "Database integration"
    ],
    tech: ["Python", "FastAPI", "Google AI Studio API", "Open Food Facts API", "Streamlit", "SQL", "Docker"],
    note: "Planned project — currently under development. Features listed are planned and subject to change."
  },
  {
    id: "bi-dashboard",
    title: "Business Intelligence Dashboard",
    short: "An interactive business analytics dashboard to transform raw business data into meaningful, decision-supporting insights.",
    category: "data",
    catLabel: "Data Analytics / Business Intelligence",
    tags: ["Python", "Pandas", "SQL", "Power BI"],
    icon: "fa-solid fa-chart-pie",
    image: "",
    status: "upcoming",
    github: "",
    demo: "",
    overview: "An interactive business analytics dashboard designed to transform raw business data into meaningful insights and support data-driven decisions.",
    problem: "Raw business data is hard to act on without aggregation; an interactive dashboard surfaces KPIs, trends and performance clearly.",
    methodology: [
      "Data cleaning and SQL-based analysis.",
      "KPI monitoring and revenue analysis.",
      "Product performance and sales trend visualization.",
      "Interactive Power BI dashboards."
    ],
    features: [
      "Data cleaning & SQL-based analysis",
      "KPI monitoring",
      "Revenue & product performance analysis",
      "Sales trends",
      "Interactive visualizations"
    ],
    tech: ["Python", "Pandas", "SQL", "Excel", "Power BI"],
    note: "Planned project — currently under development. Features listed are planned and subject to change."
  }
];

/* ---------- Render project cards ---------- */
function renderProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(p => {
    const isUpcoming = p.status === "upcoming";
    const badgeClass = isUpcoming ? "project-badge upcoming" : "project-badge";
    const badgeText = isUpcoming ? "Upcoming" : "Completed";

    const thumb = p.hasImage && p.image
      ? `<img src="${p.image}" alt="${p.title} architecture diagram" />`
      : `<div class="thumb-fallback"><i class="${p.icon}"></i><span>${p.catLabel}</span></div>`;

    const ghBtn = p.github
      ? `<a href="${p.github}" target="_blank" rel="noopener" class="btn-sm-outline"><i class="fa-brands fa-github"></i> Code</a>`
      : `<span class="btn-sm-outline disabled" title="Repository to be added"><i class="fa-brands fa-github"></i> Code</span>`;

    const demoBtn = p.demo
      ? `<a href="${p.demo}" target="_blank" rel="noopener" class="btn-sm-outline"><i class="fa-solid fa-up-right-from-square"></i> Demo</a>`
      : "";

    return `
      <div class="col-lg-4 col-md-6 project-item" data-category="${p.category}" data-reveal>
        <article class="project-card">
          <div class="project-thumb">
            ${thumb}
            <span class="${badgeClass}">${badgeText}</span>
          </div>
          <div class="project-body">
            <p class="project-cat">${p.catLabel}</p>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-desc">${p.short}</p>
            <div class="project-tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
            <div class="project-actions">
              <button class="btn-sm-grad" data-project="${p.id}"><i class="fa-solid fa-circle-info"></i> View Details</button>
              ${ghBtn}
              ${demoBtn}
            </div>
          </div>
        </article>
      </div>`;
  }).join("");

  // attach detail listeners
  grid.querySelectorAll("[data-project]").forEach(btn => {
    btn.addEventListener("click", () => openProjectModal(btn.dataset.project));
  });
}

/* ---------- Modal ---------- */
function openProjectModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  const modal = document.getElementById("projectModal");
  const content = document.getElementById("modalContent");
  const isUpcoming = p.status === "upcoming";

  let html = `
    <p class="mc-cat">${p.catLabel}</p>
    <h2>${p.title}</h2>
    ${isUpcoming ? `<span class="mc-status"><i class="fa-solid fa-clock"></i> Upcoming / Planned Project</span>` : ""}
  `;

  if (p.hasImage && p.image) {
    html += `<img class="mc-img" src="${p.image}" alt="${p.title} architecture diagram" />`;
  }

  html += `<h3>Overview</h3><p>${p.overview}</p>`;

  if (p.problem) {
    html += `<h3>Problem Statement</h3><p>${p.problem}</p>`;
  }

  if (p.methodology && p.methodology.length) {
    html += `<h3>Methodology</h3><ul>${p.methodology.map(m => `<li>${m}</li>`).join("")}</ul>`;
  }

  if (p.features && p.features.length) {
    html += `<h3>Key Features</h3><ul>${p.features.map(f => `<li>${f}</li>`).join("")}</ul>`;
  }

  if (p.architecture) {
    html += `<h3>Model Architecture</h3><div class="mc-arch"><code>${p.architecture}</code></div>`;
  }

  if (p.tech && p.tech.length) {
    html += `<h3>Technology Stack</h3><div class="mc-tags">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>`;
  }

  if (p.metricsNote) {
    html += `<div class="mc-note"><i class="fa-solid fa-circle-info"></i> ${p.metricsNote}</div>`;
  }

  if (p.note) {
    html += `<div class="mc-note"><i class="fa-solid fa-triangle-exclamation"></i> ${p.note}</div>`;
  }

  // actions
  html += `<div class="mc-actions">`;
  if (p.github) {
    html += `<a href="${p.github}" target="_blank" rel="noopener" class="btn-primary-grad"><i class="fa-brands fa-github"></i> View on GitHub</a>`;
  } else {
    html += `<span class="btn-outline-grad" style="opacity:0.5;cursor:not-allowed">Repository to be added</span>`;
  }
  if (p.demo) {
    html += `<a href="${p.demo}" target="_blank" rel="noopener" class="btn-outline-grad"><i class="fa-solid fa-up-right-from-square"></i> Live Demo</a>`;
  }
  html += `</div>`;

  content.innerHTML = html;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  const modal = document.getElementById("projectModal");
  document.getElementById("modalClose").addEventListener("click", closeProjectModal);
  modal.addEventListener("click", e => { if (e.target === modal) closeProjectModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeProjectModal(); });
});