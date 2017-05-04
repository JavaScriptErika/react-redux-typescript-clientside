import * as React from 'react'
import { css } from 'aphrodite/no-important'
import { styles, bg } from './Home.styles'

export class Home extends React.Component<{}, {}> {
    render() {
        return (
            <div className={css(styles.wrapper, bg.gradients)}>
                <div className={css(styles.navBar)}>
                    <img className={css(styles.iconMenu)} src='assets/menu.svg' />
                    <h1 className={css(styles.textLogo)}>XVERSE</h1>
                    <img className={css(styles.iconSignIn)} src='assets/sign-in.svg' />
                </div>
                <div className={css(styles.homepage)}>
                    <div className={css(styles.searchContainer)}>
                        <h2>Search for a notable person.</h2>
                        <input
                            className={css(styles.search)}
                            type='text'
                            placeholder='Michael Jackson'
                        />
                    </div>
                </div>
            </div>
        )
    }
}
