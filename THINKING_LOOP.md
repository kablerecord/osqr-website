# OSQR THINKING LOOP

### Refine → Review → Commit

*The foundational architecture pattern for how OSQR processes ideas, improves them, and updates itself.*

---

## 1. Overview

The Thinking Loop is OSQR's core intelligence workflow — a 3-stage process that transforms raw user input into refined, reviewed, and permanently stored knowledge.

This is not just a feature. It's the **connective tissue** that ties together:
- Refine → Fire
- Panel Debate Mode
- PKV (Personal Knowledge Vault)
- MSC (Master Summary Checklist)
- Memory & Preferences System

The Thinking Loop turns OSQR from a chatbot into a **self-improving intelligence partner**.

---

## 2. Origin Story

This architecture emerged from the founder's actual workflow:

1. **Discuss ideas with ChatGPT** (brainstorming, exploration)
2. **Summarize and formalize** (structure the thinking)
3. **Send to Claude for refinement** (second opinion, 5-15% improvements)
4. **Commit to markdown documents** (permanent storage, version control)
5. **Update roadmap and specs** (integrate into the system)

This manual process produced consistent results:
- High-quality outputs
- Small but meaningful improvements (5-15% delta)
- Permanent audit trail
- Compounding knowledge base

**OSQR automates this entire loop.**

---

## 3. The Three Stages

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   [RAW INPUT] → [REFINE] → [REVIEW] → [COMMIT] → [PKV/MSC] │
│                                                             │
│       Stage 1      Stage 2      Stage 3       Output        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

### Stage 1: REFINE

OSQR cleans, clarifies, and sharpens the user's input.

**What happens:**
- Extracts the core intent
- Rewrites unclear sections
- Reduces noise and tangents
- Identifies missing context
- Determines true goals
- Structures the thinking
- Produces a "Refined Draft"

**User experience:**
- User submits raw idea, question, or thought
- OSQR shows the refined version
- User can accept, edit, or regenerate

**This mirrors:** The "Refine" step in Refine → Fire

---

### Stage 2: REVIEW

OSQR runs a multi-model "second opinion" pass.

**What happens:**
- Critique from different AI perspectives
- 5-15% improvements identified
- Contradiction checks against existing PKV
- Missing steps flagged
- Opportunity suggestions surfaced
- Structural recommendations
- Alignment check with user's goals/identity
- Produces a "Final Draft"

**User experience:**
- OSQR shows the delta (what changed and why)
- Inline annotations for significant changes
- Option to view full debate transcript (Panel Debate Mode)

**This mirrors:** The "Fire" multi-model synthesis and Panel Debate Mode

---

### Stage 3: COMMIT

OSQR formalizes the improved idea into permanent artifacts.

**What happens:**
- Saves to PKV with proper categorization
- Updates MSC if goals/projects detected
- Creates/updates spec documents (for devs/power users)
- Logs version history
- Adds dependencies and connections
- Tags related past conversations
- Triggers follow-up reminders if needed

**User experience:**
- One-click "Commit to Vault"
- Shows what was saved and where
- Links to related items

**This is NEW:** Not currently in the roadmap as a unified feature

---

## 4. Why This Matters

### 4.1 OSQR Becomes Self-Improving

Every idea that passes through the loop:
- Gets refined (quality increases)
- Gets reviewed (errors caught)
- Gets stored (knowledge compounds)
- Gets connected (patterns emerge)

Over time, OSQR's understanding of the user deepens exponentially.

### 4.2 Users Get Consistent Quality

Even messy, half-formed thoughts produce high-quality outputs.

The loop normalizes input quality — a sloppy prompt and a polished prompt both produce excellent results.

### 4.3 Every Idea Becomes a Permanent Artifact

Nothing is lost. Every conversation can become:
- A PKV entry
- An MSC item
- A spec document
- A connection to past thinking

### 4.4 OSQR Develops a "Thinking Personality"

The loop creates consistency in how OSQR processes information.

Users learn to trust the pattern:
- "I can dump raw thoughts and OSQR will clean them up"
- "OSQR will catch what I missed"
- "Everything important gets saved automatically"

---

## 5. The 5-15% Delta Principle

A key insight from the founder's workflow:

> "Claude averages 5-15% changes. It's never a full rewrite."

This means:
- **High-quality inputs** lead to small refinements
- **Low-quality inputs** lead to larger improvements
- **The delta is measurable** — OSQR can track improvement over time

### Future Feature: Thinking Quality Index (TQI)

