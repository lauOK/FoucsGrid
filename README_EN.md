# FocusGrid — Focus Time Tracker

FocusGrid is a lightweight, offline-first web app for tracking personal focus time. Choose a task, start a timer, and save the session when you finish. Review your daily effort in a stacked annual calendar or explore focus trends over time.

> **AIGC NOTICE: This project was generated entirely by artificial intelligence (AIGC) and is provided for learning and educational use only.** Review the code yourself before relying on it. The software is provided “as is,” without warranties.

## Features

- Create, edit, and delete tasks, each with its own color.
- The timer keeps running while the browser tab is in the background. An unfinished session can be handled after refreshing or reopening the page.
- Before saving a session, adjust its start and end times, continue focusing, or discard it.
- View an annual calendar with daily task blocks stacked by time spent.
- Explore a line chart for the last 3 days, last 7 days, this week, this month, or this year, with an optional task filter.
- Switch between Chinese and English, and between light and dark themes.
- Export data to a JSON backup and import it later.

## Screenshots

These screenshots use fictional demo data and contain no personal records.

### Focus Timer

![FocusGrid focus timer](assets/screenshots/focus-timer.png)

### Annual Calendar

![FocusGrid annual calendar with daily task blocks](assets/screenshots/annual-calendar.png)

### Analytics

![FocusGrid focus time trends](assets/screenshots/analytics.png)

## Getting Started

No dependencies or build step are required:

1. Download or clone this repository.
2. Open `index.html` in a modern web browser.
3. Add a task, select it, and click **Start focus**.
4. Expand the calendar and analytics below the timer when you want to review your activity.

Use **Export backup** regularly to keep a copy of your data.

## Data and Privacy

- Tasks, focus records, theme, and language preferences are stored in this browser’s local storage.
- There are no accounts, server synchronization, or cloud backups. Clearing browser site data may erase your records.
- JSON backups contain task and focus-session data; keep exported files somewhere safe.
- An unfinished session is calculated from its timestamps while the page is closed and can be reviewed or corrected when you return.

## License

This repository is licensed under [0BSD](./LICENSE). It permits use, copying, modification, and distribution for any purpose, including commercial use, without attribution requirements. The software comes without warranty. Copyright treatment of AI-generated content may vary by jurisdiction; this license states the project’s intended permissions and is not legal advice.

中文说明见 [README.md](./README.md)。
