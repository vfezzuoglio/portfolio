import { useCallback, useEffect, useState } from 'react'
import './animus.css'
import { AnimusBackground } from './AnimusBackground'
import { DatabaseMenu } from './DatabaseMenu'
import { EntryDetail } from './EntryDetail'
import { categories } from './data'
import { profile } from '../data/resume'

type Screen = 'boot' | 'database' | 'entry'

export function AnimusApp() {
  const [screen, setScreen] = useState<Screen>('boot')
  const [selectedIndex, setSelectedIndex] = useState(0)

  const openDatabase = useCallback(() => setScreen('database'), [])
  const openEntry = useCallback((index: number) => {
    setSelectedIndex(index)
    setScreen('entry')
  }, [])
  const backToDatabase = useCallback(() => setScreen('database'), [])
  const backToBoot = useCallback(() => setScreen('boot'), [])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (screen === 'boot') {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          openDatabase()
        }
        return
      }
      if (screen === 'database') {
        if (e.key === 'ArrowDown') {
          e.preventDefault()
          setSelectedIndex((i) => (i + 1) % categories.length)
        } else if (e.key === 'ArrowUp') {
          e.preventDefault()
          setSelectedIndex((i) => (i - 1 + categories.length) % categories.length)
        } else if (e.key === 'Enter') {
          e.preventDefault()
          openEntry(selectedIndex)
        } else if (e.key === 'Backspace' || e.key === 'Escape') {
          e.preventDefault()
          backToBoot()
        }
        return
      }
      if (screen === 'entry') {
        if (e.key === 'Backspace' || e.key === 'Escape') {
          e.preventDefault()
          backToDatabase()
        }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [screen, selectedIndex, openDatabase, openEntry, backToDatabase, backToBoot])

  const activeCategory = categories[selectedIndex]

  return (
    <div className="animus-root">
      <AnimusBackground />
      <div className="animus-shell">
        <div className="animus-hud-top">
          <div className="animus-synch">
            TOTAL SYNCH <strong>100.0%</strong>
          </div>
        </div>

        <div className="animus-main">
          {screen === 'boot' && (
            <div
              className="animus-boot"
              onClick={openDatabase}
              role="button"
              tabIndex={0}
              aria-label="Enter database"
            >
              <span className="animus-boot-eyebrow">Animus Profile Loaded</span>
              <h1 className="animus-boot-title">{profile.name}</h1>
              <p className="animus-boot-subtitle">{profile.title}</p>
              <div className="animus-boot-bar">
                <div className="animus-boot-bar-fill" />
                <div className="animus-boot-bar-label">
                  <span>SYNCHRONIZATION</span>
                  <span>100%</span>
                </div>
              </div>
              <span className="animus-boot-enter">PRESS ENTER TO ACCESS DATABASE</span>
            </div>
          )}

          {screen === 'database' && (
            <DatabaseMenu selectedIndex={selectedIndex} onHover={setSelectedIndex} onSelect={openEntry} />
          )}

          {screen === 'entry' && (
            <div className="animus-entry">
              <div className="animus-entry-header">
                <span className="animus-diamond" />
                <h2 className="animus-entry-title">{activeCategory.label}</h2>
                <span className="animus-entry-sub">{activeCategory.description}</span>
              </div>
              <EntryDetail categoryId={activeCategory.id} />
            </div>
          )}
        </div>

        <div className="animus-hud-bottom">
          <div className="animus-breadcrumb">
            <span className="animus-diamond" />
            <button type="button" onClick={backToBoot} disabled={screen === 'boot'}>
              ANIMUS DESKTOP
            </button>
            {screen !== 'boot' && (
              <>
                <span className="sep">›</span>
                <button type="button" onClick={backToDatabase} disabled={screen === 'database'}>
                  DATABASE
                </button>
              </>
            )}
            {screen === 'entry' && (
              <>
                <span className="sep">›</span>
                <button type="button" disabled>
                  {activeCategory.label}
                </button>
              </>
            )}
          </div>
          <div className="animus-keyhints">
            {screen === 'boot' && (
              <span className="animus-key">
                <kbd>Enter</kbd> Select
              </span>
            )}
            {screen === 'database' && (
              <>
                <span className="animus-key">
                  <kbd>↑↓</kbd> Navigate
                </span>
                <span className="animus-key">
                  <kbd>Enter</kbd> Select
                </span>
                <span className="animus-key">
                  <kbd>Backspace</kbd> Back
                </span>
              </>
            )}
            {screen === 'entry' && (
              <span className="animus-key">
                <kbd>Backspace</kbd> Back
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
