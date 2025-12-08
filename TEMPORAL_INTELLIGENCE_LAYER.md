# TEMPORAL INTELLIGENCE LAYER (TIL)

### OSQR's Sense of Time

*The foundational subsystem that gives OSQR temporal awareness — understanding not just what you said, but when you said it, how long it's been, and whether you're moving forward or looping.*

---

## 1. Purpose

Current AI systems are **timeless**. They live in a "floating present" with no real understanding of:

- How long a project has been idle
- When a goal was set vs. now
- What you said you'd do "next week"
- What patterns recur monthly or seasonally
- How your identity has evolved over time
- What's urgent vs. what can wait
- What you've abandoned vs. what you're still pursuing

Humans have seasons, cycles, momentum, regression, streaks, phases, deadlines, arcs, decay, and opportunity windows.

**You feel time. LLMs don't. OSQR must.**

The Temporal Intelligence Layer (TIL) gives OSQR the cognitive faculty to reason about time as humans experience it — making it the first AI system that truly understands how life unfolds.

---

## 2. Strategic Rationale

### 2.1 Why This Matters

Identity evolves over time.
Goals evolve over time.
Patterns appear over time.
Breakthroughs take time.
Insight compounds over time.
Consistency requires time.

Without temporal awareness, OSQR is just another chatbot with memory. With TIL, OSQR becomes a **companion intelligence** that:

- Remembers across time
- Understands human timing
- Brings back forgotten commitments
- Notices long-term patterns
- Tracks identity evolution
- Manages momentum
- Gives time-based strategic guidance

### 2.2 Differentiator

No AI understands time as a human lives it. This is one of OSQR's major differentiators — the difference between *chatbot* and *life operating system*.

---

## 🚀 START HERE: v0.1 MVP (First Pass)

**When Claude starts building TIL, this is the ONLY scope for the first implementation.**

Everything else in this document is context and future vision. v0.1 is intentionally tiny.

### v0.1 Scope — Data Layer

Add two fields to existing entities:
- `last_referenced_at` (timestamp)
- `activity_state` ('active' | 'paused' | 'abandoned' | 'archived')

Apply to:
- [ ] Projects/Goals
- [ ] PKV documents
- [ ] MSC items

### v0.1 Scope — Update Hooks

Update `last_referenced_at` on:
- [ ] View/open an entity
- [ ] Mention in chat
- [ ] Explicit edit

Update `activity_state` on:
- [ ] User manually changes status
- [ ] (Future: auto-detect based on idle time)

### v0.1 Scope — One Endpoint

```
GET /api/temporal/idle?minDaysIdle=30
  - Returns: entities where last_referenced_at > X days ago
  - Filter by entityType optional
```

### v0.1 Scope — One UI Surface

A simple "Time Alerts" list showing:
- Entity name
- Days idle
- Link to entity

This can be:
- A section in the Weekly Review view, OR
- A small sidebar panel, OR
- A dedicated /time-alerts page

**That's it. Nothing else for v0.1.**

### What is NOT in v0.1

- ❌ Pattern detection
- ❌ Context injection in responses
- ❌ Temporal weighting
- ❌ Identity evolution tracking
- ❌ Callbacks/notifications system
- ❌ Snooze/dismiss/acknowledge flows
- ❌ urgency_score / importance_score fields
- ❌ Monthly/quarterly/yearly views
- ❌ Time badges on entities
- ❌ TemporalCallback table
- ❌ TemporalPattern table
- ❌ Any cron jobs

All of the above are Phase 2+. They're documented below for context.

---

## 3. Core Capabilities

TIL provides six core functions:

### 3.1 Temporal Metadata on All Entities

Every saved memory, PKV entry, MSC item, project, and goal gets consistent temporal fields:

- `created_at` — when it was first recorded
- `updated_at` — when it was last modified
- `last_referenced_at` — when it was last mentioned or accessed
- `activity_state` — active / paused / abandoned / archived
- `urgency_score` — 0–1, how time-sensitive
- `importance_score` — 0–1, how significant long-term

This happens automatically. Every interaction updates the temporal index.

### 3.2 Temporal Callbacks

OSQR proactively surfaces time-based alerts:

