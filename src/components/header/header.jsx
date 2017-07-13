import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <div
        className="header">
        <div
          className="header__logo">
          Техноплейс
        </div>
        <div className="header__item">
          <i
            className="fa fa-user-plus header__ref-icon"
            aria-hidden="true"/>
          Зарегестрирроватся
        </div>
        <div
          className="header__item">
          <i
            className="fa fa-sign-in header__ref-icon"
            aria-hidden="true"/>
          Войти
        </div>
      </div>
    )
  }
}