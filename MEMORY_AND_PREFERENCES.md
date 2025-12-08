# MEMORY & PREFERENCES SYSTEM

### OSQR Memory, Preferences & Identity Engine Specification

---

## 1. Purpose of This System

The Memory & Preferences system defines how OSQR:

- Learns the user
- Stores and organizes long-term intelligence
- Builds identity models
- Manages preferences & tone
- Controls proactivity
- Enforces privacy
- Allows the user to view, edit, or delete everything

This is the user-facing container for the PKV, MSC, Profile Builder, memory tiers, Router Brain preferences, and Privacy Levels A/B/C.

This replaces the "Settings" page that typical AI apps use. OSQR's version must be **Spartan, intelligent, transparent, and identity-driven.**

---

## 2. Why OSQR's Approach is Different

**ChatGPT and Claude** needed memory settings because their memory was chaotic and passive.

**OSQR** needs it because memory is **intentional and active**.

OSQR is the only AI literally built on identity + memory + proactive reasoning. The Memory & Preferences page is not a feature — it's the **face of the entire cognitive architecture**.

This UI surfaces:
- The PKV
- The MSC
- The Identity Engine
- The Router Brain
- The Privacy Tiers
- The Proactivity Engine

All of which separate OSQR from every other AI.

---

## 3. High-Level Structure

The Memory & Preferences page uses **three primary sections**:

| Tab | Purpose |
|-----|---------|
| **Memory** | What OSQR knows about you |
| **Preferences** | How OSQR communicates and thinks |
| **Privacy** | What OSQR stores, where, and how to delete it |

Each section has intentional boundaries, Spartan UX, and ties into OSQR's existing architecture.

---

## 4. Section 1 — Memory Panel

This panel exposes the combined output of:

- PKV (Personal Knowledge Vault)
- MSC (Master Summary Checklist)
- User Profile Builder
- Cross-session long-term memory
- Pattern recognition
- Identity modeling

Memory Panel is broken into 3 subsections:

---

### 4.1 What OSQR Has Learned

A transparent list of stored intelligence:

- Identity statements
- Personal rules & principles
- Goals (short-term, long-term)
- Active projects
- Constraints & bottlenecks
- Strengths & weaknesses
- Repeated patterns
- Career/fitness/relationship categories
- Insights added to MSC
- Key books, frameworks, uploaded docs
- Recurring questions
- User preferences inferred from behavior

**Backend Source:** PKV + MSC + Profile memory + pattern engine.

**UI Behavior:**
- Expandable items
- "Pin this" button
- "Edit" button
- "Forget this" button

---

### 4.2 Suggested Memory Additions

OSQR proactively detects memory-worthy items and surfaces them.

Examples:
- "You mentioned this twice — save it to your goals?"
- "This contradicts something from last week — want to review?"
- "This looks like part of a project — save to MSC?"
- "This is a new principle — add to identity?"

**Actions:**
- Accept
- Decline
- Ask why OSQR suggested it

This is how OSQR differentiates from other AIs. Other AIs passively store. **OSQR actively reasons.**

---

### 4.3 Forgetting Tools

Simple, Spartan options:

- Forget this item
- Forget this category
- Forget today's session
- Forget the last X messages
- Forget this project thread
- Export memory before deleting
- **Burn It (Nuclear Wipe)**

---

## 5. Section 2 — Preferences Panel

Preferences define how OSQR communicates, thinks, and behaves.

Four subsections:

---

### 5.1 Communication Style

Sliders or options:

| Setting | Range |
|---------|-------|
| Tone | Spartan ↔ Conversational |
| Length | Concise ↔ Detailed |
| Approach | Direct ↔ Encouraging |
| Humor | On / Off |
| Dad Mode | Optional toggle |
| Emoji | On / Off |
| Register | Professional ↔ Personal |

---

### 5.2 Thinking Style

User-facing controls for the Router Brain:

- **Default Mode:** Quick / Thoughtful / Contemplate
- **Auto-Mode Scaling Toggle** — Let OSQR decide based on question complexity
- **"Aggressive thinking" level** — How deep to go
- **"Always run refinement step first" toggle**
- **"Always ask for more details on complex questions" toggle**

