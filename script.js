const STORAGE_KEY = "duari-memory-book-v1";
const app = document.querySelector("#app");
const templates = window.DUARI_TEMPLATE_CATALOG || [];

const localISO = (date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
const todayISO = () => localISO();
const uid = () => crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
const fmt = (date, options = {}) => new Intl.DateTimeFormat("en", options).format(new Date(`${date}T12:00:00`));
const dayMs = 24 * 60 * 60 * 1000;

const sampleState = () => {
  const today = todayISO();
  const year = new Date().getFullYear();
  return {
    ready: true,
    unlocked: true,
    activeUserId: null,
    activeTab: "memories",
    memoryView: "calendar",
    selectedDate: today,
    visibleMonth: today.slice(0, 7),
    themeId: "spring-widget",
    couple: {
      a: { id: "mina", nickname: "Mina", birthday: `${year - 27}-05-19` },
      b: { id: "jay", nickname: "Jay", birthday: `${year - 28}-10-07` },
      startDate: `${year - 1}-08-17`,
      pin: "0519"
    },
    memories: [
      {
        id: uid(),
        date: today,
        title: "A Little Date",
        type: "Date",
        feeling: "Happy",
        place: "Seoul Cafe",
        note: "We had quiet coffee, shared a tiny cake, and wrote down our next weekend plan.",
        authorUserId: "mina",
        photos: [],
        together: { workout: true, reading: false, walk: true },
        plan: { goal: "Take a slow walk", plan: "Meet after work and pick one dessert together." },
        createdAt: Date.now()
      },
      {
        id: uid(),
        date: today,
        title: "Bookstore Notes",
        type: "Daily Review",
        feeling: "Calm",
        place: "Small Bookshop",
        note: "Jay found a poetry book. Mina kept the receipt as a tiny bookmark.",
        authorUserId: "jay",
        photos: [],
        together: { workout: false, reading: true, walk: false },
        plan: { goal: "Read ten pages", plan: "Pick a sentence to remember." },
        createdAt: Date.now() - 500
      },
      {
        id: uid(),
        date: `${year}-05-30`,
        title: "Picnic Blanket",
        type: "Trip",
        feeling: "Loved",
        place: "Han River",
        note: "A soft picnic day with cloudy weather and too many strawberries.",
        authorUserId: "mina",
        photos: [],
        together: { workout: false, reading: false, walk: true },
        plan: { goal: "", plan: "" },
        createdAt: Date.now() - 1000
      }
    ],
    anniversaries: [
      { id: uid(), title: "100 Days Together", date: `${year}-02-14`, repeatYearly: false, memo: "Our first tiny milestone.", createdAt: Date.now() },
      { id: uid(), title: "1st Anniversary", date: `${year}-08-17`, repeatYearly: true, memo: "The day our book started.", createdAt: Date.now() }
    ],
    matchReport: null
  };
};

let state = loadState();

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return { ready: false, route: "welcome" };
  try {
    return { ...sampleState(), ...JSON.parse(saved) };
  } catch {
    return { ready: false, route: "welcome" };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setState(patch) {
  state = { ...state, ...patch };
  saveState();
  render();
}

function currentUser() {
  if (!state.couple) return null;
  return [state.couple.a, state.couple.b].find((person) => person.id === state.activeUserId) || state.couple.a;
}

function partnerUser() {
  if (!state.couple) return null;
  return currentUser()?.id === state.couple.a.id ? state.couple.b : state.couple.a;
}

function daysTogether() {
  const start = new Date(`${state.couple.startDate}T12:00:00`);
  const now = new Date(`${todayISO()}T12:00:00`);
  return Math.max(1, Math.floor((now - start) / dayMs) + 1);
}

function icon(name) {
  const icons = {
    memories: "◷",
    templates: "✿",
    match: "♡",
    settings: "☰",
    back: "‹",
    next: "›",
    add: "+",
    close: "×"
  };
  return icons[name] || name;
}

function render() {
  applyTheme();
  if (!state.ready) return renderWelcome();
  if (!state.unlocked) return renderPin();
  if (!state.activeUserId) return renderWho();

  const routes = {
    form: renderMemoryForm,
    anniversaryForm: renderAnniversaryForm,
    detail: renderMemoryDetail,
    settingsPage: renderSettingsPage
  };

  if (state.route && routes[state.route]) return routes[state.route]();
  return renderMain();
}

function applyTheme() {
  const theme = templates.find((item) => item.id === state.themeId) || templates[0];
  app.className = `app-shell theme-${theme.id}`;
  const map = {
    background: "--color-background",
    backgroundAlt: "--color-background-alt",
    surface: "--color-surface",
    surfaceSoft: "--color-surface-soft",
    primary: "--color-primary",
    primarySoft: "--color-primary-soft",
    accentLove: "--color-accent-love",
    accentDay: "--color-accent-day",
    accentCalm: "--color-accent-calm",
    text: "--color-text",
    mutedText: "--color-text-muted",
    border: "--color-border"
  };
  Object.entries(map).forEach(([key, cssVar]) => {
    if (theme.themeTokens?.[key]) app.style.setProperty(cssVar, theme.themeTokens[key]);
  });
}

function renderWelcome() {
  app.innerHTML = `
    <main class="app-screen center-screen">
      <section class="welcome-mark">
        <h1 class="brand-word">DUARI</h1>
        <p class="brand-subtitle">Our Memory Book</p>
      </section>
      <section class="widget-card welcome-panel">
        <div class="welcome-visual" aria-hidden="true">
          <div class="mini-phone">
            <div class="mini-phone__bar"></div>
            <div class="mini-calendar">${Array.from({ length: 9 }, () => "<span></span>").join("")}</div>
          </div>
        </div>
        <div class="stack">
          <h2 class="screen-title">Open a private little place for the two of you</h2>
          <p class="body-copy">Save your memories, anniversaries, photos, feelings, and diary themes together.</p>
          <div class="button-row">
            <button class="button-primary" data-action="setup">Create Account</button>
            <button class="button-secondary" data-action="login">Log In</button>
            <button class="button-secondary is-disabled" disabled>Continue with Google</button>
            <button class="button-secondary is-disabled" disabled>Continue with Apple</button>
            <button class="button-ghost" data-action="test">Use Test Account</button>
          </div>
        </div>
      </section>
      <nav class="legal-links"><span>Terms of Service</span><span>Privacy Policy</span></nav>
    </main>
  `;
  app.querySelector("[data-action='test']").addEventListener("click", () => {
    state = sampleState();
    state.activeUserId = null;
    saveState();
    render();
  });
  app.querySelector("[data-action='setup']").addEventListener("click", renderSetup);
  app.querySelector("[data-action='login']").addEventListener("click", renderSetup);
}

function renderSetup() {
  app.innerHTML = `
    <main class="app-screen">
      <header class="screen-header">
        <button class="icon-button" data-action="back">${icon("back")}</button>
        <div class="header-stack"><p class="eyebrow">DUARI</p><h1 class="screen-title">Create Our Book</h1></div>
        <span></span>
      </header>
      <form class="widget-card form-panel form-grid" id="setupForm">
        <p class="body-copy">Set up a private memory book for the two of you.</p>
        ${field("Your nickname", "aName", "Mina")}
        ${field("Partner nickname", "bName", "Jay")}
        ${field("Your birthday", "aBirthday", "", "date")}
        ${field("Partner birthday", "bBirthday", "", "date")}
        ${field("The day you started", "startDate", todayISO(), "date")}
        ${field("Shared 4-digit PIN", "pin", "", "password", "inputmode='numeric' maxlength='4'")}
        ${field("Confirm PIN", "confirmPin", "", "password", "inputmode='numeric' maxlength='4'")}
        <p class="error-text" id="setupError"></p>
        <button class="button-primary">Create Our Book</button>
      </form>
    </main>
  `;
  app.querySelector("[data-action='back']").addEventListener("click", renderWelcome);
  app.querySelector("#setupForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const values = Object.fromEntries(form);
    const error = validateSetup(values);
    if (error) {
      app.querySelector("#setupError").textContent = error;
      return;
    }
    state = {
      ...sampleState(),
      activeUserId: null,
      memories: [],
      anniversaries: [
        { id: uid(), title: "1st Anniversary", date: values.startDate, repeatYearly: true, memo: "The day our book started.", createdAt: Date.now() }
      ],
      couple: {
        a: { id: "user-a", nickname: values.aName.trim(), birthday: values.aBirthday },
        b: { id: "user-b", nickname: values.bName.trim(), birthday: values.bBirthday },
        startDate: values.startDate,
        pin: values.pin
      }
    };
    saveState();
    render();
  });
}

function field(label, name, value = "", type = "text", attrs = "") {
  return `
    <label class="field">
      <span>${label}</span>
      <input class="paper-input" name="${name}" type="${type}" value="${value}" ${attrs} />
    </label>
  `;
}

function validateSetup(values) {
  if (!values.aName.trim() || !values.bName.trim()) return "Nickname can't be empty.";
  if (values.aName.trim() === values.bName.trim()) return "Nicknames must be different.";
  if (!values.aBirthday || !values.bBirthday) return "Please enter a valid birthday.";
  if (!values.startDate) return "Please enter a valid start date.";
  if (!/^\d{4}$/.test(values.pin)) return "PIN must be 4 digits.";
  if (values.pin !== values.confirmPin) return "PINs don't match.";
  return "";
}

function renderPin() {
  app.innerHTML = `
    <main class="app-screen center-screen">
      <section class="welcome-mark">
        <h1 class="screen-title">Our Memory Book</h1>
        <p class="body-copy">Enter your PIN</p>
      </section>
      <form class="widget-card form-panel form-grid" id="pinForm">
        <div class="pin-dots">
          ${[0,1,2,3].map((n) => `<input class="paper-input" name="pin${n}" inputmode="numeric" maxlength="1" autocomplete="off" />`).join("")}
        </div>
        <p class="error-text" id="pinError"></p>
        <button class="button-primary">Open</button>
        <button class="button-ghost" type="button" data-action="logout">Log Out</button>
      </form>
    </main>
  `;
  const inputs = [...app.querySelectorAll(".pin-dots input")];
  inputs[0].focus();
  inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, "").slice(0, 1);
      if (input.value && inputs[index + 1]) inputs[index + 1].focus();
    });
  });
  app.querySelector("#pinForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const pin = inputs.map((input) => input.value).join("");
    if (pin !== state.couple.pin) {
      app.querySelector("#pinError").textContent = "That PIN doesn't match.";
      return;
    }
    setState({ unlocked: true, activeUserId: null });
  });
  app.querySelector("[data-action='logout']").addEventListener("click", () => setState({ ready: false, unlocked: false, activeUserId: null, route: "welcome" }));
}

