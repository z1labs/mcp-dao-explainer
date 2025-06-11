# 🗳️ DAO Proposal Explainer
DAO Explainer is an AI-powered tool that summarizes governance proposals from Snapshot, Agora, or any JSON-based DAO backend into short, readable overviews — powered by the Model Context Protocol (MCP).

Built to improve voter comprehension, reduce governance fatigue, and enable explainability for agent-based DAOs.

## 🔗 Live Demo → Coming soon via Nexus
📄 Spec → Part of the MCP initiative at https://mcp.z1labs.ai

🌐 Roadmap → https://z1labs.ai/roadmap

## 🧠 What It Does:
- ⛓️ Fetches live DAO proposals from Snapshot or other API endpoints
- 📑 Parses raw metadata and structures proposal JSON for LLM input
- 🧾 Summarizes proposals using contextual AI (GPT-4 / Claude / local)
- 💾 Optionally stores summary context onchain via MCP (putContext)
- 🏷️ Attaches proposal hash for auditability and replay

Supports multi-model output (e.g., “TL;DR”, “Pros & Cons”, “Risks”).

## 🧩 Architecture
This repo includes:
- /parser — DAO metadata fetchers + normalizers (e.g., Snapshot, Tally, Agora)
- /agents — Prompt templates and model formatters
- /context — MCP bundler (model hash, manifest, CID)
- /contracts — Optional integration with ContextStore.sol
- /ui — Frontend components (React or embedded module)

Optional: You can run this headlessly as a CLI or microservice.

## 🌐 Integrations
Supported sources:
- Snapshot.org
- Agora
- Tally
- Custom DAOs (via JSON endpoint)

Pluggable format — any DAO proposal engine returning structured JSON can be used.

## 🧩 Use Cases:
- LLM voters in DAOs
- Human-readable governance summaries
- DAO newsletters & bots
- Onchain memory for governance tracking
- Governance badges & credentials (paired with Verifiable Context)