- "Hey — you haven't touched this project since September."
- "Three months ago you said you'd revisit this."
- "This goal has been idle for 11 weeks — still important?"
- "Your habits dropped in the last two weeks."
- "We're entering Q2; here's what you set in Q1."
- "You're halfway through your 5-year plan timeline."

These are not notifications — they're intelligent resurfacing based on context and user preferences.

### 3.3 Temporal Reasoning in Responses

Instead of flat answers, OSQR gives context in time:

- "This contradicts a belief you expressed in April."
- "This aligns with the direction you chose last month."
- "This matches a problem pattern that shows up every 6–8 weeks."
- "Last year you said you wanted to do X by this winter."

Time becomes part of the intelligence, not just metadata.

### 3.4 Temporal Weighting

**Older insights become:**
- Less relevant in default context
- Less authoritative for current decisions
- More likely to be resurfaced for update
- Candidates for pruning or archiving

**Recent insights:**
- Get weighted higher in context injection
- Influence decisions more
- Represent "current you"

This creates a natural decay curve that mirrors how humans think about past decisions.

### 3.5 Temporal Identity Awareness

OSQR tracks your evolution:

- "You've been operating at Level 4 since July. Your language has shifted."
- "Your goals 6 months ago were about survival. Now they're about scaling."
- "Your stress spikes every time quarters change."
- "You said you wanted to hire Israel before Q2; we're 6 weeks away."

This is emotional-cognitive *continuity* that AI can't do today.

### 3.6 Temporal Views

Users can view their information across time windows:

| View | Shows |
|------|-------|
| **Day View** | What you said today, what's due today |
| **Week View** | What changed this week, weekly patterns |
| **Month View** | Your arcs, monthly rhythms |
| **Quarter View** | Plans vs execution, quarterly goals |
| **Seasonal View** | Energy patterns, seasonal themes |
| **Year View** | Identity shifts, annual trajectory |

This becomes the "time OS" inside OSQR's "thinking OS."

---

## 4. Data Model

### 4.1 Temporal Metadata Interface

```typescript
interface TemporalMetadata {
  created_at: string;           // ISO timestamp
  updated_at: string;           // ISO timestamp
  last_referenced_at: string;   // ISO timestamp
  activity_state: 'active' | 'paused' | 'abandoned' | 'archived';
  urgency_score: number;        // 0–1
  importance_score: number;     // 0–1
}
```

### 4.2 Entities That Receive Temporal Metadata

Phase 1 applies temporal fields to:

- `projects`
- `goals` / `commitments`
- `pkv_documents`
- `msc_items`
- `conversations` / `threads`
- `memory_items`

### 4.3 Extended Data Models

```typescript
TemporalEntity {
  id: string
  userId: string
  entityType: 'project' | 'goal' | 'pkv_document' | 'msc_item' | 'conversation' | 'memory_item'
  entityId: string
  created_at: timestamp
  updated_at: timestamp
  last_referenced_at: timestamp
  activity_state: 'active' | 'paused' | 'abandoned' | 'archived'
  urgency_score: number
  importance_score: number
  idle_days: number (computed)
}

TemporalCallback {
  id: string
  userId: string
  entityType: string
  entityId: string
  callbackType: 'idle_alert' | 'deadline_approaching' | 'cycle_complete' | 'pattern_detected' | 'goal_drift'
  message: string
  triggerCondition: object
  scheduledFor: timestamp
  deliveredAt: timestamp | null
  acknowledged: boolean
  snoozedUntil: timestamp | null
}

TemporalPattern {
  id: string
  userId: string
  patternType: 'weekly' | 'monthly' | 'quarterly' | 'seasonal' | 'custom'
  description: string
  occurrences: PatternOccurrence[]
  confidence: number
  firstDetected: timestamp
  lastOccurred: timestamp
  nextExpected: timestamp | null
}

PatternOccurrence {
  id: string
  patternId: string
  occurredAt: timestamp
  context: string
  entityIds: string[]
}

TemporalReview {
  id: string
  userId: string
  window: 'week' | 'month' | 'quarter' | 'year'
  periodStart: timestamp
  periodEnd: timestamp
  started: TemporalEntitySummary[]
  progressed: TemporalEntitySummary[]
  stalled: TemporalEntitySummary[]
  revived: TemporalEntitySummary[]
  archived: TemporalEntitySummary[]
  patternsDetected: TemporalPattern[]
  identityShifts: string[]
  generatedAt: timestamp
}

TemporalEntitySummary {
  entityType: string
  entityId: string
  title: string
  created_at: timestamp
  last_referenced_at: timestamp
  activity_state: string
  idle_days: number
  changeDescription: string
}
```