function renderWho() {
  app.innerHTML = `
    <main class="app-screen center-screen">
      <section class="welcome-mark">
        <h1 class="screen-title">Who is here today?</h1>
        <p class="body-copy">Pick who is writing today's memory.</p>
      </section>
      <div class="person-grid">
        ${[state.couple.a, state.couple.b].map((person, index) => `
          <button class="person-card" data-user="${person.id}">
            <span class="avatar" data-tone="${index ? "love" : "sage"}">${person.nickname.slice(0, 1)}</span>
            <strong>${person.nickname}</strong>
          </button>
        `).join("")}
      </div>
    </main>
  `;
  app.querySelectorAll("[data-user]").forEach((button) => {
    button.addEventListener("click", () => setState({ activeUserId: button.dataset.user, route: null }));
  });
}

function renderMain() {
  app.innerHTML = `
    <main class="app-screen">
      ${summaryHtml()}
      ${tabContent()}
    </main>
    ${bottomNavHtml()}
  `;
  bindHeader();
  bindMainTabs();
  bindBottomNav();
  if (state.activeTab === "memories") bindMemories();
  if (state.activeTab === "templates") bindTemplates();
  if (state.activeTab === "match") bindMatch();
  if (state.activeTab === "settings") bindSettings();
}

function headerHtml() {
  return `
    <header class="screen-header">
      <div class="header-stack">
        <p class="eyebrow">Welcome back, ${currentUser().nickname}</p>
        <h1 class="screen-title">Our Memory Book</h1>
      </div>
      <button class="icon-button" data-action="switch-user" aria-label="Switch user">${currentUser().nickname.slice(0, 1)}</button>
    </header>
  `;
}