---

### 5.3 Proactivity Settings

Defines how much OSQR "thinks ahead."

**Sliders:**
- Suggestions frequency
- Pattern alerts
- Contradiction detection
- Weekly insight summaries
- Follow-up prompts
- "Identity Alignment Checks" (on/off)

**Modes:**

| Mode | Behavior |
|------|----------|
| **Coach Mode** | Challenging, growth-focused, holds you accountable |
| **Builder Mode** | Task-oriented, execution-focused, minimal fluff |
| **Strategist Mode** | Big-picture, long-term, pattern-heavy |
| **Quiet Mode** | Minimal proactivity, only responds when asked |

---

### 5.4 Memory Preferences

User controls which types of memory OSQR should store:

**Categories:**
- [ ] Goals
- [ ] Projects
- [ ] Identity statements
- [ ] Preferences
- [ ] Life patterns
- [ ] Books + documents
- [ ] Fitness/discipline items
- [ ] Career/finance items
- [ ] Relationship items
- [ ] Recurring problems

**Controls:**
- Off-limits categories (never store)
- Always-ask categories (confirm before storing)
- Auto-store categories (save without asking)

---

## 6. Section 3 — Privacy Panel

This is tied to your Privacy Tiers (A/B/C):

| Tier | Behavior |
|------|----------|
| **Tier A** | No Learning — OSQR forgets everything after session |
| **Tier B** | Local-Only Learning — Memory stays on your account only |
| **Tier C** | Anonymized Pattern Sharing — Helps improve Oscar globally |

All user data remains owned by the user.

---

### 6.1 Privacy Controls

- Select Privacy Tier (A/B/C)
- Download PKV
- Download MSC
- Export full OSQR profile
- "What OSQR knows about you" expanded view
- Delete specific categories of memory
- **Burn It button** (entire account memory wipe)
- Data storage location explanation
- Encryption explanation
- When OSQR last indexed something

---

## 7. UX Requirements

### 7.1 Design Characteristics

- Spartan visual language
- Few colors
- High contrast
- No clutter
- Horizontal tabs across top: **Memory | Preferences | Privacy**
- Inline editing, no modals unless necessary
- One action per line
- Clear confirmation steps for deletion

### 7.2 Tab Structure

```
┌─────────────────────────────────────────────────────────┐
│  [Memory]    [Preferences]    [Privacy]                 │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Content for selected tab                               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 8. Backend Requirements

### 8.1 Data Models Needed

```
MemoryItem {
  id: string
  userId: string
  category: string
  content: string
  source: 'conversation' | 'document' | 'inferred' | 'user_input'
  confidence: number
  createdAt: timestamp
  updatedAt: timestamp
  pinned: boolean
}

PreferenceSetting {
  id: string
  userId: string
  key: string
  value: any
  updatedAt: timestamp
}

PrivacySetting {
  id: string
  userId: string
  tier: 'A' | 'B' | 'C'
  categoryPermissions: object
  lastBurnAt: timestamp | null
}

IdentityModel {
  id: string
  userId: string
  statements: string[]
  goals: Goal[]
  patterns: Pattern[]
  contradictions: Contradiction[]
  updatedAt: timestamp
}

PatternRecord {
  id: string
  userId: string
  type: string
  description: string
  occurrences: number
  firstSeen: timestamp
  lastSeen: timestamp
  acknowledged: boolean
}