---

## 5. Backend Services

### 5.1 Temporal Engine

The core service that manages all temporal operations:

```typescript
// src/server/temporal/temporalEngine.ts

export class TemporalEngine {

  /**
   * Update temporal metadata when an entity is accessed or modified
   */
  static async touchEntity(params: {
    entityType: 'project' | 'goal' | 'pkv_document' | 'msc_item' | 'conversation' | 'memory_item';
    entityId: string;
    userId: string;
    event: 'created' | 'viewed' | 'mentioned' | 'updated' | 'completed' | 'paused' | 'archived';
  }): Promise<void> {
    // - update last_referenced_at
    // - bump updated_at when appropriate
    // - adjust activity_state based on event
    // - recalculate urgency_score if needed
  }

  /**
   * Get entities that haven't been referenced in X days
   */
  static async getIdleEntities(userId: string, options: {
    minDaysIdle: number;
    maxDaysIdle?: number;
    entityTypes?: Array<'project' | 'goal' | 'pkv_document' | 'msc_item'>;
    activityStates?: Array<'active' | 'paused'>;
  }): Promise<IdleEntitySummary[]> {
    // Return entities matching idle criteria
  }

  /**
   * Get temporal review for a time window
   */
  static async getTemporalReview(userId: string, options: {
    window: 'week' | 'month' | 'quarter' | 'year';
    endDate?: Date;
  }): Promise<TemporalReview> {
    // Generate review showing what started, progressed, stalled, etc.
  }

  /**
   * Detect recurring patterns in user behavior
   */
  static async detectPatterns(userId: string, options: {
    lookbackDays: number;
    minOccurrences: number;
  }): Promise<TemporalPattern[]> {
    // Identify weekly, monthly, quarterly, seasonal patterns
  }

  /**
   * Get temporal context for a topic/entity
   */
  static async getTemporalContext(userId: string, params: {
    entityType?: string;
    entityId?: string;
    topic?: string;
  }): Promise<TemporalContextSnippet | null> {
    // Return context like "Last discussed 6 weeks ago; at that time you wanted to finish by Q1"
  }

  /**
   * Schedule temporal callbacks based on rules
   */
  static async scheduleCallbacks(userId: string): Promise<void> {
    // Evaluate all entities against callback rules
    // Create TemporalCallback records for due items
  }

  /**
   * Get pending callbacks for a user
   */
  static async getPendingCallbacks(userId: string): Promise<TemporalCallback[]> {
    // Return undelivered callbacks ordered by priority
  }
}
```

### 5.2 Temporal Update Hooks

The engine hooks into existing flows:

| Action | Hook Location | Event Type |
|--------|---------------|------------|
| User opens a project | Project view | `viewed` |
| User mentions a project in chat | Conversation processor | `mentioned` |
| User opens a PKV document | PKV viewer | `viewed` |
| User edits an MSC item | MSC editor | `updated` |
| User completes a goal | Goal completion handler | `completed` |
| User pauses a project | Project status change | `paused` |
| User archives something | Archive handler | `archived` |

### 5.3 Idle Detection Job

A scheduled job (daily cron) that:

1. For each user:
   - Fetch entities idle > threshold (30, 60, 90 days)
   - Check against user's callback preferences
   - Create `TemporalCallback` records for items that need surfacing
   - Mark items as candidates for review

2. Threshold rules:
   - 30 days idle → gentle reminder
   - 60 days idle → "still important?" prompt
   - 90 days idle → suggest archiving or recommitment

### 5.4 Pattern Detection Job

A scheduled job (weekly) that:

1. Analyzes temporal data for patterns:
   - Weekly cycles (same day each week)
   - Monthly rhythms (start/end of month patterns)
   - Quarterly cycles (planning, review patterns)
   - Seasonal patterns (energy, focus, topic shifts)