OSQR can eventually measure:
- Average delta per user (how much improvement needed)
- Delta trend over time (is user thinking improving?)
- Category-specific deltas (better at business, worse at personal)
- Skill trajectory visualization

This becomes a **founder/power-user feature** and potential marketing differentiator.

---

## 6. Components Required

### 6.1 Refinement Engine

| Component | Description |
|-----------|-------------|
| Intent Extractor | Determines what user really wants |
| Clarity Rewriter | Fixes ambiguous language |
| Structure Optimizer | Organizes scattered thoughts |
| Context Detector | Identifies missing information |
| Goal Aligner | Connects to user's known objectives |

**Output:** Refined Draft

---

### 6.2 Review Engine

| Component | Description |
|-----------|-------------|
| Multi-Model Reviewer | Gets perspectives from different AI models |
| Delta Analyzer | Calculates improvement percentage |
| Contradiction Checker | Compares against PKV for conflicts |
| Opportunity Detector | Suggests expansions and connections |
| Quality Scorer | Rates the refined output |

**Output:** Final Draft + Delta Report

---

### 6.3 Commitment Engine

| Component | Description |
|-----------|-------------|
| PKV Writer | Saves to Personal Knowledge Vault |
| MSC Updater | Adds goals/projects to Master Summary Checklist |
| Spec Generator | Creates markdown documents (for devs) |
| Version Logger | Tracks idea evolution over time |
| Connection Mapper | Links to related past items |
| Reminder Scheduler | Sets follow-up triggers |

**Output:** Stored artifacts + confirmation

---

### 6.4 Thinking Loop UI

| Element | Description |
|---------|-------------|
| Progress Indicator | Shows current stage (Refine → Review → Commit) |
| Inline Changes | Highlights what was modified |
| Side-by-Side View | Original vs. refined comparison |
| Delta Badge | Shows improvement percentage |
| Commit Button | One-click save to vault |
| History Panel | View past versions of the idea |

---

## 7. Implementation Phases

### Phase 1 — Manual Loop (Next 90 Days)

**MVP version — user-triggered, visible process**

- [ ] "Refine" button on input
- [ ] Show refined version with diff highlights
- [ ] Basic delta display (% changed)
- [ ] "Save to Vault" button
- [ ] Simple PKV integration
- [ ] Basic categorization (goal, project, idea, note)

**User Experience:**
User types → clicks Refine → sees improved version → clicks Save

---

### Phase 2 — Assisted Loop (Months 3-6)

**Semi-automatic with multi-model review**

- [ ] Multi-model review pass (Panel Debate integration)
- [ ] Contradiction detection against PKV
- [ ] Suggested MSC entries
- [ ] Inline annotations explaining changes
- [ ] Delta tracking per conversation
- [ ] "Why did OSQR change this?" explanations
- [ ] Auto-suggest commit for high-value items

**User Experience:**
User types → OSQR auto-refines → shows review notes → suggests save locations

---

### Phase 3 — Intelligent Loop (Months 6-12)

**Background processing with proactive suggestions**

- [ ] Background thinking agents
- [ ] Auto-run loop on complex inputs
- [ ] Opportunity detection ("This connects to X from last month")
- [ ] Contradiction alerts
- [ ] Auto-generated spec documents
- [ ] Version history visualization
- [ ] Thinking Quality Index (TQI) tracking

**User Experience:**
User types → OSQR processes in background → surfaces insights proactively

---

### Phase 4 — Autonomous Loop (12-24 months)

**OSQR maintains its own intelligence layer**

- [ ] Fully autonomous thinking cycles
- [ ] OSQR proposes roadmap/spec updates (for devs)
- [ ] Cross-session pattern synthesis
- [ ] Long-term trajectory analysis
- [ ] Self-improving refinement algorithms
- [ ] OSQR evolves its own philosophy based on user patterns

**User Experience:**
OSQR becomes a true thinking partner that grows alongside the user

---

## 8. Integration Points

### 8.1 With Refine → Fire

The Thinking Loop **extends** Refine → Fire:
- Refine → Fire handles the immediate question
- Thinking Loop handles the knowledge capture afterward

### 8.2 With Panel Debate Mode

The Review stage **can invoke** Panel Debate:
- For high-stakes decisions, Review becomes a full debate
- For simple items, Review is a quick multi-model check

### 8.3 With PKV

The Commit stage **writes to** PKV:
- Categorized entries
- Embeddings for semantic search
- Connection mapping

### 8.4 With MSC

The Commit stage **updates** MSC:
- New goals detected → added to MSC
- New projects detected → added to MSC
- Open loops detected → tracked in MSC

