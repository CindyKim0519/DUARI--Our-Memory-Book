# DUARI Design System

## 1. Visual Direction

첨부 이미지에서 가져온 핵심 감성은 `soft spring widget diary`이다. DUARI는 연애 앱처럼 과하게 반짝이는 화면보다, 휴대폰 안에 작은 종이 위젯과 손그림 다이어리를 조용히 쌓아 둔 느낌을 목표로 한다.

핵심 키워드:
- Cream paper
- Sage green
- Soft white widget
- Pressed flowers
- Pencil illustration
- Handwritten calendar
- Gentle neumorphism
- Quiet couple memory book

디자인 원칙:
- 앱 전체는 최대 폭 480px의 모바일 다이어리처럼 보인다.
- 배경은 따뜻한 크림 또는 아주 연한 회색 종이 질감을 사용한다.
- 주요 정보는 흰색 또는 크림색의 둥근 위젯 카드에 담는다.
- 버튼과 선택 상태는 세이지 그린을 기본으로 하고, 꽃잎 핑크와 버터 옐로우를 작은 포인트로만 쓴다.
- 카드 그림자는 강한 drop shadow가 아니라 부드럽게 떠 있는 흰색 위젯 느낌이어야 한다.
- 제목, 월 이름, 날짜 장식에는 손글씨 폰트를 사용하고, 본문 UI는 읽기 쉬운 둥근 산세리프를 사용한다.

## 2. Color Tokens

### Core Palette

| Token | Hex | Use |
| --- | --- | --- |
| `cream-50` | `#fffdf7` | 최상단 밝은 surface |
| `cream-100` | `#fbf6ea` | 기본 앱 배경 |
| `cream-200` | `#f3ead7` | paper band, subtle section |
| `paper-white` | `#fffffb` | 카드, 입력창 |
| `mist-100` | `#f1f2ef` | 회색 위젯 테마 배경 |
| `sage-100` | `#dbe7ce` | 연한 선택 배경 |
| `sage-200` | `#c4d5b4` | 배지, 작은 칩 |
| `sage-300` | `#a8bf91` | 보조 버튼 |
| `sage-500` | `#6f965f` | primary action |
| `sage-700` | `#3f6838` | display text, active icon |
| `butter-200` | `#f5e49b` | calendar dot, gentle highlight |
| `petal-200` | `#efb8aa` | anniversary, love accent |
| `sky-100` | `#d8eced` | soft weather/plan accent |
| `clay-200` | `#d9bea1` | paper illustration accent |
| `ink-900` | `#2f392c` | primary text |
| `ink-600` | `#697063` | secondary text |
| `ink-400` | `#9ba092` | placeholder text |
| `line-100` | `#e8e3d7` | borders, dividers |

### Semantic Tokens

| Token | Value |
| --- | --- |
| `background` | `cream-100` |
| `background-alt` | `mist-100` |
| `surface` | `paper-white` |
| `surface-soft` | `cream-50` |
| `primary` | `sage-500` |
| `primary-soft` | `sage-100` |
| `accent-love` | `petal-200` |
| `accent-day` | `butter-200` |
| `accent-calm` | `sky-100` |
| `text` | `ink-900` |
| `text-muted` | `ink-600` |
| `text-soft` | `ink-400` |
| `border` | `line-100` |

Color usage ratio:
- 70% cream, white, mist paper backgrounds
- 20% sage green components
- 10% small flower accents

## 3. Typography

Primary UI font:
- `Nunito`
- Use for buttons, labels, forms, settings, tabs, body copy.

Display font:
- `Gaegu`
- Use for app title, month labels, empty state headline, card notes, decorative dates.

Fallback stack:
- UI: `"Nunito", "Inter", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif`
- Display: `"Gaegu", "Comic Sans MS", "Apple SD Gothic Neo", cursive`

Type scale:

| Token | Size | Line Height | Use |
| --- | --- | --- | --- |
| `display-xl` | `48px` | `1.05` | lock screen style time, large month |
| `display-lg` | `34px` | `1.08` | page title, template preview title |
| `title-lg` | `24px` | `1.2` | screen title |
| `title-md` | `20px` | `1.25` | card title |
| `body-lg` | `17px` | `1.55` | memory content |
| `body-md` | `15px` | `1.5` | normal UI |
| `body-sm` | `13px` | `1.4` | metadata, helper text |
| `label` | `12px` | `1.2` | chips, calendar weekday |

