(() => {
  "use strict";

  const STORAGE_KEY = "focus-time-tracker-v1";
  const THEME_KEY = "focus-time-theme";
  const LANGUAGE_KEY = "focus-time-language";
  const translations = {
    zh: {
      pageTitle: "专注刻度 FocusGrid", homeLabel: "专注刻度 FocusGrid 首页", brandName: "专注刻度", brandMark: "刻",
      exportBackup: "导出备份", importBackup: "导入备份", switchLanguage: "切换到英文",
      themeLight: "切换到浅色模式", themeDark: "切换到黑色模式",
      heroTitle: "把专注，变成看得见的积累。", heroCopy: "选择一项工作，开始专注。时间会自动记下来。",
      focusTimer: "专注计时", statusIdle: "尚未开始", statusFocusing: "正在专注",
      focusTaskPrompt: "这段时间要做什么？", selectTask: "选择工作项", selectAnalysisTask: "选择要分析的工作项",
      noTasksYet: "请先添加工作项", startFocus: "开始专注", endFocus: "结束专注",
      todayFocus: "今日专注",
      manageTasks: "管理工作项", myTasks: "我的工作项", taskColorHelp: "颜色会用于日历中的时间色块。",
      showInsights: "查看年度日历与数据分析", hideInsights: "收起年度日历与数据分析",
      closeTaskManager: "关闭工作项管理", taskName: "名称", taskNamePlaceholder: "例如：阅读、写代码、英语学习",
      color: "颜色", taskColor: "工作项颜色", addTask: "添加工作项", cancelEdit: "取消编辑",
      saveChanges: "保存修改", edit: "编辑", delete: "删除", emptyTasks: "还没有工作项，添加一个开始记录吧。",
      unsafeStorage: "当前无法安全修改本地记录，请恢复备份或检查浏览器存储。",
      backgroundTimer: "切换到其他标签页也会继续计时，回来时自动更新。",
      taskDeleteDisabled: "当前无法安全修改本地数据",
      startedAt: "开始于 {date}", annualCalendar: "年度日历", dataAnalysis: "数据分析",
      timeViews: "时间视图", annualTimeCalendar: "年度时间日历",
      calendarDescription: "每天的色块按工作项堆叠，高度随投入时间增加。点击日期查看记录。",
      previousYear: "上一年", nextYear: "下一年", calendarYear: "切换日历年份",
      yearFocus: "全年专注", hours: "{value} 小时", oneHour: "1 小时", minutes: "{value} 分钟",
      taskColorLegend: "工作项颜色图例",
      calendarFootnote: "色块高度以每天 8 小时作为视觉参考上限；鼠标悬停或点击可查看准确时长。",
      focusTrends: "专注时间趋势", analysisDescription: "按天查看专注时长，观察投入节奏与变化。",
      task: "工作项", allTasks: "全部工作项", selectDateRange: "选择分析时间范围",
      last3Days: "过去 3 天", last7Days: "过去 7 天", thisWeek: "本周", thisMonth: "本月", thisYear: "本年",
      focusInRange: "所选时段专注", dailyAverage: "日均专注", focusDays: "专注天数",
      analysisModes: "分析类型", trendAnalysis: "时间趋势", dailyBreakdown: "每日占比",
      trendHeading: "专注时间趋势", trendDescription: "按天查看专注时长，观察投入节奏与变化。",
      dailyAnalysisHeading: "每日工作项分析", dailyAnalysisDescription: "选择日期，查看当天各工作项的专注时长占比。",
      selectDay: "选择日期", dailyTotalFocus: "当天专注总时长", dailyTaskBreakdown: "工作项时间占比",
      dailyPieEmpty: "所选日期没有专注记录。", pieChartAria: "{date}各工作项专注时长占比",
      pieSegmentAria: "{task}：{duration}，占 {percent}%",
      invalidSelectedDay: "请选择有效日期，且不能晚于今天。",
      days: "{value} 天", oneDay: "1 天", dailyFocusTime: "每日专注时间", chartUnit: "单位：小时",
      chartEmpty: "所选时段还没有专注记录。开始专注后，趋势会显示在这里。",
      footerNote: "你的记录保存在当前浏览器中。记得定期导出备份。",
      dayDetails: "日期详情", closeDayDetails: "关闭日期详情",
      finishSessionPrompt: "结束这段专注？", closeFinishDialog: "取消结束专注",
      finishDialogHint: "确认时间无误，或修正开始和结束时间后保存。",
      startTime: "开始时间", endTime: "结束时间", sessionDuration: "本次记录时长",
      discardSession: "取消专注", continueFocus: "继续专注", confirmSave: "确认并保存",
      today: "今天", currentlyFocusing: "进行中", noRecords: "暂无记录",
      dayTotalLabel: "{date}，共 {duration}，{items}。点击查看明细",
      dayEmptyLabel: "{date}，暂无记录。点击查看",
      daySessionCount: "{value} 段专注记录", oneSession: "1 段专注记录", dayNoSessions: "还没有专注记录",
      dayEmpty: "在这一天开始一段专注，积累就会出现在这里。",
      spanningDay: "跨日 · ", deleteRecordTitle: "删除这段完整专注记录",
      invalidStopTime: "请设置有效的开始和结束时间：结束时间必须晚于开始时间，且不能晚于现在。",
      savedSession: "专注记录已保存。", cancelledSession: "本次专注已取消，未保存记录。",
      deleteTaskConfirm: "确定删除工作项「{name}」吗？已有记录会保留。",
      activeTaskCannotDelete: "正在专注的工作项不能删除，请先结束专注。",
      deleteRecordConfirm: "确定删除「{name}」这段完整专注记录吗？",
      deleteSpanningRecord: "此记录跨越多个日期，相关日期的时长也会一起删除。",
      importConfirm: "导入备份将替换当前浏览器中的工作项、记录和计时状态。确定继续吗？",
      exportBlocked: "当前记录无法读取，请导入有效备份后再导出，避免生成空白备份。",
      exportSuccess: "备份文件已导出。", exportError: "导出失败：{error}",
      importSuccess: "备份导入成功。", importError: "导入失败：{error}。当前数据未更改。",
      invalidBackup: "文件格式或版本无效", dataStructureInvalid: "数据结构不符合当前版本要求",
      localStorageUnavailable: "无法访问本地记录：{error}。请检查浏览器存储权限。",
      localDataUnreadable: "无法读取本地记录：{error}。为避免覆盖数据，请导入有效备份后继续。",
      saveError: "保存失败：{error}。请导出备份，并检查浏览器存储空间。",
      themeSaveError: "主题已切换，但无法保存主题偏好：{error}",
      themeReadError: "无法读取主题偏好：{error}。当前使用浅色模式。",
      languageSaveError: "界面语言已切换，但无法保存语言偏好：{error}",
      languageReadError: "无法读取界面语言偏好：{error}。当前使用中文界面。",
      analysisRange_last3: "过去 3 天（含今天）", analysisRange_last7: "过去 7 天（含今天）",
      analysisRange_week: "本周（周一至今）", analysisRange_month: "本月（1 日至今）",
      analysisRange_year: "本年（1 月 1 日至今）",
      chartAria: "{range}每日专注时间折线图，{task}",
      switchLanguageButton: "EN", languageCode: "zh-CN"
    },
    en: {
      pageTitle: "FocusGrid — Focus Time Tracker", homeLabel: "FocusGrid home", brandName: "FocusGrid", brandMark: "FG",
      exportBackup: "Export backup", importBackup: "Import backup", switchLanguage: "Switch to Chinese",
      themeLight: "Switch to light mode", themeDark: "Switch to dark mode",
      heroTitle: "Make focus visible.", heroCopy: "Choose a task and start focusing. Your time is tracked automatically.",
      focusTimer: "Focus timer", statusIdle: "Not started", statusFocusing: "Focusing",
      focusTaskPrompt: "What are you working on?", selectTask: "Select a task", selectAnalysisTask: "Select a task to analyze",
      noTasksYet: "Add a task first", startFocus: "Start focus", endFocus: "End focus",
      todayFocus: "Focused today",
      manageTasks: "Manage tasks", myTasks: "My tasks", taskColorHelp: "Colors are used for time blocks on the calendar.",
      showInsights: "View calendar and analytics", hideInsights: "Hide calendar and analytics",
      closeTaskManager: "Close task manager", taskName: "Name", taskNamePlaceholder: "e.g. Reading, coding, language study",
      color: "Color", taskColor: "Task color", addTask: "Add task", cancelEdit: "Cancel editing",
      saveChanges: "Save changes", edit: "Edit", delete: "Delete", emptyTasks: "No tasks yet. Add one to start tracking.",
      unsafeStorage: "Local records cannot be safely changed. Restore a backup or check browser storage.",
      backgroundTimer: "Your timer keeps running in other tabs and updates when you return.",
      taskDeleteDisabled: "Local data cannot currently be safely changed",
      startedAt: "Started {date}", annualCalendar: "Year calendar", dataAnalysis: "Analytics",
      timeViews: "Time views", annualTimeCalendar: "Annual time calendar",
      calendarDescription: "Daily blocks stack by task, with height representing time spent. Select a date to view its records.",
      previousYear: "Previous year", nextYear: "Next year", calendarYear: "Change calendar year",
      yearFocus: "Focus this year", hours: "{value} hours", oneHour: "1 hour", minutes: "{value} min",
      taskColorLegend: "Task color legend",
      calendarFootnote: "Block height is scaled against 8 hours per day; hover or select a date for exact durations.",
      focusTrends: "Focus time trends", analysisDescription: "View daily focus time to understand your pace and progress.",
      task: "Task", allTasks: "All tasks", selectDateRange: "Select date range",
      last3Days: "Last 3 days", last7Days: "Last 7 days", thisWeek: "This week", thisMonth: "This month", thisYear: "This year",
      focusInRange: "Focus in range", dailyAverage: "Daily average", focusDays: "Focus days",
      analysisModes: "Analysis type", trendAnalysis: "Time trend", dailyBreakdown: "Daily breakdown",
      trendHeading: "Focus time trends", trendDescription: "View daily focus time to understand your pace and progress.",
      dailyAnalysisHeading: "Daily task analysis", dailyAnalysisDescription: "Choose a date to see how focus time was divided across tasks.",
      selectDay: "Select date", dailyTotalFocus: "Total focus time", dailyTaskBreakdown: "Focus time by task",
      dailyPieEmpty: "No focus sessions on the selected date.", pieChartAria: "Focus time share by task on {date}",
      pieSegmentAria: "{task}: {duration}, {percent}%",
      invalidSelectedDay: "Choose a valid date that is not later than today.",
      days: "{value} days", oneDay: "1 day", dailyFocusTime: "Daily focus time", chartUnit: "Hours",
      chartEmpty: "No focus sessions in this period yet. Start a session and your trend will appear here.",
      footerNote: "Your records are stored in this browser. Remember to export backups regularly.",
      dayDetails: "DAY DETAILS", closeDayDetails: "Close date details",
      finishSessionPrompt: "End this focus session?", closeFinishDialog: "Cancel ending focus",
      finishDialogHint: "Confirm the times or adjust the start and end before saving.",
      startTime: "Start time", endTime: "End time", sessionDuration: "Session duration",
      discardSession: "Discard session", continueFocus: "Continue focusing", confirmSave: "Confirm and save",
      today: "Today", currentlyFocusing: "In progress", noRecords: "No records",
      dayTotalLabel: "{date}, total {duration}: {items}. Select to view details",
      dayEmptyLabel: "{date}, no records. Select to view",
      daySessionCount: "{value} focus sessions", oneSession: "1 focus session", dayNoSessions: "No focus sessions yet",
      dayEmpty: "Start a focus session on this day and your progress will appear here.",
      spanningDay: "Overnight · ", deleteRecordTitle: "Delete this entire focus session",
      invalidStopTime: "Enter valid start and end times. The end must be after the start and no later than now.",
      savedSession: "Focus session saved.", cancelledSession: "Session discarded. No record was saved.",
      deleteTaskConfirm: "Delete task “{name}”? Existing records will be kept.",
      activeTaskCannotDelete: "The task in the active session cannot be deleted. End the session first.",
      deleteRecordConfirm: "Delete the entire focus session for “{name}”?",
      deleteSpanningRecord: " This session spans multiple dates, and its time will be removed from each date.",
      importConfirm: "Importing a backup replaces the tasks, records, and active session in this browser. Continue?",
      exportBlocked: "Current records cannot be read. Import a valid backup before exporting to avoid an empty backup.",
      exportSuccess: "Backup exported.", exportError: "Export failed: {error}",
      importSuccess: "Backup imported successfully.", importError: "Import failed: {error}. Current data was not changed.",
      invalidBackup: "Invalid file format or version", dataStructureInvalid: "Data structure is not supported by this version",
      localStorageUnavailable: "Cannot access local records: {error}. Check browser storage permissions.",
      localDataUnreadable: "Cannot read local records: {error}. Import a valid backup before continuing to avoid overwriting data.",
      saveError: "Save failed: {error}. Export a backup and check available browser storage.",
      themeSaveError: "Theme changed, but its preference could not be saved: {error}",
      themeReadError: "Cannot read the theme preference: {error}. Using light mode.",
      languageSaveError: "Language changed, but its preference could not be saved: {error}",
      languageReadError: "Cannot read the language preference: {error}. Using Chinese.",
      analysisRange_last3: "Last 3 days (including today)", analysisRange_last7: "Last 7 days (including today)",
      analysisRange_week: "This week (Monday to date)", analysisRange_month: "This month (1st to date)",
      analysisRange_year: "This year (Jan 1 to date)",
      chartAria: "Daily focus time line chart for {range}, {task}",
      switchLanguageButton: "中文", languageCode: "en-US"
    }
  };
  const weekdays = {
    zh: ["一", "二", "三", "四", "五", "六", "日"],
    en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  };
  let language = "zh";
  const defaultState = () => ({ version: 1, tasks: [], records: [], active: null, selectedTaskId: "" });
  let state = defaultState();
  let selectedYear = new Date().getFullYear();
  let editingTaskId = "";
  let openedDay = "";
  let analysisRange = "last3";
  let analysisTaskId = "all";
  let analysisMode = "trend";
  let analysisDate = localDateKey(new Date());
  let storageAvailable = true;
  let recoveryNeeded = false;
  let lastCalendarMinute = -1;
  let renderedTodayDate = "";
  let cachedTodayDate = "";
  let cachedTodayMilliseconds = 0;

  const $ = (id) => document.getElementById(id);
  const elements = {
    message: $("app-message"),
    themeToggle: $("theme-toggle"),
    languageToggle: $("language-toggle"),
    year: $("calendar-year"),
    yearTotal: $("year-total"),
    calendar: $("calendar"),
    legend: $("calendar-legend"),
    calendarView: $("calendar-view"),
    analysisView: $("analysis-view"),
    calendarSection: $("calendar-section"),
    focusTaskTrigger: $("focus-task-trigger"),
    focusTaskMenu: $("focus-task-menu"),
    analysisTaskTrigger: $("analysis-task-trigger"),
    analysisTaskMenu: $("analysis-task-menu"),
    analysisChart: $("analysis-chart"),
    analysisTaskFilter: document.querySelector(".analysis-task-filter"),
    analysisTitle: $("analysis-heading"),
    analysisDescription: document.querySelector(".analysis-heading .section-description"),
    trendAnalysisContent: $("trend-analysis-content"),
    dailyPieContent: $("daily-pie-content"),
    dailyAnalysisDate: $("daily-analysis-date"),
    dailyPieTotal: $("daily-pie-total"),
    dailyPieDateLabel: $("daily-pie-date-label"),
    dailyPieChart: $("daily-pie-chart"),
    dailyPieEmpty: $("daily-pie-empty"),
    dailyPieLegend: $("daily-pie-legend"),
    analysisRangeLabel: $("chart-range-label"),
    analysisTotal: $("analysis-total"),
    analysisAverage: $("analysis-average"),
    analysisActiveDays: $("analysis-active-days"),
    chartEmpty: $("chart-empty"),
    start: $("start-button"),
    stop: $("stop-button"),
    runningSession: $("running-session"),
    runningTaskName: $("running-task-name"),
    runningTaskDot: $("running-task-dot"),
    runningStartTime: $("running-start-time"),
    elapsedTime: $("elapsed-time"),
    todayFocusTotal: $("today-focus-total"),
    indicator: $("focus-indicator"),
    focusHint: $("focus-hint"),
    taskManager: $("task-manager"),
    taskList: $("task-list"),
    taskForm: $("task-form"),
    taskName: $("task-name"),
    taskColor: $("task-color"),
    saveTaskButton: $("save-task-button"),
    cancelEdit: $("cancel-edit-button"),
    dayDialog: $("day-dialog"),
    stopDialog: $("stop-dialog"),
    stopForm: $("stop-form"),
    stopStartTime: $("stop-start-time"),
    stopEndTime: $("stop-end-time"),
    stopTaskName: $("stop-task-name"),
    stopTaskDot: $("stop-task-dot"),
    correctedDuration: $("corrected-duration"),
    stopFormError: $("stop-form-error"),
    confirmStop: $("confirm-stop-button"),
    dialogDate: $("dialog-date"),
    daySummary: $("day-summary"),
    dayBreakdown: $("day-breakdown"),
    sessionList: $("session-list")
  };

  function t(key, values = {}) {
    const template = translations[language][key] ?? translations.zh[key] ?? key;
    return template.replace(/\{(\w+)\}/g, (_, name) => String(values[name] ?? ""));
  }

  function applyLanguage() {
    document.documentElement.lang = t("languageCode");
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
    });
    document.querySelectorAll("[data-i18n-title]").forEach((element) => {
      element.title = t(element.dataset.i18nTitle);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.placeholder = t(element.dataset.i18nPlaceholder);
    });
    elements.languageToggle.textContent = t("switchLanguageButton");
    elements.languageToggle.setAttribute("aria-label", t("switchLanguage"));
    elements.languageToggle.title = t("switchLanguage");
    const insightsToggle = $("toggle-insights-button");
    if (insightsToggle) {
      insightsToggle.textContent = t(elements.calendarSection.hidden ? "showInsights" : "hideInsights");
      insightsToggle.setAttribute("aria-expanded", String(!elements.calendarSection.hidden));
    }
    setTheme(document.documentElement.dataset.theme ?? "light", false);
  }

  function loadLanguage() {
    try {
      language = localStorage.getItem(LANGUAGE_KEY) === "en" ? "en" : "zh";
    } catch (error) {
      language = "zh";
      showMessage(t("languageReadError", { error: error.message }), true);
    }
    applyLanguage();
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage;
    applyLanguage();
    try {
      localStorage.setItem(LANGUAGE_KEY, language);
    } catch (error) {
      showMessage(t("languageSaveError", { error: error.message }), true);
    }
    render();
    if (!elements.calendarSection.hidden) {
      if (elements.analysisView.hidden) renderCalendar();
      else renderAnalysis();
    }
    if (openedDay && elements.dayDialog.open) renderDayDetails(openedDay);
  }

  function safeText(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[character]);
  }

  function localDateKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  }

  function toDateTimeLocal(timestamp) {
    const date = new Date(timestamp);
    return `${localDateKey(date)}T${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
  }

  function parseDateKey(key) {
    const [year, month, day] = key.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  function formatDate(key, options = { month: "long", day: "numeric", weekday: "long" }) {
    return parseDateKey(key).toLocaleDateString(t("languageCode"), options);
  }

  function formatDuration(milliseconds, compact = false) {
    const seconds = Math.max(0, Math.floor(milliseconds / 1000));
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    if (compact) {
      if (language === "en") {
        if (seconds === 0) return "0 min";
        if (hours) return `${hours}h${minutes ? ` ${minutes}m` : ""}`;
        if (minutes) return `${minutes}m`;
        return `${remainingSeconds}s`;
      }
      if (seconds === 0) return "0分钟";
      if (hours) return `${hours}小时${minutes ? ` ${minutes}分` : ""}`;
      if (minutes) return `${minutes}分`;
      return `${remainingSeconds}秒`;
    }
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  }

  function formatHours(milliseconds) {
    const hours = milliseconds / 3600000;
    if (hours < 1) return t("minutes", { value: Math.round(milliseconds / 60000) });
    const value = Number.isInteger(hours) ? hours : hours.toFixed(1);
    return value === 1 ? t("oneHour") : t("hours", { value });
  }

  function showMessage(text, isError = false) {
    elements.message.textContent = text;
    elements.message.classList.toggle("is-error", isError);
    elements.message.hidden = false;
  }

  function hideMessage() {
    elements.message.hidden = true;
    elements.message.textContent = "";
    elements.message.classList.remove("is-error");
  }

  function setTheme(theme, persist = true) {
    const isDark = theme === "dark";
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    elements.themeToggle.setAttribute("aria-pressed", String(isDark));
    const label = isDark ? t("themeLight") : t("themeDark");
    elements.themeToggle.setAttribute("aria-label", label);
    elements.themeToggle.title = label;
    document.querySelector('meta[name="theme-color"]').content = isDark ? "#151b18" : "#f4f6f2";
    if (!persist) return;
    try {
      localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    } catch (error) {
      showMessage(t("themeSaveError", { error: error.message }), true);
    }
  }

  function loadTheme() {
    try {
      setTheme(localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light", false);
    } catch (error) {
      setTheme("light", false);
      showMessage(t("themeReadError", { error: error.message }), true);
    }
  }

  function isValidColor(color) {
    return typeof color === "string" && /^#[0-9a-f]{6}$/i.test(color);
  }

  function hslToHex(hue, saturation, lightness) {
    const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
    const segment = hue / 60;
    const secondary = chroma * (1 - Math.abs(segment % 2 - 1));
    const offset = lightness - chroma / 2;
    const [red, green, blue] = segment < 1 ? [chroma, secondary, 0]
      : segment < 2 ? [secondary, chroma, 0]
        : segment < 3 ? [0, chroma, secondary]
          : segment < 4 ? [0, secondary, chroma]
            : segment < 5 ? [secondary, 0, chroma]
              : [chroma, 0, secondary];
    return `#${[red, green, blue].map((channel) =>
      Math.round((channel + offset) * 255).toString(16).padStart(2, "0")
    ).join("")}`;
  }

  function colorRgb(color) {
    return [1, 3, 5].map((index) => Number.parseInt(color.slice(index, index + 2), 16));
  }

  function readableTextColor(backgroundColor) {
    const luminance = colorRgb(backgroundColor).map((channel) => {
      const normalized = channel / 255;
      return normalized <= 0.04045 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
    }).reduce((sum, channel, index) => sum + channel * [0.2126, 0.7152, 0.0722][index], 0);
    return luminance > 0.36 ? "#203329" : "#ffffff";
  }

  function nextTaskColor() {
    const existingColors = state.tasks.map((task) => task.color.toLowerCase());
    const existingRgb = existingColors.map(colorRgb);
    let bestColor = "#589a73";
    let bestDistance = -1;

    for (let attempt = 0; attempt < 256; attempt++) {
      const color = hslToHex(Math.random() * 360, 0.58 + Math.random() * 0.12, 0.43 + Math.random() * 0.1);
      if (existingColors.includes(color)) continue;
      const rgb = colorRgb(color);
      const minimumDistance = existingRgb.length
        ? Math.min(...existingRgb.map((other) =>
          Math.sqrt((rgb[0] - other[0]) ** 2 + (rgb[1] - other[1]) ** 2 + (rgb[2] - other[2]) ** 2)
        ))
        : Infinity;
      if (minimumDistance >= 110) return color;
      if (minimumDistance > bestDistance) {
        bestColor = color;
        bestDistance = minimumDistance;
      }
    }

    if (bestDistance >= 0) return bestColor;
    do {
      bestColor = hslToHex(Math.random() * 360, 0.58 + Math.random() * 0.12, 0.43 + Math.random() * 0.1);
    } while (existingColors.includes(bestColor));
    return bestColor;
  }

  function validateState(candidate) {
    if (!candidate || candidate.version !== 1 || !Array.isArray(candidate.tasks) || !Array.isArray(candidate.records)) return false;
    const validTask = (task) => task && typeof task.id === "string" && typeof task.name === "string" && task.name.trim() && isValidColor(task.color);
    const validRecord = (record) => record && typeof record.taskName === "string" && isValidColor(record.color) &&
      Number.isFinite(record.start) && Number.isFinite(record.end) && record.end > record.start &&
      (record.taskId === null || typeof record.taskId === "string");
    if (!candidate.tasks.every(validTask) || !candidate.records.every(validRecord)) return false;
    if (candidate.active !== null && (!candidate.active || typeof candidate.active.taskName !== "string" ||
        !isValidColor(candidate.active.color) || !Number.isFinite(candidate.active.start) ||
        (candidate.active.taskId !== null && typeof candidate.active.taskId !== "string"))) return false;
    return candidate.selectedTaskId === undefined || typeof candidate.selectedTaskId === "string";
  }

  function loadState() {
    let raw;
    try {
      raw = localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      storageAvailable = false;
      showMessage(t("localStorageUnavailable", { error: error.message }), true);
      return;
    }
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      if (!validateState(parsed)) throw new Error(t("dataStructureInvalid"));
      state = { ...defaultState(), ...parsed };
    } catch (error) {
      recoveryNeeded = true;
      showMessage(t("localDataUnreadable", { error: error.message }), true);
    }
  }

  function saveState() {
    if (!canWrite()) return false;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      return true;
    } catch (error) {
      storageAvailable = false;
      showMessage(t("saveError", { error: error.message }), true);
      return false;
    }
  }

  function makeId() {
    return typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  }

  function canWrite() {
    return storageAvailable && !recoveryNeeded;
  }

  function splitSession(session, endOverride) {
    const end = endOverride ?? session.end;
    if (!Number.isFinite(end) || end <= session.start) return [];
    const parts = [];
    let cursor = session.start;
    while (cursor < end) {
      const current = new Date(cursor);
      const nextMidnight = new Date(current.getFullYear(), current.getMonth(), current.getDate() + 1).getTime();
      const partEnd = Math.min(end, nextMidnight);
      parts.push({
        date: localDateKey(current),
        start: cursor,
        end: partEnd,
        milliseconds: partEnd - cursor,
        session
      });
      cursor = partEnd;
    }
    return parts;
  }

  function sessionsForYear(year) {
    const sessions = state.records.map((record) => ({ ...record }));
    if (state.active) sessions.push({
      ...state.active,
      end: Date.now(),
      id: "__active__",
      active: true
    });
    return sessions.filter((session) => new Date(session.start).getFullYear() <= year &&
      new Date(session.end).getFullYear() >= year);
  }

  function renderTaskSelect() {
    const selected = state.selectedTaskId;
    if (!state.tasks.some((task) => task.id === selected) && state.tasks[0]) {
      state.selectedTaskId = state.tasks[0].id;
    }
    const selectedTask = state.tasks.find((task) => task.id === state.selectedTaskId);
    elements.focusTaskTrigger.querySelector(".analysis-task-trigger-label").textContent =
    selectedTask?.name ?? t("noTasksYet");
    elements.focusTaskTrigger.style.setProperty("--task-option-color", selectedTask?.color ?? "#ffffff");
    elements.focusTaskTrigger.style.setProperty("--task-option-text", selectedTask ? readableTextColor(selectedTask.color) : "#203329");
    elements.focusTaskTrigger.disabled = Boolean(state.active) || state.tasks.length === 0 || !canWrite();
    elements.focusTaskMenu.innerHTML = state.tasks.map((task) => `
      <button class="analysis-task-option${task.id === state.selectedTaskId ? " is-selected" : ""}" id="focus-task-option-${safeText(task.id)}" type="button" role="option" aria-selected="${task.id === state.selectedTaskId}" data-focus-task-id="${safeText(task.id)}" style="--task-option-color:${task.color};--task-option-text:${readableTextColor(task.color)}">${safeText(task.name)}</button>`
    ).join("");
    if (elements.focusTaskTrigger.disabled) setTaskMenuOpen(elements.focusTaskTrigger, elements.focusTaskMenu, false);
    elements.start.disabled = Boolean(state.active) || state.tasks.length === 0 || !canWrite();
    elements.stop.disabled = !state.active || !canWrite();
    elements.saveTaskButton.disabled = !canWrite();
    elements.taskName.disabled = !canWrite();
    elements.taskColor.disabled = !canWrite();
    if (!state.tasks.length && !state.active) elements.focusHint.textContent = t("noTasksYet");
    else if (!canWrite()) elements.focusHint.textContent = t("unsafeStorage");
    else elements.focusHint.textContent = t("backgroundTimer");
  }

  function renderTaskList() {
    if (!state.tasks.length) {
      elements.taskList.innerHTML = `<div class="empty-tasks">${safeText(t("emptyTasks"))}</div>`;
      return;
    }
    elements.taskList.innerHTML = state.tasks.map((task) => `
      <div class="task-row">
        <span class="task-swatch" style="--swatch:${task.color}"></span>
        <span class="task-row-name">${safeText(task.name)}</span>
        <div class="task-row-actions">
          <button type="button" data-edit-task="${safeText(task.id)}" ${canWrite() ? "" : "disabled"}>${safeText(t("edit"))}</button>
          <button class="delete-task" type="button" data-delete-task="${safeText(task.id)}" ${state.active?.taskId === task.id || !canWrite() ? `disabled title="${safeText(t("taskDeleteDisabled"))}"` : ""}>${safeText(t("delete"))}</button>
        </div>
      </div>`).join("");
  }

  function renderRunningSession() {
    if (!state.active) {
      elements.runningSession.hidden = true;
      elements.indicator.classList.remove("is-running");
      $("focus-indicator-label").textContent = t("statusIdle");
      return;
    }
    elements.runningSession.hidden = false;
    elements.runningTaskName.textContent = state.active.taskName;
    elements.runningTaskDot.style.backgroundColor = state.active.color;
    elements.runningStartTime.textContent = t("startedAt", {
      date: new Date(state.active.start).toLocaleString(t("languageCode"), { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" })
    });
    elements.indicator.classList.add("is-running");
    $("focus-indicator-label").textContent = t("statusFocusing");
    elements.elapsedTime.textContent = formatDuration(Date.now() - state.active.start);
  }

  function renderTodayFocusTime(now = Date.now(), refreshRecords = true) {
    const today = localDateKey(new Date(now));
    renderedTodayDate = today;
    if (refreshRecords || cachedTodayDate !== today) {
      cachedTodayMilliseconds = 0;
      for (const session of state.records) {
        for (const part of splitSession(session)) {
          if (part.date === today) cachedTodayMilliseconds += part.milliseconds;
        }
      }
      cachedTodayDate = today;
    }
    let totalMilliseconds = cachedTodayMilliseconds;
    if (state.active) {
      for (const part of splitSession(state.active, now)) {
        if (part.date === today) totalMilliseconds += part.milliseconds;
      }
    }
    elements.todayFocusTotal.textContent = formatDuration(totalMilliseconds);
  }

  function buildCalendarSessions(year) {
    const daily = new Map();
    let totalMilliseconds = 0;
    for (const session of sessionsForYear(year)) {
      for (const part of splitSession(session, session.active ? Date.now() : undefined)) {
        if (Number(part.date.slice(0, 4)) !== year) continue;
        const key = `${part.date}:${session.taskId ?? session.taskName}`;
        const existing = daily.get(key);
        if (existing) {
          existing.milliseconds += part.milliseconds;
          existing.sessions.push({ ...part, session });
        } else {
          daily.set(key, {
            date: part.date,
            taskId: session.taskId,
            taskName: session.taskName,
            color: session.color,
            milliseconds: part.milliseconds,
            sessions: [{ ...part, session }]
          });
        }
        totalMilliseconds += part.milliseconds;
      }
    }
    const byDate = new Map();
    for (const entry of daily.values()) {
      if (!byDate.has(entry.date)) byDate.set(entry.date, []);
      byDate.get(entry.date).push(entry);
    }
    for (const entries of byDate.values()) entries.sort((a, b) => b.milliseconds - a.milliseconds);
    return { byDate, totalMilliseconds };
  }

  function renderCalendar() {
    const year = selectedYear;
    const { byDate, totalMilliseconds } = buildCalendarSessions(year);
    elements.year.textContent = year;
    elements.yearTotal.textContent = formatHours(totalMilliseconds);
    const todayKey = localDateKey(new Date());
    const months = [];
    for (let month = 0; month < 12; month++) {
      const firstDay = new Date(year, month, 1);
      const offset = (firstDay.getDay() + 6) % 7;
      const days = new Date(year, month + 1, 0).getDate();
      const cells = Array.from({ length: Math.ceil((offset + days) / 7) * 7 }, (_, index) => {
        const day = index - offset + 1;
        if (day < 1 || day > days) return '<div class="day-cell is-outside" aria-hidden="true"></div>';
        const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        const entries = byDate.get(key) ?? [];
        const total = entries.reduce((sum, entry) => sum + entry.milliseconds, 0);
        const scale = total > 0 ? Math.min(1, 52 / (total / 3600000 * (52 / 8))) : 0;
        const visible = entries.slice(0, 4);
        const blocks = visible.map((entry) => {
          const height = Math.max(3, (entry.milliseconds / 3600000) * (52 / 8) * scale);
          const title = `${entry.taskName} · ${formatDuration(entry.milliseconds, true)}`;
          return `<span class="stack-block" style="height:${height.toFixed(1)}px;background:${entry.color}" title="${safeText(title)}"></span>`;
        }).join("");
        const extra = entries.length > 4 ? `<span class="stack-more">+${entries.length - 4}</span>` : "";
        const dayLabel = entries.length
          ? t("dayTotalLabel", {
            date: key,
            duration: formatDuration(total, true),
            items: entries.map((entry) => `${entry.taskName} ${formatDuration(entry.milliseconds, true)}`).join(language === "en" ? ", " : "；")
          })
          : t("dayEmptyLabel", { date: key });
        return `<button class="day-cell${key === todayKey ? " is-today" : ""}" type="button" data-date="${key}" aria-label="${safeText(dayLabel)}">
          <span class="day-topline"><span class="day-number">${day}</span>${total ? `<span class="day-total">${formatDuration(total, true)}</span>` : ""}</span>
          ${entries.length ? `<span class="day-stack">${blocks}${extra}</span>` : ""}
        </button>`;
      }).join("");
      months.push(`<article class="month-card">
        <div class="month-heading"><h3>${new Date(year, month, 1).toLocaleDateString(t("languageCode"), { month: "long" })}</h3><span>${String(month + 1).padStart(2, "0")} / ${year}</span></div>
        <div class="month-grid">${weekdays[language].map((weekday) => `<div class="weekday" aria-hidden="true">${weekday}</div>`).join("")}${cells}</div>
      </article>`);
    }
    elements.calendar.innerHTML = months.join("");

    const colors = new Map();
    for (const task of state.tasks) colors.set(task.id, { name: task.name, color: task.color });
    for (const session of sessionsForYear(year)) {
      const key = session.taskId ?? session.taskName;
      if (!colors.has(key)) colors.set(key, { name: session.taskName, color: session.color });
    }
    elements.legend.innerHTML = [...colors.values()].map((task) =>
      `<span class="legend-item"><span class="task-swatch" style="--swatch:${task.color}"></span>${safeText(task.name)}</span>`
    ).join("");
    lastCalendarMinute = Math.floor(Date.now() / 60000);
  }

  function analysisDateRange(range, now = new Date()) {
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    if (range === "week") {
      const start = new Date(today);
      start.setDate(start.getDate() - ((start.getDay() + 6) % 7));
      const elapsedDays = Math.round((Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) -
        Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) / 86400000) + 1;
      return { start, count: elapsedDays, label: t("analysisRange_week") };
    }
    if (range === "month") {
      const start = new Date(today.getFullYear(), today.getMonth(), 1);
      return { start, count: today.getDate(), label: t("analysisRange_month") };
    }
    if (range === "year") {
      const start = new Date(today.getFullYear(), 0, 1);
      const elapsedDays = Math.round((Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) -
        Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) / 86400000) + 1;
      return { start, count: elapsedDays, label: t("analysisRange_year") };
    }
    const count = range === "last3" ? 3 : 7;
    const start = new Date(today);
    start.setDate(start.getDate() - count + 1);
    return { start, count, label: t(`analysisRange_${range}`) };
  }

  function niceChartStep(value) {
    const raw = value / 4;
    const magnitude = 10 ** Math.floor(Math.log10(raw));
    const fraction = raw / magnitude;
    const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
    return niceFraction * magnitude;
  }

  function renderAnalysis() {
    const dailyMode = analysisMode === "daily";
    elements.analysisTaskFilter.hidden = dailyMode;
    elements.trendAnalysisContent.hidden = dailyMode;
    elements.dailyPieContent.hidden = !dailyMode;
    elements.analysisTitle.textContent = t(dailyMode ? "dailyAnalysisHeading" : "trendHeading");
    elements.analysisDescription.textContent = t(dailyMode ? "dailyAnalysisDescription" : "trendDescription");
    if (dailyMode) {
      renderDailyPie();
      return;
    }

    const availableTaskIds = new Set(state.tasks.map((task) => task.id));
    const taskFilter = analysisTaskId !== "all" && availableTaskIds.has(analysisTaskId) ? analysisTaskId : "all";
    analysisTaskId = taskFilter;
    const selectedTask = state.tasks.find((task) => task.id === taskFilter);
    const selectedName = selectedTask?.name ?? t("allTasks");
    const selectedColor = selectedTask?.color ?? "#ffffff";
    const selectedTextColor = selectedTask ? readableTextColor(selectedColor) : "#203329";
    elements.analysisTaskTrigger.style.setProperty("--task-option-color", selectedColor);
    elements.analysisTaskTrigger.style.setProperty("--task-option-text", selectedTextColor);
    elements.analysisTaskTrigger.querySelector(".analysis-task-trigger-label").textContent = selectedName;
    elements.analysisTaskMenu.innerHTML = `
      <button class="analysis-task-option${taskFilter === "all" ? " is-selected" : ""}" id="analysis-task-option-all" type="button" role="option" aria-selected="${taskFilter === "all"}" data-task-id="all" style="--task-option-color:#ffffff;--task-option-text:#203329">${safeText(t("allTasks"))}</button>
      ${state.tasks.map((task) => `
        <button class="analysis-task-option${taskFilter === task.id ? " is-selected" : ""}" id="analysis-task-option-${safeText(task.id)}" type="button" role="option" aria-selected="${taskFilter === task.id}" data-task-id="${safeText(task.id)}" style="--task-option-color:${task.color};--task-option-text:${readableTextColor(task.color)}">${safeText(task.name)}</button>`
      ).join("")}`;

    const { start, count, label } = analysisDateRange(analysisRange);
    const dates = Array.from({ length: count }, (_, index) => {
      const date = new Date(start);
      date.setDate(date.getDate() + index);
      return localDateKey(date);
    });
    const totalsByDate = new Map(dates.map((date) => [date, 0]));
    const sessions = [...state.records];
    if (state.active) sessions.push({ ...state.active, end: Date.now() });
    for (const session of sessions) {
      if (taskFilter !== "all" && session.taskId !== taskFilter) continue;
      for (const part of splitSession(session, session.id === state.active?.id ? Date.now() : undefined)) {
        if (totalsByDate.has(part.date)) totalsByDate.set(part.date, totalsByDate.get(part.date) + part.milliseconds);
      }
    }

    const values = dates.map((date) => totalsByDate.get(date) / 3600000);
    const totalMilliseconds = values.reduce((sum, value) => sum + value * 3600000, 0);
    const activeDays = values.filter((value) => value > 0).length;
    elements.analysisTotal.textContent = formatDuration(totalMilliseconds, true);
    elements.analysisAverage.textContent = formatDuration(totalMilliseconds / count, true);
    elements.analysisActiveDays.textContent = activeDays === 1 ? t("oneDay") : t("days", { value: activeDays });
    elements.analysisRangeLabel.textContent = `${label} · ${formatDate(dates[0], { month: "numeric", day: "numeric" })} – ${formatDate(dates.at(-1), { month: "numeric", day: "numeric" })}`;
    elements.chartEmpty.hidden = totalMilliseconds > 0;
    elements.analysisChart.classList.toggle("has-data", totalMilliseconds > 0);

    const width = 1000;
    const height = 340;
    const margin = { top: 18, right: 20, bottom: 48, left: 58 };
    const plotWidth = width - margin.left - margin.right;
    const plotHeight = height - margin.top - margin.bottom;
    const maximum = Math.max(...values, 0);
    const step = niceChartStep(maximum || 1);
    const maximumY = Math.max(step, Math.ceil(maximum / step) * step);
    const x = (index) => margin.left + (count === 1 ? plotWidth / 2 : index * plotWidth / (count - 1));
    const y = (value) => margin.top + plotHeight - value / maximumY * plotHeight;
    const points = values.map((value, index) => `${x(index).toFixed(2)},${y(value).toFixed(2)}`);
    const linePath = points.length ? `M ${points.join(" L ")}` : "";
    const areaPath = points.length
      ? `${linePath} L ${x(count - 1).toFixed(2)},${(margin.top + plotHeight).toFixed(2)} L ${x(0).toFixed(2)},${(margin.top + plotHeight).toFixed(2)} Z`
      : "";
    const gridLines = Array.from({ length: 5 }, (_, index) => {
      const value = maximumY * index / 4;
      const position = y(value);
      const precision = Math.max(0, Math.min(3, -Math.floor(Math.log10(step)) + 1));
      return `<g class="chart-grid-line"><line x1="${margin.left}" y1="${position}" x2="${width - margin.right}" y2="${position}"></line><text x="${margin.left - 12}" y="${position + 4}" text-anchor="end">${Number(value.toFixed(precision))}</text></g>`;
    }).join("");
    const labelLimit = count <= 10 ? count : 8;
    const labelIndices = new Set(Array.from({ length: labelLimit }, (_, index) =>
      Math.round(index * (count - 1) / Math.max(1, labelLimit - 1))
    ));
    const xLabels = [...labelIndices].map((index) => {
      const date = parseDateKey(dates[index]);
      const text = new Intl.DateTimeFormat(t("languageCode"), {
        month: count > 60 ? "numeric" : "short",
        day: "numeric"
      }).format(date);
      return `<text class="chart-x-label" x="${x(index)}" y="${height - 15}" text-anchor="middle">${text}</text>`;
    }).join("");
    const circles = values.map((value, index) => {
      const title = `${dates[index]} · ${formatDuration(value * 3600000, true)}`;
      return `<circle class="chart-point" cx="${x(index)}" cy="${y(value)}" r="${count > 60 ? 2.5 : 4}" tabindex="0"><title>${safeText(title)}</title></circle>`;
    }).join("");
    elements.analysisChart.innerHTML = `
      <svg class="trend-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="${safeText(t("chartAria", { range: label, task: selectedName }))}">
        <defs><linearGradient id="chart-area-gradient" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#5b9970" stop-opacity=".2"></stop><stop offset="100%" stop-color="#5b9970" stop-opacity=".015"></stop></linearGradient></defs>
        ${gridLines}
        ${totalMilliseconds > 0 ? `<path class="chart-area" d="${areaPath}"></path><path class="chart-line" d="${linePath}"></path>${circles}` : ""}
        ${xLabels}
      </svg>`;
  }

  function renderDailyPie() {
    const today = localDateKey(new Date());
    elements.dailyAnalysisDate.max = today;
    if (!elements.dailyAnalysisDate.value) elements.dailyAnalysisDate.value = analysisDate;
    analysisDate = elements.dailyAnalysisDate.value;
    const sessions = [...state.records];
    if (state.active) sessions.push({ ...state.active, end: Date.now() });
    const totalsByTask = new Map();
    for (const session of sessions) {
        const key = session.taskId ?? session.taskName;
        for (const part of splitSession(session, session.id === state.active?.id ? Date.now() : undefined)) {
          if (part.date !== analysisDate) continue;
          const existing = totalsByTask.get(key);
          if (existing) existing.milliseconds += part.milliseconds;
          else totalsByTask.set(key, {
            taskId: session.taskId,
            taskName: session.taskName,
            color: session.color,
            milliseconds: part.milliseconds
          });
        }
    }
    const entries = [...totalsByTask.values()].sort((a, b) => b.milliseconds - a.milliseconds);
    const totalMilliseconds = entries.reduce((sum, entry) => sum + entry.milliseconds, 0);
    elements.dailyPieTotal.textContent = formatDuration(totalMilliseconds, true);
    elements.dailyPieDateLabel.textContent = formatDate(analysisDate);
    elements.dailyPieEmpty.hidden = totalMilliseconds > 0;
    elements.dailyPieChart.hidden = totalMilliseconds === 0;
    elements.dailyPieLegend.hidden = totalMilliseconds === 0;
    if (totalMilliseconds === 0) {
        elements.dailyPieChart.innerHTML = "";
        elements.dailyPieLegend.innerHTML = "";
        return;
    }

    const radius = 66;
    const circumference = 2 * Math.PI * radius;
    const circles = [];
    let offset = 0;
    for (const entry of entries) {
        const fraction = entry.milliseconds / totalMilliseconds;
        const segmentLength = circumference * fraction;
        const percentage = fraction * 100;
        const segmentLabel = t("pieSegmentAria", {
          task: entry.taskName,
          duration: formatDuration(entry.milliseconds, true),
          percent: percentage.toFixed(1)
        });
        circles.push(`<circle class="daily-pie-segment" cx="100" cy="100" r="${radius}" fill="none" stroke="${entry.color}" stroke-width="30" stroke-dasharray="${segmentLength} ${circumference - segmentLength}" stroke-dashoffset="${-offset}" transform="rotate(-90 100 100)" aria-label="${safeText(segmentLabel)}"><title>${safeText(segmentLabel)}</title></circle>`);
        offset += segmentLength;
    }
    elements.dailyPieChart.innerHTML = `
        <svg class="daily-pie-svg" viewBox="0 0 200 200" role="img" aria-label="${safeText(t("pieChartAria", { date: formatDate(analysisDate) }))}">
          <circle class="daily-pie-track" cx="100" cy="100" r="${radius}" fill="none" stroke="var(--pie-track)" stroke-width="30"></circle>
          ${circles.join("")}
          <text class="daily-pie-center-total" x="100" y="97" text-anchor="middle">${safeText(formatDuration(totalMilliseconds, true))}</text>
          <text class="daily-pie-center-label" x="100" y="116" text-anchor="middle">${safeText(t("dailyTotalFocus"))}</text>
        </svg>`;
    elements.dailyPieLegend.innerHTML = entries.map((entry) => {
        const percentage = entry.milliseconds / totalMilliseconds * 100;
        return `<div class="daily-pie-legend-item">
          <span class="task-swatch" style="--swatch:${entry.color}"></span>
          <span class="daily-pie-task-name">${safeText(entry.taskName)}</span>
          <span class="daily-pie-percentage">${percentage.toFixed(1)}%</span>
          <strong>${formatDuration(entry.milliseconds, true)}</strong>
        </div>`;
    }).join("");
  }

  function setTaskMenuOpen(trigger, menu, open, focusSelected = false) {
    menu.hidden = !open;
    trigger.setAttribute("aria-expanded", String(open));
    if (open && focusSelected) {
      const selectedOption = menu.querySelector('[aria-selected="true"]');
      (selectedOption ?? menu.querySelector('[role="option"]'))?.focus();
    }
  }

  function moveTaskMenuFocus(menu, direction) {
    const options = [...menu.querySelectorAll('[role="option"]')];
    if (!options.length) return;
    const currentIndex = options.indexOf(document.activeElement);
    const nextIndex = currentIndex < 0
      ? 0
      : (currentIndex + direction + options.length) % options.length;
    options[nextIndex].focus();
  }

  function renderDayDetails(dateKey) {
    openedDay = dateKey;
    elements.dialogDate.textContent = formatDate(dateKey);
    const sessions = [];
    for (const session of sessionsForYear(Number(dateKey.slice(0, 4)))) {
      for (const part of splitSession(session, session.active ? Date.now() : undefined)) {
        if (part.date === dateKey) sessions.push({ ...part, session });
      }
    }
    sessions.sort((a, b) => a.start - b.start);
    const totals = new Map();
    for (const item of sessions) {
      const key = item.session.taskId ?? item.session.taskName;
      const aggregate = totals.get(key);
      if (aggregate) aggregate.milliseconds += item.milliseconds;
      else totals.set(key, { taskName: item.session.taskName, color: item.session.color, milliseconds: item.milliseconds });
    }
    const total = sessions.reduce((sum, item) => sum + item.milliseconds, 0);
    elements.daySummary.innerHTML = `<span>${sessions.length ? (sessions.length === 1 ? t("oneSession") : t("daySessionCount", { value: sessions.length })) : t("dayNoSessions")}</span><strong>${formatDuration(total, true)}</strong>`;
    if (!totals.size) elements.dayBreakdown.innerHTML = `<div class="empty-day">${safeText(t("dayEmpty"))}</div>`;
    else elements.dayBreakdown.innerHTML = [...totals.values()].map((item) => `
      <div class="breakdown-row"><span class="task-swatch" style="--swatch:${item.color}"></span>
      <span class="breakdown-name">${safeText(item.taskName)}</span><strong>${formatDuration(item.milliseconds, true)}</strong></div>`).join("");
    elements.sessionList.innerHTML = sessions.map((item) => {
      const active = item.session.active;
      const start = new Date(item.start).toLocaleTimeString(t("languageCode"), { hour: "2-digit", minute: "2-digit" });
      const end = active ? t("currentlyFocusing") : new Date(item.end).toLocaleTimeString(t("languageCode"), { hour: "2-digit", minute: "2-digit" });
      const ongoing = active ? `<span class="session-running-label">${safeText(t("currentlyFocusing"))}</span>` : "";
      const deleteButton = active ? "" : `<button type="button" data-delete-record="${safeText(item.session.id)}" title="${safeText(t("deleteRecordTitle"))}">${safeText(t("delete"))}</button>`;
      return `<div class="session-entry">
        <span class="task-swatch" style="--swatch:${item.session.color}"></span>
        <div class="session-entry-copy"><strong>${safeText(item.session.taskName)} ${ongoing}</strong>
          <span>${item.session.start < item.start ? safeText(t("spanningDay")) : ""}${start} – ${end}</span></div>
        <span class="session-duration">${formatDuration(item.milliseconds, true)}</span>${deleteButton}
      </div>`;
    }).join("");
    if (!elements.dayDialog.open) elements.dayDialog.showModal();
  }

  function render() {
    renderTaskSelect();
    renderTaskList();
    renderRunningSession();
    renderTodayFocusTime();
    if (!elements.calendarSection.hidden) {
      if (elements.calendarView.hidden) renderAnalysis();
      else renderCalendar();
    }
  }

  function startFocus() {
    if (!canWrite()) return;
    const task = state.tasks.find((item) => item.id === state.selectedTaskId);
    if (!task || state.active) return;
    hideMessage();
    const previousSelection = state.selectedTaskId;
    state.selectedTaskId = task.id;
    state.active = { id: makeId(), taskId: task.id, taskName: task.name, color: task.color, start: Date.now() };
    if (saveState()) render();
    else {
      state.active = null;
      state.selectedTaskId = previousSelection;
      render();
    }
  }

  function stopFocus() {
    if (!state.active) return;
    const stopTime = Date.now();
    elements.stopTaskName.textContent = state.active.taskName;
    elements.stopTaskDot.style.setProperty("--swatch", state.active.color);
    elements.stopStartTime.value = toDateTimeLocal(state.active.start);
    elements.stopEndTime.value = toDateTimeLocal(stopTime);
    elements.stopFormError.hidden = true;
    updateCorrectedDuration();
    elements.stopDialog.showModal();
  }

  function updateCorrectedDuration() {
    const start = new Date(elements.stopStartTime.value).getTime();
    const end = new Date(elements.stopEndTime.value).getTime();
    const now = Date.now();
    const valid = Number.isFinite(start) && Number.isFinite(end) && start < end && end <= now;
    elements.correctedDuration.textContent = valid ? formatDuration(end - start, true) : "—";
    elements.confirmStop.disabled = !valid;
    elements.stopFormError.textContent = !valid
      ? t("invalidStopTime")
      : "";
    elements.stopFormError.hidden = valid;
  }

  function saveStoppedFocus(event) {
    event.preventDefault();
    if (!state.active) {
      elements.stopDialog.close();
      return;
    }
    updateCorrectedDuration();
    if (elements.confirmStop.disabled) return;
    const start = new Date(elements.stopStartTime.value).getTime();
    const end = new Date(elements.stopEndTime.value).getTime();
    state.records.push({
      id: state.active.id,
      taskId: state.active.taskId,
      taskName: state.active.taskName,
      color: state.active.color,
      start,
      end
    });
    const active = state.active;
    state.active = null;
    if (!saveState()) {
      state.records.pop();
      state.active = active;
      render();
      return;
    }
    elements.stopDialog.close();
    render();
    if (openedDay) renderDayDetails(openedDay);
    showMessage(t("savedSession"));
    window.setTimeout(hideMessage, 2600);
  }

  function discardFocus() {
    if (!state.active) {
      elements.stopDialog.close();
      return;
    }
    const active = state.active;
    state.active = null;
    if (!saveState()) {
      state.active = active;
      render();
      return;
    }
    elements.stopDialog.close();
    render();
    if (openedDay) renderDayDetails(openedDay);
    showMessage(t("cancelledSession"));
    window.setTimeout(hideMessage, 2600);
  }

  function resetTaskForm() {
    editingTaskId = "";
    elements.taskForm.reset();
    elements.taskColor.value = nextTaskColor();
    elements.saveTaskButton.textContent = t("addTask");
    elements.cancelEdit.hidden = true;
  }

  function handleTaskSubmit(event) {
    event.preventDefault();
    if (!canWrite()) return;
    const name = elements.taskName.value.trim();
    const color = elements.taskColor.value;
    if (!name) {
      elements.taskName.focus();
      return;
    }
    let rollback = null;
    if (editingTaskId) {
      const task = state.tasks.find((item) => item.id === editingTaskId);
      if (!task) return;
      const previousName = task.name;
      const previousColor = task.color;
      const changedRecords = color === previousColor
        ? []
        : state.records.filter((record) => record.taskId === task.id && record.color !== color)
          .map((record) => ({ record, color: record.color }));
      const changedRecordNames = state.records
        .filter((record) => record.taskId === task.id && record.taskName !== name)
        .map((record) => ({ record, name: record.taskName }));
      const activeColor = state.active?.taskId === task.id ? state.active.color : null;
      const activeName = state.active?.taskId === task.id ? state.active.taskName : null;
      task.name = name;
      task.color = color;
      for (const { record } of changedRecordNames) record.taskName = name;
      if (state.active?.taskId === task.id) state.active.taskName = name;
      if (color !== previousColor) {
        for (const { record } of changedRecords) record.color = color;
        if (state.active?.taskId === task.id) state.active.color = color;
      }
      rollback = () => {
        task.name = previousName;
        task.color = previousColor;
        for (const { record, name: originalName } of changedRecordNames) record.taskName = originalName;
        for (const { record, color: originalColor } of changedRecords) record.color = originalColor;
        if (state.active?.taskId === task.id && activeName !== null) state.active.taskName = activeName;
        if (state.active?.taskId === task.id && activeColor) state.active.color = activeColor;
      };
    } else {
      const task = { id: makeId(), name, color };
      state.tasks.push(task);
      state.selectedTaskId = task.id;
      rollback = () => {
        state.tasks = state.tasks.filter((item) => item.id !== task.id);
        if (state.selectedTaskId === task.id) state.selectedTaskId = state.tasks[0]?.id ?? "";
      };
    }
    if (saveState()) {
      resetTaskForm();
      render();
      elements.taskName.focus();
    } else if (rollback) {
      rollback();
      elements.taskName.value = name;
      elements.taskColor.value = color;
    }
  }

  function editTask(id) {
    if (!canWrite()) return;
    const task = state.tasks.find((item) => item.id === id);
    if (!task) return;
    editingTaskId = id;
    elements.taskName.value = task.name;
    elements.taskColor.value = task.color;
    elements.saveTaskButton.textContent = t("saveChanges");
    elements.cancelEdit.hidden = false;
    elements.taskName.focus();
  }

  function deleteTask(id) {
    if (!canWrite()) return;
    if (state.active?.taskId === id) {
      showMessage(t("activeTaskCannotDelete"), true);
      return;
    }
    const task = state.tasks.find((item) => item.id === id);
    if (!task || !window.confirm(t("deleteTaskConfirm", { name: task.name }))) return;
    state.tasks = state.tasks.filter((item) => item.id !== id);
    if (state.selectedTaskId === id) state.selectedTaskId = state.tasks[0]?.id ?? "";
    if (editingTaskId === id) resetTaskForm();
    if (saveState()) render();
  }

  function deleteRecord(id) {
    const record = state.records.find((item) => item.id === id);
    if (!record) return;
    const spansDates = splitSession(record).length > 1;
    if (!window.confirm(`${t("deleteRecordConfirm", { name: record.taskName })}${spansDates ? t("deleteSpanningRecord") : ""}`)) return;
    state.records = state.records.filter((item) => item.id !== id);
    if (saveState()) {
      render();
      renderDayDetails(openedDay);
    }
  }

  function exportData() {
    if (recoveryNeeded) {
      showMessage(t("exportBlocked"), true);
      return;
    }
    try {
      const blob = new Blob([JSON.stringify({ ...state, exportedAt: new Date().toISOString() }, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${language === "en" ? "focus-time-backup" : "专注时间备份"}-${localDateKey(new Date())}.json`;
      link.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      showMessage(t("exportSuccess"));
      window.setTimeout(hideMessage, 2600);
    } catch (error) {
      showMessage(t("exportError", { error: error.message }), true);
    }
  }

  async function importData(file) {
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text());
      if (!validateState(parsed)) throw new Error(t("invalidBackup"));
      if (!window.confirm(t("importConfirm"))) return;
      const previous = state;
      const previousRecoveryNeeded = recoveryNeeded;
      state = { ...defaultState(), ...parsed };
      recoveryNeeded = false;
      if (saveState()) {
        resetTaskForm();
        render();
        hideMessage();
        showMessage(t("importSuccess"));
        window.setTimeout(hideMessage, 2600);
      } else {
        state = previous;
        recoveryNeeded = previousRecoveryNeeded;
      }
    } catch (error) {
      showMessage(t("importError", { error: error.message }), true);
    } finally {
      $("import-file").value = "";
    }
  }

  $("previous-year").addEventListener("click", () => { selectedYear -= 1; renderCalendar(); });
  $("next-year").addEventListener("click", () => { selectedYear += 1; renderCalendar(); });
  elements.themeToggle.addEventListener("click", () => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  });
  elements.languageToggle.addEventListener("click", () => {
    setLanguage(language === "zh" ? "en" : "zh");
  });
  document.querySelector(".view-tabs").addEventListener("click", (event) => {
    const tab = event.target.closest("[data-view]");
    if (!tab) return;
    const isAnalysis = tab.dataset.view === "analysis";
    elements.calendarView.hidden = isAnalysis;
    elements.analysisView.hidden = !isAnalysis;
    document.querySelectorAll(".view-tab").forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-selected", String(selected));
    });
    if (isAnalysis) renderAnalysis();
    else renderCalendar();
  });
  document.querySelector(".analysis-range").addEventListener("click", (event) => {
    const button = event.target.closest("[data-range]");
    if (!button) return;
    analysisRange = button.dataset.range;
    document.querySelectorAll(".range-button").forEach((item) =>
      item.setAttribute("aria-pressed", String(item === button))
    );
    renderAnalysis();
  });
  document.querySelector(".analysis-mode-switch").addEventListener("click", (event) => {
    const button = event.target.closest("[data-analysis-mode]");
    if (!button) return;
    analysisMode = button.dataset.analysisMode;
    document.querySelectorAll("[data-analysis-mode]").forEach((item) => {
      const selected = item === button;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    renderAnalysis();
  });
  elements.dailyAnalysisDate.addEventListener("change", () => {
    const today = localDateKey(new Date());
    const selectedDate = elements.dailyAnalysisDate.value;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(selectedDate) ||
        !Number.isFinite(parseDateKey(selectedDate).getTime()) ||
        localDateKey(parseDateKey(selectedDate)) !== selectedDate ||
        selectedDate > today) {
      elements.dailyAnalysisDate.value = analysisDate;
      showMessage(t("invalidSelectedDay"), true);
      return;
    }
    analysisDate = selectedDate;
    renderDailyPie();
  });
  elements.analysisTaskTrigger.addEventListener("click", () => {
    setTaskMenuOpen(
      elements.analysisTaskTrigger,
      elements.analysisTaskMenu,
      elements.analysisTaskMenu.hidden,
      elements.analysisTaskMenu.hidden
    );
  });
  elements.analysisTaskTrigger.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    setTaskMenuOpen(elements.analysisTaskTrigger, elements.analysisTaskMenu, true, true);
  });
  elements.analysisTaskMenu.addEventListener("click", (event) => {
    const option = event.target.closest("[data-task-id]");
    if (!option) return;
    analysisTaskId = option.dataset.taskId;
    setTaskMenuOpen(elements.analysisTaskTrigger, elements.analysisTaskMenu, false);
    renderAnalysis();
    elements.analysisTaskTrigger.focus();
  });
  elements.analysisTaskMenu.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      setTaskMenuOpen(elements.analysisTaskTrigger, elements.analysisTaskMenu, false);
      elements.analysisTaskTrigger.focus();
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      moveTaskMenuFocus(elements.analysisTaskMenu, event.key === "ArrowDown" ? 1 : -1);
    }
  });
  elements.focusTaskTrigger.addEventListener("click", () => {
    setTaskMenuOpen(elements.focusTaskTrigger, elements.focusTaskMenu, elements.focusTaskMenu.hidden, elements.focusTaskMenu.hidden);
  });
  elements.focusTaskTrigger.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    setTaskMenuOpen(elements.focusTaskTrigger, elements.focusTaskMenu, true, true);
  });
  elements.focusTaskMenu.addEventListener("click", (event) => {
    const option = event.target.closest("[data-focus-task-id]");
    if (!option) return;
    state.selectedTaskId = option.dataset.focusTaskId;
    if (!saveState()) return;
    setTaskMenuOpen(elements.focusTaskTrigger, elements.focusTaskMenu, false);
    renderTaskSelect();
    elements.focusTaskTrigger.focus();
  });
  elements.focusTaskMenu.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      setTaskMenuOpen(elements.focusTaskTrigger, elements.focusTaskMenu, false);
      elements.focusTaskTrigger.focus();
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      moveTaskMenuFocus(elements.focusTaskMenu, event.key === "ArrowDown" ? 1 : -1);
    }
  });
  document.addEventListener("pointerdown", (event) => {
    if (!elements.analysisTaskMenu.hidden && !event.target.closest(".analysis-task-picker")) {
      setTaskMenuOpen(elements.analysisTaskTrigger, elements.analysisTaskMenu, false);
    }
    if (!elements.focusTaskMenu.hidden && !event.target.closest(".focus-task-picker")) {
      setTaskMenuOpen(elements.focusTaskTrigger, elements.focusTaskMenu, false);
    }
  });
  elements.start.addEventListener("click", startFocus);
  elements.stop.addEventListener("click", stopFocus);
  elements.stopStartTime.addEventListener("input", updateCorrectedDuration);
  elements.stopEndTime.addEventListener("input", updateCorrectedDuration);
  elements.stopForm.addEventListener("submit", saveStoppedFocus);
  $("cancel-stop-button").addEventListener("click", () => elements.stopDialog.close());
  $("discard-focus-button").addEventListener("click", discardFocus);
  $("close-stop-dialog").addEventListener("click", () => elements.stopDialog.close());
  $("manage-tasks-button").addEventListener("click", () => {
    elements.taskManager.hidden = !elements.taskManager.hidden;
    if (!elements.taskManager.hidden) elements.taskName.focus();
  });
  $("toggle-insights-button").addEventListener("click", (event) => {
    const button = event.currentTarget;
    elements.calendarSection.hidden = !elements.calendarSection.hidden;
    button.setAttribute("aria-expanded", String(!elements.calendarSection.hidden));
    button.textContent = t(elements.calendarSection.hidden ? "showInsights" : "hideInsights");
    if (!elements.calendarSection.hidden) {
      if (elements.calendarView.hidden) renderAnalysis();
      else renderCalendar();
    }
  });
  $("close-task-manager").addEventListener("click", () => { elements.taskManager.hidden = true; });
  elements.taskForm.addEventListener("submit", handleTaskSubmit);
  elements.cancelEdit.addEventListener("click", resetTaskForm);
  elements.taskList.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-edit-task]");
    const deleteButton = event.target.closest("[data-delete-task]");
    if (editButton) editTask(editButton.dataset.editTask);
    if (deleteButton && !deleteButton.disabled) deleteTask(deleteButton.dataset.deleteTask);
  });
  elements.calendar.addEventListener("click", (event) => {
    const day = event.target.closest("[data-date]");
    if (day) renderDayDetails(day.dataset.date);
  });
  $("close-day-dialog").addEventListener("click", () => elements.dayDialog.close());
  elements.dayDialog.addEventListener("click", (event) => {
    if (event.target === elements.dayDialog) elements.dayDialog.close();
    const deleteButton = event.target.closest("[data-delete-record]");
    if (deleteButton) deleteRecord(deleteButton.dataset.deleteRecord);
  });
  $("export-button").addEventListener("click", exportData);
  $("import-button").addEventListener("click", () => $("import-file").click());
  $("import-file").addEventListener("change", (event) => importData(event.target.files[0]));
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      renderRunningSession();
      renderTodayFocusTime();
      const minute = Math.floor(Date.now() / 60000);
      if (minute !== lastCalendarMinute && !elements.calendarSection.hidden) {
        renderCalendar();
        if (!elements.analysisView.hidden) renderAnalysis();
      }
      if (openedDay && elements.dayDialog.open) renderDayDetails(openedDay);
    }
  });

  loadLanguage();
  loadTheme();
  loadState();
  render();
  window.setInterval(() => {
    const now = Date.now();
    if (state.active) renderRunningSession();
    if (state.active || localDateKey(new Date(now)) !== renderedTodayDate) {
      renderTodayFocusTime(now, false);
    }
    if (!state.active) return;
    const minute = Math.floor(Date.now() / 60000);
    if (minute !== lastCalendarMinute && !elements.calendarSection.hidden) {
      renderCalendar();
      if (!elements.analysisView.hidden) renderAnalysis();
      if (openedDay && elements.dayDialog.open) renderDayDetails(openedDay);
    }
  }, 1000);
})();
