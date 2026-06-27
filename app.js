// ============================================================
// MEAL PLAN — app.js
// Dépendances : data.js (global `recipes`), index.html (IDs DOM),
//               styles.css (classes CSS injectées dynamiquement)
// ============================================================


// ============================================================
// 0. CONFIGURATION
// ============================================================

const SEASONS = [
  { id: 'été',        label: 'Été',       icon: '☀️',  months: [6, 7, 8]  },
  { id: 'automne',    label: 'Automne',   icon: '🍂',  months: [9, 10, 11] },
  { id: 'hiver',      label: 'Hiver',     icon: '❄️',  months: [12, 1, 2] },
  { id: 'printemps',  label: 'Printemps', icon: '🌿',  months: [3, 4, 5]  }
];

// CSS class ↔ season id
// Utilisé pour les accents couleur (--accent, --accent-bg)
const SEASON_CLASS = {
  'été':        's-ete',
  'automne':    's-automne',
  'hiver':      's-hiver',
  'printemps':  's-printemps'
};

// Libellés d'unités en français
const UNIT_LABELS = {
  'g':     'g',
  'kg':    'kg',
  'ml':    'ml',
  'l':     'L',
  'tsp':   'c. à café',
  'tbsp':  'c. à soupe',
  'cup':   'tasse',
  'fl_oz': 'fl oz',
  'oz':    'oz',
  'lb':    'lb',
  'pinch': 'pincée'
};


// ============================================================
// 1. ÉTAT GLOBAL
// ============================================================

let activeSeason   = detectCurrentSeason();
let activeRecipe   = null;
let currentServings = 2;
let timerState     = {};  // { stepId: { intervalId, remaining, total, running } }


// ============================================================
// 2. DÉTECTION DE LA SAISON COURANTE
// ============================================================

function detectCurrentSeason() {
  const month = new Date().getMonth() + 1; // 1–12
  for (const s of SEASONS) {
    if (s.months.includes(month)) return s.id;
  }
  return 'été';
}


// ============================================================
// 3. RENDU : ONGLETS SAISONNIERS
// IDs HTML requis : #season-nav
// Classes CSS injectées : .season-btn, .season-btn.active, .s-{saison}
// ============================================================

function renderSeasonTabs() {
  const nav = document.getElementById('season-nav');
  nav.innerHTML = '';

  // Accent couleur global sur le body
  Object.values(SEASON_CLASS).forEach(c => document.body.classList.remove(c));
  document.body.classList.add(SEASON_CLASS[activeSeason]);

  SEASONS.forEach(season => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `season-btn ${SEASON_CLASS[season.id]}`;
    if (season.id === activeSeason) btn.classList.add('active');
    btn.setAttribute('aria-pressed', season.id === activeSeason ? 'true' : 'false');
    btn.innerHTML = `<span class="season-icon" aria-hidden="true">${season.icon}</span>${season.label}`;

    btn.addEventListener('click', () => {
      activeSeason = season.id;
      renderSeasonTabs();
      renderRecipeCards();
    });

    nav.appendChild(btn);
  });
}


// ============================================================
// 4. RENDU : GRILLE DE CARTES
// IDs HTML requis : #recipe-grid
// Classes CSS injectées : .recipe-card, .card-body, .card-footer,
//   .card-title, .card-description, .badge, .badge-type-carne,
//   .badge-type-vege, .badge-cuisine, .badge-time, .empty-state
// ============================================================

