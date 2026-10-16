import { useCallback, useEffect, useState } from 'react'
import './animus.css'
import { AnimusBackground } from './AnimusBackground'
import { DatabaseArticle } from './DatabaseArticle'
import { HelixView } from './HelixView'
import { HomeMenu, type HomeMenuItem } from './HomeMenu'
import { HomeMenuBackdrop } from './HomeMenuBackdrop'
import { InventoryView } from './InventoryView'
import { NodeDetailModal } from './NodeDetailModal'
import { categories } from './data'
import { categoryNodes } from './nodes'
import { profile } from '../data/resume'
import { useTheme } from '../hooks/useTheme'
import { withViewTransition } from './viewTransition'

type Screen = 'boot' | 'database' | 'category'

const ARTICLE_CATEGORIES = new Set(['summary', 'contact'])
const INVENTORY_CATEGORIES = new Set(['skills', 'certifications'])

export function AnimusApp() {
  const [screen, setScreen] = useState<Screen>('boot')
  const [categoryIndex, setCategoryIndex] = useState(0)
  const [nodeIndex, setNodeIndex] = useState(0)
  const [opened, setOpened] = useState(false)
  const { theme, toggle: toggleTheme } = useTheme()

  const activeCategory = categories[categoryIndex]
  const nodes = categoryNodes[activeCategory.id]
  const activeNode = nodes[nodeIndex]
  const isArticle = ARTICLE_CATEGORIES.has(activeCategory.id)
  const isInventory = INVENTORY_CATEGORIES.has(activeCategory.id)

  const openDatabase = useCallback(() => withViewTransition(() => setScreen('database')), [])
  const openCategory = useCallback((index: number) => {
    withViewTransition(() => {
      setCategoryIndex(index)
      setNodeIndex(0)
      setOpened(false)
      setScreen('category')
    })
  }, [])
  const backToDatabase = useCallback(() => {
    withViewTransition(() => {
      setOpened(false)
      setScreen('database')
    })
  }, [])
  const backToBoot = useCallback(() => withViewTransition(() => setScreen('boot')), [])
  const backToHelix = useCallback(() => setOpened(false), [])

  const categoryItems: HomeMenuItem[] = categories.map((c, i) => ({
    id: c.id,
    label: c.label,
    action: () => openCategory(i),
  }))

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
        if (isArticle) {
          if (e.key === 'Backspace' || e.key === 'Escape') {
            e.preventDefault()
            backToDatabase()
          }
          return
        }
        if (isInventory) {
          if (e.key === 'ArrowDown') {
            e.preventDefault()
            setNodeIndex((i) => Math.min(i + 1, nodes.length - 1))
          } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            setNodeIndex((i) => Math.max(i - 1, 0))
          } else if (e.key === 'Backspace' || e.key === 'Escape') {
            e.preventDefault()
            backToDatabase()
          }
          return
        }
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
  }, [
    screen,
    opened,
    categoryIndex,
    nodes.length,
    isArticle,
    isInventory,
    openDatabase,
    openCategory,
    backToDatabase,
    backToBoot,
    backToHelix,
  ])

  return (
    <div className="animus-root">
      <AnimusBackground />
      <div className="animus-shell">
        <div className="animus-hud-top">
          <button
            type="button"
            className="animus-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle light/dark theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <a className="animus-dossier-link" href="/Vincent_Fezzuoglio_Resume.pdf" target="_blank" rel="noreferrer">
            DOWNLOAD DOSSIER
          </a>
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
              <h1 className="animus-boot-title">{profile.name}</h1>
              <p className="animus-boot-subtitle">{profile.title}</p>
              <span className="animus-boot-enter">PRESS ENTER TO ACCESS DATABASE</span>
            </div>
          )}

          {screen === 'database' && (
            <div className="animus-database-cascade">
              <HomeMenuBackdrop />
              <div className="animus-database-cascade-content">
                <HomeMenu
                  items={categoryItems}
                  selectedIndex={categoryIndex}
                  onHover={setCategoryIndex}
                  onSelect={openCategory}
                />
                <div className="animus-db-ghost">
                  <div className="animus-db-ghost-text">
                    {categories[categoryIndex].label}
                    <span className="animus-db-desc">{categories[categoryIndex].description}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {screen === 'category' && activeCategory.id === 'summary' && (
            <DatabaseArticle categoryLabel={activeCategory.label} title={profile.title} body={profile.blurb}>
              <div className="animus-contact-grid">
                <a className="animus-contact-link" href={`mailto:${profile.email}`}>
                  <span className="label">Email</span>
                  <span className="value">{profile.email}</span>
                </a>
                <a className="animus-contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                  <span className="label">LinkedIn</span>
                  <span className="value">linkedin.com/in/vincent-fezzuoglio</span>
                </a>
                <a className="animus-contact-link" href={profile.github} target="_blank" rel="noreferrer">
                  <span className="label">GitHub</span>
                  <span className="value">github.com/vfezzuoglio</span>
                </a>
              </div>
            </DatabaseArticle>
          )}

          {screen === 'category' && activeCategory.id === 'contact' && (
            <DatabaseArticle
              categoryLabel={activeCategory.label}
              title="Get in Touch"
              body="I'm always open to discussing new opportunities, projects, or just talking shop. Reach out through any of the channels below."
            >
              <div className="animus-contact-grid">
                <a className="animus-contact-link" href={`mailto:${profile.email}`}>
                  <span className="label">Transmit Message</span>
                  <span className="value">{profile.email}</span>
                </a>
                <a className="animus-contact-link" href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}>
                  <span className="label">Direct Channel</span>
                  <span className="value">{profile.phone}</span>
                </a>
                <a className="animus-contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                  <span className="label">LinkedIn</span>
                  <span className="value">vincent-fezzuoglio</span>
                </a>
                <a className="animus-contact-link" href={profile.github} target="_blank" rel="noreferrer">
                  <span className="label">GitHub</span>
                  <span className="value">vfezzuoglio</span>
                </a>
                <a
                  className="animus-contact-link"
                  href={`https://${profile.website}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="label">Network Node</span>
                  <span className="value">{profile.website}</span>
                </a>
                <a className="animus-contact-link" href="/Vincent_Fezzuoglio_Resume.pdf" target="_blank" rel="noreferrer">
                  <span className="label">Dossier</span>
                  <span className="value">Download résumé</span>
                </a>
              </div>
            </DatabaseArticle>
          )}

          {screen === 'category' && activeCategory.id === 'skills' && (
            <InventoryView
              headerLabel={activeCategory.label}
              sidebarItems={nodes.map((n) => ({ id: n.id, label: n.title, children: n.skillItems }))}
              selectedIndex={nodeIndex}
              onSelect={setNodeIndex}
              chips={(activeNode.skillItems ?? []).map((item) => ({ key: item, label: item }))}
            />
          )}

          {screen === 'category' && activeCategory.id === 'certifications' && (
            <InventoryView
              headerLabel={activeCategory.label}
              sidebarItems={nodes.map((n) => ({ id: n.id, label: n.title }))}
              selectedIndex={nodeIndex}
              onSelect={setNodeIndex}
              chips={nodes.map((n, i) => ({
                key: n.id,
                label: n.title,
                sublabel: n.date,
                active: i === nodeIndex,
              }))}
            />
          )}

          {screen === 'category' && !isArticle && !isInventory && (
            <HelixView
              categoryLabel={activeCategory.label}
              nodes={nodes}
              selectedIndex={nodeIndex}
              onHoverNode={setNodeIndex}
              onOpenNode={(index) => {
                setNodeIndex(index)
                setOpened(true)
              }}
              opened={opened}
            />
          )}
        </div>

        {screen === 'category' && !isArticle && !isInventory && opened && (
          <NodeDetailModal node={activeNode} categoryLabel={activeCategory.label} onClose={backToHelix} />
        )}

        <div className="animus-hud-bottom">
          <div className="animus-breadcrumb">
            <span className="animus-diamond" />
            <button type="button" onClick={backToBoot} disabled={screen === 'boot'}>
              HOME
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
            {screen === 'category' && isArticle && (
              <span className="animus-key animus-key-article">
                <kbd>Backspace</kbd> Back
              </span>
            )}
            {screen === 'category' && isInventory && (
              <>
                <span className="animus-key">
                  <kbd>↑↓</kbd> Navigate
                </span>
                <span className="animus-key">
                  <kbd>Backspace</kbd> Back
                </span>
              </>
            )}
            {screen === 'category' && !isArticle && !isInventory && !opened && (
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
            {screen === 'category' && !isArticle && !isInventory && opened && (
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