2. Creates `TemporalPattern` records with confidence scores

3. Surfaces high-confidence patterns in weekly reviews

---

## 6. Time-Aware Context Injection

### 6.1 How It Works

When OSQR generates a response about a known entity:

1. **Lookup**: Check if the topic references a PKV doc, project, goal, or past conversation
2. **Fetch Context**: Call `TemporalEngine.getTemporalContext()`
3. **Inject**: Prepend a short temporal context snippet to the response

### 6.2 Context Snippet Format

```typescript
interface TemporalContextSnippet {
  entityType: string;
  entityId: string;
  lastReferencedAt: string;
  daysSinceReference: number;
  activityState: string;
  relevantHistory: string;  // "At that time you wanted to finish by Q1"
  currentStatus: string;    // "You marked it as 'active' but haven't referenced it since"
}
```

### 6.3 Example Output

> "We last discussed this project 6 weeks ago; at that time you wanted to finish by end of Q1. You marked it as 'active' but haven't referenced it since. Q1 ends in 3 weeks."

### 6.4 Controls

Context injection is:
- Optional (user can disable in Preferences)
- Heuristic-based (not on every message)
- Throttled (doesn't spam repeated context)
- Triggered only for significant time gaps (>7 days)

---

## 7. Temporal Views UI

### 7.1 Weekly Review View

Shows:
- What you started this week
- What progressed
- What stalled (active but not referenced)
- What you revived (re-engaged after idle)
- What you archived/completed

### 7.2 Monthly Review View

Shows:
- Monthly trajectory
- Goals set vs. achieved
- Projects started vs. completed
- Patterns detected
- Identity notes (language shifts, focus shifts)

### 7.3 Quarterly Review View

Shows:
- Quarter goals vs. actuals
- Major decisions made
- Projects completed
- What drifted
- Next quarter suggestions

### 7.4 Time Alerts Section

A small section (sidebar panel or dedicated view) showing:
- Pending temporal callbacks
- "Project 'VoiceQuote v1 Launch' hasn't been touched in 37 days."
- "Goal 'Hire Israel by Q2' was set 52 days ago. Q2 starts in 3 weeks."

### 7.5 Entity Time Badge

On key entities (projects, goals, MSC items), show a subtle badge:
- "Active · touched 3d ago"
- "Idle · 47d"
- "Paused · since Oct 15"

---

## 8. API Requirements

### 8.1 Temporal Engine Endpoints

```
POST /api/temporal/touch
  - Input: entityType, entityId, event
  - Output: updated temporal metadata

GET /api/temporal/idle
  - Input: minDaysIdle, entityTypes[], activityStates[]
  - Output: IdleEntitySummary[]

GET /api/temporal/review/:window
  - Input: window (week|month|quarter|year), endDate?
  - Output: TemporalReview

GET /api/temporal/patterns
  - Input: lookbackDays?, minOccurrences?
  - Output: TemporalPattern[]

GET /api/temporal/context
  - Input: entityType?, entityId?, topic?
  - Output: TemporalContextSnippet | null
```

### 8.2 Callback Endpoints

```
GET /api/temporal/callbacks
  - Output: TemporalCallback[] (pending)

POST /api/temporal/callbacks/:id/acknowledge
  - Output: success

POST /api/temporal/callbacks/:id/snooze
  - Input: snoozeUntil
  - Output: success

POST /api/temporal/callbacks/:id/dismiss
  - Output: success
```

### 8.3 View Endpoints

```
GET /api/temporal/views/week
  - Output: WeeklyReviewData

GET /api/temporal/views/month
  - Output: MonthlyReviewData

GET /api/temporal/views/quarter
  - Output: QuarterlyReviewData

GET /api/temporal/views/year
  - Output: YearlyReviewData
```

---

## 9. Integration Points

### 9.1 With PKV (Personal Knowledge Vault)

- All PKV documents receive temporal metadata
- Temporal context injected when referencing PKV items
- Idle PKV items surfaced for review
- Time-based relevance weighting in search results

### 9.2 With MSC (Master Summary Checklist)

- All MSC items (goals, projects, commitments) tracked temporally
- Deadline proximity alerts
- Idle goal detection
- Quarterly goal reviews powered by TIL

### 9.3 With Memory & Preferences

- User controls for callback frequency
- Category-specific idle thresholds
- Temporal view preferences
- Context injection toggle

### 9.4 With Thinking Loop

- Temporal context injected during Review stage
- "This contradicts something from 3 weeks ago"
- Time-based opportunity detection
- Delta tracking over time (how your thinking evolves)

### 9.5 With Supreme Court Mode

- Long-term trajectory analysis
- Multi-year identity evolution
- Life milestone anticipation
- Ruling drift detection over time
- Supreme Timeline visualization

### 9.6 With Weekly "Oscar Wins" Email

- Include temporal highlights:
  - What progressed this week
  - What's been idle
  - Patterns detected
  - Upcoming deadlines

---

## 10. Implementation Phases

### v0.1 — MVP (First Pass) ✅ START HERE

**See Section 2.3 above for the complete v0.1 scope.**

Summary:
- [ ] Add `last_referenced_at` and `activity_state` to projects/goals, PKV docs, MSC items
- [ ] Update those fields on view/open, mention in chat, explicit edit
- [ ] One endpoint: `GET /api/temporal/idle?minDaysIdle=X`
- [ ] One UI surface: "Time Alerts" list

**v0.1 is complete when:** A user can see a list of their idle entities. That's it.

---

### Phase 1 — Foundation (NOT in v0.1)

*Expand v0.1 with more fields, callbacks, and basic UI*

**Temporal Metadata Expansion:**
- [ ] Add `urgency_score` (0–1) field
- [ ] Add `importance_score` (0–1) field
- [ ] Create TemporalEntity tracking table (if needed beyond inline fields)
- [ ] Implement full `TemporalEngine.touchEntity()` with all event types

**Basic Callbacks:**
- [ ] Create TemporalCallback table
- [ ] Implement daily idle detection cron job
- [ ] Tiered idle thresholds (30/60/90 days with different messages)
- [ ] Callback display in UI with acknowledge/dismiss

**Minimal UI Expansion:**
- [ ] Time badge on entities ("Active · 3d ago", "Idle · 47d")
- [ ] Enhanced "Time Alerts" section with actions
- [ ] Simple weekly view (what changed this week)

---

### Phase 2 — Intelligence (NOT in v0.1)

*Pattern detection + context injection + reviews*

**Temporal Reasoning:**
- [ ] Implement `TemporalEngine.getTemporalContext()`
- [ ] Context injection in chat responses
- [ ] Contradiction detection with time context
- [ ] Temporal weighting in relevance scoring

**Pattern Detection:**
- [ ] Implement weekly pattern detection job
- [ ] Weekly, monthly, quarterly pattern recognition
- [ ] Pattern confidence scoring
- [ ] Pattern surfacing in reviews

**Enhanced Reviews:**
- [ ] Full weekly review view (started/progressed/stalled/revived)
- [ ] Monthly review view
- [ ] Quarterly review view
- [ ] Started/Progressed/Stalled/Revived categorization

**Advanced Callbacks:**
- [ ] Deadline proximity alerts
- [ ] Goal drift detection
- [ ] Cycle completion notifications
- [ ] Pattern reappearance alerts
- [ ] Snooze functionality

---

### Phase 3 — Full Temporal Intelligence (NOT in v0.1)

*Identity evolution + long-term trajectory*

**Identity Tracking:**
- [ ] Language shift detection over time
- [ ] Goal evolution tracking
- [ ] Identity phase recognition ("survival mode" → "scaling mode")
- [ ] Multi-year trajectory visualization

**Advanced Views:**
- [ ] Year view with identity arcs
- [ ] Seasonal pattern analysis
- [ ] Life milestone timeline
- [ ] Supreme Timeline integration

**Autonomous Temporal Reasoning:**
- [ ] Proactive temporal insights without prompting
- [ ] Cross-session pattern synthesis
- [ ] Long-term recommendation engine
- [ ] Predictive timing suggestions

---

## 11. Event Triggers

| Event | Trigger | Action |
|-------|---------|--------|
| Weekly | Every Sunday | Generate weekly review, check weekly patterns |
| Monthly | 1st of month | Generate monthly review, check monthly patterns |
| Quarter | Quarter transitions | Generate quarterly review, Q vs Q analysis |
| Idle 30 | Daily job | Gentle reminder callback |
| Idle 60 | Daily job | "Still important?" callback |
| Idle 90 | Daily job | Suggest archive or recommit |
| Deadline -7 | Daily job | Deadline approaching callback |
| Deadline -1 | Daily job | Urgent deadline callback |
| Pattern recurrence | Weekly job | Pattern reappearance alert |
| Goal drift | On conversation | Real-time drift detection |

---

## 12. User Preferences

### 12.1 Callback Preferences

- Enable/disable temporal callbacks
- Callback frequency (daily digest, real-time, weekly only)
- Idle thresholds per category (projects: 30d, goals: 14d, etc.)
- Snooze defaults

### 12.2 Context Injection Preferences

- Enable/disable temporal context in responses
- Verbosity (minimal, standard, detailed)
- Minimum gap to trigger (7d, 14d, 30d)

### 12.3 Review Preferences

- Auto-generate reviews (on/off)
- Review notification preferences
- Default view granularity

---

## 13. Success Metrics

| Metric | Target | Notes |
|--------|--------|-------|
| Entities with temporal metadata | 100% | All tracked entities |
| Callback engagement rate | 40%+ | Users who interact with callbacks |
| Idle project revival rate | 20%+ | Idle items brought back to active |
| Review view usage | 30%+ | Users who check temporal views |
| Context injection helpfulness | Track | User feedback on temporal context |
| Pattern detection accuracy | 70%+ | Validated patterns |
| Goal completion with TIL | +15% | Compared to without temporal nudges |
| Identity insight engagement | Track | Users who view/act on identity evolution |

---

## 14. What NOT to Build in v0.1

**v0.1 is intentionally minimal.** Resist the urge to expand scope.

### Explicitly OUT of v0.1:

- ❌ `urgency_score` or `importance_score` fields
- ❌ TemporalCallback table or any callback system
- ❌ TemporalPattern table or any pattern detection
- ❌ Any cron jobs or scheduled tasks
- ❌ Context injection in chat responses
- ❌ Time badges on entity cards
- ❌ Snooze/dismiss/acknowledge flows
- ❌ Weekly/monthly/quarterly review views
- ❌ Complex pattern visualization
- ❌ Multi-year trajectory dashboards
- ❌ Predictive timing algorithms
- ❌ Cross-user pattern analysis
- ❌ Calendar integrations
- ❌ Identity evolution UI

### v0.1 is ONLY:

1. Two fields: `last_referenced_at`, `activity_state`
2. Three update triggers: view, mention, edit
3. One endpoint: `/api/temporal/idle`
4. One UI: "Time Alerts" list

**Ship this first. Expand later.**

---

## 15. Why This Feature Exists

The Temporal Intelligence Layer exists to:

- Give OSQR the **cognitive faculty** current AI lacks
- Make OSQR the first AI that **understands human timing**
- Enable **proactive** intelligence based on time
- Support **long-term** user relationships (not just sessions)
- Power the **identity evolution** tracking that makes OSQR a life OS
- Differentiate OSQR from every **chatbot with memory**
- Create **compound value** — OSQR gets better the longer you use it

This is not a feature. It's a **foundational layer** that touches everything.

---

## 16. Summary

The Temporal Intelligence Layer (TIL) transforms OSQR from a chatbot into a **companion intelligence** that:

- Timestamps everything automatically
- Detects idle projects, goals, and commitments
- Surfaces forgotten items with context
- Recognizes patterns across days, weeks, months, quarters, and years
- Injects temporal context into responses
- Tracks identity evolution over time
- Provides time-based views (week, month, quarter, year)
- Delivers intelligent callbacks and nudges

**No AI understands time as a human lives it. OSQR will be the first.**

---

*This specification integrates with [ROADMAP.md](./ROADMAP.md), [MEMORY_AND_PREFERENCES.md](./MEMORY_AND_PREFERENCES.md), [THINKING_LOOP.md](./THINKING_LOOP.md), and [SUPREME-COURT-MODE.md](./SUPREME-COURT-MODE.md).*
