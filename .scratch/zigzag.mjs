import { chromium } from 'playwright'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
const errors = []
page.on('pageerror', (e) => errors.push(String(e)))
page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()) })

await page.goto('http://localhost:5173', { waitUntil: 'networkidle' })
await page.waitForTimeout(400)
await page.click('.animus-boot')
await page.waitForSelector('.animus-homemenu')
await page.waitForTimeout(300)
await page.screenshot({ path: '.scratch/01-zigzag.png' })

await page.hover('.animus-homemenu-item >> text=PROJECTS')
await page.waitForTimeout(200)
await page.screenshot({ path: '.scratch/02-zigzag-hover.png' })

console.log('CONSOLE_ERRORS', JSON.stringify(errors))
await browser.close()