function bindHeader() {
  app.querySelector("[data-action='switch-user']")?.addEventListener("click", () => setState({ activeUserId: null }));
}

function summaryHtml() {
  return `
    <section class="widget-card summary-widget">
      <div>
        <div class="summary-topline">
          <p class="eyebrow">${state.couple.a.nickname} ♥ ${state.couple.b.nickname}</p>
          <button class="icon-button switch-user-button" data-tone="${currentUser().id === state.couple.b.id ? "love" : "sage"}" data-action="switch-user" aria-label="Switch user">${currentUser().nickname.slice(0, 1)}</button>
        </div>
        <h2 class="duari-display">${daysTogether()} days together</h2>
      </div>
    </section>
  `;
}

function tabContent() {
  if (state.activeTab === "memories") return memoriesHtml();
  if (state.activeTab === "templates") return templatesHtml();
  if (state.activeTab === "match") return matchHtml();
  return settingsHtml();
}

function memoriesHtml() {
  return `
    <section class="tab-strip">
      <button class="chip-button ${state.memoryView === "calendar" ? "is-active" : ""}" data-memory-view="calendar">Calendar</button>
      <button class="chip-button ${state.memoryView === "collection" ? "is-active" : ""}" data-memory-view="collection">Collection</button>
    </section>
    ${state.memoryView === "calendar" ? calendarHtml() : collectionHtml()}
  `;
}

function calendarHtml() {
  const [year, month] = state.visibleMonth.split("-").map(Number);
  const first = new Date(year, month - 1, 1);
  const start = new Date(first);
  start.setDate(1 - first.getDay());
  const days = Array.from({ length: 42 }, (_, index) => {
    const d = new Date(start);
    d.setDate(start.getDate() + index);
    const iso = localISO(d);
    return { iso, day: d.getDate(), muted: d.getMonth() !== month - 1 };
  });
  const selectedMemories = memoriesForDate(state.selectedDate);
  const selectedAnniversaries = anniversariesForDate(state.selectedDate);

  return `
    <section class="section">
      <div class="month-nav">
        <button class="icon-button" data-month="-1">${icon("back")}</button>
        <h2 class="month-title">${fmt(`${state.visibleMonth}-01`, { month: "long", year: "numeric" })}</h2>
        <button class="icon-button" data-month="1">${icon("next")}</button>
      </div>
      <div class="calendar-grid">
        ${["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => `<div class="weekday">${day}</div>`).join("")}
        ${days.map((day) => dayCell(day)).join("")}
      </div>
    </section>
    <section class="widget-card selected-card selected-day-panel section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">${fmt(state.selectedDate, { weekday: "long" })}</p>
          <h2>${fmt(state.selectedDate, { month: "long", day: "numeric", year: "numeric" })}</h2>
        </div>
      </div>
      <p class="small-copy">${selectedMemories.length} memories · ${selectedAnniversaries.length} anniversary</p>
      <div class="selected-day-block">
        <h2>Anniversaries</h2>
        ${anniversaryListHtml(selectedAnniversaries)}
      </div>
      <div class="selected-day-block">
        <h2>Memories</h2>
        ${selectedMemories.length ? memoryListHtml(selectedMemories) : `<div class="selected-empty"><p>No memories on this date yet.</p><p>Try another day you shared.</p></div>`}
      </div>
      <div class="selected-actions">
        <button class="button-secondary" data-action="add-anniversary">Add Anniversary</button>
        <button class="button-primary" data-action="add-memory">Add Memory</button>
      </div>
    </section>
    ${anniversaryActionSheetHtml()}
  `;
}

function dayCell(day) {
  const mems = memoriesForDate(day.iso);
  const anns = anniversariesForDate(day.iso);
  const classes = [
    "day-cell",
    day.muted ? "is-muted" : "",
    day.iso === todayISO() ? "is-today" : "",
    day.iso === state.selectedDate ? "is-selected" : ""
  ].join(" ");
  return `
    <button class="${classes}" data-date="${day.iso}">
      ${day.day}
      <span class="day-marks">
        ${anns.length ? `<span class="mark-love" aria-label="${anns.length} anniversaries">&hearts;</span>` : ""}
        ${mems.length ? `<span class="mark-count" aria-label="${mems.length} memories">${mems.length}</span>` : ""}
      </span>
    </button>
  `;
}

