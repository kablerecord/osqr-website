# OSQR DEVELOPMENT ROADMAP

*Last Updated: December 2024*

---

## Overview

This document outlines the development phases for OSQR, the intelligent question-and-answer system designed to be a life operating system for builders, thinkers, and long-term strategists.

---

## Complete Feature List

A high-level view of everything OSQR will become:

- Multi-Model Brain
- Refine → Fire
- Three Thinking Modes
- Thinking Loop (Refine → Review → Commit)
- Personal Knowledge Vault (PKV)
- Master Summary Checklist (MSC)
- Memory & Preferences System
- **Temporal Intelligence Layer (TIL)**
- Automatic Memory & Insight Engine
- Proactive Suggestions
- Pattern Recognition
- Open Loop Detection
- Profile Builder
- Companion Side-Chat
- Panel Debate Mode
- Limit-Based Upgrade Prompts
- Referral System
- Weekly "Oscar Wins" Email
- Creator OS (White-Label)
- Life OS (Habits, Goals, Identity)
- Mobile & Desktop Apps
- Team/Enterprise OS
- The Supreme Court Button

---

## Phase 1 — Foundation Layer (Next 90 Days)

*What OSQR already does + what's nearly done*

### Multi-Model Brain
OSQR can use multiple AI models (Claude, GPT, Grok, etc.) and route questions to the best one.
- [ ] Model selection logic
- [ ] API integrations for each model
- [ ] Intelligent routing based on question type

### Refine → Fire
Before OSQR answers, it helps you ask better questions. Then you hit Fire, and it thinks deeply or uses multiple models.
- [ ] Question refinement UI
- [ ] "Fire" button with deep thinking mode
- [ ] Multi-model synthesis on Fire

### Thinking Loop (Manual Version)
The core intelligence workflow: Refine → Review → Commit. This is the pattern that turns raw thinking into refined, stored knowledge. Phase 1 is the manual, user-triggered version.

**Stage 1 — Refine:**
- [ ] "Refine" button on input
- [ ] Show refined version with diff highlights
- [ ] Basic delta display (% changed)

**Stage 2 — Review:**
- [ ] Single-model review pass
- [ ] Inline annotations for changes
- [ ] "Why did OSQR change this?" explanations

**Stage 3 — Commit:**
- [ ] "Save to Vault" button
- [ ] Simple PKV integration
- [ ] Basic categorization (goal, project, idea, note)

**See:** [THINKING_LOOP.md](./THINKING_LOOP.md) for full specification.

### Three Thinking Modes
Give users control over speed vs depth:
- [ ] **Quick** — Fast, single-model response
- [ ] **Thoughtful** — Deeper reasoning, more context
- [ ] **Contemplate** — Deep, multi-model, maximum intelligence

### Personal Knowledge Vault (PKV)
Upload docs, books, notes — OSQR indexes everything and becomes an expert in your world.
- [ ] Document upload interface
- [ ] File parsing (PDF, DOCX, TXT, MD)
- [ ] Indexing and embedding pipeline
- [ ] Semantic search across vault
- [ ] Context injection into conversations

### Limit-Based Upgrade Prompts
When you hit limits in Lite, OSQR smoothly shows upgrade options. This is the big revenue driver.
- [ ] Usage tracking per tier
- [ ] Graceful limit notifications
- [ ] Upgrade flow integration
- [ ] Stripe subscription management

### Referral System
Give friends 14 days of PRO. Earn storage, AI boosts, or Master time. This becomes our viral engine like Dropbox.
- [ ] Referral link generation
- [ ] Referral tracking
- [ ] Reward distribution (storage, boosts, time)
- [ ] Dashboard for referral stats

### Weekly "Oscar Wins" Email
A simple email showing what OSQR learned, remembered, or connected. This dramatically increases retention.
- [ ] Weekly digest generation
- [ ] Email template design
- [ ] Automated send schedule
- [ ] Unsubscribe handling