### 8.5 With Memory & Preferences

The loop **respects** user preferences:
- What categories to auto-save
- What to always ask about
- What to never store
- Proactivity level for suggestions

---

## 9. API Requirements

### 9.1 Refinement Endpoints

```
POST /api/thinking/refine
  - Input: raw_text, context_ids[]
  - Output: refined_text, changes[], delta_percentage

GET /api/thinking/refine/:id
  - Output: refinement details, history
```

### 9.2 Review Endpoints

```
POST /api/thinking/review
  - Input: refined_text, review_depth (quick|standard|deep)
  - Output: final_text, review_notes[], contradictions[], opportunities[]

GET /api/thinking/review/:id
  - Output: full review transcript
```

### 9.3 Commit Endpoints

```
POST /api/thinking/commit
  - Input: final_text, target (pkv|msc|spec), category, tags[]
  - Output: artifact_id, connections[], version

GET /api/thinking/history/:idea_id
  - Output: version_history[], evolution_timeline
```

### 9.4 Analytics Endpoints

```
GET /api/thinking/stats
  - Output: avg_delta, delta_trend, category_breakdown, tqi_score

GET /api/thinking/quality/:timeframe
  - Output: thinking_quality_index, improvement_areas[]
```

---

## 10. Data Models

```
ThinkingSession {
  id: string
  userId: string
  rawInput: string
  refinedOutput: string
  finalOutput: string
  deltaPercentage: number
  reviewNotes: ReviewNote[]
  contradictions: Contradiction[]
  opportunities: Opportunity[]
  committedTo: CommitTarget[]
  createdAt: timestamp
  completedAt: timestamp
}

ReviewNote {
  id: string
  sessionId: string
  type: 'improvement' | 'suggestion' | 'warning'
  content: string
  source: string (model name)
}

CommitTarget {
  id: string
  sessionId: string
  type: 'pkv' | 'msc' | 'spec'
  artifactId: string
  category: string
  version: number
}

ThinkingQualityMetric {
  id: string
  userId: string
  date: date
  avgDelta: number
  sessionCount: number
  categoryBreakdown: object
}
```

---

## 11. Success Metrics

| Metric | Target | Notes |
|--------|--------|-------|
| Loop completion rate | 70%+ | Users who complete Refine → Review → Commit |
| Average delta | 5-15% | Healthy range indicates quality input |
| Commit rate | 50%+ | Users who save refined outputs |
| PKV growth rate | Consistent | Steady vault expansion |
| Contradiction catch rate | Track | How often Review finds conflicts |
| TQI improvement | Positive trend | Users thinking more clearly over time |
| Time to commit | <30 seconds | Fast enough to not interrupt flow |

---

## 12. UX Principles

### 12.1 Non-Intrusive

The loop should feel natural, not bureaucratic:
- Quick items → minimal friction
- Deep items → more visible process
- User controls depth preference

### 12.2 Transparent

Users should always understand:
- What changed and why
- Where things are being saved
- How to access history

### 12.3 Valuable

Every interaction through the loop should feel worthwhile:
- Visible improvement
- Meaningful storage
- Clear connections

### 12.4 Optional

Power users can skip stages:
- Direct commit without review
- Refine without commit
- Full loop for important items

---

## 13. Future Evolution

### 13.1 Cross-User Pattern Learning (Opt-in)

Anonymized patterns from Thinking Loops could improve:
- Refinement algorithms
- Common contradiction types
- Opportunity detection

### 13.2 Domain-Specific Loops

Custom loops for:
- Business planning
- Personal development
- Creative writing
- Technical architecture

### 13.3 Team Thinking Loops

For Enterprise:
- Shared refinement standards
- Team review passes
- Collaborative commits

---

## 14. Summary

The Thinking Loop is OSQR's **cognitive backbone** — the pattern that transforms raw human thinking into refined, reviewed, and permanently stored intelligence.

It unifies existing features (Refine → Fire, Panel Debate, PKV, MSC) into a coherent workflow that:
- Improves every idea that passes through it
- Creates a permanent knowledge base
- Enables self-improvement tracking
- Makes OSQR feel like a true thinking partner

**This is what separates OSQR from every other AI assistant.**

---

*This specification integrates with [ROADMAP.md](./ROADMAP.md), [MEMORY_AND_PREFERENCES.md](./MEMORY_AND_PREFERENCES.md), and [SUPREME-COURT-MODE.md](./SUPREME-COURT-MODE.md).*
