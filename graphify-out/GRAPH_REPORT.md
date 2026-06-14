# Graph Report - Ashton Kitt Portfolio  (2026-06-13)

## Corpus Check
- 24 files · ~284,477 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 68 nodes · 61 edges · 17 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]

## God Nodes (most connected - your core abstractions)
1. `scripts` - 4 edges
2. `LinkedIn()` - 2 edges
3. `Facebook()` - 2 edges
4. `Twitter()` - 2 edges
5. `private` - 1 edges
6. `dev` - 1 edges
7. `build` - 1 edges
8. `preview` - 1 edges
9. `@vitejs/plugin-react` - 1 edges
10. `vite` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (17 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.15
Nodes (3): Facebook(), LinkedIn(), Twitter()

### Community 1 - "Community 1"
Cohesion: 0.17
Nodes (11): devDependencies, vite, @vitejs/plugin-react, name, private, scripts, build, dev (+3 more)

### Community 2 - "Community 2"
Cohesion: 0.25
Nodes (8): dependencies, framer-motion, lucide-react, react, react-dom, react-router-dom, @react-spring/web, three

## Knowledge Gaps
- **16 isolated node(s):** `name`, `version`, `private`, `type`, `dev` (+11 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 2` to `Community 1`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **What connects `name`, `version`, `private` to the rest of the system?**
  _16 weakly-connected nodes found - possible documentation gaps or missing edges._