### Supreme Court Button (UI Only)
A greyed-out button visible from Day One. The mythic placeholder.
- [ ] Greyed-out sidebar button
- [ ] Tooltip: *"Locked. OSQR unlocks this feature only once you reach a Supreme Question."*
- [ ] On click: *"You have not yet reached a Supreme Question. Keep building your vault."*
- [ ] No backend implementation yet

**See:** [SUPREME-COURT-MODE.md](./SUPREME-COURT-MODE.md) for full specification.

### Memory & Preferences System
The user-facing control panel for OSQR's cognitive architecture. Not a typical settings page — this is the window into OSQR's mind and the user's control over their intelligence layer.

**Memory Panel (read-only for v1):**
- [ ] Display what OSQR has learned (identity, goals, patterns)
- [ ] Basic categorization (goals, projects, identity, patterns)
- [ ] Forget individual items

**Preferences Panel:**
- [ ] Communication style (Spartan ↔ Conversational, Direct ↔ Encouraging)
- [ ] Thinking mode defaults (Quick / Thoughtful / Contemplate)
- [ ] Proactivity slider (how often Oscar suggests things)
- [ ] Memory category permissions

**Privacy Panel:**
- [ ] Privacy Tier selector (A: No Learning / B: Local Only / C: Anonymized Sharing)
- [ ] Burn It button (nuclear memory wipe)
- [ ] Export tools (download PKV, MSC, full profile)
- [ ] "What OSQR knows about you" basic view

**Infrastructure:**
- [ ] API endpoints for memory & preferences
- [ ] Database models (MemoryItem, PreferenceSetting, PrivacySetting)
- [ ] UI tabs: Memory | Preferences | Privacy

**See:** [MEMORY_AND_PREFERENCES.md](./MEMORY_AND_PREFERENCES.md) for full specification.

### Infrastructure
- [ ] Next.js frontend deployment
- [ ] API backend setup
- [ ] Database configuration (user data, PKV, conversations)
- [ ] Authentication system
- [ ] Vercel deployment
- [ ] Stripe payment integration

---

## Phase 2 — Intelligence Layer (Months 3–6)

*Where OSQR feels alive*

### Master Summary Checklist (MSC)
OSQR builds a living checklist of your goals, projects, commitments, unfinished ideas, and recurring insights. This becomes your personal operating manual. **This is when OSQR becomes indispensable.**
- [ ] Goal capture and categorization
- [ ] Project tracking
- [ ] Commitment logging
- [ ] Unfinished idea surfacing
- [ ] Recurring insight detection
- [ ] Living document UI

### Automatic Memory & Insights
OSQR begins recognizing patterns, contradictions, forgotten goals, and stalled projects. It surfaces insights automatically: *"Hey, you're contradicting a goal from 3 weeks ago."*
- [ ] Conversation memory persistence
- [ ] Contradiction detection
- [ ] Goal drift monitoring
- [ ] Stalled project identification
- [ ] Automatic insight generation

### Pattern Recognition
OSQR starts seeing themes, repeated concerns, limiting beliefs, and behavior patterns over time. It reports these gently, making users more aware and capable.
- [ ] Theme extraction across conversations
- [ ] Repeated concern flagging
- [ ] Limiting belief identification
- [ ] Behavior pattern analysis
- [ ] Gentle reporting mechanism

### Profile Builder
OSQR gradually builds your profile through tiny, non-intrusive questions. This lets it become more personalized without a heavy onboarding process.
- [ ] Micro-question insertion logic
- [ ] Profile data schema
- [ ] Progressive personalization
- [ ] Profile visibility for user

### Open Loop Detection
If you start something and don't finish, OSQR brings it back later with context.
- [ ] Open loop identification
- [ ] Context preservation
- [ ] Timely resurfacing logic
- [ ] User acknowledgment flow

