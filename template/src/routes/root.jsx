import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'
import './root.css'

function Root() {
  const { t, i18n } = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  return (
    <div className="root">
      <header className="root-header">
        <ul>
          <li>
            <Link to={'/children'} className="testLink">
              Route for embed children
            </Link>
          </li>
          <li>
            <Link to={'/other'}>Another Route</Link>
          </li>
          <li>
            <Link to={'/error'}>Error Route</Link>
          </li>
        </ul>
      </header>
      <section id="main-container">
        <span>
          <button onClick={() => changeLanguage('fr')}>fr</button>
          <button onClick={() => changeLanguage('en')}>en</button>
        </span>
        <br />
        <Trans i18nKey="title">{t('title')}</Trans>
        <br />
        <Trans i18nKey="description.part1">{t('description.part1')}</Trans>
        <br />
        <Trans i18nKey="description.part2">{t('description.part2')}</Trans>
        <br />
        <div className="details">
          <Outlet />
        </div>
      </section>
    </div>
  )
}

export default Root
