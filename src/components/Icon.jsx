const paths = {
  bandage: <><rect x="9" y="5.4" width="6.8" height="13.2" rx="1.8" transform="rotate(45 12.4 12)" /><rect x="15.6" y="1" width="6.8" height="13.2" rx="1.8" transform="rotate(-45 19 7.6)" /><rect x="9.6" y="8.6" width="1.9" height="3.4" rx="0.9" /><rect x="13.5" y="12.5" width="1.9" height="3.4" rx="0.9" /></>,
  brain: <><path d="M12 5a3.5 3.5 0 0 0-3.2 2.1A3.5 3.5 0 0 0 5 10a3.4 3.4 0 0 0 .6 1.9A3.2 3.2 0 0 0 5.5 15a3 3 0 0 0 2.3 2.6A3.4 3.4 0 0 0 12 20a3.4 3.4 0 0 0 4.2-2.4A3 3 0 0 0 18.5 15a3.2 3.2 0 0 0-.1-3.1A3.4 3.4 0 0 0 19 10a3.5 3.5 0 0 0-3.8-2.9A3.5 3.5 0 0 0 12 5Z" /><path d="M12 5v15M8.6 7.8l3.4 4.2M15.4 7.8 12 12M6.5 11l5.5 1M17.5 11 12 12M7 15.5l5-3.5 5 3.5" /></>,
  bone: <><path d="M17.5 7.2a2.3 2.3 0 0 1 2.2-2.8c.2 0 .4 0 .6.1-1 2.6-8.6 9.7-10.5 11.6a2.3 2.3 0 0 1-3.6-2.6c1.3 1 5.7-2.7 8.6-5.6 2.9-2.9 7.6-2.3 6.6-1Z" /><path d="M15.5 4.5c1.5.4 2.4 1.4 3 2.7M4 19.5l5-5" /></>,
  heart: <><path d="M12 20s-7-4.6-9.2-9A5.4 5.4 0 0 1 12 6.6 5.4 5.4 0 0 1 21.2 11c-2.2 4.4-9.2 9-9.2 9Z" /></>,
  hearts: <><path d="M11 17.5S6 14.5 4.3 11.6a3.4 3.4 0 0 1 5-4.2A3.4 3.4 0 0 1 14.3 11.6C12.6 14.5 11 17.5 11 17.5Z" /><path d="M11.5 7.5a4.6 4.6 0 0 1 7.8 2.6c-.6 1.8-2 3.4-3.3 4.7" /></>,
  bed: <><path d="M2 18V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8h12v-3a2 2 0 0 1 2-2h1a1 1 0 0 1 1 1v8" /><path d="M2 14h20" /></>,
  shower: <><rect x="7" y="6" width="10" height="13" rx="2" /><rect x="15" y="3" width="2" height="3" rx="1" /><path d="M7 17h10" /><path d="M3 20c0-1.5 1-2 1-3M4 20c.8 0 1-.7 1-1.5M1 20c0-1.5 1-2 1-3" /></>,
  sofa: <><path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" /><path d="M3 11a2 2 0 0 1 2 2v2h14v-2a2 2 0 0 1 4 0v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Z" /><path d="M5 15v3M19 15v3" /></>,
  couch: <><rect x="2" y="14" width="20" height="4" rx="2" /><path d="M4 14v-3a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v3" /><path d="M2 20h20" /></>,
  door: <><path d="M4 21V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v17h-6" /><path d="M4 21h16" /><path d="M14 21v-2" /><circle cx="16.5" cy="12" r=".5" /></>,
  stairs: <><path d="M3 21h4v-4h4v-4h4V9h4V5h2" /><path d="M3 21V5h2" /></>,
  check: <path d="M4 12.5 9 17.5 20 6.5" />,
  printer: <><path d="M6 9V3h12v6" /><rect x="4" y="13" width="16" height="6" rx="1.5" /><path d="M6 13h12" /><rect x="7" y="16" width="10" height="3" rx="1" /></>,
  whatsapp: <><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" /><path d="M9 8.5c0 4 6.5 7.5 6.5 7.5S15.5 13 12.5 12.5C10.5 12 9.7 13 10 13.6c.2.4-.5 1.2-1 1-1.3-.6-2.3-2.7-1.5-4.7.8-1.8 4.5-2 4.5-2s-.2 2.6 1 3.4c.3-.2.7-.6.5-1C13.1 9.6 9 8.5 9 8.5Z" /></>,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowLeft: <path d="M19 12H5M11 6l-6 6 6 6" />,
  sparkle: <><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="M19 15l.7 2L22 17.7l-2.3.7-.7 2.1-.7-2.1-2.3-.8 2.3-.7.7-2Z" /></>,
  alert: <><path d="M12 2.5 22 20H2L12 2.5Z" /><path d="M12 9v4.5M12 17h.01" /></>,
  home: <><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M10 21v-6h4v6" /></>,
  clipboard: <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" /><path d="M9 11h6M9 15h6M9 7h2" /></>,
  cart: <><circle cx="9" cy="20" r="1.5" /><circle cx="17" cy="20" r="1.5" /><path d="M3 4h2l2.4 12h11l2.1-8H6.2" /></>,
  eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></>,
  list: <><path d="M8 6h13M8 12h13M8 18h13" /><path d="M3 6h.01M3 12h.01M3 18h.01" /></>,
  light: <><path d="M12 2v3M4 7l2 1M20 7l-2 1M5 15h14M8 15a4 4 0 1 1 8 0" /><path d="M9 18h6M9.5 21h5" /></>,
  pill: <><rect x="4" y="10" width="16" height="4" rx="2" transform="rotate(-30 12 12)" /><rect x="4" y="12.4" width="16" height="4" rx="2" transform="rotate(-30 12 14.4)" /></>,
  shield: <><path d="M12 2.5 4 5.5V12c0 4.6 3.4 8 8 9.5 4.6-1.5 8-4.9 8-9.5V5.5l-8-3Z" /><path d="m8.5 12 2.5 2.5 4.5-4.5" /></>,
  restart: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /></>,
  download: <><path d="M12 3v12M7 10l5 5 5-5" /><path d="M4 21h16" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  water: <><path d="M12 3s6 6.5 6 10.5a6 6 0 0 1-12 0C6 9.5 12 3 12 3Z" /><path d="M9.5 13.5a2.5 2.5 0 0 0 2.5 2.5" /></>,
  book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /><path d="M8 7h8M8 11h8" /></>,
  externalLink: <><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></>,
  send: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>,
  message: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  user: <><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
  bot: <><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4M8 16h.01M16 16h.01" /></>,
  close: <path d="M18 6 6 18M6 6l12 12" />,
  lock: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
  key: <path d="m21 2-2 2m-1.5 1.5L14 9l-4.5-4.5a6.5 6.5 0 1 0 3 8.5l7-7V4h-2v2h-2v2h-2" />,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></>,
}

export function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.8 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.sparkle}
    </svg>
  )
}