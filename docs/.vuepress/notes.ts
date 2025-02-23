import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const zhPhysicsNote = defineNoteConfig({
  dir: 'physics',
  link: '/physics',
  sidebar: 'auto',
})

const zhAnalyticalmechanicsNote = defineNoteConfig({
  dir: 'analyticalmechanics',
  link: '/analyticalmechanics',
  sidebar: 'auto',
})

const zhElectroynamicsNote = defineNoteConfig({
  dir: 'electrodynamics',
  link: '/electrodynamics',
  sidebar: 'auto',
})

const zhQuantummechanicsNote = defineNoteConfig({
  dir: 'quantummechanics',
  link: '/quantummechanics',
  sidebar: 'auto',
})

const zhStatisticalphysicsNote = defineNoteConfig({
  dir: 'statisticalphysics',
  link: '/statisticalphysics',
  sidebar: 'auto',
})

const zhExperimentalphysicsNote = defineNoteConfig({
  dir: 'experimentalphysics',
  link: '/experimentalphysics',
  sidebar: 'auto',
})

const zhRelativitytheoryNote = defineNoteConfig({
  dir: 'relativitytheory',
  link: '/relativitytheory',
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

const zhMathNote = defineNoteConfig({
  dir: 'math',
  link: '/math',
  sidebar: 'auto',
})

const zhOthersNote = defineNoteConfig({
  dir: 'others',
  link: '/others',
  sidebar: 'auto',
})

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    zhMathNote,
    zhPhysicsNote,
    zhAnalyticalmechanicsNote,
    zhElectroynamicsNote,
    zhQuantummechanicsNote,
    zhStatisticalphysicsNote,
    zhExperimentalphysicsNote,
    zhRelativitytheoryNote,
    zhAixphysicsNote,
    zhEnglishNote,
    zhOthersNote,
  ],
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