function anniversaryListHtml(items) {
  if (!items.length) return `<p class="small-copy">No anniversaries on this date.</p>`;
  return `<div class="anniversary-list">${items.map(anniversaryCardHtml).join("")}</div>`;
}

function anniversaryCardHtml(item) {
  return `
    <article class="anniversary-card">
      <span class="anniversary-heart">♥</span>
      <div class="anniversary-copy">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.memo || "No note yet.")}</p>
      </div>
      <button class="anniversary-more" data-anniversary-menu="${item.id}" aria-label="More anniversary actions">•••</button>
    </article>
  `;
}

function anniversaryActionSheetHtml() {
  const anniversary = state.anniversaries?.find((item) => item.id === state.anniversaryMenuId);
  if (!anniversary) return "";
  return `
    <div class="modal-backdrop" role="presentation">
      <div class="action-sheet" role="dialog" aria-modal="true" aria-label="Anniversary actions">
        <button data-anniversary-action="edit">수정</button>
        <button class="danger-action" data-anniversary-action="delete">삭제</button>
        <button data-anniversary-action="cancel">취소</button>
      </div>
    </div>
  `;
}

function memoriesForDate(date) {
  return (state.memories || []).filter((memory) => memory.date === date).sort((a, b) => b.createdAt - a.createdAt);
}

function anniversariesForDate(date) {
  return (state.anniversaries || []).filter((anniversary) => {
    if (anniversary.date === date) return true;
    return anniversary.repeatYearly && anniversary.date.slice(5) === date.slice(5);
  });
}

function memoryListHtml(items) {
  if (!items.length) {
    return `<div class="empty-state"><h3>No memories yet</h3><p class="small-copy">Write down the moment you want to remember today.</p></div>`;
  }
  return `<div class="memory-list">${items.map(memoryCardHtml).join("")}</div>`;
}

function collectionItems(query = state.searchQuery || "", author = state.authorFilter || "all", type = state.typeFilter || "all") {
  return (state.memories || []).filter((memory) => {
    const haystack = [memory.title, memory.place, memory.note, memory.feeling, memory.type].join(" ").toLowerCase();
    const matchesQuery = haystack.includes(query.toLowerCase());
    const matchesAuthor = author === "all" || memory.authorUserId === author;
    const matchesType = type === "all" || memory.type === type;
    return matchesQuery && matchesAuthor && matchesType;
  }).sort((a, b) => b.date.localeCompare(a.date));
}

function collectionResultsHtml(items) {
  return `
    <div class="collection-summary">
      <p class="small-copy">Total memories: ${items.length}</p>
      <button class="chip-button collection-add-button" data-action="add-memory">Add Memory</button>
    </div>
    ${memoryListHtml(items)}
  `;
}

function memoryCardHtml(memory) {
  const author = [state.couple.a, state.couple.b].find((p) => p.id === memory.authorUserId);
  const cover = memory.photos?.[0];
  const tags = [memory.type, memory.feeling, memory.place].filter(Boolean).join(" · ");
  return `
    <button class="memory-card" data-memory="${memory.id}">
      <div class="memory-thumb">${cover ? `<img src="${cover}" alt="" />` : "✿"}</div>
      <div class="memory-main">
        <h3 class="memory-title">${escapeHtml(memory.title)}</h3>
        <p class="memory-meta">${fmt(memory.date, { month: "short", day: "numeric", year: "numeric" })} · ${author?.nickname || "Us"}</p>
        <p class="memory-tags">${escapeHtml(tags)}</p>
      </div>
    </button>
  `;
}

function collectionHtml() {
  const query = state.searchQuery || "";
  const author = state.authorFilter || "all";
  const type = state.typeFilter || "all";
  const typeOptions = ["Date", "Daily Review", "Trip", "Gift", "Anniversary"];
  const items = collectionItems(query, author, type);
  return `
    <section class="section">
      <label class="field">
        <span>Search</span>
        <input class="paper-input" value="${escapeAttr(query)}" data-search placeholder="Search by title, place, note, or feeling" />
      </label>
      <div class="collection-filters">
        <label class="field">
          <span>Author</span>
          <select class="paper-input" data-author-filter>
            <option value="all" ${author === "all" ? "selected" : ""}>All</option>
            <option value="${state.couple.a.id}" ${author === state.couple.a.id ? "selected" : ""}>${state.couple.a.nickname}</option>
            <option value="${state.couple.b.id}" ${author === state.couple.b.id ? "selected" : ""}>${state.couple.b.nickname}</option>
          </select>
        </label>
        <label class="field">
          <span>Type of memory</span>
          <select class="paper-input" data-type-filter>
            <option value="all" ${type === "all" ? "selected" : ""}>All</option>
            ${typeOptions.map((option) => `<option value="${escapeAttr(option)}" ${type === option ? "selected" : ""}>${option}</option>`).join("")}
          </select>
        </label>
      </div>
      <div class="collection-results" data-collection-results>${collectionResultsHtml(items)}</div>
    </section>
  `;
}