function renderRecipeCards() {
  const grid = document.getElementById('recipe-grid');
  const seasonRecipes = recipes.filter(r => r.season === activeSeason);

  if (seasonRecipes.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <span class="empty-state-icon">🍳</span>
        <p>Les recettes de cette saison arrivent bientôt !</p>
      </div>`;
    return;
  }

  grid.innerHTML = '';
  seasonRecipes.forEach(recipe => grid.appendChild(createRecipeCard(recipe)));
}

function createRecipeCard(recipe) {
  const card = document.createElement('div');
  card.className = `recipe-card ${SEASON_CLASS[recipe.season]}`;
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `Ouvrir la recette : ${recipe.title}`);

  const isVege = recipe.type === 'végétarien';

  card.innerHTML = `
    <div class="card-body">
      <h2 class="card-title">${recipe.title}</h2>
      <p class="card-description">${recipe.description}</p>
    </div>
    <div class="card-footer">
      <span class="badge ${isVege ? 'badge-type-vege' : 'badge-type-carne'}">
        ${isVege ? '🌱' : '🥩'} ${recipe.type}
      </span>
      <span class="badge badge-cuisine">${recipe.cuisine}</span>
      <span class="badge badge-time">⏱ ${recipe.prepTime} min</span>
    </div>`;

  const open = () => openRecipeModal(recipe);
  card.addEventListener('click', open);
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
  });

  return card;
}


// ============================================================
// 5. MODAL : OUVERTURE
// IDs HTML requis : #modal-overlay, #modal-content
// Classes CSS injectées : .open (sur #modal-overlay)
// ============================================================

function openRecipeModal(recipe) {
  activeRecipe    = recipe;
  currentServings = recipe.baseServings;
  clearAllTimers();

  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');

  content.innerHTML = buildModalContent(recipe, currentServings);
  overlay.setAttribute('aria-hidden', 'false');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Liaison des contrôles après injection du HTML
  bindServingControls();
  bindTimerButtons();
}


// ============================================================
// 6. MODAL : FERMETURE
// ============================================================

function closeModal() {
  clearAllTimers();
  activeRecipe = null;

  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  // Vider le contenu après la transition CSS (350ms)
  setTimeout(() => {
    if (!overlay.classList.contains('open')) {
      document.getElementById('modal-content').innerHTML = '';
    }
  }, 350);
}


// ============================================================
// 7. MODAL : CONSTRUCTION DU HTML
// Classes CSS injectées : .modal-recipe-title, .modal-description,
//   .modal-badges, .serving-section, .serving-btn, .serving-count,
//   .serving-controls, .ingredients-section, .steps-section,
//   .section-label, .steps-list, .notes-section, .notes-text
// ============================================================

function buildModalContent(recipe, servings) {
  const isVege     = recipe.type === 'végétarien';
  const seasonData = SEASONS.find(s => s.id === recipe.season);

  return `
    <h2 class="modal-recipe-title" id="modal-title">${recipe.title}</h2>
    <p class="modal-description">${recipe.description}</p>

    <div class="modal-badges">
      <span class="badge ${isVege ? 'badge-type-vege' : 'badge-type-carne'}">
        ${isVege ? '🌱' : '🥩'} ${recipe.type}
      </span>
      <span class="badge badge-cuisine">${recipe.cuisine}</span>
      <span class="badge badge-time">⏱ ${recipe.prepTime} min</span>
      <span class="badge badge-cuisine">${seasonData?.icon || ''} ${recipe.season}</span>
    </div>

    <div class="serving-section">
      <span class="serving-label">Portions</span>
      <div class="serving-controls">
        <button type="button" class="serving-btn" id="serving-dec"
          aria-label="Réduire les portions"
          ${servings <= 1 ? 'disabled' : ''}>−</button>
        <span class="serving-count" id="serving-count">${servings}</span>
        <button type="button" class="serving-btn" id="serving-inc"
          aria-label="Augmenter les portions"
          ${servings >= 8 ? 'disabled' : ''}>+</button>
      </div>
    </div>

    <div class="ingredients-section" id="ingredients-section">
      ${buildIngredients(recipe, servings)}
    </div>

    <div class="steps-section">
      <p class="section-label">Préparation</p>
      <ol class="steps-list">
        ${recipe.steps.map((step, i) => buildStep(step, i + 1)).join('')}
      </ol>
    </div>

    ${recipe.notes ? `
    <div class="notes-section">
      <p class="section-label">💡 Astuce du chef</p>
      <p class="notes-text">${recipe.notes}</p>
    </div>` : ''}
  `;
}


// ============================================================
// 8. INGRÉDIENTS (re-rendu à chaque changement de portions)
// IDs HTML injectés : #ingredients-section, #ingredients-list
// Classes CSS : .section-label, .ingredients-list,
//   .ingredient-item, .ingredient-name, .ingredient-amount
// ============================================================

function buildIngredients(recipe, servings) {
  const ratio = servings / recipe.baseServings;

  const rows = recipe.ingredients.map(ing => {
    const scaled    = ing.amount * ratio;
    const formatted = formatAmount(scaled);
    const unit      = ing.unit ? ' ' + (UNIT_LABELS[ing.unit] || ing.unit) : '';
    return `
      <li class="ingredient-item">
        <span class="ingredient-name">${ing.name}</span>
        <span class="ingredient-amount">${formatted}${unit}</span>
      </li>`;
  }).join('');

  const label = servings > 1 ? 'personnes' : 'personne';

  return `
    <p class="section-label">
      Ingrédients · ${servings} ${label}
    </p>
    <ul class="ingredients-list" id="ingredients-list">${rows}</ul>`;
}


// ============================================================
// 9. ÉTAPE (HTML d'une seule étape)
// IDs HTML injectés : #step-{stepId}
// Classes CSS : .step-item, .step-number, .step-content,
//   .step-title, .step-text, .timer-row, .timer-btn
// ============================================================

function buildStep(step, index) {
  const hasTimer = step.timerSeconds && step.timerSeconds > 0;

  const timerHTML = hasTimer ? `
    <div class="timer-row">
      <button type="button" class="timer-btn"
        data-step="${step.id}"
        data-total="${step.timerSeconds}"
        aria-label="Démarrer le minuteur : ${formatTime(step.timerSeconds)}">
        ▶ ${formatTime(step.timerSeconds)}
      </button>
    </div>` : '';

  return `
    <li class="step-item" id="step-${step.id}">
      <span class="step-number" aria-hidden="true">${index}</span>
      <div class="step-content">
        <p class="step-title">${step.title}</p>
        <p class="step-text">${step.content}</p>
        ${timerHTML}
      </div>
    </li>`;
}


// ============================================================
// 10. CURSEUR DE PORTIONS
// IDs HTML requis : #serving-dec, #serving-inc,
//                   #serving-count, #ingredients-section
// ============================================================

function bindServingControls() {
  document.getElementById('serving-dec')
    .addEventListener('click', () => updateServings(currentServings - 1));
  document.getElementById('serving-inc')
    .addEventListener('click', () => updateServings(currentServings + 1));
}

function updateServings(newValue) {
  if (!activeRecipe || newValue < 1 || newValue > 8) return;
  currentServings = newValue;

  document.getElementById('serving-count').textContent = currentServings;
  document.getElementById('serving-dec').disabled = currentServings <= 1;
  document.getElementById('serving-inc').disabled = currentServings >= 8;

  // Re-rendu des ingrédients uniquement (les étapes/timers ne bougent pas)
  document.getElementById('ingredients-section').innerHTML =
    buildIngredients(activeRecipe, currentServings);
}


// ============================================================
// 11. TIMERS — LIAISON DES BOUTONS
// ============================================================

function bindTimerButtons() {
  document.querySelectorAll('.timer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      handleTimerClick(btn.dataset.step, parseInt(btn.dataset.total, 10));
    });
  });
}

function handleTimerClick(stepId, total) {
  const state = timerState[stepId];

  if (!state) {
    startTimer(stepId, total);
  } else if (state.running) {
    pauseTimer(stepId);
  } else if (state.remaining === 0) {
    // Redémarrer
    delete timerState[stepId];
    startTimer(stepId, total);
  } else {
    resumeTimer(stepId);
  }
}


// ============================================================
// 12. TIMERS — START / PAUSE / RESUME / TICK / DONE
// Classes CSS injectées sur .timer-btn : .running, .paused, .done
// ============================================================

function startTimer(stepId, total) {
  timerState[stepId] = {
    total,
    remaining: total,
    accumulated: 0,      // secondes déjà écoulées avant la reprise courante
    resumedAt: Date.now(),
    running: true,
    intervalId: null
  };
  // Tick toutes les 500ms pour une précision à la seconde sans dérive
  timerState[stepId].intervalId = setInterval(() => tickTimer(stepId), 500);
  updateTimerButton(stepId);
}

function tickTimer(stepId) {
  const state = timerState[stepId];
  if (!state || !state.running) return;
  // Calcul basé sur les timestamps : immunisé contre le drift de setInterval
  const elapsed = state.accumulated + Math.floor((Date.now() - state.resumedAt) / 1000);
  state.remaining = Math.max(0, state.total - elapsed);
  updateTimerButton(stepId);
  if (state.remaining === 0) {
    clearInterval(state.intervalId);
    state.running = false;
    onTimerDone(stepId);
  }
}

function pauseTimer(stepId) {
  const state = timerState[stepId];
  if (!state) return;
  clearInterval(state.intervalId);
  // Figer les secondes écoulées au moment de la pause
  state.accumulated += Math.floor((Date.now() - state.resumedAt) / 1000);
  state.running = false;
  updateTimerButton(stepId);
}

function resumeTimer(stepId) {
  const state = timerState[stepId];
  if (!state) return;
  state.resumedAt = Date.now();  // nouveau point de départ
  state.running   = true;
  state.intervalId = setInterval(() => tickTimer(stepId), 500);
  updateTimerButton(stepId);
}

function updateTimerButton(stepId) {
  const btn   = document.querySelector(`.timer-btn[data-step="${stepId}"]`);
  const state = timerState[stepId];
  if (!btn || !state) return;

  btn.className = 'timer-btn'; // reset
  if (state.remaining === 0) {
    btn.classList.add('done');
    btn.textContent = '✓ Terminé';
    btn.setAttribute('aria-label', 'Minuteur terminé — cliquer pour recommencer');
  } else if (state.running) {
    btn.classList.add('running');
    btn.textContent = `⏸ ${formatTime(state.remaining)}`;
    btn.setAttribute('aria-label', `Pause — ${formatTime(state.remaining)} restantes`);
  } else {
    btn.classList.add('paused');
    btn.textContent = `▶ ${formatTime(state.remaining)}`;
    btn.setAttribute('aria-label', `Reprendre — ${formatTime(state.remaining)} restantes`);
  }
}

function onTimerDone(stepId) {
  // Flash visuel sur l'étape
  const stepEl = document.getElementById(`step-${stepId}`);
  if (stepEl) {
    stepEl.classList.add('step-done');
    setTimeout(() => stepEl.classList.remove('step-done'), 2000);
  }
  // Bip sonore via Web Audio API (sans dépendance externe)
  playBeep();
}

function clearAllTimers() {
  Object.values(timerState).forEach(s => {
    if (s.intervalId) clearInterval(s.intervalId);
  });
  timerState = {};
}


// ============================================================
// 13. AUDIO — BIP DE FIN DE MINUTEUR
// ============================================================

function playBeep() {
  try {
    const ctx  = new (window.AudioContext || window.webkitAudioContext)();
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type           = 'sine';
    osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.8);
    setTimeout(() => ctx.close(), 1200);
  } catch (e) {
    // Pas de son si l'API n'est pas disponible — comportement silencieux
  }
}


// ============================================================
// 14. UTILITAIRES
// ============================================================

/**
 * Formate un nombre de secondes en MM:SS
 * Ex : 305 → "05:05"
 */
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

/**
 * Formate une quantité avec arrondi intelligent et fractions lisibles.
 * Ex : 0.5 → "½", 1.5 → "1 ½", 250.0 → "250", 18.75 → "19"
 */
function formatAmount(value) {
  if (!isFinite(value) || value <= 0) return '0';

  // Grandes quantités : arrondi à l'entier
  if (value >= 100) return Math.round(value).toString();

  // Quantités moyennes (≥ 10) : arrondi au demi
  if (value >= 10) {
    const r = Math.round(value * 2) / 2;
    return r % 1 === 0 ? r.toString() : r.toFixed(1);
  }

  // Quantités ≥ 2 : arrondi au demi avec ½ lisible
  if (value >= 2) {
    const r     = Math.round(value * 2) / 2;
    const whole = Math.floor(r);
    const half  = r - whole;
    if (half === 0) return whole.toString();
    return whole > 0 ? `${whole} ½` : '½';
  }

  // Petites quantités (< 2) : arrondi au quart avec fractions unicode
  const r       = Math.round(value * 4) / 4;
  const whole   = Math.floor(r);
  const fracIdx = Math.round((r - whole) * 4); // 0, 1, 2, 3
  const fracs   = ['', '¼', '½', '¾'];
  const frac    = fracs[fracIdx] || '';

  if (whole === 0) return frac || '¼';
  if (fracIdx === 0) return whole.toString();
  return `${whole} ${frac}`;
}


// ============================================================
// 15. INITIALISATION
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  renderSeasonTabs();
  renderRecipeCards();

  // Fermer en cliquant sur le fond de l'overlay
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Fermer via le bouton ✕
  document.getElementById('modal-close').addEventListener('click', closeModal);

  // Fermer via la touche Échap
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});
