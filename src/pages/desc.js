import React from 'react';

export default class DescPage extends React.Component {
  render() {
    return (
      <div>
        <div className="cell">
          <article className="article">
            <h1 className="article-title">TemplateMonster Test Assignment</h1>
            <div className="article-body">
              <p>
                Junior Front-End Developer
              </p>
              <blockquote>
                Задача реалізувати міні-твіттер, без серверної сторони.

                є юзери, у кожного з них є пости, до постів можна залишати комментарі.

                Залишати коментарі можуть лише аутентифіковані користувачі(разом з текстом

                коментаря мусить відображатись ім’я автора).

                Аутентифікація - одне поле для логіну та кнопка ‘Sign In’ після введення логіну

                користувач вважається аутентифікованим.

                CSS оформлення не обов’зкове.

                Не треба робити весь інтерфейс, суто функціонал відображення стрічки постів з

                коментарями. <br /><br />

                + аргументувати вибір технологій.

                Що і чому використав для бізнес-логіки:

                Flux/Redux чи щось інше.
              </blockquote>
            </div>
          </article>
        </div>

      </div>
    )
  }
}