function bindMemories() {
  app.querySelectorAll("[data-memory-view]").forEach((button) => {
    button.addEventListener("click", () => setState({ memoryView: button.dataset.memoryView }));
  });
  app.querySelectorAll("[data-date]").forEach((button) => {
    button.addEventListener("click", () => setState({ selectedDate: button.dataset.date, visibleMonth: button.dataset.date.slice(0, 7) }));
  });
  app.querySelectorAll("[data-month]").forEach((button) => {
    button.addEventListener("click", () => {
      const [y, m] = state.visibleMonth.split("-").map(Number);
      const next = new Date(y, m - 1 + Number(button.dataset.month), 1);
      setState({ visibleMonth: localISO(next).slice(0, 7) });
    });
  });
  bindMemoryCards();
  bindAddMemoryButtons();
  app.querySelector("[data-action='add-anniversary']")?.addEventListener("click", () => setState({ route: "anniversaryForm", editingAnniversaryId: null }));
  app.querySelectorAll("[data-anniversary-menu]").forEach((button) => {
    button.addEventListener("click", () => setState({ anniversaryMenuId: button.dataset.anniversaryMenu }));
  });
  app.querySelectorAll("[data-anniversary-action]").forEach((button) => {
    button.addEventListener("click", () => handleAnniversaryAction(button.dataset.anniversaryAction));
  });
  app.querySelector("[data-search]")?.addEventListener("input", (event) => updateCollectionSearch(event.target.value));
  app.querySelector("[data-author-filter]")?.addEventListener("change", (event) => setState({ authorFilter: event.target.value }));
  app.querySelector("[data-type-filter]")?.addEventListener("change", (event) => setState({ typeFilter: event.target.value }));
}

function bindMemoryCards() {
  app.querySelectorAll("[data-memory]").forEach((button) => {
    button.addEventListener("click", () => setState({ route: "detail", selectedMemoryId: button.dataset.memory }));
  });
}

function bindAddMemoryButtons() {
  app.querySelectorAll("[data-action='add-memory']").forEach((button) => {
    button.addEventListener("click", () => setState({ route: "form", editingMemoryId: null }));
  });
}

function updateCollectionSearch(query) {
  state.searchQuery = query;
  saveState();
  const results = app.querySelector("[data-collection-results]");
  if (!results) return;
  results.innerHTML = collectionResultsHtml(collectionItems(query, state.authorFilter || "all", state.typeFilter || "all"));
  bindMemoryCards();
  bindAddMemoryButtons();
}

function handleAnniversaryAction(action) {
  const anniversary = state.anniversaries.find((item) => item.id === state.anniversaryMenuId);
  if (!anniversary || action === "cancel") return setState({ anniversaryMenuId: null });
  if (action === "edit") return setState({ route: "anniversaryForm", editingAnniversaryId: anniversary.id, anniversaryMenuId: null });
  if (action === "delete") {
    return setState({
      anniversaries: state.anniversaries.filter((item) => item.id !== anniversary.id),
      anniversaryMenuId: null
    });
  }
}

function renderMemoryForm() {
  const editing = state.memories.find((item) => item.id === state.editingMemoryId);
  const memory = editing || {
    date: state.selectedDate,
    title: "",
    type: "Date",
    feeling: "Happy",
    place: "",
    note: "",
    photos: [],
    together: {},
    plan: {}
  };
  app.innerHTML = `
    <main class="app-screen">
      <header class="screen-header">
        <button class="icon-button" data-action="back">${icon("back")}</button>
        <div class="header-stack"><p class="eyebrow">Memories</p><h1 class="screen-title">${editing ? "Edit Memory" : "Add Memory"}</h1></div>
        <span></span>
      </header>
      <form class="form-grid" id="memoryForm">
        <section class="widget-card photo-picker">
          <strong>Photo Gallery</strong>
          <p class="small-copy">First photo becomes the cover.</p>
          <input type="file" accept="image/*" multiple data-photo-input />
          <div class="photo-grid" id="photoPreview">${(memory.photos || []).map((src) => `<img src="${src}" alt="" />`).join("")}</div>
        </section>
        <section class="widget-card form-panel form-grid">
          ${field("Date", "date", memory.date, "date")}
          ${field("Title", "title", escapeAttr(memory.title))}
          ${selectField("Memory type", "type", ["Date", "Daily Review", "Trip", "Gift", "Anniversary"], memory.type)}
          ${selectField("Feeling", "feeling", ["Happy", "Calm", "Loved", "Funny", "Grateful", "Tender"], memory.feeling)}
          ${field("Where did it happen?", "place", escapeAttr(memory.place))}
          <label class="field"><span>Note</span><textarea class="paper-input" name="note" placeholder="Write down the moment you want to remember today.">${escapeHtml(memory.note)}</textarea></label>
        </section>
        <section class="widget-card form-panel form-grid">
          <span class="section-label">Routine</span>
          ${checkField("Workout day", "workout", memory.together?.workout)}
          ${checkField("Reading day", "reading", memory.together?.reading)}
          ${checkField("Walk day", "walk", memory.together?.walk)}
          <span class="section-label">Daily Plan</span>
          ${field("My goal today", "goal", escapeAttr(memory.plan?.goal || ""))}
          <label class="field"><span>My plan today</span><textarea class="paper-input" name="plan">${escapeHtml(memory.plan?.plan || "")}</textarea></label>
        </section>
        <p class="error-text" id="memoryError"></p>
        <div class="sticky-actions">
          <button class="button-primary">${editing ? "Save Changes" : "Save"}</button>
          ${editing ? `<button class="danger-button" type="button" data-action="delete">Delete this memory?</button>` : ""}
        </div>
      </form>
    </main>
  `;
  let photos = [...(memory.photos || [])];
  app.querySelector("[data-action='back']").addEventListener("click", () => setState({ route: null }));
  app.querySelector("[data-action='delete']")?.addEventListener("click", () => {
    if (confirm("Delete this memory?")) setState({ memories: state.memories.filter((item) => item.id !== editing.id), route: null });
  });
  app.querySelector("[data-photo-input]").addEventListener("change", async (event) => {
    const files = [...event.target.files].slice(0, 6);
    const loaded = await Promise.all(files.map(fileToDataUrl));
    photos = [...photos, ...loaded].slice(0, 6);
    app.querySelector("#photoPreview").innerHTML = photos.map((src) => `<img src="${src}" alt="" />`).join("");
  });
  app.querySelector("#memoryForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    if (!values.title.trim()) {
      app.querySelector("#memoryError").textContent = "Title can't be empty.";
      return;
    }
    const payload = {
      id: editing?.id || uid(),
      date: values.date,
      title: values.title.trim(),
      type: values.type,
      feeling: values.feeling,
      place: values.place.trim(),
      note: values.note.trim(),
      photos,
      together: { workout: Boolean(values.workout), reading: Boolean(values.reading), walk: Boolean(values.walk) },
      plan: { goal: values.goal.trim(), plan: values.plan.trim() },
      authorUserId: editing?.authorUserId || currentUser().id,
      createdAt: editing?.createdAt || Date.now(),
      updatedAt: Date.now()
    };
    const memories = editing ? state.memories.map((item) => item.id === editing.id ? payload : item) : [payload, ...state.memories];
    setState({ memories, selectedDate: payload.date, visibleMonth: payload.date.slice(0, 7), route: "detail", selectedMemoryId: payload.id });
  });
}

