# Graph Report - Ashton Kitt Portfolio  (2026-06-15)

## Corpus Check
- 29 files · ~719,653 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 91 nodes · 87 edges · 18 communities (17 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0825b194`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 11|Community 11]]

## God Nodes (most connected - your core abstractions)
1. `scripts` - 4 edges
2. `buildGlowVars()` - 3 edges
3. `BorderGlow()` - 3 edges
4. `LinkedIn()` - 2 edges
5. `Facebook()` - 2 edges
6. `Twitter()` - 2 edges
7. `parseHSL()` - 2 edges
8. `buildGradientVars()` - 2 edges
9. `CometCard()` - 2 edges
10. `private` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (18 total, 1 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.11
Nodes (3): Facebook(), LinkedIn(), Twitter()

### Community 1 - "Community 1"
Cohesion: 0.12
Nodes (15): dependencies, framer-motion, lucide-react, react, react-dom, react-router-dom, @react-spring/web, three (+7 more)

### Community 2 - "Community 2"
Cohesion: 0.50
Nodes (4): scripts, build, dev, preview

### Community 5 - "Community 5"
Cohesion: 0.24
Nodes (7): BorderGlow(), buildGlowVars(), buildGradientVars(), COLOR_MAP, GRADIENT_KEYS, GRADIENT_POSITIONS, parseHSL()

## Knowledge Gaps
- **19 isolated node(s):** `name`, `version`, `private`, `type`, `dev` (+14 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `scripts` connect `Community 2` to `Community 1`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **What connects `name`, `version`, `private` to the rest of the system?**
  _19 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.10952380952380952 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._