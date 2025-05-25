# Playwright TypeScript Automation Framework

## 🚀 Features
- ✅ Parallel & Cross-browser execution
- 🌐 UI, API, and DB test support
- 📸 Screenshot & 🎥 Video capture on failure
- 🔍 Extent HTML & (future) ReportPortal integration
- 🔄 Multi-environment support via `.env`
- 🧪 Test data abstraction
- 🔧 Future-ready for MCP/AI-based insights

## 🔧 Setup

```bash
npm install
npx playwright install
```

## 🌍 Run Tests

```bash
ENV=qa npm test 
npm run test:parallel
npm run test:report
```

## 🧪 Add Tests
- `tests/ui`: UI automation via Playwright
- `tests/api`: API validation via Supertest
- `tests/db`: DB checks using `pg`

## 📈 Reports
- Open HTML report after tests: `npm run test:report`

## 🔮 Coming Soon
- ✅ MCP AI Analytics integration
- ✅ ReportPortal.io dashboard sync
