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
      <div className="details">
        <Outlet />
      </div>
      <header className="root-header">
        <span>
          <button onClick={() => changeLanguage('fr')}>fr</button>
          <button onClick={() => changeLanguage('en')}>en</button>
        </span>
        <Trans i18nKey="title">{t('title')}</Trans>
        <br />
        <Trans i18nKey="description.part1">{t('description.part1')}</Trans>
        <br />
        <Trans i18nKey="description.part2">{t('description.part2')}</Trans>
        <br />
        <p>
          <Link to={'/children'} className="testLink">
            Route for embed children
          </Link>
          <br />
          <Link to={'/other'}>Another Route</Link>
          <br />
          <Link to={'/error'}>Error Route</Link>
        </p>
      </header>
    </div>
  )
}

export default Root
