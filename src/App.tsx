/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Monitor, 
  FileText, 
  Folder, 
  Palette, 
  FolderLock, 
  Github, 
  FileUser, 
  Phone, 
  BarChart, 
  Trash2, 
  Terminal, 
  Calculator,
  LayoutGrid,
  Accessibility,
  Sun,
  Power,
  Archive,
  FileCode,
  FileImage,
  XCircle,
  RotateCcw,
  Minus,
  Square,
  X,
  Search,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Settings,
  Plus,
  Pencil,
  Eraser,
  Circle,
  Download,
  Trash,
  Sparkles,
  Globe,
  Image,
  Mail,
  MessageSquare,
  MapPin,
  Linkedin,
  Moon,
  Zap,
  Video,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Custom Windows 7 Style Icons (Refined) ---

const Win7Computer = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="monitorBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f3f4f6" />
        <stop offset="50%" stopColor="#d1d5db" />
        <stop offset="100%" stopColor="#9ca3af" />
      </linearGradient>
      <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#4facfe" />
        <stop offset="100%" stopColor="#00f2fe" />
      </linearGradient>
      <filter id="outerGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="1" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    {/* Base/Stand */}
    <ellipse cx="24" cy="44" rx="12" ry="3" fill="#374151" opacity="0.4" />
    <path d="M18 36L16 42H32L30 36H18Z" fill="#9CA3AF" stroke="#6B7280" />
    {/* Monitor Case */}
    <rect x="3" y="2" width="42" height="34" rx="3" fill="url(#monitorBody)" stroke="#6B7280" strokeWidth="0.5" />
    <rect x="5" y="4" width="38" height="30" rx="1.5" fill="#1F2937" />
    {/* LCD Screen */}
    <rect x="7" y="6" width="34" height="26" rx="1" fill="url(#screenGrad)" />
    {/* Reflection lines */}
    <path d="M7 6L41 6L7 32V6Z" fill="white" fillOpacity="0.15" />
    <path d="M30 6L41 6L41 15L30 6Z" fill="white" fillOpacity="0.1" />
  </svg>
);

const Win7Folder = ({ size = 48, restricted = false, label = "" }: { size?: number; restricted?: boolean; label?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="folderBack" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <linearGradient id="folderFront" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffe08a" />
        <stop offset="20%" stopColor="#fde68a" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <path d="M4 12C4 10.34 5.34 9 7 9H18L22 13H41C42.66 13 44 14.34 44 16V38C44 39.66 42.66 41 41 41H7C5.34 41 4 39.66 4 38V12Z" fill="url(#folderBack)" stroke="#92400e" strokeWidth="0.5" />
    <path d="M4 17C4 15.34 5.34 14 7 14H41C42.66 14 44 15.34 44 17V38C44 39.66 42.66 41 41 41H7C5.34 41 4 39.66 4 38V17Z" fill="url(#folderFront)" stroke="#b45309" strokeWidth="0.5" />
    {restricted && (
      <g transform="translate(26, 22)">
        <circle cx="10" cy="10" r="10" fill="white" />
        <circle cx="10" cy="10" r="8" fill="#ef4444" stroke="#b91c1c" strokeWidth="1" />
        <rect x="5" y="9" width="10" height="2" fill="white" rx="0.5" />
      </g>
    )}
  </svg>
);

const Win7Document = ({ size = 48, variant = 'plain' }: { size?: number; variant?: 'plain' | 'skills' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="32" height="40" rx="1.5" fill="#FFFFFF" stroke="#d1d5db" strokeWidth="0.5" />
    <path d="M30 4L40 14H31.5C30.67 14 30 13.33 30 12.5V4Z" fill="#F3F4F6" stroke="#d1d5db" strokeWidth="0.5" />
    {/* Paper Texture Lines */}
    <g stroke="#F3F4F6" strokeWidth="0.5">
       {Array.from({length: 20}).map((_, i) => (
         <line key={i} x1="10" y1={8 + i*2} x2="38" y2={8 + i*2} />
       ))}
    </g>
    {/* Content lines */}
    <g fill="#E5E7EB">
      <rect x="12" y="16" width="24" height="1" />
      <rect x="12" y="20" width="24" height="1" />
      <rect x="12" y="24" width="18" height="1" />
    </g>
    {variant === 'skills' && (
      <g transform="translate(18, 26)">
        {/* Graph columns */}
        <rect x="4" y="6" width="4" height="8" fill="#F97316" rx="0.5" stroke="#EA580C" strokeWidth="0.2" />
        <rect x="10" y="2" width="4" height="12" fill="#3B82F6" rx="0.5" stroke="#2563EB" strokeWidth="0.2" />
        <rect x="16" y="-2" width="4" height="16" fill="#8B5CF6" rx="0.5" stroke="#7C3AED" strokeWidth="0.2" />
        {/* Star */}
        <path d="M22 -10 L24 -4 L30 -4 L25 0 L27 6 L22 2 L17 6 L19 0 L14 -4 L20 -4 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="0.5" transform="scale(0.8) translate(-5, -5)" />
      </g>
    )}
  </svg>
);

const Win7Terminal = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Window Frame */}
    <rect x="3" y="6" width="42" height="34" rx="2" fill="#1F2937" stroke="#4B5563" strokeWidth="1" />
    {/* Title Bar */}
    <rect x="3" y="6" width="42" height="7" rx="1" fill="#374151" stroke="#4B5563" strokeWidth="0.5" />
    <g transform="translate(36, 8)">
       <rect x="0" y="0" width="6" height="3" fill="#EF4444" rx="0.5" />
       <rect x="-6" y="0" width="5" height="3" fill="#9CA3AF" rx="0.5" />
    </g>
    {/* Content */}
    <text x="6" y="20" fill="#22C55E" fontSize="4.5" fontFamily="monospace" style={{fontWeight: 700}}>C:\Users\M.Taibe&gt;</text>
    <text x="6" y="28" fill="#FFFFFF" opacity="0.9" fontSize="4" fontFamily="monospace">Microsoft Windows [Version 6.1.7601]</text>
    <text x="6" y="36" fill="#22C55E" fontSize="4.5" fontFamily="monospace">_</text>
  </svg>
);

const Win7Calculator = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="4" width="36" height="40" rx="3" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="1" />
    {/* Display */}
    <rect x="9" y="8" width="30" height="10" rx="1" fill="#d1fae5" stroke="#059669" strokeWidth="1" />
    <text x="36" y="15" fill="#065F46" fontSize="7" fontFamily="monospace" textAnchor="end" style={{fontWeight: 900}}>0</text>
    {/* Buttons Grid */}
    <g transform="translate(10, 22)">
      {[0, 1, 2, 3].map(r => [0, 1, 2, 3].map(c => (
        <rect key={`${r}-${c}`} x={c * 7.5} y={r * 5} width="6" height="4" rx="0.5" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="0.3" />
      )))}
    </g>
  </svg>
);

const Win7Notepad = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="32" height="40" rx="1" fill="#FFFFFF" stroke="#d1d5db" />
    <rect x="8" y="4" width="32" height="5" fill="#3b82f6" opacity="0.8" />
    {/* Page content */}
    <g stroke="#f3f4f6" strokeWidth="1.5">
      <line x1="12" y1="14" x2="36" y2="14" />
      <line x1="12" y1="18" x2="36" y2="18" />
      <line x1="12" y1="22" x2="36" y2="22" />
      <line x1="12" y1="26" x2="36" y2="26" />
    </g>
  </svg>
);

const Win7Paint = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="paletteGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#d97706" />
        <stop offset="100%" stopColor="#92400e" />
      </linearGradient>
    </defs>
    <path d="M10 24C10 32 16 38 24 38C32 38 38 32 38 24C38 16 32 10 24 10C20 10 16 12 14 14C12 16 10 20 10 24Z" fill="url(#paletteGrad)" stroke="#78350f" strokeWidth="1" />
    {/* Paint blobs with highlights */}
    <g>
      <circle cx="18" cy="18" r="3" fill="#ef4444" stroke="white" strokeWidth="0.5" />
      <circle cx="20" cy="17" r="1" fill="white" opacity="0.4" />
    </g>
    <g>
      <circle cx="26" cy="16" r="3" fill="#3b82f6" stroke="white" strokeWidth="0.5" />
      <circle cx="28" cy="15" r="1" fill="white" opacity="0.4" />
    </g>
    <g>
      <circle cx="32" cy="22" r="3" fill="#22c55e" stroke="white" strokeWidth="0.5" />
      <circle cx="34" cy="21" r="1" fill="white" opacity="0.4" />
    </g>
    <g>
      <circle cx="28" cy="30" r="3" fill="#facc15" stroke="white" strokeWidth="0.5" />
      <circle cx="30" cy="29" r="1" fill="white" opacity="0.4" />
    </g>
    {/* Brushes */}
    <path d="M36 12L44 4L47 7L39 15L36 12Z" fill="#4b5563" stroke="#1f2937" strokeWidth="0.5" />
    <path d="M44 4L47 7L45 5L44 4Z" fill="#fbbf24" filter="url(#outerGlow)" />
  </svg>
);

const Win7Phone = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="phoneBodyGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#22c55e" />
        <stop offset="50%" stopColor="#16a34a" />
        <stop offset="100%" stopColor="#14532d" />
      </linearGradient>
      <filter id="phoneShadow" x="-2" y="-2" width="52" height="52">
        <feDropShadow dx="1" dy="1" stdDeviation="1" floodOpacity="0.3" />
      </filter>
    </defs>
    {/* Base of the phone */}
    <path d="M14 22 C14 18 18 16 24 16 C30 16 34 18 34 22 L34 34 C34 38 30 40 24 40 C18 40 14 38 14 34 Z" fill="url(#phoneBodyGrad)" filter="url(#phoneShadow)" />
    {/* Handset Top */}
    <path d="M12 10 C12 7 16 6 24 6 C32 6 36 7 36 10 L36 14 C36 16 34 18 32 18 L16 18 C14 18 12 16 12 14 Z" fill="url(#phoneBodyGrad)" stroke="#064e3b" strokeWidth="0.5" />
    {/* Buttons Area */}
    <rect x="20" y="22" width="8" height="12" rx="1" fill="#065F46" opacity="0.3" />
    <g transform="translate(21, 24)">
       {[0,1,2].map(r => [0,1].map(c => (
         <circle key={`${r}-${c}`} cx={c*3 + 1} cy={r*4 + 1} r="0.8" fill="white" opacity="0.8" />
       )))}
    </g>
    {/* Coiled Cord */}
    <path d="M14 34 Q 10 34 8 38 Q 6 42 10 44 Q 14 46 18 42" stroke="#059669" strokeWidth="1.5" fill="none" strokeDasharray="1 2" strokeLinecap="round" />
    {/* Gloss Reflection */}
    <path d="M14 10 L34 10 Q 30 7 24 7 Q 18 7 14 10" fill="white" fillOpacity="0.2" />
  </svg>
);

const Win7RecycleBin = ({ size = 48, isEmpty = false }: { size?: number, isEmpty?: boolean }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="meshPattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <path d="M 4 0 L 0 0 0 4" fill="none" stroke="#9CA3AF" strokeWidth="0.5" opacity="0.5"/>
      </pattern>
      <linearGradient id="rimGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F3F4F6" />
        <stop offset="100%" stopColor="#9CA3AF" />
      </linearGradient>
    </defs>
    {/* Trash inside */}
    {!isEmpty && (
      <g opacity="0.6">
        <path d="M18 20 L24 25 L30 18 L28 35 L16 32 Z" fill="#94a3b8" />
        <path d="M22 15 L32 20 L28 40 L20 38 Z" fill="#64748b" />
      </g>
    )}
    {/* Mesh body */}
    <path d="M12 12 L16 42 L32 42 L36 12 Z" fill="url(#meshPattern)" stroke="#9CA3AF" strokeWidth="0.5" />
    <path d="M12 12 H36 L34 42 H14 L12 12 Z" fill="black" fillOpacity="0.05" />
    {/* Top Rim */}
    <rect x="10" y="8" width="28" height="4" rx="1.5" fill="url(#rimGrad)" stroke="#6B7280" strokeWidth="0.5" />
    {/* Back internal part of the rim */}
    <path d="M12 12 H36 L34 15 H14 L12 12 Z" fill="#9CA3AF" fillOpacity="0.3" />
    {/* Inner shadow/depth */}
    <path d="M12 12 L16 42" stroke="#6B7280" strokeWidth="0.5" opacity="0.5" />
    <path d="M36 12 L32 42" stroke="#6B7280" strokeWidth="0.5" opacity="0.5" />
  </svg>
);

const Win7ZipIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="zipFolderGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <linearGradient id="zipperGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#9ca3af" />
        <stop offset="100%" stopColor="#4b5563" />
      </linearGradient>
    </defs>
    {/* Shadow */}
    <path d="M6 14 L18 14 L22 18 L42 18 V40 H6 Z" fill="black" fillOpacity="0.1" transform="translate(1, 1)" />
    {/* Main Folder Body */}
    <path d="M6 14 C6 12.34 7.34 11 9 11 H18 L22 15 H41 C42.66 15 44 16.34 44 18 V38 C44 39.66 42.66 41 41 41 H9 C7.34 41 6 39.66 6 38 V14Z" fill="url(#zipFolderGrad)" stroke="#92400e" strokeWidth="0.5" />
    <path d="M6 20 C6 18.34 7.34 17 9 17 H41 C42.66 17 44 18.34 44 20 V38 C44 39.66 42.66 41 41 41 H9 C7.34 41 6 39.66 6 38 V20Z" fill="#ffe08a" stroke="#b45309" strokeWidth="0.5" />
    {/* Zipper details */}
    <rect x="22" y="17" width="4" height="24" fill="url(#zipperGrad)" />
    <g stroke="white" strokeWidth="0.5" opacity="0.4">
       {Array.from({length: 8}).map((_, i) => (
         <rect key={i} x="22.5" y={19 + i*2.5} width="3" height="1.5" rx="0.2" fill="#374151" />
       ))}
    </g>
    <rect x="21" y="30" width="6" height="8" rx="1" fill="#4B5563" stroke="#1F2937" strokeWidth="0.5" />
    <rect x="23" y="32" width="2" height="4" rx="0.5" fill="#9CA3AF" />
    <path d="M6 20 H44" stroke="#92400e" strokeWidth="0.2" opacity="0.3" />
  </svg>
);

const Win7TextDocIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="docShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0.5" dy="0.5" stdDeviation="1" floodOpacity="0.2" />
      </filter>
    </defs>
    <rect x="8" y="4" width="32" height="40" rx="1" fill="white" stroke="#d1d5db" strokeWidth="0.5" filter="url(#docShadow)" />
    <rect x="8" y="4" width="32" height="3" fill="#3b82f6" />
    <g stroke="#e2e8f0" strokeWidth="1">
       {Array.from({length: 12}).map((_, i) => (
         <line key={i} x1="12" y1={12 + i*2.5} x2={30 + (i%2)*6} y2={12 + i*2.5} />
       ))}
    </g>
    <path d="M8 4 L40 4 L40 10 L8 4Z" fill="white" fillOpacity="0.2" />
  </svg>
);