### Temporal Intelligence Layer (TIL) — Foundation
OSQR needs a real sense of time. Current AI systems are timeless — they live in a "floating present." TIL gives OSQR the cognitive faculty to reason about time as humans experience it.

**Temporal Metadata Standard:**
- [ ] Add temporal fields to all long-term entities (projects, goals, PKV docs, MSC items)
- [ ] `created_at`, `last_referenced_at`, `last_updated_at`
- [ ] `activity_state` (active / paused / abandoned / archived)
- [ ] `urgency_score` (0–1), `importance_score` (0–1)
- [ ] Automatic updates on view/edit/mention events

**Basic Idle Detection:**
- [ ] Daily job to identify idle entities (30/60/90 day thresholds)
- [ ] Simple callback system ("You haven't touched X in 45 days")
- [ ] User acknowledgment flow (snooze, dismiss, recommit)

**Minimal UI:**
- [ ] Time badge on entities ("Active · 3d ago", "Idle · 47d")
- [ ] Basic "Time Alerts" section in dashboard
- [ ] Simple weekly view (what changed this week)

**See:** [TEMPORAL_INTELLIGENCE_LAYER.md](./TEMPORAL_INTELLIGENCE_LAYER.md) for full specification.

### Companion Side-Chat Box
A small panel where Oscar comments like a coach: *"Here's what you meant." "Here's a better angle." "This links to something from last month."* It feels like a second brain whispering insights while you work.
- [ ] Side panel UI component
- [ ] Real-time commentary generation
- [ ] Context linking to past conversations
- [ ] Non-intrusive positioning

### Panel Debate Mode
Multiple AIs argue different sides. Oscar then synthesizes the "best consensus answer." **This alone will be incredibly viral.**
- [ ] Multi-model debate orchestration
- [ ] Argument presentation UI
- [ ] Synthesis engine
- [ ] Debate transcript storage

### Thinking Loop (Assisted Version)
Upgrade from manual to semi-automatic with multi-model review.

**Stage 1 — Refine (Enhanced):**
- [ ] Auto-refine on complex inputs
- [ ] Context-aware refinement using PKV
- [ ] Structured output options

**Stage 2 — Review (Multi-Model):**
- [ ] Multi-model review pass (Panel Debate integration)
- [ ] Contradiction detection against PKV
- [ ] Delta tracking per conversation
- [ ] Opportunity detection ("This connects to X from last month")

**Stage 3 — Commit (Smart):**
- [ ] Auto-suggest commit for high-value items
- [ ] Suggested MSC entries
- [ ] Connection mapping to related items
- [ ] Version history tracking

**Thinking Quality Index (TQI):**
- [ ] Track average delta per user
- [ ] Delta trend visualization
- [ ] Category-specific quality breakdown

**See:** [THINKING_LOOP.md](./THINKING_LOOP.md) for full specification.

### Supreme Question Detector (Pre-Trigger)
Begin building the detection system. OSQR can hint: *"You are close to a Supreme Question — keep building."*
- [ ] Vault-depth scoring
- [ ] Query-pattern clustering
- [ ] Convergence detection
- [ ] Hint messaging system

### Memory & Preferences Expansion
Upgrade the Phase 1 foundation into a full intelligence layer.

**Memory Panel Upgrades:**
- [ ] Editable memory items
- [ ] Suggested memory additions ("You mentioned this twice — save it?")
- [ ] Pattern detection hooks
- [ ] Contradiction surfacing
- [ ] Pin/unpin functionality
- [ ] Memory confidence scores

**Preferences Panel Upgrades:**
- [ ] Mode switching (Coach / Builder / Strategist / Quiet)
- [ ] Fine-tuned proactivity controls
- [ ] Memory category permissions (auto-store, always-ask, never-store)

**Identity Engine:**
- [ ] Identity alignment reminders
- [ ] Proactive contradiction detection
- [ ] Goal drift monitoring

