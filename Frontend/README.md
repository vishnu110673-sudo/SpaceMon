# AstroGuard

AstroGuard is a React dashboard prototype for astronaut health and spacecraft environment monitoring. Its mock mode demonstrates the complete UI without a running backend.

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

Vite prints a local URL (usually `http://localhost:5173`). Create a production build with `npm run build`.

## Environment variables

Copy `.env.example` to `.env.local` and set:

| Variable | Default | Description |
| --- | --- | --- |
| `VITE_API_URL` | `http://localhost:8000` | Backend origin; API requests are made under this URL. |
| `VITE_USE_MOCK` | `false` | Set to `true` to use the included synthetic demo data. |

Restart Vite after changing environment variables. Mock mode includes a demonstration scenario with a three-day sleep decline, elevated heart rate, and a solar-event warning. **This scenario is synthetic and is not medical advice.**

## Mock and real API

Set `VITE_USE_MOCK=true` to run entirely from `src/mocks`; no backend is needed. Set it to `false` and configure `VITE_API_URL` to use the endpoints in `src/api/client.ts`:

- `GET /api/health/latest`
- `GET /api/health/history?hours=24`
- `GET /api/sleep?days=7`
- `GET /api/alerts`
- `GET /api/environment/latest`
- `GET /api/space-weather`
- `GET /api/reports/daily`
- `GET /api/reports/weekly`
- `POST /api/voice/query` with `{ "text": "..." }`
- `POST /api/wellbeing/checkin` with `{ "mood": 1, "stress": 1, "notes": "..." }`
- `GET /api/wellbeing/history?days=7` (used to populate the check-in trend)
- `GET /api/activity?days=7` (used for the dashboard activity chart)

The backend should return JSON matching the interfaces in `src/types/index.ts`. The wellbeing history and activity endpoints are additional endpoints beyond the required API list; if either is unavailable, the page displays the API error instead of inventing a trend.

## Safety and privacy

This dashboard is a prototype. It is not a diagnostic or emergency response system. Voice analysis is optional, requires the user's action to start, and is not a mental health diagnosis. Voice recognition is performed by the browser and may depend on browser or operating-system services; AstroGuard does not record or upload audio, only recognized text after submission.