const Win7CodeDocIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="32" height="40" rx="1.5" fill="#f8fafc" stroke="#64748b" strokeWidth="0.5" />
    <rect x="8" y="4" width="32" height="4" fill="#64748b" />
    <g transform="translate(12, 12)">
       <rect x="0" y="0" width="10" height="2" fill="#3b82f6" rx="0.5" />
       <rect x="12" y="0" width="14" height="2" fill="#ef4444" rx="0.5" />
       <rect x="0" y="4" width="18" height="2" fill="#10b981" rx="0.5" />
       <rect x="20" y="4" width="6" height="2" fill="#f59e0b" rx="0.5" />
       <rect x="0" y="8" width="12" height="2" fill="#8b5cf6" rx="0.5" />
       <rect x="14" y="8" width="8" height="2" fill="#3b82f6" rx="0.5" />
       <rect x="0" y="14" width="24" height="6" fill="#1e293b" rx="1" />
       <text x="4" y="19" fill="#10b981" fontSize="4" fontFamily="monospace" style={{fontWeight: 900}}>&lt;/&gt;</text>
    </g>
    <path d="M8 4 L40 4 V44 L8 4Z" fill="white" fillOpacity="0.05" />
  </svg>
);

const Win7ImageDocIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="32" height="40" rx="1.5" fill="#FFFFFF" stroke="#d1d5db" strokeWidth="0.5" />
    <rect x="10" y="6" width="28" height="20" fill="#f1f5f9" />
    <circle cx="28" cy="11" r="2" fill="#facc15" />
    <path d="M10 26 L16 18 L24 26 L32 15 L38 26 H10Z" fill="#10b981" />
    <g transform="translate(14, 30)">
       <circle cx="2" cy="2" r="3" fill="#ef4444" />
       <circle cx="8" cy="2" r="3" fill="#3b82f6" />
       <circle cx="14" cy="2" r="3" fill="#22c55e" />
       <path d="M18 0 L24 4 L22 6 L16 2 Z" fill="#94a3b8" />
    </g>
  </svg>
);

const Win7WordDocIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="32" height="40" rx="1.5" fill="white" stroke="#2563eb" strokeWidth="0.5" />
    <rect x="8" y="4" width="32" height="6" fill="#2563eb" />
    <g transform="translate(18, 18)">
       <text x="0" y="14" fill="#2563eb" fontSize="16" fontWeight="bold" fontFamily="sans-serif">W</text>
    </g>
    <g stroke="#e2e8f0" strokeWidth="1">
       {Array.from({length: 6}).map((_, i) => (
         <line key={i} x1="12" y1={30 + i*2} x2="36" y2={30 + i*2} />
       ))}
    </g>
  </svg>
);

const Win7PythonDocIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="32" height="40" rx="1.5" fill="#f8fafc" stroke="#d1d5db" strokeWidth="0.5" />
    {/* Python Logo Center */}
    <g transform="translate(14, 14) scale(0.4)">
       <path d="M25.12 0C11.23 0 12.55 6 12.55 6L12.58 12.27H25.37V14.1H7.42C7.42 14.1 0 14.94 0 28.52C0 42.11 6.55 41.7 6.55 41.7H11.72V34.42C11.72 34.42 11.4 25.84 20.31 25.84H33.09C33.09 25.84 41.44 25.5 41.44 17.51C41.44 9.53 36.31 0 25.12 0ZM18.73 3.96C19.98 3.96 21.01 4.99 21.01 6.24C21.01 7.5 19.98 8.52 18.73 8.52C17.47 8.52 16.45 7.5 16.45 6.24C16.45 4.99 17.47 3.96 18.73 3.96Z" fill="#3776ab"/>
       <path d="M16.32 50.88C30.21 50.88 28.89 44.88 28.89 44.88L28.86 38.61H16.07V36.78H34.02C34.02 36.78 41.44 35.94 41.44 22.36C41.44 8.77 34.89 9.18 34.89 9.18H29.72V16.46C29.72 16.46 30.04 25.04 21.13 25.04H8.35C8.35 25.04 -0 25.38 -0 33.37C-0 41.35 5.13 50.88 16.32 50.88ZM22.71 46.92C21.46 46.92 20.43 45.89 20.43 44.64C20.43 43.38 21.46 42.36 22.71 42.36C23.97 42.36 24.99 43.38 24.99 44.64C24.99 45.89 23.97 46.92 22.71 46.92Z" fill="#ffd343"/>
    </g>
     <g stroke="#94a3b8" strokeWidth="1" opacity="0.4">
       {Array.from({length: 4}).map((_, i) => (
         <line key={i} x1="12" y1={30 + i*2} x2="36" y2={30 + i*2} />
       ))}
    </g>
  </svg>
);

const Win7RunIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="28" height="28" rx="2" fill="white" stroke="#94a3b8" strokeWidth="1" />
    <rect x="14" y="14" width="20" height="3" fill="#3b82f6" />
    <path d="M14 22 L20 22 L20 25 L24 21 L20 17 L20 20 L14 20 Z" fill="#3b82f6" />
    <rect x="14" y="28" width="10" height="1" fill="#cbd5e1" />
    <rect x="14" y="31" width="16" height="1" fill="#cbd5e1" />
  </svg>
);

// --- Universal Window Wrapper (Aero UI) ---

interface OSWindowProps {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  containerRef?: React.RefObject<HTMLDivElement>;
  width?: string;
  height?: string;
  children: React.ReactNode;
}

const OSWindow = ({ 
  title, 
  icon: Icon, 
  isOpen, 
  isMinimized, 
  isMaximized, 
  zIndex,
  onClose, 
  onMinimize, 
  onMaximize,
  onFocus,
  containerRef,
  width = '640px',
  height = '420px',
  children 
}: OSWindowProps) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!isOpen) {
      // Reset position when window opens
      setPos({ x: window.innerWidth * 0.2, y: window.innerHeight * 0.15 });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const nextX = e.clientX - dragOffset.current.x;
        const nextY = e.clientY - dragOffset.current.y;
        
        // Clamp Y between 0 and screen height minus a bit for visibility
        // Clamp X so at least some part of the window is always visible
        const clampedX = Math.max(-600, Math.min(window.innerWidth - 40, nextX));
        const clampedY = Math.max(0, Math.min(window.innerHeight - 60, nextY));

        setPos({ x: clampedX, y: clampedY });
      }
    };
    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return;
    setIsDragging(true);
    dragOffset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y
    };
    onFocus();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onMouseDown={onFocus}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ 
            opacity: isMinimized ? 0 : (isOpen ? 1 : 0), 
            scale: isMinimized ? 0.2 : 1, 
            y: isMinimized ? 100 : (isMaximized ? 0 : pos.y),
            x: isMinimized ? 0 : (isMaximized ? 0 : pos.x),
            width: isMaximized ? '100%' : width,
            height: isMinimized ? 0 : (isMaximized ? 'calc(100% - 40px)' : height),
            top: 0,
            left: 0,
            borderRadius: isMaximized ? '0px' : '8px',
            transitionEnd: {
              display: isMinimized ? 'none' : 'flex'
            }
          }}
          style={{ zIndex, display: isMinimized ? 'none' : 'flex' }}
          ref={containerRef}
          className={`absolute bg-white/70 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/40 overflow-hidden flex flex-col ${isMaximized ? '' : 'rounded-lg ring-1 ring-black/10'}`}
        >
          {/* Aero Header Glass Reflection */}
          {!isMaximized && (
             <div className="absolute top-0 left-0 w-full h-[30px] bg-white/10 pointer-events-none z-10 skew-x-[-35deg] translate-x-[-40%] filter blur-[2px]" />
          )}
          {/* Header */}
          <div 
            className={`h-10 bg-gradient-to-b from-blue-400/50 to-blue-600/70 flex items-center justify-between px-3 select-none relative z-20 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] ${isMaximized ? '' : 'cursor-move'}`}
            onMouseDown={handleMouseDown}
            onDoubleClick={onMaximize}
          >
            <div className="flex items-center gap-2">
              <Icon size={18} />
              <span className="text-white text-[13px] font-medium drop-shadow-sm font-sans">{title}</span>
            </div>
            <div className="flex items-center gap-0.5">
              <div 
                onClick={(e) => { e.stopPropagation(); onMinimize(); }}
                className="w-10 h-7 flex items-center justify-center hover:bg-white/20 rounded-sm transition-all cursor-pointer group shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
              >
                <Minus size={16} className="text-white transition-opacity group-hover:opacity-100 opacity-80" />
              </div>
              <div 
                onClick={(e) => { e.stopPropagation(); onMaximize(); }}
                className="w-10 h-7 flex items-center justify-center hover:bg-white/20 rounded-sm transition-all cursor-pointer group shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
              >
                <div className="w-3 h-3 border-2 border-white/80 group-hover:border-white transition-colors" />
              </div>
              <div 
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                className="w-12 h-7 flex items-center justify-center bg-red-500/80 hover:bg-red-500 rounded-sm transition-all cursor-pointer group shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
              >
                <X size={18} className="text-white transition-transform group-hover:rotate-90 duration-300" />
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col bg-white">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const desktopIcons = [
  { id: 1, name: 'My Computer', component: Win7Computer },
  { id: 2, name: "M.Taibe's Projects", component: Win7Folder },
  { id: 3, name: 'Private Files', component: (props: any) => <Win7Folder {...props} restricted /> },
  { id: 4, name: 'My Resume', component: Win7Document },
  { id: 5, name: "M.Taibe's Skills", component: (props: any) => <Win7Document {...props} variant="skills" /> },
  { id: 6, name: 'Terminal', component: Win7Terminal },
  { id: 7, name: 'Calculator', component: Win7Calculator },
  { id: 8, name: 'Notepad', component: Win7Notepad },
  { id: 9, name: 'Paint', component: Win7Paint },
  { id: 10, name: 'GitHub', icon: Github, color: 'text-white' }, // GitHub stays as Lucide but I'll add context
  { id: 11, name: 'Contact M.Taibe', component: Win7Phone },
  { id: 12, name: 'Recycle Bin', component: Win7RecycleBin },
];