Text rules:
- UI labels are English.
- Long body content can be user language.
- Display text may look hand-written, but form labels must stay highly readable.
- Letter spacing stays `0`.

## 4. Shape And Elevation

Radius:
- `radius-xs`: `8px` for small chips
- `radius-sm`: `12px` for inputs and small icon buttons
- `radius-md`: `18px` for memory cards
- `radius-lg`: `26px` for widget cards
- `radius-xl`: `34px` for large preview panels
- `radius-pill`: `999px` for tabs, date pills, bottom navigation

Elevation:
- Use soft neumorphic shadows, never harsh black shadows.
- Combine a light upper highlight with a muted lower shadow.

Shadow tokens:
- `shadow-widget`: `8px 10px 22px rgba(121, 132, 112, 0.16), -5px -5px 14px rgba(255, 255, 255, 0.9)`
- `shadow-card`: `0 10px 24px rgba(105, 112, 99, 0.12)`
- `shadow-pressed`: `inset 3px 3px 8px rgba(117, 126, 108, 0.12), inset -3px -3px 8px rgba(255, 255, 255, 0.9)`
- `shadow-float`: `0 16px 36px rgba(105, 112, 99, 0.18)`

Border:
- Use `1px solid rgba(255, 255, 255, 0.72)` for raised widgets.
- Use `1px solid var(--color-border)` for functional forms.

## 5. Layout System

App shell:
- Max width: `480px`
- Min height: `100dvh`
- Background: paper texture over cream
- Safe area padding: `max(16px, env(safe-area-inset-top)) 18px max(20px, env(safe-area-inset-bottom))`

Spacing scale:
- `space-1`: `4px`
- `space-2`: `8px`
- `space-3`: `12px`
- `space-4`: `16px`
- `space-5`: `20px`
- `space-6`: `24px`
- `space-8`: `32px`
- `space-10`: `40px`

Page rhythm:
- Header to content: `20px`
- Card gap: `14px`
- Section gap: `28px`
- Bottom nav clearance: `92px`

## 6. Component Rules

### App Header

Use a compact header with date, couple space name, and one icon action. The brand title can use `Gaegu`.

States:
- Default: transparent over paper
- Scrolled: soft white surface with `shadow-card`

### Widget Card

Use for home summaries, anniversary counters, daily plan, template preview, match score summary.

Style:
- Background `surface`
- Radius `26px`
- Soft highlight border
- `shadow-widget`
- Optional embedded illustration crop

Do:
- Keep content sparse.
- Use small flower or calendar accents.

Do not:
- Put multiple nested cards inside a widget card.
- Use saturated gradients.

### Memory Card

Use for Collection and memory detail.

Structure:
- Date pill
- Title
- Optional photo strip
- Emotion badge
- Author chip

Style:
- Radius `18px`
- Paper white background
- Thin cream border
- One small pressed flower corner motif is allowed.

### Calendar

The calendar should feel hand-drawn but remain readable.

Rules:
- Month label uses `Gaegu`, `34px`, sage-700.
- Weekdays use uppercase `Nunito`, `12px`, medium weight.
- Selected date uses a small sage or butter circular sticker.
- Anniversary uses petal circle.
- Memory count uses tiny dot cluster, not large badges.
- Today has a thin sage ring.

### Bottom Navigation

Use a floating pill dock like the second image.

Structure:
- 4 tabs: Memories, Templates, Match, Settings
- Center add action can float above the dock on Memories screens.

Style:
- Background: `rgba(255, 255, 251, 0.86)`
- Backdrop blur: `18px`
- Radius: `999px`
- Icon buttons: `48px`
- Active icon: sage-700 with sage-100 pressed background

### Buttons

Primary:
- Sage fill
- White text
- Pill radius
- Minimum height `48px`

Secondary:
- White widget background
- Sage text
- Soft shadow

Ghost:
- Transparent
- Sage text/icon

Danger:
- Keep calm but clear: muted rose text on very pale rose background.

### Inputs

Use inset paper fields.