**See:** [MEMORY_AND_PREFERENCES.md](./MEMORY_AND_PREFERENCES.md) for full specification.

---

## Phase 3 — Supreme Court Mode (Months 6–12)

*The full implementation of the mythic feature*

### Temporal Intelligence Layer (TIL) — Full Implementation
Upgrade from basic tracking to intelligent temporal reasoning.

**Temporal Reasoning:**
- [ ] Time-aware context injection in responses
- [ ] "This contradicts a belief you expressed in April"
- [ ] "This matches a pattern that shows up every 6–8 weeks"
- [ ] Temporal weighting in relevance scoring (recent > old)

**Pattern Detection:**
- [ ] Weekly pattern detection job
- [ ] Monthly, quarterly, seasonal pattern recognition
- [ ] Pattern confidence scoring
- [ ] Pattern surfacing in reviews

**Enhanced Temporal Reviews:**
- [ ] Full weekly review view (started/progressed/stalled/revived)
- [ ] Monthly review view with trajectory analysis
- [ ] Quarterly review view (plans vs. execution)
- [ ] Identity notes (language shifts, focus shifts)

**Advanced Callbacks:**
- [ ] Deadline proximity alerts
- [ ] Goal drift detection
- [ ] Cycle completion notifications
- [ ] Pattern reappearance alerts
- [ ] "Q2 starts in 3 weeks; here's what you set for Q1"

**User Value:** OSQR becomes the first AI that understands how life actually unfolds in time — not just what you said, but *when* you said it, how long it's been, and whether you're moving forward or looping.

**See:** [TEMPORAL_INTELLIGENCE_LAYER.md](./TEMPORAL_INTELLIGENCE_LAYER.md) for full specification.

### Supreme Question Detector
- [ ] Impact scoring
- [ ] Readiness classification
- [ ] Trigger conditions + thresholds
- [ ] Automatic detection and notification

### Long-Running Job Engine
- [ ] Async pipeline execution
- [ ] Pause/resume capability
- [ ] Multi-round, multi-model orchestration
- [ ] Evidence snapshot system
- [ ] Failure recovery

### Evidence Brief Generator
- [ ] Pull past docs, notes, queries from PKV
- [ ] Compile summaries, constraints, assets
- [ ] Build assumptions table
- [ ] Document prior attempts

### Multi-Model Reasoning Pipeline
- [ ] Independent model memos
- [ ] Cross-examination & adversarial passes
- [ ] Reconciliation system
- [ ] Scenario generation
- [ ] Consensus builder

### Ruling Document System
- [ ] Legendary Summary generator
- [ ] Deep research compilation
- [ ] Scorecards & options matrices
- [ ] Identity shift section
- [ ] Step-by-step timeline builder
- [ ] Risk analysis module

### Calendar & Task Integration
- [ ] Push milestones to user calendar
- [ ] Master Checklist link
- [ ] Automated reminders
- [ ] 30/90/365-day checkpoints

### Badge System
- [ ] "Supreme Court Achiever — Apex Level"
- [ ] Badge reveal animation
- [ ] Badge persistence in user profile
- [ ] Badge-click to open past rulings

### PKV Integration
- [ ] Index ruling into PKV
- [ ] Link decisions to user graph
- [ ] Drift detection
- [ ] Ruling re-evaluation logic

### UX & Messaging
- [ ] Trigger modal ("You reached a Supreme Question...")
- [ ] Upgrade gating ("Requires Max Yearly...")
- [ ] Progress indicator UI
- [ ] Final ruling reveal UI

### Thinking Loop (Intelligent Version)
Background processing with proactive suggestions.

**Background Thinking Agents:**
- [ ] Auto-run loop on complex inputs
- [ ] Proactive opportunity detection
- [ ] Cross-session pattern synthesis
- [ ] Contradiction alerts without user prompting