function selectField(label, name, options, value) {
  return `
    <label class="field">
      <span>${label}</span>
      <select class="paper-input" name="${name}">
        ${options.map((option) => `<option ${option === value ? "selected" : ""}>${option}</option>`).join("")}
      </select>
    </label>
  `;
}

function checkField(label, name, checked) {
  return `<label class="checkbox-row"><input type="checkbox" name="${name}" ${checked ? "checked" : ""} /> ${label}</label>`;
}

function fileToDataUrl(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
}

function renderMemoryDetail() {
  const memory = state.memories.find((item) => item.id === state.selectedMemoryId);
  if (!memory) return setState({ route: null });
  const author = [state.couple.a, state.couple.b].find((p) => p.id === memory.authorUserId);
  const canEdit = memory.authorUserId === currentUser().id;
  const dailyTogetherRows = dailyTogetherDetailRows(memory.date);
  app.innerHTML = `
    <main class="app-screen">
      <header class="screen-header">
        <button class="icon-button" data-action="back">${icon("back")}</button>
        <div class="header-stack"><p class="eyebrow">Memory Detail</p></div>
        <span></span>
      </header>
      <section class="widget-card form-panel section detail-review-card">
        <h1 class="screen-title">${escapeHtml(memory.title)}</h1>
        <div class="filter-strip">
          <span class="chip">${memory.type}</span>
          <span class="chip" data-tone="love">${memory.feeling}</span>
          <span class="chip">${author?.nickname || "Us"}</span>
        </div>
        <p class="small-copy">${fmt(memory.date, { month: "long", day: "numeric", year: "numeric" })}${memory.place ? ` · ${escapeHtml(memory.place)}` : ""}</p>
        <p class="body-copy">${escapeHtml(memory.note || "No note yet.")}</p>
      </section>
      ${memory.photos?.length ? `<section class="section">${memory.photos.map((src) => `<img class="detail-photo" src="${src}" alt="" />`).join("")}</section>` : ""}
      <section class="widget-card form-panel section detail-routine-card">
        <h2>Routine</h2>
        <div class="daily-together-list">${dailyTogetherRows}</div>
        <h2>Daily Plan</h2>
        <div class="daily-plan-detail">
          <p class="small-copy"><strong>Goal:</strong> ${escapeHtml(memory.plan?.goal || "No goal today.")}</p>
          <p class="small-copy">${escapeHtml(memory.plan?.plan || "No plan today.")}</p>
        </div>
      </section>
      ${canEdit ? `<button class="button-secondary detail-edit-button" data-action="edit">Edit Memory</button>` : ""}
    </main>
  `;
  app.querySelector("[data-action='back']").addEventListener("click", () => setState({ route: null }));
  app.querySelector("[data-action='edit']")?.addEventListener("click", () => setState({ route: "form", editingMemoryId: memory.id }));
}

function dailyTogetherDetailRows(date) {
  const people = [state.couple.a, state.couple.b];
  const memoryItems = memoriesForDate(date);
  const latestByAuthor = Object.fromEntries(
    people.map((person) => [person.id, memoryItems.find((item) => item.authorUserId === person.id)])
  );
  const rows = [
    { key: "workout", label: "workout" },
    { key: "reading", label: "reading" }
  ];

  return rows.map((row) => `
    <div class="daily-together-row">
      <span class="daily-together-label">${row.label}</span>
      ${people.map((person) => {
        const checked = latestByAuthor[person.id]?.together?.[row.key];
        return `<span class="daily-person-status"><span>${escapeHtml(person.nickname.toLowerCase())}</span> <strong>${checked ? "✓" : "-"}</strong></span>`;
      }).join("")}
    </div>
  `).join("");
}

