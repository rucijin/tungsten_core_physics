import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const zhMathNote = defineNoteConfig({
  dir: 'math',
  link: '/math',
  sidebar: 'auto',
})

const zhPhysicsNote = defineNoteConfig({
  dir: 'physics',
  link: '/physics',
  sidebar: 'auto',
})

const zhAixphysicsNote = defineNoteConfig({
  dir: 'aixphysics',
  link: '/aixphysics',
  sidebar: 'auto',
})

const zhEnglishNote = defineNoteConfig({
  dir: 'english',
  link: '/english',
  sidebar: 'auto',
})

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [zhMathNote, zhPhysicsNote, zhAixphysicsNote, zhEnglishNote],
})

/* =================== locale: en-US ======================= */

const enMathNote = defineNoteConfig({
  dir: 'math',
  link: '/math',
  sidebar: 'auto',
})

const enPhysicsNote = defineNoteConfig({
  dir: 'physics',
  link: '/physics',
  sidebar: 'auto',
})

const enAixphysicsNote = defineNoteConfig({
  dir: 'aixphysics',
  link: '/aixphysics',
  sidebar: 'auto',
})

const enEnglishNote = defineNoteConfig({
  dir: 'english',
  link: '/english',
  sidebar: 'auto',
})

const enDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/en/',
  notes: [enDemoNote, enMathNote, enPhysicsNote, enAixphysicsNote, enEnglishNote],
})