**Auto-Generated Artifacts:**
- [ ] Spec document generation for devs/power users
- [ ] Version history visualization
- [ ] Idea evolution timeline

**Advanced TQI:**
- [ ] Skill trajectory tracking
- [ ] Improvement area recommendations
- [ ] Comparative analysis (your thinking vs. 3 months ago)

**See:** [THINKING_LOOP.md](./THINKING_LOOP.md) for full specification.

---

## Phase 4 — Expansion Layer (Months 6–12)

*The big leverage features*

### Proactive Suggestions
OSQR begins offering helpful nudges: *"Want to revisit this idea?" "You haven't talked about your fitness goals in 2 weeks." "Did you mean to finish this project?"* It's not pushy — it's intelligent.
- [ ] Nudge trigger logic
- [ ] Context-aware suggestion generation
- [ ] Frequency controls (not annoying)
- [ ] User preference for nudge types

### Life OS
OSQR starts supporting routines, rituals, fitness, finances, relationships, mindset and identity. Users begin treating OSQR as their personal command center.
- [ ] Routine tracking
- [ ] Ritual reminders
- [ ] Fitness goal integration
- [ ] Finance awareness (optional)
- [ ] Relationship check-ins
- [ ] Identity and mindset coaching

### Creator OS (White-Label Platform)
Authors, coaches, and creators can build their OWN version of OSQR powered by their books and frameworks. **This is a multi-billion-dollar ecosystem.**
- [ ] White-label configuration system
- [ ] Custom branding options
- [ ] Creator content ingestion
- [ ] Revenue sharing model
- [ ] Creator dashboard

### Team / Enterprise OS
Real estate teams, construction companies, franchise groups, creators — they can run entire operations inside OSQR. **This is where you transition from SaaS to OS.**
- [ ] Team workspaces
- [ ] Team PKVs (shared knowledge)
- [ ] SOP sharing and enforcement
- [ ] Meeting summaries
- [ ] Shared MSC boards
- [ ] Role-based permissions
- [ ] Enterprise billing

### Mobile & Desktop Apps
Daily, lightweight usage becomes effortless: quick voice capture, mobile indexing, desktop always-on assistant. **This is when OSQR becomes part of a user's life.**
- [ ] iOS app
- [ ] Android app
- [ ] macOS desktop app
- [ ] Windows desktop app
- [ ] Voice capture integration
- [ ] Mobile PKV sync
- [ ] Always-on assistant mode

---

## Phase 5 — Life Operating System (12–24 months)

### Temporal Intelligence Layer (TIL) — Autonomous
Full temporal intelligence with identity evolution and long-term trajectory.

**Identity Evolution Tracking:**
- [ ] Language shift detection over time
- [ ] Goal evolution tracking (survival → scaling → legacy)
- [ ] Identity phase recognition
- [ ] "You've been operating at Level 4 since July"

**Advanced Temporal Views:**
- [ ] Year view with identity arcs
- [ ] Multi-year trajectory visualization
- [ ] Seasonal pattern analysis
- [ ] Life milestone timeline
- [ ] Supreme Timeline integration

**Autonomous Temporal Reasoning:**
- [ ] Proactive temporal insights without prompting
- [ ] Cross-session pattern synthesis
- [ ] Long-term recommendation engine
- [ ] Predictive timing suggestions
- [ ] "Based on your patterns, you'll hit burnout in 6 weeks"

**See:** [TEMPORAL_INTELLIGENCE_LAYER.md](./TEMPORAL_INTELLIGENCE_LAYER.md) for full specification.

### Supreme Court Expansion
- [ ] Reopen past cases
- [ ] Multi-year life-compass dashboard
- [ ] Supreme Timeline visualization
- [ ] Multi-model transparency views
- [ ] Cross-user (opt-in) anonymized insight patterns

### Advanced Intelligence
- [ ] Predictive recommendations
- [ ] Long-term trajectory modeling
- [ ] Life milestone anticipation
- [ ] Deep identity evolution tracking