function renderAnniversaryForm() {
  const editing = state.anniversaries.find((item) => item.id === state.editingAnniversaryId);
  const anniversary = editing || { title: "", date: state.selectedDate, repeatYearly: false, memo: "" };
  app.innerHTML = `
    <main class="app-screen">
      <header class="screen-header">
        <button class="icon-button" data-action="back">${icon("back")}</button>
        <div class="header-stack"><h1 class="screen-title">${editing ? "Edit Anniversary" : "Add Anniversary"}</h1></div>
        <span></span>
      </header>
      <form class="widget-card form-panel form-grid" id="annForm">
        ${field("Anniversary name", "title", escapeAttr(anniversary.title))}
        ${field("Date", "date", anniversary.date, "date")}
        <label class="checkbox-row"><input type="checkbox" name="repeatYearly" ${anniversary.repeatYearly ? "checked" : ""} /> Repeat yearly</label>
        <label class="field"><span>Note</span><textarea class="paper-input" name="memo">${escapeHtml(anniversary.memo)}</textarea></label>
        <p class="error-text" id="annError"></p>
        <button class="button-primary">${editing ? "Save Changes" : "Save"}</button>
      </form>
    </main>
  `;
  app.querySelector("[data-action='back']").addEventListener("click", () => setState({ route: null }));
  app.querySelector("#annForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    if (!values.title.trim()) {
      app.querySelector("#annError").textContent = "Anniversary name can't be empty.";
      return;
    }
    const payload = {
      id: editing?.id || uid(),
      title: values.title.trim(),
      date: values.date,
      repeatYearly: Boolean(values.repeatYearly),
      memo: values.memo.trim(),
      createdAt: editing?.createdAt || Date.now(),
      updatedAt: Date.now()
    };
    const anniversaries = editing
      ? state.anniversaries.map((item) => item.id === editing.id ? payload : item)
      : [payload, ...state.anniversaries];
    setState({ anniversaries, selectedDate: values.date, visibleMonth: values.date.slice(0, 7), route: null, editingAnniversaryId: null });
  });
}

function templatesHtml() {
  const active = templates.find((item) => item.id === state.themeId) || templates[0];
  return `
    <section class="section">
      <div class="section-heading"><h2>Theme Design</h2></div>
      <p class="body-copy">Choose the diary look for your memory book.</p>
      <article class="widget-card template-card section">
        <div class="template-preview">
          <div>
            <p class="eyebrow">${active.priceLabel}${active.access === "premium" ? " · Premium" : ""}</p>
            <h3 class="screen-title">${active.name}</h3>
            <p class="small-copy">${active.description}</p>
          </div>
          <div class="preview-widget">
            <p class="eyebrow">May 2026</p>
            <div class="mini-calendar">${Array.from({ length: 9 }, () => "<span></span>").join("")}</div>
          </div>
        </div>
        <div class="swatches">${active.previewColors.map((color) => `<span class="swatch" style="background:${color}"></span>`).join("")}</div>
        <button class="button-primary" disabled>Applied</button>
      </article>
      <div class="filter-strip">
        ${templates.map((theme) => `<button class="chip-button ${theme.id === state.themeId ? "is-active" : ""}" data-theme="${theme.id}">${theme.name}</button>`).join("")}
      </div>
      <p class="small-copy">Premium templates and GoodNotes PDF downloads are prepared as product surfaces in this local prototype.</p>
    </section>
  `;
}

function bindTemplates() {
  app.querySelectorAll("[data-theme]").forEach((button) => {
    button.addEventListener("click", () => setState({ themeId: button.dataset.theme }));
  });
}

