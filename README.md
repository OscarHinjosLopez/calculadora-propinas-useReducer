# Tip & Bill Calculator (React + TypeScript + Vite)

Small example app that calculates order subtotal, tip and total. It demonstrates two common React state patterns: a reducer-based state (`order-reducer.ts`) and a small custom hook (`useOrder.ts`) used by the UI.

## Features

- Add items from a sample menu
- Keep item quantities
- Choose a tip percentage
- Show subtotal, tip amount and total
- "Place order" clears the order (reset)

## Tech stack

- React 18 + TypeScript
- Vite (dev server, build)
- Tailwind CSS for styling

## Project structure (key files)

- [src/App.tsx](src/App.tsx) — App root and component composition
- [src/hooks/useOrder.ts](src/hooks/useOrder.ts) — Hook that manages order state with `useState`
- [src/reducers/order-reducer.ts](src/reducers/order-reducer.ts) — Reducer implementation and action types
- [src/components/MenuItem.tsx](src/components/MenuItem.tsx) — Menu item UI
- [src/components/OrderContents.tsx](src/components/OrderContents.tsx) — Order list UI
- [src/components/TipPercentageForm.tsx](src/components/TipPercentageForm.tsx) — Tip input form
- [src/components/OrderTotals.tsx](src/components/OrderTotals.tsx) — Totals and place-order button
- [src/types/index.ts](src/types/index.ts) — Shared TypeScript types
- [src/data/db.ts](src/data/db.ts) — Sample menu data

## Requirements

- Node.js 16 or newer
- npm (or yarn/pnpm)

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

The Vite dev server runs on http://localhost:5173 by default.

## Build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Notes and implementation details

- The reducer in [src/reducers/order-reducer.ts](src/reducers/order-reducer.ts) returns a typed `OrderState` and ensures each order item includes a `quantity` field (`OrderItem`).
- The project includes both a reducer implementation and the `useOrder` hook; this was done for demonstration. Choose one approach (centralized reducer or hook) if you prefer a single source of truth.
- Tip value is stored as a decimal (e.g. `0.15` for 15%) and multiplied by subtotal to compute the tip amount.

## Scripts (from package.json)

- `npm run dev` — start Vite dev server
- `npm run build` — compile TypeScript and build production assets
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint checks

## Contributing

Small, focused PRs are welcome. Please describe the change and include a short rationale.

## License

Personal / unlicensed project. Add a license file if you intend to open-source this repository.