### Thinking Loop (Autonomous Version)
OSQR maintains its own intelligence layer.

**Self-Improving System:**
- [ ] Fully autonomous thinking cycles
- [ ] OSQR proposes roadmap/spec updates (for devs)
- [ ] Self-improving refinement algorithms
- [ ] OSQR evolves its own philosophy based on user patterns

**Meta-Intelligence:**
- [ ] Cross-user pattern learning (opt-in, anonymized)
- [ ] Domain-specific loop customization
- [ ] Team thinking loops for Enterprise

**See:** [THINKING_LOOP.md](./THINKING_LOOP.md) for full specification.

---

## Subscription Tiers

### Lite (Free)
- Core chat functionality
- Limited PKV storage
- Quick thinking mode only
- See Supreme Court button (greyed out)

### Pro (Monthly)
- Expanded PKV
- All three thinking modes
- Refine → Fire
- Weekly Oscar Wins email
- See Supreme Court button (greyed out)
- Cannot activate Supreme Court Mode

### Max (Yearly)
- Full PKV access
- All features
- Panel Debate Mode
- **Can activate Supreme Court Mode when triggered**
- Priority support
- Badge collection
- Early access to new features

### Enterprise
- Team workspaces
- Shared PKVs
- SOP management
- Custom integrations
- Dedicated support

---

## Key Principles

1. **Mythology from Day One** — Users should always see what lies ahead, even if it's locked.

2. **Earned, Not Bought** — Supreme Court Mode is triggered by OSQR, not purchased directly.

3. **Slow is Intentional** — Some features take hours or days because depth requires time.

4. **Prestige Matters** — Status and achievement mechanics drive long-term retention.

5. **Life Operating System** — OSQR is not just a chat tool; it's a system for life decisions.

6. **Viral by Design** — Referrals, Panel Debate, Supreme Court screenshots — built for sharing.

7. **Indispensable by Phase 2** — The Master Summary Checklist is the lock-in moment.

8. **Every Idea Improves** — The Thinking Loop ensures nothing passes through OSQR unchanged. Input becomes refined, reviewed, and stored.

9. **Time-Aware Intelligence** — OSQR understands time as humans experience it. Current AI lives in a "floating present" — OSQR tracks when things happened, how long they've been idle, what patterns recur, and how identity evolves over time.

---

## Success Metrics

| Metric | Target |
|--------|--------|
| V1 user onboarding | Smooth, <2 min |
| Monthly active users | Track growth |
| Pro conversion rate | 10-15% |
| Max Yearly conversion | 5-10% of Pro |
| Supreme Court trigger rate | 0.1-2% of Max users |
| SC upgrade conversion | 30-60% when triggered |
| User retention (6 mo) | 60%+ |
| Referral viral coefficient | >1.0 |
| Weekly email open rate | 40%+ |
| NPS score | 50+ |

---

## Document Index

- [SUPREME-COURT-MODE.md](./SUPREME-COURT-MODE.md) — Full Supreme Court Mode specification
- [MEMORY_AND_PREFERENCES.md](./MEMORY_AND_PREFERENCES.md) — Memory, Preferences & Identity Engine specification
- [THINKING_LOOP.md](./THINKING_LOOP.md) — Thinking Loop (Refine → Review → Commit) specification
- [TEMPORAL_INTELLIGENCE_LAYER.md](./TEMPORAL_INTELLIGENCE_LAYER.md) — Temporal Intelligence Layer (TIL) specification

---

## Notes

- All timelines are directional and may shift based on user feedback and technical complexity.
- Supreme Court Mode development should not block Phase 1 launch — the greyed-out button is sufficient.
- Focus on core value delivery first, mythic features second (but always visible).
- Phase 2 (MSC + Memory) is the retention inflection point — prioritize accordingly.

---

*This roadmap is a living document and will be updated as development progresses.*