export default function App() {
  const [topZIndex, setTopZIndex] = useState(200);
  const binRef = useRef<HTMLDivElement>(null);
  const binWindowRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const [desktopIcons, setDesktopIcons] = useState([
    { id: 1, name: 'My Computer', component: Win7Computer },
    { id: 2, name: "M.Taibe's Projects", component: Win7Folder },
    { id: 3, name: 'Private Files', component: (props: any) => <Win7Folder {...props} restricted /> },
    { id: 4, name: 'My Resume', component: Win7Document },
    { id: 5, name: "M.Taibe's Skills", component: (props: any) => <Win7Document {...props} variant="skills" /> },
    { id: 6, name: 'Terminal', component: Win7Terminal },
    { id: 7, name: 'Calculator', component: Win7Calculator },
    { id: 8, name: 'Notepad', component: Win7Notepad },
    { id: 9, name: 'Paint', component: Win7Paint },
    { id: 10, name: 'GitHub', icon: Github, color: 'text-white' },
    { id: 11, name: 'Contact M.Taibe', component: Win7Phone },
    { id: 12, name: 'Recycle Bin', component: Win7RecycleBin },
  ]);
  const [iconSize, setIconSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [sortBy, setSortBy] = useState<'name' | 'id'>('id');
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [notepadText, setNotepadText] = useState(`Hello!\n\nWelcome to M.Taibe's Windows 7 Portfolio.\nFeel free to explore the desktop icons.`);
  const [notepadWrap, setNotepadWrap] = useState(true);
  const [notepadFontSize, setNotepadFontSize] = useState('13px');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedUser, setSelectedUser] = useState("M.Taibe");
  const [password, setPassword] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [showAccessibilityToast, setShowAccessibilityToast] = useState(false);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [isRunOpen, setIsRunOpen] = useState(false);
  const [runInput, setRunInput] = useState('');
  const [recycleFiles, setRecycleFiles] = useState([
    { name: 'old_portfolio_v1_final_FINAL.zip', icon: Win7ZipIcon, color: '' },
    { name: 'My_Secret_Masterplan.txt', icon: Win7TextDocIcon, color: '' },
    { name: 'React_Framework_Boilerplate.js', icon: Win7CodeDocIcon, color: '' },
    { name: 'cringe_meme_2016.png', icon: Win7ImageDocIcon, color: '' },
    { name: 'TODO_list_from_2022.docx', icon: Win7WordDocIcon, color: '' },
    { name: 'bug_that_made_me_cry.py', icon: Win7PythonDocIcon, color: '' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectedIconId, setSelectedIconId] = useState<number | null>(null);
  const [isNotepadSearchOpen, setIsNotepadSearchOpen] = useState(false);
  const [notepadSearchQuery, setNotepadSearchQuery] = useState('');
  const [notepadReplaceQuery, setNotepadReplaceQuery] = useState('');
  const [isReplaceMode, setIsReplaceMode] = useState(false);
  const [wallpaper, setWallpaper] = useState('https://i.pinimg.com/1200x/da/28/8d/da288dceaafd7c97f1b09c594eac7868.jpg');
  const [isPersonalizeOpen, setIsPersonalizeOpen] = useState(false);
  const [desktopContextMenu, setDesktopContextMenu] = useState<{ x: number, y: number } | null>(null);

  const startMenuApps = [
    { name: "M.Taibe's Projects", id: 2 },
    { name: "My Resume", id: 4 },
    { name: "Terminal", id: 6 },
    { name: "Calculator", id: 7 },
    { name: "Notepad", id: 8 },
    { name: "Paint", id: 9 },
    { name: "GitHub", id: 10 },
    { name: "Contact M.Taibe", id: 11 },
  ];

  const filteredStartApps = startMenuApps.filter(app => 
    app.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const wallpapers = [
    { name: 'Dark Aesthetic', url: 'https://i.pinimg.com/1200x/da/28/8d/da288dceaafd7c97f1b09c594eac7868.jpg' },
    { name: 'Windows 7 Legacy', url: 'https://images.wallpapersden.com/image/download/windows-7-official-hd_a21ubmeUmZqaraWkpJRmbmdlrWZlbWU.jpg' },
    { name: 'Scenic View', url: 'https://i.pinimg.com/1200x/54/aa/9d/54aa9d05ac9be7c4bcb9572670c67683.jpg' },
    { name: 'Mountain Peak', url: 'https://i.pinimg.com/736x/fe/c3/db/fec3db297d630dbcec7a984a3cb7acbf.jpg' },
    { name: 'Modern Abstract', url: 'https://i.pinimg.com/736x/32/85/90/3285908580d255634267555bae2d61a8.jpg' },
    { name: 'Forest Path', url: 'https://i.pinimg.com/736x/56/ae/7f/56ae7f613917b3b214c1bd0c5a1585ae.jpg' },
    { name: 'Ocean Mist', url: 'https://i.pinimg.com/736x/cf/44/40/cf44402fef0094274b7347e4b6cfd33d.jpg' },
  ];

  const deleteIcon = (id: number) => {
    if (id === 12) return; // Can't delete the bin
    const icon = desktopIcons.find(i => i.id === id);
    if (icon) {
      setRecycleFiles(prev => [...prev, { ...icon, originalId: icon.id }]);
      setDesktopIcons(prev => prev.filter(i => i.id !== id));
      if (clickSound.current) clickSound.current.play().catch(() => {});
    }
  };

  const handleRestoreFile = (fileIndex: number) => {
    const file = recycleFiles[fileIndex];
    if (file) {
      setDesktopIcons(prev => [...prev, { ...file, id: (file as any).originalId || Math.max(...prev.map(i => i.id)) + 1 }]);
      setRecycleFiles(prev => prev.filter((_, i) => i !== fileIndex));
      if (clickSound.current) clickSound.current.play().catch(() => {});
    }
  };

  const handleIconDragEnd = (event: any, info: any, iconId: number) => {
    if (iconId === 12) return; // Bin can't be dragged into itself
    
    const binElement = binRef.current;
    if (binElement) {
      const binRect = binElement.getBoundingClientRect();
      const dropX = info.point.x;
      const dropY = info.point.y;

      if (
        dropX >= binRect.left &&
        dropX <= binRect.right &&
        dropY >= binRect.top &&
        dropY <= binRect.bottom
      ) {
        deleteIcon(iconId);
      }
    }
  };

  const handleRecycleItemDragEnd = (event: any, info: any, fileIndex: number) => {
    const desktopElement = desktopRef.current;
    const binWindowElement = binWindowRef.current;
    
    if (desktopElement) {
      const desktopRect = desktopElement.getBoundingClientRect();
      const dropX = info.point.x;
      const dropY = info.point.y;

      let droppedInBinWindow = false;
      if (binWindowElement) {
        const binRect = binWindowElement.getBoundingClientRect();
        droppedInBinWindow = (
          dropX >= binRect.left &&
          dropX <= binRect.right &&
          dropY >= binRect.top &&
          dropY <= binRect.bottom
        );
      }

      // Restore if dropped on desktop AND NOT inside the bin window
      if (
        !droppedInBinWindow &&
        dropX >= desktopRect.left &&
        dropX <= desktopRect.right &&
        dropY >= desktopRect.top &&
        dropY <= desktopRect.bottom
      ) {
        handleRestoreFile(fileIndex);
      }
    }
  };

  const handleRefresh = () => {
    if (clickSound.current) clickSound.current.play().catch(() => {});
    setIsRefreshing(true);
    setDesktopContextMenu(null);
    setTimeout(() => setIsRefreshing(false), 500);
  };

  const handleCreateNew = (type: 'folder' | 'text') => {
    if (notifySound.current) notifySound.current.play().catch(() => {});
    const newId = Math.max(...desktopIcons.map(i => i.id)) + 1;
    const newItem = type === 'folder' 
      ? { id: newId, name: 'New Folder', component: Win7Folder }
      : { id: newId, name: 'New Text Document', component: Win7TextDocIcon };
    
    setDesktopIcons([...desktopIcons, newItem]);
    setDesktopContextMenu(null);
  };

  const sortedIcons = [...desktopIcons].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return a.id - b.id;
  });
  
  const [paintColor, setPaintColor] = useState('#000000');
  const [paintBrushSize, setPaintBrushSize] = useState(2);
  const [paintTool, setPaintTool] = useState<'brush' | 'eraser'>('brush');
  const paintCanvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (e: React.MouseEvent) => {
    const canvas = paintCanvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setIsDrawing(true);
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.strokeStyle = paintTool === 'eraser' ? '#FFFFFF' : paintColor;
      ctx.lineWidth = paintTool === 'eraser' ? paintBrushSize * 4 : paintBrushSize;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing) return;
    const canvas = paintCanvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = paintCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  };

  const saveCanvas = () => {
    const canvas = paintCanvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'artpiece.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  const [calcDisplay, setCalcDisplay] = useState('0');
  const [calcPrevValue, setCalcPrevValue] = useState<number | null>(null);
  const [calcOperation, setCalcOperation] = useState<string | null>(null);
  const [calcWaitingForNewInput, setCalcWaitingForNewInput] = useState(false);

  const handleCalcNumber = (num: string) => {
    if (clickSound.current) clickSound.current.play().catch(() => {});
    if (calcWaitingForNewInput) {
      setCalcDisplay(num);
      setCalcWaitingForNewInput(false);
    } else {
      setCalcDisplay(prev => prev === '0' ? num : prev + num);
    }
  };

  const handleCalcOperation = (op: string) => {
    if (clickSound.current) clickSound.current.play().catch(() => {});
    const current = parseFloat(calcDisplay);
    if (calcPrevValue === null) {
      setCalcPrevValue(current);
    } else if (calcOperation) {
      const result = calculateResult(calcPrevValue, current, calcOperation);
      setCalcPrevValue(result);
      setCalcDisplay(String(result));
    }
    setCalcOperation(op);
    setCalcWaitingForNewInput(true);
  };

  const calculateResult = (a: number, b: number, op: string) => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return b !== 0 ? a / b : 0;
      default: return b;
    }
  };

  const handleCalcEquals = () => {
    if (clickSound.current) clickSound.current.play().catch(() => {});
    const current = parseFloat(calcDisplay);
    if (calcPrevValue !== null && calcOperation) {
      const result = calculateResult(calcPrevValue, current, calcOperation);
      setCalcDisplay(String(result));
      setCalcPrevValue(null);
      setCalcOperation(null);
      setCalcWaitingForNewInput(true);
    }
  };

  const handleCalcClear = () => {
    if (clickSound.current) clickSound.current.play().catch(() => {});
    setCalcDisplay('0');
    setCalcPrevValue(null);
    setCalcOperation(null);
    setCalcWaitingForNewInput(false);
  };

  const handleCalcDecimal = () => {
    if (clickSound.current) clickSound.current.play().catch(() => {});
    if (calcWaitingForNewInput) {
      setCalcDisplay('0.');
      setCalcWaitingForNewInput(false);
    } else if (!calcDisplay.includes('.')) {
      setCalcDisplay(prev => prev + '.');
    }
  };

  // Window Management
  const [windows, setWindows] = useState<Record<string, {
    id: string;
    title: string;
    icon: any;
    isOpen: boolean;
    isMinimized: boolean;
    isMaximized: boolean;
    zIndex: number;
  }>>({
    myComputer: {
      id: 'myComputer',
      title: 'My Computer',
      icon: Win7Computer,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 90
    },
    projects: {
      id: 'projects',
      title: "M.Taibe's Projects",
      icon: Win7Folder,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 91
    },
    private: {
      id: 'private',
      title: 'Private Files',
      icon: (props: any) => <Win7Folder {...props} restricted />,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 92
    },
    recycleBin: {
      id: 'recycleBin',
      title: 'Recycle Bin',
      icon: Win7RecycleBin,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 100
    },
    notepad: {
      id: 'notepad',
      title: 'Notepad',
      icon: Win7Notepad,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 101
    },
    phone: {
      id: 'phone',
      title: 'Contact M.Taibe',
      icon: Win7Phone,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 106
    },
    paint: {
      id: 'paint',
      title: 'Paint',
      icon: Win7Paint,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 102
    },
    terminal: {
       id: 'terminal',
       title: 'Command Prompt',
       icon: Win7Terminal,
       isOpen: false,
       isMinimized: false,
       isMaximized: false,
       zIndex: 103
     },
     calculator: {
       id: 'calculator',
       title: 'Calculator',
       icon: Win7Calculator,
       isOpen: false,
       isMinimized: false,
       isMaximized: false,
       zIndex: 104
     },
     skills: {
       id: 'skills',
       title: "M.Taibe's Skills",
       icon: (props: any) => <Win7Document {...props} variant="skills" />,
       isOpen: false,
       isMinimized: false,
       isMaximized: false,
       zIndex: 105
     },
     resume: {
       id: 'resume',
       title: 'Resume - M.Taibe',
       icon: (props: any) => <Win7Document {...props} />,
       isOpen: false,
       isMinimized: false,
       isMaximized: false,
       zIndex: 107
     }
   });

  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'Microsoft Windows [Version 6.1.7601]\nCopyright (c) 2009 Microsoft Corporation. All rights reserved.\n'
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  useEffect(() => {
    if (windows.paint.isOpen && paintCanvasRef.current) {
      const canvas = paintCanvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, [windows.paint.isOpen]);

  useEffect(() => {
    if (windows.terminal.isOpen && !windows.terminal.isMinimized && windows.terminal.zIndex === topZIndex) {
      document.getElementById('terminal-input')?.focus();
    }
  }, [windows.terminal.isOpen, windows.terminal.isMinimized, windows.terminal.zIndex, topZIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Windows + R (Meta is usually Command/Windows key)
      if (e.metaKey && e.key === 'r') {
        e.preventDefault();
        setIsRunOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const executeRunCommand = () => {
    const cmd = runInput.trim().toLowerCase();
    setIsRunOpen(false);
    setRunInput('');

    if (cmd === 'notepad') {
      handleIconClick(8);
    } else if (cmd === 'cmd' || cmd === 'terminal') {
      handleIconClick(6);
    } else if (cmd === 'recycle' || cmd === 'trash') {
      handleIconClick(12);
    } else if (cmd === 'paint') {
      handleIconClick(9);
    } else if (cmd) {
      if (errorSound.current) errorSound.current.play().catch(() => {});
      setIsErrorOpen(true);
    }
  };

  const handleTerminalCommand = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const cmd = terminalInput.trim().toLowerCase();
      const newHistory = [...terminalHistory, `C:\\Users\\M.Taibe> ${terminalInput}`];
      
      switch (cmd) {
        case 'help':
          newHistory.push('Available commands:\nHELP - Displays this list\nDIR/LS - Lists files\nCLS/CLEAR - Clears screen\nWHOAMI - About M.Taibe\nSKILLS - List technical skills\nRUN - Opens the Run dialog\nEXIT - Closes terminal');
          break;
        case 'run':
          setIsRunOpen(true);
          newHistory.push('Opening Run dialog...');
          break;
        case 'ls':
        case 'dir': {
          const filesHeader = ' Volume in drive C has no label.\n Volume Serial Number is 2026-0428\n\n Directory of C:\\Users\\M.Taibe\n';
          const fileLines = recycleFiles.map(f => {
            const size = Math.floor(Math.random() * 50000).toLocaleString();
            return `04/28/2026  10:06 AM    ${size.padStart(10)} ${f.name}`;
          }).join('\n');
          const totalSize = (recycleFiles.length * 14502).toLocaleString();
          const footer = `\n               ${recycleFiles.length} File(s)      ${totalSize.padStart(10)} bytes\n               2 Dir(s)  104,281,088,000 bytes free`;
          newHistory.push(`${filesHeader}\n${fileLines}${footer}`);
          break;
        }
        case 'cls':
        case 'clear':
          setTerminalHistory(['Microsoft Windows [Version 6.1.7601]\nCopyright (c) 2009 Microsoft Corporation. All rights reserved.\n']);
          setTerminalInput('');
          return;
        case 'whoami':
          newHistory.push('M.Taibe\nFull Stack Developer & UI/UX Designer\nSpecialized in crafting high-fidelity digital experiences and retro-modern interfaces.');
          break;
        case 'skills':
          newHistory.push('Technical Skills:\n- React & Next.js\n- TypeScript\n- Tailwind CSS\n- Node.js & Express\n- Firebase\n- UI/UX Design (Figma)');
          break;
        case 'exit':
          closeWindow('terminal');
          break;
        case '':
          break;
        default:
          newHistory.push(`'${terminalInput}' is not recognized as an internal or external command,\noperable program or batch file.`);
      }
      
      setTerminalHistory(newHistory);
      setTerminalInput('');
    }
  };

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showAbout, setShowAbout] = useState(false);

  const notepadRef = useRef<HTMLTextAreaElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    if (activeMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeMenu]);

  const handleNotepadFindNext = () => {
    if (!notepadSearchQuery) return;
    const textarea = notepadRef.current;
    if (!textarea) return;

    const text = notepadText;
    const start = textarea.selectionEnd;
    const index = text.toLowerCase().indexOf(notepadSearchQuery.toLowerCase(), start);

    if (index !== -1) {
      textarea.focus();
      textarea.setSelectionRange(index, index + notepadSearchQuery.length);
    } else {
      // Wrap around
      const wrapIndex = text.toLowerCase().indexOf(notepadSearchQuery.toLowerCase());
      if (wrapIndex !== -1) {
        textarea.focus();
        textarea.setSelectionRange(wrapIndex, wrapIndex + notepadSearchQuery.length);
      }
    }
  };

  const handleNotepadReplace = () => {
    const textarea = notepadRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = notepadText.substring(start, end);

    if (selectedText.toLowerCase() === notepadSearchQuery.toLowerCase()) {
      const newText = notepadText.substring(0, start) + notepadReplaceQuery + notepadText.substring(end);
      setNotepadText(newText);
      // Wait for React to update state
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start, start + notepadReplaceQuery.length);
        // Find next after replacing
        handleNotepadFindNext();
      }, 0);
    } else {
      handleNotepadFindNext();
    }
  };

  const handleNotepadReplaceAll = () => {
    if (!notepadSearchQuery) return;
    // Basic global escape for regex
    const escapedQuery = notepadSearchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedQuery, 'gi');
    const newText = notepadText.replace(regex, notepadReplaceQuery);
    setNotepadText(newText);
  };

  const handleWallpaperUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setWallpaper(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNotepadAction = (action: string) => {
    setActiveMenu(null);
    switch (action) {
      case 'new':
        setNotepadText('');
        break;
      case 'open':
        setIsErrorOpen(true); // Re-use error popup for "Coming Soon"
        break;
      case 'save': {
        const blob = new Blob([notepadText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'note.txt';
        a.click();
        URL.revokeObjectURL(url);
        break;
      }
      case 'exit':
        closeWindow('notepad');
        break;
      case 'undo':
        document.execCommand('undo');
        break;
      case 'cut':
        notepadRef.current?.select();
        document.execCommand('cut');
        break;
      case 'copy':
        notepadRef.current?.select();
        document.execCommand('copy');
        break;
      case 'paste':
        navigator.clipboard.readText().then(text => {
          setNotepadText(prev => prev + text);
        });
        break;
      case 'selectAll':
        notepadRef.current?.select();
        break;
      case 'wordWrap':
        setNotepadWrap(!notepadWrap);
        break;
      case 'fontSmall': setNotepadFontSize('11px'); break;
      case 'fontMedium': setNotepadFontSize('14px'); break;
      case 'fontLarge': setNotepadFontSize('18px'); break;
      case 'find':
        setIsNotepadSearchOpen(true);
        setIsReplaceMode(false);
        break;
      case 'replace':
        setIsNotepadSearchOpen(true);
        setIsReplaceMode(true);
        break;
      case 'about':
        setShowAbout(true);
        break;
    }
  };

  const startMenuRef = useRef<HTMLDivElement>(null);

  // Preload sounds
  const logonSound = useRef<HTMLAudioElement | null>(null);
  const logoffSound = useRef<HTMLAudioElement | null>(null);
  const clickSound = useRef<HTMLAudioElement | null>(null);
  const errorSound = useRef<HTMLAudioElement | null>(null);
  const minimizeSound = useRef<HTMLAudioElement | null>(null);
  const restoreSound = useRef<HTMLAudioElement | null>(null);
  const notifySound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const safeLoad = (audio: HTMLAudioElement) => {
      audio.addEventListener('error', (e) => {
        console.warn('Audio failed to load:', audio.src, e);
      });
      audio.load();
    };

    const SOUND_BASE_URL = 'https://raw.githubusercontent.com/Anis-Mowen/Windows-Default-Sounds/master/';

    logonSound.current = new Audio(`${SOUND_BASE_URL}Windows%20Logon.wav`);
    if (logonSound.current) safeLoad(logonSound.current);

    logoffSound.current = new Audio(`${SOUND_BASE_URL}Windows%20Logoff.wav`);
    if (logoffSound.current) safeLoad(logoffSound.current);
    
    clickSound.current = new Audio(`${SOUND_BASE_URL}Windows%20Navigation%20Start.wav`);
    if (clickSound.current) safeLoad(clickSound.current);

    errorSound.current = new Audio(`${SOUND_BASE_URL}Windows%20Error.wav`);
    if (errorSound.current) safeLoad(errorSound.current);

    minimizeSound.current = new Audio(`${SOUND_BASE_URL}Windows%20Minimize.wav`);
    if (minimizeSound.current) safeLoad(minimizeSound.current);

    restoreSound.current = new Audio(`${SOUND_BASE_URL}Windows%20Restore.wav`);
    if (restoreSound.current) safeLoad(restoreSound.current);

    notifySound.current = new Audio(`${SOUND_BASE_URL}Windows%20Notify.wav`);
    if (notifySound.current) safeLoad(notifySound.current);

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Close start menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (startMenuRef.current && !startMenuRef.current.contains(event.target as Node)) {
        setIsStartMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      clearInterval(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleStartMenu = () => {
    if (!isStartMenuOpen && clickSound.current) {
      clickSound.current.play().catch(() => {});
    }
    setIsStartMenuOpen(!isStartMenuOpen);
  };

  const handleShutdown = () => {
    if (logoffSound.current) {
      logoffSound.current.play().catch(() => {});
    }
    setIsStartMenuOpen(false);
    setIsLoggedIn(false);
    setPassword('');
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const handleLogin = () => {
    if (isLoggingIn) return;
    
    setIsLoggingIn(true);
    
    // Play sound
    if (logonSound.current) {
      logonSound.current.play().catch(e => console.log("Audio play blocked by browser", e));
    }

    // Delay the transition slightly to feel like OS processing
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoggingIn(false);
    }, 800);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const toggleAccessibility = () => {
    if (notifySound.current) notifySound.current.play().catch(() => {});
    setShowAccessibilityToast(true);
    setTimeout(() => setShowAccessibilityToast(false), 3000);
  };

  const handlePower = () => {
    if (logoffSound.current) {
      logoffSound.current.play().catch(() => {});
    }
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  const handleIconClick = (id: number) => {
    if (clickSound.current) clickSound.current.play().catch(() => {});
    
    let windowId = "";
    if (id === 1) windowId = "myComputer";
    if (id === 2) windowId = "projects";
    if (id === 3) windowId = "private";
    if (id === 12) windowId = "recycleBin";
    if (id === 8) windowId = "notepad";
    if (id === 4) windowId = "resume";
    if (id === 5) windowId = "skills";
    if (id === 9) windowId = "paint";
    if (id === 6) windowId = "terminal";
    if (id === 7) windowId = "calculator";
    if (id === 11) windowId = "phone";

    if (id === 10) {
      window.open('https://github.com/taibejaved485-afk', '_blank');
      return;
    }

    if (windowId) {
      focusWindow(windowId);
      setWindows(prev => ({
        ...prev,
        [windowId]: { ...prev[windowId], isOpen: true, isMinimized: false }
      }));
    }
  };

  const focusWindow = (id: string) => {
    const nextZ = topZIndex + 1;
    setTopZIndex(nextZ);
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], zIndex: nextZ, isOpen: true, isMinimized: false }
    }));
    if (id === 'calculator' || id === 'paint' || id === 'notepad' || id === 'terminal') {
      setIsStartMenuOpen(false);
    }
  };

  const closeWindow = (id: string) => {
    if (clickSound.current) {
      clickSound.current.play().catch(() => {});
    }
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false }
    }));
  };

  const minimizeWindow = (id: string) => {
    if (minimizeSound.current) {
      minimizeSound.current.play().catch(() => {});
    }
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], isMinimized: true }
    }));
  };

  const toggleMaximize = (id: string) => {
    if (restoreSound.current) {
      restoreSound.current.play().catch(() => {});
    }
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], isMaximized: !prev[id].isMaximized }
    }));
  };

  const handleTaskbarClick = (id: string) => {
    if (clickSound.current) clickSound.current.play().catch(() => {});
    const win = windows[id];
    if (!win.isOpen) {
      // Open the app if it's a known app
      handleIconClick(
        win.id === 'recycleBin' ? 12 : 
        (win.id === 'notepad' ? 8 : 
        (win.id === 'paint' ? 9 : 
        (win.id === 'terminal' ? 6 : 0)))
      );
      return;
    }
    
    if (win.isMinimized) {
      restoreWindow(id);
    } else {
      // Toggle minimize if already focused, else focus
      const isTop = win.zIndex === topZIndex;
      if (isTop) {
        minimizeWindow(id);
      } else {
        focusWindow(id);
      }
    }
  };

  const restoreWindow = (id: string) => {
    if (restoreSound.current) {
      restoreSound.current.play().catch(() => {});
    }
    focusWindow(id);
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], isMinimized: false }
    }));
  };

  const handleFileClick = () => {
    if (errorSound.current) errorSound.current.play().catch(() => {});
    setIsErrorOpen(true);
  };

  const handleRestoreAll = () => {
    if (clickSound.current) clickSound.current.play().catch(() => {});
    setRecycleFiles([]);
    setSearchTerm('');
  };

  const handleEmptyBin = () => {
    setShowDeleteConfirm(true);
  };

  const confirmEmptyBin = () => {
    if (errorSound.current) errorSound.current.play().catch(() => {});
    setRecycleFiles([]);
    setSearchTerm('');
    setShowDeleteConfirm(false);
  };

  const filteredRecycleFiles = recycleFiles.filter(file => 
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`relative h-screen w-screen overflow-hidden font-sans text-white transition-all duration-1000 select-none ${isLoggingIn ? 'cursor-wait' : ''}`}>
      <AnimatePresence mode="wait">
        {!isLoggedIn ? (
          <motion.div 
            key="login-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.8, ease: "easeInOut" } }}
            className={`relative h-screen w-screen overflow-hidden ${isDarkTheme ? 'premium-bg' : ''}`}
          >
            {/* Background Layers */}
            <motion.div 
              initial={false}
              animate={{ backgroundColor: isDarkTheme ? "#0a0a2e" : "#1e40af" }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            />

            {/* Classic Windows 7 Login Background (Light Mode) */}
            <motion.div 
              initial={false}
              animate={{ opacity: isDarkTheme ? 0 : 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-cover bg-center brightness-110"
              style={{ backgroundImage: `url('https://images4.alphacoders.com/264/264746.jpg')` }}
            />

            {/* Dark Premium Theme (Dark Mode) */}
            <motion.div 
              initial={false}
              animate={{ opacity: isDarkTheme ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 premium-bg"
            >
              {/* Deep Moody Background with Bokeh Glows */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="bokeh-light w-[800px] h-[800px] bg-[#1a1a40] -top-1/4 -left-1/4" />
                <div className="bokeh-light w-[1000px] h-[1000px] bg-[#0a0a2e] -bottom-1/3 -right-1/3" />
                <div className="bokeh-light w-[600px] h-[600px] bg-[#2d2d5f] top-1/2 left-1/4 transform -translate-y-1/2" />
              </div>
            </motion.div>
            
            {/* Unified Overlay */}
            <div className={`absolute inset-0 transition-all duration-1000 ${isDarkTheme ? 'bg-black/30 backdrop-blur-[40px]' : 'bg-blue-600/10 backdrop-blur-[4px]'}`} />


            {/* Top-Left Date & Time */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-24 left-24"
            >
              <h1 className="text-8xl font-[100] tracking-tighter mb-2">
                {formatTime(currentTime).split(' ')[0]}
              </h1>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-light uppercase tracking-[0.3em] opacity-40">
                  {formatTime(currentTime).split(' ')[1]}
                </span>
                <p className="text-sm font-light opacity-60 tracking-wide mt-1">
                  {currentTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </motion.div>

            {/* Center Login UI */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                {/* Avatar - Premium Glassmorphism */}
                <div className="w-44 h-44 rounded-full bg-white/[0.03] backdrop-blur-[12px] flex items-center justify-center mb-10 border border-white/10 shadow-none">
                   <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-white/5 rounded-full blur-2xl" />
                      <div className="flex flex-col items-center justify-center gap-1 opacity-40">
                         <div className="w-4 h-4 rounded-full border-[1.5px] border-white" />
                         <div className="w-8 h-8 rounded-full border-[1.5px] border-white border-b-transparent" />
                      </div>
                   </div>
                </div>

                {/* Username */}
                <h2 className="text-3xl font-[300] mb-8 tracking-[0.05em] text-white">
                  {selectedUser}
                </h2>

                {/* Input Field - Slim Minimalist Bar */}
                <div className="relative group w-56">
                  <input
                    type="password"
                    placeholder="Sign in"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                    className="w-full bg-white/90 rounded px-4 py-2.5 outline-none text-black placeholder:text-gray-400 pr-12 text-xs font-light"
                    autoFocus={!isLoggingIn}
                    disabled={isLoggingIn}
                  />
                  <button 
                    className={`absolute right-1 top-1 bottom-1 w-9 flex items-center justify-center bg-transparent hover:bg-black/5 rounded transition-colors border-l border-gray-100 ${isLoggingIn ? 'opacity-50 cursor-wait' : ''}`}
                    onClick={handleLogin}
                    disabled={isLoggingIn}
                  >
                    <ArrowRight size={14} className="text-gray-400 hover:text-gray-600 transition-colors" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Bottom-Left User Switcher */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-20 left-24"
            >
              <div className="bg-white/[0.03] backdrop-blur-[12px] rounded-xl p-1.5 border border-white/10 flex items-center gap-1">
                <button 
                  onClick={() => setSelectedUser("M.Taibe")}
                  disabled={isLoggingIn}
                  className={`flex items-center gap-3 px-5 py-2.5 rounded-lg transition-all ${selectedUser === "M.Taibe" ? 'bg-white/[0.08] opacity-100' : 'opacity-30 hover:opacity-100'}`}
                >
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                    <div className="w-3 h-3 border border-white/30 rounded-full flex flex-col items-center justify-center pt-0.5">
                       <div className="w-1 h-1 rounded-full bg-white/40 mb-0.5" />
                       <div className="w-2.5 h-1.5 rounded-t-full bg-white/40" />
                    </div>
                  </div>
                  <span className="text-[10px] font-light tracking-[0.15em] text-white uppercase">M.Taibe</span>
                </button>
                <button 
                  onClick={() => setSelectedUser("Guest")}
                  disabled={isLoggingIn}
                  className={`flex items-center gap-3 px-5 py-2.5 rounded-lg transition-all ${selectedUser === "Guest" ? 'bg-white/[0.08] opacity-100' : 'opacity-30 hover:opacity-100'}`}
                >
                  <div className="w-6 h-6 rounded-full bg-white/[0.05] flex items-center justify-center border border-white/5">
                    <div className="w-3 h-3 border border-white/20 rounded-full flex flex-col items-center justify-center pt-0.5">
                       <div className="w-1 h-1 rounded-full bg-white/20 mb-0.5" />
                       <div className="w-2.5 h-1.5 rounded-t-full bg-white/20" />
                    </div>
                  </div>
                  <span className="text-[10px] font-light tracking-[0.15em] text-white uppercase">Guest</span>
                </button>
              </div>
            </motion.div>

            {/* Bottom-Right System Icons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-20 right-24 flex items-center gap-4"
            >
              {/* Accessibility Toast */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: showAccessibilityToast ? 1 : 0, 
                  y: showAccessibilityToast ? 0 : 10
                }}
                className="absolute bottom-16 right-0 bg-[#1e1e1e]/80 backdrop-blur-xl border border-white/5 rounded-xl px-5 py-2.5 text-xs font-light text-white/80 shadow-2xl whitespace-nowrap pointer-events-none"
              >
                Accessibility mode on
              </motion.div>

              <button 
                onClick={toggleAccessibility}
                disabled={isLoggingIn}
                className="w-11 h-11 rounded-full bg-white/[0.03] backdrop-blur-[12px] flex items-center justify-center border border-white/10 hover:bg-white/[0.08] active:bg-white/[0.12] transition-all group"
              >
                <Accessibility size={16} strokeWidth={1} className="text-white/40 group-hover:text-white transition-colors" />
              </button>
              <button 
                onClick={toggleTheme}
                disabled={isLoggingIn}
                className={`w-11 h-11 rounded-full backdrop-blur-[12px] flex items-center justify-center border transition-all group ${isDarkTheme ? 'bg-white/5 border-white/10' : 'bg-yellow-400/20 border-yellow-400/30'}`}
                title="Toggle Login Theme"
              >
                {isDarkTheme ? (
                  <Moon size={16} strokeWidth={1} className="text-white/40 group-hover:text-white transition-colors" />
                ) : (
                  <Sun size={16} strokeWidth={1} className="text-yellow-400 group-hover:text-yellow-300 transition-colors" />
                )}
              </button>
              <button 
                onClick={handlePower}
                disabled={isLoggingIn}
                className="w-11 h-11 rounded-full bg-white/[0.03] backdrop-blur-[12px] flex items-center justify-center border border-white/10 hover:bg-white/[0.08] active:bg-white/[0.12] transition-all group"
              >
                <Power size={16} strokeWidth={1} className="text-white/40 group-hover:text-white transition-colors" />
              </button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            key="desktop-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5, ease: "easeOut" } }}
            className="relative h-screen w-screen overflow-hidden font-windows bg-blue-900 select-none"
            onClick={() => {
              setSelectedIconId(null);
              setDesktopContextMenu(null);
            }}
            onContextMenu={(e) => {
              e.preventDefault();
              setDesktopContextMenu({ x: e.clientX, y: e.clientY });
            }}
          >
            {/* Background - User Image */}
            <motion.div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
              animate={{ opacity: isRefreshing ? 0.8 : 1, scale: isRefreshing ? 0.99 : 1 }}
              style={{ 
                backgroundImage: `url(${wallpaper})`,
                filter: 'brightness(0.9) contrast(1.1)'
              }}
            />
            
            {/* Abstract Light Streaks (Aero Vibe) */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-radial-gradient from-white/20 via-blue-400/10 to-transparent blur-3xl rounded-full" />
              <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-blue-300/10 blur-3xl rounded-full -rotate-45" />
            </div>

            {/* Main Desktop Container */}
            <div ref={desktopRef} className="relative z-10 h-full w-full p-4 flex flex-col">
              
              {/* Desktop Icons - Vertically Aligned Grid */}
              <motion.div 
                layout
                className="flex flex-col flex-wrap gap-4 h-[calc(100%-60px)] content-start"
              >
                {sortedIcons.map((icon) => (
                  <motion.div 
                    layout
                    drag
                    dragSnapToOrigin
                    onDragStart={() => setSelectedIconId(icon.id)}
                    onDragEnd={(e, info) => handleIconDragEnd(e, info, icon.id)}
                    key={icon.id}
                    ref={icon.id === 12 ? binRef : null}
                    whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', outline: '1px solid rgba(255, 255, 255, 0.3)' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedIconId(icon.id);
                    }}
                    onDoubleClick={(e) => {
                      e.stopPropagation();
                      handleIconClick(icon.id);
                    }}
                    animate={{ 
                      backgroundColor: selectedIconId === icon.id ? 'rgba(255, 255, 255, 0.24)' : 'transparent',
                      outline: selectedIconId === icon.id ? '1px solid rgba(255, 255, 255, 0.4)' : 'none'
                    }}
                    className={`flex flex-col items-center justify-center rounded-sm cursor-pointer group p-1 transition-all
                      ${iconSize === 'small' ? 'w-20 h-20' : iconSize === 'large' ? 'w-28 h-28' : 'w-24 h-24'}`}
                  >
                    <div className={`mb-2 drop-shadow-md group-hover:drop-shadow-lg transition-transform
                      ${iconSize === 'small' ? 'scale-75' : iconSize === 'large' ? 'scale-125' : 'scale-100'}`}>
                      {icon.component ? (
                         <icon.component size={iconSize === 'small' ? 32 : iconSize === 'large' ? 64 : 48} {...(icon.id === 12 ? { isEmpty: recycleFiles.length === 0 } : {})} />
                      ) : icon.icon ? (
                         <div className={icon.color}>
                           <icon.icon size={iconSize === 'small' ? 32 : iconSize === 'large' ? 64 : 48} strokeWidth={1.5} />
                         </div>
                      ) : null}
                    </div>
                    <span className={`text-white text-center leading-tight icon-text-shadow font-normal px-1 w-full truncate
                      ${iconSize === 'small' ? 'text-[10px]' : 'text-[11px]'}`}>
                      {icon.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Windows */}
              <OSWindow
                id="myComputer"
                {...windows.myComputer}
                width="640px"
                height="480px"
                onClose={() => closeWindow('myComputer')}
                onMinimize={() => minimizeWindow('myComputer')}
                onMaximize={() => toggleMaximize('myComputer')}
                onFocus={() => focusWindow('myComputer')}
              >
                <div className="flex-1 bg-white flex flex-col select-none">
                  <div className="h-10 border-b border-slate-300 flex items-center justify-between px-3">
                    <div className="flex items-center gap-4 text-xs font-medium text-slate-700">
                      <span className="text-blue-600 border-b-2 border-blue-600 pb-2">Computer</span>
                    </div>
                  </div>
                  <div className="flex-1 p-6 bg-[#f0f0f0] overflow-y-auto font-sans">
                    <div className="mb-8">
                      <h3 className="text-xs font-semibold text-blue-800 border-b border-blue-200 pb-1 mb-4">Hard Disk Drives (1)</h3>
                      <div className="flex items-center gap-4 p-4 hover:bg-blue-100/50 cursor-pointer rounded-lg border border-transparent hover:border-blue-200 transition-all group">
                         <div className="w-12 h-12 bg-slate-200 rounded flex items-center justify-center">
                            <Win7Computer size={32} />
                         </div>
                         <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-slate-800">Local Disk (C:)</div>
                            <div className="h-3 w-40 bg-white border border-slate-300 rounded overflow-hidden mt-1 shadow-inner relative">
                               <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 w-[65%]" />
                            </div>
                            <div className="text-[10px] text-slate-500 mt-1">128 GB free of 465 GB</div>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </OSWindow>

              <OSWindow
                id="projects"
                {...windows.projects}
                width="640px"
                height="420px"
                onClose={() => closeWindow('projects')}
                onMinimize={() => minimizeWindow('projects')}
                onMaximize={() => toggleMaximize('projects')}
                onFocus={() => focusWindow('projects')}
              >
                <div className="flex-1 bg-white flex flex-col p-4 gap-4 overflow-y-auto font-sans">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'M.Taibe Portfolio', url: 'https://m-taibe.vercel.app/' },
                      { name: 'MG Design X', url: 'https://mgdesignx.com/' },
                      { name: 'Motral Web Studio', url: 'https://motral-web-studio.vercel.app/' },
                      { name: 'Techskoop', url: 'https://techskoop.vercel.app/' },
                      { name: 'Bridal Saloon', url: 'https://bridal-saloon.vercel.app/' },
                      { name: 'Pizza Hut Clone', url: 'https://pizza-hut-murex.vercel.app/' },
                      { name: 'Motral Particles', url: 'https://motralparticles.vercel.app/' },
                      { name: 'Ahad Portfolio', url: 'https://ahadportfolio-inky.vercel.app/' },
                      { name: 'Ahmad Portfolio', url: 'https://ahmadprotfolio.vercel.app/' },
                      { name: 'Bizskoop', url: 'https://bizskoop.vercel.app/' },
                      { name: 'Online Talismans', url: 'https://onlinetalismans.vercel.app/' },
                      { name: 'Islamic Taweez', url: 'https://islamictaweez.vercel.app/' },
                      { name: 'Rohani Ilaj Site', url: 'https://rohaniilajsite.vercel.app/' },
                      { name: 'Quran Sy Ilaj', url: 'https://quransyilaj.vercel.app/' },
                      { name: 'Online Istikhara Site', url: 'https://onlineistikharasite.vercel.app/' },
                      { name: 'Free CV Maker', url: 'https://freecvmaker-motral.vercel.app/' },
                      { name: 'MSF Portfolio', url: 'https://msf-five.vercel.app/' }
                    ].map((proj, i) => (
                      <div 
                        key={i} 
                        onClick={() => window.open(proj.url, '_blank')}
                        className="flex items-center gap-3 p-3 bg-[#f8f9fa] border border-slate-200 rounded hover:shadow-md transition-all cursor-pointer hover:border-blue-400 group"
                      >
                        <Win7Folder size={32} />
                        <div>
                          <div className="text-xs font-bold text-slate-700">{proj.name}</div>
                          <div className="text-[10px] text-slate-500 uppercase tracking-tight">Website Project</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </OSWindow>

              <OSWindow
                id="private"
                {...windows.private}
                width="400px"
                height="300px"
                onClose={() => closeWindow('private')}
                onMinimize={() => minimizeWindow('private')}
                onMaximize={() => toggleMaximize('private')}
                onFocus={() => focusWindow('private')}
              >
                <div className="flex-1 bg-[#f0f0f0] flex flex-col items-center justify-center p-8 text-center italic text-slate-500 gap-4 font-sans">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-500 border border-red-200">
                    <Trash size={32} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-700">Access Denied</p>
                    <p className="text-xs text-slate-500 mt-1">This folder is password protected or encrypted.</p>
                  </div>
                </div>
              </OSWindow>

              <OSWindow
                id="recycleBin"
                {...windows.recycleBin}
                containerRef={binWindowRef}
                icon={(props: any) => <Win7RecycleBin {...props} isEmpty={recycleFiles.length === 0} />}
                onClose={() => closeWindow('recycleBin')}
                onMinimize={() => minimizeWindow('recycleBin')}
                onMaximize={() => toggleMaximize('recycleBin')}
                onFocus={() => focusWindow('recycleBin')}
              >
                {/* Search Bar / Header area */}
                <div className="h-10 border-b border-slate-300 flex items-center justify-between px-3 bg-white">
                  <div className="flex items-center gap-2">
                     <div className="flex items-center text-slate-500 hover:text-slate-700 cursor-pointer">
                        <ArrowLeft size={16} className="mr-2" />
                        <ArrowRight size={16} />
                     </div>
                  </div>
                  <div className="relative w-48">
                    <input 
                      type="text"
                      placeholder="Search Recycle Bin"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full h-7 pl-8 pr-2 text-[11px] border border-slate-300 rounded focus:border-blue-400 outline-none transition-all text-slate-800"
                    />
                    <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>

                <div className="h-12 bg-slate-100 border-b border-slate-300 flex items-center px-2 gap-1 font-windows">
                    <div 
                      onClick={handleEmptyBin}
                      className="flex items-center gap-2 px-3 py-1.5 hover:bg-blue-100/50 hover:outline hover:outline-1 hover:outline-blue-200 rounded cursor-pointer group transition-all"
                    >
                       <div className="relative">
                          <Trash2 size={20} className="text-blue-600 group-hover:scale-105 transition-transform" />
                          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-white flex items-center justify-center">
                             <X size={8} className="text-white" />
                          </div>
                       </div>
                       <span className="text-[12px] font-medium text-slate-700">Empty the Recycle Bin</span>
                    </div>
                    <div 
                      onClick={handleRestoreAll}
                      className="flex items-center gap-2 px-3 py-1.5 hover:bg-blue-100/50 hover:outline hover:outline-1 hover:outline-blue-200 rounded cursor-pointer group transition-all"
                    >
                       <div className="relative">
                          <RotateCcw size={20} className="text-blue-500 group-hover:scale-105 transition-transform" />
                          <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border border-white flex items-center justify-center">
                             <CheckCircle2 size={8} className="text-white" />
                          </div>
                       </div>
                       <span className="text-[12px] font-medium text-slate-700">Restore all items</span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white p-6 overflow-y-auto overflow-x-hidden">
                  {filteredRecycleFiles.length > 0 ? (
                    <div className="grid grid-cols-4 gap-6">
                      {filteredRecycleFiles.map((file, idx) => (
                        <motion.div 
                          key={idx} 
                          drag
                          dragSnapToOrigin
                          onDragEnd={(e, info) => handleRecycleItemDragEnd(e, info, idx)}
                          onClick={handleFileClick}
                          className="flex flex-col items-center p-3 hover:bg-blue-50 hover:outline hover:outline-1 hover:outline-blue-200 rounded cursor-pointer group"
                        >
                          {(file as any).component ? (
                            <div className="mb-2 group-hover:scale-105 transition-transform">
                              {React.createElement((file as any).component, { size: 42 })}
                            </div>
                          ) : (file as any).icon ? (
                            <div className="mb-2 group-hover:scale-105 transition-transform">
                               {(file as any).icon({ size: 42, className: (file as any).color })}
                            </div>
                          ) : null}
                          <span className="text-[11px] text-slate-800 text-center line-clamp-2 max-w-[100px] leading-tight font-sans">
                            {file.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-2">
                       <div className="p-4 bg-slate-50 rounded-full">
                          <Search size={48} className="opacity-20" />
                       </div>
                       <span className="text-sm font-medium">No items match your search.</span>
                    </div>
                  )}
                </div>

                {/* Status Bar */}
                <div className="h-7 bg-slate-50 border-t border-slate-200 flex items-center px-4">
                  <span className="text-[11px] text-slate-500">{recycleFiles.length} items</span>
                </div>
              </OSWindow>

              <OSWindow
                id="notepad"
                {...windows.notepad}
                onClose={() => closeWindow('notepad')}
                onMinimize={() => minimizeWindow('notepad')}
                onMaximize={() => toggleMaximize('notepad')}
                onFocus={() => focusWindow('notepad')}
              >
                <div className="flex-1 flex flex-col font-sans" ref={menuRef}>
                  <div className="h-7 bg-slate-50 border-b border-slate-200 flex items-center px-1 gap-0.5 select-none relative z-[50]">
                    {[
                      { label: 'File', items: [
                        { label: 'New', action: 'new' },
                        { label: 'Open...', action: 'open' },
                        { label: 'Save', action: 'save' },
                        { label: 'Separator' },
                        { label: 'Exit', action: 'exit' }
                      ]},
                      { label: 'Edit', items: [
                        { label: 'Undo', action: 'undo' },
                        { label: 'Separator' },
                        { label: 'Cut', action: 'cut' },
                        { label: 'Copy', action: 'copy' },
                        { label: 'Paste', action: 'paste' },
                        { label: 'Separator' },
                        { label: 'Find...', action: 'find' },
                        { label: 'Replace...', action: 'replace' },
                        { label: 'Separator' },
                        { label: 'Select All', action: 'selectAll' }
                      ]},
                      { label: 'Format', items: [
                        { label: `Word Wrap: ${notepadWrap ? 'On' : 'Off'}`, action: 'wordWrap' },
                        { label: 'Font...', action: 'fontMenu' }
                      ]},
                      { label: 'View', items: [{ label: 'Status Bar', action: '' }]},
                      { label: 'Help', items: [{ label: 'About Notepad', action: 'about' }]}
                    ].map(menu => (
                      <div key={menu.label} className="relative">
                        <div 
                          onClick={() => setActiveMenu(activeMenu === menu.label ? null : menu.label)}
                          className={`px-3 py-1 text-[11px] text-slate-700 cursor-default transition-colors ${activeMenu === menu.label ? 'bg-blue-100 outline outline-1 outline-blue-300' : 'hover:bg-blue-50'}`}
                        >
                          {menu.label}
                        </div>
                        {activeMenu === menu.label && (
                          <div className="absolute top-full left-0 w-48 bg-[#f2f2f2] border border-[#979797] shadow-[2px_2px_3px_rgba(0,0,0,0.2)] py-1 z-[1000]">
                            {menu.items.map((item, i) => (
                              item.label === 'Separator' ? (
                                <div key={i} className="my-1 border-t border-[#d7d7d7] mx-1" />
                              ) : (
                                <div key={i} className="relative group/sub">
                                  <div 
                                    onClick={() => item.action === 'fontMenu' ? null : handleNotepadAction(item.action)}
                                    className="px-6 py-1 text-[11px] text-[#333] hover:bg-[#3399ff] hover:text-white cursor-default flex justify-between items-center"
                                  >
                                    {item.label}
                                    {item.action === 'fontMenu' && <ArrowRight size={10} />}
                                  </div>
                                  {item.action === 'fontMenu' && (
                                    <div className="absolute top-0 left-full w-24 bg-[#f2f2f2] border border-[#979797] shadow-[2px_2px_3px_rgba(0,0,0,0.2)] py-1 hidden group-hover/sub:block">
                                      {['Small', 'Medium', 'Large'].map(size => (
                                        <div 
                                          key={size}
                                          onClick={() => handleNotepadAction(`font${size}`)}
                                          className="px-4 py-1 text-[11px] text-[#333] hover:bg-[#3399ff] hover:text-white cursor-default"
                                        >
                                          {size}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              )
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <textarea 
                    ref={notepadRef}
                    value={notepadText}
                    onChange={(e) => setNotepadText(e.target.value)}
                    wrap={notepadWrap ? 'soft' : 'off'}
                    className="flex-1 p-2 outline-none resize-none font-mono text-slate-800 bg-white"
                    style={{ fontSize: notepadFontSize, overflowX: notepadWrap ? 'hidden' : 'auto' }}
                  />
                  <div className="h-6 bg-slate-50 border-t border-slate-200 flex items-center justify-end px-12 text-[11px] text-slate-600 gap-8">
                    <span>Ln 1, Col 1</span>
                    <span>100%</span>
                    <span>Windows (CRLF)</span>
                    <span>UTF-8</span>
                  </div>
                </div>
              </OSWindow>

              <OSWindow
                id="paint"
                {...windows.paint}
                onClose={() => closeWindow('paint')}
                onMinimize={() => minimizeWindow('paint')}
                onMaximize={() => toggleMaximize('paint')}
                onFocus={() => focusWindow('paint')}
              >
                <div className="flex-1 flex flex-col bg-[#F0F0F0]">
                  <div className="h-6 bg-white border-b border-slate-200 flex items-center px-2 gap-4 text-[11px] text-slate-700 select-none">
                    <div className="group relative">
                      <span className="hover:bg-blue-100 px-2 py-0.5 cursor-default">File</span>
                      <div className="hidden group-hover:block absolute top-full left-0 w-32 bg-white shadow-md border border-slate-200 py-1 z-50">
                        <div onClick={saveCanvas} className="px-4 py-1 hover:bg-blue-600 hover:text-white flex items-center gap-2">
                          <Download size={12} />
                          Save As...
                        </div>
                        <div onClick={clearCanvas} className="px-4 py-1 hover:bg-blue-600 hover:text-white flex items-center gap-2">
                          <Trash size={12} />
                          New
                        </div>
                      </div>
                    </div>
                    {['Edit', 'View', 'Image', 'Colors', 'Help'].map(m => (
                      <span key={m} className="hover:bg-blue-100 px-2 py-0.5 cursor-default">{m}</span>
                    ))}
                  </div>

                  <div className="flex-1 flex overflow-hidden">
                    {/* Tool Bar */}
                    <div className="w-12 bg-[#F0F0F0] border-r border-slate-300 p-2 flex flex-col gap-2">
                      <div 
                        onClick={() => setPaintTool('brush')}
                        className={`p-1 border shadow-sm cursor-pointer transition-all ${paintTool === 'brush' ? 'bg-blue-200 border-blue-400' : 'bg-white border-slate-300 hover:bg-slate-50'}`}
                        title="Brush"
                      >
                        <Pencil size={20} className="text-slate-700" />
                      </div>
                      <div 
                        onClick={() => setPaintTool('eraser')}
                        className={`p-1 border shadow-sm cursor-pointer transition-all ${paintTool === 'eraser' ? 'bg-blue-200 border-blue-400' : 'bg-white border-slate-300 hover:bg-slate-50'}`}
                        title="Eraser"
                      >
                        <Eraser size={20} className="text-slate-700" />
                      </div>
                      
                      <div className="h-[1px] bg-slate-300 my-1" />
                      
                      <div className="flex flex-col gap-1 items-center">
                        <span className="text-[9px] text-slate-500 uppercase font-bold">Size</span>
                        {[2, 4, 8, 12].map(s => (
                          <div 
                            key={s}
                            onClick={() => setPaintBrushSize(s)}
                            className={`w-6 h-6 flex items-center justify-center cursor-pointer rounded-sm hover:bg-slate-200 ${paintBrushSize === s ? 'bg-blue-100 ring-1 ring-blue-300' : ''}`}
                          >
                            <div className="bg-slate-800 rounded-full" style={{ width: s, height: s }} />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Canvas Area */}
                    <div className="flex-1 bg-[#808080] p-8 overflow-auto flex items-center justify-center custom-scrollbar">
                      <div className="relative bg-white shadow-lg cursor-crosshair">
                        <canvas
                          ref={paintCanvasRef}
                          width={800}
                          height={600}
                          onMouseDown={startDrawing}
                          onMouseMove={draw}
                          onMouseUp={stopDrawing}
                          onMouseLeave={stopDrawing}
                          style={{ display: 'block' }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Color Palette */}
                  <div className="h-16 bg-[#F0F0F0] border-t border-slate-300 p-2 flex items-center gap-4">
                    <div className="flex items-center gap-2 border-r border-slate-300 pr-4">
                      <div className="w-8 h-8 border-2 border-white shadow-inner" style={{ backgroundColor: paintColor }} />
                      <div className="flex flex-col text-[10px] text-slate-600">
                        <span>Color</span>
                        <span className="font-mono uppercase">{paintColor}</span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-wrap gap-1 content-center">
                      {[
                        '#000000', '#7f7f7f', '#880015', '#ed1c24', '#ff7f27', '#fff200', '#22b14c', '#00a2e8', '#3f48cc', '#a349a4',
                        '#ffffff', '#c3c3c3', '#b97a57', '#ffaec9', '#ffc90e', '#efe4b0', '#b5e61d', '#99d9ea', '#7092be', '#c8bfe7'
                      ].map(color => (
                        <div 
                          key={color}
                          onClick={() => {
                            setPaintColor(color);
                            if (paintTool === 'eraser') setPaintTool('brush');
                          }}
                          className={`w-5 h-5 border cursor-pointer hover:scale-110 transition-transform ${paintColor === color ? 'ring-2 ring-blue-500 z-10' : 'border-slate-400'}`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </OSWindow>

              <OSWindow
                id="terminal"
                {...windows.terminal}
                onClose={() => closeWindow('terminal')}
                onMinimize={() => minimizeWindow('terminal')}
                onMaximize={() => toggleMaximize('terminal')}
                onFocus={() => focusWindow('terminal')}
              >
                <div 
                  className="flex-1 bg-black p-2 font-mono text-[13px] overflow-y-auto selection:bg-white selection:text-black cursor-text"
                  onClick={() => document.getElementById('terminal-input')?.focus()}
                >
                  <div className="whitespace-pre-wrap text-[#f0f0f0] leading-tight">
                    {terminalHistory.map((line, i) => (
                      <div key={i} className="mb-0.5">{line}</div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="shrink-0 uppercase text-[#00FF00] font-bold">C:\Users\M.Taibe&gt;</span>
                    <input
                      id="terminal-input"
                      type="text"
                      autoFocus
                      autoComplete="off"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      onKeyDown={handleTerminalCommand}
                      className="flex-1 bg-transparent border-none outline-none text-[#f0f0f0] caret-white"
                    />
                  </div>
                  <div ref={terminalBottomRef} />
                </div>
              </OSWindow>

              <OSWindow
                id="calculator"
                {...windows.calculator}
                width="280px"
                height="400px"
                onClose={() => closeWindow('calculator')}
                onMinimize={() => minimizeWindow('calculator')}
                onMaximize={() => toggleMaximize('calculator')}
                onFocus={() => focusWindow('calculator')}
              >
                <div className="flex-1 bg-[#F0F0F0] p-3 flex flex-col gap-3 select-none font-sans">
                  {/* Display Section */}
                  <div className="bg-white border border-[#adadad] p-2 text-right shadow-inner min-h-[60px] flex flex-col justify-center">
                    <div className="text-[10px] text-slate-500 h-4 truncate">
                      {calcPrevValue !== null && calcOperation ? `${calcPrevValue} ${calcOperation}` : ''}
                    </div>
                    <div className="text-xl font-semibold overflow-hidden whitespace-nowrap text-slate-800">
                      {calcDisplay}
                    </div>
                  </div>

                  {/* Buttons Section */}
                  <div className="grid grid-cols-4 gap-1 flex-1">
                    {/* Top Row */}
                    <button 
                      onClick={handleCalcClear} 
                      className="col-span-2 h-9 bg-gradient-to-b from-[#f9f9f9] to-[#e5e5e5] border border-[#adadad] rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] hover:from-[#e5f1fb] hover:to-[#cce4f7] hover:border-[#0078d7] text-[12px] font-medium text-slate-700 active:shadow-inner active:bg-[#cce4f7] transition-all"
                    >
                      C
                    </button>
                    <button 
                      onClick={() => handleCalcOperation('/')} 
                      className="h-9 bg-gradient-to-b from-[#f2f7fd] to-[#d9e7f7] border border-[#8da2b9] rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] hover:from-[#ffdb99] hover:to-[#ffb347] hover:border-[#ffa500] text-[14px] text-slate-800 active:shadow-inner transition-all"
                    >
                      /
                    </button>
                    <button 
                      onClick={() => handleCalcOperation('*')} 
                      className="h-9 bg-gradient-to-b from-[#f2f7fd] to-[#d9e7f7] border border-[#8da2b9] rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] hover:from-[#ffdb99] hover:to-[#ffb347] hover:border-[#ffa500] text-[14px] text-slate-800 active:shadow-inner transition-all"
                    >
                      *
                    </button>
 
                    {/* Number Rows */}
                    {[7, 8, 9].map(n => (
                      <button 
                        key={n} 
                        onClick={() => handleCalcNumber(String(n))} 
                        className="h-9 bg-gradient-to-b from-[#ffffff] to-[#f0f0f0] border border-[#aaaaaa] rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] hover:from-[#e5f1fb] hover:to-[#cce4f7] hover:border-[#0078d7] text-[14px] font-bold text-slate-800 active:shadow-inner transition-all"
                      >
                        {n}
                      </button>
                    ))}
                    <button 
                      onClick={() => handleCalcOperation('-')} 
                      className="h-9 bg-gradient-to-b from-[#f2f7fd] to-[#d9e7f7] border border-[#8da2b9] rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] hover:from-[#ffdb99] hover:to-[#ffb347] hover:border-[#ffa500] text-[14px] text-slate-800 active:shadow-inner transition-all"
                    >
                      -
                    </button>
 
                    {[4, 5, 6].map(n => (
                      <button 
                        key={n} 
                        onClick={() => handleCalcNumber(String(n))} 
                        className="h-9 bg-gradient-to-b from-[#ffffff] to-[#f0f0f0] border border-[#aaaaaa] rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] hover:from-[#e5f1fb] hover:to-[#cce4f7] hover:border-[#0078d7] text-[14px] font-bold text-slate-800 active:shadow-inner transition-all"
                      >
                        {n}
                      </button>
                    ))}
                    <button 
                      onClick={() => handleCalcOperation('+')} 
                      className="h-9 bg-gradient-to-b from-[#f2f7fd] to-[#d9e7f7] border border-[#8da2b9] rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] hover:from-[#ffdb99] hover:to-[#ffb347] hover:border-[#ffa500] text-[14px] text-slate-800 active:shadow-inner transition-all"
                    >
                      +
                    </button>
 
                    {[1, 2, 3].map(n => (
                      <button 
                        key={n} 
                        onClick={() => handleCalcNumber(String(n))} 
                        className="h-9 bg-gradient-to-b from-[#ffffff] to-[#f0f0f0] border border-[#aaaaaa] rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] hover:from-[#e5f1fb] hover:to-[#cce4f7] hover:border-[#0078d7] text-[14px] font-bold text-slate-800 active:shadow-inner transition-all"
                      >
                        {n}
                      </button>
                    ))}
                    <button 
                      onClick={handleCalcEquals} 
                      className="row-span-2 h-19 bg-gradient-to-b from-[#87c5eb] to-[#4c8ab1] border border-[#3c6a8b] rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] hover:from-[#a0d4f1] hover:to-[#5ea2cb] hover:border-[#0078d7] text-[20px] font-bold text-white shadow-sm active:shadow-inner active:inner-shadow-lg transition-all"
                    >
                      =
                    </button>
 
                    <button 
                      onClick={() => handleCalcNumber('0')} 
                      className="col-span-2 h-9 bg-gradient-to-b from-[#ffffff] to-[#f0f0f0] border border-[#aaaaaa] rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] hover:from-[#e5f1fb] hover:to-[#cce4f7] hover:border-[#0078d7] text-[14px] font-bold text-slate-800 active:shadow-inner transition-all"
                    >
                      0
                    </button>
                    <button 
                      onClick={handleCalcDecimal} 
                      className="h-9 bg-gradient-to-b from-[#ffffff] to-[#f0f0f0] border border-[#aaaaaa] rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] hover:from-[#e5f1fb] hover:to-[#cce4f7] hover:border-[#0078d7] text-[14px] font-bold text-slate-800 active:shadow-inner transition-all"
                    >
                      .
                    </button>
                  </div>
                </div>
              </OSWindow>

              <OSWindow
                id="skills"
                {...windows.skills}
                width="500px"
                height="450px"
                onClose={() => closeWindow('skills')}
                onMinimize={() => minimizeWindow('skills')}
                onMaximize={() => toggleMaximize('skills')}
                onFocus={() => focusWindow('skills')}
              >
                <div className="flex-1 bg-[#F0F0F0] flex flex-col p-4 gap-4 select-none overflow-y-auto">
                  <div className="flex items-center gap-3 border-b border-gray-300 pb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center border border-blue-200">
                      <Sparkles className="text-blue-600" size={28} />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-slate-800">Professional Skills</h2>
                      <p className="text-xs text-slate-500">Expertise & Technical Proficiencies</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: 'Wordpress web development', desc: 'Custom themes & Complex plugins', icon: Globe, color: 'bg-[#21759b]', level: '95%' },
                      { name: 'Vibe coding', desc: 'AI-Assisted rapid development', icon: Zap, color: 'bg-[#f1c40f]', level: '92%' },
                      { name: 'Graphic designing', desc: 'UI/UX & Modern architecture', icon: Palette, color: 'bg-[#e67e22]', level: '88%' },
                      { name: 'Capcut video editing', desc: 'Dynamic visuals & Motion', icon: Video, color: 'bg-[#ff0000]', level: '85%' },
                      { name: 'SEO Speed optimization', desc: 'Performance & Ranking', icon: Activity, color: 'bg-[#27ae60]', level: '94%' },
                    ].map((skill, index) => (
                      <div key={index} className="bg-white border border-[#c9d9e5] rounded shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-3 hover:bg-[#eaf1f7] transition-all group hover:border-[#a0c5e8] cursor-default">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 rounded-md ${skill.color} text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)]`}>
                            <skill.icon size={18} />
                          </div>
                          <div className="flex-1">
                            <div className="text-[12px] font-bold text-slate-800 tracking-tight">{skill.name}</div>
                            <div className="text-[10px] text-slate-500 leading-tight">{skill.desc}</div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-[9px] font-bold text-slate-500">
                            <span>Proficiency</span>
                            <span>{skill.level}</span>
                          </div>
                          <div className="h-4 w-full bg-[#e8e8e8] border border-[#bbbbbb] rounded shadow-inner overflow-hidden relative">
                            <div 
                              className={`h-full bg-gradient-to-b from-[#7dbedb] via-[#4d9fbf] to-[#7dbedb] transition-all duration-1000 ease-out relative overflow-hidden`} 
                              style={{ width: skill.level }}
                            >
                               <div className="absolute top-0 left-0 w-full h-1/2 bg-white/30 backdrop-blur-[1px]"></div>
                               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto bg-blue-50 border border-blue-100 rounded p-3 text-center">
                    <p className="text-[11px] text-blue-700 font-medium italic">"Designing the future, one pixel at a time."</p>
                  </div>
                </div>
              </OSWindow>

              <OSWindow
                id="resume"
                {...windows.resume}
                width="600px"
                height="800px"
                onClose={() => closeWindow('resume')}
                onMinimize={() => minimizeWindow('resume')}
                onMaximize={() => toggleMaximize('resume')}
                onFocus={() => focusWindow('resume')}
              >
                <div className="flex-1 bg-[#f0f0f0] overflow-y-auto flex flex-col items-center p-4 select-none">
                  <div className="w-full max-w-full shadow-2xl border border-gray-300 bg-white p-2">
                    <img 
                      src="https://i.pinimg.com/736x/88/cb/ca/88cbca8b58538faaff9f3e7f653eb123.jpg" 
                      alt="M.Taibe's CV" 
                      className="w-full h-auto select-none pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </OSWindow>

              <OSWindow
                id="phone"
                {...windows.phone}
                width="320px"
                height="480px"
                onClose={() => closeWindow('phone')}
                onMinimize={() => minimizeWindow('phone')}
                onMaximize={() => toggleMaximize('phone')}
                onFocus={() => focusWindow('phone')}
              >
                <div className="flex-1 bg-[#f0f2f5] flex flex-col select-none font-sans overflow-hidden">
                  <div className="h-44 bg-gradient-to-br from-[#1a73e8] to-[#0d47a1] p-6 flex flex-col justify-end text-white relative overflow-hidden shrink-0">
                    <div className="absolute -top-4 -right-4 opacity-10 rotate-12 pointer-events-none">
                      <Phone size={140} />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg">
                        <Win7Phone size={40} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold tracking-tight">M.Taibe</h2>
                        <p className="text-xs font-medium bg-white/20 inline-block px-2 py-0.5 rounded-full mt-1 backdrop-blur-sm">Available for Projects</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 p-4 space-y-3 overflow-y-auto custom-scrollbar">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1 mb-2">Primary Contact</div>
                    
                    <a href="https://wa.me/923706487654" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3 bg-white hover:bg-green-50 rounded-xl cursor-pointer transition-all border border-slate-200 hover:shadow-lg hover:border-green-300 group">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
                        <MessageSquare size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">WhatsApp</div>
                        <div className="text-sm font-semibold text-slate-700">+92 370 6487654</div>
                      </div>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight size={16} className="text-green-500" />
                      </div>
                    </a>

                    <a href="mailto:taibejaved485@gmail.com" className="flex items-center gap-4 p-3 bg-white hover:bg-blue-50 rounded-xl cursor-pointer transition-all border border-slate-200 hover:shadow-lg hover:border-blue-300 group">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <Mail size={20} />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Email</div>
                        <div className="text-sm font-semibold text-slate-700 truncate">taibejaved485@gmail.com</div>
                      </div>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight size={16} className="text-blue-500" />
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-3 bg-white hover:bg-orange-50 rounded-xl cursor-pointer transition-all border border-slate-200 hover:shadow-lg hover:border-orange-300 group">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Origin</div>
                        <div className="text-xs font-semibold text-slate-700">Ghokhuwal 121 jb faisalabad</div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-slate-800 rounded-xl text-white shadow-xl relative overflow-hidden group">
                       <div className="relative z-10">
                          <h3 className="text-sm font-bold mb-1">Let's work together!</h3>
                          <p className="text-[10px] opacity-70 mb-3 text-balance">Need a professional website or graphic design? I'm just a click away.</p>
                          <button className="w-full py-2 bg-blue-500 hover:bg-blue-400 rounded-lg text-xs font-bold transition-colors shadow-lg shadow-blue-500/20 active:scale-95 duration-75">
                             Send a Message
                          </button>
                       </div>
                       <Sparkles className="absolute -bottom-2 -right-2 opacity-5 scale-150 rotate-12" size={80} />
                    </div>

                    <div className="pt-4 flex justify-center gap-3">
                       <div onClick={() => window.open('https://github.com/taibejaved485-afk', '_blank')} title="GitHub" className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white cursor-pointer transition-all border border-slate-200 hover:border-slate-900 shadow-sm">
                          <Github size={18} />
                       </div>
                       <div onClick={() => window.open('https://www.linkedin.com/in/taibe-javed-b28283396/', '_blank')} title="LinkedIn" className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#0077b5] hover:bg-[#0077b5] hover:text-white cursor-pointer transition-all border border-slate-200 hover:border-[#0077b5] shadow-sm">
                          <Linkedin size={18} />
                       </div>
                       <div onClick={() => window.open('https://www.behance.net/Taibegraphics', '_blank')} title="Behance" className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#1769ff] hover:bg-[#1769ff] hover:text-white cursor-pointer transition-all border border-slate-200 hover:border-[#1769ff] shadow-sm">
                          <Palette size={18} />
                       </div>
                       <div onClick={() => window.open('https://m-taibe.vercel.app/', '_blank')} title="Portfolio" className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white cursor-pointer transition-all border border-slate-200 hover:border-purple-600 shadow-sm">
                          <Globe size={18} />
                       </div>
                    </div>
                  </div>
                </div>
              </OSWindow>

              <AnimatePresence>
                {showAbout && (
                  <div className="fixed inset-0 flex items-center justify-center bg-transparent z-[10001]">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-[400px] bg-[#f0f0f0] rounded-lg border border-white shadow-2xl overflow-hidden font-sans"
                    >
                      <div className="h-8 bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-between px-3">
                        <span className="text-[12px] text-white font-medium">About Notepad</span>
                        <div onClick={() => { if (clickSound.current) clickSound.current.play().catch(() => {}); setShowAbout(false); }} className="w-8 h-full flex items-center justify-center hover:bg-red-500 transition-colors cursor-pointer text-white">
                          <X size={14} />
                        </div>
                      </div>
                      <div className="bg-white p-6 space-y-4">
                        <div className="flex items-center gap-4">
                          <Win7Notepad size={48} />
                          <div>
                            <h2 className="text-xl font-semibold text-blue-600 italic">Windows 7 Professional</h2>
                            <p className="text-[11px] text-slate-500">Copyright © 2026 M.Taibe. All rights reserved.</p>
                          </div>
                        </div>
                        <div className="border-t border-slate-200 pt-4 text-[12px] text-slate-700 leading-relaxed">
                          <p>The Notepad portfolio editing system is protected by M.Taibe's dedication to high-fidelity UI design.</p>
                          <p className="mt-2">Developer: <span className="font-semibold">M.Taibe</span></p>
                          <p>Version: 1.0.0 (Aero Glass Edition)</p>
                        </div>
                        <div className="flex justify-end pt-4">
                          <button 
                            onClick={() => { if (clickSound.current) clickSound.current.play().catch(() => {}); setShowAbout(false); }}
                            className="px-8 py-1 bg-slate-50 border border-slate-300 rounded hover:bg-blue-50 hover:border-blue-400 text-[12px] text-slate-700 transition-all shadow-sm"
                          >
                            OK
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>

              {/* Desktop Context Menu */}
              <AnimatePresence>
                {desktopContextMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    style={{ left: desktopContextMenu.x, top: desktopContextMenu.y }}
                    className="fixed w-48 bg-[#f2f2f2] border border-[#a0a0a0] shadow-md py-1 z-[10005] text-[12px] text-gray-800"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div 
                      onMouseEnter={() => setActiveSubMenu('view')}
                      onMouseLeave={() => setActiveSubMenu(null)}
                      className="px-4 py-1.5 hover:bg-[#3299ff] hover:text-white cursor-default flex items-center justify-between group relative"
                    >
                      <span>View</span>
                      <ChevronRight size={12} className="text-gray-400 group-hover:text-white" />
                      {activeSubMenu === 'view' && (
                        <div className="absolute left-full top-0 w-40 bg-[#f2f2f2] border border-[#a0a0a0] shadow-md py-1 text-gray-800 z-[10007]">
                          <div onClick={() => { if (clickSound.current) clickSound.current.play().catch(() => {}); setIconSize('large'); setDesktopContextMenu(null); }} className="px-4 py-1.5 hover:bg-[#3299ff] hover:text-white flex items-center gap-2">
                             {iconSize === 'large' && <span className="w-1 h-1 rounded-full bg-current" />}
                             Large icons
                          </div>
                          <div onClick={() => { if (clickSound.current) clickSound.current.play().catch(() => {}); setIconSize('medium'); setDesktopContextMenu(null); }} className="px-4 py-1.5 hover:bg-[#3299ff] hover:text-white flex items-center gap-2">
                             {iconSize === 'medium' && <span className="w-1 h-1 rounded-full bg-current" />}
                             Medium icons
                          </div>
                          <div onClick={() => { if (clickSound.current) clickSound.current.play().catch(() => {}); setIconSize('small'); setDesktopContextMenu(null); }} className="px-4 py-1.5 hover:bg-[#3299ff] hover:text-white flex items-center gap-2">
                             {iconSize === 'small' && <span className="w-1 h-1 rounded-full bg-current" />}
                             Small icons
                          </div>
                        </div>
                      )}
                    </div>
                    <div 
                      onMouseEnter={() => setActiveSubMenu('sort')}
                      onMouseLeave={() => setActiveSubMenu(null)}
                      className="px-4 py-1.5 hover:bg-[#3299ff] hover:text-white cursor-default flex items-center justify-between group relative"
                    >
                      <span>Sort by</span>
                      <ChevronRight size={12} className="text-gray-400 group-hover:text-white" />
                      {activeSubMenu === 'sort' && (
                        <div className="absolute left-full top-0 w-40 bg-[#f2f2f2] border border-[#a0a0a0] shadow-md py-1 text-gray-800 z-[10007]">
                          <div onClick={() => { if (clickSound.current) clickSound.current.play().catch(() => {}); setSortBy('name'); setDesktopContextMenu(null); }} className="px-4 py-1.5 hover:bg-[#3299ff] hover:text-white flex items-center gap-2">
                             {sortBy === 'name' && <span className="w-1 h-1 rounded-full bg-current" />}
                             Name
                          </div>
                          <div onClick={() => { if (clickSound.current) clickSound.current.play().catch(() => {}); setSortBy('id'); setDesktopContextMenu(null); }} className="px-4 py-1.5 hover:bg-[#3299ff] hover:text-white flex items-center gap-2">
                             {sortBy === 'id' && <span className="w-1 h-1 rounded-full bg-current" />}
                             Size
                          </div>
                        </div>
                      )}
                    </div>
                    <div onClick={handleRefresh} className="px-4 py-1.5 hover:bg-[#3299ff] hover:text-white cursor-default">Refresh</div>
                    <div className="h-[1px] bg-[#d0d0d0] my-1 mx-1" />
                    <div className="px-4 py-1.5 hover:bg-[#3299ff] hover:text-white cursor-default opacity-50">Paste</div>
                    <div className="px-4 py-1.5 hover:bg-[#3299ff] hover:text-white cursor-default opacity-50 text-[11px]">Paste shortcut</div>
                    <div className="h-[1px] bg-[#d0d0d0] my-1 mx-1" />
                    <div 
                      onMouseEnter={() => setActiveSubMenu('new')}
                      onMouseLeave={() => setActiveSubMenu(null)}
                      className="px-4 py-1.5 hover:bg-[#3299ff] hover:text-white cursor-default flex items-center justify-between group relative"
                    >
                      <span>New</span>
                      <ChevronRight size={12} className="text-gray-400 group-hover:text-white" />
                      {activeSubMenu === 'new' && (
                        <div className="absolute left-full top-0 w-48 bg-[#f2f2f2] border border-[#a0a0a0] shadow-md py-1 text-gray-800 z-[10007]">
                          <div onClick={() => handleCreateNew('folder')} className="px-4 py-1.5 hover:bg-[#3299ff] hover:text-white">Folder</div>
                          <div onClick={() => handleCreateNew('text')} className="px-4 py-1.5 hover:bg-[#3299ff] hover:text-white">Text Document</div>
                        </div>
                      )}
                    </div>
                    <div className="h-[1px] bg-[#d0d0d0] my-1 mx-1" />
                    <div className="px-4 py-1.5 hover:bg-[#3299ff] hover:text-white cursor-default">Screen resolution</div>
                    <div className="px-4 py-1.5 hover:bg-[#3299ff] hover:text-white cursor-default">Gadgets</div>
                    <div 
                      onClick={() => {
                        if (clickSound.current) clickSound.current.play().catch(() => {});
                        setIsPersonalizeOpen(true);
                        setDesktopContextMenu(null);
                      }}
                      className="px-4 py-1.5 hover:bg-[#3299ff] hover:text-white cursor-default"
                    >
                      Personalize
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Personalization Window */}
              <AnimatePresence>
                {isPersonalizeOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-[10006]">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="w-[800px] h-[550px] bg-[#f0f0f0] rounded border border-white/50 shadow-2xl overflow-hidden flex flex-col font-sans"
                    >
                      {/* Title Bar */}
                      <div className="h-8 aero-blur flex items-center justify-between px-3 border-b border-white/20 select-none">
                        <div className="flex items-center gap-2">
                          <Settings size={14} className="text-slate-600" />
                          <span className="text-[12px] text-slate-800 font-medium">Personalization</span>
                        </div>
                        <div 
                          onClick={() => { if (clickSound.current) clickSound.current.play().catch(() => {}); setIsPersonalizeOpen(false); }}
                          className="w-10 h-full flex items-center justify-center hover:bg-[#e81123] hover:text-white transition-colors cursor-pointer"
                        >
                          <X size={16} />
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 flex overflow-hidden">
                        {/* Sidebar */}
                        <div className="w-48 bg-white/50 border-r border-slate-300 p-4 space-y-2">
                          <div className="text-[12px] text-blue-700 hover:underline cursor-pointer">Control Panel Home</div>
                          <div className="h-[1px] bg-slate-300 my-4" />
                          <div className="text-[12px] text-slate-800 font-medium bg-blue-100/50 p-1.5 rounded border border-blue-200">Change desktop icons</div>
                          <div className="text-[12px] text-slate-600 hover:underline cursor-pointer p-1.5">Change mouse pointers</div>
                          <div className="text-[12px] text-slate-600 hover:underline cursor-pointer p-1.5">Change your account picture</div>
                        </div>

                        {/* Main Grid */}
                        <div className="flex-1 bg-white p-6 overflow-y-auto">
                          <h2 className="text-lg text-blue-800 mb-4">Change the visuals and sounds on your computer</h2>
                          
                          <div className="mb-8">
                            <h3 className="text-[13px] font-semibold text-slate-700 border-b border-slate-200 pb-1 mb-4">Aero Themes</h3>
                            <div className="grid grid-cols-4 gap-6">
                              {wallpapers.map((wp) => (
                                <div 
                                  key={wp.name}
                                  onClick={() => { if (notifySound.current) notifySound.current.play().catch(() => {}); setWallpaper(wp.url); }}
                                  className={`group cursor-pointer p-1 rounded transition-all ${wallpaper === wp.url ? 'bg-blue-100 ring-2 ring-blue-400' : 'hover:bg-slate-50'}`}
                                >
                                  <div className="aspect-[4/3] bg-slate-100 border border-slate-300 shadow-sm overflow-hidden relative">
                                    <img src={wp.url} alt={wp.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                    <div className="absolute inset-x-0 bottom-0 bg-white/90 p-1.5 text-center text-[10px] text-slate-800 font-medium border-t border-slate-200">
                                      {wp.name}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-[13px] font-semibold text-slate-700 border-b border-slate-200 pb-1 mb-4">Custom Wallpaper</h3>
                            <div className="flex items-center gap-4">
                              <label className="px-6 py-2 bg-slate-50 border border-slate-300 rounded hover:bg-blue-50 hover:border-blue-400 text-[12px] text-slate-700 transition-all shadow-sm cursor-pointer inline-flex items-center gap-2">
                                <Plus size={14} />
                                Browse for Image...
                                <input 
                                  type="file" 
                                  accept="image/*" 
                                  className="hidden" 
                                  onChange={handleWallpaperUpload}
                                />
                              </label>
                              <p className="text-[11px] text-slate-500 italic">Supports JPG, PNG and other image formats.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="h-14 bg-[#f0f0f0] border-t border-slate-300 flex items-center justify-end px-6 gap-3">
                        <button 
                          onClick={() => setIsPersonalizeOpen(false)}
                          className="px-8 py-1.5 bg-white border border-slate-300 rounded hover:border-blue-400 hover:bg-blue-50 text-[12px] text-slate-700 transition-all shadow-sm"
                        >
                          OK
                        </button>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>

              {/* Notepad Search/Replace Dialog */}
              <AnimatePresence>
                {isNotepadSearchOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-transparent z-[10002]">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-[350px] bg-[#f0f0f0] rounded border border-white shadow-2xl overflow-hidden font-sans"
                    >
                      <div className="h-8 bg-white flex items-center justify-between px-3 border-b border-[#dadada]">
                        <span className="text-[12px] text-slate-700 font-medium">{isReplaceMode ? 'Replace' : 'Find'}</span>
                        <div 
                          onClick={() => setIsNotepadSearchOpen(false)}
                          className="w-8 h-full flex items-center justify-center hover:bg-[#e81123] hover:text-white transition-colors cursor-pointer"
                        >
                          <X size={14} />
                        </div>
                      </div>
                      <div className="p-4 bg-white space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="text-[12px] text-[#333] w-20">Find what:</span>
                          <input 
                            type="text" 
                            autoFocus 
                            value={notepadSearchQuery} 
                            onChange={(e) => setNotepadSearchQuery(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleNotepadFindNext()}
                            className="flex-1 h-6 border border-[#adadad] px-2 text-[12px] outline-none focus:border-[#0078d7] text-gray-800 bg-white"
                          />
                        </div>
                        {isReplaceMode && (
                          <div className="flex items-center gap-2">
                            <span className="text-[12px] text-[#333] w-20">Replace with:</span>
                            <input 
                              type="text" 
                              value={notepadReplaceQuery} 
                              onChange={(e) => setNotepadReplaceQuery(e.target.value)}
                              onKeyDown={(e) => e.key === 'Enter' && handleNotepadReplace()}
                              className="flex-1 h-6 border border-[#adadad] px-2 text-[12px] outline-none focus:border-[#0078d7] text-gray-800 bg-white"
                            />
                          </div>
                        )}
                      </div>
                      <div className="bg-[#f0f0f0] p-4 flex flex-col gap-2">
                        <div className="flex justify-end gap-2">
                          <button 
                            onClick={handleNotepadFindNext}
                            className="px-4 py-1 bg-white border border-[#adadad] rounded hover:border-[#0078d7] hover:bg-[#e5f1fb] text-[11px] transition-all font-medium text-gray-800"
                          >
                            Find Next
                          </button>
                          {isReplaceMode && (
                            <>
                              <button 
                                onClick={handleNotepadReplace}
                                className="px-4 py-1 bg-white border border-[#adadad] rounded hover:border-[#0078d7] hover:bg-[#e5f1fb] text-[11px] transition-all font-medium text-gray-800"
                              >
                                Replace
                              </button>
                              <button 
                                onClick={handleNotepadReplaceAll}
                                className="px-4 py-1 bg-white border border-[#adadad] rounded hover:border-[#0078d7] hover:bg-[#e5f1fb] text-[11px] transition-all font-medium text-gray-800"
                              >
                                Replace All
                              </button>
                            </>
                          )}
                          <button 
                            onClick={() => setIsNotepadSearchOpen(false)}
                            className="px-4 py-1 bg-white border border-[#adadad] rounded hover:border-[#0078d7] hover:bg-[#e5f1fb] text-[11px] transition-all font-medium text-gray-800"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>

              {/* Error Popup */}
              <AnimatePresence>
                {isErrorOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black/10 z-[9999]">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="w-[420px] bg-[#f0f0f0] rounded border border-white shadow-[0_15px_50px_rgba(0,0,0,0.4)] overflow-hidden"
                    >
                      <div className="h-8 bg-white flex items-center justify-between px-3 border-b border-[#dadada]">
                        <span className="text-[12px] text-slate-700 font-medium font-sans">Windows Error</span>
                        <div 
                          onClick={() => setIsErrorOpen(false)}
                          className="w-8 h-full flex items-center justify-center hover:bg-[#e81123] hover:text-white transition-colors cursor-pointer"
                        >
                          <X size={14} />
                        </div>
                      </div>
                      <div className="p-6 flex items-start gap-5 bg-white">
                        <XCircle size={38} className="text-red-500 shrink-0" />
                        <p className="text-[13px] text-[#333] pt-2 leading-snug">
                          Access Denied. You are not ready for world domination yet.
                        </p>
                      </div>
                      <div className="bg-[#f0f0f0] p-4 flex justify-end">
                        <button 
                          onClick={() => setIsErrorOpen(false)}
                          className="px-8 py-1.5 bg-white border border-[#adadad] rounded hover:border-[#0078d7] hover:bg-[#e5f1fb] text-[12px] text-[#333] transition-all shadow-[0_1px_2px_rgba(0,0,0,0.05)] active:translate-y-[1px] font-medium"
                        >
                          OK
                        </button>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>

              {/* Run Dialog */}
              <AnimatePresence>
                {isRunOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black/5 z-[10001]">
                    <motion.div
                      initial={{ opacity: 0, y: 50, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 50, scale: 0.95 }}
                      className="w-[400px] bg-[#f0f0f0] rounded-sm border border-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] overflow-hidden font-sans"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') executeRunCommand();
                        if (e.key === 'Escape') setIsRunOpen(false);
                      }}
                    >
                      <div className="h-8 bg-white flex items-center justify-between px-3 border-b border-[#dadada]">
                        <div className="flex items-center gap-2">
                          <Win7RunIcon size={16} />
                          <span className="text-[12px] text-slate-700 font-medium">Run</span>
                        </div>
                        <div onClick={() => setIsRunOpen(false)} className="w-8 h-full flex items-center justify-center hover:bg-[#e81123] hover:text-white transition-colors cursor-pointer">
                          <X size={14} />
                        </div>
                      </div>
                      <div className="p-5 flex items-start gap-4 bg-white">
                        <Win7RunIcon size={32} />
                        <div className="pt-1 space-y-3 flex-1">
                          <p className="text-[12px] text-[#333]">
                            Type the name of a program, folder, document, or Internet resource, and Windows will open it for you.
                          </p>
                          <div className="flex items-center gap-3">
                            <span className="text-[12px] text-[#333]">Open:</span>
                            <input 
                              type="text" 
                              autoFocus 
                              value={runInput} 
                              onChange={(e) => setRunInput(e.target.value)}
                              className="flex-1 h-6 border border-[#adadad] px-2 text-[12px] outline-none focus:border-[#0078d7] text-gray-800 bg-white"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#f0f0f0] p-4 flex justify-end gap-2">
                        <button 
                          onClick={executeRunCommand}
                          className="px-6 py-1 bg-white border border-[#adadad] rounded hover:border-[#0078d7] hover:bg-[#e5f1fb] text-[12px] transition-all font-medium text-gray-800"
                        >
                          OK
                        </button>
                        <button 
                          onClick={() => setIsRunOpen(false)}
                          className="px-6 py-1 bg-white border border-[#adadad] rounded hover:border-[#0078d7] hover:bg-[#e5f1fb] text-[12px] transition-all font-medium text-gray-800"
                        >
                          Cancel
                        </button>
                        <button 
                          className="px-6 py-1 bg-white border border-[#adadad] rounded hover:border-[#0078d7] hover:bg-[#e5f1fb] text-[12px] transition-all font-medium opacity-50 cursor-not-allowed text-gray-800"
                        >
                          Browse...
                        </button>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>

              {/* Confirm Delete Popup */}
              <AnimatePresence>
                {showDeleteConfirm && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black/10 z-[10000]">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="w-[480px] bg-[#f0f0f0] rounded border border-white shadow-[0_15px_50px_rgba(0,0,0,0.4)] overflow-hidden"
                    >
                      <div className="h-8 bg-white flex items-center justify-between px-3 border-b border-[#dadada]">
                        <span className="text-[12px] text-slate-700 font-medium">Delete Multiple Items</span>
                        <div 
                          onClick={() => setShowDeleteConfirm(false)}
                          className="w-8 h-full flex items-center justify-center hover:bg-[#e81123] hover:text-white transition-colors cursor-pointer"
                        >
                          <X size={14} />
                        </div>
                      </div>
                      <div className="p-6 flex items-start gap-5 bg-white">
                        <AlertCircle size={38} className="text-yellow-500 shrink-0" />
                        <div className="pt-1">
                          <p className="text-[13px] text-[#333] font-medium mb-1">
                            Are you sure you want to permanently delete these items?
                          </p>
                          <p className="text-[12px] text-slate-500">
                            This cannot be undone. You will lose access to world domination plans (if any).
                          </p>
                        </div>
                      </div>
                      <div className="bg-[#f0f0f0] p-4 flex justify-end gap-2">
                        <button 
                          onClick={confirmEmptyBin}
                          className="px-6 py-1.5 bg-white border border-[#adadad] rounded hover:border-[#0078d7] hover:bg-[#e5f1fb] text-[12px] text-[#333] transition-all font-medium"
                        >
                          Yes
                        </button>
                        <button 
                          onClick={() => setShowDeleteConfirm(false)}
                          className="px-6 py-1.5 bg-white border border-[#adadad] rounded hover:border-[#0078d7] hover:bg-[#e5f1fb] text-[12px] text-[#333] transition-all font-medium"
                        >
                          No
                        </button>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Taskbar */}
            <div className="absolute bottom-0 left-0 right-0 h-10 aero-blur flex items-center justify-between px-1 z-[9000]">
              <div className="flex items-center h-full">
                {/* Start Orb */}
                <motion.div 
                  onClick={toggleStartMenu}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow-lg mx-1 relative overflow-hidden group border border-white/20 z-[70]"
                  style={{ 
                    background: 'radial-gradient(circle at 30% 30%, #5ba8ff 0%, #00459c 100%)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent group-hover:from-white/40 group-active:from-black/20" />
                  <div className="grid grid-cols-2 gap-0.5 scale-50 overflow-hidden rounded-sm">
                     <div className="w-4 h-4 bg-red-500/90" />
                     <div className="w-4 h-4 bg-blue-500/90" />
                     <div className="w-4 h-4 bg-green-500/90" />
                     <div className="w-4 h-4 bg-yellow-500/90" />
                  </div>
                </motion.div>

                {/* Start Menu */}
                <AnimatePresence>
                  {isStartMenuOpen && (
                    <motion.div
                      ref={startMenuRef}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute bottom-11 left-1 w-[420px] h-[580px] rounded-t-lg aero-blur border border-white/30 shadow-2xl overflow-hidden flex z-[9001]"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, rgba(200,220,255,0.8) 100%)',
                        boxShadow: '0 0 15px rgba(0,0,0,0.3), inset 0 0 2px rgba(255,255,255,0.5)'
                      }}
                    >
                      {/* Left Column (White Apps) */}
                      <div className="w-[60%] bg-white/95 flex flex-col p-2 pt-4">
                        <div className="flex-1 space-y-1 overflow-y-auto pr-1">
                          {[
                            { id: 1, name: 'My Computer', component: Win7Computer },
                            { id: 2, name: "M.Taibe's Projects", component: Win7Folder },
                            { id: 3, name: 'Private Files', component: (props: any) => <Win7Folder {...props} restricted /> },
                            { id: 4, name: 'My Resume', component: Win7Document },
                            { id: 5, name: "M.Taibe's Skills", component: (props: any) => <Win7Document {...props} variant="skills" /> },
                            { id: 6, name: 'Terminal', component: Win7Terminal },
                            { id: 7, name: 'Calculator', component: Win7Calculator },
                            { id: 8, name: 'Notepad', component: Win7Notepad },
                            { id: 9, name: 'Paint', component: Win7Paint },
                            { id: 10, name: 'GitHub', component: (props: any) => <Github {...props} className="text-gray-600" /> },
                            { id: 11, name: 'Contact M.Taibe', component: Win7Phone },
                          ].map((app) => (
                            <div 
                              key={app.id}
                              onClick={() => { handleIconClick(app.id); setIsStartMenuOpen(false); }}
                              className="flex items-center gap-3 px-2 py-1.5 rounded hover:bg-blue-100/50 cursor-pointer group transition-colors"
                            >
                              <app.component size={28} />
                              <span className="text-[12px] text-gray-800 font-[400] font-sans">{app.name}</span>
                            </div>
                          ))}
                        </div>
                        {/* Search Bar */}
                        <div className="mt-2 p-1 border-t border-gray-100">
                          <div className="relative">
                            <input 
                              type="text" 
                              placeholder="Search programs and files"
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              className="w-full text-xs italic font-light px-3 py-1.5 bg-white border border-gray-300 rounded focus:border-blue-400 outline-none text-gray-600"
                            />
                            {searchTerm && (
                              <div className="absolute left-0 bottom-full w-full bg-white border border-gray-300 rounded-t shadow-lg py-1 z-50">
                                {filteredStartApps.map(app => (
                                  <div 
                                    key={app.id}
                                    onClick={() => { handleIconClick(app.id); setIsStartMenuOpen(false); setSearchTerm(''); }}
                                    className="px-3 py-1.5 hover:bg-blue-100 cursor-pointer text-gray-800 text-[11px]"
                                  >
                                    {app.name}
                                  </div>
                                ))}
                                {filteredStartApps.length === 0 && (
                                  <div className="px-3 py-1.5 text-gray-400 text-[11px] italic">No results</div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Right Column (Blue System) */}
                      <div className="w-[40%] flex flex-col pt-4" style={{ background: 'linear-gradient(to right, rgba(200,225,255,0.6), rgba(150,180,250,0.6))' }}>
                        {/* Profile Section */}
                        <div className="flex flex-col items-center mb-4 px-4">
                          <div className="w-14 h-14 rounded border border-white/50 bg-white/20 p-0.5 shadow-sm mb-2">
                             <div className="w-full h-full bg-blue-400/20 rounded-sm flex items-center justify-center">
                                <FileUser size={24} className="text-white/60" />
                             </div>
                          </div>
                          <span className="text-xs font-bold text-white drop-shadow-sm tracking-tight">M.Taibe</span>
                        </div>

                        {/* Right Links */}
                        <div className="flex-1 space-y-0.5 px-1">
                          {['About', 'Task Manager', "M.Taibe's Projects", 'My Resume', 'Terminal', 'Contact M.Taibe', 'GitHub', 'Run...'].map((item) => (
                            <div 
                              key={item}
                              onClick={() => {
                                if (item === 'Run...') {
                                  setIsRunOpen(true);
                                  setIsStartMenuOpen(false);
                                }
                                if (item === 'GitHub') {
                                  window.open('https://github.com/taibejaved485-afk', '_blank');
                                  setIsStartMenuOpen(false);
                                }
                                if (item === "M.Taibe's Projects") {
                                  handleIconClick(2);
                                  setIsStartMenuOpen(false);
                                }
                                if (item === "My Resume") {
                                  handleIconClick(4);
                                  setIsStartMenuOpen(false);
                                }
                                if (item === "Terminal") {
                                  handleIconClick(6);
                                  setIsStartMenuOpen(false);
                                }
                                if (item === "Contact M.Taibe") {
                                  handleIconClick(11);
                                  setIsStartMenuOpen(false);
                                }
                              }}
                              className="px-3 py-1.5 rounded hover:bg-white/20 cursor-pointer text-white text-[11px] font-medium tracking-tight hover:shadow-sm transition-all"
                            >
                              {item}
                            </div>
                          ))}
                        </div>

                        {/* Shutdown Section */}
                        <div className="p-3 border-t border-white/10 mt-auto flex justify-end">
                          <div 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleShutdown();
                            }}
                            className="bg-blue-700/80 hover:bg-red-600/90 border border-blue-400/30 rounded px-3 py-1 flex items-center gap-2 cursor-pointer transition-colors shadow-inner"
                          >
                            <span className="text-white text-[10px] font-bold">Shutdown</span>
                            <Power size={12} className="text-white" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Taskbar Icons */}
                <div className="flex items-center h-full gap-1 ml-1">
                   {(Object.values(windows) as any[]).map((win) => (
                     <div 
                        key={win.id} 
                        onClick={() => handleTaskbarClick(win.id)}
                        className={`taskbar-button group relative w-12 h-full flex items-center justify-center cursor-pointer transition-all duration-300
                          ${win.isOpen ? 'bg-white/10 shadow-[inset_0_0_1px_rgba(255,255,255,0.4)]' : 'hover:bg-white/10'}
                          ${win.zIndex === topZIndex && win.isOpen && !win.isMinimized ? 'bg-white/20 shadow-[inset_0_0_1px_rgba(255,255,255,0.6)]' : ''}
                        `}
                     >
                       {win.id === 'recycleBin' ? (
                         <Win7RecycleBin size={24} isEmpty={recycleFiles.length === 0} />
                       ) : (
                         <win.icon size={24} />
                       )}
                       {win.isOpen && (
                         <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-300 shadow-[0_0_5px_#93c5fd]" />
                       )}
                       {/* Glass Shine Effect */}
                       <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none" />
                     </div>
                   ))}
                   <div className="w-[1px] h-6 bg-white/10 mx-1" />
                   <div 
                     onClick={() => window.open('https://github.com/taibejaved485-afk', '_blank')}
                     className="taskbar-button w-12 h-full flex items-center justify-center hover:bg-white/10 cursor-pointer"
                   >
                      <Github size={22} className="text-white drop-shadow-sm" />
                   </div>
                </div>
              </div>

              {/* System Tray & Clock */}
              <div className="flex items-center h-full pr-1">
                <div className="h-full px-3 flex flex-col items-center justify-center border-l border-white/10 hover:bg-white/10 cursor-pointer transition-colors">
                  <span className="text-[11px] text-white font-medium leading-tight">
                    {formatTime(currentTime)}
                  </span>
                  <span className="text-[11px] text-white font-medium leading-tight">
                    {formatDate(currentTime)}
                  </span>
                </div>
                <div 
                  onClick={() => {
                    setWindows(prev => {
                      const next = { ...prev };
                      Object.keys(next).forEach(k => next[k] = { ...next[k], isMinimized: true });
                      return next;
                    });
                  }}
                  className="w-3 h-full border-l border-white/20 bg-white/10 hover:bg-white/30 transition-colors relative cursor-pointer group rounded-r-sm"
                  title="Show Desktop"
                >
                   <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