Style:
- Background `#fffefa`
- Border `line-100`
- Radius `14px`
- Height `48px`
- Focus ring `0 0 0 3px rgba(168, 191, 145, 0.28)`

### Chips And Badges

Author chip:
- Person A: sage-100 background, sage-700 text
- Person B: petal-200 background at 35% opacity, warm ink text

Emotion badge:
- Rounded label with small icon.
- Do not use highly saturated emoji-heavy styling.

Premium badge:
- Small crown icon plus `Premium`.
- Butter background with sage text.

## 7. Illustration And Texture

Illustration style:
- Pencil or crayon texture
- Tiny flowers, leaves, trees, picnic details
- Washed sage, pale yellow, petal pink
- Imperfect lines are encouraged

Texture:
- Add a subtle paper noise overlay.
- Opacity should stay below `0.08`.
- Avoid visible grain that reduces text contrast.

Motifs:
- Tiny white daisies
- Pressed leaves
- Small calendar stickers
- Soft weather doodles
- Polaroid-style photo frame

## 8. Screen Patterns

### Login

Layout:
- Paper background
- `duari` in display font
- Soft widget login panel
- Primary CTA in sage

Tone:
- Private, calm, not social-network-like.

### Memories Calendar

Layout:
- Top date/couple summary widget
- Month calendar
- Upcoming anniversary strip
- Recent memories list
- Floating bottom nav

### Collection

Layout:
- Search field as inset paper input
- Filter chips
- Memory cards in one column

### Add Memory

Layout:
- Separate page
- Photo picker as dashed soft widget
- Date, title, place, emotion, body
- Sticky bottom save button

### Templates

Layout:
- Large phone-style preview
- Horizontal template selector
- Palette swatches
- Apply button changes with selected theme

### Match

Layout:
- Calm form page
- Result cards with soft dividers
- Avoid fortune-telling neon or mystical dark palettes

### Settings

Layout:
- Simple list rows in paper widgets
- No heavy decoration

## 9. Theme Catalog Spec

Recommended first image-based template:

```js
{
  id: "spring-widget",
  name: "Spring Widget",
  access: "free",
  status: "available",
  priceLabel: "Free",
  description: "A soft spring phone-wallpaper theme with sage widgets, cream paper, tiny flowers, and hand-drawn calendar details.",
  previewColors: ["#fbf6ea", "#fffffb", "#6f965f", "#f5e49b", "#efb8aa"],
  themeTokens: {
    background: "#fbf6ea",
    backgroundAlt: "#f1f2ef",
    surface: "#fffffb",
    surfaceSoft: "#fffdf7",
    primary: "#6f965f",
    primarySoft: "#dbe7ce",
    accentLove: "#efb8aa",
    accentDay: "#f5e49b",
    accentCalm: "#d8eced",
    text: "#2f392c",
    mutedText: "#697063",
    border: "#e8e3d7",
    cardRadius: "18px",
    widgetRadius: "26px",
    buttonRadius: "999px",
    bodyFont: "Nunito",
    displayFont: "Gaegu",
    texture: "soft-paper",
    decorativeMotif: "pressed-daisies",
    photoFrameStyle: "rounded-polaroid",
    calendarMarkStyle: "hand-drawn-sticker",
    emotionBadgeStyle: "soft-label",
    elevationStyle: "gentle-neumorphism"
  }
}
```

## 10. Accessibility

Contrast:
- Body text on paper must meet WCAG AA where possible.
- Sage text below `sage-500` should not be used for small text.
- Placeholder text should not carry required meaning.

Touch:
- Minimum target size `44px`.
- Bottom nav icons `48px`.
- Form rows `48px` minimum.

Motion:
- Use slow, gentle transitions: `160ms` to `220ms`.
- Avoid bouncing effects for serious actions like save, delete, PIN.

## 11. Implementation Checklist

- Import `Nunito` and `Gaegu`.
- Add `design-tokens.css` globally.
- Map active template values to CSS variables on the app root.
- Refactor repeated colors into semantic variables.
- Build `WidgetCard`, `MemoryCard`, `BottomNav`, `CalendarDay`, `AppButton`, `PaperInput`.
- Ensure template preview reads from the same tokens as the real app.
- Verify mobile widths at 360px, 390px, 430px, and 480px.