ProactivityConfig {
  id: string
  userId: string
  mode: 'coach' | 'builder' | 'strategist' | 'quiet'
  suggestionFrequency: number
  patternAlerts: boolean
  contradictionDetection: boolean
  weeklyInsights: boolean
  identityChecks: boolean
}
```

### 8.2 Integrations

- PKV system
- MSC system
- Profile builder
- Multi-model Router Brain
- Storage layer (Postgres + vector store)
- Privacy enforcement filters

---

## 9. API Requirements

### 9.1 Memory Endpoints

```
GET    /api/memory              — List all memory items
GET    /api/memory/:id          — Get specific memory item
POST   /api/memory              — Create memory item
PATCH  /api/memory/:id          — Update memory item
DELETE /api/memory/:id          — Delete memory item
GET    /api/memory/suggestions  — Get suggested additions
POST   /api/memory/suggestions/:id/accept
POST   /api/memory/suggestions/:id/decline
```

### 9.2 Preferences Endpoints

```
GET    /api/preferences         — Get all preferences
PATCH  /api/preferences         — Update preferences
GET    /api/preferences/:key    — Get specific preference
```

### 9.3 Privacy Endpoints

```
GET    /api/privacy             — Get privacy settings
PATCH  /api/privacy             — Update privacy settings
POST   /api/privacy/export      — Export all user data
POST   /api/privacy/burn        — Nuclear wipe (requires confirmation)
GET    /api/privacy/audit       — What OSQR knows about you
```

All endpoints must enforce the current Privacy Tier rules.

---

## 10. Implementation Phases

### Phase 1 (Next 2–6 weeks) — Required for v1.0 Launch

**Memory Panel:**
- [ ] Memory visibility (read-only)
- [ ] Basic categorization display
- [ ] Forget individual items

**Preferences Panel:**
- [ ] Communication Styles
- [ ] Thinking Modes (Quick/Thoughtful/Contemplate)
- [ ] Proactivity slider (basic)
- [ ] Default mode selection

**Privacy Panel:**
- [ ] Privacy Tier selector (A/B/C)
- [ ] Burn It button
- [ ] Export tools
- [ ] "What OSQR knows" basic view

**Infrastructure:**
- [ ] API endpoints for memory & preferences
- [ ] Database models
- [ ] UI tabs for Memory / Preferences / Privacy

---

### Phase 2 (Months 2–4) — Intelligence Layer

**Memory Panel:**
- [ ] Editable memory items
- [ ] Suggested memory additions
- [ ] Pattern detection hooks
- [ ] Contradiction surfacing
- [ ] Pin/unpin functionality

**Preferences Panel:**
- [ ] Mode switching (Coach/Builder/Strategist/Quiet)
- [ ] Memory category permissions
- [ ] Proactivity fine-tuning

**Identity Engine:**
- [ ] Identity alignment reminders
- [ ] Proactive contradiction detection
- [ ] Goal drift monitoring

---

### Phase 3 (Months 4–8) — Full Cognitive Architecture

**Memory Panel:**
- [ ] Full identity engine visualization
- [ ] Pattern timeline
- [ ] Memory confidence scores
- [ ] Source tracking (which conversation, which document)

**Intelligence Features:**
- [ ] Weekly insight summaries
- [ ] Monthly MSC evolution reports
- [ ] Multi-model identity reinforcement
- [ ] Cross-session pattern analysis

---

## 11. Security Considerations

### 11.1 Data Protection

- All memory encrypted at rest
- Tier A sessions: nothing persisted
- Tier B sessions: encrypted, user-only access
- Burn It: complete deletion, not soft delete
- Export: encrypted download with user's key

### 11.2 Access Control

- Memory only accessible by owning user
- No admin access to memory contents
- Audit log of all memory access
- Rate limiting on memory APIs

---

## 12. Success Metrics

| Metric | Target |
|--------|--------|
| Users who visit Memory panel | 60%+ |
| Memory items viewed/edited | Track engagement |
| Preference customization rate | 40%+ |
| Privacy tier selection | Track distribution |
| Burn It usage | Track (should be low) |
| Suggested memory acceptance rate | 30%+ |
| Pattern alert engagement | 50%+ |

---

## 13. Summary

This document defines:

- What the user sees
- What the system stores
- How identity, memory, preferences, and privacy all work together

This is the canonical spec for OSQR's internal + user-facing cognitive architecture.

The Memory & Preferences system is not a settings page — it's the **window into OSQR's mind** and the user's **control panel for their own intelligence layer**.

---

*This specification integrates with [ROADMAP.md](./ROADMAP.md) and [SUPREME-COURT-MODE.md](./SUPREME-COURT-MODE.md).*
