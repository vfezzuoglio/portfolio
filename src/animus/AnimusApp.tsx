import { useCallback, useEffect, useState } from 'react'
import './animus.css'
import { AnimusBackground } from './AnimusBackground'
import { DatabaseMenu } from './DatabaseMenu'
import { HelixView } from './HelixView'
import { NodeDetailModal } from './NodeDetailModal'
import { categories } from './data'
import { categoryNodes } from './nodes'
import { profile } from '../data/resume'

type Screen = 'boot' | 'database' | 'category'

export function AnimusApp() {
  const [screen, setScreen] = useState<Screen>('boot')
  const [categoryIndex, setCategoryIndex] = useState(0)
  const [nodeIndex, setNodeIndex] = useState(0)
  const [opened, setOpened] = useState(false)

  const activeCategory = categories[categoryIndex]
  const nodes = categoryNodes[activeCategory.id]
  const activeNode = nodes[nodeIndex]

  const openDatabase = useCallback(() => setScreen('database'), [])
  const openCategory = useCallback((index: number) => {
    setCategoryIndex(index)
    setNodeIndex(0)
    setOpened(false)
    setScreen('category')
  }, [])
  const backToDatabase = useCallback(() => {
    setOpened(false)
    setScreen('database')
  }, [])
  const backToBoot = useCallback(() => setScreen('boot'), [])
  const backToHelix = useCallback(() => setOpened(false), [])

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
          setCategoryIndex((i) => (i + 1) % categories.length)
        } else if (e.key === 'ArrowUp') {
          e.preventDefault()
          setCategoryIndex((i) => (i - 1 + categories.length) % categories.length)
        } else if (e.key === 'Enter') {
          e.preventDefault()
          openCategory(categoryIndex)
        } else if (e.key === 'Backspace' || e.key === 'Escape') {
          e.preventDefault()
          backToBoot()
        }
        return
      }
      if (screen === 'category') {
        if (opened) {
          if (e.key === 'Backspace' || e.key === 'Escape') {
            e.preventDefault()
            backToHelix()
          }
          return
        }
        if (e.key === 'ArrowRight') {
          e.preventDefault()
          setNodeIndex((i) => Math.min(i + 1, nodes.length - 1))
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault()
          setNodeIndex((i) => Math.max(i - 1, 0))
        } else if (e.key === 'Enter') {
          e.preventDefault()
          setOpened(true)
        } else if (e.key === 'Backspace' || e.key === 'Escape') {
          e.preventDefault()
          backToDatabase()
        }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [screen, opened, categoryIndex, nodes.length, openDatabase, openCategory, backToDatabase, backToBoot, backToHelix])

  return (
    <div className="animus-root">
      <AnimusBackground />
      <div className="animus-shell">
        <div className="animus-hud-top">
          <a className="animus-dossier-link" href="/Vincent_Fezzuoglio_Resume.pdf" target="_blank" rel="noreferrer">
            DOWNLOAD DOSSIER
          </a>
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
            <DatabaseMenu selectedIndex={categoryIndex} onHover={setCategoryIndex} onSelect={openCategory} />
          )}

          {screen === 'category' && (
            <HelixView
              categoryLabel={activeCategory.label}
              nodes={nodes}
              selectedIndex={nodeIndex}
              onHoverNode={setNodeIndex}
              onOpenNode={(index) => {
                setNodeIndex(index)
                setOpened(true)
              }}
            />
          )}
        </div>

        {screen === 'category' && opened && (
          <NodeDetailModal node={activeNode} categoryLabel={activeCategory.label} onClose={backToHelix} />
        )}

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
            {screen === 'category' && (
              <>
                <span className="sep">›</span>
                <button type="button" onClick={backToHelix} disabled={!opened}>
                  {activeCategory.label}
                </button>
              </>
            )}
            {screen === 'category' && opened && (
              <>
                <span className="sep">›</span>
                <button type="button" disabled>
                  {activeNode.title}
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
            {screen === 'category' && !opened && (
              <>
                <span className="animus-key">
                  <kbd>←→</kbd> Navigate
                </span>
                <span className="animus-key">
                  <kbd>Enter</kbd> Select
                </span>
                <span className="animus-key">
                  <kbd>Backspace</kbd> Back
                </span>
              </>
            )}
            {screen === 'category' && opened && (
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