function matchHtml() {
  const report = state.matchReport;
  return `
    <section class="section">
      <div class="section-heading"><h2>Saju Compatibility</h2></div>
      <form class="widget-card form-panel form-grid" id="matchForm">
        ${field(`${state.couple.a.nickname}'s birthday`, "aBirthday", state.couple.a.birthday, "date")}
        ${field(`${state.couple.b.nickname}'s birthday`, "bBirthday", state.couple.b.birthday, "date")}
        ${selectField("Relationship status", "status", ["Dating", "Long-term relationship", "Long-distance", "Living together", "Engaged", "Married", "Complicated"], "Dating")}
        <label class="checkbox-row"><input type="checkbox" name="unknownTime" checked /> I don't know the birth time</label>
        <button class="button-primary">View Full Reading</button>
      </form>
      ${report ? reportHtml(report) : ""}
    </section>
  `;
}

function bindMatch() {
  app.querySelector("#matchForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    const seed = [...values.aBirthday, ...values.bBirthday].reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const score = 68 + (seed % 24);
    setState({
      matchReport: {
        score,
        status: values.status,
        summary: "Your rhythm feels gentle and steady. One person brings warmth to small routines, while the other helps turn feelings into clear plans.",
        natural: "Planning ordinary days together, comforting each other after busy weeks, and keeping promises in small visible ways.",
        care: "Avoid assuming silence means agreement. A short check-in keeps both hearts on the same page.",
        prompt: "What is one tiny ritual we want to protect this month?"
      }
    });
  });
}

function reportHtml(report) {
  return `
    <article class="widget-card form-panel section">
      <div class="report-score">
        <div class="score-ring" style="--score:${report.score}%">${report.score}%</div>
        <div>
          <p class="eyebrow">Compatibility Reading</p>
          <h2 class="duari-display">Overall Match</h2>
        </div>
      </div>
      <p class="body-copy">${report.summary}</p>
      <div class="settings-list">
        <div class="settings-row"><div><strong>What feels natural</strong><span>${report.natural}</span></div></div>
        <div class="settings-row"><div><strong>What may need care</strong><span>${report.care}</span></div></div>
        <div class="settings-row"><div><strong>Conversation prompt</strong><span>${report.prompt}</span></div></div>
      </div>
      <div class="two-grid"><button class="button-secondary">Share</button><button class="button-secondary">Save as PDF</button></div>
    </article>
  `;
}

function settingsHtml() {
  return `
    <section class="section">
      <div class="section-heading"><h2>Settings</h2></div>
      <div class="settings-list">
        <button class="settings-row" data-settings="couple"><div><strong>Couple Space</strong><span>Edit Couple Info</span></div><span>›</span></button>
        <button class="settings-row" data-settings="pin"><div><strong>Security</strong><span>Change PIN</span></div><span>›</span></button>
        <button class="settings-row" data-settings="data"><div><strong>Data & Backup</strong><span>Your memories are safely backed up locally.</span></div><span>›</span></button>
        <button class="settings-row" data-settings="legal"><div><strong>Terms of Service</strong><span>Privacy Policy · Refund Policy</span></div><span>›</span></button>
        <button class="settings-row" data-settings="info"><div><strong>App Info</strong><span>DUARI localStorage prototype</span></div><span>›</span></button>
      </div>
      <button class="danger-button" data-action="lock">Log Out</button>
    </section>
  `;
}

function bindSettings() {
  app.querySelectorAll("[data-settings]").forEach((button) => {
    button.addEventListener("click", () => setState({ route: "settingsPage", settingsPage: button.dataset.settings }));
  });
  app.querySelector("[data-action='lock']")?.addEventListener("click", () => setState({ unlocked: false, activeUserId: null, route: null }));
}

function renderSettingsPage() {
  const page = state.settingsPage;
  const titles = { couple: "Couple Space", pin: "Change PIN", data: "Data & Backup", legal: "Legal", info: "App Info" };
  app.innerHTML = `
    <main class="app-screen">
      <header class="screen-header">
        <button class="icon-button" data-action="back">${icon("back")}</button>
        <div class="header-stack"><p class="eyebrow">Settings</p><h1 class="screen-title">${titles[page]}</h1></div>
        <span></span>
      </header>
      ${settingsPageHtml(page)}
    </main>
  `;
  app.querySelector("[data-action='back']").addEventListener("click", () => setState({ route: null }));
  app.querySelector("#coupleForm")?.addEventListener("submit", submitCoupleForm);
  app.querySelector("#pinChangeForm")?.addEventListener("submit", submitPinForm);
}

function settingsPageHtml(page) {
  if (page === "couple") {
    return `
      <form class="widget-card form-panel form-grid" id="coupleForm">
        ${field("Your nickname", "aName", state.couple.a.nickname)}
        ${field("Partner nickname", "bName", state.couple.b.nickname)}
        ${field("The day you started", "startDate", state.couple.startDate, "date")}
        <p class="error-text" id="coupleError"></p>
        <button class="button-primary">Save Changes</button>
      </form>
    `;
  }
  if (page === "pin") {
    return `
      <form class="widget-card form-panel form-grid" id="pinChangeForm">
        ${field("Current PIN", "currentPin", "", "password", "inputmode='numeric' maxlength='4'")}
        ${field("New 4-digit PIN", "newPin", "", "password", "inputmode='numeric' maxlength='4'")}
        ${field("Confirm new PIN", "confirmPin", "", "password", "inputmode='numeric' maxlength='4'")}
        <p class="error-text" id="pinChangeError"></p>
        <button class="button-primary">Change PIN</button>
      </form>
    `;
  }
  if (page === "data") {
    return `<section class="widget-card form-panel section"><h2>Backup</h2><p class="body-copy">Your memories are safely backed up in this browser with localStorage.</p><p class="small-copy">Last updated: ${fmt(todayISO(), { month: "long", day: "numeric", year: "numeric" })}</p><button class="button-secondary" disabled>Export PDF</button></section>`;
  }
  if (page === "legal") {
    return `<section class="widget-card form-panel section"><h2>Terms of Service</h2><p class="body-copy">Legal pages are placeholders for the commercial version.</p><h2>Privacy Policy</h2><p class="body-copy">The local prototype stores data only in this browser.</p><h2>Refund Policy</h2><p class="body-copy">Template purchases are coming soon.</p></section>`;
  }
  return `<section class="widget-card form-panel section"><h2>DUARI</h2><p class="body-copy">Our Memory Book localStorage prototype.</p><p class="small-copy">Memories: ${state.memories.length} · Anniversaries: ${state.anniversaries.length}</p></section>`;
}

function submitCoupleForm(event) {
  event.preventDefault();
  const values = Object.fromEntries(new FormData(event.currentTarget));
  if (!values.aName.trim() || !values.bName.trim()) {
    app.querySelector("#coupleError").textContent = "Nickname can't be empty.";
    return;
  }
  state.couple.a.nickname = values.aName.trim();
  state.couple.b.nickname = values.bName.trim();
  state.couple.startDate = values.startDate;
  setState({ route: null });
}

function submitPinForm(event) {
  event.preventDefault();
  const values = Object.fromEntries(new FormData(event.currentTarget));
  if (values.currentPin !== state.couple.pin) {
    app.querySelector("#pinChangeError").textContent = "Current PIN doesn't match.";
    return;
  }
  if (!/^\d{4}$/.test(values.newPin)) {
    app.querySelector("#pinChangeError").textContent = "PIN must be 4 digits.";
    return;
  }
  if (values.newPin !== values.confirmPin) {
    app.querySelector("#pinChangeError").textContent = "New PINs don't match.";
    return;
  }
  state.couple.pin = values.newPin;
  setState({ route: null });
}

function bindMainTabs() {
  app.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => setState({ activeTab: button.dataset.tab, route: null }));
  });
}

function bindBottomNav() {
  app.querySelectorAll(".bottom-nav__item").forEach((button) => {
    button.addEventListener("click", () => setState({ activeTab: button.dataset.tab, route: null }));
  });
}

function bottomNavHtml() {
  const tabs = [
    ["memories", "Memories"],
    ["templates", "Templates"],
    ["match", "Match"],
    ["settings", "Settings"]
  ];
  return `
    <nav class="bottom-nav" aria-label="Main navigation">
      ${tabs.map(([id, label]) => `<button class="bottom-nav__item" data-tab="${id}" ${state.activeTab === id ? `aria-current="page"` : ""}>${icon(id)}<span>${label}</span></button>`).join("")}
    </nav>
  `;
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}

function escapeAttr(value = "") {
  return escapeHtml(value);
}

render();
